/**
 * DayCell Component - Macintosh Retro Style
 * Individual calendar day cell with color-coded event badges
 */

import { CalendarEvent } from "@/lib/types";
import { MODELS } from "@/lib/models";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

interface DayCellProps {
  dateStr: string;
  dayNum: number;
  isCurrentMonth: boolean;
  isToday: boolean;
  isSelected: boolean;
  events: CalendarEvent[];
  onSelect: () => void;
}

export default function DayCell({
  dateStr,
  dayNum,
  isCurrentMonth,
  isToday,
  isSelected,
  events,
  onSelect,
}: DayCellProps) {
  const baseClasses =
    "aspect-square p-1 border-r border-b border-black cursor-pointer transition-all relative flex flex-col";
  const currentMonthClasses = isCurrentMonth ? "bg-white" : "bg-gray-100";
  const todayClasses = isToday ? "border-2 border-black" : "";
  const selectedClasses = isSelected ? "ring-2 ring-inset ring-black" : "";

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <button
          onClick={onSelect}
          className={`${baseClasses} ${currentMonthClasses} ${todayClasses} ${selectedClasses}`}
          aria-label={`${dateStr}: ${events.length} events`}
          style={{ fontFamily: 'Chicago, monospace' }}
        >
          {/* Day number */}
          <div className="text-xs font-bold text-black mb-0.5 leading-none">
            {dayNum}
          </div>

          {/* Event badges - colored squares only */}
          <div className="flex flex-wrap gap-0.5 flex-1 content-start">
            {events.slice(0, 6).map((event, idx) => {
              const model = MODELS[event.model as keyof typeof MODELS];
              return (
                <div
                  key={`${event.id}-${idx}`}
                  className="w-2 h-2"
                  style={{ backgroundColor: model?.color || "#999" }}
                  title={event.title}
                />
              );
            })}
            {events.length > 6 && (
              <div className="text-xs text-black font-bold leading-none">
                +
              </div>
            )}
          </div>
        </button>
      </TooltipTrigger>
      {events.length > 0 && (
        <TooltipContent side="top" className="mac-window p-2">
          <div className="text-xs" style={{ fontFamily: 'Monaco, monospace' }}>
            {events.slice(0, 3).map((event) => (
              <div key={event.id} className="font-bold text-black">
                {event.title}
              </div>
            ))}
            {events.length > 3 && (
              <div className="text-black">
                +{events.length - 3} more
              </div>
            )}
          </div>
        </TooltipContent>
      )}
    </Tooltip>
  );
}
