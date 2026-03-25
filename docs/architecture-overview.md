# Architecture Overview

## Application Shape

This repo is a single Nuxt application serving two mostly independent experiences:

## 1. Local Calendar Experience

- Main route: `app/pages/index.vue`
- State source: `app/composables/useEvents.ts`
- Seed data: `app/assets/data/events.json`
- Main components:
  - `app/components/LegendPanel.vue`
  - `app/components/CalendarGrid.vue`
  - `app/components/DayCell.vue`
  - `app/components/EventModal.vue`

This side of the app is editable in-browser. It stores data in `localStorage` and merges the seed dataset with user-created events on the client.

## 2. Global Destination Experience

- Landing route: `app/pages/global/index.vue`
- Detail route: `app/pages/global/[country].vue`
- Data source: `app/composables/useGlobalDataset.ts`
- Generated dataset input: `output/mymun_calendar_eu_as_dates_cleaned.json`
- Main components:
  - `app/components/global/EventInfoModal.vue`
  - `app/components/international/StatusBadge.vue`

This side of the app is read-only at runtime. Its data is produced offline by a script.

## Runtime And Framework

- Nuxt compatibility date: `2025-07-15`
- Core modules:
  - `@vueuse/nuxt`
  - `@nuxtjs/sitemap`
- CSS entry:
  - `app/assets/css/main.css`
- Global app shell:
  - `app/app.vue`

`app/app.vue` applies shared head metadata and mounts `vue-sonner` for toast notifications.

## Data Boundary Rules

The cleanest way to understand the repo is to treat it as two data systems:

- System A: editable event calendar
  - Input is seed JSON.
  - Runtime mutations happen in browser storage.
  - UI supports add, edit, delete, export, import, and seed sync.
- System B: processed international conference dataset
  - Input starts from a MyMUN export markdown file in `output/`.
  - A Node script parses, cleans, annotates, and exports JSON/markdown review artifacts.
  - UI reads the processed JSON and derives sections/destinations/events from it.

Do not assume a change on one side affects the other. They are separate unless you intentionally connect them.

## File Ownership By Concern

## Routing

- `app/pages/index.vue`
  Owns the local calendar page layout and top-level event actions.
- `app/pages/global/index.vue`
  Owns the global landing page sections and destination cards.
- `app/pages/global/[country].vue`
  Owns the per-country detail page, filters, and quick-look modal state.

## State Assembly

- `app/composables/useEvents.ts`
  Owns local calendar persistence and merge behavior.
- `app/composables/useGlobalDataset.ts`
  Owns the visible international dataset, filtering, sectioning, and destination lookup.

## Shared Logic

- `app/utils/calendar.ts`
  Date parsing/range helpers for the local calendar.
- `app/utils/models.ts`
  Local calendar model metadata and colors.
- `app/utils/committees.ts`
  Committee grouping/filter helpers for local events.
- `app/utils/international-dashboard.ts`
  International formatting, sorting, status, flag mapping, and grouping helpers.

## Static And Generated Data

- `app/assets/data/events.json`
  Seed local calendar data.
- `output/mymun_calendar_eu_as_dates.md`
  Script input for international processing.
- `output/mymun_calendar_eu_as_dates_cleaned.json`
  Active global UI data source.
- `output/mymun_calendar_eu_as_dates_cleaned_visa_free_max_3_days.json`
  Stricter filtered export used for review, not for the active UI.

## Styling System

There are two styling modes coexisting:

- Local calendar uses custom classes such as `cicmun-card`, `cicmun-button-primary`, and `cicmun-input`.
- Global pages mostly use direct utility classes and custom gradients.

`app/assets/css/main.css` contains:

- theme variables
- font imports
- legacy shared classes
- flag avatar helpers

Avoid assuming one visual system fully replaced the other. The repo is mixed.

## Active Versus Dormant Code

The following international components exist but are not currently mounted by the active routes:

- `app/components/international/FilterBar.vue`
- `app/components/international/DashboardCard.vue`
- `app/components/international/QuickViewModal.vue`

They look like earlier or alternate dashboard building blocks. They may still be useful, but they are not part of the current `/global` render path.

## SEO And Visibility

- Main site metadata is configured in `app/pages/index.vue`, `app/app.vue`, and `nuxt.config.ts`.
- `/global` and `/global/[country]` are explicitly marked `noindex, nofollow`.
- `nuxt.config.ts` also excludes `/global` routes from the sitemap.

This means the global experience is intentionally hidden from search indexing.
