"use client"

import * as React from "react"
import { HugeiconsIcon } from "@hugeicons/react"
import { Copy01Icon, GitCommitIcon, Tick02Icon } from "@hugeicons/core-free-icons"

import { cn } from "@/lib/utils"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function Commit({
  message = "feat(ai): add streaming to the chat composer",
  body = "Switches PromptInput to the useChat streaming API and shows a typing indicator while tokens arrive.",
  hash = "a1b2c3d",
  author = "ellie",
  authorAvatar,
  time = "2 hours ago",
  additions = 128,
  deletions = 24,
  files = 5,
  className,
}: {
  message?: string
  body?: string
  hash?: string
  author?: string
  authorAvatar?: string
  time?: string
  additions?: number
  deletions?: number
  files?: number
  className?: string
}) {
  const [copied, setCopied] = React.useState(false)

  return (
    <div className={cn("w-full max-w-md rounded-xl border bg-card", className)}>
      <div className="flex items-start gap-3 p-4">
        <span className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-lg bg-muted text-muted-foreground">
          <HugeiconsIcon icon={GitCommitIcon} className="size-4.5" />
        </span>
        <div className="flex min-w-0 flex-1 flex-col gap-1">
          <p className="text-sm leading-snug font-medium">{message}</p>
          {body ? (
            <p className="text-xs leading-relaxed text-muted-foreground">
              {body}
            </p>
          ) : null}
          <div className="mt-1.5 flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
            <Avatar className="size-5">
              {authorAvatar ? (
                <AvatarImage src={authorAvatar} alt={author} />
              ) : null}
              <AvatarFallback className="bg-primary/10 text-[10px] font-semibold text-primary uppercase">
                {author.charAt(0)}
              </AvatarFallback>
            </Avatar>
            <span className="font-medium text-foreground">{author}</span>
            <span>committed {time}</span>
          </div>
        </div>
      </div>
      <div
        dir="ltr"
        className="flex items-center gap-3 border-t px-4 py-2.5 text-xs"
      >
        <button
          type="button"
          onClick={() => {
            navigator.clipboard?.writeText(hash)
            setCopied(true)
            setTimeout(() => setCopied(false), 1500)
          }}
          className="flex items-center gap-1.5 rounded-md border bg-muted/40 px-2 py-1 font-mono text-foreground transition-colors hover:bg-accent"
        >
          <HugeiconsIcon
            icon={copied ? Tick02Icon : Copy01Icon}
            className="size-3.5"
          />
          {hash}
        </button>
        <span className="font-medium text-emerald-600 dark:text-emerald-400">
          +{additions}
        </span>
        <span className="font-medium text-red-600 dark:text-red-400">
          −{deletions}
        </span>
        <span className="ms-auto text-muted-foreground">
          {files} files changed
        </span>
      </div>
    </div>
  )
}
