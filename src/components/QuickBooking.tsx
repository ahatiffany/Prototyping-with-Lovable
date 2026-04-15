import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, MapPin, ChevronDown } from "lucide-react";

const timeSlots = ["9:00 AM", "10:00 AM", "11:00 AM", "1:00 PM", "2:00 PM", "3:00 PM"];

const QuickBooking = () => {
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [selectedDuration, setSelectedDuration] = useState("2 hours");

  return (
    <section className="px-5 py-6">
      <h2 className="font-display text-xl font-semibold text-foreground">Quick Book</h2>
      <p className="mt-1 text-sm text-muted-foreground">Choose a time, we'll handle the rest.</p>

      <div className="mt-4 space-y-4">
        {/* Date */}
        <div className="flex items-center gap-3 rounded-xl border border-border bg-card px-4 py-3">
          <Calendar className="h-5 w-5 text-primary" />
          <div className="flex-1">
            <p className="text-xs text-muted-foreground">Date</p>
            <p className="text-sm font-medium text-foreground">Today, Apr 15</p>
          </div>
          <ChevronDown className="h-4 w-4 text-muted-foreground" />
        </div>

        {/* Location */}
        <div className="flex items-center gap-3 rounded-xl border border-border bg-card px-4 py-3">
          <MapPin className="h-5 w-5 text-primary" />
          <div className="flex-1">
            <p className="text-xs text-muted-foreground">Location</p>
            <p className="text-sm font-medium text-foreground">Holiday Inn Midtown</p>
          </div>
          <ChevronDown className="h-4 w-4 text-muted-foreground" />
        </div>

        {/* Duration */}
        <div>
          <div className="mb-2 flex items-center gap-2">
            <Clock className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-foreground">Duration</span>
          </div>
          <div className="flex gap-2">
            {["2 hours", "3 hours"].map((d) => (
              <button
                key={d}
                onClick={() => setSelectedDuration(d)}
                className={`flex-1 rounded-xl border-2 px-4 py-2.5 text-sm font-medium transition-all ${
                  selectedDuration === d
                    ? "border-primary bg-primary/5 text-primary"
                    : "border-border text-muted-foreground hover:border-primary/30"
                }`}
              >
                {d}
              </button>
            ))}
          </div>
        </div>

        {/* Time Slots */}
        <div>
          <p className="mb-2 text-sm font-medium text-foreground">Available Times</p>
          <div className="grid grid-cols-3 gap-2">
            {timeSlots.map((time) => (
              <button
                key={time}
                onClick={() => setSelectedTime(time)}
                className={`rounded-xl border-2 px-3 py-2.5 text-sm font-medium transition-all ${
                  selectedTime === time
                    ? "border-primary bg-primary/5 text-primary"
                    : "border-border text-muted-foreground hover:border-primary/30"
                }`}
              >
                {time}
              </button>
            ))}
          </div>
        </div>

        {/* Price summary */}
        <div className="rounded-xl bg-secondary p-4">
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Co-working ({selectedDuration})</span>
            <span className="font-medium text-foreground">{selectedDuration === "2 hours" ? "$35" : "$45"}</span>
          </div>
          <div className="mt-1 flex items-center justify-between text-sm">
            <span className="text-trust">Childcare</span>
            <span className="font-medium text-trust">Free</span>
          </div>
          <div className="mt-2 border-t border-border pt-2">
            <div className="flex items-center justify-between">
              <span className="font-semibold text-foreground">Total</span>
              <span className="text-lg font-bold text-primary">{selectedDuration === "2 hours" ? "$35" : "$45"}</span>
            </div>
          </div>
        </div>

        <Button variant="hero" size="xl" className="w-full">
          Confirm Booking
        </Button>
      </div>
    </section>
  );
};

export default QuickBooking;
