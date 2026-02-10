<script setup lang="ts">
import type { CalendarEvent } from '~/types/calendar'
import { MODELS, MODEL_IDS } from '~/utils/models'
import { getCommitteesByLanguage } from '~/utils/committees'

interface Props {
  selectedModels: Set<string>
  searchQuery: string
  events: CalendarEvent[]
  selectedCommittee: string | null
}

const props = defineProps<Props>()
const emit = defineEmits(['modelToggle', 'showAll', 'clearAll', 'searchChange', 'committeeSelect'])

const isCommitteeOpen = ref(false)

const committeeGroups = computed(() => getCommitteesByLanguage(props.events))

// Filter committees by search query
const filteredGroups = computed(() => {
  if (!props.searchQuery) return committeeGroups.value

  return committeeGroups.value
    .map((group) => ({
      ...group,
      committees: group.committees.filter((committee) =>
        committee.name.toLowerCase().includes(props.searchQuery.toLowerCase())
      ),
    }))
    .filter((group) => group.committees.length > 0)
})

const filteredModelsList = computed(() => {
  return MODEL_IDS.filter((modelId) => {
    const model = MODELS[modelId]
    return (
      model.name.toLowerCase().includes(props.searchQuery.toLowerCase()) ||
      modelId.toLowerCase().includes(props.searchQuery.toLowerCase())
    )
  })
})
</script>

<template>
  <div class="mac-window p-3">
    <!-- Title bar -->
    <div class="border-b-2 border-black pb-2 mb-3">
      <h3 class="text-sm font-bold text-black" style="font-family: 'Chicago, monospace'">
        Models
      </h3>
    </div>

    <!-- Committee Dropdown -->
    <div class="mb-3">
      <div class="text-xs font-bold text-black mb-1" style="font-family: 'Chicago, monospace'">
        Committee
      </div>
      <div class="relative">
        <button
          @click="isCommitteeOpen = !isCommitteeOpen"
          class="mac-button w-full text-xs text-left flex justify-between items-center"
          style="font-family: 'Monaco, monospace'"
        >
          <span class="truncate">
            {{ selectedCommittee || "All Committees" }}
          </span>
          <span class="ml-1">{{ isCommitteeOpen ? "▲" : "▼" }}</span>
        </button>

        <div v-if="isCommitteeOpen" class="absolute top-full left-0 right-0 mt-0 border-2 border-black bg-white z-50 max-h-64 overflow-y-auto">
          <!-- All Committees option -->
          <button
            @click="emit('committeeSelect', null); isCommitteeOpen = false"
            class="w-full text-left px-2 py-1 text-xs border-b border-black hover:bg-black hover:text-white font-bold"
            :class="{ 'bg-black text-white': selectedCommittee === null }"
            style="font-family: 'Monaco, monospace'"
          >
            All Committees
          </button>

          <!-- Language-grouped committees -->
          <div v-for="group in filteredGroups" :key="group.language">
            <!-- Language header -->
            <div
              class="px-2 py-1 text-xs font-bold text-white bg-black border-b border-black"
              style="font-family: 'Chicago, monospace'"
            >
              {{ group.language }} Events
            </div>

            <!-- Committees in this language -->
            <button
              v-for="committee in group.committees"
              :key="committee.id"
              @click="emit('committeeSelect', committee.name); isCommitteeOpen = false"
              class="w-full text-left px-4 py-1 text-xs border-b border-gray-200 hover:bg-gray-100"
              :class="{ 'bg-gray-200 font-bold': selectedCommittee === committee.name }"
              style="font-family: 'Monaco, monospace'"
            >
              {{ committee.name }} ({{ committee.count }})
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Search -->
    <div class="mb-3">
      <input
        type="text"
        placeholder="Search..."
        :value="searchQuery"
        @input="emit('searchChange', ($event.target as HTMLInputElement).value)"
        class="mac-input w-full text-xs"
        style="font-family: 'Monaco, monospace'"
      />
    </div>

    <!-- Model list -->
    <div class="space-y-1 mb-3 max-h-48 overflow-y-auto">
      <label
        v-for="modelId in filteredModelsList"
        :key="modelId"
        class="flex items-center gap-2 p-1 cursor-pointer hover:bg-gray-100"
        style="font-family: 'Chicago, monospace'"
      >
        <input
          type="checkbox"
          :checked="selectedModels.has(modelId)"
          @change="emit('modelToggle', modelId)"
          class="mac-checkbox"
          :aria-label="`Filter ${MODELS[modelId].name}`"
        />
        <div
          class="w-3 h-3 border border-black flex-shrink-0"
          :style="{ backgroundColor: MODELS[modelId].color }"
          aria-hidden="true"
        />
        <span class="text-xs font-bold text-black flex-1">
          {{ MODELS[modelId].name }}
        </span>
      </label>
    </div>

    <!-- Action buttons -->
    <div class="flex gap-1">
      <button
        @click="emit('showAll')"
        class="mac-button text-xs flex-1"
        aria-label="Show all models"
      >
        All
      </button>
      <button
        @click="emit('clearAll')"
        class="mac-button text-xs flex-1"
        aria-label="Clear all filters"
      >
        None
      </button>
    </div>
  </div>
</template>
