"use client"

import { HugeiconsIcon } from "@hugeicons/react"
import { Globe02Icon, CheckmarkCircle02Icon } from "@hugeicons/core-free-icons"

import { Spinner } from "@/components/ui/spinner"
import { Button } from "@/components/ui/button"

export default function SpinnerExample() {
  return (
    <div className="w-full max-w-sm space-y-4">
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <Spinner className="text-primary" />
        Thinking…
      </div>

      <div className="space-y-2 rounded-xl border p-3 text-sm">
        <div className="flex items-center gap-2 text-muted-foreground">
          <HugeiconsIcon
            icon={CheckmarkCircle02Icon}
            strokeWidth={2}
            className="size-4 text-emerald-500"
          />
          Planned the steps
        </div>
        <div className="flex items-center gap-2">
          <Spinner className="text-primary" />
          <span className="flex items-center gap-1.5">
            <HugeiconsIcon icon={Globe02Icon} strokeWidth={2} className="size-4" />
            Searching the web…
          </span>
        </div>
      </div>

      <Button disabled className="w-full">
        <Spinner />
        Generating response
      </Button>
    </div>
  )
}
