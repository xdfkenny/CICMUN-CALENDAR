<p align="center">
  <img src="public/og-image.png" alt="MUN Calendar" width="100%">
</p>

<h1 align="center">AI Handoff Docs</h1>

<p align="center">
  Working documentation for future agents and human maintainers.
</p>

<p align="center">
  <a href="#product-surfaces">Surfaces</a> •
  <a href="#quick-start">Quick Start</a> •
  <a href="#onboarding">Onboarding</a> •
  <a href="#agent-workflow">Workflow</a> •
  <a href="#folder-structure">Structure</a>
</p>

---

## Product Surfaces

| Route | Purpose | Data Source |
|---|---|---|
| `/` | Editable local MUN calendar | `app/assets/data/events.json` + `localStorage` |
| `/global` | International destination explorer | `output/mymun_calendar_eu_as_dates_cleaned.json` |

---

## Quick Start

```bash
npm install
npm run dev
```

### Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start development server |
| `npm run build` | Production build |
| `npm run generate` | Static generation |
| `npm run fetch:international` | Fetch MyMUN source export |
| `npm run process:international` | Process into cleaned dataset |
| `npm run refresh:international` | Fetch + process in one shot |

> No lint or test scripts are present as of March 24, 2026.

---

## Onboarding

Read in this order:

1. [`docs/architecture-overview.md`](docs/architecture-overview.md)
2. [`docs/data-flows.md`](docs/data-flows.md)
3. [`docs/page-component-map.md`](docs/page-component-map.md)
4. [`docs/change-playbook.md`](docs/change-playbook.md)
5. [`docs/repo-risks-and-notes.md`](docs/repo-risks-and-notes.md)

Reference as needed:

- [`docs/global-page-workflow.md`](docs/global-page-workflow.md)
- [`docs/visa-verification-process.md`](docs/visa-verification-process.md)

---

## Agent Workflow

1. **Identify the surface** — local calendar (`/`) or global dataset (`/global`).
2. **Trace the page** to its composable and utility helpers before touching templates.
3. **Prefer shared logic** in composables/utils over duplicating logic in Vue templates.
4. **Visa / destination changes?** Inspect both:
   - `app/composables/useGlobalDataset.ts`
   - `scripts/process-international-events.mjs`
5. **Refreshing MyMUN data?** Run:
   ```bash
   npm run fetch:international
   npm run process:international
   ```
6. **Validate** with `npm run build` whenever possible.

---

## Folder Structure

```
app/pages/          # Route entry points
app/components/     # Reusable UI (calendar + global)
app/composables/    # State and data assembly
app/utils/          # Helpers, sorting, dates, metadata
app/types/          # Type contracts for both datasets
app/assets/data/    # Seed JSON for the editable calendar
output/             # Generated datasets and review exports
scripts/            # Processing pipeline
```

---

## Important Notes

- Global pages import **directly** from `output/mymun_calendar_eu_as_dates_cleaned.json`.
- The processing script can optionally write to `app/assets/data/international-events.json`, but the app **does not currently consume it**.
- Some international dashboard components exist but are **not mounted by any route**.
- Several Spanish labels have mojibake / broken accent encoding. **Do not mass-normalize** without deliberate review.

---

<p align="center"><em>Docs last updated: March 24, 2026</em></p>
