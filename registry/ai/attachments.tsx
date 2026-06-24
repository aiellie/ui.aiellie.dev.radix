"use client"

import * as React from "react"
import { HugeiconsIcon } from "@hugeicons/react"
import type { IconSvgElement } from "@hugeicons/react"
import {
  Cancel01Icon,
  DocumentCodeIcon,
  File01Icon,
  Image01Icon,
  Pdf01Icon,
  PlusSignIcon,
} from "@hugeicons/core-free-icons"

import { cn } from "@/lib/utils"

type AttachmentKind = "image" | "pdf" | "code" | "file"

export interface Attachment {
  id: string
  name: string
  size: string
  kind: AttachmentKind
}

const KIND_META: Record<
  AttachmentKind,
  { icon: IconSvgElement; className: string }
> = {
  image: { icon: Image01Icon, className: "bg-violet-500/10 text-violet-500" },
  pdf: { icon: Pdf01Icon, className: "bg-red-500/10 text-red-500" },
  code: { icon: DocumentCodeIcon, className: "bg-sky-500/10 text-sky-500" },
  file: { icon: File01Icon, className: "bg-muted text-muted-foreground" },
}

const DEFAULT_ATTACHMENTS: Attachment[] = [
  { id: "1", name: "hero-mockup.png", size: "1.2 MB", kind: "image" },
  { id: "2", name: "product-spec.pdf", size: "240 KB", kind: "pdf" },
  { id: "3", name: "use-chat.ts", size: "3.1 KB", kind: "code" },
]

export function Attachments({
  attachments = DEFAULT_ATTACHMENTS,
  onAdd,
  className,
}: {
  attachments?: Attachment[]
  onAdd?: () => void
  className?: string
}) {
  const [items, setItems] = React.useState(attachments)

  return (
    <div className={cn("flex flex-wrap items-center gap-2", className)}>
      {items.map((file) => {
        const meta = KIND_META[file.kind]
        return (
          <div
            key={file.id}
            className="group relative flex items-center gap-2.5 rounded-xl border bg-card py-2 ps-2 pe-9"
          >
            <span
              className={cn(
                "flex size-9 shrink-0 items-center justify-center rounded-lg",
                meta.className
              )}
            >
              <HugeiconsIcon icon={meta.icon} className="size-4.5" />
            </span>
            <span className="flex min-w-0 flex-col">
              <span className="max-w-40 truncate text-sm font-medium">
                {file.name}
              </span>
              <span className="text-xs text-muted-foreground">{file.size}</span>
            </span>
            <button
              type="button"
              onClick={() =>
                setItems((prev) => prev.filter((f) => f.id !== file.id))
              }
              aria-label={`Remove ${file.name}`}
              className="absolute end-1.5 top-1/2 flex size-6 -translate-y-1/2 items-center justify-center rounded-md text-muted-foreground opacity-0 transition-all hover:bg-accent hover:text-foreground group-hover:opacity-100"
            >
              <HugeiconsIcon icon={Cancel01Icon} className="size-4" />
            </button>
          </div>
        )
      })}
      <button
        type="button"
        onClick={onAdd}
        aria-label="Add attachment"
        className="flex size-13 shrink-0 items-center justify-center rounded-xl border border-dashed text-muted-foreground transition-colors hover:border-ring hover:bg-accent hover:text-foreground"
      >
        <HugeiconsIcon icon={PlusSignIcon} className="size-5" />
      </button>
    </div>
  )
}
