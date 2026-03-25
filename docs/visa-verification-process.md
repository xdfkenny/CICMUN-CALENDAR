# Visa Verification Process

This file documents how to verify and maintain visa information for the global MUN pages.

## Source Of Truth In The App

- Processed data file:
  - `output/mymun_calendar_eu_as_dates_cleaned.json`
- Dataset wiring:
  - `app/composables/useGlobalDataset.ts`
- UI helpers and labels:
  - `app/utils/international-dashboard.ts`

## Important Rule

Do not treat `passportindex.org` as sufficient proof on its own.

It is useful for quick comparison, but future visa audits should prefer official government sources such as:

- destination immigration portals
- destination foreign ministry pages
- official visa or eVisa portals
- official short-stay policy pages

## Recommended Verification Workflow

1. Extract the destination list from `output/mymun_calendar_eu_as_dates_cleaned.json`.
2. Review:
   - `destination.label`
   - `visaPolicy.category`
   - `visaPolicy.stayLimit`
   - `visaPolicy.verifiedAt`
   - `visaPolicy.sources`
3. Prioritize destinations that are more likely to drift or be mislabeled:
   - `eVisa`
   - `visa on arrival`
   - `eTA`
   - mixed labels like `eVisa or visa on arrival`
4. Check official destination-country sources for Venezuelan ordinary passport holders.
5. If the official source does not support the current category, update the JSON generation pipeline or the processed dataset source.
6. Update `verifiedAt` only after the rule has been re-checked.
7. Rebuild the app and review the affected destination tiles and country pages.

## What To Watch For

- `eVisa` vs `visa on arrival`
  These are not interchangeable in the UI.
- Mixed categories
  If the official source is narrower than the stored label, use the narrower label.
- Stay limits
  Some countries use `30 days`, others `90 days within 180 days`.
- Non-official confidence language
  If the source quality is weak, avoid overclaiming in UI copy.

## Example Audit Notes

During the March 24, 2026 review:

- Thailand was flagged as a likely mismatch because the app stored `eVisa or visa on arrival`.
- Official Thai MFA material for Venezuelan ordinary passports pointed to `visa on arrival` for up to 15 days.
- This kind of mismatch should be corrected rather than left as a broader mixed label.

## Suggested Audit Command

Use a quick Node script to print destination visa fields for review:

```powershell
@'
const data = require('./output/mymun_calendar_eu_as_dates_cleaned.json');
for (const d of data.destinations) {
  console.log([
    d.label,
    d.visaPolicy.category,
    d.visaPolicy.stayLimit,
    d.visaPolicy.verifiedAt
  ].join(' | '));
}
'@ | node
```

## Before Pushing

1. Run `npm run build`.
2. Check that affected cards on `/global` still render correctly.
3. Check that affected country detail pages still show the right visa label and verification info.
4. Commit only the intended dataset/UI changes.
