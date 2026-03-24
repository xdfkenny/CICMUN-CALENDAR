<script setup lang="ts">
import 'flag-icons/css/flag-icons.min.css'

import { useIntersectionObserver } from '@vueuse/core'
import {
  ArrowUpRight,
  Building2,
  Clock3,
  Globe2,
  Layers3,
  Sparkles,
} from 'lucide-vue-next'

import DashboardCard from '~/components/international/DashboardCard.vue'
import FilterBar from '~/components/international/FilterBar.vue'
import QuickViewModal from '~/components/international/QuickViewModal.vue'
import rawDataset from '~/assets/data/international-events.json'
import type { InternationalDataset, InternationalDestination } from '~/types/international'
import {
  countdownLabel,
  destinationMatchesDateRange,
  destinationMatchesSearch,
  FLAG_CODE_BY_DESTINATION_KEY,
  formatDate,
  getDestinationStatus,
  getNextEvent,
  getRegionForDestination,
  groupEventsByMonth,
  sortDestinations,
  type DateRangeFilter,
  type DestinationStatus,
  type RegionFilter,
  type SortOption,
  type ViewMode,
} from '~/utils/international-dashboard'

const dataset = rawDataset as InternationalDataset
const todayIso = useState('international-dashboard-today', () => new Date().toISOString().slice(0, 10))

const searchQuery = ref('')
const statusFilter = ref<'all' | DestinationStatus>('all')
const dateRangeFilter = ref<DateRangeFilter>('all')
const regionFilter = ref<RegionFilter>('all')
const sortBy = ref<SortOption>('date')
const viewMode = ref<ViewMode>('grid')
const selectedDestinationKey = ref<string | null>(null)
const visibleCount = ref(12)
const sentinelRef = ref<HTMLElement | null>(null)

const batchSize = computed(() => (viewMode.value === 'grid' ? 12 : 8))

const allDestinations = computed(() => dataset.destinations)
const allEvents = computed(() => allDestinations.value.flatMap((destination) => destination.events))

const openCountries = computed(() =>
  allDestinations.value.filter((destination) => getDestinationStatus(destination, todayIso.value) === 'open').length,
)
const upcomingCountries = computed(() =>
  allDestinations.value.filter((destination) => getDestinationStatus(destination, todayIso.value) === 'upcoming').length,
)
const verifiedSessions = computed(() => allEvents.value.filter((event) => event.verified).length)
const nextGlobalEvent = computed(() =>
  sortDestinations(allDestinations.value, 'date', todayIso.value)
    .map((destination) => getNextEvent(destination, todayIso.value))
    .find(Boolean) ?? null,
)

const kpis = computed(() => [
  {
    label: 'Countries',
    value: dataset.metadata.counts.destinations,
    icon: Globe2,
    tone: 'from-sky-600 to-indigo-600',
    trend: `${openCountries.value} open now`,
  },
  {
    label: 'Committees',
    value: dataset.metadata.counts.cleaned,
    icon: Layers3,
    tone: 'from-indigo-600 to-violet-600',
    trend: `${verifiedSessions.value} verified listings`,
  },
  {
    label: 'Live Open',
    value: openCountries.value,
    icon: Sparkles,
    tone: 'from-emerald-500 to-teal-500',
    trend: `${upcomingCountries.value} upcoming`,
  },
  {
    label: 'Next Session',
    value: formatDate(nextGlobalEvent.value?.startDate ?? null),
    icon: Clock3,
    tone: 'from-amber-500 to-orange-500',
    trend: nextGlobalEvent.value ? countdownLabel(nextGlobalEvent.value.startDate, todayIso.value) : 'Date TBD',
  },
])

const filteredDestinations = computed(() => {
  const filtered = allDestinations.value.filter((destination) => {
    const matchesSearch = destinationMatchesSearch(destination, searchQuery.value)
    const matchesStatus =
      statusFilter.value === 'all' || getDestinationStatus(destination, todayIso.value) === statusFilter.value
    const matchesRegion =
      regionFilter.value === 'all' || getRegionForDestination(destination.key) === regionFilter.value
    const matchesDateRange = destinationMatchesDateRange(destination, dateRangeFilter.value, todayIso.value)

    return matchesSearch && matchesStatus && matchesRegion && matchesDateRange
  })

  return sortDestinations(filtered, sortBy.value, todayIso.value)
})

const visibleDestinations = computed(() => filteredDestinations.value.slice(0, visibleCount.value))
const remainingDestinations = computed(() => Math.max(filteredDestinations.value.length - visibleDestinations.value.length, 0))
const skeletonCount = computed(() => Math.min(batchSize.value, remainingDestinations.value))

const selectedDestination = computed<InternationalDestination | null>(
  () => allDestinations.value.find((destination) => destination.key === selectedDestinationKey.value) ?? null,
)
const selectedDestinationGroups = computed(() =>
  selectedDestination.value ? groupEventsByMonth(selectedDestination.value.events) : [],
)

const resetVisibleCount = () => {
  visibleCount.value = batchSize.value
}

const loadNextBatch = () => {
  visibleCount.value = Math.min(visibleCount.value + batchSize.value, filteredDestinations.value.length)
}

watch([searchQuery, statusFilter, dateRangeFilter, regionFilter, sortBy, viewMode], resetVisibleCount)

watch(selectedDestinationKey, (value) => {
  if (!import.meta.client) return
  document.body.style.overflow = value ? 'hidden' : ''
})

useIntersectionObserver(sentinelRef, (entries) => {
  const [entry] = entries

  if (entry?.isIntersecting && remainingDestinations.value > 0) {
    loadNextBatch()
  }
})

const handleKeydown = (event: KeyboardEvent) => {
  if (event.key === 'Escape') {
    selectedDestinationKey.value = null
  }
}

onMounted(() => {
  window.addEventListener('keydown', handleKeydown)
})

onBeforeUnmount(() => {
  window.removeEventListener('keydown', handleKeydown)
  if (import.meta.client) {
    document.body.style.overflow = ''
  }
})

useHead({
  title: 'International MUN Tracker',
  meta: [
    {
      name: 'description',
      content:
        'Private SaaS-style international Model UN tracker for Colegio Internacional de Caracas delegates.',
    },
    { name: 'robots', content: 'noindex, nofollow' },
  ],
})
</script>

<template>
  <main class="relative min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top_left,rgba(191,219,254,0.34),transparent_26%),radial-gradient(circle_at_top_right,rgba(196,181,253,0.18),transparent_18%),linear-gradient(180deg,#f4f7fb_0%,#eef2f7_46%,#f7f9fc_100%)] text-slate-950 dark:bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.08),transparent_20%),radial-gradient(circle_at_top_right,rgba(168,85,247,0.08),transparent_16%),linear-gradient(180deg,#0b1120_0%,#0f172a_100%)] dark:text-white">
    <div class="absolute left-[-72px] top-24 h-72 w-72 rounded-full bg-sky-400/12 blur-3xl dark:bg-sky-500/10" />
    <div class="absolute right-[-72px] top-32 h-80 w-80 rounded-full bg-violet-400/10 blur-3xl dark:bg-violet-500/10" />

    <div class="relative z-10 mx-auto flex w-full max-w-[1480px] flex-col gap-5 px-4 py-5 lg:px-6 xl:px-8">
      <section class="grid gap-4 xl:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)]">
        <article class="rounded-[30px] border border-white/70 bg-white/88 p-5 shadow-[0_18px_50px_rgba(15,23,42,0.08)] backdrop-blur-xl dark:border-white/8 dark:bg-slate-900/78 dark:shadow-[0_18px_50px_rgba(2,6,23,0.42)] sm:p-6">
          <div class="flex items-start gap-4">
            <div class="grid size-14 shrink-0 place-items-center rounded-[22px] border border-white/70 bg-white/95 dark:border-white/8 dark:bg-slate-950/40">
              <img
                src="/LOGO%20NO-BG.png"
                alt="Colegio Internacional de Caracas"
                class="size-11 object-contain"
              >
            </div>

            <div class="min-w-0 space-y-2">
              <p class="text-[11px] font-semibold uppercase tracking-[0.16em] text-sky-600 dark:text-sky-300">
                CIC MUN International Desk
              </p>
              <h1 class="text-[clamp(1.8rem,3vw,3.1rem)] font-semibold tracking-[-0.06em] text-slate-950 dark:text-white">
                International MUN Tracker
              </h1>
              <p class="max-w-3xl text-sm leading-7 text-slate-600 dark:text-slate-300">
                Private planning board for Colegio Internacional de Caracas delegates comparing Europe and Asia
                committees through a Venezuelan-passport travel lens.
              </p>
            </div>
          </div>

          <div class="mt-5 flex flex-wrap gap-2.5">
            <span class="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-semibold text-slate-600 dark:border-white/8 dark:bg-slate-950/36 dark:text-slate-300">
              <Building2 :size="16" />
              Colegio Internacional de Caracas
            </span>
            <span class="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-semibold text-slate-600 dark:border-white/8 dark:bg-slate-950/36 dark:text-slate-300">
              <ArrowUpRight :size="16" />
              Passport baseline: {{ dataset.metadata.passportOrigin }}
            </span>
            <span class="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-semibold text-slate-600 dark:border-white/8 dark:bg-slate-950/36 dark:text-slate-300">
              <Clock3 :size="16" />
              Visa notes reviewed {{ formatDate(dataset.metadata.visaVerificationDate) }}
            </span>
          </div>

          <div class="mt-5 grid gap-3 sm:grid-cols-2">
            <div class="rounded-[22px] border border-slate-200/70 bg-slate-50/90 px-4 py-3 dark:border-white/8 dark:bg-slate-950/30">
              <p class="text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-400 dark:text-slate-500">
                Cleanup Snapshot
              </p>
              <p class="mt-1 text-sm leading-6 text-slate-600 dark:text-slate-300">
                {{ dataset.metadata.counts.cleaned }} sessions across {{ dataset.metadata.counts.destinations }} countries after
                removing {{ dataset.metadata.removalSummary.durationOver4Days }} long-format entries and
                {{ dataset.metadata.removalSummary.invalidDateRanges }} broken date range.
              </p>
            </div>
            <div class="rounded-[22px] border border-slate-200/70 bg-slate-50/90 px-4 py-3 dark:border-white/8 dark:bg-slate-950/30">
              <p class="text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-400 dark:text-slate-500">
                Review Flow
              </p>
              <p class="mt-1 text-sm leading-6 text-slate-600 dark:text-slate-300">
                Use the board to shortlist countries first, then open a country brief for dates, original price strings,
                source links, and visa notes before registration.
              </p>
            </div>
          </div>
        </article>

        <div class="grid gap-4 sm:grid-cols-2">
          <article
            v-for="item in kpis"
            :key="item.label"
            class="rounded-[26px] border border-white/70 bg-white/88 p-5 shadow-[0_18px_50px_rgba(15,23,42,0.08)] backdrop-blur-xl dark:border-white/8 dark:bg-slate-900/78 dark:shadow-[0_18px_50px_rgba(2,6,23,0.42)]"
          >
            <div class="flex items-start justify-between gap-4">
              <div>
                <p class="text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-400 dark:text-slate-500">
                  {{ item.label }}
                </p>
                <strong class="mt-3 block text-[clamp(1.6rem,2vw,2.2rem)] font-semibold tracking-[-0.05em] text-slate-950 dark:text-white">
                  {{ item.value }}
                </strong>
              </div>

              <div class="grid size-10 place-items-center rounded-2xl bg-gradient-to-br text-white shadow-lg" :class="item.tone">
                <component :is="item.icon" :size="18" />
              </div>
            </div>

            <p class="mt-4 inline-flex w-fit items-center rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600 dark:bg-slate-800 dark:text-slate-300">
              {{ item.trend }}
            </p>
          </article>
        </div>
      </section>

      <FilterBar
        v-model:search-query="searchQuery"
        v-model:status-filter="statusFilter"
        v-model:date-range-filter="dateRangeFilter"
        v-model:region-filter="regionFilter"
        v-model:sort-by="sortBy"
        v-model:view-mode="viewMode"
        :visible-count="visibleDestinations.length"
        :total-count="filteredDestinations.length"
      />

      <section
        class="grid gap-4"
        :class="viewMode === 'grid'
          ? 'grid-cols-1 md:grid-cols-2 2xl:grid-cols-3'
          : 'grid-cols-1'"
      >
        <DashboardCard
          v-for="destination in visibleDestinations"
          :key="destination.key"
          :destination="destination"
          :next-event="getNextEvent(destination, todayIso)"
          :status="getDestinationStatus(destination, todayIso)"
          :today-iso="todayIso"
          :view-mode="viewMode"
          :flag-code="FLAG_CODE_BY_DESTINATION_KEY[destination.key]"
          @select="selectedDestinationKey = $event"
        />

        <template v-if="remainingDestinations > 0">
          <article
            v-for="placeholder in skeletonCount"
            :key="`skeleton-${placeholder}`"
            class="overflow-hidden rounded-[28px] border border-white/70 bg-white/75 p-6 shadow-[0_18px_50px_rgba(15,23,42,0.05)] backdrop-blur-xl dark:border-white/8 dark:bg-slate-900/62"
            :class="viewMode === 'grid' ? 'h-[248px]' : 'h-[176px]'"
          >
            <div class="skeleton-shimmer h-full w-full rounded-[20px] bg-slate-100/90 dark:bg-slate-800/70" />
          </article>
        </template>

        <article
          v-if="filteredDestinations.length === 0"
          class="col-span-full rounded-[32px] border border-dashed border-slate-300/80 bg-white/78 px-6 py-16 text-center shadow-[0_18px_50px_rgba(15,23,42,0.05)] backdrop-blur-xl dark:border-white/10 dark:bg-slate-900/74"
        >
          <div class="mx-auto flex max-w-md flex-col items-center gap-3">
            <div class="grid size-14 place-items-center rounded-2xl bg-slate-100 text-slate-500 dark:bg-slate-800 dark:text-slate-300">
              <Sparkles :size="22" />
            </div>
            <h2 class="text-xl font-semibold tracking-[-0.02em] text-slate-950 dark:text-white">
              No matches for these filters
            </h2>
            <p class="text-sm leading-7 text-slate-500 dark:text-slate-400">
              Clear a filter or search by a broader country or committee term to bring destinations back into view.
            </p>
          </div>
        </article>
      </section>

      <div
        v-if="remainingDestinations > 0"
        ref="sentinelRef"
        class="h-12"
        aria-hidden="true"
      />
    </div>

    <QuickViewModal
      :destination="selectedDestination"
      :grouped-events="selectedDestinationGroups"
      :today-iso="todayIso"
      @close="selectedDestinationKey = null"
    />
  </main>
</template>

<style scoped>
.skeleton-shimmer {
  position: relative;
  overflow: hidden;
}

.skeleton-shimmer::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.55) 50%, transparent 100%);
  animation: shimmer 1.4s infinite;
}

@keyframes shimmer {
  0% {
    transform: translateX(-100%);
  }

  100% {
    transform: translateX(100%);
  }
}
</style>
