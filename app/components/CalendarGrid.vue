<script setup lang="ts">
import type { CalendarEvent } from '~/types/calendar'
import { formatDateISO, parseDate } from '~/utils/calendar'

interface Props {
  events: CalendarEvent[]
  selectedDate?: string | null
  filteredModels: Set<string>
}

const props = defineProps<Props>()
const emit = defineEmits(['dateSelect'])

const today = new Date()
const currentMonth = ref(new Date(today.getFullYear(), today.getMonth(), 1))

const year = computed(() => currentMonth.value.getFullYear())
const month = computed(() => currentMonth.value.getMonth())

const firstDay = computed(() => new Date(year.value, month.value, 1).getDay())
const daysInMonth = computed(() => new Date(year.value, month.value + 1, 0).getDate())
const daysInPrevMonth = computed(() => new Date(year.value, month.value, 0).getDate())

const calendarDays = computed(() => {
  const days: (number | null)[] = []
  
  for (let i = firstDay.value - 1; i >= 0; i--) {
    days.push(-(daysInPrevMonth.value - i))
  }

  for (let i = 1; i <= daysInMonth.value; i++) {
    days.push(i)
  }

  const remainingDays = 42 - days.length
  for (let i = 1; i <= remainingDays; i++) {
    days.push(-(i + 1000))
  }
  
  return days
})

const previousMonth = () => {
  currentMonth.value = new Date(year.value, month.value - 1, 1)
}

const nextMonth = () => {
  currentMonth.value = new Date(year.value, month.value + 1, 1)
}

const goToToday = () => {
  currentMonth.value = new Date(today.getFullYear(), today.getMonth(), 1)
}

const monthName = computed(() => currentMonth.value.toLocaleDateString("en-US", {
  month: "long",
  year: "numeric",
}))

const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

const getDayData = (dayNum: number) => {
  let dateStr = ""
  let isCurrentMonth = true
  let isToday = false

  if (dayNum > 0) {
    dateStr = formatDateISO(new Date(year.value, month.value, dayNum))
    isToday = dateStr === formatDateISO(today) && month.value === today.getMonth()
  } else if (dayNum < -1000) {
    const nextMonthDay = -dayNum - 1000
    dateStr = formatDateISO(new Date(year.value, month.value + 1, nextMonthDay))
    isCurrentMonth = false
  } else {
    const prevMonthDay = -dayNum
    dateStr = formatDateISO(new Date(year.value, month.value - 1, prevMonthDay))
    isCurrentMonth = false
  }

  const dayEvents = props.events.filter((event) => {
    const start = parseDate(event.startDate)
    const end = parseDate(event.endDate)
    const date = parseDate(dateStr)
    return date >= start && date <= end && props.filteredModels.has(event.model)
  })

  return {
    dateStr,
    dayNum: Math.abs(dayNum) > 1000 ? Math.abs(dayNum) - 1000 : Math.abs(dayNum),
    isCurrentMonth,
    isToday,
    dayEvents
  }
}
</script>

<template>
  <div class="mac-window p-4">
    <!-- Title bar -->
    <div class="border-b-2 border-black pb-2 mb-4">
      <h2 class="text-sm font-bold text-black" style="font-family: 'Chicago, monospace'">
        {{ monthName }}
      </h2>
    </div>

    <!-- Navigation buttons -->
    <div class="flex gap-1 mb-4">
      <button
        @click="previousMonth"
        class="mac-button"
        aria-label="Previous month"
      >
        &lt;
      </button>
      <button
        @click="goToToday"
        class="mac-button"
        aria-label="Go to today"
      >
        Today
      </button>
      <button
        @click="nextMonth"
        class="mac-button"
        aria-label="Next month"
      >
        &gt;
      </button>
    </div>

    <!-- Weekday headers -->
    <div class="grid grid-cols-7 gap-0 border-2 border-black mb-0">
      <div
        v-for="day in weekDays"
        :key="day"
        class="text-center text-xs font-bold text-black bg-white border-r border-b border-black py-1 last:border-r-0"
        style="font-family: 'Chicago, monospace'"
      >
        {{ day }}
      </div>
    </div>

    <!-- Calendar grid -->
    <div class="border-2 border-t-0 border-black">
      <div class="grid grid-cols-7 gap-0">
        <DayCell
          v-for="(dayNum, idx) in calendarDays"
          :key="idx"
          v-bind="getDayData(dayNum!)"
          :is-selected="selectedDate === getDayData(dayNum!).dateStr"
          :events="getDayData(dayNum!).dayEvents"
          @select="emit('dateSelect', getDayData(dayNum!).dateStr)"
          class="last:border-r-0"
        />
      </div>
    </div>
  </div>
</template>
