<script setup lang="ts">
import { CalendarDays, ChevronRight, MapPin } from 'lucide-vue-next'

import type { InternationalDestination, InternationalEvent } from '~/types/international'
import type { DestinationStatus, ViewMode } from '~/utils/international-dashboard'
import { countdownLabel, formatDate, formatVisaLabel, getRegionLabel } from '~/utils/international-dashboard'

import StatusBadge from '~/components/international/StatusBadge.vue'

const props = defineProps<{
  destination: InternationalDestination
  nextEvent: InternationalEvent | null
  status: DestinationStatus
  viewMode: ViewMode
  todayIso: string
  flagCode?: string
}>()

const emit = defineEmits<{
  select: [key: string]
}>()

const statusMeta = computed(() => {
  if (props.status === 'open') return { label: 'Open', tone: 'open' as const }
  if (props.status === 'upcoming') return { label: 'Upcoming', tone: 'upcoming' as const }
  return { label: 'Closed', tone: 'closed' as const }
})

const visaMeta = computed(() => {
  const category = props.destination.visaPolicy.category

  if (category === 'visa-free') return { label: formatVisaLabel(category), tone: 'visa-free' as const }
  if (category === 'visa-required') return { label: formatVisaLabel(category), tone: 'required' as const }
  if (category === 'visa on arrival') return { label: formatVisaLabel(category), tone: 'arrival' as const }
  if (category === 'eTA') return { label: formatVisaLabel(category), tone: 'eta' as const }

  return { label: formatVisaLabel(category), tone: 'visa' as const }
})

const regionLabel = computed(() => getRegionLabel(props.destination.key))
</script>

<template>
  <button
    type="button"
    class="group rounded-[26px] border border-white/70 bg-white/92 p-5 text-left shadow-[0_14px_34px_rgba(15,23,42,0.08)] transition-colors duration-150 hover:border-sky-200/80 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/60 dark:border-white/8 dark:bg-slate-900/88 dark:hover:border-sky-500/20 dark:shadow-[0_18px_42px_rgba(2,6,23,0.4)]"
    @click="emit('select', destination.key)"
  >
    <div v-if="viewMode === 'grid'" class="flex h-[248px] flex-col">
      <div class="flex items-start justify-between gap-3">
        <div class="flex min-w-0 items-start gap-3.5">
          <div class="flex size-[3.25rem] shrink-0 items-center justify-center rounded-full bg-[linear-gradient(135deg,rgba(15,23,42,0.08),rgba(14,165,233,0.16))] p-1.5 dark:bg-[linear-gradient(135deg,rgba(59,130,246,0.18),rgba(14,165,233,0.16))]">
            <GlobalSpriteFlag
              :destination-key="destination.key"
              :emoji-flag="destination.flag"
              wrapper-class="size-full rounded-full border border-slate-200 bg-white dark:bg-slate-800"
              sprite-scale-class="scale-[1.42]"
              emoji-class="text-2xl"
            />
          </div>

          <div class="min-w-0 space-y-1">
            <h3 class="truncate text-lg font-semibold tracking-[-0.02em] text-slate-900 dark:text-slate-50">
              {{ destination.label }}
            </h3>
            <p class="text-sm text-slate-500 dark:text-slate-400">
              {{ regionLabel }}<template v-if="nextEvent?.city"> • {{ nextEvent.city }}</template>
            </p>
          </div>
        </div>
        <StatusBadge :label="statusMeta.label" :tone="statusMeta.tone" />
      </div>

      <div class="mt-5 space-y-3">
        <div class="space-y-1.5">
          <p class="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-400 dark:text-slate-500">
            Committee
          </p>
          <h4 class="line-clamp-2 min-h-[3rem] text-[1.05rem] font-semibold leading-6 tracking-[-0.02em] text-slate-900 dark:text-white">
            {{ nextEvent?.title ?? 'Committee to be confirmed' }}
          </h4>
        </div>

        <div class="rounded-2xl border border-slate-200/70 bg-slate-50/95 p-4 dark:border-white/8 dark:bg-slate-950/35">
          <p class="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-400 dark:text-slate-500">
            Next Event
          </p>
          <div class="mt-2 flex items-end justify-between gap-3">
            <strong class="text-2xl font-semibold tracking-[-0.04em] text-slate-900 dark:text-slate-50">
              {{ formatDate(nextEvent?.startDate ?? null) }}
            </strong>
            <span class="inline-flex shrink-0 items-center rounded-full bg-slate-900 px-3 py-1 text-xs font-semibold text-white dark:bg-sky-500/18 dark:text-sky-200">
              {{ countdownLabel(nextEvent?.startDate ?? null, todayIso) }}
            </span>
          </div>
          <p class="mt-2 text-sm text-slate-500 dark:text-slate-400">
            {{ nextEvent?.durationDays ?? 0 }} day{{ nextEvent?.durationDays === 1 ? '' : 's' }}
            <template v-if="nextEvent?.applicationsOpen"> • applications open</template>
          </p>
        </div>
      </div>

      <div class="mt-auto flex items-center justify-between gap-3 pt-4">
        <StatusBadge :label="visaMeta.label" :tone="visaMeta.tone" />

        <span class="inline-flex items-center gap-1.5 rounded-2xl bg-slate-900 px-3 py-2 text-sm font-semibold text-white transition-colors duration-200 group-hover:bg-sky-700 dark:bg-white dark:text-slate-900 dark:group-hover:bg-sky-100">
          View details
          <ChevronRight :size="16" />
        </span>
      </div>
    </div>

    <div v-else class="grid min-h-[176px] grid-cols-1 gap-4 md:grid-cols-[auto,minmax(0,1fr),auto] md:items-center md:gap-5">
      <div class="flex items-center gap-3.5">
        <div class="flex size-14 shrink-0 items-center justify-center rounded-full bg-[linear-gradient(135deg,rgba(15,23,42,0.08),rgba(14,165,233,0.16))] p-1.5 dark:bg-[linear-gradient(135deg,rgba(59,130,246,0.18),rgba(14,165,233,0.16))]">
          <GlobalSpriteFlag
            :destination-key="destination.key"
            :emoji-flag="destination.flag"
            wrapper-class="size-full rounded-full border border-slate-200 bg-white dark:bg-slate-800"
            sprite-scale-class="scale-[1.5]"
            emoji-class="text-2xl"
          />
        </div>

        <div class="min-w-0 space-y-1">
          <div class="flex flex-wrap items-center gap-2">
            <h3 class="truncate text-lg font-semibold tracking-[-0.02em] text-slate-900 dark:text-slate-50">
              {{ destination.label }}
            </h3>
            <StatusBadge :label="statusMeta.label" :tone="statusMeta.tone" />
          </div>
          <p class="text-sm text-slate-500 dark:text-slate-400">
            {{ regionLabel }} • {{ destination.eventCount }} sessions
          </p>
          <StatusBadge :label="visaMeta.label" :tone="visaMeta.tone" />
        </div>
      </div>

      <div class="min-w-0 space-y-3">
        <div class="space-y-1">
          <p class="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-400 dark:text-slate-500">
            Committee
          </p>
          <h4 class="truncate text-[1.05rem] font-semibold tracking-[-0.02em] text-slate-900 dark:text-white">
            {{ nextEvent?.title ?? 'Committee to be confirmed' }}
          </h4>
        </div>

        <div class="flex flex-wrap items-center gap-3 text-sm text-slate-500 dark:text-slate-400">
          <span class="inline-flex items-center gap-1.5">
            <CalendarDays :size="14" />
            {{ formatDate(nextEvent?.startDate ?? null) }}
          </span>
          <span class="inline-flex items-center gap-1.5">
            <MapPin :size="14" />
            {{ nextEvent?.city ?? destination.cities[0] ?? 'Location TBD' }}
          </span>
        </div>
      </div>

      <div class="flex flex-col items-start gap-3 md:items-end">
        <span class="inline-flex items-center rounded-full bg-slate-900 px-3 py-1 text-xs font-semibold text-white dark:bg-sky-500/18 dark:text-sky-200">
          {{ countdownLabel(nextEvent?.startDate ?? null, todayIso) }}
        </span>
        <span class="inline-flex items-center gap-1.5 rounded-2xl bg-slate-900 px-3 py-2 text-sm font-semibold text-white transition-colors duration-200 group-hover:bg-sky-700 dark:bg-white dark:text-slate-900 dark:group-hover:bg-sky-100">
          View details
          <ChevronRight :size="16" />
        </span>
      </div>
    </div>
  </button>
</template>
