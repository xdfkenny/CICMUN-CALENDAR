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
    <div class="absolute inset-0 bg-black/20 backdrop-blur-[1px]" @click="handleClose"></div>
    
    <!-- Modal content -->
    <div class="mac-window max-w-md w-full max-h-[90vh] overflow-y-auto p-3 border-2 border-black bg-white z-10">
      <div class="border-b-2 border-black pb-2 mb-3 flex justify-between items-center">
        <h3 style="font-family: 'Chicago, monospace'" class="text-sm font-bold">
          {{ selectedDate ? `Events: ${formatDateDisplay(selectedDate)}` : "Events" }}
        </h3>
        <button @click="handleClose" class="mac-button w-6 h-6 flex items-center justify-center p-0">×</button>
      </div>

      <div class="space-y-3">
        <!-- Existing events -->
        <div v-if="dateEvents.length > 0" class="space-y-2">
          <h4 class="font-bold text-xs text-black" style="font-family: 'Chicago, monospace'">
            {{ dateEvents.length }} Event{{ dateEvents.length !== 1 ? "s" : "" }}
          </h4>
          <div
            v-for="event in dateEvents"
            :key="event.id"
            class="p-2 border-2 border-black bg-white"
            style="font-family: 'Monaco, monospace'"
          >
            <div class="flex items-start justify-between gap-2">
              <div class="flex-1 min-w-0">
                <div class="flex items-center gap-1 mb-1">
                  <div
                    class="w-3 h-3 border border-black flex-shrink-0"
                    :style="{ backgroundColor: MODELS[event.model]?.color }"
                  />
                  <h5 class="font-bold text-xs text-black truncate">
                    {{ event.title }}
                  </h5>
                </div>
                <p class="text-xs text-black mb-1">
                  {{ event.startDate === event.endDate
                    ? formatDateDisplay(event.startDate)
                    : `${formatDateDisplay(event.startDate)} - ${formatDateDisplay(event.endDate)}` }}
                </p>
                <p v-if="event.notes" class="text-xs text-black">{{ event.notes }}</p>
              </div>
              <div class="flex gap-1 ml-2 flex-shrink-0">
                <button
                  @click="handleEditEvent(event)"
                  class="mac-button text-xs px-2 py-0"
                  aria-label="Edit event"
                >
                  E
                </button>
                <button
                  @click="emit('deleteEvent', event.id)"
                  class="mac-button text-xs px-2 py-0"
                  aria-label="Delete event"
                >
                  X
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Add/Edit form -->
        <div v-if="isAddingNew || editingId" class="space-y-2 p-2 border-2 border-black bg-white">
          <h4 class="font-bold text-xs text-black" style="font-family: 'Chicago, monospace'">
            {{ editingId ? "Edit Event" : "Add Event" }}
          </h4>

          <div>
            <label class="text-xs font-bold text-black block mb-1" style="font-family: 'Chicago, monospace'">
              Title
            </label>
            <input
              v-model="formData.title"
              placeholder="Event title"
              class="mac-input w-full text-xs"
              style="font-family: 'Monaco, monospace'"
            />
          </div>

          <div class="grid grid-cols-2 gap-2">
            <div>
              <label class="text-xs font-bold text-black block mb-1" style="font-family: 'Chicago, monospace'">
                Model
              </label>
              <select
                v-model="formData.model"
                class="mac-input w-full text-xs"
                style="font-family: 'Monaco, monospace'"
              >
                <option v-for="modelId in MODEL_IDS" :key="modelId" :value="modelId">
                  {{ MODELS[modelId].name }}
                </option>
              </select>
            </div>

            <div>
              <label class="text-xs font-bold text-black block mb-1" style="font-family: 'Chicago, monospace'">
                Language
              </label>
              <select
                v-model="formData.language"
                class="mac-input w-full text-xs"
                style="font-family: 'Monaco, monospace'"
              >
                <option value="Español">Español</option>
                <option value="Inglés">Inglés</option>
                <option value="Bilingüe">Bilingüe</option>
              </select>
            </div>
          </div>

          <div class="grid grid-cols-2 gap-2">
            <div>
              <label class="text-xs font-bold text-black block mb-1" style="font-family: 'Chicago, monospace'">
                Start
              </label>
              <input
                type="date"
                v-model="formData.startDate"
                class="mac-input w-full text-xs"
                style="font-family: 'Monaco, monospace'"
              />
            </div>

            <div>
              <label class="text-xs font-bold text-black block mb-1" style="font-family: 'Chicago, monospace'">
                End
              </label>
              <input
                type="date"
                v-model="formData.endDate"
                class="mac-input w-full text-xs"
                style="font-family: 'Monaco, monospace'"
              />
            </div>
          </div>

          <div>
            <label class="text-xs font-bold text-black block mb-1" style="font-family: 'Chicago, monospace'">
              Notes
            </label>
            <textarea
              v-model="formData.notes"
              placeholder="Notes..."
              rows="2"
              class="mac-input w-full text-xs"
              style="font-family: 'Monaco, monospace'"
            />
          </div>
        </div>

        <button
          v-if="!isAddingNew && !editingId"
          @click="isAddingNew = true"
          class="mac-button w-full text-xs font-bold"
        >
          + Add Event
        </button>
      </div>

      <div class="border-t-2 border-black pt-2 mt-3 flex gap-1">
        <template v-if="isAddingNew || editingId">
          <button
            @click="isAddingNew = false; editingId = null; resetForm()"
            class="mac-button text-xs flex-1"
          >
            Cancel
          </button>
          <button
            @click="editingId ? handleUpdateEvent() : handleAddEvent()"
            class="mac-button text-xs flex-1"
          >
            {{ editingId ? "Update" : "Add" }}
          </button>
        </template>
        <button
          v-else
          @click="handleClose"
          class="mac-button text-xs w-full"
        >
          Close
        </button>
      </div>
    </div>
  </div>
</template>
