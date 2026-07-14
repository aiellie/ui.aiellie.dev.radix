import { HugeiconsIcon } from "@hugeicons/react"
import {
  CodeIcon,
  DatabaseIcon,
  Layers01Icon,
  PaintBoardIcon,
  ServerStack01Icon,
} from "@hugeicons/core-free-icons"

import { cn } from "@/lib/utils"

type Group = {
  label: string
  icon: typeof CodeIcon
  items: string[]
}

const defaultGroups: Group[] = [
  {
    label: "Languages",
    icon: CodeIcon,
    items: ["TypeScript", "Python", "Go", "SQL"],
  },
  {
    label: "Frontend",
    icon: PaintBoardIcon,
    items: ["React", "Next.js", "Tailwind", "Motion"],
  },
  {
    label: "Backend",
    icon: ServerStack01Icon,
    items: ["Node.js", "tRPC", "GraphQL", "Bun"],
  },
  {
    label: "Data",
    icon: DatabaseIcon,
    items: ["Postgres", "Redis", "ClickHouse", "Prisma"],
  },
]

export function TechStack({
  groups = defaultGroups,
  className,
}: {
  groups?: Group[]
  className?: string
}) {
  return (
    <div
      className={cn("w-full max-w-lg rounded-2xl border bg-card p-6", className)}
    >
      <div className="flex items-center gap-2">
        <HugeiconsIcon icon={Layers01Icon} className="size-5 text-primary" />
        <h2 className="font-semibold tracking-tight">Tech stack</h2>
      </div>

      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        {groups.map((group) => (
          <div key={group.label} className="rounded-xl border bg-muted/30 p-4">
            <div className="flex items-center gap-2 text-sm font-medium">
              <HugeiconsIcon
                icon={group.icon}
                className="size-4 text-muted-foreground"
              />
              {group.label}
            </div>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-md border bg-background px-2 py-0.5 font-mono text-[11px] text-foreground"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
