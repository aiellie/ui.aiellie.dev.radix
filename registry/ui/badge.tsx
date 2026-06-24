"use client"

import { HugeiconsIcon } from "@hugeicons/react"
import {
  SparklesIcon,
  ZapIcon,
  CheckmarkCircle02Icon,
} from "@hugeicons/core-free-icons"

import { Badge } from "@/components/ui/badge"

export default function BadgeExample() {
  return (
    <div className="flex max-w-md flex-col items-center gap-4">
      <div className="flex flex-wrap items-center justify-center gap-2">
        <Badge>
          <HugeiconsIcon icon={SparklesIcon} strokeWidth={2} />
          Pro
        </Badge>
        <Badge variant="secondary">Claude Opus 4.8</Badge>
        <Badge variant="outline">200K context</Badge>
        <Badge variant="outline" className="border-amber-500/40 text-amber-600 dark:text-amber-400">
          Beta
        </Badge>
        <Badge variant="destructive">Rate limited</Badge>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-2">
        <Badge className="bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
          <HugeiconsIcon icon={CheckmarkCircle02Icon} strokeWidth={2} />
          Grounded
        </Badge>
        <Badge variant="secondary">
          <HugeiconsIcon icon={ZapIcon} strokeWidth={2} />
          12 tok/s
        </Badge>
        <Badge variant="secondary" className="font-mono">
          1,284 tokens
        </Badge>
      </div>
    </div>
  )
}
