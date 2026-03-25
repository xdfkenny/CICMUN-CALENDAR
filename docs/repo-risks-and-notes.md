# Repo Risks And Notes

## 1. Encoding Issues Exist In Source Text

Several strings appear as mojibake or broken accent encoding in Spanish labels and copy.

This affects:

- page copy
- seed data
- config strings

Do not run broad text replacement or re-encoding blindly. Fix encoding intentionally and review rendered output after any text cleanup.

## 2. The Active Global UI Reads From `output/`

`app/composables/useGlobalDataset.ts` imports directly from:

- `output/mymun_calendar_eu_as_dates_cleaned.json`

That is unusual because `output/` is often treated as generated scratch space. In this repo it is part of the active app data path.

If you delete, rename, or ignore that file, `/global` breaks.

## 3. The Script And Runtime Apply Different Duration Rules

- Script cleaned dataset removes events longer than 4 days.
- Runtime global UI only shows events of 3 days or less.

This split is easy to miss and can create apparent inconsistencies.

## 4. `importEvents()` Has No Schema Validation

`app/composables/useEvents.ts` accepts any JSON array and stores it.

That means malformed imported objects can reach the UI and cause subtle breakage.

If future work improves robustness, import validation is a good candidate.

## 5. Some Components Are Probably Legacy Or Experimental

These exist but are not wired into the active routes:

- `app/components/international/FilterBar.vue`
- `app/components/international/DashboardCard.vue`
- `app/components/international/QuickViewModal.vue`

Treat them as reference material, not current truth.

## 6. No Tests Or Lint Scripts Are Configured

As of March 24, 2026:

- no `test` script
- no `lint` script

Validation depends on build success and manual inspection.

## 7. PowerShell Needs Literal Paths For Dynamic Route Files

Files like:

- `app/pages/global/[country].vue`

must be read with `-LiteralPath` in PowerShell because `[]` is treated specially.

This matters for future terminal-based agents.

## 8. Two Lockfiles Exist

The repo currently includes:

- `package-lock.json`
- `pnpm-lock.yaml`

That usually means package manager usage has been mixed. Be careful not to churn both lockfiles accidentally unless dependency updates are intentional.

## 9. `resetToSeed()` Exists But Is Not Surfaced In The Main Page

`useEvents.ts` exposes `resetToSeed()`, but `app/pages/index.vue` does not currently present a reset button in the active toolbar.

The function is available for future UI work if needed.

## 10. Hidden Product Intent

The `/global` routes are intentionally hidden:

- `noindex, nofollow`
- excluded from sitemap

Do not assume those pages are meant for public discovery unless product intent changes.

## Suggested Future Improvements

- add validation for imported local events
- unify or document package manager choice
- decide whether `output/` should remain a runtime dependency
- normalize encoding carefully
- add at least one smoke-test path for each surface
