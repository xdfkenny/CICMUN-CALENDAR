<script setup lang="ts">
import { Icon } from '@iconify/vue'

import type { InternationalEvent } from '~/types/international'
import { formatDateRange, formatPrice, formatVisaLabel, getWeekendTimingMeta } from '~/utils/international-dashboard'
import {
  formatTravelDate,
  subtractDaysFromIsoDate,
  type TravelPlannerResponse,
} from '~/utils/travel-planner'

import StatusBadge from '~/components/international/StatusBadge.vue'

const props = defineProps<{
  event: InternationalEvent | null
}>()

const emit = defineEmits<{
  close: []
}>()

const runtimeConfig = useRuntimeConfig()
const travelOriginLabel = runtimeConfig.public.travelOriginLabel || 'Caracas, Venezuela'
const travelArrivalBufferDays = Number(runtimeConfig.public.travelArrivalBufferDays || 1)

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
const weekendTiming = computed(() => (
  props.event
    ? getWeekendTimingMeta(props.event.startDate, props.event.endDate)
    : null
))
const fallbackArrivalLabel = computed(() => (
  props.event
    ? formatTravelDate(subtractDaysFromIsoDate(props.event.startDate, travelArrivalBufferDays))
    : null
))

const travelPlan = ref<TravelPlannerResponse | null>(null)
const travelPending = ref(false)
const travelError = ref<string | null>(null)
let activeTravelRequest = 0
const primaryTravelLink = computed(() => travelPlan.value?.links[0] ?? null)
const travelQuickLinks = computed(() => (
  (travelPlan.value?.links ?? [])
    .slice(1)
    .filter((link) => link.label !== 'Search nearby airport')
    .slice(0, 3)
))

const loadTravelPlan = async (eventData: InternationalEvent) => {
  const requestId = ++activeTravelRequest

  travelPending.value = true
  travelError.value = null

  try {
    const response = await $fetch<TravelPlannerResponse>('/api/travel-plan', {
      query: {
        city: eventData.city,
        country: eventData.destinationLabel,
        location: eventData.location,
        startDate: eventData.startDate,
        destinationKey: eventData.destinationKey,
      },
    })

    if (requestId !== activeTravelRequest) return

    travelPlan.value = response
  } catch {
    if (requestId !== activeTravelRequest) return

    travelPlan.value = null
    travelError.value = 'Travel routing tools are unavailable right now.'
  } finally {
    if (requestId === activeTravelRequest) {
      travelPending.value = false
    }
  }
}

watch(() => props.event, (nextEvent) => {
  activeTravelRequest += 1

  if (!nextEvent) {
    travelPlan.value = null
    travelPending.value = false
    travelError.value = null
    return
  }

  travelPlan.value = null
  travelError.value = null
  void loadTravelPlan(nextEvent)
}, { immediate: true })
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
        class="absolute inset-0 bg-slate-950/55"
        aria-label="Close event details"
        @click="emit('close')"
      />

      <div class="relative z-10 w-full max-w-3xl">
        <article class="global-panel flex max-h-[calc(100vh-2rem)] w-full flex-col overflow-hidden rounded-[28px] bg-[linear-gradient(180deg,rgba(255,252,245,0.98),rgba(248,250,252,0.96))] md:max-h-[calc(100vh-3rem)]">
        <header class="shrink-0 border-b border-slate-200/80 px-5 py-5 md:px-7">
          <div class="flex items-start justify-between gap-4">
            <div class="space-y-2">
              <p class="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                Event Quick Look
              </p>
              <div class="flex items-center gap-3">
                <GlobalSpriteFlag
                  :destination-key="event.destinationKey"
                  :emoji-flag="event.destinationFlag"
                  wrapper-class="global-flag-frame h-8 aspect-[4/3]"
                  image-class="object-cover"
                  emoji-class="text-2xl"
                  loading="eager"
                />
                <span class="text-sm font-medium text-slate-500">
                  {{ event.destinationLabel }}
                </span>
              </div>
              <h2 :id="`global-event-title-${event.id}`" class="text-2xl font-semibold tracking-[-0.04em] text-slate-950 md:text-3xl">
                {{ event.title }}
              </h2>
              <p class="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-slate-600">
                <span class="inline-flex items-center gap-2 rounded-full bg-sky-50 px-3 py-1.5 font-medium text-sky-900 ring-1 ring-inset ring-sky-100">
                  <Icon icon="solar:calendar-date-bold-duotone" class="size-[15px] text-sky-600" />
                  {{ formatDateRange(event.startDate, event.endDate) }}
                </span>
                <span class="inline-flex items-center gap-2 rounded-full bg-fuchsia-50 px-3 py-1.5 font-medium text-fuchsia-900 ring-1 ring-inset ring-fuchsia-100">
                  <Icon icon="solar:routing-3-bold-duotone" class="size-[15px] text-fuchsia-600" />
                  {{ event.location }}
                </span>
                <span
                  v-if="weekendTiming"
                  class="inline-flex items-center gap-2 rounded-full px-3 py-1.5 font-medium ring-1 ring-inset"
                  :class="weekendTiming.badgeClasses"
                  :title="weekendTiming.description"
                >
                  <Icon :icon="weekendTiming.icon" class="size-[15px]" />
                  {{ weekendTiming.label }}
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
                  <span
                    class="grid size-10 place-items-center rounded-2xl ring-1 ring-inset"
                    :class="event.applicationsOpen
                      ? 'bg-emerald-50 text-emerald-700 ring-emerald-100'
                      : 'bg-rose-50 text-rose-700 ring-rose-100'"
                  >
                    <Icon :icon="event.applicationsOpen ? 'solar:check-circle-bold-duotone' : 'solar:close-circle-bold-duotone'" class="size-5" />
                  </span>
                </div>
                <div class="mt-3">
                  <StatusBadge :label="event.applicationsOpen ? 'Open' : 'Closed'" :tone="applicationTone" size="md" />
                </div>
                <p
                  v-if="weekendTiming"
                  class="mt-3 inline-flex items-center gap-2 rounded-full px-3 py-2 text-sm font-semibold ring-1 ring-inset"
                  :class="weekendTiming.badgeClasses"
                >
                  <Icon :icon="weekendTiming.icon" class="size-4" />
                  {{ weekendTiming.description }}
                </p>
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
                <p class="flex items-center gap-2 rounded-2xl bg-emerald-50 px-3 py-2 font-semibold text-emerald-900 ring-1 ring-inset ring-emerald-100">
                  <Icon icon="solar:wallet-money-bold-duotone" class="size-4 text-emerald-600" />
                  <span>Price: {{ formatPrice(event.price) }}</span>
                </p>
                <p
                  class="flex items-center gap-2 rounded-2xl px-3 py-2 font-semibold ring-1 ring-inset"
                  :class="event.verified
                    ? 'bg-sky-50 text-sky-900 ring-sky-100'
                    : 'bg-slate-100 text-slate-700 ring-slate-200'"
                >
                  <Icon
                    :icon="event.verified ? 'solar:verified-check-bold-duotone' : 'solar:shield-cross-bold-duotone'"
                    class="size-4"
                    :class="event.verified ? 'text-sky-600' : 'text-slate-500'"
                  />
                  <span>Verified listing: {{ event.verified ? 'Yes' : 'No' }}</span>
                </p>
                <p class="flex items-center gap-2 rounded-2xl bg-violet-50 px-3 py-2 font-semibold text-violet-900 ring-1 ring-inset ring-violet-100">
                  <Icon icon="solar:city-bold-duotone" class="size-4 text-violet-600" />
                  <span>City: {{ event.city }}</span>
                </p>
                <p class="flex items-center gap-2 rounded-2xl bg-fuchsia-50 px-3 py-2 font-semibold text-fuchsia-900 ring-1 ring-inset ring-fuchsia-100">
                  <Icon icon="solar:global-bold-duotone" class="size-4 text-fuchsia-600" />
                  <span>Destination: {{ event.destinationFlag }} {{ event.destinationLabel }}</span>
                </p>
              </div>
            </article>
          </section>

          <aside class="space-y-4">
            <article class="rounded-[24px] border border-slate-200/80 bg-white/90 p-5">
              <div class="flex items-center justify-between gap-3">
                <p class="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500">
                  Travel Route
                </p>
                <span class="grid size-10 place-items-center rounded-2xl bg-sky-50 text-sky-700 ring-1 ring-inset ring-sky-100">
                  <Icon icon="solar:map-arrow-square-bold-duotone" class="size-5" />
                </span>
              </div>

              <div class="mt-4 flex flex-wrap gap-2">
                <span class="inline-flex items-center rounded-full bg-slate-100 px-3 py-1.5 text-xs font-semibold text-slate-700 ring-1 ring-inset ring-slate-200">
                  {{ travelPlan?.originLabel ?? travelOriginLabel }} -> {{ event.city }}
                </span>
                <span class="inline-flex items-center rounded-full bg-amber-50 px-3 py-1.5 text-xs font-semibold text-amber-900 ring-1 ring-inset ring-amber-200">
                  Arrive by {{ travelPlan?.arrivalDeadlineLabel ?? fallbackArrivalLabel }}
                </span>
              </div>

              <div v-if="travelPending" class="mt-4 rounded-[18px] border border-slate-200/80 bg-slate-50/85 px-4 py-3">
                <p class="text-sm font-medium text-slate-700">
                  Preparing route options for this venue.
                </p>
              </div>

              <template v-else-if="travelPlan">
                <a
                  v-if="primaryTravelLink"
                  :href="primaryTravelLink.url"
                  target="_blank"
                  rel="noreferrer"
                  class="mt-4 block rounded-[22px] border border-slate-900 bg-slate-900 p-4 text-white transition hover:bg-slate-800"
                >
                  <p class="text-[11px] font-semibold uppercase tracking-[0.14em] text-sky-100/70">
                    Main planner
                  </p>
                  <div class="mt-2 flex items-center justify-between gap-3">
                    <div>
                      <h3 class="text-base font-semibold tracking-[-0.03em]">
                        {{ primaryTravelLink.label }}
                      </h3>
                      <p class="mt-1 text-sm text-slate-200">
                        {{ primaryTravelLink.description }}
                      </p>
                    </div>
                    <Icon icon="solar:square-top-down-line-duotone" class="size-5 shrink-0" />
                  </div>
                </a>

                <div
                  v-if="travelPlan.map"
                  class="mt-4 overflow-hidden rounded-[22px] border border-slate-200/80 bg-white"
                >
                  <div class="flex items-center justify-between gap-3 px-4 py-3">
                    <div>
                      <p class="text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-500">
                        Venue map
                      </p>
                      <p class="mt-1 text-sm font-medium text-slate-700">
                        {{ travelPlan.map.caption }}
                      </p>
                    </div>
                    <a
                      :href="travelPlan.map.openUrl"
                      target="_blank"
                      rel="noreferrer"
                      class="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-semibold text-slate-700 transition hover:border-slate-300 hover:bg-white hover:text-slate-950"
                    >
                      Open
                      <Icon icon="solar:square-top-down-line-duotone" class="size-4" />
                    </a>
                  </div>

                  <iframe
                    :src="travelPlan.map.embedUrl"
                    class="h-40 w-full border-0"
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                    title="Event venue map"
                  />
                </div>

                <div class="mt-4 grid gap-2 sm:grid-cols-3">
                  <a
                    v-for="link in travelQuickLinks"
                    :key="link.url"
                    :href="link.url"
                    target="_blank"
                    rel="noreferrer"
                    class="rounded-[18px] border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-300 hover:bg-white hover:text-slate-950"
                  >
                    <p class="truncate">
                      {{ link.label }}
                    </p>
                    <p class="mt-1 truncate text-xs font-medium text-slate-500">
                      {{ link.description }}
                    </p>
                    <Icon :icon="link.icon" class="mt-3 size-[16px]" />
                  </a>
                </div>
              </template>

              <p v-else-if="travelError" class="mt-4 rounded-[20px] border border-rose-200/80 bg-rose-50 px-4 py-3 text-sm font-medium text-rose-800">
                {{ travelError }}
              </p>
            </article>

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
              <p class="mt-4 rounded-[20px] bg-white/8 px-4 py-3 text-sm leading-7 text-slate-200 ring-1 ring-inset ring-white/10">
                {{ event.visaPolicy.note }}
              </p>
              <p v-if="event.visaPolicy.stayLimit" class="mt-3 inline-flex items-center gap-2 rounded-full bg-sky-400/12 px-3 py-2 text-sm font-medium text-sky-100 ring-1 ring-inset ring-white/10">
                <Icon icon="solar:alarm-bold-duotone" class="size-4" />
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
