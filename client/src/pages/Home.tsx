/**
 * Home Page - MUN Calendar Macintosh Retro Style
 * Classic 1984 Macintosh design with pixel art aesthetic
 */

import { useState, useMemo } from "react";
import CalendarGrid from "@/components/CalendarGrid";
import LegendPanel from "@/components/LegendPanel";
import EventModal from "@/components/EventModal";
import { useEvents } from "@/hooks/useEvents";
import { MODEL_IDS } from "@/lib/models";
import { filterEventsByCommittee } from "@/lib/committees";
import { toast } from "sonner";

export default function Home() {
  const { events, isLoading, addEvent, updateEvent, deleteEvent, resetToSeed, exportEvents, importEvents } = useEvents();
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [filteredModels, setFilteredModels] = useState<Set<string>>(
    new Set(MODEL_IDS)
  );
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCommittee, setSelectedCommittee] = useState<string | null>(null);

  // Filter events by committee
  const committeeFilteredEvents = useMemo(
    () => filterEventsByCommittee(events, selectedCommittee),
    [events, selectedCommittee]
  );

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="mac-window p-6 text-center">
          <div className="text-sm font-bold text-black mb-4" style={{ fontFamily: 'Chicago, monospace' }}>
            Loading Calendar...
          </div>
          <div className="w-12 h-12 border-2 border-black border-t-transparent animate-spin mx-auto"></div>
        </div>
      </div>
    );
  }

  const handleModelToggle = (modelId: string) => {
    const newFiltered = new Set(filteredModels);
    if (newFiltered.has(modelId)) {
      newFiltered.delete(modelId);
    } else {
      newFiltered.add(modelId);
    }
    setFilteredModels(newFiltered);
  };

  const handleShowAll = () => {
    setFilteredModels(new Set(MODEL_IDS));
  };

  const handleClearAll = () => {
    setFilteredModels(new Set());
  };

  const handleExport = () => {
    const json = exportEvents();
    const blob = new Blob([json], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `mun-calendar-${new Date().toISOString().split("T")[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);
    toast.success("Events exported");
  };

  const handleImport = () => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "application/json";
    input.onchange = (e: any) => {
      const file = e.target.files[0];
      if (!file) return;

      const reader = new FileReader();
      reader.onload = (event: any) => {
        const success = importEvents(event.target.result);
        if (success) {
          toast.success("Events imported");
        } else {
          toast.error("Import failed");
        }
      };
      reader.readAsText(file);
    };
    input.click();
  };

  const handleReset = () => {
    if (window.confirm("Reset to seed data?")) {
      resetToSeed();
      toast.success("Calendar reset");
    }
  };

  return (
    <div className="min-h-screen bg-white p-4" style={{ fontFamily: 'Chicago, monospace' }}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mac-window p-4 mb-4">
          <div className="flex items-center gap-4 mb-2">
            <img 
              src="/LOGO.png" 
              alt="MUN Logo" 
              className="w-12 h-12 object-contain"
              style={{ padding: '2px', border: '1px solid black', backgroundColor: 'white' }}
            />
            <div>
              <h1 className="text-lg font-bold text-black">
                MUN Calendar 2025–2026
              </h1>
              <p className="text-xs text-black">
                Model United Nations events across Latin America
              </p>
            </div>
          </div>
        </div>

        {/* Toolbar */}
        <div className="mac-window p-3 mb-4">
          <div className="flex flex-wrap gap-2 mb-2">
            <button
              onClick={handleExport}
              className="mac-button text-xs"
            >
              Export
            </button>
            <button
              onClick={handleImport}
              className="mac-button text-xs"
            >
              Import
            </button>
            <button
              onClick={handleReset}
              className="mac-button text-xs"
            >
              Reset
            </button>
            <div className="flex-1" />
            <div className="text-xs text-black font-bold">
              {committeeFilteredEvents.length} events
            </div>
          </div>
        </div>

        {/* Main content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <LegendPanel
              selectedModels={filteredModels}
              onModelToggle={handleModelToggle}
              onShowAll={handleShowAll}
              onClearAll={handleClearAll}
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
              events={events}
              selectedCommittee={selectedCommittee}
              onCommitteeSelect={setSelectedCommittee}
            />
          </div>

          {/* Calendar */}
          <div className="lg:col-span-3">
            <CalendarGrid
              events={committeeFilteredEvents}
              selectedDate={selectedDate}
              onDateSelect={(date) => {
                setSelectedDate(date);
                setIsModalOpen(true);
              }}
              filteredModels={filteredModels}
            />
          </div>
        </div>

        {/* Event Modal */}
        {selectedDate && (
          <EventModal
            isOpen={isModalOpen}
            selectedDate={selectedDate}
            events={committeeFilteredEvents}
            onClose={() => {
              setIsModalOpen(false);
              setSelectedDate(null);
            }}
            onAddEvent={addEvent}
            onUpdateEvent={updateEvent}
            onDeleteEvent={deleteEvent}
          />
        )}
      </div>
    </div>
  );
}
