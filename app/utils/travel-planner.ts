export type TravelPlannerTone = 'sky' | 'emerald' | 'violet' | 'slate' | 'amber'

export interface TravelPlannerHighlight {
  eyebrow: string
  title: string
  summary: string
  detail?: string
  icon: string
  tone: TravelPlannerTone
}

export interface TravelPlannerLink {
  label: string
  description: string
  url: string
  icon: string
}

export interface TravelPlannerMap {
  title: string
  caption: string
  embedUrl: string
  openUrl: string
  attribution: string
}

export interface TravelPlannerResponse {
  originLabel: string
  venueLabel: string
  arrivalDeadline: string
  arrivalDeadlineLabel: string
  planningMode: 'fallback' | 'amadeus'
  strategyTitle: string
  strategySummary: string
  strategyNote: string
  highlights: TravelPlannerHighlight[]
  links: TravelPlannerLink[]
  map: TravelPlannerMap | null
  disclaimer: string
}

export interface TravelPlannerFallbackInput {
  originLabel: string
  originIata: string
  city: string
  country: string
  location: string
  startDate: string
  arrivalBufferDays: number
}

export const DEFAULT_TRAVEL_ORIGIN_LABEL = 'Caracas, Venezuela'
export const DEFAULT_TRAVEL_ORIGIN_IATA = 'CCS'
export const DEFAULT_TRAVEL_ARRIVAL_BUFFER_DAYS = 1

export const subtractDaysFromIsoDate = (isoDate: string, days: number) => {
  const date = new Date(`${isoDate}T12:00:00Z`)
  date.setUTCDate(date.getUTCDate() - days)
  return date.toISOString().slice(0, 10)
}

export const formatTravelDate = (isoDate: string) => new Intl.DateTimeFormat('en-US', {
  month: 'short',
  day: 'numeric',
  year: 'numeric',
}).format(new Date(`${isoDate}T12:00:00Z`))

export const buildGoogleMapsDirectionsUrl = (origin: string, destination: string) => {
  const params = new URLSearchParams({
    api: '1',
    origin,
    destination,
    travelmode: 'transit',
  })

  return `https://www.google.com/maps/dir/?${params.toString()}`
}

export const buildGoogleMapsSearchUrl = (query: string) => {
  const params = new URLSearchParams({
    api: '1',
    query,
  })

  return `https://www.google.com/maps/search/?${params.toString()}`
}

export const buildGoogleSearchUrl = (query: string) => {
  const params = new URLSearchParams({
    q: query,
  })

  return `https://www.google.com/search?${params.toString()}`
}

export const buildRome2RioUrl = (origin: string, destination: string) => {
  const originPart = encodeURIComponent(origin)
  const destinationPart = encodeURIComponent(destination)

  return `https://www.rome2rio.com/s/${originPart}/${destinationPart}`
}

export const buildOpenStreetMapUrl = (lat: number, lon: number, zoom = 11) => (
  `https://www.openstreetmap.org/?mlat=${lat}&mlon=${lon}#map=${zoom}/${lat}/${lon}`
)

export const buildOpenStreetMapEmbedUrl = (lat: number, lon: number, zoom = 11) => {
  const latDelta = 0.08
  const lonDelta = Math.max(0.08, 0.12 / Math.max(Math.cos((lat * Math.PI) / 180), 0.35))
  const minLon = lon - lonDelta
  const minLat = lat - latDelta
  const maxLon = lon + lonDelta
  const maxLat = lat + latDelta
  const params = new URLSearchParams({
    bbox: `${minLon},${minLat},${maxLon},${maxLat}`,
    layer: 'mapnik',
    marker: `${lat},${lon}`,
  })

  return `https://www.openstreetmap.org/export/embed.html?${params.toString()}`
}

export const parseIsoDurationToMinutes = (isoDuration?: string | null) => {
  if (!isoDuration) return null

  const match = isoDuration.match(/^P(?:(\d+)D)?T(?:(\d+)H)?(?:(\d+)M)?$/)

  if (!match) return null

  const days = Number(match[1] ?? 0)
  const hours = Number(match[2] ?? 0)
  const minutes = Number(match[3] ?? 0)

  return (days * 24 * 60) + (hours * 60) + minutes
}

export const formatMinutesAsDuration = (minutes: number | null) => {
  if (minutes == null) return 'Duration unavailable'

  const hours = Math.floor(minutes / 60)
  const remainingMinutes = minutes % 60

  if (hours === 0) return `${remainingMinutes}m`
  if (remainingMinutes === 0) return `${hours}h`

  return `${hours}h ${remainingMinutes}m`
}

export const formatCurrencyAmount = (amount: string | number, currency: string) => {
  const numericAmount = typeof amount === 'number' ? amount : Number(amount)

  if (!Number.isFinite(numericAmount)) return `${amount} ${currency}`.trim()

  try {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency,
      maximumFractionDigits: 0,
    }).format(numericAmount)
  } catch {
    return `${numericAmount.toFixed(0)} ${currency}`.trim()
  }
}

export const buildTravelFallbackPlan = ({
  originLabel,
  originIata,
  city,
  country,
  location,
  startDate,
  arrivalBufferDays,
}: TravelPlannerFallbackInput): TravelPlannerResponse => {
  const arrivalDeadline = subtractDaysFromIsoDate(startDate, arrivalBufferDays)
  const arrivalDeadlineLabel = formatTravelDate(arrivalDeadline)
  const venueLabel = `${location}, ${country}`.replace(/\s+,/g, ',')
  const citySearchLabel = `${city}, ${country}`
  const flightSearchQuery = `flights from ${originIata} to ${city} arriving ${arrivalDeadline}`

  return {
    originLabel,
    venueLabel,
    arrivalDeadline,
    arrivalDeadlineLabel,
    planningMode: 'fallback',
    strategyTitle: 'Rome2Rio-first route plan',
    strategySummary: `Use Rome2Rio as the main route planner for the trip into ${city}, then keep the final transfer tied to this exact conference venue instead of the whole country.`,
    strategyNote: `Target arrival by ${arrivalDeadlineLabel}, one day before opening, so there is time to rest, settle in, and prepare.`,
    highlights: [
      {
        eyebrow: 'Arrival buffer',
        title: `Reach ${city} by ${arrivalDeadlineLabel}`,
        summary: 'This planner assumes a one-day buffer before the first session.',
        detail: 'Use that day for hotel check-in, accreditation, jet lag recovery, and local transport margin.',
        icon: 'solar:alarm-bold-duotone',
        tone: 'amber',
      },
      {
        eyebrow: 'Flight search',
        title: `${originIata} to ${city}`,
        summary: 'Use open web search to compare airline, OTA, and metasearch results without needing a flight API account.',
        detail: `Search against the ${arrivalDeadline} arrival target so the trip lands one day before the conference.`,
        icon: 'solar:airplane-takeoff-bold-duotone',
        tone: 'sky',
      },
      {
        eyebrow: 'Route compare',
        title: `${originLabel} to ${city}`,
        summary: 'Open a multimodal planner to compare flight, rail, and bus combinations around the host city.',
        detail: 'This is useful when the best airport is not in the exact host city or when nearby rail links make a cheaper arrival point viable.',
        icon: 'solar:global-bold-duotone',
        tone: 'violet',
      },
      {
        eyebrow: 'Last mile',
        title: `Airport to ${location}`,
        summary: 'Keep the final transfer tied to the selected conference venue, not the country.',
        detail: 'Ground directions should stay event-specific because different conferences in the same country may need different airports, trains, or bus legs.',
        icon: 'solar:routing-3-bold-duotone',
        tone: 'emerald',
      },
    ],
    links: [
      {
        label: 'Open Rome2Rio planner',
        description: `Compare mixed transport options for ${originLabel} to ${citySearchLabel}`,
        url: buildRome2RioUrl(originLabel, citySearchLabel),
        icon: 'solar:global-bold-duotone',
      },
      {
        label: 'Search flights on the web',
        description: `Open a browser search for ${originIata} to ${city} by ${arrivalDeadline}`,
        url: buildGoogleSearchUrl(flightSearchQuery),
        icon: 'solar:airplane-takeoff-bold-duotone',
      },
      {
        label: 'Open venue directions',
        description: `Transit route from ${originLabel} to ${venueLabel}`,
        url: buildGoogleMapsDirectionsUrl(originLabel, venueLabel),
        icon: 'solar:map-point-rotate-bold-duotone',
      },
      {
        label: 'Search nearby airport',
        description: `Find airport options for ${citySearchLabel}`,
        url: buildGoogleMapsSearchUrl(`airport near ${citySearchLabel}`),
        icon: 'solar:airplane-square-bold-duotone',
      },
      {
        label: 'Search hotels nearby',
        description: `Use the extra prep day around ${location}`,
        url: buildGoogleMapsSearchUrl(`hotels near ${venueLabel}`),
        icon: 'solar:bed-bold-duotone',
      },
    ],
    map: null,
    disclaimer: 'This no-account method gives you the arrival target, flight-search shortcut, multimodal lookup, and venue-specific transfer links without requiring a flight API login.',
  }
}
