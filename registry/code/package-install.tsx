"use client"

import * as React from "react"
import { HugeiconsIcon } from "@hugeicons/react"
import { Copy01Icon, Tick02Icon } from "@hugeicons/core-free-icons"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const MANAGERS = {
  npm: (pkg: string) => `npm install ${pkg}`,
  pnpm: (pkg: string) => `pnpm add ${pkg}`,
  yarn: (pkg: string) => `yarn add ${pkg}`,
  bun: (pkg: string) => `bun add ${pkg}`,
} as const

type Manager = keyof typeof MANAGERS

export function PackageInstall({
  pkg = "@aiellieui/chat-message",
  className,
}: {
  pkg?: string
  className?: string
}) {
  const [copied, setCopied] = React.useState<Manager | null>(null)

  React.useEffect(() => {
    if (!copied) return
    const t = setTimeout(() => setCopied(null), 2000)
    return () => clearTimeout(t)
  }, [copied])

  const managers = Object.keys(MANAGERS) as Manager[]

  return (
    <Tabs
      dir="ltr"
      defaultValue="npm"
      className={cn(
        "w-full max-w-md gap-0 overflow-hidden rounded-xl border bg-[oklch(0.16_0.005_285)]",
        className
      )}
    >
      <TabsList
        variant="line"
        className="w-full justify-start gap-3 rounded-none border-b border-white/10 px-3"
      >
        {managers.map((m) => (
          <TabsTrigger
            key={m}
            value={m}
            className="px-0 font-mono text-xs text-white/50 data-active:bg-transparent data-active:text-white"
          >
            {m}
          </TabsTrigger>
        ))}
      </TabsList>

      {managers.map((m) => {
        const command = MANAGERS[m](pkg)
        return (
          <TabsContent key={m} value={m} className="m-0">
            <div className="flex items-center gap-2 px-3 py-3">
              <span className="font-mono text-sm text-emerald-400 select-none">
                $
              </span>
              <code className="flex-1 overflow-x-auto font-mono text-sm whitespace-nowrap text-white/90 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                {command}
              </code>
              <Button
                variant="ghost"
                size="icon-xs"
                aria-label="Copy command"
                onClick={() =>
                  navigator.clipboard.writeText(command).then(() => setCopied(m))
                }
                className="text-white/60 hover:bg-white/10 hover:text-white"
              >
                <HugeiconsIcon icon={copied === m ? Tick02Icon : Copy01Icon} />
              </Button>
            </div>
          </TabsContent>
        )
      })}
    </Tabs>
  )
}
