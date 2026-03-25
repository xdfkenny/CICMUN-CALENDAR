# Global Page Workflow

This file documents how the `/global` experience is built so future edits can be made quickly and consistently.

## Main Files

- `app/pages/global/index.vue`
  The global destination landing page.
- `app/pages/global/[country].vue`
  The per-country detail page.
- `app/components/global/EventInfoModal.vue`
  The event quick-look modal used on the country page.
- `app/composables/useGlobalDataset.ts`
  Builds the visible destination/event dataset from the processed JSON.
- `app/utils/international-dashboard.ts`
  Shared helpers for flags, dates, stay-window labels, status sorting, and destination status.
- `output/mymun_calendar_eu_as_dates_cleaned.json`
  The generated source of truth used by the global pages.

## Current UX Decisions

### Global Landing Page

- The full destination tile is clickable, not just the flag.
- Section order remains based on the dataset sections:
  - `visa-free`
  - `e-visa`
  - `visa-required`
- Inside each section, destinations are sorted with `sortDestinations(..., 'status', todayIso)`.
- The desktop grid is capped at 6 columns.
- The sticky top nav links to section anchors.
- Each tile has a grouped metadata box with:
  - status
  - next event date
  - stay window
  - visa label + verification date

### Country Page

- The page highlights the next event above the event list.
- Events are grouped by year.
- Users can filter to a specific year.
- Users can toggle `open only`.
- Empty filtered states show a message instead of leaving blank space.

## Editing Rules For Future UI Changes

- Keep the landing page optimized for fast comparison between countries.
- Put decision-making info on the tile before adding extra decoration.
- If a new badge or chip is added, make sure it still reads well on mobile.
- Prefer reusing helpers in `app/utils/international-dashboard.ts` instead of duplicating status logic inside templates.
- If destination sorting changes, update it in one place and verify the landing page still feels predictable.

## Safe Change Checklist

1. Update the relevant Vue page or shared helper.
2. Run `npm run build`.
3. Check both:
   - `/global`
   - `/global/[country]`
4. Verify mobile density and desktop spacing.
5. If the change touches visa labels or stay logic, also review `docs/visa-verification-process.md`.

## Common Commands

```powershell
npm run build
git status --short
git diff --stat
```
