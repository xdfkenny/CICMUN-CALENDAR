<script setup lang="ts">
import { Icon } from '@iconify/vue'

import type { InternationalEvent } from '~/types/international'
import { FLAG_CODE_BY_DESTINATION_KEY, formatDate, formatDateRange, formatPrice, formatVisaLabel } from '~/utils/international-dashboard'

import StatusBadge from '~/components/international/StatusBadge.vue'

const props = defineProps<{
  event: InternationalEvent | null
}>()

const emit = defineEmits<{
  close: []
}>()

const visaTone = computed(() => {
  const category = props.event?.visaPolicy.category

  if (!category) return 'visa-free' as const
  if (category === 'visa-free') return 'visa-free' as const
  if (category === 'visa-required') return 'required' as const
  if (category === 'visa on arrival') return 'arrival' as const
  if (category === 'eTA') return 'eta' as const

  return 'visa' as const
})

const applicationTone = computed(() => (props.event?.applicationsOpen ? 'open' : 'closed'))

const flagCode = computed(() => {
  if (!props.event) return null
  return FLAG_CODE_BY_DESTINATION_KEY[props.event.destinationKey] ?? null
})
</script>

<template>
  <Transition name="dashboard-modal">
    <div
      v-if="event"
      class="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6"
      role="dialog"
      aria-modal="true"
      :aria-labelledby="event ? `global-event-title-${event.id}` : undefined"
    >
      <button
        type="button"
        class="absolute inset-0 bg-slate-950/55 backdrop-blur-sm"
        aria-label="Close event details"
        @click="emit('close')"
      />

      <div class="relative z-10 w-full max-w-3xl">
        <article class="flex max-h-[calc(100vh-2rem)] w-full flex-col overflow-hidden rounded-[28px] border border-white/30 bg-[linear-gradient(180deg,rgba(255,252,245,0.98),rgba(248,250,252,0.96))] shadow-[0_28px_90px_rgba(15,23,42,0.28)] md:max-h-[calc(100vh-3rem)]">
        <header class="shrink-0 border-b border-slate-200/80 px-5 py-5 md:px-7">
          <div class="flex items-start justify-between gap-4">
            <div class="space-y-2">
              <p class="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                Event Quick Look
              </p>
              <div class="flex items-center gap-3">
                <span v-if="flagCode" class="flag-avatar-shell flag-avatar size-10 shadow-[0_10px_24px_rgba(15,23,42,0.18)]">
                  <span
                    :class="['fi', 'fis', `fi-${flagCode}`]"
                    class="flag-avatar-flag"
                    aria-hidden="true"
                  />
                </span>
                <span v-else class="text-3xl" aria-hidden="true">
                  {{ event.destinationFlag }}
                </span>
                <span class="text-sm font-medium text-slate-500">
                  {{ event.destinationLabel }}
                </span>
              </div>
              <h2 :id="`global-event-title-${event.id}`" class="text-2xl font-semibold tracking-[-0.04em] text-slate-950 md:text-3xl">
                {{ event.title }}
              </h2>
              <p class="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-slate-600">
                <span class="inline-flex items-center gap-1.5">
                  <Icon icon="solar:calendar-mark-line-duotone" class="size-[15px]" />
                  {{ formatDateRange(event.startDate, event.endDate) }}
                </span>
                <span class="inline-flex items-center gap-1.5">
                  <Icon icon="solar:map-point-wave-line-duotone" class="size-[15px]" />
                  {{ event.location }}
                </span>
              </p>
            </div>

            <button
              type="button"
              class="inline-flex size-11 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-700 transition hover:border-slate-300 hover:text-slate-950"
              aria-label="Close event details"
              @click="emit('close')"
            >
              <Icon icon="solar:close-circle-line-duotone" class="size-[18px]" />
            </button>
          </div>
        </header>

        <div class="overflow-y-auto">
        <div class="grid gap-6 p-5 md:grid-cols-[1.2fr,0.8fr] md:px-7 md:py-6">
          <section class="space-y-4">
            <div class="grid gap-3 sm:grid-cols-2">
              <article class="rounded-[22px] border border-slate-200/80 bg-white/90 p-4">
                <div class="flex items-center justify-between gap-3">
                  <p class="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500">
                    Timeline
                  </p>
                  <span class="grid size-10 place-items-center rounded-2xl bg-sky-50 text-sky-700 ring-1 ring-inset ring-sky-100">
                    <Icon icon="solar:calendar-mark-bold-duotone" class="size-5" />
                  </span>
                </div>
                <p class="mt-3 text-lg font-semibold tracking-[-0.03em] text-slate-950">
                  {{ formatDateRange(event.startDate, event.endDate) }}
                </p>
                <div class="mt-2 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm">
                  <p class="inline-flex items-center gap-1.5 font-semibold text-slate-900">
                    <Icon icon="solar:stopwatch-bold-duotone" class="size-4 text-amber-600" />
                    Event duration: {{ event.durationDays }} day{{ event.durationDays === 1 ? '' : 's' }}
                  </p>
                  <p class="text-slate-500">
                    {{ event.startDate.slice(0, 4) }}
                  </p>
                </div>
              </article>

              <article class="rounded-[22px] border border-slate-200/80 bg-white/90 p-4">
                <div class="flex items-center justify-between gap-3">
                  <p class="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500">
                    Application
                  </p>
                  <span class="grid size-10 place-items-center rounded-2xl bg-emerald-50 text-emerald-700 ring-1 ring-inset ring-emerald-100">
                    <Icon :icon="event.applicationsOpen ? 'solar:check-circle-bold-duotone' : 'solar:close-circle-bold-duotone'" class="size-5" />
                  </span>
                </div>
                <div class="mt-3">
                  <StatusBadge :label="event.applicationsOpen ? 'Open' : 'Closed'" :tone="applicationTone" size="md" />
                </div>
                <p class="mt-3 text-sm text-slate-500">
                  Some future conferences may reopen later.
                </p>
              </article>
            </div>

            <article class="rounded-[24px] border border-slate-200/80 bg-white/90 p-5">
              <div class="flex items-center justify-between gap-3">
                <p class="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500">
                  Extra Information
                </p>
                <span class="grid size-10 place-items-center rounded-2xl bg-violet-50 text-violet-700 ring-1 ring-inset ring-violet-100">
                  <Icon icon="solar:documents-bold-duotone" class="size-5" />
                </span>
              </div>
              <div class="mt-4 grid gap-3 text-sm text-slate-600">
                <p class="flex items-center gap-2">
                  <Icon icon="solar:wallet-money-line-duotone" class="size-4 text-slate-400" />
                  <span>Price: {{ formatPrice(event.price) }}</span>
                </p>
                <p class="flex items-center gap-2">
                  <Icon icon="solar:verified-check-line-duotone" class="size-4 text-slate-400" />
                  <span>Verified listing: {{ event.verified ? 'Yes' : 'No' }}</span>
                </p>
                <p class="flex items-center gap-2">
                  <Icon icon="solar:city-line-duotone" class="size-4 text-slate-400" />
                  <span>City: {{ event.city }}</span>
                </p>
                <p class="flex items-center gap-2">
                  <Icon icon="solar:global-line-duotone" class="size-4 text-slate-400" />
                  <span>Destination: {{ event.destinationFlag }} {{ event.destinationLabel }}</span>
                </p>
              </div>
            </article>
          </section>

          <aside class="space-y-4">
            <article class="rounded-[24px] border border-slate-200/80 bg-[linear-gradient(145deg,#082f49,#0f172a)] p-5 text-white">
              <div class="flex items-center justify-between gap-3">
                <p class="text-[11px] font-semibold uppercase tracking-[0.16em] text-sky-100/70">
                  Visa Snapshot
                </p>
                <span class="grid size-10 place-items-center rounded-2xl bg-white/10 text-sky-100 ring-1 ring-inset ring-white/10">
                  <Icon icon="solar:passport-bold-duotone" class="size-5" />
                </span>
              </div>
              <div class="mt-4">
                <StatusBadge :label="formatVisaLabel(event.visaPolicy.category)" :tone="visaTone" size="md" />
              </div>
              <p class="mt-4 text-sm leading-7 text-slate-200">
                {{ event.visaPolicy.note }}
              </p>
              <p v-if="event.visaPolicy.stayLimit" class="mt-3 text-sm font-medium text-sky-100">
                Stay window: {{ event.visaPolicy.stayLimit }}
              </p>
            </article>

            <article class="rounded-[24px] border border-slate-200/80 bg-white/90 p-5">
              <div class="flex items-center justify-between gap-3">
                <p class="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500">
                  Source Links
                </p>
                <span class="grid size-10 place-items-center rounded-2xl bg-slate-100 text-slate-700 ring-1 ring-inset ring-slate-200">
                  <Icon icon="solar:link-round-angle-bold-duotone" class="size-5" />
                </span>
              </div>
              <div class="mt-4 grid gap-2">
                <a
                  :href="event.pageUrl"
                  target="_blank"
                  rel="noreferrer"
                  class="inline-flex items-center justify-between gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-300 hover:bg-white hover:text-slate-950"
                >
                  <span class="truncate">Open event page</span>
                  <Icon icon="solar:square-top-down-line-duotone" class="size-[15px]" />
                </a>

                <a
                  v-for="source in event.visaPolicy.sources"
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
            </article>
          </aside>
        </div>
        </div>
      </article>
      </div>
    </div>
  </Transition>
</template>
