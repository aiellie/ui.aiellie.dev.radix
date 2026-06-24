"use client"

import * as React from "react"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  Copy01Icon,
  EyeIcon,
  Key01Icon,
  Tick02Icon,
  ViewOffSlashIcon,
} from "@hugeicons/core-free-icons"

import { cn } from "@/lib/utils"

export interface EnvVar {
  key: string
  value: string
  secret?: boolean
}

const DEFAULT_VARS: EnvVar[] = [
  { key: "NEXT_PUBLIC_REGISTRY_URL", value: "https://ui.aiellie.dev" },
  {
    key: "OPENAI_API_KEY",
    value: "sk-proj-9f3a2b1c8d7e6f5a4b3c2d1e",
    secret: true,
  },
  {
    key: "DATABASE_URL",
    value: "postgres://user:pass@db.aiellie.dev:5432/app",
    secret: true,
  },
  { key: "NODE_ENV", value: "production" },
]

export function EnvironmentVariables({
  vars = DEFAULT_VARS,
  className,
}: {
  vars?: EnvVar[]
  className?: string
}) {
  const [revealed, setRevealed] = React.useState<Set<number>>(new Set())
  const [copied, setCopied] = React.useState<number | null>(null)

  const toggle = (i: number) =>
    setRevealed((prev) => {
      const next = new Set(prev)
      if (next.has(i)) next.delete(i)
      else next.add(i)
      return next
    })

  const copy = (i: number, value: string) => {
    navigator.clipboard?.writeText(value)
    setCopied(i)
    setTimeout(() => setCopied(null), 1500)
  }

  return (
    <div
      dir="ltr"
      className={cn(
        "w-full max-w-md overflow-hidden rounded-xl border bg-card",
        className
      )}
    >
      <div className="flex items-center gap-2.5 border-b bg-muted/30 px-4 py-2.5">
        <HugeiconsIcon icon={Key01Icon} className="size-4 text-muted-foreground" />
        <span className="font-mono text-sm font-medium">.env</span>
        <span className="ms-auto text-xs text-muted-foreground">
          {vars.length} variables
        </span>
      </div>
      <ul>
        {vars.map((v, i) => {
          const show = !v.secret || revealed.has(i)
          return (
            <li
              key={v.key}
              className="flex items-center gap-2 border-b px-4 py-2.5 text-xs last:border-b-0"
            >
              <code className="shrink-0 font-mono font-medium text-sky-600 dark:text-sky-400">
                {v.key}
              </code>
              <span className="text-muted-foreground">=</span>
              <code className="min-w-0 flex-1 truncate font-mono text-muted-foreground">
                {show ? v.value : "•".repeat(Math.min(20, v.value.length))}
              </code>
              {v.secret ? (
                <button
                  type="button"
                  onClick={() => toggle(i)}
                  aria-label={show ? "Hide value" : "Reveal value"}
                  className="flex size-6 shrink-0 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
                >
                  <HugeiconsIcon
                    icon={show ? ViewOffSlashIcon : EyeIcon}
                    className="size-3.5"
                  />
                </button>
              ) : null}
              <button
                type="button"
                onClick={() => copy(i, v.value)}
                aria-label="Copy value"
                className="flex size-6 shrink-0 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
              >
                <HugeiconsIcon
                  icon={copied === i ? Tick02Icon : Copy01Icon}
                  className="size-3.5"
                />
              </button>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
