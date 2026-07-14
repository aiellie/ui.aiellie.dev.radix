import { cn } from "@/lib/utils"

const defaultItems = [
  "TypeScript",
  "React",
  "Next.js",
  "Tailwind",
  "Node.js",
  "GraphQL",
  "Postgres",
  "Redis",
  "Docker",
  "AWS",
  "Motion",
  "Prisma",
]

export function TechMarquee({
  items = defaultItems,
  className,
}: {
  items?: string[]
  className?: string
}) {
  const loop = [...items, ...items]

  return (
    <div
      className={cn(
        "group relative w-full max-w-2xl overflow-hidden rounded-2xl border bg-card py-5",
        className
      )}
    >
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-card to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-card to-transparent" />
      <div className="flex w-max animate-[marquee_22s_linear_infinite] items-center gap-3 group-hover:[animation-play-state:paused]">
        {loop.map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-2 rounded-full border bg-muted/40 px-4 py-1.5 text-sm font-medium text-foreground"
          >
            <span className="size-1.5 rounded-full bg-gradient-to-br from-violet-500 to-fuchsia-500" />
            {item}
          </span>
        ))}
      </div>
      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  )
}
