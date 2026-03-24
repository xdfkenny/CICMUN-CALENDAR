<script setup lang="ts">
import { Icon } from '@iconify/vue'

import { FLAG_CODE_BY_DESTINATION_KEY, getStayWindowGuidance } from '~/utils/international-dashboard'

const { dataset, sections, visaFreeDestinations, eVisaDestinations } = useGlobalDataset()

useSeoMeta({
  title: 'Global',
  description: 'Hidden country selector for the international MUN dataset.',
  robots: 'noindex, nofollow',
})

const totalEvents = computed(() => dataset.events?.length ?? 0)
const totalCountries = computed(() => dataset.destinations.length)

const flagCodeFor = (destinationKey: string) => FLAG_CODE_BY_DESTINATION_KEY[destinationKey] ?? null
</script>

<template>
  <main class="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(251,191,36,0.22),_transparent_30%),linear-gradient(180deg,#f8fafc_0%,#fffaf0_48%,#eef2ff_100%)] px-4 py-8 text-slate-950 md:px-6 md:py-10">
    <div class="mx-auto max-w-6xl">
      <header class="rounded-[32px] border border-white/70 bg-white/80 px-6 py-8 shadow-[0_28px_70px_rgba(15,23,42,0.08)] backdrop-blur md:px-8">
        <div class="max-w-3xl space-y-4">
          <p class="text-[11px] font-semibold uppercase tracking-[0.22em] text-amber-700">
            Hidden Directory
          </p>
          <h1 class="text-4xl font-extrabold tracking-[-0.06em] text-slate-950 md:text-6xl">
            Global
          </h1>
          <p class="max-w-2xl text-base leading-7 text-slate-600 md:text-lg">
            Pick a flag and jump into the country page. Visa-free options stay separate from destinations that still require eVisa or on-arrival processing.
          </p>
        </div>

        <div class="mt-6 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
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

          <article class="rounded-[24px] border border-slate-200/80 bg-white/90 p-4 sm:col-span-2 xl:col-span-4">
            <div class="flex items-center justify-between gap-3">
              <p class="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500">
              Countries
              Passport Filter
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

      <section
        v-for="section in sections"
        :key="section.key"
        class="mt-8 rounded-[32px] border border-white/70 bg-white/75 p-5 shadow-[0_24px_70px_rgba(15,23,42,0.08)] backdrop-blur md:p-8"
      >
        <div class="mb-6 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div class="max-w-3xl">
            <div class="flex items-center gap-3">
              <span
                class="grid size-11 place-items-center rounded-2xl ring-1 ring-inset"
                :class="section.requiresVisaAction ? 'bg-amber-50 text-amber-700 ring-amber-100' : 'bg-emerald-50 text-emerald-700 ring-emerald-100'"
              >
                <Icon :icon="section.requiresVisaAction ? 'solar:passport-bold-duotone' : 'solar:shield-check-bold-duotone'" class="size-5" />
              </span>
              <div>
                <p class="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                  {{ section.eyebrow }}
                </p>
                <h2 class="mt-1 text-2xl font-semibold tracking-[-0.04em] text-slate-950">
                  {{ section.title }}
                </h2>
              </div>
            </div>
          </div>
          <div class="text-sm text-slate-500">
            {{ section.destinations.length }} countries | {{ section.eventCount }} events
          </div>
        </div>

        <div
          v-if="section.advisory"
          class="mb-6 rounded-[26px] border border-amber-200/80 bg-[linear-gradient(180deg,rgba(255,247,237,0.98),rgba(254,243,199,0.96))] px-4 py-4 text-sm leading-6 text-amber-950 shadow-[0_12px_30px_rgba(180,83,9,0.08)]"
        >
          {{ section.advisory }}
        </div>

        <div class="grid grid-cols-3 gap-4 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8">
          <article
            v-for="destination in section.destinations"
            :key="destination.key"
            class="group flex flex-col items-center gap-3 rounded-[28px] border border-slate-200/70 bg-[linear-gradient(180deg,rgba(255,255,255,0.95),rgba(241,245,249,0.95))] p-4 text-center transition duration-200 hover:-translate-y-1 hover:border-slate-300 hover:shadow-[0_18px_36px_rgba(15,23,42,0.12)]"
          >
            <NuxtLink
              :to="`/global/${destination.key}`"
              :aria-label="`Open ${destination.label}`"
              :title="destination.label"
              class="flag-avatar-shell grid size-20 place-items-center rounded-full border border-slate-200 bg-white shadow-[0_16px_30px_rgba(15,23,42,0.1)] transition duration-200 hover:scale-105 hover:border-slate-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
            >
              <span v-if="flagCodeFor(destination.key)" class="flag-avatar size-11 shadow-[0_10px_24px_rgba(15,23,42,0.18)]">
                <span
                  :class="['fi', 'fis', `fi-${flagCodeFor(destination.key)}`]"
                  class="flag-avatar-flag"
                  aria-hidden="true"
                />
              </span>
              <span v-else class="text-4xl" aria-hidden="true">{{ destination.flag }}</span>
            </NuxtLink>

            <div class="space-y-1">
              <p class="text-sm font-semibold tracking-[-0.02em] text-slate-800">
                {{ destination.label }}
              </p>
              <p class="text-xs text-slate-500">
                {{ destination.eventCount }} event{{ destination.eventCount === 1 ? '' : 's' }}
              </p>
              <p class="text-[11px] font-medium text-slate-500">
                {{ getStayWindowGuidance(destination.visaPolicy.stayLimit).shortLabel }}
              </p>
              <p v-if="section.requiresVisaAction" class="text-[11px] font-semibold uppercase tracking-[0.14em] text-amber-700">
                Needs {{ destination.visaPolicy.category === 'visa on arrival' ? 'arrival visa' : 'eVisa step' }}
              </p>
            </div>
          </article>
        </div>
      </section>
    </div>
  </main>
</template>
