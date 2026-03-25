<script setup lang="ts">
import { Icon } from '@iconify/vue'

import GlobalLoadingScreen from '~/components/global/GlobalLoadingScreen.vue'
import type { InternationalEvent } from '~/types/international'
import { countdownLabel, formatDate, formatDateRange, formatPrice, formatVisaLabel, getNextEvent, getStayWindowGuidance } from '~/utils/international-dashboard'

import EventInfoModal from '~/components/global/EventInfoModal.vue'
import StatusBadge from '~/components/international/StatusBadge.vue'

const route = useRoute()
const { getDestinationByKey } = useGlobalDataset()

const countryKey = computed(() => String(route.params.country ?? ''))
const destination = computed(() => getDestinationByKey(countryKey.value))

if (!destination.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Country not found',
  })
}

useSeoMeta({
  title: `${destination.value.label} | Global`,
  description: `Hidden country page for ${destination.value.label} international MUN events.`,
  robots: 'noindex, nofollow',
})

const todayIso = new Date().toISOString().slice(0, 10)
const selectedEvent = ref<InternationalEvent | null>(null)
const selectedYear = ref<'all' | string>('all')
const showOpenOnly = ref(false)
const isPageReady = ref(false)

const waitForRouteReady = async () => {
  const afterPaint = new Promise<void>((resolve) => {
    requestAnimationFrame(() => requestAnimationFrame(() => resolve()))
  })

  const idleTime = new Promise<void>((resolve) => {
    const requestIdleCallback = (window as typeof window & {
      requestIdleCallback?: (callback: () => void, options?: { timeout: number }) => number
    }).requestIdleCallback

    if (requestIdleCallback) {
      requestIdleCallback(() => resolve(), { timeout: 400 })
      return
    }

    window.setTimeout(() => resolve(), 0)
  })

  const minimumDelay = new Promise<void>((resolve) => {
    window.setTimeout(() => resolve(), 260)
  })

  await Promise.all([afterPaint, idleTime, minimumDelay])
  isPageReady.value = true
}

onMounted(() => {
  void waitForRouteReady()
})

const groupedByYear = computed(() => {
  const groups = new Map<string, InternationalEvent[]>()

  for (const event of destination.value!.events) {
    const year = event.startDate.slice(0, 4)
    const existing = groups.get(year) ?? []
    existing.push(event)
    groups.set(year, existing)
  }

  return [...groups.entries()]
    .map(([year, events]) => ({
      year,
      events,
    }))
    .sort((left, right) => right.year.localeCompare(left.year))
})

const openCount = computed(() => destination.value!.events.filter((event) => event.applicationsOpen).length)
const closedCount = computed(() => destination.value!.events.length - openCount.value)
const firstYear = computed(() => destination.value!.events[0]?.startDate.slice(0, 4) ?? 'TBD')
const lastYear = computed(() => destination.value!.events.at(-1)?.startDate.slice(0, 4) ?? 'TBD')
const nextEvent = computed(() => getNextEvent(destination.value!, todayIso))
const availableYears = computed(() => groupedByYear.value.map((group) => group.year))
const visibleYearGroups = computed(() => groupedByYear.value
  .filter((group) => selectedYear.value === 'all' || group.year === selectedYear.value)
  .map((group) => ({
    ...group,
    events: showOpenOnly.value
      ? group.events.filter((event) => event.applicationsOpen)
      : group.events,
  }))
  .filter((group) => group.events.length > 0))
const visibleEventCount = computed(() => visibleYearGroups.value.reduce((total, group) => total + group.events.length, 0))
const visaCategory = computed(() => destination.value!.visaPolicy.category)
const requiresVisaAction = computed(() => visaCategory.value !== 'visa-free')
const stayWindowGuidance = computed(() => getStayWindowGuidance(destination.value!.visaPolicy.stayLimit))
const isRegularVisaCountry = computed(() => visaCategory.value === 'visa-required')
const advisoryEyebrow = computed(() => (isRegularVisaCountry.value ? 'Visa Required' : 'E-Visa Advisory'))
const advisoryTitle = computed(() => (isRegularVisaCountry.value ? 'This country needs a regular visa' : 'This country still needs visa processing'))
const advisoryCopy = computed(() => (
  isRegularVisaCountry.value
    ? 'These events are shown for planning, but entry is not easy-access for the filtered passport. You need to secure the regular visa before traveling and re-check consular requirements before booking.'
    : 'These events are shown in the E-Visa section because entry is not visa-free for the filtered passport. Complete the eVisa flow or the visa-on-arrival process before travel and re-check the airline and official visa portal before booking.'
))

const visaTone = computed(() => {
  const category = destination.value!.visaPolicy.category

  if (category === 'visa-free') return 'visa-free' as const
  if (category === 'visa-required') return 'required' as const
  if (category === 'visa on arrival') return 'arrival' as const
  if (category === 'eTA') return 'eta' as const

  return 'visa' as const
})
</script>

<template>
  <main class="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(34,197,94,0.14),_transparent_28%),radial-gradient(circle_at_top_right,_rgba(14,165,233,0.16),_transparent_30%),linear-gradient(180deg,#f8fafc_0%,#f8fafc_42%,#eff6ff_100%)] px-4 py-8 md:px-6 md:py-10">
    <GlobalLoadingScreen
      v-if="!isPageReady"
      :title="`Preparing ${destination!.label}`"
      subtitle="Loading country details, yearly groups, and quick-look data."
    />

    <div v-else class="mx-auto max-w-6xl">
      <NuxtLink
        to="/global"
        class="mb-5 inline-flex items-center gap-2 rounded-full border border-slate-200/80 bg-white/85 px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm transition hover:border-slate-300 hover:text-slate-950"
      >
        <Icon icon="solar:arrow-left-line-duotone" class="size-4" />
        Back to flags
      </NuxtLink>

      <header class="global-panel overflow-hidden rounded-[32px] bg-[linear-gradient(135deg,#082f49,#0f172a)] px-6 py-7 text-white md:px-8 md:py-8">
        <div class="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div class="flex items-start gap-4">
            <GlobalSpriteFlag
              :destination-key="destination!.key"
              :emoji-flag="destination!.flag"
              wrapper-class="global-flag-frame h-16 aspect-[4/3] sm:h-20"
              image-class="object-cover"
              emoji-class="text-5xl"
              loading="eager"
            />

            <div class="space-y-3">
              <p class="text-[11px] font-semibold uppercase tracking-[0.18em] text-sky-100/70">
                Country Room
              </p>
              <h1 class="text-4xl font-extrabold tracking-[-0.06em] md:text-6xl">
                {{ destination!.label }}
              </h1>
              <p class="max-w-3xl text-sm leading-7 text-slate-200 md:text-base">
                See the events hosted in this country, grouped by year, with dates, visa notes, prices, and useful links.
              </p>
            </div>
          </div>

          <div class="flex flex-wrap gap-2">
            <span class="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-sky-50">
              <Icon icon="solar:passport-bold-duotone" class="size-4 text-sky-100" />
              <StatusBadge :label="formatVisaLabel(destination!.visaPolicy.category)" :tone="visaTone" size="md" />
            </span>
            <span class="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-sky-50">
              <Icon icon="solar:buildings-2-bold-duotone" class="size-4 text-sky-100" />
              {{ destination!.cities.length }} cit{{ destination!.cities.length === 1 ? 'y' : 'ies' }}
            </span>
            <span class="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-sky-50">
              <Icon icon="solar:calendar-mark-bold-duotone" class="size-4 text-sky-100" />
              {{ destination!.eventCount }} events
            </span>
          </div>
        </div>

        <div class="mt-7 grid gap-3 md:grid-cols-4">
          <article class="rounded-[24px] border border-white/10 bg-white/10 p-4">
            <div class="flex items-center justify-between gap-3">
              <p class="text-[11px] font-semibold uppercase tracking-[0.14em] text-sky-100/70">
                Open now
              </p>
              <span class="grid size-10 place-items-center rounded-2xl bg-emerald-400/12 text-emerald-200 ring-1 ring-inset ring-white/10">
                <Icon icon="solar:check-circle-bold-duotone" class="size-5" />
              </span>
            </div>
            <p class="mt-2 text-3xl font-semibold tracking-[-0.05em]">
              {{ openCount }}
            </p>
          </article>

          <article class="rounded-[24px] border border-white/10 bg-white/10 p-4">
            <div class="flex items-center justify-between gap-3">
              <p class="text-[11px] font-semibold uppercase tracking-[0.14em] text-sky-100/70">
                Closed now
              </p>
              <span class="grid size-10 place-items-center rounded-2xl bg-rose-400/12 text-rose-200 ring-1 ring-inset ring-white/10">
                <Icon icon="solar:close-circle-bold-duotone" class="size-5" />
              </span>
            </div>
            <p class="mt-2 text-3xl font-semibold tracking-[-0.05em]">
              {{ closedCount }}
            </p>
          </article>

          <article class="rounded-[24px] border border-white/10 bg-white/10 p-4">
            <div class="flex items-center justify-between gap-3">
              <p class="text-[11px] font-semibold uppercase tracking-[0.14em] text-sky-100/70">
                First year
              </p>
              <span class="grid size-10 place-items-center rounded-2xl bg-amber-400/12 text-amber-100 ring-1 ring-inset ring-white/10">
                <Icon icon="solar:calendar-search-bold-duotone" class="size-5" />
              </span>
            </div>
            <p class="mt-2 text-3xl font-semibold tracking-[-0.05em]">
              {{ firstYear }}
            </p>
          </article>

          <article class="rounded-[24px] border border-white/10 bg-white/10 p-4">
            <div class="flex items-center justify-between gap-3">
              <p class="text-[11px] font-semibold uppercase tracking-[0.14em] text-sky-100/70">
                Last year
              </p>
              <span class="grid size-10 place-items-center rounded-2xl bg-sky-400/12 text-sky-100 ring-1 ring-inset ring-white/10">
                <Icon icon="solar:calendar-bold-duotone" class="size-5" />
              </span>
            </div>
            <p class="mt-2 text-3xl font-semibold tracking-[-0.05em]">
              {{ lastYear }}
            </p>
          </article>
        </div>
      </header>

      <section
        v-if="nextEvent"
        class="global-panel mt-6 rounded-[28px] bg-[linear-gradient(135deg,rgba(14,165,233,0.1),rgba(255,255,255,0.96),rgba(16,185,129,0.08))] p-5 md:p-6"
      >
        <div class="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div class="space-y-3">
            <p class="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
              Next Event Highlight
            </p>
            <h2 class="text-3xl font-semibold tracking-[-0.05em] text-slate-950">
              {{ nextEvent.title }}
            </h2>
            <div class="flex flex-wrap items-center gap-2 text-sm text-slate-600">
              <span class="inline-flex items-center gap-2 rounded-full bg-sky-50 px-3 py-1.5 font-medium text-sky-900 ring-1 ring-inset ring-sky-100">
                <Icon icon="solar:calendar-date-bold-duotone" class="size-4 text-sky-600" />
                {{ formatDateRange(nextEvent.startDate, nextEvent.endDate) }}
              </span>
              <span class="inline-flex items-center gap-2 rounded-full bg-fuchsia-50 px-3 py-1.5 font-medium text-fuchsia-900 ring-1 ring-inset ring-fuchsia-100">
                <Icon icon="solar:routing-3-bold-duotone" class="size-4 text-fuchsia-600" />
                {{ nextEvent.city }}
              </span>
              <span class="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1.5 font-medium text-emerald-900 ring-1 ring-inset ring-emerald-100">
                <Icon icon="solar:wallet-money-bold-duotone" class="size-4 text-emerald-600" />
                {{ formatPrice(nextEvent.price) }}
              </span>
            </div>
            <p class="text-sm leading-7 text-slate-600">
              {{ countdownLabel(nextEvent.startDate, todayIso) }} | {{ nextEvent.applicationsOpen ? 'Applications are open.' : 'Applications are currently closed.' }}
            </p>
          </div>

          <div class="flex flex-wrap gap-3">
            <StatusBadge :label="nextEvent.applicationsOpen ? 'Open' : 'Closed'" :tone="nextEvent.applicationsOpen ? 'open' : 'closed'" size="md" />
            <button
              type="button"
              class="inline-flex items-center gap-2 rounded-full bg-slate-950 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800"
              @click="selectedEvent = nextEvent"
            >
              <Icon icon="solar:eye-bold-duotone" class="size-4" />
              Open quick look
            </button>
          </div>
        </div>
      </section>

      <section
        v-if="requiresVisaAction"
        class="mt-6 rounded-[28px] px-5 py-5 shadow-[0_18px_40px_rgba(15,23,42,0.08)]"
        :class="isRegularVisaCountry
          ? 'border border-rose-200/80 bg-[linear-gradient(180deg,rgba(255,241,242,0.98),rgba(255,228,230,0.96))] text-rose-950'
          : 'border border-amber-200/80 bg-[linear-gradient(180deg,rgba(255,247,237,0.98),rgba(254,243,199,0.96))] text-amber-950'"
      >
        <p
          class="text-[11px] font-semibold uppercase tracking-[0.18em]"
          :class="isRegularVisaCountry ? 'text-rose-700' : 'text-amber-700'"
        >
          {{ advisoryEyebrow }}
        </p>
        <h2 class="mt-2 text-2xl font-semibold tracking-[-0.04em]">
          {{ advisoryTitle }}
        </h2>
        <p class="mt-3 max-w-4xl text-sm leading-7">
          {{ advisoryCopy }}
        </p>
        <p class="mt-3 text-sm font-medium">
          {{ stayWindowGuidance.label }}
        </p>
      </section>

      <section class="mt-8 grid gap-6 lg:grid-cols-[320px,1fr]">
        <aside class="space-y-4">
          <article class="global-panel rounded-[24px] bg-white/96 p-5">
            <p class="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500">
              Entry Guidance
            </p>
            <div class="mt-4">
              <StatusBadge :label="formatVisaLabel(destination!.visaPolicy.category)" :tone="visaTone" size="md" />
            </div>
            <p class="mt-4 text-sm leading-7 text-slate-600">
              {{ destination!.visaPolicy.note }}
            </p>
            <p v-if="destination!.visaPolicy.stayLimit" class="mt-3 text-sm font-medium text-slate-500">
              Stay window: {{ destination!.visaPolicy.stayLimit }}
            </p>
          </article>

          <article class="global-panel rounded-[24px] bg-white/96 p-5">
            <p class="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500">
              Hosting cities
            </p>
            <div class="mt-4 flex flex-wrap gap-2">
              <span
                v-for="city in destination!.cities"
                :key="city"
                class="inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-semibold text-slate-700"
              >
                {{ city }}
              </span>
            </div>
          </article>

          <article class="global-panel rounded-[24px] bg-white/96 p-5">
            <p class="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500">
              Verification links
            </p>
            <div class="mt-4 grid gap-2">
              <a
                v-for="source in destination!.visaPolicy.sources"
                :key="source.url"
                :href="source.url"
                target="_blank"
                rel="noreferrer"
                class="inline-flex items-center justify-between gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-300 hover:bg-white hover:text-slate-950"
              >
                <span class="truncate">{{ source.label }}</span>
                <Icon icon="solar:square-top-down-line-duotone" class="size-[15px]" />
              </a>
            </div>
            <p class="mt-3 text-xs text-slate-500">
              Verified {{ formatDate(destination!.visaPolicy.verifiedAt) }}
            </p>
          </article>
        </aside>

        <section class="space-y-6">
          <div class="global-panel rounded-[24px] bg-white/96 p-5">
            <div class="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p class="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500">
                  Browse Events
                </p>
                <p class="mt-2 text-sm text-slate-600">
                  Showing {{ visibleEventCount }} of {{ destination!.eventCount }} events
                </p>
              </div>

              <button
                type="button"
                class="inline-flex items-center justify-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold transition"
                :class="showOpenOnly
                  ? 'border-emerald-200 bg-emerald-50 text-emerald-800'
                  : 'border-slate-200 bg-slate-50 text-slate-700 hover:border-slate-300 hover:bg-white hover:text-slate-950'"
                @click="showOpenOnly = !showOpenOnly"
              >
                <Icon :icon="showOpenOnly ? 'solar:check-circle-bold-duotone' : 'solar:filter-bold-duotone'" class="size-4" />
                {{ showOpenOnly ? 'Open only enabled' : 'Show open only' }}
              </button>
            </div>

            <div class="mt-4 flex flex-wrap gap-2">
              <button
                type="button"
                class="inline-flex items-center rounded-full border px-4 py-2 text-sm font-semibold transition"
                :class="selectedYear === 'all'
                  ? 'border-slate-900 bg-slate-900 text-white'
                  : 'border-slate-200 bg-slate-50 text-slate-700 hover:border-slate-300 hover:bg-white hover:text-slate-950'"
                @click="selectedYear = 'all'"
              >
                All years
              </button>
              <button
                v-for="year in availableYears"
                :key="year"
                type="button"
                class="inline-flex items-center rounded-full border px-4 py-2 text-sm font-semibold transition"
                :class="selectedYear === year
                  ? 'border-slate-900 bg-slate-900 text-white'
                  : 'border-slate-200 bg-slate-50 text-slate-700 hover:border-slate-300 hover:bg-white hover:text-slate-950'"
                @click="selectedYear = year"
              >
                {{ year }}
              </button>
            </div>
          </div>

          <div
            v-for="yearGroup in visibleYearGroups"
            :key="yearGroup.year"
            class="global-panel render-section rounded-[28px] bg-white/96 p-5 md:p-6"
            v-memo="[yearGroup.year, yearGroup.events.length, selectedYear, showOpenOnly]"
          >
            <div class="mb-5 flex items-center justify-between gap-4">
              <div>
                <p class="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500">
                  Event year
                </p>
                <h2 class="mt-1 text-3xl font-semibold tracking-[-0.05em] text-slate-950">
                  {{ yearGroup.year }}
                </h2>
              </div>
              <span class="inline-flex items-center rounded-full bg-slate-900 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-white">
                {{ yearGroup.events.length }} item{{ yearGroup.events.length === 1 ? '' : 's' }}
              </span>
            </div>

            <div class="grid gap-4">
              <button
                v-for="event in yearGroup.events"
                :key="event.id"
                type="button"
                class="global-card render-card group rounded-[24px] p-5 text-left transition-colors duration-150 hover:border-slate-300"
                @click="selectedEvent = event"
                v-memo="[event.id, event.applicationsOpen, event.verified, event.visaPolicy.category]"
              >
                <div class="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                  <div class="space-y-3">
                    <div class="flex flex-wrap items-center gap-2">
                      <span class="inline-flex items-center rounded-full bg-amber-100 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-amber-800">
                        {{ event.startDate.slice(0, 4) }}
                      </span>
                      <StatusBadge :label="event.applicationsOpen ? 'Open' : 'Closed'" :tone="event.applicationsOpen ? 'open' : 'closed'" />
                    </div>

                    <h3 class="text-2xl font-semibold tracking-[-0.04em] text-slate-950">
                      {{ event.title }}
                    </h3>

                    <div class="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-slate-600">
                      <span class="inline-flex items-center gap-2 rounded-full bg-sky-50 px-3 py-1.5 font-medium text-sky-900 ring-1 ring-inset ring-sky-100">
                        <Icon icon="solar:calendar-date-bold-duotone" class="size-[16px] text-sky-600" />
                        {{ formatDateRange(event.startDate, event.endDate) }}
                      </span>
                      <span class="inline-flex items-center gap-2 rounded-full bg-fuchsia-50 px-3 py-1.5 font-medium text-fuchsia-900 ring-1 ring-inset ring-fuchsia-100">
                        <Icon icon="solar:routing-3-bold-duotone" class="size-[16px] text-fuchsia-600" />
                        {{ event.city }}
                      </span>
                      <span class="inline-flex items-center gap-2 rounded-full bg-amber-50 px-3 py-1.5 font-semibold text-amber-950 ring-1 ring-inset ring-amber-100">
                        <Icon icon="solar:stopwatch-bold-duotone" class="size-[15px] text-amber-600" />
                        Event duration: {{ event.durationDays }} day{{ event.durationDays === 1 ? '' : 's' }}
                      </span>
                    </div>
                  </div>

                  <div class="flex flex-col items-start gap-3 lg:items-end">
                    <span class="inline-flex items-center rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-emerald-700 ring-1 ring-inset ring-emerald-200">
                      {{ countdownLabel(event.startDate, todayIso) }}
                    </span>
                  </div>
                </div>

                <div class="mt-4 grid gap-3 border-t border-slate-200/80 pt-4 md:grid-cols-3">
                  <p class="inline-flex items-center gap-2 rounded-2xl bg-emerald-50 px-3 py-2 text-sm font-semibold text-emerald-900 ring-1 ring-inset ring-emerald-100">
                    <Icon icon="solar:wallet-money-bold-duotone" class="size-4 text-emerald-600" />
                    Price: {{ formatPrice(event.price) }}
                  </p>
                  <p
                    class="inline-flex items-center gap-2 rounded-2xl px-3 py-2 text-sm font-semibold ring-1 ring-inset"
                    :class="event.verified
                      ? 'bg-sky-50 text-sky-900 ring-sky-100'
                      : 'bg-slate-100 text-slate-700 ring-slate-200'"
                  >
                    <Icon
                      :icon="event.verified ? 'solar:verified-check-bold-duotone' : 'solar:shield-cross-bold-duotone'"
                      class="size-4"
                      :class="event.verified ? 'text-sky-600' : 'text-slate-500'"
                    />
                    Verified: {{ event.verified ? 'Yes' : 'No' }}
                  </p>
                  <p
                    class="inline-flex items-center gap-2 rounded-2xl px-3 py-2 text-sm font-semibold ring-1 ring-inset"
                    :class="event.visaPolicy.category === 'visa-free'
                      ? 'bg-emerald-50 text-emerald-900 ring-emerald-100'
                      : event.visaPolicy.category === 'visa-required'
                        ? 'bg-rose-50 text-rose-900 ring-rose-100'
                        : 'bg-amber-50 text-amber-950 ring-amber-100'"
                  >
                    <Icon
                      :icon="event.visaPolicy.category === 'visa-free'
                        ? 'solar:shield-check-bold-duotone'
                        : event.visaPolicy.category === 'visa-required'
                          ? 'solar:danger-circle-bold-duotone'
                          : 'solar:passport-bold-duotone'"
                      class="size-4"
                      :class="event.visaPolicy.category === 'visa-free'
                        ? 'text-emerald-600'
                        : event.visaPolicy.category === 'visa-required'
                          ? 'text-rose-600'
                          : 'text-amber-600'"
                    />
                    Visa: {{ formatVisaLabel(event.visaPolicy.category) }}
                  </p>
                </div>
              </button>
            </div>
          </div>

          <article
            v-if="visibleYearGroups.length === 0"
            class="rounded-[30px] border border-dashed border-slate-300 bg-white/75 p-8 text-center shadow-[0_18px_50px_rgba(15,23,42,0.05)]"
          >
            <p class="text-lg font-semibold tracking-[-0.03em] text-slate-900">
              No events match this view.
            </p>
            <p class="mt-2 text-sm leading-7 text-slate-500">
              Try another year or disable the open-only filter.
            </p>
          </article>
        </section>
      </section>
    </div>

    <EventInfoModal :event="selectedEvent" @close="selectedEvent = null" />
  </main>
</template>
