"use client"

import * as React from "react"
import { HugeiconsIcon } from "@hugeicons/react"
import type { IconSvgElement } from "@hugeicons/react"
import {
  ArrowDown01Icon,
  Brain02Icon,
  CheckmarkCircle02Icon,
  Loading03Icon,
  Search01Icon,
} from "@hugeicons/core-free-icons"

import { cn } from "@/lib/utils"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"

export interface ThoughtStep {
  label: string
  description?: string
  status?: "complete" | "active" | "pending"
  /** Optional search-result chips rendered under the step. */
  results?: string[]
}

const DEFAULT_STEPS: ThoughtStep[] = [
  {
    label: "Understanding the request",
    description: "The user wants to compare two state libraries for a form.",
    status: "complete",
  },
  {
    label: "Searching the web",
    status: "complete",
    results: ["zustand vs jotai", "react form state 2025", "jotai atoms guide"],
  },
  {
    label: "Weighing the trade-offs",
    description: "Bundle size, boilerplate, and devtools support.",
    status: "active",
  },
  { label: "Drafting the recommendation", status: "pending" },
]

const STATUS_ICON: Record<
  NonNullable<ThoughtStep["status"]>,
  IconSvgElement | undefined
> = {
  complete: CheckmarkCircle02Icon,
  active: Loading03Icon,
  pending: undefined,
}

export function ChainOfThought({
  steps = DEFAULT_STEPS,
  defaultOpen = true,
  className,
}: {
  steps?: ThoughtStep[]
  defaultOpen?: boolean
  className?: string
}) {
  const [open, setOpen] = React.useState(defaultOpen)

  return (
    <Collapsible
      open={open}
      onOpenChange={setOpen}
      className={cn("rounded-xl border bg-card", className)}
    >
      <CollapsibleTrigger className="flex w-full items-center gap-2.5 rounded-xl px-3 py-2.5 text-start text-sm transition-colors hover:bg-accent">
        <span className="flex size-6 items-center justify-center rounded-md bg-primary/10 text-primary">
          <HugeiconsIcon icon={Brain02Icon} className="size-3.5" />
        </span>
        <span className="font-medium">Chain of Thought</span>
        <span className="text-xs text-muted-foreground">
          · {steps.length} steps
        </span>
        <HugeiconsIcon
          icon={ArrowDown01Icon}
          className={cn(
            "ms-auto size-4 text-muted-foreground transition-transform",
            open && "rotate-180"
          )}
        />
      </CollapsibleTrigger>
      <CollapsibleContent>
        <ol className="space-y-1 px-3 pb-3">
          {steps.map((step, i) => {
            const status = step.status ?? "pending"
            const icon = STATUS_ICON[status]
            const isLast = i === steps.length - 1
            return (
              <li key={i} className="relative flex gap-3 ps-1">
                {!isLast ? (
                  <span
                    className="absolute start-[11px] top-7 h-[calc(100%-1rem)] w-px bg-border"
                    aria-hidden
                  />
                ) : null}
                <span
                  className={cn(
                    "z-10 mt-1 flex size-5.5 shrink-0 items-center justify-center rounded-full border bg-background",
                    status === "complete" && "border-primary/30 text-primary",
                    status === "active" && "border-primary text-primary",
                    status === "pending" && "text-muted-foreground"
                  )}
                >
                  {icon ? (
                    <HugeiconsIcon
                      icon={icon}
                      className={cn(
                        "size-3.5",
                        status === "active" && "animate-spin"
                      )}
                    />
                  ) : (
                    <span className="size-1.5 rounded-full bg-current" />
                  )}
                </span>
                <div className="flex flex-1 flex-col gap-1.5 py-1">
                  <span
                    className={cn(
                      "text-sm leading-tight",
                      status === "pending"
                        ? "text-muted-foreground"
                        : "font-medium"
                    )}
                  >
                    {step.label}
                  </span>
                  {step.description ? (
                    <span className="text-xs leading-relaxed text-muted-foreground">
                      {step.description}
                    </span>
                  ) : null}
                  {step.results ? (
                    <div className="flex flex-wrap gap-1.5">
                      {step.results.map((r) => (
                        <span
                          key={r}
                          className="inline-flex items-center gap-1 rounded-md border bg-muted/50 px-1.5 py-0.5 text-xs text-muted-foreground"
                        >
                          <HugeiconsIcon icon={Search01Icon} className="size-3" />
                          {r}
                        </span>
                      ))}
                    </div>
                  ) : null}
                </div>
              </li>
            )
          })}
        </ol>
      </CollapsibleContent>
    </Collapsible>
  )
}
