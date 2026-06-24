"use client"

import { HugeiconsIcon } from "@hugeicons/react"
import {
  Add01Icon,
  Search01Icon,
  AiChat02Icon,
  MoreHorizontalIcon,
} from "@hugeicons/core-free-icons"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

const groups = [
  {
    label: "Today",
    chats: ["Refactor auth middleware", "Explain vector embeddings"],
  },
  {
    label: "Yesterday",
    chats: ["Q3 launch email draft", "Debug failing CI job", "SQL query tuning"],
  },
  {
    label: "Previous 7 days",
    chats: ["Trip itinerary for Lisbon", "Summarize research paper"],
  },
]

export default function SidebarExample() {
  return (
    <div className="flex h-[26rem] w-72 flex-col overflow-hidden rounded-xl border bg-sidebar text-sidebar-foreground">
      <div className="flex flex-col gap-2 p-2">
        <Button className="justify-start">
          <HugeiconsIcon icon={Add01Icon} strokeWidth={2} />
          New chat
        </Button>
        <div className="relative">
          <HugeiconsIcon
            icon={Search01Icon}
            strokeWidth={2}
            className="pointer-events-none absolute inset-y-0 start-2 my-auto size-4 text-muted-foreground"
          />
          <input
            placeholder="Search chats…"
            className="h-8 w-full rounded-lg border bg-background ps-8 pe-2 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring/50"
          />
        </div>
      </div>
      <div className="flex-1 overflow-y-auto px-2 pb-2">
        {groups.map((g) => (
          <div key={g.label} className="mb-2">
            <p className="px-2 py-1.5 text-xs font-medium text-muted-foreground">
              {g.label}
            </p>
            <div className="flex flex-col">
              {g.chats.map((c, i) => (
                <button
                  key={c}
                  className={cn(
                    "group flex items-center gap-2 rounded-lg px-2 py-1.5 text-start text-sm",
                    g.label === "Today" && i === 0
                      ? "bg-sidebar-accent text-sidebar-accent-foreground"
                      : "hover:bg-sidebar-accent/60"
                  )}
                >
                  <HugeiconsIcon
                    icon={AiChat02Icon}
                    strokeWidth={2}
                    className="size-4 shrink-0 text-muted-foreground"
                  />
                  <span className="flex-1 truncate">{c}</span>
                  <HugeiconsIcon
                    icon={MoreHorizontalIcon}
                    strokeWidth={2}
                    className="size-4 shrink-0 text-muted-foreground opacity-0 group-hover:opacity-100"
                  />
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center gap-2 border-t p-2">
        <Avatar size="sm">
          <AvatarFallback>EL</AvatarFallback>
        </Avatar>
        <div className="flex-1 leading-tight">
          <div className="text-sm font-medium">Ellie Sophia</div>
          <div className="text-xs text-muted-foreground">Pro plan</div>
        </div>
      </div>
    </div>
  )
}
