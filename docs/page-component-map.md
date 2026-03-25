# Page, Component, And Function Map

## Main Route: `/`

### Page

- `app/pages/index.vue`

Responsibilities:

- page-level SEO for the local calendar
- language filter state
- selected date state
- modal open/close state
- import/export/sync actions
- wiring `useEvents()` into child components

### Child Components

- `app/components/LegendPanel.vue`
  Owns language filter UI and per-category event expansion.
- `app/components/CalendarGrid.vue`
  Owns month navigation, day matrix creation, and monthly event list.
- `app/components/DayCell.vue`
  Owns one calendar day cell, blocked-day rendering, and event markers.
- `app/components/EventModal.vue`
  Owns add/edit/delete UI for events on a selected date.

### Supporting Helpers

- `app/composables/useEvents.ts`
  Persistence and event CRUD.
- `app/utils/calendar.ts`
  Local calendar date calculations.
- `app/utils/models.ts`
  Model names and colors.
- `app/utils/committees.ts`
  Committee grouping/filter helpers. Present but lightly used by the current page.

## Global Landing Route: `/global`

### Page

- `app/pages/global/index.vue`

Responsibilities:

- top-level hero and stats
- section ordering and sticky section nav
- per-destination card rendering
- destination status copy and badge styling
- link-out to `/global/[country]`

### Core Data

- `app/composables/useGlobalDataset.ts`
  Produces dataset sections and destination collections.
- `app/utils/international-dashboard.ts`
  Provides formatters, next-event logic, stay-window copy, status logic, sorting, and flag code mapping.

### Important Page-Level Decisions

The current page intentionally:

- sorts sections in composable order
- sorts destinations inside each section by `sortDestinations(..., 'status', todayIso)`
- emphasizes decision-making metadata over dense event detail
- keeps the full tile clickable

This matches the older `docs/global-page-workflow.md`.

## Global Detail Route: `/global/[country]`

### Page

- `app/pages/global/[country].vue`

Responsibilities:

- destination lookup from the route param
- 404 on missing destination
- next-event highlight
- year grouping and year filter
- open-only toggle
- visa advisory block
- quick-look modal state for selected event

### Child Components

- `app/components/global/EventInfoModal.vue`
  Quick-look modal for one event.
- `app/components/international/StatusBadge.vue`
  Reused badge rendering for visa and application states.

## Shared Functions Worth Knowing

## Local Calendar Helpers

- `parseDate()` in `app/utils/calendar.ts`
  Parses `YYYY-MM-DD` using local `Date(year, month - 1, day)`.
- `formatDateISO()`
  Converts a `Date` to `YYYY-MM-DD`.
- `getDateRange()`
  Expands inclusive event spans.
- `expandEvents()`
  Builds a date-to-events map for multi-day coverage.
- `getEventsForDate()`
  Returns all events covering one date.

## International Helpers

- `formatDate()`
  Human-readable date label or `TBD`.
- `formatDateRange()`
  Renders single-day or date-span text.
- `formatVisaLabel()`
  Converts visa category strings into UI copy.
- `getStayWindowGuidance()`
  Turns a stay limit into decision copy.
- `getNextEvent()`
  Chooses the next relevant event for a destination.
- `getDestinationStatus()`
  Maps a destination to `open`, `upcoming`, or `closed`.
- `sortDestinations()`
  Shared destination sorting logic.
- `groupEventsByMonth()`
  Buckets events by `YYYY-MM`.

## Component Reuse Notes

### Actively Used

- `app/components/international/StatusBadge.vue`
- `app/components/global/EventInfoModal.vue`

### Present But Not Mounted By Current Routes

- `app/components/international/FilterBar.vue`
- `app/components/international/DashboardCard.vue`
- `app/components/international/QuickViewModal.vue`

If you plan to revive them, verify their assumptions against current route behavior instead of assuming they still match the latest UX.

## Best Edit Targets By Goal

- Change local calendar persistence:
  - `app/composables/useEvents.ts`
- Change local calendar month logic:
  - `app/components/CalendarGrid.vue`
  - `app/utils/calendar.ts`
- Change local event modal form:
  - `app/components/EventModal.vue`
- Change model colors or labels:
  - `app/utils/models.ts`
- Change global destination grouping/filtering:
  - `app/composables/useGlobalDataset.ts`
- Change global status labels or sorting:
  - `app/utils/international-dashboard.ts`
- Change global landing page presentation:
  - `app/pages/global/index.vue`
- Change per-country experience:
  - `app/pages/global/[country].vue`
- Change source visa policy or alias inference:
  - `scripts/process-international-events.mjs`
