"use client"

import { HugeiconsIcon } from "@hugeicons/react"
import {
  GitBranchIcon,
  Search01Icon,
  CheckmarkCircle02Icon,
} from "@hugeicons/core-free-icons"

import { Marker, MarkerContent, MarkerIcon } from "@/components/ui/marker"
import { Spinner } from "@/components/ui/spinner"

export default function MarkerExample() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-6 py-4">
      <Marker variant="separator">
        <MarkerContent>Today</MarkerContent>
      </Marker>

      <Marker>
        <MarkerIcon>
          <HugeiconsIcon icon={GitBranchIcon} strokeWidth={2} />
        </MarkerIcon>
        <MarkerContent>Switched to branch feature/agent-tools</MarkerContent>
      </Marker>

      <Marker>
        <MarkerIcon>
          <HugeiconsIcon icon={Search01Icon} strokeWidth={2} />
        </MarkerIcon>
        <MarkerContent>Explored 4 files</MarkerContent>
      </Marker>

      <Marker role="status">
        <MarkerIcon>
          <Spinner />
        </MarkerIcon>
        <MarkerContent className="shimmer">Running tests…</MarkerContent>
      </Marker>

      <Marker variant="border">
        <MarkerIcon>
          <HugeiconsIcon
            icon={CheckmarkCircle02Icon}
            strokeWidth={2}
            className="text-emerald-500"
          />
        </MarkerIcon>
        <MarkerContent>Worked for 42s · 3 edits applied</MarkerContent>
      </Marker>
    </div>
  )
}
