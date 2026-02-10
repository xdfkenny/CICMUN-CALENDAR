import { useLocalStorage } from "@vueuse/core";
import type { CalendarEvent } from "~/types/calendar";
import seedEvents from "~/assets/data/events.json";

const STORAGE_KEY = "mun-calendar-events";

export const useEvents = () => {
    const events = useLocalStorage<CalendarEvent[]>(STORAGE_KEY, seedEvents);
    const isLoading = ref(false); // With useLocalStorage, it's immediately available on client

    const addEvent = (event: CalendarEvent) => {
        events.value.push(event);
    };

    const updateEvent = (id: string, updates: Partial<CalendarEvent>) => {
        const index = events.value.findIndex((e) => e.id === id);
        if (index !== -1) {
            events.value[index] = { ...events.value[index], ...updates };
        }
    };

    const deleteEvent = (id: string) => {
        events.value = events.value.filter((e) => e.id !== id);
    };

    const resetToSeed = () => {
        events.value = [...seedEvents];
    };

    const exportEvents = (): string => {
        return JSON.stringify(events.value, null, 2);
    };

    const importEvents = (jsonString: string) => {
        try {
            const imported = JSON.parse(jsonString);
            if (Array.isArray(imported)) {
                events.value = imported;
                return true;
            }
        } catch (error) {
            console.error("Failed to import events:", error);
        }
        return false;
    };

    return {
        events,
        isLoading,
        addEvent,
        updateEvent,
        deleteEvent,
        resetToSeed,
        exportEvents,
        importEvents,
    };
};
