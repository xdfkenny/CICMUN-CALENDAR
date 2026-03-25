<script setup lang="ts">
import { Icon } from '@iconify/vue'

import { FLAG_CODE_BY_DESTINATION_KEY, formatDate, formatVisaLabel, getDestinationStatus, getNextEvent, getStayWindowGuidance, sortDestinations } from '~/utils/international-dashboard'

const { dataset, sections, visaFreeDestinations, eVisaDestinations, visaRequiredDestinations } = useGlobalDataset()

useSeoMeta({
  title: 'Global',
  description: 'Hidden country selector for the international MUN dataset.',
  robots: 'noindex, nofollow',
})

const totalEvents = computed(() => dataset.events?.length ?? 0)
const totalCountries = computed(() => dataset.destinations.length)
const todayIso = new Date().toISOString().slice(0, 10)
const visaVerificationDateLabel = computed(() => formatDate(dataset.metadata.visaVerificationDate))

const flagCodeFor = (destinationKey: string) => FLAG_CODE_BY_DESTINATION_KEY[destinationKey] ?? null
const sectionIdFor = (sectionKey: string) => `global-section-${sectionKey}`

const sortedSections = computed(() => sections.map((section) => ({
  ...section,
  destinations: sortDestinations(section.destinations, 'status', todayIso),
})))

const sectionLinks = computed(() => sortedSections.value.map((section) => ({
  id: sectionIdFor(section.key),
  key: section.key,
  title: section.title,
  count: section.destinations.length,
})))

const nextEventDateLabel = (destination: ReturnType<typeof useGlobalDataset>['destinations'][number]) => {
  const nextEvent = getNextEvent(destination, todayIso)
  return nextEvent ? formatDate(nextEvent.startDate) : 'No upcoming date'
}

const statusCopyByDestination = (destination: ReturnType<typeof useGlobalDataset>['destinations'][number]) => {
  const status = getDestinationStatus(destination, todayIso)

  if (status === 'open') return 'Open now'
  if (status === 'upcoming') return 'Upcoming'
  return 'Closed'
}

const statusClassesByDestination = (destination: ReturnType<typeof useGlobalDataset>['destinations'][number]) => {
  const status = getDestinationStatus(destination, todayIso)

  if (status === 'open') return 'bg-emerald-50 text-emerald-700 ring-emerald-200'
  if (status === 'upcoming') return 'bg-sky-50 text-sky-700 ring-sky-200'
  return 'bg-slate-100 text-slate-600 ring-slate-200'
}
</script>

<template>
  <main class="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(251,191,36,0.22),_transparent_30%),linear-gradient(180deg,#f8fafc_0%,#fffaf0_48%,#eef2ff_100%)] px-4 py-8 text-slate-950 md:px-6 md:py-10">
    <div class="mx-auto max-w-6xl">
      <header class="rounded-[32px] border border-white/70 bg-white/80 px-6 py-8 shadow-[0_28px_70px_rgba(15,23,42,0.08)] backdrop-blur md:px-8">
        <div class="max-w-3xl space-y-4">
          <h1 class="text-4xl font-extrabold tracking-[-0.06em] text-slate-950 md:text-6xl">
            Global
          </h1>
          <p class="max-w-2xl text-base leading-7 text-slate-600 md:text-lg">
            Explore countries hosting short events, check how easy entry is with a Venezuelan passport, and open each flag for dates, cities, stay limits, and extra travel details.
          </p>
          <p class="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-slate-600 ring-1 ring-inset ring-slate-200">
            <Icon icon="solar:verified-check-bold-duotone" class="size-4 text-sky-600" />
            Visa guidance checked {{ visaVerificationDateLabel }}
          </p>
        </div>

        <div class="mt-6 grid gap-3 sm:grid-cols-2 xl:grid-cols-5">
          <article class="rounded-[24px] border border-slate-200/80 bg-white/90 p-4">
            <div class="flex items-center justify-between gap-3">
              <p class="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500">
                Countries
              </p>
              <span class="grid size-10 place-items-center rounded-2xl bg-sky-50 text-sky-700 ring-1 ring-inset ring-sky-100">
                <Icon icon="solar:global-bold-duotone" class="size-5" />
              </span>
            </div>
            <p class="mt-2 text-3xl font-semibold tracking-[-0.05em] text-slate-950">
              {{ totalCountries }}
            </p>
          </article>

          <article class="rounded-[24px] border border-slate-200/80 bg-white/90 p-4">
            <div class="flex items-center justify-between gap-3">
              <p class="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500">
                Visa-Free
              </p>
              <span class="grid size-10 place-items-center rounded-2xl bg-emerald-50 text-emerald-700 ring-1 ring-inset ring-emerald-100">
                <Icon icon="solar:shield-check-bold-duotone" class="size-5" />
              </span>
            </div>
            <p class="mt-2 text-3xl font-semibold tracking-[-0.05em] text-slate-950">
              {{ visaFreeDestinations.length }}
            </p>
          </article>

          <article class="rounded-[24px] border border-slate-200/80 bg-white/90 p-4">
            <div class="flex items-center justify-between gap-3">
              <p class="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500">
                E-Visa
              </p>
              <span class="grid size-10 place-items-center rounded-2xl bg-amber-50 text-amber-700 ring-1 ring-inset ring-amber-100">
                <Icon icon="solar:passport-bold-duotone" class="size-5" />
              </span>
            </div>
            <p class="mt-2 text-3xl font-semibold tracking-[-0.05em] text-slate-950">
              {{ eVisaDestinations.length }}
            </p>
          </article>

          <article class="rounded-[24px] border border-slate-200/80 bg-white/90 p-4">
            <div class="flex items-center justify-between gap-3">
              <p class="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500">
                Visible Events
              </p>
              <span class="grid size-10 place-items-center rounded-2xl bg-violet-50 text-violet-700 ring-1 ring-inset ring-violet-100">
                <Icon icon="solar:calendar-mark-bold-duotone" class="size-5" />
              </span>
            </div>
            <p class="mt-2 text-3xl font-semibold tracking-[-0.05em] text-slate-950">
              {{ totalEvents }}
            </p>
          </article>

          <article class="rounded-[24px] border border-slate-200/80 bg-white/90 p-4">
            <div class="flex items-center justify-between gap-3">
              <p class="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500">
                Visa Required
              </p>
              <span class="grid size-10 place-items-center rounded-2xl bg-rose-50 text-rose-700 ring-1 ring-inset ring-rose-100">
                <Icon icon="solar:danger-triangle-bold-duotone" class="size-5" />
              </span>
            </div>
            <p class="mt-2 text-3xl font-semibold tracking-[-0.05em] text-slate-950">
              {{ visaRequiredDestinations.length }}
            </p>
          </article>

          <article class="rounded-[24px] border border-slate-200/80 bg-white/90 p-4 sm:col-span-2 xl:col-span-5">
            <div class="flex items-center justify-between gap-3">
              <p class="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500">
                Based on Origin Passport
              </p>
              <span class="grid size-10 place-items-center rounded-2xl bg-slate-100 text-slate-700 ring-1 ring-inset ring-slate-200">
                <Icon icon="solar:card-2-bold-duotone" class="size-5" />
              </span>
            </div>
            <p class="mt-2 text-3xl font-semibold tracking-[-0.05em] text-slate-950">
              {{ dataset.metadata.passportOrigin }}
            </p>
          </article>
        </div>
      </header>

      <nav class="sticky top-4 z-20 mt-6 rounded-[28px] border border-white/80 bg-white/85 p-3 shadow-[0_18px_50px_rgba(15,23,42,0.08)] backdrop-blur">
        <div class="flex flex-wrap gap-2">
          <a
            v-for="sectionLink in sectionLinks"
            :key="sectionLink.key"
            :href="`#${sectionLink.id}`"
            class="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-slate-300 hover:bg-white hover:text-slate-950"
          >
            <span>{{ sectionLink.title }}</span>
            <span class="rounded-full bg-slate-900 px-2 py-0.5 text-[11px] font-semibold text-white">
              {{ sectionLink.count }}
            </span>
          </a>
        </div>
      </nav>

      <section
        v-for="section in sortedSections"
        :key="section.key"
        :id="sectionIdFor(section.key)"
        class="mt-8 scroll-mt-28 rounded-[32px] border border-white/70 bg-white/75 p-5 shadow-[0_24px_70px_rgba(15,23,42,0.08)] backdrop-blur md:p-8"
      >
        <div class="mb-6 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div class="max-w-3xl">
            <div class="flex items-center gap-3">
              <span
                class="grid size-11 place-items-center rounded-2xl ring-1 ring-inset"
                :class="section.key === 'visa-free'
                  ? 'bg-emerald-50 text-emerald-700 ring-emerald-100'
                  : section.key === 'e-visa'
                    ? 'bg-amber-50 text-amber-700 ring-amber-100'
                    : 'bg-rose-50 text-rose-700 ring-rose-100'"
              >
                <Icon
                  :icon="section.key === 'visa-free'
                    ? 'solar:shield-check-bold-duotone'
                    : section.key === 'e-visa'
                      ? 'solar:passport-bold-duotone'
                      : 'solar:danger-triangle-bold-duotone'"
                  class="size-5"
                />
              </span>
              <div>
                <p class="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                  {{ section.eyebrow }}
                </p>
                <h2 class="mt-1 text-2xl font-semibold tracking-[-0.04em] text-slate-950">
                  {{ section.title }}
                </h2>
                <p class="mt-2 text-sm leading-6 text-slate-500">
                  {{ section.description }}
                </p>
              </div>
            </div>
          </div>
          <div class="space-y-1 text-sm text-slate-500 md:text-right">
            <p>
              {{ section.destinations.length }} countries | {{ section.eventCount }} events
            </p>
            <p>
              Visa checked {{ visaVerificationDateLabel }}
            </p>
          </div>
        </div>

        <div
          v-if="section.advisory"
          class="mb-6 rounded-[26px] px-4 py-4 text-sm leading-6 shadow-[0_12px_30px_rgba(15,23,42,0.08)]"
          :class="section.key === 'e-visa'
            ? 'border border-amber-200/80 bg-[linear-gradient(180deg,rgba(255,247,237,0.98),rgba(254,243,199,0.96))] text-amber-950'
            : 'border border-rose-200/80 bg-[linear-gradient(180deg,rgba(255,241,242,0.98),rgba(255,228,230,0.96))] text-rose-950'"
        >
          {{ section.advisory }}
        </div>

        <div class="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-6">
          <NuxtLink
            v-for="destination in section.destinations"
            :key="destination.key"
            :to="`/global/${destination.key}`"
            :aria-label="`Open ${destination.label}`"
            :title="destination.label"
            class="group flex h-full flex-col items-center gap-3 rounded-[28px] border border-slate-200/70 bg-[linear-gradient(180deg,rgba(255,255,255,0.95),rgba(241,245,249,0.95))] p-4 text-center transition duration-200 hover:-translate-y-1 hover:border-slate-300 hover:shadow-[0_18px_36px_rgba(15,23,42,0.12)] focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
          >
            <span class="flag-avatar-shell grid size-18 place-items-center rounded-full border border-slate-200 bg-white shadow-[0_16px_30px_rgba(15,23,42,0.1)] transition duration-200 group-hover:scale-105 group-hover:border-slate-300 sm:size-20">
              <span v-if="flagCodeFor(destination.key)" class="flag-avatar size-11 shadow-[0_10px_24px_rgba(15,23,42,0.18)]">
                <span
                  :class="['fi', 'fis', `fi-${flagCodeFor(destination.key)}`]"
                  class="flag-avatar-flag"
                  aria-hidden="true"
                />
              </span>
              <span v-else class="text-4xl" aria-hidden="true">{{ destination.flag }}</span>
            </span>

            <div class="space-y-2">
              <p class="text-sm font-semibold tracking-[-0.02em] text-slate-800">
                {{ destination.label }}
              </p>
              <p class="text-xs text-slate-500">
                {{ destination.eventCount }} event{{ destination.eventCount === 1 ? '' : 's' }}
              </p>
              <div class="rounded-[18px] border border-slate-200 bg-slate-50/90 px-3 py-2 text-left shadow-[inset_0_1px_0_rgba(255,255,255,0.7)]">
                <p
                  class="inline-flex items-center rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] ring-1 ring-inset"
                  :class="statusClassesByDestination(destination)"
                >
                  {{ statusCopyByDestination(destination) }}
                </p>
                <p class="mt-2 text-[11px] font-medium text-slate-600">
                  Next event: {{ nextEventDateLabel(destination) }}
                </p>
                <p class="mt-1 text-[11px] font-medium text-slate-600">
                  {{ getStayWindowGuidance(destination.visaPolicy.stayLimit).shortLabel }}
                </p>
                <p class="mt-1 text-[11px] font-medium text-slate-600">
                  {{ formatVisaLabel(destination.visaPolicy.category) }} | Checked {{ formatDate(destination.visaPolicy.verifiedAt) }}
                </p>
              </div>
              <p
                v-if="section.requiresVisaAction"
                class="inline-flex items-center justify-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.14em]"
                :class="section.key === 'visa-required' ? 'text-rose-700' : 'text-amber-700'"
              >
                <Icon
                  :icon="section.key === 'visa-required' ? 'solar:danger-circle-bold-duotone' : 'solar:passport-bold-duotone'"
                  class="size-4.5"
                />
                {{
                  section.key === 'visa-required'
                    ? 'Regular visa needed'
                    : destination.visaPolicy.category === 'visa on arrival'
                      ? 'Needs arrival visa'
                      : destination.visaPolicy.category === 'eTA'
                        ? 'Needs eTA step'
                        : 'Needs eVisa step'
                }}
              </p>
            </div>
          </NuxtLink>
        </div>
      </section>
    </div>
  </main>
</template>
