<script setup lang="ts">
import { Icon } from '@iconify/vue'

import type { InternationalEvent } from '~/types/international'
import { FLAG_CODE_BY_DESTINATION_KEY, countdownLabel, formatDate, formatDateRange, formatPrice, formatVisaLabel, getStayWindowGuidance } from '~/utils/international-dashboard'

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

const groupedByYear = computed(() => {
  const groups = new Map<string, InternationalEvent[]>()

  for (const event of destination.value!.events) {
    const year = event.startDate.slice(0, 4)
    const existing = groups.get(year) ?? []
    existing.push(event)
    groups.set(year, existing)
  }

  return [...groups.entries()].map(([year, events]) => ({
    year,
    events,
  }))
})

const openCount = computed(() => destination.value!.events.filter((event) => event.applicationsOpen).length)
const closedCount = computed(() => destination.value!.events.length - openCount.value)
const firstYear = computed(() => destination.value!.events[0]?.startDate.slice(0, 4) ?? 'TBD')
const lastYear = computed(() => destination.value!.events.at(-1)?.startDate.slice(0, 4) ?? 'TBD')
const requiresVisaAction = computed(() => destination.value!.visaPolicy.category !== 'visa-free')
const stayWindowGuidance = computed(() => getStayWindowGuidance(destination.value!.visaPolicy.stayLimit))

const visaTone = computed(() => {
  const category = destination.value!.visaPolicy.category

  if (category === 'visa-free') return 'visa-free' as const
  if (category === 'visa-required') return 'required' as const
  if (category === 'visa on arrival') return 'arrival' as const
  if (category === 'eTA') return 'eta' as const

  return 'visa' as const
})

const flagCode = computed(() => FLAG_CODE_BY_DESTINATION_KEY[destination.value!.key] ?? null)
</script>

<template>
  <main class="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(34,197,94,0.14),_transparent_28%),radial-gradient(circle_at_top_right,_rgba(14,165,233,0.16),_transparent_30%),linear-gradient(180deg,#f8fafc_0%,#f8fafc_42%,#eff6ff_100%)] px-4 py-8 md:px-6 md:py-10">
    <div class="mx-auto max-w-6xl">
      <NuxtLink
        to="/global"
        class="mb-5 inline-flex items-center gap-2 rounded-full border border-slate-200/80 bg-white/85 px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm transition hover:border-slate-300 hover:text-slate-950"
      >
        <Icon icon="solar:arrow-left-line-duotone" class="size-4" />
        Back to flags
      </NuxtLink>

      <header class="overflow-hidden rounded-[34px] border border-white/70 bg-[linear-gradient(135deg,rgba(8,47,73,0.96),rgba(15,23,42,0.96))] px-6 py-7 text-white shadow-[0_32px_90px_rgba(15,23,42,0.18)] md:px-8 md:py-8">
        <div class="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div class="flex items-start gap-4">
            <div class="flag-avatar-shell grid size-20 place-items-center rounded-full bg-white/12 shadow-[inset_0_1px_0_rgba(255,255,255,0.18)] backdrop-blur">
              <span v-if="flagCode" class="flag-avatar size-14 shadow-[0_14px_28px_rgba(15,23,42,0.24)]">
                <span
                  :class="['fi', 'fis', `fi-${flagCode}`]"
                  class="flag-avatar-flag"
                  aria-hidden="true"
                />
              </span>
              <span v-else class="text-5xl" aria-hidden="true">
                {{ destination!.flag }}
              </span>
            </div>

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
          <article class="rounded-[24px] border border-white/10 bg-white/8 p-4 backdrop-blur">
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

          <article class="rounded-[24px] border border-white/10 bg-white/8 p-4 backdrop-blur">
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

          <article class="rounded-[24px] border border-white/10 bg-white/8 p-4 backdrop-blur">
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

          <article class="rounded-[24px] border border-white/10 bg-white/8 p-4 backdrop-blur">
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
        v-if="requiresVisaAction"
        class="mt-6 rounded-[28px] border border-amber-200/80 bg-[linear-gradient(180deg,rgba(255,247,237,0.98),rgba(254,243,199,0.96))] px-5 py-5 text-amber-950 shadow-[0_18px_40px_rgba(180,83,9,0.08)]"
      >
        <p class="text-[11px] font-semibold uppercase tracking-[0.18em] text-amber-700">
          E-Visa Advisory
        </p>
        <h2 class="mt-2 text-2xl font-semibold tracking-[-0.04em]">
          This country still needs visa processing
        </h2>
        <p class="mt-3 max-w-4xl text-sm leading-7">
          These events are shown in the E-Visa section because entry is not visa-free for the filtered passport. Complete the eVisa flow or the visa-on-arrival process before travel and re-check the airline and official visa portal before booking.
        </p>
        <p class="mt-3 text-sm font-medium">
          {{ stayWindowGuidance.label }}
        </p>
      </section>

      <section class="mt-8 grid gap-6 lg:grid-cols-[320px,1fr]">
        <aside class="space-y-4">
          <article class="rounded-[28px] border border-white/70 bg-white/85 p-5 shadow-[0_18px_50px_rgba(15,23,42,0.08)] backdrop-blur">
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

          <article class="rounded-[28px] border border-white/70 bg-white/85 p-5 shadow-[0_18px_50px_rgba(15,23,42,0.08)] backdrop-blur">
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

          <article class="rounded-[28px] border border-white/70 bg-white/85 p-5 shadow-[0_18px_50px_rgba(15,23,42,0.08)] backdrop-blur">
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
          <div
            v-for="yearGroup in groupedByYear"
            :key="yearGroup.year"
            class="rounded-[30px] border border-white/70 bg-white/82 p-5 shadow-[0_18px_50px_rgba(15,23,42,0.08)] backdrop-blur md:p-6"
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
                class="group rounded-[26px] border border-slate-200/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.95),rgba(248,250,252,0.95))] p-5 text-left transition duration-200 hover:-translate-y-1 hover:border-slate-300 hover:shadow-[0_20px_36px_rgba(15,23,42,0.1)]"
                @click="selectedEvent = event"
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
                      <span class="inline-flex items-center gap-1.5">
                        <Icon icon="solar:calendar-mark-line-duotone" class="size-[15px]" />
                        {{ formatDateRange(event.startDate, event.endDate) }}
                      </span>
                      <span class="inline-flex items-center gap-1.5">
                        <Icon icon="solar:map-point-wave-line-duotone" class="size-[15px]" />
                        {{ event.city }}
                      </span>
                      <span>
                        {{ event.durationDays }} day{{ event.durationDays === 1 ? '' : 's' }}
                      </span>
                    </div>
                  </div>

                  <div class="flex flex-col items-start gap-3 lg:items-end">
                    <span class="inline-flex items-center rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-emerald-700 ring-1 ring-inset ring-emerald-200">
                      {{ countdownLabel(event.startDate, todayIso) }}
                    </span>
                  </div>
                </div>

                <div class="mt-4 grid gap-3 border-t border-slate-200/80 pt-4 text-sm text-slate-600 md:grid-cols-3">
                  <p>
                    Price: {{ formatPrice(event.price) }}
                  </p>
                  <p>
                    Verified: {{ event.verified ? 'Yes' : 'No' }}
                  </p>
                  <p>
                    Visa: {{ formatVisaLabel(event.visaPolicy.category) }}
                  </p>
                </div>
              </button>
            </div>
          </div>
        </section>
      </section>
    </div>

    <EventInfoModal :event="selectedEvent" @close="selectedEvent = null" />
  </main>
</template>
