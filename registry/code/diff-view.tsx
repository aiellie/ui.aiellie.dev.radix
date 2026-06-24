import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"

export interface DiffLine {
  type: "add" | "remove" | "context"
  text: string
}

const DEFAULT_LINES: DiffLine[] = [
  { type: "context", text: "export function greet(name: string) {" },
  { type: "remove", text: '  return "Hello " + name' },
  { type: "add", text: "  return `Hello, ${name}!`" },
  { type: "context", text: "}" },
  { type: "context", text: "" },
  { type: "remove", text: "const enabled = false" },
  { type: "add", text: "const enabled = true" },
  { type: "add", text: "const retries = 3" },
]

export function DiffView({
  filename = "src/greet.ts",
  lines = DEFAULT_LINES,
  className,
}: {
  filename?: string
  lines?: DiffLine[]
  className?: string
}) {
  const additions = lines.filter((l) => l.type === "add").length
  const deletions = lines.filter((l) => l.type === "remove").length

  let oldNo = 0
  let newNo = 0

  return (
    <div
      dir="ltr"
      className={cn(
        "w-full max-w-lg overflow-hidden rounded-xl border bg-card font-mono text-[13px]",
        className
      )}
    >
      <div className="flex items-center gap-2 border-b bg-muted/40 px-3 py-2">
        <span className="text-xs font-medium text-foreground">{filename}</span>
        <div className="ms-auto flex items-center gap-1.5">
          <Badge
            variant="secondary"
            className="bg-emerald-500/10 text-emerald-600 dark:text-emerald-400"
          >
            +{additions}
          </Badge>
          <Badge
            variant="secondary"
            className="bg-rose-500/10 text-rose-600 dark:text-rose-400"
          >
            −{deletions}
          </Badge>
        </div>
      </div>

      <div className="overflow-x-auto">
        {lines.map((line, i) => {
          if (line.type !== "add") oldNo += 1
          if (line.type !== "remove") newNo += 1
          const sign =
            line.type === "add" ? "+" : line.type === "remove" ? "−" : " "
          return (
            <div
              key={i}
              className={cn(
                "flex",
                line.type === "add" &&
                  "bg-emerald-500/10 text-emerald-700 dark:text-emerald-300",
                line.type === "remove" &&
                  "bg-rose-500/10 text-rose-700 dark:text-rose-300"
              )}
            >
              <span className="w-9 shrink-0 select-none px-1 text-end text-muted-foreground/50 tabular-nums">
                {line.type === "add" ? "" : oldNo}
              </span>
              <span className="w-9 shrink-0 select-none px-1 text-end text-muted-foreground/50 tabular-nums">
                {line.type === "remove" ? "" : newNo}
              </span>
              <span
                className={cn(
                  "w-5 shrink-0 select-none text-center",
                  line.type === "add" && "text-emerald-500",
                  line.type === "remove" && "text-rose-500",
                  line.type === "context" && "text-transparent"
                )}
              >
                {sign}
              </span>
              <code className="flex-1 whitespace-pre pe-3">
                {line.text || " "}
              </code>
            </div>
          )
        })}
      </div>
    </div>
  )
}
