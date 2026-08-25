<script setup lang="ts">
import type { CalendarEvent } from '~/types/calendar'
import { expandEvents, formatDateISO, parseDate } from '~/utils/calendar'

interface Props {
  events: CalendarEvent[]
  selectedDate?: string | null
  filteredModels: Set<string>
}

const props = defineProps<Props>()
const emit = defineEmits(['dateSelect'])

const today = new Date()
const todayIso = formatDateISO(today)
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

const monthName = computed(() => currentMonth.value.toLocaleDateString("es-ES", {
  month: "long",
  year: "numeric",
}))

const weekDays = ["Lun", "Mar", "Mié", "Jue", "Vie", "Sáb", "Dom"]

const filteredEvents = computed(() =>
  props.events.filter((event) => props.filteredModels.has(event.model)),
)

const expandedFilteredEvents = computed(() => expandEvents(filteredEvents.value))

const eventsInCurrentMonth = computed(() => {
  const firstDayOfMonth = new Date(year.value, month.value, 1)
  const lastDayOfMonth = new Date(year.value, month.value + 1, 0)

  const monthEvents = filteredEvents.value.filter((event) => {
    const start = parseDate(event.startDate)
    const end = parseDate(event.endDate)
    return start <= lastDayOfMonth && end >= firstDayOfMonth
  })

  return [...monthEvents].sort((a, b) => parseDate(a.startDate).getTime() - parseDate(b.startDate).getTime())
})

// Format date range for display
const formatEventDates = (event: CalendarEvent) => {
  const start = parseDate(event.startDate)
  const end = parseDate(event.endDate)
  
  if (start.getTime() === end.getTime()) {
    return start.toLocaleDateString('es-ES', { day: 'numeric', month: 'short' })
  }
  
  return `${start.toLocaleDateString('es-ES', { day: 'numeric', month: 'short' })} - ${end.toLocaleDateString('es-ES', { day: 'numeric', month: 'short' })}`
}

const dayCells = computed(() =>
  calendarDays.value.map((dayNum) => {
    let dateStr = ""
    let isCurrentMonth = true
    let isToday = false

    if (dayNum > 0) {
      dateStr = formatDateISO(new Date(year.value, month.value, dayNum))
      isToday = dateStr === todayIso && month.value === today.getMonth() && year.value === today.getFullYear()
    } else if (dayNum < -1000) {
      const nextMonthDay = -dayNum - 1000
      dateStr = formatDateISO(new Date(year.value, month.value + 1, nextMonthDay))
      isCurrentMonth = false
    } else {
      const prevMonthDay = -dayNum
      dateStr = formatDateISO(new Date(year.value, month.value - 1, prevMonthDay))
      isCurrentMonth = false
    }

    return {
      dateStr,
      dayNum: Math.abs(dayNum) > 1000 ? Math.abs(dayNum) - 1000 : Math.abs(dayNum),
      isCurrentMonth,
      isToday,
      dayEvents: expandedFilteredEvents.value[dateStr] ?? [],
    }
  }),
)
</script>

<template>
  <div class="cicmun-card">
    <!-- Merged header with month name + navigation -->
    <div class="cicmun-card-header">
      <div class="flex items-center justify-between gap-3">
        <button
          @click="previousMonth"
          class="text-white hover:text-gray-200 text-lg font-bold w-8 h-8 flex items-center justify-center rounded hover:bg-white/20 transition-colors"
          aria-label="Previous month"
        >
          ←
        </button>
        <h2 class="text-xl font-bold flex-1 text-center">
          {{ monthName }}
        </h2>
        <button
          @click="goToToday"
          class="text-white hover:text-gray-200 text-xs font-semibold px-3 py-1 rounded hover:bg-white/20 transition-colors"
          aria-label="Go to today"
        >
          Hoy
        </button>
        <button
          @click="nextMonth"
          class="text-white hover:text-gray-200 text-lg font-bold w-8 h-8 flex items-center justify-center rounded hover:bg-white/20 transition-colors"
          aria-label="Next month"
        >
          →
        </button>
      </div>
    </div>

    <div class="cicmun-card-body">
      <!-- Weekday headers -->
      <div class="grid grid-cols-7 gap-0 border border-gray-300 rounded-t-md overflow-hidden mb-0">
        <div
          v-for="day in weekDays"
          :key="day"
          class="text-center text-xs font-semibold text-gray-700 bg-gray-100 border-r border-gray-300 py-2 last:border-r-0"
        >
          {{ day }}
        </div>
      </div>

      <!-- Calendar grid -->
      <div class="border border-t-0 border-gray-300 rounded-b-md overflow-hidden">
        <div class="grid grid-cols-7 gap-0">
          <DayCell
            v-for="day in dayCells"
            :key="day.dateStr"
            v-bind="day"
            :is-selected="selectedDate === day.dateStr"
            :events="day.dayEvents"
            @select="emit('dateSelect', day.dateStr)"
            class="last:border-r-0"
          />
        </div>
      </div>

      <!-- Empty state when no events in current month -->
      <div v-if="eventsInCurrentMonth.length === 0" class="mt-4 p-6 text-center bg-gray-50 rounded-md border border-gray-200">
        <div class="text-gray-400 text-lg mb-2">📅</div>
        <p class="text-gray-600 text-sm font-semibold mb-1">Sin eventos este mes</p>
        <p class="text-gray-500 text-xs">No events scheduled for this month</p>
        <button
          @click="nextMonth"
          class="mt-3 cicmun-button-primary text-xs px-4 py-1.5"
        >
          Ver próximo mes →
        </button>
      </div>

      <!-- Monthly Event List -->
      <div v-if="eventsInCurrentMonth.length > 0" class="mt-6 pt-6 border-t border-gray-300">
        <h3 class="text-lg font-bold text-gray-800 mb-3">
          Eventos del Mes / Events This Month
        </h3>
        <div class="space-y-2">
          <div
            v-for="event in eventsInCurrentMonth"
            :key="event.id"
            class="flex items-start gap-3 p-3 bg-gray-50 rounded-md hover:bg-gray-100 transition-colors"
          >
            <div
              class="w-3 h-3 rounded-full flex-shrink-0 mt-1"
              :style="{ backgroundColor: event.model === 'S' ? '#607D8B' : (event.language === 'Español' ? '#E53935' : event.language === 'Inglés' ? '#1E88E5' : '#43A047') }"
              aria-hidden="true"
            />
            <div class="flex-1 min-w-0">
              <div class="font-semibold text-gray-900 text-sm">
                {{ event.title }}
              </div>
              <div class="text-xs text-gray-600 mt-0.5">
                {{ formatEventDates(event) }}
                <span v-if="event.notes" class="ml-2 text-gray-500">{{ event.notes }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
