/**
 * LegendPanel Component - Macintosh Retro Style
 * Model legend, filtering controls, and language-grouped committee selector
 */

import { useState, useMemo } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { MODELS, MODEL_IDS } from "@/lib/models";
import { CalendarEvent } from "@/lib/types";
import { getCommitteesByLanguage } from "@/lib/committees";

interface LegendPanelProps {
  selectedModels: Set<string>;
  onModelToggle: (modelId: string) => void;
  onShowAll: () => void;
  onClearAll: () => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  events: CalendarEvent[];
  selectedCommittee: string | null;
  onCommitteeSelect: (committee: string | null) => void;
}

export default function LegendPanel({
  selectedModels,
  onModelToggle,
  onShowAll,
  onClearAll,
  searchQuery,
  onSearchChange,
  events,
  selectedCommittee,
  onCommitteeSelect,
}: LegendPanelProps) {
  const [isOpen, setIsOpen] = useState(true);
  const [isCommitteeOpen, setIsCommitteeOpen] = useState(false);

  const committeeGroups = useMemo(() => getCommitteesByLanguage(events), [events]);

  // Filter committees by search query
  const filteredGroups = useMemo(() => {
    if (!searchQuery) return committeeGroups;

    return committeeGroups
      .map((group) => ({
        ...group,
        committees: group.committees.filter((committee) =>
          committee.name.toLowerCase().includes(searchQuery.toLowerCase())
        ),
      }))
      .filter((group) => group.committees.length > 0);
  }, [committeeGroups, searchQuery]);

  const filteredModels = MODEL_IDS.filter((modelId) => {
    const model = MODELS[modelId];
    return (
      model.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      modelId.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  return (
    <div className="mac-window p-3">
      {/* Title bar */}
      <div className="border-b-2 border-black pb-2 mb-3">
        <h3 className="text-sm font-bold text-black" style={{ fontFamily: 'Chicago, monospace' }}>
          Models
        </h3>
      </div>

      {isOpen && (
        <>
          {/* Committee Dropdown */}
          <div className="mb-3">
            <div className="text-xs font-bold text-black mb-1" style={{ fontFamily: 'Chicago, monospace' }}>
              Committee
            </div>
            <div className="relative">
              <button
                onClick={() => setIsCommitteeOpen(!isCommitteeOpen)}
                className="mac-button w-full text-xs text-left flex justify-between items-center"
                style={{ fontFamily: 'Monaco, monospace' }}
              >
                <span className="truncate">
                  {selectedCommittee || "All Committees"}
                </span>
                <span className="ml-1">{isCommitteeOpen ? "▲" : "▼"}</span>
              </button>

              {isCommitteeOpen && (
                <div className="absolute top-full left-0 right-0 mt-0 border-2 border-black bg-white z-50 max-h-64 overflow-y-auto">
                  {/* All Committees option */}
                  <button
                    onClick={() => {
                      onCommitteeSelect(null);
                      setIsCommitteeOpen(false);
                    }}
                    className={`w-full text-left px-2 py-1 text-xs border-b border-black hover:bg-black hover:text-white font-bold ${
                      selectedCommittee === null ? "bg-black text-white" : ""
                    }`}
                    style={{ fontFamily: 'Monaco, monospace' }}
                  >
                    All Committees
                  </button>

                  {/* Language-grouped committees */}
                  {filteredGroups.map((group) => (
                    <div key={group.language}>
                      {/* Language header */}
                      <div
                        className="px-2 py-1 text-xs font-bold text-white bg-black border-b border-black"
                        style={{ fontFamily: 'Chicago, monospace' }}
                      >
                        {group.language} Events
                      </div>

                      {/* Committees in this language */}
                      {group.committees.map((committee) => (
                        <button
                          key={committee.id}
                          onClick={() => {
                            onCommitteeSelect(committee.name);
                            setIsCommitteeOpen(false);
                          }}
                          className={`w-full text-left px-4 py-1 text-xs border-b border-gray-200 hover:bg-gray-100 ${
                            selectedCommittee === committee.name
                              ? "bg-gray-200 font-bold"
                              : ""
                          }`}
                          style={{ fontFamily: 'Monaco, monospace' }}
                        >
                          {committee.name} ({committee.count})
                        </button>
                      ))}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Search */}
          <div className="mb-3">
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="mac-input w-full text-xs"
              style={{ fontFamily: 'Monaco, monospace' }}
            />
          </div>

          {/* Model list */}
          <div className="space-y-1 mb-3 max-h-48 overflow-y-auto">
            {filteredModels.map((modelId) => {
              const model = MODELS[modelId];
              const isSelected = selectedModels.has(modelId);

              return (
                <label
                  key={modelId}
                  className="flex items-center gap-2 p-1 cursor-pointer hover:bg-gray-100"
                  style={{ fontFamily: 'Chicago, monospace' }}
                >
                  <input
                    type="checkbox"
                    checked={isSelected}
                    onChange={() => onModelToggle(modelId)}
                    className="mac-checkbox"
                    aria-label={`Filter ${model.name}`}
                  />
                  <div
                    className="w-3 h-3 border border-black flex-shrink-0"
                    style={{ backgroundColor: model.color }}
                    aria-hidden="true"
                  />
                  <span className="text-xs font-bold text-black flex-1">
                    {model.name}
                  </span>
                </label>
              );
            })}
          </div>

          {/* Action buttons */}
          <div className="flex gap-1">
            <button
              onClick={onShowAll}
              className="mac-button text-xs flex-1"
              aria-label="Show all models"
            >
              All
            </button>
            <button
              onClick={onClearAll}
              className="mac-button text-xs flex-1"
              aria-label="Clear all filters"
            >
              None
            </button>
          </div>
        </>
      )}
    </div>
  );
}
