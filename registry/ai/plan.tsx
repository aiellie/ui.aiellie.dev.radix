"use client"

import { HugeiconsIcon } from "@hugeicons/react"
import {
  CheckmarkCircle02Icon,
  CircleIcon,
  Loading03Icon,
  TaskDaily01Icon,
} from "@hugeicons/core-free-icons"

import { cn } from "@/lib/utils"

export interface PlanStep {
  title: string
  detail?: string
  status: "done" | "active" | "todo"
}

const DEFAULT_STEPS: PlanStep[] = [
  {
    title: "Scaffold the registry route",
    detail: "app/c/[slug]/page.tsx",
    status: "done",
  },
  {
    title: "Wire the component metadata",
    detail: "lib/registry.ts",
    status: "done",
  },
  {
    title: "Generate the preview demos",
    detail: "components/registry/demos.tsx",
    status: "active",
  },
  { title: "Build the install JSON", detail: "pnpm registry:build", status: "todo" },
  { title: "Deploy to production", status: "todo" },
]

export function Plan({
  title = "Plan",
  steps = DEFAULT_STEPS,
  className,
}: {
  title?: string
  steps?: PlanStep[]
  className?: string
}) {
  const done = steps.filter((s) => s.status === "done").length

  return (
    <div
      className={cn("w-full max-w-md rounded-xl border bg-card", className)}
    >
      <div className="flex items-center gap-2.5 border-b px-4 py-3">
        <span className="flex size-6 items-center justify-center rounded-md bg-primary/10 text-primary">
          <HugeiconsIcon icon={TaskDaily01Icon} className="size-3.5" />
        </span>
        <span className="text-sm font-medium">{title}</span>
        <span className="ms-auto font-mono text-xs text-muted-foreground tabular-nums">
          {done}/{steps.length}
        </span>
      </div>
      <ol className="flex flex-col p-2">
        {steps.map((step, i) => {
          const icon =
            step.status === "done"
              ? CheckmarkCircle02Icon
              : step.status === "active"
                ? Loading03Icon
                : CircleIcon
          return (
            <li key={i} className="flex items-start gap-3 rounded-lg px-2 py-2">
              <HugeiconsIcon
                icon={icon}
                className={cn(
                  "mt-0.5 size-4.5 shrink-0",
                  step.status === "done" && "text-emerald-500",
                  step.status === "active" && "animate-spin text-primary",
                  step.status === "todo" && "text-muted-foreground/40"
                )}
              />
              <div className="flex min-w-0 flex-col">
                <span
                  className={cn(
                    "text-sm leading-tight",
                    step.status === "todo" && "text-muted-foreground",
                    step.status === "active" && "font-medium",
                    step.status === "done" &&
                      "text-muted-foreground line-through"
                  )}
                >
                  {step.title}
                </span>
                {step.detail ? (
                  <span className="mt-0.5 font-mono text-xs text-muted-foreground">
                    {step.detail}
                  </span>
                ) : null}
              </div>
            </li>
          )
        })}
      </ol>
    </div>
  )
}
