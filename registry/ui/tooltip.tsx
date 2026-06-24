"use client"

import { HugeiconsIcon } from "@hugeicons/react"
import type { IconSvgElement } from "@hugeicons/react"
import {
  Attachment01Icon,
  Image01Icon,
  Globe02Icon,
  Mic01Icon,
  AiBrain01Icon,
} from "@hugeicons/core-free-icons"

import { Button } from "@/components/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"

const tools: { icon: IconSvgElement; label: string }[] = [
  { icon: Attachment01Icon, label: "Attach a file" },
  { icon: Image01Icon, label: "Generate an image" },
  { icon: Globe02Icon, label: "Search the web" },
  { icon: Mic01Icon, label: "Dictate your prompt" },
  { icon: AiBrain01Icon, label: "Enable deep reasoning" },
]

export default function TooltipExample() {
  return (
    <div className="flex items-center gap-1 rounded-full border bg-card p-1">
      {tools.map((t) => (
        <Tooltip key={t.label}>
          <TooltipTrigger asChild>
            <Button variant="ghost" size="icon" aria-label={t.label}>
              <HugeiconsIcon icon={t.icon} strokeWidth={2} />
            </Button>
          </TooltipTrigger>
          <TooltipContent>{t.label}</TooltipContent>
        </Tooltip>
      ))}
    </div>
  )
}
