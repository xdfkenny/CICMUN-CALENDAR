# MUN Calendar 2025–2026

A production-ready calendar application for Model United Nations events across Latin America, built with React 19, Tailwind CSS 4, and TypeScript.

## Features

### 📅 Calendar Views
- **Month View** - Default calendar display with full month navigation
- **Navigation Controls** - Previous Month, Today, Next Month buttons
- **Multi-day Events** - Automatically expands events spanning multiple days
- **Event Indicators** - Color-coded dots show events at a glance

### 🎨 Color-Coded Models
Five distinct event categories with unique colors:
- **Spanish Events** (Red #E53935) - Spanish-language MUN conferences
- **English Events** (Blue #1E88E5) - English-language MUN conferences
- **Bilingual Events** (Green #43A047) - Bilingual MUN conferences
- **Special Events** (Purple #8E24AA) - Special or hybrid events
- **Workshops** (Orange #FB8C00) - Training and workshop sessions

### 🔍 Filtering & Legend
- **Interactive Legend** - Click model checkboxes to filter calendar
- **Search** - Search models by name
- **Show All / Clear** - Quick filter controls
- **Mobile Responsive** - Legend collapses on smaller screens

### ✏️ Event Management (CRUD)
- **Add Events** - Create new events with date picker, model selection, and notes
- **Edit Events** - Modify existing event details
- **Delete Events** - Remove events from calendar
- **View Events** - Click any day to see all events for that date
- **Multi-day Support** - Create events spanning multiple days

### 💾 Data Persistence
- **localStorage** - All changes automatically saved to browser storage
- **Export Events** - Download events as JSON file
- **Import Events** - Upload JSON file to restore or merge events
- **Reset to Seed** - Restore original 50+ MUN events

## Tech Stack

- **Framework**: React 19 with TypeScript
- **Styling**: Tailwind CSS 4 with shadcn/ui components
- **Routing**: Wouter (client-side)
- **State Management**: React hooks (useState, useEffect)
- **Icons**: Lucide React
- **Notifications**: Sonner (toast messages)
- **Build Tool**: Vite
- **Deployment**: Vercel-ready static export

## Project Structure

```
client/
├── public/              # Static assets
├── src/
│   ├── components/      # Reusable UI components
│   │   ├── CalendarGrid.tsx      # Main calendar display
│   │   ├── DayCell.tsx           # Individual day cell
│   │   ├── LegendPanel.tsx       # Filter legend
│   │   ├── EventModal.tsx        # Event CRUD modal
│   │   └── ui/                   # shadcn/ui components
│   ├── hooks/           # Custom React hooks
│   │   └── useEvents.ts          # Event state management
│   ├── lib/             # Utilities and types
│   │   ├── models.ts             # Model definitions
│   │   └── types.ts              # Event types and utilities
│   ├── data/            # Seed data
│   │   └── events.json           # 50+ MUN events
│   ├── pages/           # Page components
│   │   └── Home.tsx              # Main calendar page
│   ├── App.tsx          # Root component with routing
│   ├── main.tsx         # React entry point
│   └── index.css        # Global styles and Tailwind config
├── index.html           # HTML template
└── package.json         # Dependencies

server/                  # Placeholder for compatibility
shared/                  # Placeholder for compatibility
```

## Data Schema

### Event Object
```typescript
interface CalendarEvent {
  id: string;                    // Unique identifier
  title: string;                 // Event name (e.g., "BRITMUN")
  model: string;                 // Category: "A" | "B" | "C" | "D" | "E"
  startDate: string;             // ISO format: YYYY-MM-DD
  endDate: string;               // ISO format: YYYY-MM-DD
  notes?: string;                // Optional notes or emoji indicators
  language?: string;             // Optional: Español, Inglés, Bilingüe
}
```

### Model Object
```typescript
interface Model {
  id: string;                    // "A" through "E"
  name: string;                  // Display name
  color: string;                 // Hex color code
  bgColor: string;               // Tailwind background class
  textColor: string;             // Tailwind text color class
}
```

## Getting Started

### Installation
```bash
cd mun-calendar
pnpm install
```

### Development
```bash
pnpm run dev
```
The application will be available at `http://localhost:3000`

### Build for Production
```bash
pnpm run build
```

### Preview Production Build
```bash
pnpm run preview
```

## Usage Guide

### Viewing Events
1. Navigate months using Previous/Next buttons
2. Click "Today" to jump to current date
3. Colored dots on each day indicate events
4. Hover over dots to see event titles in tooltip

### Filtering Events
1. Use the "Models & Filter" panel on the left
2. Check/uncheck models to show/hide event types
3. Search for specific models by name
4. Use "Show All" to display all events
5. Use "Clear" to hide all events

### Managing Events
1. Click any day to open the event modal
2. View all events for that date
3. Click "Add Event" to create a new event
4. Fill in title, model, dates, and optional notes
5. Click "Add Event" to save
6. Click the edit icon to modify existing events
7. Click the delete icon to remove events

### Importing/Exporting
1. **Export**: Click the "Export" button to download events as JSON
2. **Import**: Click the "Import" button and select a JSON file
3. **Reset**: Click "Reset" to restore original seed data (confirmation required)

## Accessibility Features

- ✅ **ARIA Labels** - All interactive elements have descriptive labels
- ✅ **Keyboard Navigation** - Full keyboard support for all controls
- ✅ **High Contrast** - Text colors meet WCAG AA standards
- ✅ **Focus Indicators** - Clear focus rings on all buttons
- ✅ **Semantic HTML** - Proper heading hierarchy and structure
- ✅ **Tooltips** - Hover tooltips for event information

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Deployment

### Deploy to Vercel
```bash
# Push to GitHub repository
git push origin main

# Vercel will automatically deploy
# Custom domain can be configured in Vercel dashboard
```

### Environment Variables
No environment variables required for static deployment.

## Event Data

The calendar includes 50+ MUN events from November 2025 to July 2026:

- **November 2025**: REDEMIL, BRITMUN, ECAMUN, VMUNS, DAMUN, USB LAMUN
- **December 2025**: TID UNIMET
- **January 2026**: LAMUN UCAB JR, CaMUN, HIMUN, TARMUN, LASAMUN
- **February 2026**: REDEMIL BOOTCAMP, LAMUN USM, ClaMUN, METROMUN, WAMUN, CLAYMUN, STVMUN, CSGMUN
- **March 2026**: SIBMUN, USB LAMUN II, MAIMUN, MSMUN, SAIMUN, HUIMUN, CHAMUN
- **April 2026**: ABMUN, ClaMUN, CREYMUN, FRAIMUN, MADIMUN, IAMUN, IMAMUN
- **May 2026**: ICCMUN, Academia Merici, SIMUN, SAIMUN, EL PEÑON MUN, RoraiMUN, CUMBRE CSAP
- **June 2026**: LCIMUN, GUAIMUN, ISANMUN, CEAMUN, MUN UCV, VAMUN, STJMUN
- **July 2026**: DAMUN

## Future Enhancements

- Week view toggle
- Event categories beyond models
- Recurring events
- Event reminders/notifications
- Calendar sharing via URL
- Dark mode support
- Multiple language support

## License

MIT

## Support

For issues or feature requests, please create an issue in the repository.

---

**Built with ❤️ for the MUN community**
