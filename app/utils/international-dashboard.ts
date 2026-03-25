import type { InternationalDestination, InternationalEvent } from '~/types/international'

export type DestinationStatus = 'open' | 'upcoming' | 'closed'
export type RegionFilter = 'all' | 'europe' | 'asia'
export type DateRangeFilter = 'all' | '30' | '90' | '180' | '365'
export type SortOption = 'date' | 'country' | 'status'
export type ViewMode = 'grid' | 'list'
export type WeekendTimingKey = 'weekend' | 'near-weekend'

export interface WeekendTimingMeta {
  key: WeekendTimingKey
  label: string
  shortLabel: string
  description: string
  badgeClasses: string
  icon: string
}

export const PASSPORT_INDEX_FLAG_CODE_BY_DESTINATION_KEY: Record<string, string | null> = {
  albania: 'al',
  armenia: 'am',
  austria: 'at',
  azerbaijan: 'az',
  bahrain: 'bh',
  bangladesh: 'bd',
  belgium: 'be',
  bulgaria: 'bg',
  china: 'cn',
  croatia: 'hr',
  cyprus: 'cy',
  czechia: 'cz',
  denmark: 'dk',
  france: 'fr',
  georgia: 'ge',
  germany: 'de',
  greece: 'gr',
  'hong-kong': 'hk',
  hungary: 'hu',
  india: 'in',
  indonesia: 'id',
  italy: 'it',
  japan: 'jp',
  jordan: 'jo',
  kazakhstan: 'kz',
  kosovo: 'rk',
  kuwait: 'kw',
  lebanon: 'lb',
  luxembourg: 'lu',
  malaysia: 'my',
  malta: 'mt',
  moldova: 'md',
  nepal: 'np',
  netherlands: 'nl',
  norway: 'no',
  oman: 'om',
  pakistan: 'pk',
  palestine: 'ps',
  poland: 'pl',
  portugal: 'pt',
  romania: 'ro',
  russia: 'ru',
  'saudi-arabia': 'sa',
  serbia: 'rs',
  singapore: 'sg',
  slovakia: 'sk',
  'south-korea': 'kr',
  spain: 'es',
  sweden: 'se',
  switzerland: 'ch',
  syria: 'sy',
  thailand: 'th',
  turkiye: 'tr',
  'united-arab-emirates': 'ae',
  'united-kingdom': 'gb',
  uzbekistan: 'uz',
  vietnam: 'vn',
}

export const FLAG_CODE_BY_DESTINATION_KEY = PASSPORT_INDEX_FLAG_CODE_BY_DESTINATION_KEY

const EUROPE_DESTINATION_KEYS = new Set([
  'albania',
  'austria',
  'belgium',
  'bulgaria',
  'croatia',
  'cyprus',
  'czechia',
  'denmark',
  'france',
  'germany',
  'greece',
  'hungary',
  'italy',
  'kosovo',
  'luxembourg',
  'malta',
  'moldova',
  'netherlands',
  'norway',
  'poland',
  'portugal',
  'romania',
  'russia',
  'serbia',
  'slovakia',
  'spain',
  'sweden',
  'switzerland',
  'united-kingdom',
  'georgia',
  'armenia',
])

export const statusPriority: Record<DestinationStatus, number> = {
  open: 0,
  upcoming: 1,
  closed: 2,
}

const dateFormatter = new Intl.DateTimeFormat('en-US', {
  month: 'short',
  day: 'numeric',
  year: 'numeric',
})

const monthFormatter = new Intl.DateTimeFormat('en-US', {
  month: 'long',
  year: 'numeric',
})

const DAY_IN_MS = 86400000

const dateFromIso = (value: string) => new Date(`${value}T12:00:00Z`)

const isWeekendDay = (dayOfWeek: number) => dayOfWeek === 0 || dayOfWeek === 6
const isWeekendAdjacentDay = (dayOfWeek: number) => dayOfWeek === 1 || dayOfWeek === 5

export const formatDate = (value: string | null) => {
  if (!value) return 'TBD'
  return dateFormatter.format(new Date(`${value}T00:00:00`))
}

export const formatMonthLabel = (value: string) => {
  return monthFormatter.format(new Date(`${value}-01T00:00:00`))
}

export const formatDateRange = (startDate: string, endDate: string) => {
  if (startDate === endDate) return formatDate(startDate)
  return `${formatDate(startDate)} to ${formatDate(endDate)}`
}

export const formatPrice = (price: string) => (price === 'n/a' ? 'Price not published' : price)

export const formatVisaLabel = (category: string) => {
  if (category === 'visa-free') return 'No Visa'
  if (category === 'visa-required') return 'Visa Required'
  if (category === 'visa on arrival') return 'On Arrival'
  if (category === 'eVisa or visa on arrival') return 'e-Visa / Arrival'
  if (category === 'eTA') return 'e-Travel Auth'
  return 'e-Visa'
}

export const getStayLimitDays = (stayLimit: string | null) => {
  if (!stayLimit) return null

  const match = stayLimit.match(/(\d+)/)
  return match ? Number(match[1]) : null
}

export const getStayWindowGuidance = (
  stayLimit: string | null,
  minimumTripDays = 5,
) => {
  const days = getStayLimitDays(stayLimit)

  if (days === null) {
    return {
      days: null,
      enoughForConferenceTrip: null,
      label: 'Stay window needs manual verification',
      shortLabel: 'Stay window: verify',
    }
  }

  if (days >= minimumTripDays) {
    return {
      days,
      enoughForConferenceTrip: true,
      label: `Stay window covers a short MUN trip (${days} days)`,
      shortLabel: `${days}-day stay`,
    }
  }

  return {
    days,
    enoughForConferenceTrip: false,
    label: `Stay window is tight for a short MUN trip (${days} days)`,
    shortLabel: `${days}-day stay`,
  }
}

export const daysUntil = (value: string | null, todayIso: string) => {
  if (!value) return null

  const start = new Date(`${value}T00:00:00`)
  const today = new Date(`${todayIso}T00:00:00`)

  return Math.round((start.getTime() - today.getTime()) / 86400000)
}

export const countdownLabel = (value: string | null, todayIso: string) => {
  const difference = daysUntil(value, todayIso)

  if (difference === null) return 'Date TBD'
  if (difference === 0) return 'Starts today'
  if (difference === 1) return '1 day left'
  if (difference < 0) return 'In progress'
  return `${difference} days left`
}

export const getWeekendTimingMeta = (
  startDate: string | null,
  endDate: string | null,
): WeekendTimingMeta | null => {
  if (!startDate || !endDate) return null

  const start = dateFromIso(startDate)
  const end = dateFromIso(endDate)

  let includesWeekend = false
  let nearWeekend = false

  for (let cursor = start.getTime(); cursor <= end.getTime(); cursor += DAY_IN_MS) {
    const dayOfWeek = new Date(cursor).getUTCDay()

    if (isWeekendDay(dayOfWeek)) {
      includesWeekend = true
      break
    }

    if (isWeekendAdjacentDay(dayOfWeek)) {
      nearWeekend = true
    }
  }

  if (includesWeekend) {
    return {
      key: 'weekend',
      label: 'Weekend',
      shortLabel: 'Weekend',
      description: 'Includes Saturday or Sunday.',
      badgeClasses: 'bg-violet-50 text-violet-800 ring-violet-200',
      icon: 'solar:calendar-bold-duotone',
    }
  }

  if (nearWeekend) {
    return {
      key: 'near-weekend',
      label: 'Near weekend',
      shortLabel: 'Near weekend',
      description: 'Touches Friday or Monday.',
      badgeClasses: 'bg-indigo-50 text-indigo-800 ring-indigo-200',
      icon: 'solar:calendar-search-bold-duotone',
    }
  }

  return null
}

export const isWeekendFriendlyEvent = (event: Pick<InternationalEvent, 'startDate' | 'endDate'>) => {
  return Boolean(getWeekendTimingMeta(event.startDate, event.endDate))
}

export const getRegionForDestination = (destinationKey: string): Exclude<RegionFilter, 'all'> => {
  return EUROPE_DESTINATION_KEYS.has(destinationKey) ? 'europe' : 'asia'
}

export const getRegionLabel = (destinationKey: string) => {
  return getRegionForDestination(destinationKey) === 'europe' ? 'Europe' : 'Asia'
}

export const getNextEvent = (destination: InternationalDestination, todayIso: string) => {
  const futureEvent = destination.events.find((event) => event.endDate >= todayIso)
  return futureEvent ?? destination.events[0] ?? null
}

export const getDestinationStatus = (destination: InternationalDestination, todayIso: string): DestinationStatus => {
  const nextEvent = getNextEvent(destination, todayIso)

  if (!nextEvent) return 'closed'
  if (nextEvent.applicationsOpen) return 'open'

  const difference = daysUntil(nextEvent.startDate, todayIso)

  if (difference !== null && difference > 21) {
    return 'upcoming'
  }

  return 'closed'
}

export const destinationMatchesDateRange = (
  destination: InternationalDestination,
  dateRange: DateRangeFilter,
  todayIso: string,
) => {
  if (dateRange === 'all') return true

  const nextEvent = getNextEvent(destination, todayIso)
  const difference = daysUntil(nextEvent?.startDate ?? null, todayIso)

  if (difference === null) return false

  return difference >= 0 && difference <= Number(dateRange)
}

export const destinationMatchesSearch = (destination: InternationalDestination, query: string) => {
  const normalizedQuery = query.trim().toLowerCase()

  if (!normalizedQuery) return true

  const titles = destination.events.map((event) => event.title).join(' ').toLowerCase()
  const cities = destination.cities.join(' ').toLowerCase()
  const visa = formatVisaLabel(destination.visaPolicy.category).toLowerCase()

  return (
    destination.label.toLowerCase().includes(normalizedQuery) ||
    titles.includes(normalizedQuery) ||
    cities.includes(normalizedQuery) ||
    visa.includes(normalizedQuery)
  )
}

export const sortDestinations = (
  destinations: InternationalDestination[],
  sortBy: SortOption,
  todayIso: string,
) => {
  return [...destinations].sort((left, right) => {
    if (sortBy === 'country') {
      return left.label.localeCompare(right.label)
    }

    if (sortBy === 'status') {
      const statusDifference =
        statusPriority[getDestinationStatus(left, todayIso)] - statusPriority[getDestinationStatus(right, todayIso)]

      if (statusDifference !== 0) return statusDifference
    }

    const leftEvent = getNextEvent(left, todayIso)
    const rightEvent = getNextEvent(right, todayIso)
    const leftDate = leftEvent?.startDate ?? ''
    const rightDate = rightEvent?.startDate ?? ''

    if (leftDate !== rightDate) {
      return leftDate.localeCompare(rightDate)
    }

    if (left.eventCount !== right.eventCount) {
      return right.eventCount - left.eventCount
    }

    return left.label.localeCompare(right.label)
  })
}

export const groupEventsByMonth = (events: InternationalEvent[]) => {
  const groups = new Map<string, InternationalEvent[]>()

  for (const event of events) {
    if (!groups.has(event.startMonth)) {
      groups.set(event.startMonth, [])
    }

    groups.get(event.startMonth)?.push(event)
  }

  return [...groups.entries()]
    .sort((left, right) => left[0].localeCompare(right[0]))
    .map(([month, monthEvents]) => ({
      month,
      label: formatMonthLabel(month),
      events: monthEvents,
    }))
}
