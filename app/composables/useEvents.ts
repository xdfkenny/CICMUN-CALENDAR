import { useLocalStorage } from "@vueuse/core";
import type { CalendarEvent } from "~/types/calendar";
import seedEvents from "~/assets/data/events.json";

const STORAGE_KEY = "mun-calendar-events";
const SEED_IDS_KEY = "mun-calendar-seed-ids";
const GITHUB_RAW_URL = "https://raw.githubusercontent.com/xdfkenny/CICMUN-CALENDAR/main/app/assets/data/events.json";

export const useEvents = () => {
    const events = useLocalStorage<CalendarEvent[]>(STORAGE_KEY, seedEvents);
    const seedIds = useLocalStorage<string[]>(SEED_IDS_KEY, seedEvents.map(e => e.id));
    const isLoading = ref(false);

    // Fetch latest events from GitHub
    const fetchLatestFromGitHub = async (): Promise<CalendarEvent[] | null> => {
        try {
            const response = await fetch(GITHUB_RAW_URL + "?t=" + Date.now());
            if (!response.ok) throw new Error("Failed to fetch");
            const data = await response.json();
            if (Array.isArray(data)) {
                return data as CalendarEvent[];
            }
        } catch (error) {
            console.error("GitHub fetch failed:", error);
        }
        return null;
    };

    // Sync with GitHub (fetches latest from repo)
    const syncWithLatestUpdates = async () => {
        isLoading.value = true;
        try {
            const latestEvents = await fetchLatestFromGitHub();
            if (latestEvents) {
                // Find user-created events (events not in the seed data)
                const userCreatedEvents = events.value.filter(
                    event => !seedIds.value.includes(event.id)
                );

                // Merge: latest from GitHub + user-created events
                events.value = [...latestEvents, ...userCreatedEvents];
                seedIds.value = latestEvents.map(e => e.id);
            }
        } finally {
            isLoading.value = false;
        }
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
