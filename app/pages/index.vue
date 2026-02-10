<script setup lang="ts">
import { toast } from 'vue-sonner'
import { MODEL_IDS } from '~/utils/models'
import { filterEventsByCommittee } from '~/utils/committees'

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
  <div class="min-h-screen bg-white p-4" style="font-family: 'Chicago, monospace'">
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
      <div class="mac-window p-4 mb-4">
        <div class="flex items-center gap-4 mb-2">
          <img
            src="/LOGO.png"
            alt="MUN Logo"
            class="w-12 h-12 object-contain"
            style="padding: 2px; border: 1px solid black; background-color: white"
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
      </div>

      <!-- Toolbar -->
      <div class="mac-window p-3 mb-4">
        <div class="flex flex-wrap gap-2 mb-2">
          <button @click="handleExport" class="mac-button text-xs">Export</button>
          <button @click="handleImport" class="mac-button text-xs">Import</button>
          <button @click="handleReset" class="mac-button text-xs">Reset</button>
          <div class="flex-1" />
          <div class="text-xs text-black font-bold">
            {{ committeeFilteredEvents.length }} events
          </div>
        </div>
      </div>

      <!-- Main content -->
      <div class="grid grid-cols-1 lg:grid-cols-4 gap-4">
        <!-- Sidebar -->
        <div class="lg:col-span-1">
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
        </div>

        <!-- Calendar -->
        <div class="lg:col-span-3">
          <CalendarGrid
            :events="committeeFilteredEvents"
            :selected-date="selectedDate"
            :filtered-models="filteredModels"
            @date-select="handleDateSelect"
          />
        </div>
      </div>

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
  </div>
</template>
