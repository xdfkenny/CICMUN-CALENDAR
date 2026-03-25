import { mkdirSync, writeFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';

const SOURCE_PATH = resolve('output/mymun_calendar_eu_as_dates.md');
const SOURCE_PAGE = 'https://mymun.com/conferences/calendar?a=eu,as&s=fe&r=desc';
const API_URL =
  'https://mymun.com/api/conferences?filter_time=future&sb=fe&order=desc&filter_cont=eu&filter_cont=as&online_conf=false&page=1&per_page=500';
const EFFECTIVE_FILTERS =
  'Europe + Asia (`a=eu,as`), in-person only, future conferences, sort by price descending (`s=fe&r=desc`).';
const SOURCE_NOTE =
  'The calendar view loads month-by-month and its calendar data request drops the sort params. This export uses the matching list endpoint so all filtered conference date ranges are captured in one file. A source-side MUN relevance filter then keeps only entries whose slug, title, or name indicates a MUN or United Nations simulation.';

const formatLocalIsoDate = (date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};

const stripDiacritics = (value = '') =>
  value.normalize('NFKD').replace(/[\u0300-\u036f]/g, '');

const munPhrasePatterns = [
  /model united nation(?:s)?/i,
  /united nations?/i,
  /nations unies/i,
  /naciones unidas/i,
  /nacoes unidas/i,
  /nazioni unite/i,
];

const containsMunToken = (value = '') => {
  const normalized = stripDiacritics(value).toLowerCase();
  const tokens = normalized.match(/[a-z0-9]+/g) ?? [];

  if (tokens.some((token) => token === 'mun' || token.startsWith('mun') || token.endsWith('mun'))) {
    return true;
  }

  return /\bm[\W_]*u[\W_]*n\b/i.test(value);
};

const isMunLikeConference = (conference) => {
  const directFields = [conference.slug, conference.title, conference.name].filter(Boolean);
  if (directFields.some(containsMunToken)) return true;

  const phraseSearchText = stripDiacritics([conference.title, conference.name].filter(Boolean).join(' ')).toLowerCase();
  return munPhrasePatterns.some((pattern) => pattern.test(phraseSearchText));
};

const formatLocation = (conference) =>
  [conference.address_city, conference.address_country].filter(Boolean).join(', ') || 'Location unavailable';

const formatPrice = (conference) => {
  if (!conference.price_delegate) return 'n/a';
  return `${conference.currency_symbol ?? ''}${conference.price_delegate}`;
};

const buildMonthBreakdown = (events) =>
  events.reduce((accumulator, event) => {
    accumulator[event.startDate.slice(0, 7)] = (accumulator[event.startDate.slice(0, 7)] ?? 0) + 1;
    return accumulator;
  }, {});

const response = await fetch(API_URL, {
  headers: {
    accept: 'application/json',
  },
});

if (!response.ok) {
  throw new Error(`MyMUN API request failed with status ${response.status}`);
}

const payload = await response.json();

if (!Array.isArray(payload)) {
  throw new Error('Expected the MyMUN API to return an array of conferences.');
}

const extractionDate = formatLocalIsoDate(new Date());

const keptConferences = payload
  .filter(isMunLikeConference)
  .map((conference) => ({
    title: conference.title,
    startDate: conference.conference_start_date,
    endDate: conference.conference_end_date,
    location: formatLocation(conference),
    price: formatPrice(conference),
    verified: conference.is_verified ? 'yes' : 'no',
    applicationsOpen: conference.applications_open ? 'yes' : 'no',
    pageUrl: `https://mymun.com/conferences/${conference.slug}`,
  }))
  .sort((a, b) => {
    if (a.startDate !== b.startDate) return a.startDate.localeCompare(b.startDate);
    if (a.endDate !== b.endDate) return a.endDate.localeCompare(b.endDate);
    return a.title.localeCompare(b.title);
  });

const monthBreakdown = buildMonthBreakdown(keptConferences);
const earliestStartDate = keptConferences[0]?.startDate ?? 'n/a';
const latestEndDate = keptConferences.reduce(
  (latest, conference) => (conference.endDate > latest ? conference.endDate : latest),
  keptConferences[0]?.endDate ?? 'n/a',
);

const monthSections = Object.keys(monthBreakdown)
  .sort()
  .map((month) => {
    const sectionLines = keptConferences
      .filter((conference) => conference.startDate.startsWith(month))
      .map(
        (conference) =>
          `- ${conference.startDate} to ${conference.endDate} | ${conference.title} | ${conference.location} | price: ${conference.price} | verified: ${conference.verified} | applications open: ${conference.applicationsOpen} | [page](${conference.pageUrl})`,
      );

    return [`### ${month}`, '', ...sectionLines].join('\n');
  })
  .join('\n\n');

const markdown = [
  '# mymun Conference Date Extract',
  '',
  `- Source page: ${SOURCE_PAGE}`,
  `- Extraction date: ${extractionDate}`,
  `- Effective filters kept from the URL: ${EFFECTIVE_FILTERS}`,
  `- Export method: full filtered conference list API pull for review: \`${API_URL}\``,
  `- Note: ${SOURCE_NOTE}`,
  '',
  '## Summary',
  '',
  `- API conferences received: ${payload.length}`,
  `- MUN-like conferences kept: ${keptConferences.length}`,
  `- Excluded non-MUN directory entries: ${payload.length - keptConferences.length}`,
  `- Earliest start date: ${earliestStartDate}`,
  `- Latest end date: ${latestEndDate}`,
  '- Review ordering in this file: chronological by start date.',
  '- Start-month breakdown:',
  ...Object.entries(monthBreakdown).map(([month, count]) => `  - ${month}: ${count}`),
  '',
  '## Conferences By Start Month',
  '',
  monthSections,
  '',
].join('\n');

mkdirSync(dirname(SOURCE_PATH), { recursive: true });
writeFileSync(SOURCE_PATH, markdown);

console.log(
  JSON.stringify(
    {
      source: SOURCE_PATH,
      apiConferences: payload.length,
      keptMunLike: keptConferences.length,
      excludedNonMun: payload.length - keptConferences.length,
    },
    null,
    2,
  ),
);
