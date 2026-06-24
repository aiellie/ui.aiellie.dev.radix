"use client"

import * as React from "react"
import { HugeiconsIcon } from "@hugeicons/react"
import { Bug01Icon, Copy01Icon, Tick02Icon } from "@hugeicons/core-free-icons"

import { cn } from "@/lib/utils"

export interface StackFrame {
  fn: string
  file: string
  line: number
  col: number
  /** App frames are highlighted; framework frames are dimmed. */
  app?: boolean
}

const DEFAULT_FRAMES: StackFrame[] = [
  {
    fn: "sendMessage",
    file: "registry/ai/prompt-input.tsx",
    line: 42,
    col: 17,
    app: true,
  },
  {
    fn: "handleSubmit",
    file: "registry/ai/conversation.tsx",
    line: 88,
    col: 9,
    app: true,
  },
  {
    fn: "onClick",
    file: "node_modules/react-dom/cjs/react-dom.js",
    line: 9241,
    col: 3,
  },
  {
    fn: "dispatchEvent",
    file: "node_modules/react-dom/cjs/react-dom.js",
    line: 6457,
    col: 12,
  },
]

export function StackTrace({
  name = "TypeError",
  message = "Cannot read properties of undefined (reading 'content')",
  frames = DEFAULT_FRAMES,
  className,
}: {
  name?: string
  message?: string
  frames?: StackFrame[]
  className?: string
}) {
  const [copied, setCopied] = React.useState(false)

  return (
    <div
      dir="ltr"
      className={cn(
        "w-full max-w-md overflow-hidden rounded-xl border bg-card",
        className
      )}
    >
      <div className="flex items-start gap-2.5 border-b border-red-500/20 bg-red-500/5 p-4">
        <span className="mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-lg bg-red-500/10 text-red-500">
          <HugeiconsIcon icon={Bug01Icon} className="size-4" />
        </span>
        <div className="flex min-w-0 flex-1 flex-col">
          <span className="font-mono text-sm font-semibold text-red-600 dark:text-red-400">
            {name}
          </span>
          <span className="text-sm leading-snug">{message}</span>
        </div>
        <button
          type="button"
          onClick={() => {
            navigator.clipboard?.writeText(`${name}: ${message}`)
            setCopied(true)
            setTimeout(() => setCopied(false), 1500)
          }}
          aria-label="Copy error"
          className="flex size-7 shrink-0 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
        >
          <HugeiconsIcon
            icon={copied ? Tick02Icon : Copy01Icon}
            className="size-4"
          />
        </button>
      </div>
      <ul className="p-2">
        {frames.map((f, i) => (
          <li
            key={i}
            className={cn(
              "flex items-baseline gap-2 rounded-md px-2 py-1.5 font-mono text-xs",
              f.app ? "text-foreground" : "text-muted-foreground/60"
            )}
          >
            <span
              className={cn(
                "shrink-0",
                f.app ? "text-primary" : "text-muted-foreground/40"
              )}
            >
              at
            </span>
            <span className="shrink-0 font-medium">{f.fn}</span>
            <span className="min-w-0 truncate">
              {f.file}
              <span className="text-muted-foreground">
                :{f.line}:{f.col}
              </span>
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}
