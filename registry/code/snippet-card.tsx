"use client"

import * as React from "react"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  Bookmark01Icon,
  Copy01Icon,
  HeartIcon,
  Tick02Icon,
} from "@hugeicons/core-free-icons"

import { cn } from "@/lib/utils"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

const DEFAULT_CODE = `export const useDebounce = (value, delay = 300) => {
  const [debounced, setDebounced] = useState(value)
  useEffect(() => {
    const id = setTimeout(() => setDebounced(value), delay)
    return () => clearTimeout(id)
  }, [value, delay])
  return debounced
}`

export function SnippetCard({
  title = "useDebounce.ts",
  language = "typescript",
  author = "aiellie",
  code = DEFAULT_CODE,
  likes = 128,
  className,
}: {
  title?: string
  language?: string
  author?: string
  code?: string
  likes?: number
  className?: string
}) {
  const [copied, setCopied] = React.useState(false)
  const [liked, setLiked] = React.useState(false)
  const [saved, setSaved] = React.useState(false)

  React.useEffect(() => {
    if (!copied) return
    const t = setTimeout(() => setCopied(false), 2000)
    return () => clearTimeout(t)
  }, [copied])

  return (
    <Card
      className={cn(
        "w-full max-w-md gap-0 rounded-2xl py-0 shadow-sm",
        className
      )}
    >
      <div className="flex items-center gap-2 border-b px-3 py-2.5">
        <Avatar className="size-6">
          <AvatarFallback className="bg-primary/10 text-[10px] font-semibold text-primary uppercase">
            {author.charAt(0)}
          </AvatarFallback>
        </Avatar>
        <span className="text-sm font-medium">{title}</span>
        <Badge variant="secondary" className="ms-auto">
          {language}
        </Badge>
      </div>

      <pre
        dir="ltr"
        className="overflow-x-auto bg-[oklch(0.16_0.005_285)] p-4 font-mono text-[12.5px] leading-relaxed text-[oklch(0.9_0_0)] [scrollbar-width:thin]"
      >
        <code>{code}</code>
      </pre>

      <div className="flex items-center gap-1 border-t px-2 py-1.5">
        <Button
          variant="ghost"
          size="sm"
          aria-pressed={liked}
          onClick={() => setLiked((l) => !l)}
          className={cn("gap-1.5 text-muted-foreground", liked && "text-rose-500")}
        >
          <HugeiconsIcon icon={HeartIcon} />
          {likes + (liked ? 1 : 0)}
        </Button>
        <Button
          variant="ghost"
          size="icon-sm"
          aria-label="Save"
          aria-pressed={saved}
          onClick={() => setSaved((s) => !s)}
          className={cn("text-muted-foreground", saved && "text-primary")}
        >
          <HugeiconsIcon icon={Bookmark01Icon} />
        </Button>
        <Button
          variant="ghost"
          size="sm"
          onClick={() =>
            navigator.clipboard.writeText(code).then(() => setCopied(true))
          }
          className="ms-auto gap-1.5 text-muted-foreground"
        >
          <HugeiconsIcon icon={copied ? Tick02Icon : Copy01Icon} />
          {copied ? "Copied" : "Copy"}
        </Button>
      </div>
    </Card>
  )
}
