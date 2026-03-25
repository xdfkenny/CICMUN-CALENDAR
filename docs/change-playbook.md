# Change Playbook

## General Rule

Decide first whether the request belongs to:

- the editable local calendar
- the generated global dataset
- shared styling/runtime config

Most mistakes in this repo come from editing the wrong data source.

## Common Task: Add Or Edit A Local Calendar Event

Edit:

- `app/assets/data/events.json`

Then verify:

- `app/pages/index.vue`
- `app/components/CalendarGrid.vue`
- `app/components/EventModal.vue`

Notes:

- `useEvents()` will sync the latest seed into local storage on the client.
- Existing users may still carry imported/custom local data.

## Common Task: Change Local Calendar Filtering

Likely files:

- `app/pages/index.vue`
- `app/components/LegendPanel.vue`
- `app/utils/models.ts`

Examples:

- change visible language buckets
- change selected defaults
- change badge colors

## Common Task: Change Month Navigation Or Day Rendering

Likely files:

- `app/components/CalendarGrid.vue`
- `app/components/DayCell.vue`
- `app/utils/calendar.ts`

Examples:

- different month boundaries
- different event marker density
- blocked-day behavior

## Common Task: Change Global Country Grouping Or Visibility

Edit:

- `app/composables/useGlobalDataset.ts`

This is the right place for:

- visible visa categories
- maximum event duration
- section membership
- destination aggregation

Do not duplicate grouping logic in page templates.

## Common Task: Change Global Sorting, Labels, Or Status Rules

Edit:

- `app/utils/international-dashboard.ts`

This is the right place for:

- status definitions
- date-range filtering logic
- region logic
- stay-window labels
- visa label formatting
- reusable sort behavior

## Common Task: Update Visa Policy For A Destination

Edit:

- `scripts/process-international-events.mjs`

Review also:

- `docs/visa-verification-process.md`

Typical touch points:

- destination `aliases`
- visa category
- stay limit
- note text
- verification sources

Then regenerate outputs:

```powershell
npm run process:international
```

If you want the optional app asset written too:

```powershell
node scripts/process-international-events.mjs --sync-app-data
```

## Common Task: Add Support For A New Destination

Edit:

- `scripts/process-international-events.mjs`
- `app/utils/international-dashboard.ts`

Checklist:

1. Add the destination definition with aliases and visa policy.
2. Add a flag code in `FLAG_CODE_BY_DESTINATION_KEY` if supported.
3. Regenerate processed outputs.
4. Verify `/global` and `/global/[country]`.

## Common Task: Change Global Card Or Country Page UI

Landing page UI:

- `app/pages/global/index.vue`

Country page UI:

- `app/pages/global/[country].vue`

Shared modal/badge UI:

- `app/components/global/EventInfoModal.vue`
- `app/components/international/StatusBadge.vue`

Check the older intent docs too:

- `docs/global-page-workflow.md`

## Common Task: Change Global Styling

Global pages mostly use inline utility classes in the Vue files.

Shared base tokens and helper classes live in:

- `app/assets/css/main.css`

The local calendar is much more dependent on `cicmun-*` classes than the global pages are.

## Validation Standard In This Repo

There is no automated test suite configured. The minimum reliable validation path is:

```powershell
npm run build
```

Then manually review:

- `/`
- `/global`
- at least one `/global/[country]` page

## Manual Checks By Change Type

### If You Changed Local Calendar Data Or UI

- confirm event counts still make sense
- confirm day selection opens the modal
- confirm add/edit/delete still works
- confirm blocked school days still show as blocked

### If You Changed Global Dataset Or UI

- confirm section counts are plausible
- confirm destination links still resolve
- confirm next-event labels are not broken
- confirm visa labels and verification dates still render cleanly

### If You Changed The Processing Script

- inspect regenerated JSON for:
  - destination key
  - city inference
  - duration
  - visa category
  - verified date
- confirm the UI still imports the expected output file

## Editing Discipline

- Prefer updating shared logic in one place.
- Do not silently change passport assumptions in the script.
- Do not assume dormant international components are safe to re-enable without checking current data contracts.
