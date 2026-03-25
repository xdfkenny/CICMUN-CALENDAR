# AI Handoff Docs

This folder is the working documentation set for future AI agents and human maintainers.

The repo is a Nuxt 4 application with two distinct product surfaces:

1. `/`
   A local editable MUN calendar backed by `app/assets/data/events.json` plus browser `localStorage`.
2. `/global`
   A generated international destination explorer backed by `output/mymun_calendar_eu_as_dates_cleaned.json`.

## Read This First

1. Read `docs/architecture-overview.md`
2. Read `docs/data-flows.md`
3. Read `docs/page-component-map.md`
4. Read `docs/change-playbook.md`
5. Read `docs/repo-risks-and-notes.md`

Then use the older focused docs when needed:

- `docs/global-page-workflow.md`
- `docs/visa-verification-process.md`

## Fast Repo Summary

- Framework: Nuxt 4 + Vue 3 + TypeScript
- Styling: Tailwind CSS v4 plus custom CSS utility classes in `app/assets/css/main.css`
- Primary runtime data split:
  - Editable local calendar data: `app/assets/data/events.json`
  - Generated international dataset: `output/mymun_calendar_eu_as_dates_cleaned.json`
- Build scripts:
  - `npm run dev`
  - `npm run build`
  - `npm run fetch:international`
  - `npm run generate`
  - `npm run process:international`
  - `npm run refresh:international`
- There are no lint or test scripts in `package.json` as of March 24, 2026.

## Recommended Agent Workflow

1. Identify which surface is being changed: local calendar or global dataset.
2. Trace the page to its composable and utility helpers before editing templates.
3. Prefer changing shared logic in composables/utils instead of duplicating logic in Vue templates.
4. If the change touches visa or destination logic, inspect both:
   - `app/composables/useGlobalDataset.ts`
   - `scripts/process-international-events.mjs`
5. If the change refreshes the MyMUN source export, run:
   - `npm run fetch:international`
   - `npm run process:international`
6. Run `npm run build` after changes whenever possible.

## Folder Map

- `app/pages`
  Route entry points.
- `app/components`
  Reusable UI for the local calendar and the global experience.
- `app/composables`
  State/data assembly logic.
- `app/utils`
  Shared helpers, sorting, date formatting, and model metadata.
- `app/types`
  Type contracts for both datasets.
- `app/assets/data`
  Seed JSON for the editable calendar.
- `output`
  Generated datasets and review exports for the international flow.
- `scripts`
  Processing pipeline for international dataset generation.

## Current Reality To Keep In Mind

- The global pages import directly from `output/mymun_calendar_eu_as_dates_cleaned.json`.
- The processing script can optionally write `app/assets/data/international-events.json`, but the active app does not currently consume that file.
- Some international dashboard components exist in the repo but are not currently mounted by any route.
- Several strings in the repo show mojibake or broken accent encoding in Spanish labels; treat text encoding carefully and do not mass-normalize without deliberate review.
