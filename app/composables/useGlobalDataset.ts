import globalDatasetRaw from '~~/output/mymun_calendar_eu_as_dates_cleaned.json'

import type { InternationalDataset, InternationalDestination, InternationalEvent } from '~/types/international'

type GlobalSection = {
  key: 'visa-free' | 'e-visa'
  title: string
  eyebrow: string
  description: string
  advisory: string | null
  requiresVisaAction: boolean
  destinations: InternationalDestination[]
  eventCount: number
}

const MAX_EVENT_DURATION_DAYS = 3
const VISA_FREE_CATEGORIES = new Set(['visa-free'])
const E_VISA_CATEGORIES = new Set(['eVisa', 'visa on arrival', 'eVisa or visa on arrival', 'eTA'])

const sourceDataset = globalDatasetRaw as InternationalDataset

const sortDestinations = (destinations: InternationalDestination[]) => [...destinations].sort((left, right) => {
  if (right.eventCount !== left.eventCount) {
    return right.eventCount - left.eventCount
  }

  return left.label.localeCompare(right.label)
})

const sortEvents = (events: InternationalEvent[]) => [...events].sort((left, right) => {
  if (left.startDate !== right.startDate) return left.startDate.localeCompare(right.startDate)
  if (left.endDate !== right.endDate) return left.endDate.localeCompare(right.endDate)
  return left.title.localeCompare(right.title)
})

const buildDestinations = (events: InternationalEvent[]) => {
  const destinationGroups = new Map<string, InternationalDestination>()

  for (const event of sortEvents(events)) {
    const existing = destinationGroups.get(event.destinationKey)

    if (!existing) {
      destinationGroups.set(event.destinationKey, {
        key: event.destinationKey,
        label: event.destinationLabel,
        flag: event.destinationFlag,
        visaPolicy: event.visaPolicy,
        eventCount: 1,
        nextEventDate: event.startDate,
        lastEventDate: event.endDate,
        cities: [event.city],
        events: [event],
      })
      continue
    }

    existing.events.push(event)
    existing.eventCount += 1
    existing.nextEventDate = existing.nextEventDate && existing.nextEventDate < event.startDate
      ? existing.nextEventDate
      : event.startDate
    existing.lastEventDate = existing.lastEventDate && existing.lastEventDate > event.endDate
      ? existing.lastEventDate
      : event.endDate

    if (!existing.cities.includes(event.city)) {
      existing.cities.push(event.city)
      existing.cities.sort((left, right) => left.localeCompare(right))
    }
  }

  return sortDestinations([...destinationGroups.values()])
}

const visibleEvents = sortEvents(
  (sourceDataset.events ?? []).filter((event) =>
    event.durationDays <= MAX_EVENT_DURATION_DAYS &&
    (VISA_FREE_CATEGORIES.has(event.visaPolicy.category) || E_VISA_CATEGORIES.has(event.visaPolicy.category)),
  ),
)

const visaFreeEvents = visibleEvents.filter((event) => VISA_FREE_CATEGORIES.has(event.visaPolicy.category))
const eVisaEvents = visibleEvents.filter((event) => E_VISA_CATEGORIES.has(event.visaPolicy.category))

const visaFreeDestinations = buildDestinations(visaFreeEvents)
const eVisaDestinations = buildDestinations(eVisaEvents)

const sections: GlobalSection[] = [
  {
    key: 'visa-free',
    title: 'Visa-Free',
    eyebrow: 'Fastest Entry',
    description: 'Destinations in the filtered JSON where a Venezuelan passport does not need a visa for these short events.',
    advisory: null,
    requiresVisaAction: false,
    destinations: visaFreeDestinations,
    eventCount: visaFreeEvents.length,
  },
  {
    key: 'e-visa',
    title: 'E-Visa',
    eyebrow: 'Needs Visa Action',
    description: 'Short-event destinations from the broader filtered JSON that use eVisa, eTA, visa on arrival, or mixed entry routes.',
    advisory: 'These events are not visa-free. You still need to complete an eVisa, eTA, or arrival-visa step before traveling.',
    requiresVisaAction: true,
    destinations: eVisaDestinations,
    eventCount: eVisaEvents.length,
  },
]

const allDestinations = sortDestinations([...visaFreeDestinations, ...eVisaDestinations])
const destinationMap = new Map<string, InternationalDestination>(
  allDestinations.map((destination) => [destination.key, destination]),
)

const visibleDataset: InternationalDataset = {
  metadata: sourceDataset.metadata,
  destinations: allDestinations,
  events: visibleEvents,
}

export const useGlobalDataset = () => {
  const getDestinationByKey = (key: string) => destinationMap.get(key) ?? null

  return {
    dataset: visibleDataset,
    destinations: allDestinations,
    visaFreeDestinations,
    eVisaDestinations,
    sections,
    getDestinationByKey,
  }
}
