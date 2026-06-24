"use client"

import * as React from "react"
import { HugeiconsIcon } from "@hugeicons/react"
import { SentIcon } from "@hugeicons/core-free-icons"

import { DirectionProvider } from "@/components/ui/direction"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"

export default function DirectionExample() {
  const [dir, setDir] = React.useState<"ltr" | "rtl">("ltr")

  return (
    <DirectionProvider dir={dir}>
      <div className="w-full max-w-md space-y-4">
        <ToggleGroup
          type="single"
          variant="outline"
          value={dir}
          onValueChange={(v) => v && setDir(v as "ltr" | "rtl")}
          className="justify-center"
        >
          <ToggleGroupItem value="ltr" className="px-4">
            LTR · English
          </ToggleGroupItem>
          <ToggleGroupItem value="rtl" className="px-4">
            RTL · עברית
          </ToggleGroupItem>
        </ToggleGroup>

        <div dir={dir} className="space-y-3 rounded-xl border p-3">
          <div className="me-auto max-w-[85%] rounded-2xl rounded-bl-sm bg-muted px-3.5 py-2 text-sm">
            {dir === "ltr"
              ? "Hello! How can I help you today?"
              : "שלום! איך אפשר לעזור לך היום?"}
          </div>
          <div className="ms-auto max-w-[85%] rounded-2xl rounded-br-sm bg-primary px-3.5 py-2 text-sm text-primary-foreground">
            {dir === "ltr"
              ? "Summarize this article for me."
              : "סכם לי את המאמר הזה."}
          </div>
          <div className="flex items-center gap-2 rounded-full border bg-card p-1 ps-3">
            <input
              dir={dir}
              placeholder={dir === "ltr" ? "Message…" : "כתוב הודעה…"}
              className="min-w-0 flex-1 bg-transparent text-sm outline-none"
            />
            <button
              className="flex size-8 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground"
              aria-label="Send"
            >
              <HugeiconsIcon
                icon={SentIcon}
                strokeWidth={2}
                className="size-4 rtl:-scale-x-100"
              />
            </button>
          </div>
        </div>
        <p className="text-center text-xs text-muted-foreground">
          Alignment, spacing, and the send icon all mirror automatically.
        </p>
      </div>
    </DirectionProvider>
  )
}
