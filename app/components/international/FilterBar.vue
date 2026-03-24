<script setup lang="ts">
import { CalendarRange, LayoutGrid, List, Search } from 'lucide-vue-next'

import type { DateRangeFilter, RegionFilter, SortOption, ViewMode } from '~/utils/international-dashboard'

const props = defineProps<{
  searchQuery: string
  statusFilter: 'all' | 'open' | 'closed' | 'upcoming'
  dateRangeFilter: DateRangeFilter
  regionFilter: RegionFilter
  sortBy: SortOption
  viewMode: ViewMode
  visibleCount: number
  totalCount: number
}>()

const emit = defineEmits<{
  'update:searchQuery': [value: string]
  'update:statusFilter': [value: 'all' | 'open' | 'closed' | 'upcoming']
  'update:dateRangeFilter': [value: DateRangeFilter]
  'update:regionFilter': [value: RegionFilter]
  'update:sortBy': [value: SortOption]
  'update:viewMode': [value: ViewMode]
}>()

const searchModel = computed({
  get: () => props.searchQuery,
  set: (value: string) => emit('update:searchQuery', value),
})

const statusModel = computed({
  get: () => props.statusFilter,
  set: (value: 'all' | 'open' | 'closed' | 'upcoming') => emit('update:statusFilter', value),
})

const dateRangeModel = computed({
  get: () => props.dateRangeFilter,
  set: (value: DateRangeFilter) => emit('update:dateRangeFilter', value),
})

const regionModel = computed({
  get: () => props.regionFilter,
  set: (value: RegionFilter) => emit('update:regionFilter', value),
})

const sortModel = computed({
  get: () => props.sortBy,
  set: (value: SortOption) => emit('update:sortBy', value),
})
</script>

<template>
  <section class="sticky top-3 z-20 rounded-[24px] border border-white/70 bg-white/90 p-3 shadow-[0_18px_50px_rgba(15,23,42,0.08)] backdrop-blur-xl dark:border-white/8 dark:bg-slate-900/84 dark:shadow-[0_18px_50px_rgba(2,6,23,0.42)] sm:p-4">
    <div class="flex flex-col gap-3">
      <div class="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
        <label class="relative min-w-0 flex-1">
          <Search :size="18" class="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-500" />
          <input
            v-model="searchModel"
            type="search"
            placeholder="Search country, city, visa type, or committee"
            class="h-11 w-full rounded-2xl border border-slate-200/80 bg-slate-50/90 pl-11 pr-4 text-sm text-slate-900 outline-none transition focus:border-sky-300 focus:ring-4 focus:ring-sky-100 dark:border-white/8 dark:bg-slate-950/40 dark:text-white dark:focus:border-sky-500/40 dark:focus:ring-sky-500/10"
          >
        </label>

        <div class="flex items-center justify-between gap-3 lg:justify-end">
          <p class="text-sm font-medium text-slate-500 dark:text-slate-400">
            {{ totalCount }} countries
          </p>

          <div class="inline-flex rounded-2xl border border-slate-200/80 bg-slate-50/90 p-1 dark:border-white/8 dark:bg-slate-950/40">
            <button
              type="button"
              class="inline-flex h-9 items-center gap-2 rounded-xl px-3 text-sm font-semibold transition"
              :class="viewMode === 'grid'
                ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900'
                : 'text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white'"
              @click="emit('update:viewMode', 'grid')"
            >
              <LayoutGrid :size="16" />
              Grid
            </button>
            <button
              type="button"
              class="inline-flex h-9 items-center gap-2 rounded-xl px-3 text-sm font-semibold transition"
              :class="viewMode === 'list'
                ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900'
                : 'text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white'"
              @click="emit('update:viewMode', 'list')"
            >
              <List :size="16" />
              List
            </button>
          </div>
        </div>
      </div>

      <div class="grid grid-cols-2 gap-3 md:grid-cols-4">
        <label class="min-w-0">
          <span class="sr-only">Status filter</span>
          <select v-model="statusModel" aria-label="Status filter" class="h-11 w-full rounded-2xl border border-slate-200/80 bg-slate-50/90 px-4 text-sm text-slate-900 outline-none transition focus:border-sky-300 focus:ring-4 focus:ring-sky-100 dark:border-white/8 dark:bg-slate-950/40 dark:text-white dark:focus:border-sky-500/40 dark:focus:ring-sky-500/10">
              <option value="all">Status: All</option>
              <option value="open">Open</option>
              <option value="upcoming">Upcoming</option>
              <option value="closed">Closed</option>
          </select>
        </label>

        <label class="relative min-w-0">
          <CalendarRange :size="16" class="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-500" />
          <span class="sr-only">Date range filter</span>
          <select v-model="dateRangeModel" aria-label="Date range filter" class="h-11 w-full rounded-2xl border border-slate-200/80 bg-slate-50/90 pl-11 pr-4 text-sm text-slate-900 outline-none transition focus:border-sky-300 focus:ring-4 focus:ring-sky-100 dark:border-white/8 dark:bg-slate-950/40 dark:text-white dark:focus:border-sky-500/40 dark:focus:ring-sky-500/10">
            <option value="all">Date: Any time</option>
            <option value="30">Date: 30 days</option>
            <option value="90">Date: 90 days</option>
            <option value="180">Date: 180 days</option>
            <option value="365">Date: 365 days</option>
          </select>
        </label>

        <label class="min-w-0">
          <span class="sr-only">Region filter</span>
          <select v-model="regionModel" aria-label="Region filter" class="h-11 w-full rounded-2xl border border-slate-200/80 bg-slate-50/90 px-4 text-sm text-slate-900 outline-none transition focus:border-sky-300 focus:ring-4 focus:ring-sky-100 dark:border-white/8 dark:bg-slate-950/40 dark:text-white dark:focus:border-sky-500/40 dark:focus:ring-sky-500/10">
            <option value="all">Region: All</option>
            <option value="europe">Europe</option>
            <option value="asia">Asia</option>
          </select>
        </label>

        <label class="min-w-0">
          <span class="sr-only">Sort results</span>
          <select v-model="sortModel" aria-label="Sort results" class="h-11 w-full rounded-2xl border border-slate-200/80 bg-slate-50/90 px-4 text-sm text-slate-900 outline-none transition focus:border-sky-300 focus:ring-4 focus:ring-sky-100 dark:border-white/8 dark:bg-slate-950/40 dark:text-white dark:focus:border-sky-500/40 dark:focus:ring-sky-500/10">
            <option value="date">Sort: Next event</option>
            <option value="country">Sort: Country</option>
            <option value="status">Sort: Status</option>
          </select>
        </label>
      </div>

      <p class="text-sm font-medium text-slate-500 dark:text-slate-400">
        Showing {{ visibleCount }} of {{ totalCount }} countries
      </p>
    </div>
  </section>
</template>
