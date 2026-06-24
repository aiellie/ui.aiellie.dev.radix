"use client"

import * as React from "react"
import { HugeiconsIcon } from "@hugeicons/react"
import { CodeSquareIcon, EyeIcon } from "@hugeicons/core-free-icons"

import { cn } from "@/lib/utils"

const DEFAULT_CODE = `export function Greeting() {
  return (
    <button className="rounded-lg bg-primary px-4 py-2 text-primary-foreground">
      Hello, world
    </button>
  )
}`

export function JsxPreview({
  code = DEFAULT_CODE,
  children,
  className,
}: {
  code?: string
  children?: React.ReactNode
  className?: string
}) {
  const [tab, setTab] = React.useState<"preview" | "code">("preview")

  return (
    <div
      className={cn(
        "w-full max-w-md overflow-hidden rounded-xl border bg-card",
        className
      )}
    >
      <div className="flex items-center gap-1 border-b bg-muted/30 px-2 py-1.5">
        {(["preview", "code"] as const).map((t) => (
          <button
            key={t}
            type="button"
            onClick={() => setTab(t)}
            className={cn(
              "flex items-center gap-1.5 rounded-md px-2.5 py-1 text-xs font-medium transition-colors",
              tab === t
                ? "bg-background text-foreground shadow-sm"
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            <HugeiconsIcon
              icon={t === "preview" ? EyeIcon : CodeSquareIcon}
              className="size-3.5"
            />
            {t === "preview" ? "Preview" : "Code"}
          </button>
        ))}
      </div>
      {tab === "preview" ? (
        <div className="flex min-h-36 items-center justify-center bg-[radial-gradient(var(--border)_1px,transparent_1px)] [background-size:16px_16px] p-6">
          {children ?? <DefaultPreview />}
        </div>
      ) : (
        <pre
          dir="ltr"
          className="overflow-x-auto p-4 font-mono text-xs leading-relaxed"
        >
          {code}
        </pre>
      )}
    </div>
  )
}

function DefaultPreview() {
  return (
    <button className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-transform hover:-translate-y-0.5">
      Hello, world
    </button>
  )
}
