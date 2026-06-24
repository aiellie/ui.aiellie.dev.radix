"use client"

import { HugeiconsIcon } from "@hugeicons/react"
import { Structure01Icon } from "@hugeicons/core-free-icons"

import { cn } from "@/lib/utils"

export interface SchemaField {
  name: string
  type: string
  required?: boolean
  description?: string
}

const DEFAULT_FIELDS: SchemaField[] = [
  {
    name: "id",
    type: "string",
    required: true,
    description: "Unique identifier (uuid).",
  },
  {
    name: "role",
    type: "'user' | 'assistant'",
    required: true,
    description: "Who authored the message.",
  },
  {
    name: "content",
    type: "string",
    required: true,
    description: "The message body.",
  },
  { name: "createdAt", type: "Date", required: true },
  {
    name: "metadata",
    type: "Record<string, unknown>",
    description: "Arbitrary attached data.",
  },
]

export function SchemaDisplay({
  name = "Message",
  fields = DEFAULT_FIELDS,
  className,
}: {
  name?: string
  fields?: SchemaField[]
  className?: string
}) {
  return (
    <div
      className={cn(
        "w-full max-w-md overflow-hidden rounded-xl border bg-card",
        className
      )}
    >
      <div className="flex items-center gap-2.5 border-b bg-muted/30 px-4 py-2.5">
        <span className="flex size-6 items-center justify-center rounded-md bg-primary/10 text-primary">
          <HugeiconsIcon icon={Structure01Icon} className="size-3.5" />
        </span>
        <span className="text-sm font-medium">{name}</span>
        <span className="ms-auto font-mono text-xs text-muted-foreground">
          {fields.length} fields
        </span>
      </div>
      <ul>
        {fields.map((f) => (
          <li
            key={f.name}
            className="flex flex-col gap-1 border-b px-4 py-2.5 last:border-b-0"
          >
            <div className="flex flex-wrap items-center gap-2">
              <code dir="ltr" className="font-mono text-sm font-medium">
                {f.name}
              </code>
              <code
                dir="ltr"
                className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs text-sky-600 dark:text-sky-400"
              >
                {f.type}
              </code>
              <span
                className={cn(
                  "rounded-full px-1.5 py-0.5 text-[10px] font-medium",
                  f.required
                    ? "bg-amber-500/10 text-amber-600 dark:text-amber-400"
                    : "bg-muted text-muted-foreground"
                )}
              >
                {f.required ? "required" : "optional"}
              </span>
            </div>
            {f.description ? (
              <p className="text-xs text-muted-foreground">{f.description}</p>
            ) : null}
          </li>
        ))}
      </ul>
    </div>
  )
}
