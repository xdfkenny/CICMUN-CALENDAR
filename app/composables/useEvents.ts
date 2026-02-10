import { useLocalStorage } from "@vueuse/core";
import type { CalendarEvent } from "~/types/calendar";
import seedEvents from "~/assets/data/events.json";

const STORAGE_KEY = "mun-calendar-events";
const SEED_IDS_KEY = "mun-calendar-seed-ids";

export const useEvents = () => {
    const events = useLocalStorage<CalendarEvent[]>(STORAGE_KEY, seedEvents);
    const seedIds = useLocalStorage<string[]>(SEED_IDS_KEY, seedEvents.map(e => e.id));
    const isLoading = ref(false); // With useLocalStorage, it's immediately available on client

    // Auto-sync on initialization: merge latest admin events with user-created events
    const syncWithLatestUpdates = () => {
        const currentSeedIds = seedEvents.map(e => e.id);

        // Find user-created events (events not in the original seed data)
        const userCreatedEvents = events.value.filter(event => !seedIds.value.includes(event.id));

        // Merge: latest admin events + user-created events
        events.value = [...seedEvents, ...userCreatedEvents];

        // Update the seed IDs to the current seed
        seedIds.value = currentSeedIds;
    };

    // Auto-sync on first load
    if (process.client) {
        syncWithLatestUpdates();
    }

    const addEvent = (event: CalendarEvent) => {
        events.value.push(event);
    };

    const updateEvent = (id: string, updates: Partial<CalendarEvent>) => {
        const index = events.value.findIndex((e) => e.id === id);
        if (index !== -1) {
            events.value[index] = { ...events.value[index], ...updates } as CalendarEvent;
        }
    };

    const deleteEvent = (id: string) => {
        events.value = events.value.filter((e) => e.id !== id);
    };

    const resetToSeed = () => {
        events.value = [...seedEvents];
        seedIds.value = seedEvents.map(e => e.id);
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
        syncWithLatestUpdates,
        exportEvents,
        importEvents,
    };
};
