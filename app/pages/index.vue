<script setup lang="ts">
import { toast } from 'vue-sonner'
import { MODEL_IDS } from '~/utils/models'
import { filterEventsByCommittee } from '~/utils/committees'

useHead({
  title: 'Calendario MUN 2025-2026 América Latina',
  meta: [
    { name: 'description', content: 'Calendario completo de eventos Model United Nations en América Latina. Encuentra conferencias MUN en español, inglés y eventos bilingües para el año escolar 2025-2026.' },
    { name: 'keywords', content: 'MUN, Model United Nations, calendario, América Latina, conferencias, eventos MUN, 2025, 2026, español, inglés' },
    { property: 'og:title', content: 'MUN Calendar 2025-2026 | Eventos en América Latina' },
    { property: 'og:description', content: 'Calendario completo de eventos Model United Nations en América Latina. Encuentra conferencias MUN en español, inglés y eventos bilingües.' },
    { property: 'og:url', content: 'https://mun-calendar.vercel.app' },
    { property: 'og:image', content: 'https://mun-calendar.vercel.app/LOGO.png' },
    { name: 'twitter:title', content: 'MUN Calendar 2025-2026 | Eventos en América Latina' },
    { name: 'twitter:description', content: 'Calendario completo de eventos Model United Nations en América Latina.' },
    { name: 'twitter:image', content: 'https://mun-calendar.vercel.app/LOGO.png' }
  ]
})

const { 
  events, 
  isLoading, 
  addEvent, 
  updateEvent, 
  deleteEvent, 
  resetToSeed, 
  exportEvents, 
  importEvents 
} = useEvents()

const selectedDate = ref<string | null>(null)
const isModalOpen = ref(false)
const filteredModels = ref(new Set(MODEL_IDS))
const searchQuery = ref("")
const selectedCommittee = ref<string | null>(null)

// Filter events by committee
const committeeFilteredEvents = computed(() => 
  filterEventsByCommittee(events.value, selectedCommittee.value)
)

const handleModelToggle = (modelId: string) => {
  const newFiltered = new Set(filteredModels.value)
  if (newFiltered.has(modelId)) {
    newFiltered.delete(modelId)
  } else {
    newFiltered.add(modelId)
  }
  filteredModels.value = newFiltered
}

const handleShowAll = () => {
  filteredModels.value = new Set(MODEL_IDS)
}

const handleClearAll = () => {
  filteredModels.value = new Set()
}

const handleExport = () => {
  const json = exportEvents()
  const blob = new Blob([json], { type: "application/json" })
  const url = URL.createObjectURL(blob)
  const a = document.createElement("a")
  a.href = url
  a.download = `mun-calendar-${new Date().toISOString().split("T")[0]}.json`
  a.click()
  URL.revokeObjectURL(url)
  toast.success("Events exported")
}

const handleImport = () => {
  const input = document.createElement("input")
  input.type = "file"
  input.accept = "application/json"
  input.onchange = (e: any) => {
    const file = e.target.files[0]
    if (!file) return

    const reader = new FileReader()
    reader.onload = (event: any) => {
      const success = importEvents(event.target.result)
      if (success) {
        toast.success("Events imported")
      } else {
        toast.error("Import failed")
      }
    }
    reader.readAsText(file)
  }
  input.click()
}

const handleReset = () => {
  if (window.confirm("Reset to seed data?")) {
    resetToSeed()
    toast.success("Calendar reset")
  }
}

const handleDateSelect = (date: string) => {
  selectedDate.value = date
  isModalOpen.value = true
}
</script>

<template>
  <main class="min-h-screen bg-white p-4" style="font-family: 'Chicago, monospace'">
    <div v-if="isLoading" class="min-h-screen flex items-center justify-center bg-white">
      <div class="mac-window p-6 text-center">
        <div class="text-sm font-bold text-black mb-4" style="font-family: 'Chicago, monospace'">
          Loading Calendar...
        </div>
        <div class="w-12 h-12 border-2 border-black border-t-transparent animate-spin mx-auto"></div>
      </div>
    </div>

    <div v-else class="max-w-6xl mx-auto">
      <!-- Header -->
      <header class="mac-window p-4 mb-4">
        <div class="flex items-center gap-4 mb-2">
          <img
            src="/LOGO.png"
            alt="Model United Nations - MUN logo oficial"
            class="w-12 h-12 object-contain"
            style="padding: 2px; border: 1px solid black; background-color: white"
            loading="eager"
          />
          <div>
            <h1 class="text-lg font-bold text-black">
              MUN Calendar 2025–2026
            </h1>
            <p class="text-xs text-black">
              Model United Nations events across Latin America
            </p>
          </div>
        </div>
      </header>

      <!-- Toolbar -->
      <section class="mac-window p-3 mb-4" aria-label="Herramientas de calendario">
        <div class="flex flex-wrap gap-2 mb-2">
          <button @click="handleExport" class="mac-button text-xs" aria-label="Exportar eventos">Export</button>
          <button @click="handleImport" class="mac-button text-xs" aria-label="Importar eventos">Import</button>
          <button @click="handleReset" class="mac-button text-xs" aria-label="Restablecer calendario">Reset</button>
          <div class="flex-1" />
          <div class="text-xs text-black font-bold" aria-live="polite">
            {{ committeeFilteredEvents.length }} events
          </div>
        </div>
      </section>

      <!-- Main content -->
      <section class="grid grid-cols-1 lg:grid-cols-4 gap-4" aria-label="Calendario de eventos">
        <!-- Sidebar -->
        <aside class="lg:col-span-1" aria-label="Filtros de eventos">
          <LegendPanel
            :selected-models="filteredModels"
            :search-query="searchQuery"
            :events="events"
            :selected-committee="selectedCommittee"
            @model-toggle="handleModelToggle"
            @show-all="handleShowAll"
            @clear-all="handleClearAll"
            @search-change="searchQuery = $event"
            @committee-select="selectedCommittee = $event"
          />
        </aside>

        <!-- Calendar -->
        <article class="lg:col-span-3" aria-label="Calendario mensual">
          <CalendarGrid
            :events="committeeFilteredEvents"
            :selected-date="selectedDate"
            :filtered-models="filteredModels"
            @date-select="handleDateSelect"
          />
        </article>
      </section>

      <!-- Event Modal -->
      <EventModal
        v-if="selectedDate"
        :is-open="isModalOpen"
        :selected-date="selectedDate"
        :events="committeeFilteredEvents"
        @close="isModalOpen = false; selectedDate = null"
        @add-event="addEvent"
        @update-event="updateEvent"
        @delete-event="deleteEvent"
      />

      <div class="flex justify-end mt-8">
        <span class="text-[10px] text-gray-400 select-none cursor-default opacity-40 hover:opacity-100 transition-opacity duration-500">
          made by kenny
        </span>
      </div>
    </div>
  </main>
</template>
