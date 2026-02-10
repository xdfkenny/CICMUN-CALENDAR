/**
 * useEvents Hook - Manages calendar events with localStorage persistence
 */

import { useEffect, useState } from "react";
import { CalendarEvent } from "@/lib/types";
import seedEvents from "@/data/events.json";

const STORAGE_KEY = "mun-calendar-events";

export function useEvents() {
  const [events, setEvents] = useState<CalendarEvent[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Load events from localStorage or seed data
  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        setEvents(JSON.parse(stored));
      } catch (error) {
        console.error("Failed to parse stored events:", error);
        setEvents(seedEvents);
      }
    } else {
      setEvents(seedEvents);
    }
    setIsLoading(false);
  }, []);

  // Persist events to localStorage
  const saveEvents = (newEvents: CalendarEvent[]) => {
    setEvents(newEvents);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newEvents));
  };

  const addEvent = (event: CalendarEvent) => {
    const newEvents = [...events, event];
    saveEvents(newEvents);
  };

  const updateEvent = (id: string, updates: Partial<CalendarEvent>) => {
    const newEvents = events.map((event) =>
      event.id === id ? { ...event, ...updates } : event
    );
    saveEvents(newEvents);
  };

  const deleteEvent = (id: string) => {
    const newEvents = events.filter((event) => event.id !== id);
    saveEvents(newEvents);
  };

  const resetToSeed = () => {
    saveEvents(seedEvents);
  };

  const exportEvents = (): string => {
    return JSON.stringify(events, null, 2);
  };

  const importEvents = (jsonString: string) => {
    try {
      const imported = JSON.parse(jsonString);
      if (Array.isArray(imported)) {
        saveEvents(imported);
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
}
