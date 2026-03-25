<script setup lang="ts">
withDefaults(defineProps<{
  title?: string
  subtitle?: string
}>(), {
  title: 'Preparing Global View',
  subtitle: 'Loading destinations, visa notes, and event cards.',
})
</script>

<template>
  <section class="global-panel mx-auto flex min-h-[70vh] w-full max-w-5xl flex-col items-center justify-center rounded-[32px] bg-white/95 px-6 py-12 text-center">
    <div class="global-loader-dots" aria-hidden="true">
      <span />
      <span />
      <span />
    </div>
    <p class="mt-6 text-[11px] font-semibold uppercase tracking-[0.2em] text-sky-700">
      Global Route
    </p>
    <h1 class="mt-3 text-3xl font-extrabold tracking-[-0.05em] text-slate-950 md:text-5xl">
      {{ title }}
    </h1>
    <p class="mt-3 max-w-2xl text-sm leading-7 text-slate-600 md:text-base">
      {{ subtitle }}
    </p>
  </section>
</template>
