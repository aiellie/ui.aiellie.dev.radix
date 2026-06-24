"use client"

import * as React from "react"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  ArrowUp01Icon,
  Attachment01Icon,
  Globe02Icon,
  Mic01Icon,
} from "@hugeicons/core-free-icons"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"

export interface PromptInputProps {
  placeholder?: string
  onSend?: (value: string) => void
  className?: string
}

export function PromptInput({
  placeholder = "Ask anything…",
  onSend,
  className,
}: PromptInputProps) {
  const [value, setValue] = React.useState("")
  const [search, setSearch] = React.useState(false)
  const ref = React.useRef<HTMLTextAreaElement>(null)

  React.useEffect(() => {
    const el = ref.current
    if (!el) return
    el.style.height = "auto"
    el.style.height = `${Math.min(el.scrollHeight, 200)}px`
  }, [value])

  function submit() {
    const trimmed = value.trim()
    if (!trimmed) return
    onSend?.(trimmed)
    setValue("")
  }

  return (
    <div
      className={cn(
        "rounded-2xl border bg-background p-2 shadow-sm transition-colors focus-within:border-ring focus-within:ring-3 focus-within:ring-ring/20",
        className
      )}
    >
      <Textarea
        ref={ref}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault()
            submit()
          }
        }}
        rows={1}
        placeholder={placeholder}
        className="max-h-[200px] min-h-0 resize-none border-0 bg-transparent px-2 py-1.5 shadow-none focus-visible:border-0 focus-visible:ring-0 md:text-sm dark:bg-transparent"
      />
      <div className="flex items-center gap-1 pt-1">
        <Button variant="ghost" size="icon-sm" aria-label="Attach file">
          <HugeiconsIcon icon={Attachment01Icon} />
        </Button>
        <Button
          variant={search ? "secondary" : "ghost"}
          size="sm"
          onClick={() => setSearch((s) => !s)}
          className={cn("gap-1.5", !search && "text-muted-foreground")}
        >
          <HugeiconsIcon icon={Globe02Icon} />
          Search
        </Button>

        <div className="ms-auto flex items-center gap-1">
          <Button variant="ghost" size="icon-sm" aria-label="Dictate">
            <HugeiconsIcon icon={Mic01Icon} />
          </Button>
          <Button
            size="icon-sm"
            disabled={!value.trim()}
            onClick={submit}
            aria-label="Send message"
            className="rounded-full"
          >
            <HugeiconsIcon icon={ArrowUp01Icon} />
          </Button>
        </div>
      </div>
    </div>
  )
}
