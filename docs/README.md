<p align="center">
  <img src="https://github.com/xdfkenny/CICMUN-CALENDAR/blob/main/public/images/og-image.png?raw=true" alt="CICMUN Calendar" width="100%" />
</p>

<h1 align="center">CICMUN Calendar</h1>

<p align="center">
  <b>A dual-surface Nuxt 4 application for Model UN conference discovery and local calendar management.</b>
</p>

<p align="center">
  <a href="#-quick-start">Quick Start</a> •
  <a href="#-architecture">Architecture</a> •
  <a href="#-documentation">Docs</a> •
  <a href="#-scripts">Scripts</a> •
  <a href="#-folder-structure">Structure</a>
</p>

---

## Overview

This repository powers two distinct product surfaces:

| Surface | Route | Description | Data Source |
|---------|-------|-------------|-------------|
| **Local Calendar** | `/` | An editable MUN calendar with browser persistence | `app/assets/data/events.json` + `localStorage` |
| **Global Explorer** | `/global` | An international destination explorer for MUN conferences | `output/mymun_calendar_eu_as_dates_cleaned.json` |

---

## Quick Start

```bash
# Install dependencies
npm install

# Start the development server
npm run dev

# Build for production
npm run build
```

---

## Architecture

- **Framework:** Nuxt 4 + Vue 3 + TypeScript
- **Styling:** Tailwind CSS v4 with custom utilities in `app/assets/css/main.css`

### Data Flow

```
┌─────────────────┐     ┌─────────────────────────────┐
│  Local Calendar │     │      Global Explorer        │
│      (/)        │     │         (/global)           │
└────────┬────────┘     └──────────────┬──────────────┘
         │                             │
         ▼                             ▼
┌─────────────────┐     ┌─────────────────────────────┐
│ events.json     │     │ mymun_calendar_eu_as_dates  │
│ localStorage    │     │ _cleaned.json               │
└─────────────────┘     └─────────────────────────────┘
```

---

## Documentation

> **New maintainers and AI agents:** read these in order.

### Core Docs
1. [`docs/architecture-overview.md`](docs/architecture-overview.md) — System design and conventions
2. [`docs/data-flows.md`](docs/data-flows.md) — How data moves through the app
3. [`docs/page-component-map.md`](docs/page-component-map.md) — Route-to-component reference
4. [`docs/change-playbook.md`](docs/change-playbook.md) — How to make safe changes
5. [`docs/repo-risks-and-notes.md`](docs/repo-risks-and-notes.md) — Known issues and caveats

### Specialized Docs
- [`docs/global-page-workflow.md`](docs/global-page-workflow.md) — Global surface workflows
- [`docs/visa-verification-process.md`](docs/visa-verification-process.md) — Visa logic details

---

## Scripts

| Command | Purpose |
|---------|---------|
| `npm run dev` | Start the Vite development server |
| `npm run build` | Build for production |
| `npm run generate` | Generate static site |
| `npm run fetch:international` | Pull fresh data from MyMUN source |
| `npm run process:international` | Process and clean international dataset |
| `npm run refresh:international` | Full refresh: fetch + process |

> **Note:** There are no lint or test scripts in `package.json` as of March 24, 2026.

---

## Recommended Agent Workflow

1. **Identify the surface** being changed: local calendar or global dataset.
2. **Trace the page** to its composable and utility helpers before editing templates.
3. **Prefer shared logic** in composables/utils over duplicating logic in Vue templates.
4. **If changing visa or destination logic**, inspect both:
   - [`app/composables/useGlobalDataset.ts`](app/composables/useGlobalDataset.ts)
   - [`scripts/process-international-events.mjs`](scripts/process-international-events.mjs)
5. **If refreshing MyMUN data**, run:
   ```bash
   npm run fetch:international
   npm run process:international
   ```
6. **Run `npm run build`** after changes whenever possible.

---

## Folder Structure

```
app/
├── pages/              # Route entry points
├── components/         # Reusable UI (local + global)
├── composables/        # State and data assembly logic
├── utils/              # Shared helpers, sorting, date formatting
├── types/              # TypeScript contracts for both datasets
└── assets/
    └── data/           # Seed JSON for the editable calendar

output/                 # Generated datasets and review exports
scripts/                # Processing pipeline for international data
```

---

## Current Reality

<details>
<summary>Click to expand important implementation notes</summary>

- The global pages import **directly** from `output/mymun_calendar_eu_as_dates_cleaned.json`.
- The processing script can optionally write to `app/assets/data/international-events.json`, but the active app **does not currently consume that file**.
- Some international dashboard components exist in the repo but are **not currently mounted** by any route.
- Several strings in the repo show **mojibake or broken accent encoding** in Spanish labels. Treat text encoding carefully and **do not mass-normalize** without deliberate review.

</details>

---

<p align="center">
  <sub>Built with Nuxt 4 · Maintained by CICMUN</sub>
</p>
