<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    label: string
    tone: 'open' | 'closed' | 'upcoming' | 'visa-free' | 'visa' | 'arrival' | 'required' | 'eta'
    size?: 'sm' | 'md'
  }>(),
  {
    size: 'sm',
  },
)

const toneClasses: Record<string, string> = {
  open: 'bg-emerald-100 text-emerald-800 ring-1 ring-inset ring-emerald-200 dark:bg-emerald-500/12 dark:text-emerald-200 dark:ring-emerald-500/30',
  closed: 'bg-rose-100 text-rose-800 ring-1 ring-inset ring-rose-200 dark:bg-rose-500/12 dark:text-rose-200 dark:ring-rose-500/30',
  upcoming: 'bg-amber-100 text-amber-800 ring-1 ring-inset ring-amber-200 dark:bg-amber-500/12 dark:text-amber-200 dark:ring-amber-500/30',
  'visa-free': 'bg-emerald-100 text-emerald-800 ring-1 ring-inset ring-emerald-200 dark:bg-emerald-500/12 dark:text-emerald-200 dark:ring-emerald-500/30',
  visa: 'bg-amber-100 text-amber-800 ring-1 ring-inset ring-amber-200 dark:bg-amber-500/12 dark:text-amber-200 dark:ring-amber-500/30',
  arrival: 'bg-orange-100 text-orange-800 ring-1 ring-inset ring-orange-200 dark:bg-orange-500/12 dark:text-orange-200 dark:ring-orange-500/30',
  required: 'bg-rose-100 text-rose-800 ring-1 ring-inset ring-rose-200 dark:bg-rose-500/12 dark:text-rose-200 dark:ring-rose-500/30',
  eta: 'bg-sky-100 text-sky-800 ring-1 ring-inset ring-sky-200 dark:bg-sky-500/12 dark:text-sky-200 dark:ring-sky-500/30',
}

const sizeClasses = {
  sm: 'px-2.5 py-1 text-[11px]',
  md: 'px-3 py-1.5 text-xs',
}
</script>

<template>
  <span
    class="inline-flex w-fit items-center rounded-full font-semibold uppercase tracking-[0.14em]"
    :class="[toneClasses[props.tone], sizeClasses[props.size]]"
  >
    {{ props.label }}
  </span>
</template>
