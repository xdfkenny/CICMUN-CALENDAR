<script setup lang="ts">
import { nanoid } from 'nanoid'
import type { CalendarEvent } from '~/types/calendar'
import { MODELS, MODEL_IDS } from '~/utils/models'
import { formatDateDisplay } from '~/utils/calendar'

interface Props {
  isOpen: boolean
  selectedDate: string
  events: CalendarEvent[]
}

const props = defineProps<Props>()
const emit = defineEmits(['close', 'addEvent', 'updateEvent', 'deleteEvent'])

const isAddingNew = ref(false)
const editingId = ref<string | null>(null)

const formData = ref<Partial<CalendarEvent>>({
  title: "",
  model: "A",
  startDate: props.selectedDate || "",
  endDate: props.selectedDate || "",
  notes: "",
  language: "Español"
})

const dateEvents = computed(() => {
  if (!props.selectedDate) return []
  const selected = new Date(props.selectedDate)
  return props.events.filter((event) => {
    const start = new Date(event.startDate)
    const end = new Date(event.endDate)
    return selected >= start && selected <= end
  })
})

const resetForm = () => {
  formData.value = {
    title: "",
    model: "A",
    startDate: props.selectedDate || "",
    endDate: props.selectedDate || "",
    notes: "",
    language: "Español"
  }
}

watch(() => props.selectedDate, (newVal) => {
  if (newVal) {
    formData.value.startDate = newVal
    formData.value.endDate = newVal
  }
})

const handleAddEvent = () => {
  if (!formData.value.title || !formData.value.model || !formData.value.startDate) {
    alert("Please fill in required fields")
    return
  }

  const newEvent: CalendarEvent = {
    id: nanoid(),
    title: formData.value.title!,
    model: formData.value.model!,
    startDate: formData.value.startDate!,
    endDate: formData.value.endDate || formData.value.startDate!,
    notes: formData.value.notes || "",
    language: formData.value.language || "Español"
  }

  emit('addEvent', newEvent)
  resetForm()
  isAddingNew.value = false
}

const handleUpdateEvent = () => {
  if (!editingId.value) return
  if (!formData.value.title || !formData.value.model || !formData.value.startDate) {
    alert("Please fill in required fields")
    return
  }

  emit('updateEvent', editingId.value, {
    title: formData.value.title,
    model: formData.value.model,
    startDate: formData.value.startDate,
    endDate: formData.value.endDate || formData.value.startDate,
    notes: formData.value.notes,
    language: formData.value.language
  })

  resetForm()
  editingId.value = null
}

const handleEditEvent = (event: CalendarEvent) => {
  formData.value = { ...event }
  editingId.value = event.id
  isAddingNew.value = false
}

const handleClose = () => {
  resetForm()
  isAddingNew.value = false
  editingId.value = null
  emit('close')
}
</script>

<template>
  <div v-if="isOpen" class="fixed inset-0 z-50 flex items-center justify-center p-4">
    <!-- Overlay -->
    <div class="absolute inset-0 bg-black/50 backdrop-blur-sm" @click="handleClose"></div>
    
    <!-- Modal content -->
    <div class="cicmun-card max-w-md w-full max-h-[90vh] overflow-y-auto z-10 shadow-2xl">
      <div class="cicmun-card-header flex justify-between items-center">
        <h3 class="text-xl font-bold">
          {{ selectedDate ? `Events: ${formatDateDisplay(selectedDate)}` : "Events" }}
        </h3>
        <button @click="handleClose" class="text-white hover:text-gray-200 text-2xl font-bold w-8 h-8 flex items-center justify-center rounded hover:bg-white/20 transition-colors">×</button>
      </div>

      <div class="cicmun-card-body space-y-4">
        <!-- Existing events -->
        <div v-if="dateEvents.length > 0" class="space-y-3">
          <h4 class="font-semibold text-sm text-gray-700">
            {{ dateEvents.length }} Event{{ dateEvents.length !== 1 ? "s" : "" }}
          </h4>
          <div
            v-for="event in dateEvents"
            :key="event.id"
            class="p-3 border border-gray-300 bg-gray-50 rounded-md hover:shadow-md transition-shadow"
          >
            <div class="flex items-start justify-between gap-3">
              <div class="flex-1 min-w-0">
                <div class="flex items-center gap-2 mb-2">
                  <div
                    class="w-4 h-4 rounded flex-shrink-0 border border-gray-300"
                    :style="{ backgroundColor: MODELS[event.model]?.color }"
                  />
                  <h5 class="font-semibold text-sm text-gray-900 truncate">
                    {{ event.title }}
                  </h5>
                </div>
                <p class="text-sm text-gray-600 mb-1">
                  {{ event.startDate === event.endDate
                    ? formatDateDisplay(event.startDate)
                    : `${formatDateDisplay(event.startDate)} - ${formatDateDisplay(event.endDate)}` }}
                </p>
                <p v-if="event.notes" class="text-sm text-gray-700">{{ event.notes }}</p>
              </div>
              <div class="flex gap-2 ml-2 flex-shrink-0">
                <button
                  @click="handleEditEvent(event)"
                  class="cicmun-button-secondary text-xs px-3 py-1"
                  aria-label="Edit event"
                >
                  Edit
                </button>
                <button
                  @click="emit('deleteEvent', event.id)"
                  class="cicmun-button-primary text-xs px-3 py-1"
                  aria-label="Delete event"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Add/Edit form -->
        <div v-if="isAddingNew || editingId" class="space-y-3 p-4 border border-gray-300 bg-white rounded-md">
          <h4 class="font-bold text-base text-gray-900">
            {{ editingId ? "Edit Event" : "Add Event" }}
          </h4>

          <div>
            <label class="text-sm font-semibold text-gray-700 block mb-1">
              Title
            </label>
            <input
              v-model="formData.title"
              placeholder="Event title"
              class="cicmun-input w-full text-sm"
            />
          </div>

          <div class="grid grid-cols-2 gap-3">
            <div>
              <label class="text-sm font-semibold text-gray-700 block mb-1">
                Model
              </label>
              <select
                v-model="formData.model"
                class="cicmun-input w-full text-sm"
              >
                <option v-for="modelId in MODEL_IDS" :key="modelId" :value="modelId">
                  {{ MODELS[modelId].name }}
                </option>
              </select>
            </div>

            <div>
              <label class="text-sm font-semibold text-gray-700 block mb-1">
                Language
              </label>
              <select
                v-model="formData.language"
                class="cicmun-input w-full text-sm"
              >
                <option value="Español">Español</option>
                <option value="Inglés">Inglés</option>
                <option value="Bilingüe">Bilingüe</option>
              </select>
            </div>
          </div>

          <div class="grid grid-cols-2 gap-3">
            <div>
              <label class="text-sm font-semibold text-gray-700 block mb-1">
                Start
              </label>
              <input
                type="date"
                v-model="formData.startDate"
                class="cicmun-input w-full text-sm"
              />
            </div>

            <div>
              <label class="text-sm font-semibold text-gray-700 block mb-1">
                End
              </label>
              <input
                type="date"
                v-model="formData.endDate"
                class="cicmun-input w-full text-sm"
              />
            </div>
          </div>

          <div>
            <label class="text-sm font-semibold text-gray-700 block mb-1">
              Notes
            </label>
            <textarea
              v-model="formData.notes"
              placeholder="Notes..."
              rows="3"
              class="cicmun-input w-full text-sm"
            />
          </div>
        </div>

        <button
          v-if="!isAddingNew && !editingId"
          @click="isAddingNew = true"
          class="cicmun-button-primary w-full text-sm font-semibold"
        >
          + Add Event
        </button>
      </div>

      <div class="border-t border-gray-200 pt-4 mt-4 flex gap-2 px-4 pb-4">
        <template v-if="isAddingNew || editingId">
          <button
            @click="isAddingNew = false; editingId = null; resetForm()"
            class="cicmun-button-secondary text-sm flex-1"
          >
            Cancel
          </button>
          <button
            @click="editingId ? handleUpdateEvent() : handleAddEvent()"
            class="cicmun-button-primary text-sm flex-1"
          >
            {{ editingId ? "Update" : "Add" }}
          </button>
        </template>
        <button
          v-else
          @click="handleClose"
          class="cicmun-button-secondary text-sm w-full"
        >
          Close
        </button>
      </div>
    </div>
  </div>
</template>
