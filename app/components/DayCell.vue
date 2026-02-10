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

const baseClasses = "aspect-square p-2 border-r border-b border-gray-300 cursor-pointer transition-all relative flex flex-col w-full text-left hover:bg-gray-50"
const currentMonthClasses = computed(() => props.isCurrentMonth ? "bg-white" : "bg-gray-50")
const todayClasses = computed(() => props.isToday ? "ring-2 ring-inset ring-red-600" : "")
const selectedClasses = computed(() => props.isSelected ? "bg-red-50" : "")

const getModelColor = (modelId: string) => {
  return MODELS[modelId]?.color || "#999"
}
</script>

<template>
  <button
    @click="emit('select')"
    :class="[baseClasses, currentMonthClasses, todayClasses, selectedClasses]"
    :aria-label="`${dateStr}: ${events.length} events`"
  >
    <!-- Day number -->
    <div class="text-sm font-semibold mb-1 leading-none" :class="isCurrentMonth ? 'text-gray-900' : 'text-gray-400'">
      {{ dayNum }}
    </div>

    <!-- Event badges - colored squares only -->
    <div class="flex flex-wrap gap-1 flex-1 content-start overflow-hidden">
      <div
        v-for="(event, idx) in events.slice(0, 6)"
        :key="`${event.id}-${idx}`"
        class="w-2 h-2 rounded-sm"
        :style="{ backgroundColor: getModelColor(event.model) }"
        :title="event.title"
      />
      <div v-if="events.length > 6" class="text-[10px] text-gray-600 font-semibold leading-none">
        +{{ events.length - 6 }}
      </div>
    </div>
  </button>
</template>
