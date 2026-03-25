# Data Flows

## Overview

There are two independent data pipelines in this repo.

## Flow A: Local Calendar Data

### Source Of Truth

- Seed file: `app/assets/data/events.json`
- Runtime composable: `app/composables/useEvents.ts`

### How It Works

1. `useEvents()` loads the seed JSON into `useLocalStorage`.
2. The storage key is `mun-calendar-events`.
3. A second key, `mun-calendar-seed-ids`, tracks which IDs came from the seed.
4. On client initialization, `syncWithLatestUpdates()` runs automatically.
5. That sync keeps:
   - latest seed events
   - user-created events whose IDs are not in the stored seed ID list
6. The page at `app/pages/index.vue` consumes the composable and passes state/actions into child components.

### Important Behavior

- `addEvent()` appends an event.
- `updateEvent()` shallow-merges by ID.
- `deleteEvent()` removes by ID.
- `resetToSeed()` discards local changes and restores the seed dataset.
- `exportEvents()` serializes the current in-browser dataset.
- `importEvents()` accepts any JSON array and replaces the current dataset without schema validation.

### Practical Consequence

If you change the seed file, existing users will only receive those admin changes after the client-side sync runs. Their user-created events are preserved, but imported or malformed event arrays are not validated.

## Flow B: International Dataset Generation

### Source Of Truth

- Script: `scripts/fetch-international-source.mjs`
- Script: `scripts/process-international-events.mjs`
- Source markdown: `output/mymun_calendar_eu_as_dates.md`
- Active processed output: `output/mymun_calendar_eu_as_dates_cleaned.json`

### What The Script Does

The `/global` ETL is split into two steps.

`scripts/fetch-international-source.mjs`:

1. Calls the MyMUN filtered conference list API directly.
2. Applies a source-side MUN relevance filter using conference slug/title/name.
3. Sorts the kept rows chronologically.
4. Writes the markdown snapshot at `output/mymun_calendar_eu_as_dates.md`.

`scripts/process-international-events.mjs` then:

1. Reads the generated markdown export of MyMUN conference entries.
2. Extracts metadata from the header section.
3. Parses each conference line with a regex.
4. Calculates inclusive event duration.
5. Rejects bad entries:
   - cancelled/canceled titles
   - duration longer than 4 days
   - invalid date ranges
6. Infers destination and city from the location string using alias matching.
7. Attaches a visa policy from the hardcoded destination map.
8. Produces:
   - cleaned markdown
   - cleaned JSON
   - stricter visa-free max-3-days markdown
   - stricter visa-free max-3-days JSON
9. Optionally writes `app/assets/data/international-events.json` when called with `--sync-app-data`.

### Key Constants In The Script

- `PASSPORT_ORIGIN = 'Venezuela'`
- `STRICT_DURATION_LIMIT = 3`
- `STRICT_VISA_CATEGORY = 'visa-free'`

These assumptions are not dynamic. If the product needs another passport origin or another trip profile, the script must be changed.

### Destination And Visa Logic

The script contains a hardcoded `DESTINATIONS` array with:

- destination key
- label
- flag
- alias strings used for location inference
- visa policy

If a new conference location cannot be inferred, the script throws.

That means new country support usually requires editing the destination map first.

## Flow C: Global Runtime Projection

### Runtime Input

- `app/composables/useGlobalDataset.ts` imports `output/mymun_calendar_eu_as_dates_cleaned.json` directly.

### Runtime Filtering

The composable applies another layer of filtering before the UI sees the data:

- maximum visible duration: 3 days
- allowed categories:
  - `visa-free`
  - `eVisa`
  - `visa on arrival`
  - `eVisa or visa on arrival`
  - `eTA`
  - `visa-required`

### Runtime Outputs

It builds:

- `dataset`
- `destinations`
- `visaFreeDestinations`
- `eVisaDestinations`
- `visaRequiredDestinations`
- `sections`
- `getDestinationByKey()`

### Important Difference From The Script

The script keeps entries up to 4 days in the cleaned dataset.

The active global UI narrows that further to 3 days inside `useGlobalDataset.ts`.

Future agents need to know this because:

- changing only the script does not necessarily change what the UI shows
- changing only the composable does not regenerate the exported review files

## Type Contracts

### Local Calendar

Defined in `app/types/calendar.ts`:

- `CalendarEvent`
- `DayEvents`
- `FilterState`

### International Dataset

Defined in `app/types/international.ts`:

- `VisaSource`
- `VisaPolicy`
- `InternationalEvent`
- `InternationalDestination`
- `InternationalDatasetMetadata`
- `RemovedInternationalEvent`
- `InternationalDataset`

## Current Active Files For Each Surface

### Local Calendar

- data: `app/assets/data/events.json`
- state: `app/composables/useEvents.ts`
- page: `app/pages/index.vue`

### Global Experience

- generation: `scripts/process-international-events.mjs`
- output: `output/mymun_calendar_eu_as_dates_cleaned.json`
- state assembly: `app/composables/useGlobalDataset.ts`
- pages:
  - `app/pages/global/index.vue`
  - `app/pages/global/[country].vue`

## Commands

```powershell
npm run dev
npm run build
npm run fetch:international
npm run refresh:international
npm run process:international
node scripts/process-international-events.mjs --sync-app-data
```
