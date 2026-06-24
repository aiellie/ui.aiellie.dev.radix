"use client"

import * as React from "react"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  CodeCircleIcon,
  Loading03Icon,
  PlayIcon,
  RefreshIcon,
} from "@hugeicons/core-free-icons"

import { cn } from "@/lib/utils"

const DEFAULT_CODE = `const sum = (a, b) => a + b
console.log("2 + 3 =", sum(2, 3))
console.log("done")`

const DEFAULT_OUTPUT = ["2 + 3 = 5", "done"]

export function Sandbox({
  code = DEFAULT_CODE,
  output = DEFAULT_OUTPUT,
  className,
}: {
  code?: string
  output?: string[]
  className?: string
}) {
  const [state, setState] = React.useState<"idle" | "running" | "done">("idle")

  const run = () => {
    setState("running")
    setTimeout(() => setState("done"), 900)
  }

  return (
    <div
      dir="ltr"
      className={cn(
        "w-full max-w-md overflow-hidden rounded-xl border bg-card",
        className
      )}
    >
      <div className="flex items-center gap-2.5 border-b bg-muted/30 px-3 py-2">
        <span className="flex size-6 items-center justify-center rounded-md bg-primary/10 text-primary">
          <HugeiconsIcon icon={CodeCircleIcon} className="size-3.5" />
        </span>
        <span className="font-mono text-sm font-medium">sandbox.js</span>
        <button
          type="button"
          onClick={run}
          disabled={state === "running"}
          className="ms-auto flex items-center gap-1.5 rounded-md bg-primary px-2.5 py-1 text-xs font-medium text-primary-foreground transition-opacity hover:opacity-90 disabled:opacity-60"
        >
          <HugeiconsIcon
            icon={
              state === "running"
                ? Loading03Icon
                : state === "done"
                  ? RefreshIcon
                  : PlayIcon
            }
            className={cn("size-3.5", state === "running" && "animate-spin")}
          />
          {state === "running"
            ? "Running"
            : state === "done"
              ? "Run again"
              : "Run"}
        </button>
      </div>

      <pre className="overflow-x-auto p-4 font-mono text-xs leading-relaxed">
        {code}
      </pre>

      <div className="border-t bg-muted/20">
        <div className="px-3 py-1.5 text-[10px] font-medium tracking-wide text-muted-foreground uppercase">
          Console
        </div>
        <div className="min-h-16 px-3 pb-3 font-mono text-xs leading-relaxed">
          {state === "done" ? (
            output.map((line, i) => (
              <div key={i} className="text-foreground">
                <span className="me-2 text-muted-foreground/50 select-none">
                  ›
                </span>
                {line}
              </div>
            ))
          ) : state === "running" ? (
            <span className="text-muted-foreground">Running…</span>
          ) : (
            <span className="text-muted-foreground/60">
              Press Run to execute.
            </span>
          )}
        </div>
      </div>
    </div>
  )
}
