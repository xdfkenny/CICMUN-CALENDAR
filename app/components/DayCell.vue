<script setup lang="ts">
import type { CalendarEvent } from '~/types/calendar'
import { MODELS } from '~/utils/models'

interface Props {
  dateStr: string
  dayNum: number
  isCurrentMonth: boolean
  isToday: boolean
  isSelected: boolean
  events: CalendarEvent[]
}

const props = defineProps<Props>()
const emit = defineEmits(['select'])

const baseClasses = "aspect-square p-1 border-r border-b border-black cursor-pointer transition-all relative flex flex-col w-full text-left"
const currentMonthClasses = computed(() => props.isCurrentMonth ? "bg-white" : "bg-gray-100")
const todayClasses = computed(() => props.isToday ? "border-2 border-black" : "")
const selectedClasses = computed(() => props.isSelected ? "ring-2 ring-inset ring-black" : "")

const getModelColor = (modelId: string) => {
  return MODELS[modelId]?.color || "#999"
}
</script>

<template>
  <button
    @click="emit('select')"
    :class="[baseClasses, currentMonthClasses, todayClasses, selectedClasses]"
    :aria-label="`${dateStr}: ${events.length} events`"
    style="font-family: 'Chicago, monospace'"
  >
    <!-- Day number -->
    <div class="text-xs font-bold text-black mb-0.5 leading-none">
      {{ dayNum }}
    </div>

    <!-- Event badges - colored squares only -->
    <div class="flex flex-wrap gap-0.5 flex-1 content-start overflow-hidden">
      <div
        v-for="(event, idx) in events.slice(0, 6)"
        :key="`${event.id}-${idx}`"
        class="w-2 h-2"
        :style="{ backgroundColor: getModelColor(event.model) }"
        :title="event.title"
      />
      <div v-if="events.length > 6" class="text-[10px] text-black font-bold leading-none">
        +
      </div>
    </div>
  </button>
</template>
