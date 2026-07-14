import { cn } from "@/lib/utils"
import { Card } from "@/components/ui/card"

type Stat = { value: string; label: string }

const defaultStats: Stat[] = [
  { value: "8+", label: "Years experience" },
  { value: "60+", label: "Projects shipped" },
  { value: "24", label: "Happy clients" },
  { value: "12k", label: "GitHub stars" },
]

export function StatsRow({
  stats = defaultStats,
  className,
}: {
  stats?: Stat[]
  className?: string
}) {
  return (
    <Card
      className={cn(
        "grid w-full max-w-2xl grid-cols-2 gap-px bg-border py-0 sm:grid-cols-4",
        className
      )}
    >
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="flex flex-col items-center justify-center gap-1 bg-card px-4 py-6 text-center"
        >
          <span className="bg-gradient-to-br from-violet-500 to-fuchsia-500 bg-clip-text text-3xl font-bold tracking-tight text-transparent">
            {stat.value}
          </span>
          <span className="text-xs text-muted-foreground">{stat.label}</span>
        </div>
      ))}
    </Card>
  )
}
