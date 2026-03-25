<script setup lang="ts">
import { Clock3, ExternalLink, MapPin, X } from 'lucide-vue-next'

import type { InternationalDestination } from '~/types/international'
import {
  countdownLabel,
  formatDate,
  formatDateRange,
  formatPrice,
  formatVisaLabel,
  getNextEvent,
  getRegionLabel,
} from '~/utils/international-dashboard'

import StatusBadge from '~/components/international/StatusBadge.vue'

const props = defineProps<{
  destination: InternationalDestination | null
  groupedEvents: Array<{
    month: string
    label: string
    events: InternationalDestination['events']
  }>
  todayIso: string
}>()

const emit = defineEmits<{
  close: []
}>()

const visaMeta = computed(() => {
  const category = props.destination?.visaPolicy.category

  if (!category) return null
  if (category === 'visa-free') return { label: formatVisaLabel(category), tone: 'visa-free' as const }
  if (category === 'visa-required') return { label: formatVisaLabel(category), tone: 'required' as const }
  if (category === 'visa on arrival') return { label: formatVisaLabel(category), tone: 'arrival' as const }
  if (category === 'eTA') return { label: formatVisaLabel(category), tone: 'eta' as const }

  return { label: formatVisaLabel(category), tone: 'visa' as const }
})

const nextEvent = computed(() => {
  if (!props.destination) return null
  return getNextEvent(props.destination, props.todayIso)
})
</script>

<template>
  <Transition name="dashboard-modal">
    <div
      v-if="destination"
      class="fixed inset-0 z-50 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      :aria-labelledby="destination ? `country-title-${destination.key}` : undefined"
    >
      <button
        class="absolute inset-0 border-0 bg-slate-950/30"
        aria-label="Close details"
        @click="emit('close')"
      />

      <article class="relative z-10 flex max-h-[calc(100vh-2rem)] w-full max-w-[1180px] flex-col overflow-hidden rounded-[30px] border border-white/70 bg-white/95 shadow-[0_20px_60px_rgba(15,23,42,0.16)] dark:border-white/8 dark:bg-slate-900/92 dark:shadow-[0_24px_64px_rgba(2,6,23,0.42)]">
        <header class="flex flex-col gap-5 border-b border-slate-200/70 px-5 py-5 dark:border-white/8 md:flex-row md:items-start md:justify-between md:px-6 md:py-6">
          <div class="flex items-start gap-4">
            <div class="flex size-16 shrink-0 items-center justify-center rounded-full bg-[linear-gradient(135deg,rgba(15,23,42,0.08),rgba(14,165,233,0.16))] p-1.5 dark:bg-[linear-gradient(135deg,rgba(59,130,246,0.18),rgba(14,165,233,0.16))]">
              <GlobalSpriteFlag
                :destination-key="destination.key"
                :emoji-flag="destination.flag"
                wrapper-class="size-full rounded-full border border-slate-200 bg-white dark:bg-slate-800"
                sprite-scale-class="scale-[1.62]"
                emoji-class="text-3xl"
                loading="eager"
              />
            </div>

            <div class="space-y-2">
              <p class="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-400 dark:text-slate-500">
                Country Brief
              </p>
              <h2 :id="`country-title-${destination.key}`" class="text-3xl font-semibold tracking-[-0.04em] text-slate-950 dark:text-white">
                {{ destination.label }}
              </h2>
              <p class="text-sm text-slate-500 dark:text-slate-400">
                {{ getRegionLabel(destination.key) }} • {{ destination.eventCount }} tracked sessions •
                {{ formatDate(destination.nextEventDate) }} to {{ formatDate(destination.lastEventDate) }}
              </p>
            </div>
          </div>

          <div class="flex flex-wrap items-center gap-3 md:justify-end">
            <div class="rounded-2xl border border-slate-200/70 bg-slate-50/90 px-4 py-3 dark:border-white/8 dark:bg-slate-950/32">
              <p class="text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-400 dark:text-slate-500">
                Next Departure
              </p>
              <p class="mt-1 text-base font-semibold tracking-[-0.02em] text-slate-900 dark:text-white">
                {{ formatDate(nextEvent?.startDate ?? null) }}
              </p>
              <p class="mt-1 text-sm text-slate-500 dark:text-slate-400">
                {{ countdownLabel(nextEvent?.startDate ?? null, todayIso) }}
              </p>
            </div>

            <button
              type="button"
              class="inline-flex size-11 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-700 transition hover:border-slate-300 hover:text-slate-950 dark:border-white/10 dark:bg-slate-950/40 dark:text-slate-200 dark:hover:border-white/20 dark:hover:text-white"
              aria-label="Close details"
              @click="emit('close')"
            >
              <X :size="18" />
            </button>
          </div>
        </header>

        <div class="grid min-h-0 flex-1 gap-0 lg:grid-cols-[280px,1fr]">
          <aside class="border-b border-slate-200/70 p-5 dark:border-white/8 lg:border-b-0 lg:border-r lg:p-6">
            <div class="grid gap-4">
              <section class="rounded-[24px] border border-slate-200/70 bg-slate-50/90 p-5 dark:border-white/8 dark:bg-slate-950/32">
                <p class="text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-400 dark:text-slate-500">
                  Entry Guidance
                </p>
                <StatusBadge
                  v-if="visaMeta"
                  class="mt-4"
                  :label="visaMeta.label"
                  :tone="visaMeta.tone"
                  size="md"
                />
                <p class="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300">
                  {{ destination.visaPolicy.note }}
                </p>
                <p v-if="destination.visaPolicy.stayLimit" class="mt-3 text-sm font-medium text-slate-500 dark:text-slate-400">
                  Stay window: {{ destination.visaPolicy.stayLimit }}
                </p>
              </section>

              <section class="rounded-[24px] border border-slate-200/70 bg-slate-50/90 p-5 dark:border-white/8 dark:bg-slate-950/32">
                <p class="text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-400 dark:text-slate-500">
                  Destination Snapshot
                </p>
                <div class="mt-3 grid gap-3 text-sm text-slate-600 dark:text-slate-300">
                  <p>
                    Cities: {{ destination.cities.join(' • ') }}
                  </p>
                  <p>
                    Passport origin: {{ destination.visaPolicy.passportOrigin }}
                  </p>
                  <p>
                    Visa verification: {{ formatDate(destination.visaPolicy.verifiedAt) }}
                  </p>
                </div>
              </section>

              <section class="rounded-[24px] border border-slate-200/70 bg-slate-50/90 p-5 dark:border-white/8 dark:bg-slate-950/32">
                <p class="text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-400 dark:text-slate-500">
                  Verification Links
                </p>
                <div class="mt-3 grid gap-2">
                  <a
                    v-for="source in destination.visaPolicy.sources"
                    :key="source.url"
                    :href="source.url"
                    target="_blank"
                    rel="noreferrer"
                    class="inline-flex items-center justify-between gap-3 rounded-2xl border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700 transition hover:border-slate-300 hover:text-slate-950 dark:border-white/8 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-white/20 dark:hover:text-white"
                  >
                    <span class="truncate">{{ source.label }}</span>
                    <ExternalLink :size="14" />
                  </a>
                </div>
                <p class="mt-3 text-sm text-slate-500 dark:text-slate-400">
                  Reviewed {{ formatDate(destination.visaPolicy.verifiedAt) }}
                </p>
              </section>
            </div>
          </aside>

          <section class="min-h-0 overflow-y-auto p-5 md:p-6">
            <div class="grid gap-6">
              <section class="grid gap-3 md:grid-cols-3">
                <article class="rounded-[22px] border border-slate-200/70 bg-slate-50/90 p-4 dark:border-white/8 dark:bg-slate-950/32">
                  <p class="text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-400 dark:text-slate-500">
                    Visa Status
                  </p>
                  <div class="mt-3">
                    <StatusBadge
                      v-if="visaMeta"
                      :label="visaMeta.label"
                      :tone="visaMeta.tone"
                      size="md"
                    />
                  </div>
                </article>

                <article class="rounded-[22px] border border-slate-200/70 bg-slate-50/90 p-4 dark:border-white/8 dark:bg-slate-950/32">
                  <p class="text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-400 dark:text-slate-500">
                    Stay Limit
                  </p>
                  <p class="mt-3 text-base font-semibold tracking-[-0.02em] text-slate-900 dark:text-white">
                    {{ destination.visaPolicy.stayLimit ?? 'Check source' }}
                  </p>
                </article>

                <article class="rounded-[22px] border border-slate-200/70 bg-slate-50/90 p-4 dark:border-white/8 dark:bg-slate-950/32">
                  <p class="text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-400 dark:text-slate-500">
                    Application State
                  </p>
                  <p class="mt-3 text-base font-semibold tracking-[-0.02em] text-slate-900 dark:text-white">
                    {{ nextEvent?.applicationsOpen ? 'Applications open' : 'Monitor release window' }}
                  </p>
                </article>
              </section>

              <section
                v-for="group in groupedEvents"
                :key="group.month"
                class="grid gap-3"
              >
                <div class="sticky top-0 z-10 w-fit rounded-full border border-slate-200/70 bg-white px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500 shadow-sm dark:border-white/8 dark:bg-slate-900/92 dark:text-slate-400">
                  {{ group.label }}
                </div>

                <article
                  v-for="event in group.events"
                  :key="event.id"
                  class="rounded-[24px] border border-slate-200/70 bg-slate-50/90 p-5 shadow-sm transition hover:border-slate-300 hover:bg-white dark:border-white/8 dark:bg-slate-950/32 dark:hover:border-white/15 dark:hover:bg-slate-950/50"
                >
                  <div class="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                    <div class="space-y-2">
                      <p class="text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-400 dark:text-slate-500">
                        {{ formatDateRange(event.startDate, event.endDate) }}
                      </p>
                      <h3 class="text-xl font-semibold tracking-[-0.02em] text-slate-950 dark:text-white">
                        {{ event.title }}
                      </h3>
                      <p class="inline-flex items-center gap-1.5 text-sm text-slate-500 dark:text-slate-400">
                        <MapPin :size="14" />
                        {{ event.city }}
                      </p>
                    </div>

                    <div class="flex flex-wrap gap-2 lg:justify-end">
                      <span class="inline-flex w-fit items-center rounded-full bg-slate-900 px-3 py-1 text-xs font-semibold text-white dark:bg-sky-500/18 dark:text-sky-200">
                        {{ countdownLabel(event.startDate, todayIso) }}
                      </span>
                      <StatusBadge :label="event.applicationsOpen ? 'Open' : 'Closed'" :tone="event.applicationsOpen ? 'open' : 'closed'" />
                    </div>
                  </div>

                  <div class="mt-4 flex flex-wrap gap-2">
                    <span class="inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-600 dark:border-white/8 dark:bg-slate-900 dark:text-slate-300">
                      {{ formatPrice(event.price) }}
                    </span>
                    <span class="inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-600 dark:border-white/8 dark:bg-slate-900 dark:text-slate-300">
                      {{ event.verified ? 'Verified listing' : 'Unverified listing' }}
                    </span>
                    <span class="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-600 dark:border-white/8 dark:bg-slate-900 dark:text-slate-300">
                      <Clock3 :size="13" />
                      {{ event.durationDays }} day{{ event.durationDays === 1 ? '' : 's' }}
                    </span>
                  </div>

                  <div class="mt-5 flex justify-end">
                    <a
                      :href="event.pageUrl"
                      target="_blank"
                      rel="noreferrer"
                      class="inline-flex items-center gap-2 rounded-2xl bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-sky-500/18 dark:text-sky-200 dark:hover:bg-sky-500/24"
                    >
                      View committee page
                      <ExternalLink :size="14" />
                    </a>
                  </div>
                </article>
              </section>
            </div>
          </section>
        </div>
      </article>
    </div>
  </Transition>
</template>

<style scoped>
.dashboard-modal-enter-active,
.dashboard-modal-leave-active {
  transition: opacity 180ms ease;
}

.dashboard-modal-enter-from,
.dashboard-modal-leave-to {
  opacity: 0;
}
</style>
