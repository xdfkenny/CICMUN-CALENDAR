/**
 * CalendarGrid Component - Macintosh Retro Style
 * Classic 1984 Macintosh design with pixel art aesthetic
 */

import { useState } from "react";
import { Button } from "@/components/ui/button";
import DayCell from "./DayCell";
import { CalendarEvent, formatDateISO, parseDate } from "@/lib/types";
import { MODELS } from "@/lib/models";

interface CalendarGridProps {
  events: CalendarEvent[];
  selectedDate?: string | null;
  onDateSelect?: (date: string) => void;
  filteredModels: Set<string>;
}

export default function CalendarGrid({
  events,
  selectedDate,
  onDateSelect,
  filteredModels,
}: CalendarGridProps) {
  const today = new Date();
  const [currentMonth, setCurrentMonth] = useState(
    new Date(today.getFullYear(), today.getMonth(), 1)
  );

  const year = currentMonth.getFullYear();
  const month = currentMonth.getMonth();

  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const daysInPrevMonth = new Date(year, month, 0).getDate();

  const calendarDays: (number | null)[] = [];

  for (let i = firstDay - 1; i >= 0; i--) {
    calendarDays.push(-(daysInPrevMonth - i));
  }

  for (let i = 1; i <= daysInMonth; i++) {
    calendarDays.push(i);
  }

  const remainingDays = 42 - calendarDays.length;
  for (let i = 1; i <= remainingDays; i++) {
    calendarDays.push(-(i + 1000));
  }

  const previousMonth = () => {
    setCurrentMonth(new Date(year, month - 1, 1));
  };

  const nextMonth = () => {
    setCurrentMonth(new Date(year, month + 1, 1));
  };

  const goToToday = () => {
    setCurrentMonth(new Date(today.getFullYear(), today.getMonth(), 1));
  };

  const monthName = currentMonth.toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });

  const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return (
    <div className="mac-window p-4">
      {/* Title bar */}
      <div className="border-b-2 border-black pb-2 mb-4">
        <h2 className="text-sm font-bold text-black" style={{ fontFamily: 'Chicago, monospace' }}>
          {monthName}
        </h2>
      </div>

      {/* Navigation buttons */}
      <div className="flex gap-1 mb-4">
        <button
          onClick={previousMonth}
          className="mac-button"
          aria-label="Previous month"
        >
          &lt;
        </button>
        <button
          onClick={goToToday}
          className="mac-button"
          aria-label="Go to today"
        >
          Today
        </button>
        <button
          onClick={nextMonth}
          className="mac-button"
          aria-label="Next month"
        >
          &gt;
        </button>
      </div>

      {/* Weekday headers */}
      <div className="grid grid-cols-7 gap-0 border-2 border-black mb-0">
        {weekDays.map((day) => (
          <div
            key={day}
            className="text-center text-xs font-bold text-black bg-white border-r border-b border-black py-1"
            style={{ fontFamily: 'Chicago, monospace' }}
          >
            {day}
          </div>
        ))}
      </div>

      {/* Calendar grid */}
      <div className="border-2 border-t-0 border-black">
        <div className="grid grid-cols-7 gap-0">
          {calendarDays.map((dayNum, idx) => {
            if (dayNum === null) return null;

            let dateStr = "";
            let isCurrentMonth = true;
            let isToday = false;

            if (dayNum > 0) {
              dateStr = formatDateISO(new Date(year, month, dayNum));
              isToday =
                dateStr === formatDateISO(today) && month === today.getMonth();
            } else if (dayNum < -1000) {
              const nextMonthDay = -dayNum - 1000;
              dateStr = formatDateISO(new Date(year, month + 1, nextMonthDay));
              isCurrentMonth = false;
            } else {
              const prevMonthDay = -dayNum;
              dateStr = formatDateISO(new Date(year, month - 1, prevMonthDay));
              isCurrentMonth = false;
            }

            const dayEvents = events.filter((event) => {
              const start = parseDate(event.startDate);
              const end = parseDate(event.endDate);
              const date = parseDate(dateStr);
              return date >= start && date <= end && filteredModels.has(event.model);
            });

            return (
              <DayCell
                key={idx}
                dateStr={dateStr}
                dayNum={Math.abs(dayNum) > 1000 ? Math.abs(dayNum) - 1000 : Math.abs(dayNum)}
                isCurrentMonth={isCurrentMonth}
                isToday={isToday}
                isSelected={selectedDate === dateStr}
                events={dayEvents}
                onSelect={() => onDateSelect?.(dateStr)}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
