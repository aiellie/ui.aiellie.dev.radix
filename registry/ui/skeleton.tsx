"use client"

import { HugeiconsIcon } from "@hugeicons/react"
import { SparklesIcon } from "@hugeicons/core-free-icons"

import { Skeleton } from "@/components/ui/skeleton"

export default function SkeletonExample() {
  return (
    <div className="w-full max-w-md space-y-4">
      <div className="flex gap-3">
        <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
          <HugeiconsIcon icon={SparklesIcon} strokeWidth={2} className="size-4" />
        </div>
        <div className="flex-1 space-y-2 pt-1">
          <Skeleton className="h-3.5 w-[90%]" />
          <Skeleton className="h-3.5 w-full" />
          <Skeleton className="h-3.5 w-[75%]" />
          <div className="pt-2">
            <Skeleton className="h-28 w-full rounded-xl" />
          </div>
        </div>
      </div>
      <p className="ps-11 text-xs text-muted-foreground">
        The assistant is thinking…
      </p>
    </div>
  )
}
