"use client";

import * as React from "react";

import { Calendar } from "@/components/ui/calendar";

export function CalenderDialog({ activePill }: { activePill: any }) {
  const [date, setDate] = React.useState<Date | undefined>(
    new Date(2025, 5, 12)
  );

  return (
    <div className="w-fi px-6">
      <Calendar
        mode="range"
        defaultMonth={date}
        numberOfMonths={2}
        selected={date}
        onSelect={setDate}
        // showOutsideDays={false}
      
        className=" shadow-none mx-auto "
      
      />
    </div>
  );
}
