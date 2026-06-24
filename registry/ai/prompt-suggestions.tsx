"use client"

import { HugeiconsIcon } from "@hugeicons/react"
import type { IconSvgElement } from "@hugeicons/react"
import {
  ArrowUpRight01Icon,
  BookOpen01Icon,
  PaintBoardIcon,
  PenTool03Icon,
  SourceCodeIcon,
} from "@hugeicons/core-free-icons"

import { cn } from "@/lib/utils"

export interface Suggestion {
  icon: IconSvgElement
  title: string
  subtitle: string
}

const DEFAULT_SUGGESTIONS: Suggestion[] = [
  {
    icon: PenTool03Icon,
    title: "Write a first draft",
    subtitle: "for a launch announcement",
  },
  {
    icon: SourceCodeIcon,
    title: "Debug a function",
    subtitle: "and explain the fix step by step",
  },
  {
    icon: PaintBoardIcon,
    title: "Brainstorm names",
    subtitle: "for a new design system",
  },
  {
    icon: BookOpen01Icon,
    title: "Summarize an article",
    subtitle: "into five key takeaways",
  },
]

export function PromptSuggestions({
  suggestions = DEFAULT_SUGGESTIONS,
  onSelect,
  className,
}: {
  suggestions?: Suggestion[]
  onSelect?: (suggestion: Suggestion) => void
  className?: string
}) {
  return (
    <div className={cn("grid gap-2 sm:grid-cols-2", className)}>
      {suggestions.map((suggestion, i) => (
        <button
          key={i}
          type="button"
          onClick={() => onSelect?.(suggestion)}
          className="group flex items-start gap-3 rounded-xl border bg-card p-3 text-start transition-colors hover:border-ring hover:bg-accent"
        >
          <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
            <HugeiconsIcon icon={suggestion.icon} className="size-4" />
          </span>
          <span className="flex min-w-0 flex-1 flex-col">
            <span className="text-sm font-medium">{suggestion.title}</span>
            <span className="truncate text-xs text-muted-foreground">
              {suggestion.subtitle}
            </span>
          </span>
          <HugeiconsIcon
            icon={ArrowUpRight01Icon}
            className="size-4 shrink-0 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100"
          />
        </button>
      ))}
    </div>
  )
}
