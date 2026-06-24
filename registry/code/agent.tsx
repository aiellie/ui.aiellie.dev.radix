"use client"

import { HugeiconsIcon } from "@hugeicons/react"
import {
  CheckmarkCircle02Icon,
  FlashIcon,
  Loading03Icon,
  RoboticIcon,
} from "@hugeicons/core-free-icons"

import { cn } from "@/lib/utils"

const DEFAULT_TOOLS = ["read_file", "edit_file", "run_tests"]

export function Agent({
  name = "Refactor Agent",
  model = "claude-opus-4-8",
  status = "running",
  step = "Running the test suite to verify the refactor…",
  tokens = "12.4k",
  duration = "00:42",
  tools = DEFAULT_TOOLS,
  className,
}: {
  name?: string
  model?: string
  status?: "running" | "idle"
  step?: string
  tokens?: string
  duration?: string
  tools?: string[]
  className?: string
}) {
  const running = status === "running"

  return (
    <div className={cn("w-full max-w-md rounded-xl border bg-card", className)}>
      <div className="flex items-center gap-3 border-b p-4">
        <span className="relative flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
          <HugeiconsIcon icon={RoboticIcon} className="size-5.5" />
          <span
            className={cn(
              "absolute -end-0.5 -bottom-0.5 size-3 rounded-full border-2 border-card",
              running ? "bg-emerald-500" : "bg-muted-foreground"
            )}
          />
        </span>
        <div className="flex min-w-0 flex-1 flex-col">
          <span className="truncate text-sm font-semibold">{name}</span>
          <span className="truncate font-mono text-xs text-muted-foreground">
            {model}
          </span>
        </div>
        <span
          className={cn(
            "flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium",
            running
              ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400"
              : "bg-muted text-muted-foreground"
          )}
        >
          <span
            className={cn(
              "size-1.5 rounded-full bg-current",
              running && "animate-pulse"
            )}
          />
          {running ? "Running" : "Idle"}
        </span>
      </div>

      <div className="flex items-center gap-2 px-4 py-3 text-sm">
        <HugeiconsIcon
          icon={running ? Loading03Icon : CheckmarkCircle02Icon}
          className={cn(
            "size-4 shrink-0",
            running ? "animate-spin text-primary" : "text-emerald-500"
          )}
        />
        <span className="min-w-0 truncate text-muted-foreground">{step}</span>
      </div>

      <div className="flex flex-wrap items-center gap-x-4 gap-y-2 border-t px-4 py-3 text-xs text-muted-foreground">
        <span className="flex items-center gap-1.5">
          <HugeiconsIcon icon={FlashIcon} className="size-3.5" />
          {tokens} tokens
        </span>
        <span className="font-mono tabular-nums">{duration}</span>
        <div className="ms-auto flex flex-wrap items-center gap-1.5">
          {tools.map((t) => (
            <code
              key={t}
              className="rounded bg-muted px-1.5 py-0.5 font-mono text-[11px] text-foreground"
            >
              {t}
            </code>
          ))}
        </div>
      </div>
    </div>
  )
}
