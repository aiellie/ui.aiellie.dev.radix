"use client"

import * as React from "react"
import { HugeiconsIcon } from "@hugeicons/react"
import type { IconSvgElement } from "@hugeicons/react"
import {
  ArrowDown01Icon,
  CheckmarkCircle02Icon,
  FileCodeIcon,
  FolderOpenIcon,
  Loading03Icon,
  Search01Icon,
} from "@hugeicons/core-free-icons"

import { cn } from "@/lib/utils"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"

export interface TaskItem {
  icon: IconSvgElement
  label: string
  code: string
}

const DEFAULT_ITEMS: TaskItem[] = [
  { icon: Search01Icon, label: "Searched for ", code: "useChat" },
  { icon: FolderOpenIcon, label: "Opened ", code: "registry/ai" },
  { icon: FileCodeIcon, label: "Read ", code: "prompt-input.tsx" },
  { icon: FileCodeIcon, label: "Edited ", code: "chat-message.tsx" },
]

export function Task({
  title = "Wiring up the chat composer",
  items = DEFAULT_ITEMS,
  status = "complete",
  defaultOpen = true,
  className,
}: {
  title?: string
  items?: TaskItem[]
  status?: "running" | "complete"
  defaultOpen?: boolean
  className?: string
}) {
  const [open, setOpen] = React.useState(defaultOpen)

  return (
    <Collapsible
      open={open}
      onOpenChange={setOpen}
      className={cn("w-full max-w-md rounded-xl border bg-card", className)}
    >
      <CollapsibleTrigger className="flex w-full items-center gap-2.5 rounded-xl px-3 py-2.5 text-start text-sm transition-colors hover:bg-accent">
        <HugeiconsIcon
          icon={status === "running" ? Loading03Icon : CheckmarkCircle02Icon}
          className={cn(
            "size-4 shrink-0",
            status === "running"
              ? "animate-spin text-primary"
              : "text-emerald-500"
          )}
        />
        <span className="min-w-0 truncate font-medium">{title}</span>
        <span className="shrink-0 text-xs text-muted-foreground">
          · {items.length} steps
        </span>
        <HugeiconsIcon
          icon={ArrowDown01Icon}
          className={cn(
            "ms-auto size-4 shrink-0 text-muted-foreground transition-transform",
            open && "rotate-180"
          )}
        />
      </CollapsibleTrigger>
      <CollapsibleContent>
        <ul className="flex flex-col gap-2 px-3 pb-3 ps-4">
          {items.map((item, i) => (
            <li
              key={i}
              className="relative flex items-center gap-2 ps-5 text-sm text-muted-foreground before:absolute before:start-[3px] before:top-1/2 before:size-1.5 before:-translate-y-1/2 before:rounded-full before:bg-border"
            >
              <HugeiconsIcon icon={item.icon} className="size-3.5 shrink-0" />
              <span className="min-w-0 truncate">
                {item.label}
                <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs text-foreground">
                  {item.code}
                </code>
              </span>
            </li>
          ))}
        </ul>
      </CollapsibleContent>
    </Collapsible>
  )
}
