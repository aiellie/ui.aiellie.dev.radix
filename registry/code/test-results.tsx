"use client"

import { HugeiconsIcon } from "@hugeicons/react"
import {
  CancelCircleIcon,
  CheckmarkCircle02Icon,
  TestTube01Icon,
  Time04Icon,
} from "@hugeicons/core-free-icons"

import { cn } from "@/lib/utils"

export interface TestCase {
  name: string
  status: "pass" | "fail"
  duration: string
  message?: string
}

const DEFAULT_TESTS: TestCase[] = [
  { name: "renders the composer", status: "pass", duration: "12ms" },
  { name: "submits on Enter", status: "pass", duration: "8ms" },
  {
    name: "streams assistant tokens",
    status: "fail",
    duration: "41ms",
    message: "Expected 'Hello' to equal 'Hed'",
  },
  { name: "disables send while empty", status: "pass", duration: "5ms" },
]

export function TestResults({
  file = "prompt-input.test.tsx",
  tests = DEFAULT_TESTS,
  className,
}: {
  file?: string
  tests?: TestCase[]
  className?: string
}) {
  const passed = tests.filter((t) => t.status === "pass").length
  const failed = tests.length - passed

  return (
    <div
      dir="ltr"
      className={cn(
        "w-full max-w-md overflow-hidden rounded-xl border bg-card",
        className
      )}
    >
      <div className="flex items-center gap-2.5 border-b bg-muted/30 px-4 py-2.5">
        <span className="flex size-6 items-center justify-center rounded-md bg-primary/10 text-primary">
          <HugeiconsIcon icon={TestTube01Icon} className="size-3.5" />
        </span>
        <span className="truncate font-mono text-sm font-medium">{file}</span>
        <div className="ms-auto flex items-center gap-2 text-xs font-medium">
          <span className="text-emerald-600 dark:text-emerald-400">
            {passed} passed
          </span>
          {failed > 0 ? (
            <span className="text-red-600 dark:text-red-400">
              {failed} failed
            </span>
          ) : null}
        </div>
      </div>
      <ul className="p-2">
        {tests.map((t, i) => (
          <li key={i} className="flex flex-col gap-1.5 px-2 py-1.5">
            <div className="flex items-center gap-2 text-sm">
              <HugeiconsIcon
                icon={
                  t.status === "pass" ? CheckmarkCircle02Icon : CancelCircleIcon
                }
                className={cn(
                  "size-4 shrink-0",
                  t.status === "pass" ? "text-emerald-500" : "text-red-500"
                )}
              />
              <span
                className={cn(
                  "min-w-0 flex-1 truncate",
                  t.status === "fail" && "font-medium"
                )}
              >
                {t.name}
              </span>
              <span className="flex shrink-0 items-center gap-1 font-mono text-xs text-muted-foreground tabular-nums">
                <HugeiconsIcon icon={Time04Icon} className="size-3" />
                {t.duration}
              </span>
            </div>
            {t.message ? (
              <p className="ms-6 rounded-md border border-red-500/20 bg-red-500/5 px-2 py-1 font-mono text-xs text-red-600 dark:text-red-400">
                {t.message}
              </p>
            ) : null}
          </li>
        ))}
      </ul>
    </div>
  )
}
