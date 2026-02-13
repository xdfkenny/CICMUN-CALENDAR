<script setup lang="ts">
import type { CalendarEvent } from '~/types/calendar'
import { MODELS, MODEL_IDS } from '~/utils/models'

interface Props {
  selectedModels: Set<string>
  searchQuery: string
  events: CalendarEvent[]
  selectedLanguages: Set<string>
}

const props = defineProps<Props>()
const emit = defineEmits(['modelToggle', 'showAll', 'clearAll', 'searchChange', 'languageToggle'])

// Language categories with colors
const languageCategories = [
  { value: 'Español', label: 'Eventos en Español / Spanish Events', color: '#E53935' },
  { value: 'Inglés', label: 'Eventos en Inglés / English Events', color: '#1E88E5' },
  { value: 'Bilingüe', label: 'Eventos Bilingües / Bilingual Events', color: '#43A047' },
  { value: 'Colegio', label: 'Calendario Escolar / School Calendar', color: '#607D8B', isSchool: true }
]

// Track which categories are expanded
const expandedCategories = ref<Set<string>>(new Set())

// Get events grouped by language
const eventsByLanguage = computed(() => {
  const grouped: Record<string, CalendarEvent[]> = {}
  
  languageCategories.forEach(cat => {
    if (cat.isSchool) {
      grouped[cat.value] = props.events.filter(event => event.model === 'S')
    } else {
      grouped[cat.value] = props.events.filter(event => event.language === cat.value && event.model !== 'S')
    }
  })
  
  return grouped
})

// Toggle category expansion
const toggleCategory = (value: string) => {
  const newExpanded = new Set(expandedCategories.value)
  if (newExpanded.has(value)) {
    newExpanded.delete(value)
  } else {
    newExpanded.add(value)
  }
  expandedCategories.value = newExpanded
}

// Check if a language is selected
const isLanguageSelected = (value: string) => {
  return props.selectedLanguages.has(value)
}

// Toggle language filter
const toggleLanguage = (value: string) => {
  emit('languageToggle', value)
}

const filteredModelsList = computed(() => {
  return MODEL_IDS.filter((modelId) => {
    const model = MODELS[modelId]
    if (!model) return false
    return (
      model.name.toLowerCase().includes(props.searchQuery.toLowerCase()) ||
      modelId.toLowerCase().includes(props.searchQuery.toLowerCase())
    )
  })
})
</script>

<template>
  <div class="cicmun-card">
    <!-- Title bar -->
    <div class="cicmun-card-header">
      <h3 class="text-lg font-bold">
        Filtros / Filters
      </h3>
    </div>

    <div class="cicmun-card-body space-y-4">
      <!-- Language Categories -->
      <div>
        <div class="space-y-2">
          <div v-for="category in languageCategories" :key="category.value" class="border border-gray-200 rounded-md overflow-hidden">
            <!-- Category header with checkbox -->
            <div class="flex items-center gap-2 p-2 bg-gray-50 hover:bg-gray-100 transition-colors">
              <input
                type="checkbox"
                :checked="isLanguageSelected(category.value)"
                @change="toggleLanguage(category.value)"
                class="w-4 h-4 rounded border-gray-300 text-red-600 focus:ring-red-500"
                :aria-label="`Filter ${category.label}`"
              />
              <div
                class="w-4 h-4 rounded flex-shrink-0 border border-gray-300"
                :style="{ backgroundColor: category.color }"
                aria-hidden="true"
              />
              <button
                @click="toggleCategory(category.value)"
                class="flex-1 text-left text-sm font-semibold text-gray-700 flex items-center justify-between"
              >
                <span>{{ category.label }}</span>
                <span class="text-xs text-gray-500">({{ (eventsByLanguage[category.value] || []).length }})</span>
              </button>
              <button
                @click="toggleCategory(category.value)"
                class="text-gray-500 hover:text-gray-700 text-xs"
              >
                {{ expandedCategories.has(category.value) ? '▲' : '▼' }}
              </button>
            </div>

            <!-- Event list (expandable) -->
            <div v-if="expandedCategories.has(category.value)" class="bg-white border-t border-gray-200">
              <div v-if="!eventsByLanguage[category.value] || eventsByLanguage[category.value].length === 0" class="px-4 py-2 text-xs text-gray-500 italic">
                No events
              </div>
              <div v-else class="max-h-40 overflow-y-auto">
                <div
                  v-for="event in eventsByLanguage[category.value]"
                  :key="event.id"
                  class="px-4 py-1.5 text-xs text-gray-600 hover:bg-gray-50 border-b border-gray-100 last:border-b-0"
                >
                  - {{ event.title }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
