"use client"

import * as React from "react"

import { cn } from "@/lib/utils"

export interface TerminalLine {
  type: "command" | "output" | "comment"
  text: string
}

const DEFAULT_LINES: TerminalLine[] = [
  { type: "command", text: "npx shadcn@latest add button" },
  { type: "comment", text: "✔ Checking registry." },
  { type: "output", text: "✔ Installing dependencies." },
  { type: "output", text: "✔ Created 1 file:" },
  { type: "output", text: "  - components/ui/button.tsx" },
  { type: "command", text: "pnpm dev" },
  { type: "output", text: "▲ Next.js 16.2  ·  http://localhost:3000" },
  { type: "comment", text: "✓ Ready in 480ms" },
]

export function Terminal({
  lines = DEFAULT_LINES,
  title = "zsh — aiellieui",
  className,
}: {
  lines?: TerminalLine[]
  title?: string
  className?: string
}) {
  const [visible, setVisible] = React.useState(0)

  React.useEffect(() => {
    if (visible >= lines.length) {
      const reset = setTimeout(() => setVisible(0), 3500)
      return () => clearTimeout(reset)
    }
    const delay = lines[visible]?.type === "command" ? 650 : 350
    const id = setTimeout(() => setVisible((v) => v + 1), delay)
    return () => clearTimeout(id)
  }, [visible, lines])

  return (
    <div
      dir="ltr"
      className={cn(
        "w-full max-w-lg overflow-hidden rounded-xl border bg-[oklch(0.16_0.005_285)] font-mono text-[13px] shadow-sm",
        className
      )}
    >
      <div className="flex items-center gap-2 border-b border-white/10 px-3 py-2.5">
        <span className="flex gap-1.5">
          <span className="size-3 rounded-full bg-red-500/90" />
          <span className="size-3 rounded-full bg-amber-500/90" />
          <span className="size-3 rounded-full bg-green-500/90" />
        </span>
        <span className="flex-1 text-center text-xs text-white/40">{title}</span>
      </div>

      <div className="min-h-[200px] space-y-1 p-4 leading-relaxed">
        {lines.slice(0, visible).map((line, i) => {
          if (line.type === "command") {
            return (
              <div key={i} className="flex gap-2">
                <span className="text-emerald-400">❯</span>
                <span className="text-white/90">{line.text}</span>
              </div>
            )
          }
          return (
            <div
              key={i}
              className={cn(
                "ps-4 whitespace-pre-wrap",
                line.type === "comment" ? "text-emerald-400/70" : "text-white/55"
              )}
            >
              {line.text}
            </div>
          )
        })}
        {visible < lines.length && (
          <span className="inline-block h-4 w-2 animate-pulse bg-white/70 align-middle" />
        )}
      </div>
    </div>
  )
}
