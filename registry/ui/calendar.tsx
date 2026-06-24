"use client"

import * as React from "react"
import { HugeiconsIcon } from "@hugeicons/react"
import { SparklesIcon } from "@hugeicons/core-free-icons"

import { Calendar } from "@/components/ui/calendar"

export default function CalendarExample() {
  const [date, setDate] = React.useState<Date | undefined>(
    new Date(2026, 5, 18)
  )

  return (
    <div className="space-y-3">
      <div className="flex max-w-xs items-start gap-2 rounded-lg bg-primary/5 p-3 text-sm">
        <HugeiconsIcon
          icon={SparklesIcon}
          strokeWidth={2}
          className="mt-0.5 size-4 shrink-0 text-primary"
        />
        <p>
          You&apos;re free Thursday afternoon — want me to book the design review
          for <span className="font-medium">Thu, Jun 18</span>?
        </p>
      </div>
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        defaultMonth={date}
        className="rounded-xl border shadow-sm"
      />
    </div>
  )
}
