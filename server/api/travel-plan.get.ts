import {
  DEFAULT_TRAVEL_ARRIVAL_BUFFER_DAYS,
  DEFAULT_TRAVEL_ORIGIN_IATA,
  DEFAULT_TRAVEL_ORIGIN_LABEL,
  buildOpenStreetMapEmbedUrl,
  buildOpenStreetMapUrl,
  buildTravelFallbackPlan,
  formatCurrencyAmount,
  formatMinutesAsDuration,
  parseIsoDurationToMinutes,
  type TravelPlannerHighlight,
  type TravelPlannerMap,
} from '~/utils/travel-planner'

interface AmadeusTokenResponse {
  access_token: string
}

interface AmadeusLocation {
  name?: string
  iataCode?: string
  address?: {
    cityName?: string
    countryCode?: string
  }
}

interface AmadeusLocationsResponse {
  data?: AmadeusLocation[]
}

interface AmadeusFlightOffer {
  id: string
  price: {
    grandTotal: string
    currency: string
  }
  itineraries: Array<{
    duration?: string
    segments: Array<{
      carrierCode?: string
      departure: {
        iataCode?: string
      }
      arrival: {
        iataCode?: string
      }
    }>
  }>
}

interface AmadeusFlightOffersResponse {
  data?: AmadeusFlightOffer[]
}

interface NominatimSearchResult {
  lat: string
  lon: string
  display_name?: string
}

const sanitizeQueryValue = (value: unknown) => {
  if (typeof value === 'string') return value.trim()
  if (Array.isArray(value)) return String(value[0] ?? '').trim()
  return ''
}

const fetchJson = async <T>(input: string, init?: RequestInit) => {
  const response = await fetch(input, init)

  if (!response.ok) {
    throw new Error(`Request failed with ${response.status}`)
  }

  return response.json() as Promise<T>
}

const nominatimCache = new Map<string, TravelPlannerMap | null>()

const buildUrl = (baseUrl: string, pathname: string, query?: Record<string, string>) => {
  const url = new URL(pathname, baseUrl)

  if (query) {
    for (const [key, value] of Object.entries(query)) {
      url.searchParams.set(key, value)
    }
  }

  return url.toString()
}

const fetchVenueMap = async (location: string, country: string) => {
  const queryVariants = [
    `${location}, ${country}`,
    country,
  ]

  for (const query of queryVariants) {
    const cacheKey = query.toLowerCase()

    if (nominatimCache.has(cacheKey)) {
      return nominatimCache.get(cacheKey) ?? null
    }

    try {
      const response = await fetchJson<NominatimSearchResult[]>(
        buildUrl('https://nominatim.openstreetmap.org', '/search', {
          format: 'jsonv2',
          limit: '1',
          q: query,
        }),
        {
          headers: {
            'User-Agent': 'CICMUN-CALENDAR/1.0 (popup travel planner)',
            'Accept-Language': 'en',
          },
        },
      )

      const result = response[0]

      if (!result) {
        nominatimCache.set(cacheKey, null)
        continue
      }

      const lat = Number(result.lat)
      const lon = Number(result.lon)

      if (!Number.isFinite(lat) || !Number.isFinite(lon)) {
        nominatimCache.set(cacheKey, null)
        continue
      }

      const map: TravelPlannerMap = {
        title: 'Venue map',
        caption: result.display_name || `${location}, ${country}`,
        embedUrl: buildOpenStreetMapEmbedUrl(lat, lon),
        openUrl: buildOpenStreetMapUrl(lat, lon),
        attribution: 'Map data © OpenStreetMap contributors',
      }

      nominatimCache.set(cacheKey, map)
      return map
    } catch {
      nominatimCache.set(cacheKey, null)
    }
  }

  return null
}

const getLocationName = (location: AmadeusLocation) => (
  location.address?.cityName
  || location.name
  || location.iataCode
  || 'Destination airport'
)

const scoreLocation = (location: AmadeusLocation, city: string, destinationKey: string) => {
  const locationName = getLocationName(location).toLowerCase()
  const normalizedCity = city.toLowerCase()
  const normalizedDestinationKey = destinationKey.toUpperCase()
  let score = 0

  if (locationName === normalizedCity) score += 5
  if (locationName.includes(normalizedCity)) score += 3
  if (normalizedDestinationKey && location.address?.countryCode === normalizedDestinationKey) score += 2
  if (location.iataCode) score += 1

  return score
}

const pickBestLocation = (locations: AmadeusLocation[], city: string, destinationKey: string) => (
  [...locations]
    .filter((location) => Boolean(location.iataCode))
    .sort((left, right) => scoreLocation(right, city, destinationKey) - scoreLocation(left, city, destinationKey))
    .at(0)
    ?? null
)

const fetchAmadeusToken = async (baseUrl: string, clientId: string, clientSecret: string) => {
  const body = new URLSearchParams({
    grant_type: 'client_credentials',
    client_id: clientId,
    client_secret: clientSecret,
  })

  const response = await fetchJson<AmadeusTokenResponse>(buildUrl(baseUrl, '/v1/security/oauth2/token'), {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: body.toString(),
  })

  return response.access_token
}

const searchDestinationLocation = async (baseUrl: string, token: string, city: string, destinationKey: string) => {
  const response = await fetchJson<AmadeusLocationsResponse>(buildUrl(baseUrl, '/v1/reference-data/locations', {
    keyword: city,
    subType: 'CITY',
    'page[limit]': '5',
  }), {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })

  return pickBestLocation(response.data ?? [], city, destinationKey)
}

const searchFlightOffers = async (baseUrl: string, token: string, originIata: string, destinationIata: string, departureDate: string) => {
  const response = await fetchJson<AmadeusFlightOffersResponse>(buildUrl(baseUrl, '/v2/shopping/flight-offers', {
    originLocationCode: originIata,
    destinationLocationCode: destinationIata,
    departureDate,
    adults: '1',
    max: '6',
    currencyCode: 'USD',
  }), {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })

  return response.data ?? []
}

const buildFlightHighlight = (
  eyebrow: string,
  offer: AmadeusFlightOffer,
  arrivalDeadlineLabel: string,
  tone: TravelPlannerHighlight['tone'],
  icon: string,
) => {
  const itinerary = offer.itineraries[0]
  const segments = itinerary?.segments ?? []
  const firstSegment = segments[0]
  const lastSegment = segments.at(-1)
  const stopCount = Math.max(segments.length - 1, 0)
  const durationLabel = formatMinutesAsDuration(parseIsoDurationToMinutes(itinerary?.duration))
  const priceLabel = formatCurrencyAmount(offer.price.grandTotal, offer.price.currency)
  const carrierLabel = [...new Set(segments.map((segment) => segment.carrierCode).filter(Boolean))].join(', ')

  return {
    eyebrow,
    title: `${firstSegment?.departure.iataCode ?? 'CCS'} to ${lastSegment?.arrival.iataCode ?? 'TBD'}`,
    summary: `${durationLabel} • ${stopCount === 0 ? 'Nonstop' : `${stopCount} stop${stopCount === 1 ? '' : 's'}`} • ${priceLabel}`,
    detail: `${carrierLabel ? `Carrier${carrierLabel.includes(',') ? 's' : ''}: ${carrierLabel}. ` : ''}Searches target arrival by ${arrivalDeadlineLabel}, one day before the event.`,
    icon,
    tone,
  } satisfies TravelPlannerHighlight
}

export default defineEventHandler(async (event) => {
  const query = getQuery(event)
  const city = sanitizeQueryValue(query.city)
  const country = sanitizeQueryValue(query.country)
  const location = sanitizeQueryValue(query.location)
  const startDate = sanitizeQueryValue(query.startDate)
  const destinationKey = sanitizeQueryValue(query.destinationKey)

  if (!city || !country || !location || !startDate) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Missing travel planner parameters',
    })
  }

  const config = useRuntimeConfig(event)
  const originLabel = config.public.travelOriginLabel || DEFAULT_TRAVEL_ORIGIN_LABEL
  const originIata = config.public.travelOriginIata || DEFAULT_TRAVEL_ORIGIN_IATA
  const arrivalBufferDays = Number(config.public.travelArrivalBufferDays || DEFAULT_TRAVEL_ARRIVAL_BUFFER_DAYS)
  const fallbackPlan = buildTravelFallbackPlan({
    originLabel,
    originIata,
    city,
    country,
    location,
    startDate,
    arrivalBufferDays,
  })
  const venueMap = await fetchVenueMap(location, country)
  fallbackPlan.map = venueMap

  if (!config.amadeusClientId || !config.amadeusClientSecret) {
    return fallbackPlan
  }

  try {
    const token = await fetchAmadeusToken(config.amadeusBaseUrl, config.amadeusClientId, config.amadeusClientSecret)
    const destination = await searchDestinationLocation(config.amadeusBaseUrl, token, city, destinationKey)

    if (!destination?.iataCode) {
      return fallbackPlan
    }

    const offers = await searchFlightOffers(
      config.amadeusBaseUrl,
      token,
      originIata,
      destination.iataCode,
      fallbackPlan.arrivalDeadline,
    )

    if (offers.length === 0) {
      return fallbackPlan
    }

    const cheapestOffer = [...offers].sort((left, right) => Number(left.price.grandTotal) - Number(right.price.grandTotal))[0]
    const fastestOffer = [...offers].sort((left, right) => {
      const leftDuration = parseIsoDurationToMinutes(left.itineraries[0]?.duration) ?? Number.POSITIVE_INFINITY
      const rightDuration = parseIsoDurationToMinutes(right.itineraries[0]?.duration) ?? Number.POSITIVE_INFINITY

      if (leftDuration !== rightDuration) return leftDuration - rightDuration

      return Number(left.price.grandTotal) - Number(right.price.grandTotal)
    })[0]

    const highlights: TravelPlannerHighlight[] = [
      fallbackPlan.highlights[0],
      buildFlightHighlight(
        'Fastest live flight',
        fastestOffer,
        fallbackPlan.arrivalDeadlineLabel,
        'emerald',
        'solar:rocket-2-bold-duotone',
      ),
    ]

    if (cheapestOffer.id !== fastestOffer.id) {
      highlights.push(buildFlightHighlight(
        'Budget live flight',
        cheapestOffer,
        fallbackPlan.arrivalDeadlineLabel,
        'sky',
        'solar:wallet-money-bold-duotone',
      ))
    }

    highlights.push(fallbackPlan.highlights[2])

    return {
      ...fallbackPlan,
      planningMode: 'amadeus' as const,
      strategyTitle: 'Live flight ranking + local transfer',
      strategySummary: `Use Amadeus to rank the air leg into ${getLocationName(destination)}, then keep the airport-to-venue leg tied to this specific conference.`,
      strategyNote: `Flight searches use ${fallbackPlan.arrivalDeadlineLabel} as the target arrival date so the traveler lands one day before the event starts.`,
      highlights,
      map: venueMap,
      disclaimer: 'Live flight suggestions depend on connected Amadeus credentials and carrier coverage. Confirm final fare, baggage rules, and schedules with the airline before booking.',
    }
  } catch {
    return fallbackPlan
  }
})
