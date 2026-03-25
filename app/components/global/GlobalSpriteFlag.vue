<script setup lang="ts">
import { PASSPORT_INDEX_FLAG_CODE_BY_DESTINATION_KEY } from '~/utils/international-dashboard'

const props = withDefaults(defineProps<{
  destinationKey?: string | null
  emojiFlag?: string
  wrapperClass?: string
  imageClass?: string
  spriteScaleClass?: string
  emojiClass?: string
  loading?: 'eager' | 'lazy'
}>(), {
  destinationKey: null,
  emojiFlag: '🌐',
  wrapperClass: 'global-flag-chip h-8 aspect-[4/3]',
  imageClass: 'object-contain p-[10%]',
  spriteScaleClass: '',
  emojiClass: 'text-2xl',
  loading: 'lazy',
})

const hasLoadError = ref(false)

const flagCode = computed(() => {
  if (!props.destinationKey) return null
  return PASSPORT_INDEX_FLAG_CODE_BY_DESTINATION_KEY[props.destinationKey] ?? null
})

const flagUrl = computed(() => {
  if (!flagCode.value) return null
  return `https://img.passportindex.org/flags/4x3/${flagCode.value}.svg`
})

watch(flagCode, () => {
  hasLoadError.value = false
})
</script>

<template>
  <span :class="['inline-flex items-center justify-center overflow-hidden leading-none', wrapperClass]">
    <img
      v-if="flagUrl && !hasLoadError"
      :src="flagUrl"
      :class="['block h-full w-full', imageClass, spriteScaleClass]"
      alt=""
      aria-hidden="true"
      width="32"
      height="24"
      decoding="async"
      :loading="loading"
      referrerpolicy="no-referrer"
      @error="hasLoadError = true"
    >
    <span v-else :class="emojiClass" aria-hidden="true">
      {{ emojiFlag }}
    </span>
  </span>
</template>
