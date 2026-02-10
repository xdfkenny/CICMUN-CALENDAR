/**
 * Committees/Institutions Utility
 * Extract and manage all MUN committees from events, grouped by language
 */

import { CalendarEvent } from "@/lib/types";

export interface Committee {
  id: string;
  name: string;
  count: number;
  language: string;
}

export interface CommitteeGroup {
  language: string;
  committees: Committee[];
}

/**
 * Extract unique committees from events, grouped by language
 */
export function getCommitteesByLanguage(events: CalendarEvent[]): CommitteeGroup[] {
  const committeeMap = new Map<string, Map<string, number>>();

  // Group by language first
  events.forEach((event) => {
    const language = event.language || "Español";
    const name = event.title;

    if (!committeeMap.has(language)) {
      committeeMap.set(language, new Map());
    }

    const languageMap = committeeMap.get(language)!;
    if (languageMap.has(name)) {
      languageMap.set(name, (languageMap.get(name) || 0) + 1);
    } else {
      languageMap.set(name, 1);
    }
  });

  // Convert to array format with proper sorting
  const groups: CommitteeGroup[] = [];
  const languageOrder = ["Español", "Inglés", "Bilingüe"];

  languageOrder.forEach((lang) => {
    if (committeeMap.has(lang)) {
      const languageMap = committeeMap.get(lang)!;
      const committees = Array.from(languageMap.entries())
        .map(([name, count]) => ({
          id: name.toLowerCase().replace(/\s+/g, "-"),
          name,
          count,
          language: lang,
        }))
        .sort((a, b) => a.name.localeCompare(b.name));

      groups.push({
        language: lang,
        committees,
      });
    }
  });

  return groups;
}

/**
 * Filter events by committee name
 */
export function filterEventsByCommittee(
  events: CalendarEvent[],
  committeeName: string | null
): CalendarEvent[] {
  if (!committeeName) return events;
  return events.filter((event) => event.title === committeeName);
}
