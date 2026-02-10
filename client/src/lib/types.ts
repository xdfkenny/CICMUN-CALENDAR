/**
 * Event Data Types and Utilities
 */

export interface CalendarEvent {
  id: string;
  title: string;
  model: string; // Reference to MODELS key (A, B, C, D, E)
  startDate: string; // ISO format: YYYY-MM-DD
  endDate: string; // ISO format: YYYY-MM-DD
  notes?: string;
  language?: string;
}

export interface DayEvents {
  [date: string]: CalendarEvent[];
}

export interface FilterState {
  models: Set<string>;
  searchQuery: string;
}

/**
 * Parse ISO date string to Date object
 */
export function parseDate(dateStr: string): Date {
  const [year, month, day] = dateStr.split("-").map(Number);
  return new Date(year, month - 1, day);
}

/**
 * Format Date to ISO string (YYYY-MM-DD)
 */
export function formatDateISO(date: Date): string {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

/**
 * Format date for display (e.g., "Jan 15, 2026")
 */
export function formatDateDisplay(dateStr: string): string {
  const date = parseDate(dateStr);
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

/**
 * Get all dates between start and end (inclusive)
 */
export function getDateRange(startStr: string, endStr: string): string[] {
  const dates: string[] = [];
  const start = parseDate(startStr);
  const end = parseDate(endStr);

  let current = new Date(start);
  while (current <= end) {
    dates.push(formatDateISO(current));
    current.setDate(current.getDate() + 1);
  }

  return dates;
}

/**
 * Expand multi-day events into individual day entries
 */
export function expandEvents(events: CalendarEvent[]): DayEvents {
  const dayEvents: DayEvents = {};

  for (const event of events) {
    const dates = getDateRange(event.startDate, event.endDate);
    for (const date of dates) {
      if (!dayEvents[date]) {
        dayEvents[date] = [];
      }
      dayEvents[date].push(event);
    }
  }

  return dayEvents;
}

/**
 * Get events for a specific date
 */
export function getEventsForDate(
  events: CalendarEvent[],
  dateStr: string
): CalendarEvent[] {
  return events.filter((event) => {
    const start = parseDate(event.startDate);
    const end = parseDate(event.endDate);
    const date = parseDate(dateStr);
    return date >= start && date <= end;
  });
}
