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
