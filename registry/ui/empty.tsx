"use client"

import { HugeiconsIcon } from "@hugeicons/react"
import { SparklesIcon } from "@hugeicons/core-free-icons"

import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty"
import { Button } from "@/components/ui/button"

const suggestions = [
  "Draft a follow-up email",
  "Explain this error",
  "Plan my week",
  "Summarize a PDF",
]

export default function EmptyExample() {
  return (
    <Empty className="w-full max-w-md rounded-xl border border-dashed">
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <HugeiconsIcon icon={SparklesIcon} strokeWidth={2} />
        </EmptyMedia>
        <EmptyTitle>Start a conversation</EmptyTitle>
        <EmptyDescription>
          Ask anything, or try one of these to get going.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <div className="flex flex-wrap justify-center gap-2">
          {suggestions.map((s) => (
            <Button key={s} variant="outline" size="sm">
              {s}
            </Button>
          ))}
        </div>
      </EmptyContent>
    </Empty>
  )
}
