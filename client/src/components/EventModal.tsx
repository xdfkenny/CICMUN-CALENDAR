/**
 * EventModal Component - Macintosh Retro Style
 * View, edit, and manage events for a selected date
 */

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { CalendarEvent, formatDateDisplay } from "@/lib/types";
import { MODELS, MODEL_IDS } from "@/lib/models";
import { nanoid } from "nanoid";

interface EventModalProps {
  isOpen: boolean;
  selectedDate: string;
  events: CalendarEvent[];
  onClose: () => void;
  onAddEvent: (event: CalendarEvent) => void;
  onUpdateEvent: (id: string, updates: Partial<CalendarEvent>) => void;
  onDeleteEvent: (id: string) => void;
}

export default function EventModal({
  isOpen,
  selectedDate,
  events,
  onClose,
  onAddEvent,
  onUpdateEvent,
  onDeleteEvent,
}: EventModalProps) {
  const [isAddingNew, setIsAddingNew] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formData, setFormData] = useState<Partial<CalendarEvent>>({
    title: "",
    model: "A",
    startDate: selectedDate || "",
    endDate: selectedDate || "",
    notes: "",
  });

  const dateEvents = selectedDate
    ? events.filter((event) => {
        const start = new Date(event.startDate);
        const end = new Date(event.endDate);
        const selected = new Date(selectedDate);
        return selected >= start && selected <= end;
      })
    : [];

  const handleAddEvent = () => {
    if (!formData.title || !formData.model || !formData.startDate) {
      alert("Please fill in required fields");
      return;
    }

    const newEvent: CalendarEvent = {
      id: nanoid(),
      title: formData.title,
      model: formData.model,
      startDate: formData.startDate,
      endDate: formData.endDate || formData.startDate,
      notes: formData.notes || "",
    };

    onAddEvent(newEvent);
    resetForm();
    setIsAddingNew(false);
  };

  const handleUpdateEvent = () => {
    if (!editingId) return;
    if (!formData.title || !formData.model || !formData.startDate) {
      alert("Please fill in required fields");
      return;
    }

    onUpdateEvent(editingId, {
      title: formData.title,
      model: formData.model,
      startDate: formData.startDate,
      endDate: formData.endDate || formData.startDate,
      notes: formData.notes || "",
    });

    resetForm();
    setEditingId(null);
  };

  const handleEditEvent = (event: CalendarEvent) => {
    setFormData(event);
    setEditingId(event.id);
    setIsAddingNew(false);
  };

  const resetForm = () => {
    setFormData({
      title: "",
      model: "A",
      startDate: selectedDate || "",
      endDate: selectedDate || "",
      notes: "",
    });
  };

  const handleClose = () => {
    resetForm();
    setIsAddingNew(false);
    setEditingId(null);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="mac-window max-w-md max-h-[90vh] overflow-y-auto p-3 border-2 border-black">
        <DialogHeader className="border-b-2 border-black pb-2 mb-3">
          <DialogTitle style={{ fontFamily: 'Chicago, monospace' }} className="text-sm font-bold">
            {selectedDate ? `Events: ${formatDateDisplay(selectedDate)}` : "Events"}
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-3">
          {/* Existing events */}
          {dateEvents.length > 0 && (
            <div className="space-y-2">
              <h4 className="font-bold text-xs text-black" style={{ fontFamily: 'Chicago, monospace' }}>
                {dateEvents.length} Event{dateEvents.length !== 1 ? "s" : ""}
              </h4>
              {dateEvents.map((event) => {
                const model = MODELS[event.model as keyof typeof MODELS];
                return (
                  <div
                    key={event.id}
                    className="p-2 border-2 border-black bg-white"
                    style={{ fontFamily: 'Monaco, monospace' }}
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-1 mb-1">
                          <div
                            className="w-3 h-3 border border-black flex-shrink-0"
                            style={{ backgroundColor: model?.color }}
                          />
                          <h5 className="font-bold text-xs text-black truncate">
                            {event.title}
                          </h5>
                        </div>
                        <p className="text-xs text-black mb-1">
                          {event.startDate === event.endDate
                            ? formatDateDisplay(event.startDate)
                            : `${formatDateDisplay(event.startDate)} - ${formatDateDisplay(event.endDate)}`}
                        </p>
                        {event.notes && (
                          <p className="text-xs text-black">{event.notes}</p>
                        )}
                      </div>
                      <div className="flex gap-1 ml-2 flex-shrink-0">
                        <button
                          onClick={() => handleEditEvent(event)}
                          className="mac-button text-xs px-2 py-0"
                          aria-label="Edit event"
                        >
                          E
                        </button>
                        <button
                          onClick={() => onDeleteEvent(event.id)}
                          className="mac-button text-xs px-2 py-0"
                          aria-label="Delete event"
                        >
                          X
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {/* Add/Edit form */}
          {(isAddingNew || editingId) && (
            <div className="space-y-2 p-2 border-2 border-black bg-white">
              <h4 className="font-bold text-xs text-black" style={{ fontFamily: 'Chicago, monospace' }}>
                {editingId ? "Edit Event" : "Add Event"}
              </h4>

              <div>
                <label className="text-xs font-bold text-black block mb-1" style={{ fontFamily: 'Chicago, monospace' }}>
                  Title
                </label>
                <input
                  value={formData.title || ""}
                  onChange={(e) =>
                    setFormData({ ...formData, title: e.target.value })
                  }
                  placeholder="Event title"
                  className="mac-input w-full text-xs"
                  style={{ fontFamily: 'Monaco, monospace' }}
                />
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="text-xs font-bold text-black block mb-1" style={{ fontFamily: 'Chicago, monospace' }}>
                    Model
                  </label>
                  <select
                    value={formData.model || "A"}
                    onChange={(e) =>
                      setFormData({ ...formData, model: e.target.value })
                    }
                    className="mac-input w-full text-xs"
                    style={{ fontFamily: 'Monaco, monospace' }}
                  >
                    {MODEL_IDS.map((modelId) => (
                      <option key={modelId} value={modelId}>
                        {MODELS[modelId].name}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="text-xs font-bold text-black block mb-1" style={{ fontFamily: 'Chicago, monospace' }}>
                    Language
                  </label>
                  <select
                    value={formData.language || "Español"}
                    onChange={(e) =>
                      setFormData({ ...formData, language: e.target.value })
                    }
                    className="mac-input w-full text-xs"
                    style={{ fontFamily: 'Monaco, monospace' }}
                  >
                    <option value="Español">Español</option>
                    <option value="Inglés">Inglés</option>
                    <option value="Bilingüe">Bilingüe</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="text-xs font-bold text-black block mb-1" style={{ fontFamily: 'Chicago, monospace' }}>
                    Start
                  </label>
                  <input
                    type="date"
                    value={formData.startDate || ""}
                    onChange={(e) =>
                      setFormData({ ...formData, startDate: e.target.value })
                    }
                    className="mac-input w-full text-xs"
                    style={{ fontFamily: 'Monaco, monospace' }}
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-black block mb-1" style={{ fontFamily: 'Chicago, monospace' }}>
                    End
                  </label>
                  <input
                    type="date"
                    value={formData.endDate || ""}
                    onChange={(e) =>
                      setFormData({ ...formData, endDate: e.target.value })
                    }
                    className="mac-input w-full text-xs"
                    style={{ fontFamily: 'Monaco, monospace' }}
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-black block mb-1" style={{ fontFamily: 'Chicago, monospace' }}>
                  Notes
                </label>
                <textarea
                  value={formData.notes || ""}
                  onChange={(e) =>
                    setFormData({ ...formData, notes: e.target.value })
                  }
                  placeholder="Notes..."
                  rows={2}
                  className="mac-input w-full text-xs"
                  style={{ fontFamily: 'Monaco, monospace' }}
                />
              </div>
            </div>
          )}

          {/* Action buttons */}
          {!isAddingNew && !editingId && (
            <button
              onClick={() => setIsAddingNew(true)}
              className="mac-button w-full text-xs font-bold"
            >
              + Add Event
            </button>
          )}
        </div>

        <DialogFooter className="border-t-2 border-black pt-2 mt-3 flex gap-1">
          {(isAddingNew || editingId) && (
            <>
              <button
                onClick={() => {
                  resetForm();
                  setIsAddingNew(false);
                  setEditingId(null);
                }}
                className="mac-button text-xs flex-1"
              >
                Cancel
              </button>
              <button
                onClick={editingId ? handleUpdateEvent : handleAddEvent}
                className="mac-button text-xs flex-1"
              >
                {editingId ? "Update" : "Add"}
              </button>
            </>
          )}
          {!isAddingNew && !editingId && (
            <button
              onClick={handleClose}
              className="mac-button text-xs w-full"
            >
              Close
            </button>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
