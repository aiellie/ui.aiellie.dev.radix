"use client"

import * as React from "react"
import { format } from "date-fns"
import { HugeiconsIcon } from "@hugeicons/react"
import { Calendar03Icon } from "@hugeicons/core-free-icons"

import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Label } from "@/components/ui/label"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

export default function DatePickerExample() {
  const [date, setDate] = React.useState<Date | undefined>()

  return (
    <div className="w-full max-w-xs space-y-2">
      <Label>Filter conversations by day</Label>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            className="w-full justify-start font-normal data-[empty=true]:text-muted-foreground"
            data-empty={!date}
          >
            <HugeiconsIcon icon={Calendar03Icon} strokeWidth={2} />
            {date ? format(date, "PPP") : "Pick a date"}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            defaultMonth={date}
          />
        </PopoverContent>
      </Popover>
      <p className="text-xs text-muted-foreground">
        Showing analytics for {date ? format(date, "MMMM d") : "all time"}.
      </p>
    </div>
  )
}
