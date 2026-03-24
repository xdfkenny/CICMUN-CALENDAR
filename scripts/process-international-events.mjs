import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';

const SOURCE_PATH = resolve('output/mymun_calendar_eu_as_dates.md');
const REVIEW_MARKDOWN_PATH = resolve('output/mymun_calendar_eu_as_dates_cleaned.md');
const REVIEW_JSON_PATH = resolve('output/mymun_calendar_eu_as_dates_cleaned.json');
const STRICT_REVIEW_MARKDOWN_PATH = resolve('output/mymun_calendar_eu_as_dates_cleaned_visa_free_max_3_days.md');
const STRICT_REVIEW_JSON_PATH = resolve('output/mymun_calendar_eu_as_dates_cleaned_visa_free_max_3_days.json');
const APP_DATA_PATH = resolve('app/assets/data/international-events.json');
const PASSPORT_ORIGIN = 'Venezuela';
const VERIFIED_AT = new Date().toISOString().slice(0, 10);
const STRICT_DURATION_LIMIT = 3;
const STRICT_VISA_CATEGORY = 'visa-free';
const SHOULD_WRITE_APP_DATA = process.argv.includes('--sync-app-data');

const passportIndexSource = {
  label: 'Passport Index: Venezuela passport dashboard',
  url: 'https://www.passportindex.org/passport/venezuela/',
};

const schengenSource = {
  label: 'European Commission: EU visa policy',
  url: 'https://home-affairs.ec.europa.eu/policies/schengen-borders-and-visa/visa-policy_en',
};

const ukSource = {
  label: 'GOV.UK: Check if you need a UK visa',
  url: 'https://www.gov.uk/check-uk-visa',
};

const koreaEtaSource = {
  label: 'Republic of Korea: K-ETA',
  url: 'https://www.k-eta.go.kr/portal/apply/index.do?locale=ES',
};

const labelForVisaCategory = {
  'visa-free': 'Visa-free',
  'visa-required': 'Visa required',
  eVisa: 'eVisa',
  'visa on arrival': 'Visa on arrival',
  eTA: 'eTA',
  'eVisa or visa on arrival': 'eVisa or visa on arrival',
};

const sharedVisaNote =
  'Verify the latest rule with the airline and the destination consulate before booking.';

const makeVisaPolicy = (category, stayLimit = null, extra = {}) => ({
  category,
  label: labelForVisaCategory[category],
  stayLimit,
  verifiedAt: VERIFIED_AT,
  passportOrigin: PASSPORT_ORIGIN,
  note: extra.note ?? sharedVisaNote,
  sources: extra.sources ?? [passportIndexSource],
});

const makeSchengenVisaFreePolicy = () =>
  makeVisaPolicy('visa-free', '90 days within 180 days', {
    note:
      'Schengen short stays follow the 90/180-day rule. Verify airline and consular requirements before travel.',
    sources: [passportIndexSource, schengenSource],
  });

const makeDestination = (key, label, flag, aliases, visaPolicy) => ({
  key,
  label,
  flag,
  aliases,
  visaPolicy,
});

const DESTINATIONS = [
  makeDestination('albania', 'Albania', '🇦🇱', ['Albania'], makeVisaPolicy('visa-free', '90 days')),
  makeDestination('armenia', 'Armenia', '🇦🇲', ['Armenia'], makeVisaPolicy('eVisa', '120 days')),
  makeDestination('austria', 'Austria', '🇦🇹', ['Austria'], makeSchengenVisaFreePolicy()),
  makeDestination('azerbaijan', 'Azerbaijan', '🇦🇿', ['Azerbaijan'], makeVisaPolicy('visa-required')),
  makeDestination(
    'bahrain',
    'Bahrain',
    '🇧🇭',
    ['Bahrain'],
    makeVisaPolicy('eVisa or visa on arrival', '30 days'),
  ),
  makeDestination(
    'bangladesh',
    'Bangladesh',
    '🇧🇩',
    ['Bangladesh'],
    makeVisaPolicy('visa on arrival', '30 days'),
  ),
  makeDestination('belgium', 'Belgium', '🇧🇪', ['Belgium'], makeSchengenVisaFreePolicy()),
  makeDestination('bulgaria', 'Bulgaria', '🇧🇬', ['Bulgaria'], makeSchengenVisaFreePolicy()),
  makeDestination('china', 'China', '🇨🇳', ['China'], makeVisaPolicy('visa-required')),
  makeDestination('croatia', 'Croatia', '🇭🇷', ['Croatia'], makeSchengenVisaFreePolicy()),
  makeDestination('cyprus', 'Cyprus', '🇨🇾', ['Cyprus'], makeVisaPolicy('visa-free', '90 days')),
  makeDestination(
    'czechia',
    'Czechia',
    '🇨🇿',
    ['Czech Republic, Czechia', 'Czechia', 'Czech Republic'],
    makeSchengenVisaFreePolicy(),
  ),
  makeDestination('denmark', 'Denmark', '🇩🇰', ['Denmark'], makeSchengenVisaFreePolicy()),
  makeDestination('france', 'France', '🇫🇷', ['France'], makeSchengenVisaFreePolicy()),
  makeDestination('georgia', 'Georgia', '🇬🇪', ['Georgia'], makeVisaPolicy('visa-required')),
  makeDestination('germany', 'Germany', '🇩🇪', ['Germany'], makeSchengenVisaFreePolicy()),
  makeDestination('greece', 'Greece', '🇬🇷', ['Greece'], makeSchengenVisaFreePolicy()),
  makeDestination(
    'hong-kong',
    'Hong Kong SAR',
    '🇭🇰',
    ['Hong Kong SAR China', 'Hong Kong, China', 'Hong Kong'],
    makeVisaPolicy('visa-free', '90 days'),
  ),
  makeDestination('india', 'India', '🇮🇳', ['India'], makeVisaPolicy('eVisa', '30 days')),
  makeDestination(
    'indonesia',
    'Indonesia',
    '🇮🇩',
    ['Indonesia'],
    makeVisaPolicy('eVisa or visa on arrival', '30 days'),
  ),
  makeDestination('italy', 'Italy', '🇮🇹', ['Italy'], makeSchengenVisaFreePolicy()),
  makeDestination('japan', 'Japan', '🇯🇵', ['Japan'], makeVisaPolicy('visa-required')),
  makeDestination(
    'jordan',
    'Jordan',
    '🇯🇴',
    ['Jordan'],
    makeVisaPolicy('eVisa or visa on arrival', '30 days'),
  ),
  makeDestination(
    'kazakhstan',
    'Kazakhstan',
    '🇰🇿',
    ['Kazakhstan'],
    makeVisaPolicy('eVisa'),
  ),
  makeDestination('kosovo', 'Kosovo', '🇽🇰', ['Kosovo'], makeVisaPolicy('visa-free', '90 days')),
  makeDestination('kuwait', 'Kuwait', '🇰🇼', ['Kuwait'], makeVisaPolicy('visa-required')),
  makeDestination('lebanon', 'Lebanon', '🇱🇧', ['Lebanon'], makeVisaPolicy('visa on arrival', '30 days')),
  makeDestination('luxembourg', 'Luxembourg', '🇱🇺', ['Luxembourg'], makeSchengenVisaFreePolicy()),
  makeDestination('malaysia', 'Malaysia', '🇲🇾', ['Malaysia'], makeVisaPolicy('visa-free', '30 days')),
  makeDestination('malta', 'Malta', '🇲🇹', ['Malta'], makeSchengenVisaFreePolicy()),
  makeDestination(
    'moldova',
    'Moldova',
    '🇲🇩',
    ['Moldova, Republic of', 'Moldova'],
    makeVisaPolicy('visa-free', '90 days'),
  ),
  makeDestination(
    'nepal',
    'Nepal',
    '🇳🇵',
    ['Nepal'],
    makeVisaPolicy('eVisa or visa on arrival', '150 days'),
  ),
  makeDestination('netherlands', 'Netherlands', '🇳🇱', ['Netherlands'], makeSchengenVisaFreePolicy()),
  makeDestination('norway', 'Norway', '🇳🇴', ['Norway'], makeSchengenVisaFreePolicy()),
  makeDestination(
    'oman',
    'Oman',
    '🇴🇲',
    ['Oman'],
    makeVisaPolicy('eVisa or visa on arrival', '30 days'),
  ),
  makeDestination('pakistan', 'Pakistan', '🇵🇰', ['Pakistan'], makeVisaPolicy('eVisa')),
  makeDestination(
    'palestine',
    'Palestine',
    '🇵🇸',
    ['Palestine, State of', 'Palestinian Territories', 'Palestine'],
    makeVisaPolicy('visa-free'),
  ),
  makeDestination('poland', 'Poland', '🇵🇱', ['Poland'], makeSchengenVisaFreePolicy()),
  makeDestination('portugal', 'Portugal', '🇵🇹', ['Portugal'], makeSchengenVisaFreePolicy()),
  makeDestination('romania', 'Romania', '🇷🇴', ['Romania'], makeSchengenVisaFreePolicy()),
  makeDestination(
    'russia',
    'Russia',
    '🇷🇺',
    ['Russian Federation'],
    makeVisaPolicy('visa-free', '90 days'),
  ),
  makeDestination('saudi-arabia', 'Saudi Arabia', '🇸🇦', ['Saudi Arabia'], makeVisaPolicy('eVisa')),
  makeDestination('serbia', 'Serbia', '🇷🇸', ['Serbia'], makeVisaPolicy('visa-free', '90 days')),
  makeDestination('singapore', 'Singapore', '🇸🇬', ['Singapore'], makeVisaPolicy('visa-free', '30 days')),
  makeDestination('slovakia', 'Slovakia', '🇸🇰', ['Slovakia'], makeSchengenVisaFreePolicy()),
  makeDestination(
    'south-korea',
    'South Korea',
    '🇰🇷',
    ['Korea, Republic of', 'South Korea'],
    makeVisaPolicy('eTA', '90 days', {
      sources: [passportIndexSource, koreaEtaSource],
    }),
  ),
  makeDestination('spain', 'Spain', '🇪🇸', ['Spain'], makeSchengenVisaFreePolicy()),
  makeDestination('sweden', 'Sweden', '🇸🇪', ['Sweden'], makeSchengenVisaFreePolicy()),
  makeDestination('switzerland', 'Switzerland', '🇨🇭', ['Switzerland'], makeSchengenVisaFreePolicy()),
  makeDestination(
    'syria',
    'Syria',
    '🇸🇾',
    ['Syrian Arab Republic', 'Syria'],
    makeVisaPolicy('eVisa'),
  ),
  makeDestination(
    'thailand',
    'Thailand',
    '🇹🇭',
    ['Thailand'],
    makeVisaPolicy('eVisa or visa on arrival', '15 days'),
  ),
  makeDestination('turkiye', 'Türkiye', '🇹🇷', ['Türkiye', 'Turkey'], makeVisaPolicy('visa-free', '90 days')),
  makeDestination(
    'united-arab-emirates',
    'United Arab Emirates',
    '🇦🇪',
    ['United Arab Emirates'],
    makeVisaPolicy('eVisa'),
  ),
  makeDestination(
    'united-kingdom',
    'United Kingdom',
    '🇬🇧',
    ['United Kingdom of Great Britain and Northern Ireland', 'United Kingdom'],
    makeVisaPolicy('visa-required', null, {
      sources: [passportIndexSource, ukSource],
    }),
  ),
  makeDestination('uzbekistan', 'Uzbekistan', '🇺🇿', ['Uzbekistan'], makeVisaPolicy('eVisa', '30 days')),
];

const destinationByAlias = new Map();

for (const destination of DESTINATIONS) {
  for (const alias of destination.aliases) {
    destinationByAlias.set(alias.toLowerCase(), destination);
  }
}

const sortedAliases = [...destinationByAlias.keys()].sort((a, b) => b.length - a.length);

const entryPattern =
  /^- (\d{4}-\d{2}-\d{2}) to (\d{4}-\d{2}-\d{2}) \| (.+?) \| (.+?) \| price: (.+?) \| verified: (yes|no) \| applications open: (yes|no) \| \[page\]\((.+)\)$/;

const text = readFileSync(SOURCE_PATH, 'utf8');
const lines = text.split(/\r?\n/);

const metadataLines = [];
for (const line of lines) {
  if (line.startsWith('- ') && !line.match(entryPattern)) {
    metadataLines.push(line.slice(2));
  }
  if (line === '## Summary') {
    break;
  }
}

const rawMetadata = Object.fromEntries(
  metadataLines
    .map((line) => {
      const splitIndex = line.indexOf(': ');
      if (splitIndex === -1) return null;
      return [line.slice(0, splitIndex), line.slice(splitIndex + 2)];
    })
    .filter(Boolean),
);

const parseDate = (value) => new Date(`${value}T00:00:00Z`);

const differenceInDaysInclusive = (startDate, endDate) =>
  Math.round((endDate.getTime() - startDate.getTime()) / 86400000) + 1;

const slugify = (value) =>
  value
    .normalize('NFKD')
    .replace(/[^\w\s-]/g, '')
    .trim()
    .toLowerCase()
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');

const inferDestination = (location) => {
  const lowered = location.toLowerCase();

  for (const alias of sortedAliases) {
    if (lowered.endsWith(alias)) {
      const destination = destinationByAlias.get(alias);
      const city = location.slice(0, location.length - alias.length).replace(/,\s*$/, '').trim();
      return {
        destination,
        city: city || destination.label,
        matchedAlias: alias,
      };
    }
  }

  const parts = location.split(',').map((part) => part.trim()).filter(Boolean);
  const countryGuess = parts.at(-1) ?? location;
  throw new Error(`Unable to infer destination for location: "${location}" (guessed "${countryGuess}")`);
};

const tryInferDestination = (location) => {
  try {
    return inferDestination(location);
  } catch {
    return null;
  }
};

const buildDestinationGroups = (events) => {
  const destinationGroups = new Map();

  for (const destination of DESTINATIONS) {
    destinationGroups.set(destination.key, {
      key: destination.key,
      label: destination.label,
      flag: destination.flag,
      visaPolicy: destination.visaPolicy,
      eventCount: 0,
      nextEventDate: null,
      lastEventDate: null,
      cities: [],
      events: [],
    });
  }

  for (const event of events) {
    const group = destinationGroups.get(event.destinationKey);
    if (!group) continue;
    group.events.push(event);
    group.eventCount += 1;
    group.nextEventDate = group.nextEventDate
      ? event.startDate < group.nextEventDate
        ? event.startDate
        : group.nextEventDate
      : event.startDate;
    group.lastEventDate = group.lastEventDate
      ? event.endDate > group.lastEventDate
        ? event.endDate
        : group.lastEventDate
      : event.endDate;
    if (!group.cities.includes(event.city)) {
      group.cities.push(event.city);
      group.cities.sort((a, b) => a.localeCompare(b));
    }
  }

  return [...destinationGroups.values()]
    .filter((destination) => destination.eventCount > 0)
    .sort((a, b) => a.label.localeCompare(b.label));
};

const buildMonthBreakdown = (events) =>
  events.reduce((accumulator, event) => {
    accumulator[event.startMonth] = (accumulator[event.startMonth] ?? 0) + 1;
    return accumulator;
  }, {});

const rawEntries = [];

for (const line of lines) {
  const match = line.match(entryPattern);
  if (!match) continue;

  const [, startDate, endDate, title, location, price, verified, applicationsOpen, pageUrl] = match;
  const start = parseDate(startDate);
  const end = parseDate(endDate);
  const durationDays = differenceInDaysInclusive(start, end);
  const isCancelled = /cancelled|canceled/i.test(title);

  rawEntries.push({
    id: `${pageUrl.split('/').filter(Boolean).at(-1) ?? slugify(title)}-${startDate}`,
    title,
    startDate,
    endDate,
    startMonth: startDate.slice(0, 7),
    location,
    price,
    verified: verified === 'yes',
    applicationsOpen: applicationsOpen === 'yes',
    pageUrl,
    durationDays,
    isCancelled,
  });
}

const removed = [];
const cleaned = [];

for (const entry of rawEntries) {
  const reasons = [];
  if (entry.isCancelled) reasons.push('cancelled');
  if (entry.durationDays > 4) reasons.push('duration-over-4-days');
  if (entry.durationDays <= 0) reasons.push('invalid-date-range');

  if (reasons.length > 0) {
    const inferred = tryInferDestination(entry.location);
    removed.push({
      ...entry,
      destinationKey: inferred?.destination.key ?? null,
      destinationLabel: inferred?.destination.label ?? null,
      city: inferred?.city ?? null,
      removalReasons: reasons,
    });
    continue;
  }

  const inferred = inferDestination(entry.location);
  const { destination, city } = inferred;

  cleaned.push({
    ...entry,
    applicationStatus: entry.applicationsOpen ? 'open' : 'closed',
    city,
    destinationKey: destination.key,
    destinationLabel: destination.label,
    destinationFlag: destination.flag,
    visaPolicy: destination.visaPolicy,
  });
}

cleaned.sort((a, b) => {
  if (a.startDate !== b.startDate) return a.startDate.localeCompare(b.startDate);
  if (a.endDate !== b.endDate) return a.endDate.localeCompare(b.endDate);
  return a.title.localeCompare(b.title);
});

removed.sort((a, b) => a.startDate.localeCompare(b.startDate) || a.title.localeCompare(b.title));

const destinations = buildDestinationGroups(cleaned);

const removalSummary = {
  cancelled: removed.filter((entry) => entry.removalReasons.includes('cancelled')).length,
  durationOver4Days: removed.filter((entry) => entry.removalReasons.includes('duration-over-4-days')).length,
  invalidDateRanges: removed.filter((entry) => entry.removalReasons.includes('invalid-date-range')).length,
};

const monthBreakdown = buildMonthBreakdown(cleaned);

const reviewDataset = {
  metadata: {
    title: 'mymun Conference Date Extract (Cleaned)',
    sourceFile: SOURCE_PATH,
    generatedFiles: SHOULD_WRITE_APP_DATA
      ? [REVIEW_MARKDOWN_PATH, REVIEW_JSON_PATH, APP_DATA_PATH]
      : [REVIEW_MARKDOWN_PATH, REVIEW_JSON_PATH],
    sourcePage: rawMetadata['Source page'] ?? null,
    extractionDate: rawMetadata['Extraction date'] ?? null,
    effectiveFilters: rawMetadata['Effective filters kept from the URL'] ?? null,
    exportMethod: rawMetadata['Export method'] ?? null,
    note: rawMetadata.Note ?? null,
    reviewOrdering: 'chronological by start date',
    passportOrigin: PASSPORT_ORIGIN,
    visaVerificationDate: VERIFIED_AT,
    cleaningRules: [
      'Removed entries marked as cancelled/canceled in the title.',
      'Removed conferences with inclusive duration longer than 4 days.',
      'Removed malformed records whose end date is earlier than the start date.',
    ],
    counts: {
      original: rawEntries.length,
      cleaned: cleaned.length,
      removed: removed.length,
      destinations: destinations.length,
    },
    removalSummary,
    monthBreakdown,
  },
  destinations,
  events: cleaned,
  removedEvents: removed,
};

const appDataset = {
  metadata: reviewDataset.metadata,
  destinations,
};

const monthGroups = cleaned.reduce((accumulator, event) => {
  if (!accumulator[event.startMonth]) accumulator[event.startMonth] = [];
  accumulator[event.startMonth].push(event);
  return accumulator;
}, {});

const countryOverviewLines = destinations.map((destination) => {
  const stay = destination.visaPolicy.stayLimit ? ` | stay: ${destination.visaPolicy.stayLimit}` : '';
  return `- ${destination.flag} ${destination.label} | ${destination.eventCount} event${destination.eventCount === 1 ? '' : 's'} | visa: ${destination.visaPolicy.label}${stay}`;
});

const removedLines = removed.map((entry) => {
  const reasons = entry.removalReasons.join(', ');
  return `- ${entry.startDate} to ${entry.endDate} | ${entry.title} | ${entry.location} | removed: ${reasons} | [page](${entry.pageUrl})`;
});

const monthSections = Object.keys(monthGroups)
  .sort()
  .map((month) => {
    const sectionLines = monthGroups[month].map((event) => {
      const stay = event.visaPolicy.stayLimit ? ` | visa: ${event.visaPolicy.label} (${event.visaPolicy.stayLimit})` : ` | visa: ${event.visaPolicy.label}`;
      return `- ${event.startDate} to ${event.endDate} | ${event.title} | ${event.location} | destination: ${event.destinationFlag} ${event.destinationLabel} | duration: ${event.durationDays} days | price: ${event.price} | verified: ${
        event.verified ? 'yes' : 'no'
      } | applications open: ${event.applicationsOpen ? 'yes' : 'no'}${stay} | [page](${event.pageUrl})`;
    });

    return [`### ${month}`, '', ...sectionLines].join('\n');
  })
  .join('\n\n');

const reviewMarkdown = [
  '# mymun Conference Date Extract (Cleaned)',
  '',
  `- Source file: ${SOURCE_PATH}`,
  `- Source page: ${reviewDataset.metadata.sourcePage}`,
  `- Extraction date: ${reviewDataset.metadata.extractionDate}`,
  `- Processed date: ${VERIFIED_AT}`,
  `- Passport origin for visa review: ${PASSPORT_ORIGIN}`,
  `- Effective filters kept from the source: ${reviewDataset.metadata.effectiveFilters}`,
  `- Export method: ${reviewDataset.metadata.exportMethod}`,
  `- Note preserved from source: ${reviewDataset.metadata.note}`,
  '',
  '## Summary',
  '',
  `- Original conferences: ${reviewDataset.metadata.counts.original}`,
  `- Cleaned conferences: ${reviewDataset.metadata.counts.cleaned}`,
  `- Removed conferences: ${reviewDataset.metadata.counts.removed}`,
  `- Removed cancelled entries: ${removalSummary.cancelled}`,
  `- Removed entries over 4 days: ${removalSummary.durationOver4Days}`,
  `- Removed invalid date ranges: ${removalSummary.invalidDateRanges}`,
  `- Countries/territories represented after cleaning: ${reviewDataset.metadata.counts.destinations}`,
  '',
  '## Cleaning Rules',
  '',
  ...reviewDataset.metadata.cleaningRules.map((rule) => `- ${rule}`),
  '',
  '## Visa Overview',
  '',
  ...countryOverviewLines,
  '',
  '## Removed During Cleaning',
  '',
  ...(removedLines.length > 0 ? removedLines : ['- None']),
  '',
  '## Conferences By Start Month',
  '',
  monthSections,
  '',
].join('\n');

const strictRemoved = [];
const strictEvents = [];

for (const event of cleaned) {
  const reasons = [];
  if (event.durationDays > STRICT_DURATION_LIMIT) reasons.push(`duration-over-${STRICT_DURATION_LIMIT}-days`);
  if (event.visaPolicy.category !== STRICT_VISA_CATEGORY) {
    reasons.push(`visa-category-is-${event.visaPolicy.category}`);
  }

  if (reasons.length > 0) {
    strictRemoved.push({
      ...event,
      removalReasons: reasons,
    });
    continue;
  }

  strictEvents.push(event);
}

const strictDestinations = buildDestinationGroups(strictEvents);
const strictMonthBreakdown = buildMonthBreakdown(strictEvents);
const strictRemovalSummary = {
  durationOver3Days: strictRemoved.filter((entry) =>
    entry.removalReasons.includes(`duration-over-${STRICT_DURATION_LIMIT}-days`),
  ).length,
  notVisaFree: strictRemoved.filter((entry) =>
    entry.removalReasons.some((reason) => reason.startsWith('visa-category-is-')),
  ).length,
};

const strictDataset = {
  metadata: {
    title: 'mymun Conference Date Extract (Visa-Free, Max 3 Days)',
    sourceFile: SOURCE_PATH,
    generatedFiles: [STRICT_REVIEW_MARKDOWN_PATH, STRICT_REVIEW_JSON_PATH],
    sourcePage: rawMetadata['Source page'] ?? null,
    extractionDate: rawMetadata['Extraction date'] ?? null,
    processedDate: VERIFIED_AT,
    effectiveFilters: rawMetadata['Effective filters kept from the URL'] ?? null,
    exportMethod: rawMetadata['Export method'] ?? null,
    note: rawMetadata.Note ?? null,
    reviewOrdering: 'chronological by start date',
    passportOrigin: PASSPORT_ORIGIN,
    visaVerificationDate: VERIFIED_AT,
    filterRules: [
      'Kept only entries not marked as cancelled/canceled in the title.',
      `Kept only conferences with inclusive duration of ${STRICT_DURATION_LIMIT} days or less.`,
      `Kept only destinations marked as ${STRICT_VISA_CATEGORY} for a Venezuelan passport.`,
      'Preserved application status from the source; closed statuses are kept because some future events may reopen later.',
    ],
    counts: {
      baseCleaned: cleaned.length,
      filtered: strictEvents.length,
      removedByStrictFilters: strictRemoved.length,
      destinations: strictDestinations.length,
    },
    removalSummary: strictRemovalSummary,
    monthBreakdown: strictMonthBreakdown,
  },
  destinations: strictDestinations,
  events: strictEvents,
  removedEvents: strictRemoved,
};

const strictMonthGroups = strictEvents.reduce((accumulator, event) => {
  if (!accumulator[event.startMonth]) accumulator[event.startMonth] = [];
  accumulator[event.startMonth].push(event);
  return accumulator;
}, {});

const strictCountryOverviewLines = strictDestinations.map((destination) => {
  const stay = destination.visaPolicy.stayLimit ? ` | stay: ${destination.visaPolicy.stayLimit}` : '';
  return `- ${destination.flag} ${destination.label} | ${destination.eventCount} event${destination.eventCount === 1 ? '' : 's'} | visa: ${destination.visaPolicy.label}${stay}`;
});

const strictRemovedLines = strictRemoved.map((entry) => {
  const reasons = entry.removalReasons.join(', ');
  return `- ${entry.startDate} to ${entry.endDate} | ${entry.title} | ${entry.location} | removed: ${reasons} | [page](${entry.pageUrl})`;
});

const strictMonthSections = Object.keys(strictMonthGroups)
  .sort()
  .map((month) => {
    const sectionLines = strictMonthGroups[month].map((event) => {
      const stay = event.visaPolicy.stayLimit ? ` | visa: ${event.visaPolicy.label} (${event.visaPolicy.stayLimit})` : ` | visa: ${event.visaPolicy.label}`;
      return `- ${event.startDate} to ${event.endDate} | ${event.title} | ${event.location} | destination: ${event.destinationFlag} ${event.destinationLabel} | duration: ${event.durationDays} days | price: ${event.price} | verified: ${
        event.verified ? 'yes' : 'no'
      } | applications open: ${event.applicationsOpen ? 'yes' : 'no'}${stay} | [page](${event.pageUrl})`;
    });

    return [`### ${month}`, '', ...sectionLines].join('\n');
  })
  .join('\n\n');

const strictReviewMarkdown = [
  '# mymun Conference Date Extract (Visa-Free, Max 3 Days)',
  '',
  `- Source file: ${SOURCE_PATH}`,
  `- Source page: ${strictDataset.metadata.sourcePage}`,
  `- Extraction date: ${strictDataset.metadata.extractionDate}`,
  `- Processed date: ${VERIFIED_AT}`,
  `- Passport origin for visa review: ${PASSPORT_ORIGIN}`,
  `- Effective filters kept from the source: ${strictDataset.metadata.effectiveFilters}`,
  `- Export method: ${strictDataset.metadata.exportMethod}`,
  `- Note preserved from source: ${strictDataset.metadata.note}`,
  '',
  '## Summary',
  '',
  `- Base cleaned conferences: ${strictDataset.metadata.counts.baseCleaned}`,
  `- Filtered conferences: ${strictDataset.metadata.counts.filtered}`,
  `- Removed by strict filters: ${strictDataset.metadata.counts.removedByStrictFilters}`,
  `- Removed entries over ${STRICT_DURATION_LIMIT} days: ${strictRemovalSummary.durationOver3Days}`,
  `- Removed entries not visa-free for Venezuelan passport: ${strictRemovalSummary.notVisaFree}`,
  `- Countries/territories represented after filtering: ${strictDataset.metadata.counts.destinations}`,
  '',
  '## Filter Rules',
  '',
  ...strictDataset.metadata.filterRules.map((rule) => `- ${rule}`),
  '',
  '## Visa-Free Destinations',
  '',
  ...(strictCountryOverviewLines.length > 0 ? strictCountryOverviewLines : ['- None']),
  '',
  '## Removed By Strict Filters',
  '',
  ...(strictRemovedLines.length > 0 ? strictRemovedLines : ['- None']),
  '',
  '## Conferences By Start Month',
  '',
  strictMonthSections,
  '',
].join('\n');

for (const targetPath of [
  REVIEW_MARKDOWN_PATH,
  REVIEW_JSON_PATH,
  STRICT_REVIEW_MARKDOWN_PATH,
  STRICT_REVIEW_JSON_PATH,
  ...(SHOULD_WRITE_APP_DATA ? [APP_DATA_PATH] : []),
]) {
  mkdirSync(dirname(targetPath), { recursive: true });
}

writeFileSync(REVIEW_MARKDOWN_PATH, reviewMarkdown);
writeFileSync(REVIEW_JSON_PATH, `${JSON.stringify(reviewDataset, null, 2)}\n`);
writeFileSync(STRICT_REVIEW_MARKDOWN_PATH, strictReviewMarkdown);
writeFileSync(STRICT_REVIEW_JSON_PATH, `${JSON.stringify(strictDataset, null, 2)}\n`);
if (SHOULD_WRITE_APP_DATA) {
  writeFileSync(APP_DATA_PATH, `${JSON.stringify(appDataset, null, 2)}\n`);
}

console.log(
  JSON.stringify(
    {
      cleaned: cleaned.length,
      removed: removed.length,
      destinations: destinations.length,
      strictFiltered: strictEvents.length,
      strictDestinations: strictDestinations.length,
      generated: [
        REVIEW_MARKDOWN_PATH,
        REVIEW_JSON_PATH,
        STRICT_REVIEW_MARKDOWN_PATH,
        STRICT_REVIEW_JSON_PATH,
        ...(SHOULD_WRITE_APP_DATA ? [APP_DATA_PATH] : []),
      ],
    },
    null,
    2,
  ),
);
