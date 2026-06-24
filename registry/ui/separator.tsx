"use client"

import { Separator } from "@/components/ui/separator"

export default function SeparatorExample() {
  return (
    <div className="w-full max-w-md space-y-4">
      <div className="flex items-center gap-3 text-xs text-muted-foreground">
        <Separator className="flex-1" />
        <span className="shrink-0">Today</span>
        <Separator className="flex-1" />
      </div>

      <div className="space-y-2">
        <div className="ms-auto w-fit rounded-2xl rounded-br-sm bg-primary px-3.5 py-2 text-sm text-primary-foreground">
          What changed in this PR?
        </div>
        <div className="w-fit rounded-2xl rounded-bl-sm bg-muted px-3.5 py-2 text-sm">
          It refactors the auth middleware and adds rate limiting.
        </div>
      </div>

      <div className="flex items-center gap-3 text-xs text-muted-foreground">
        <Separator className="flex-1" />
        <span className="shrink-0">Context window starts here</span>
        <Separator className="flex-1" />
      </div>

      <div className="flex h-5 items-center justify-center gap-3 text-xs text-muted-foreground">
        <span>GPT-4o</span>
        <Separator orientation="vertical" />
        <span>2,048 tokens</span>
        <Separator orientation="vertical" />
        <span>$0.004</span>
      </div>
    </div>
  )
}
