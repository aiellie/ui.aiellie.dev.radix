"use client"

import { HugeiconsIcon } from "@hugeicons/react"
import { SentIcon, RefreshIcon, StopIcon } from "@hugeicons/core-free-icons"

import { Button } from "@/components/ui/button"

export default function ButtonExample() {
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="flex flex-wrap items-center justify-center gap-2">
        <Button>
          <HugeiconsIcon icon={SentIcon} strokeWidth={2} className="rtl:-scale-x-100" />
          Send
        </Button>
        <Button variant="outline">
          <HugeiconsIcon icon={RefreshIcon} strokeWidth={2} />
          Regenerate
        </Button>
        <Button variant="destructive">
          <HugeiconsIcon icon={StopIcon} strokeWidth={2} />
          Stop
        </Button>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-2">
        <Button variant="secondary" size="sm">
          Explain this
        </Button>
        <Button variant="ghost" size="sm">
          Make shorter
        </Button>
        <Button variant="link" size="sm">
          Try an example
        </Button>
      </div>
    </div>
  )
}
