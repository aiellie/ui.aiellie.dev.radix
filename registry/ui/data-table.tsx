"use client"

import * as React from "react"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  ArrowUp01Icon,
  ArrowDown01Icon,
  MoreHorizontalIcon,
} from "@hugeicons/core-free-icons"

import { cn } from "@/lib/utils"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

type Status = "success" | "error" | "running"
type Run = {
  id: string
  prompt: string
  status: Status
  latency: number
  cost: number
}
type SortKey = "latency" | "cost"

const initial: Run[] = [
  { id: "run_8f2a", prompt: "Summarize Q3 earnings call", status: "success", latency: 1280, cost: 0.018 },
  { id: "run_3b71", prompt: "Classify 240 support tickets", status: "success", latency: 4120, cost: 0.064 },
  { id: "run_a09c", prompt: "Generate product descriptions", status: "error", latency: 870, cost: 0.004 },
  { id: "run_c4d2", prompt: "Extract entities from contract", status: "running", latency: 2310, cost: 0.022 },
  { id: "run_77e1", prompt: "Translate docs to Arabic", status: "success", latency: 1940, cost: 0.011 },
]

const statusStyles: Record<Status, string> = {
  success: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
  error: "bg-destructive/10 text-destructive",
  running: "bg-amber-500/10 text-amber-600 dark:text-amber-400",
}

export default function DataTableExample() {
  const [sort, setSort] = React.useState<{ key: SortKey; dir: "asc" | "desc" }>({
    key: "latency",
    dir: "desc",
  })
  const [selected, setSelected] = React.useState<Set<string>>(new Set())

  const rows = React.useMemo(
    () =>
      [...initial].sort((a, b) =>
        sort.dir === "asc"
          ? a[sort.key] - b[sort.key]
          : b[sort.key] - a[sort.key]
      ),
    [sort]
  )

  const allSelected = selected.size === initial.length

  function toggle(id: string) {
    setSelected((s) => {
      const n = new Set(s)
      if (n.has(id)) n.delete(id)
      else n.add(id)
      return n
    })
  }

  function SortHeader({ k, label }: { k: SortKey; label: string }) {
    const active = sort.key === k
    return (
      <Button
        variant="ghost"
        size="sm"
        className="-mx-2 h-7"
        onClick={() =>
          setSort((s) =>
            s.key === k
              ? { key: k, dir: s.dir === "asc" ? "desc" : "asc" }
              : { key: k, dir: "desc" }
          )
        }
      >
        {label}
        <HugeiconsIcon
          icon={sort.dir === "asc" ? ArrowUp01Icon : ArrowDown01Icon}
          strokeWidth={2}
          className={cn("size-3.5", active ? "opacity-100" : "opacity-30")}
        />
      </Button>
    )
  }

  return (
    <div className="w-full max-w-2xl space-y-2">
      <div className="flex h-8 items-center justify-between">
        <p className="text-sm text-muted-foreground">
          {selected.size > 0
            ? `${selected.size} selected`
            : `${initial.length} agent runs`}
        </p>
        {selected.size > 0 && (
          <Button variant="outline" size="sm">
            Re-run selected
          </Button>
        )}
      </div>
      <div className="overflow-hidden rounded-xl border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-10">
                <Checkbox
                  checked={allSelected}
                  onCheckedChange={() =>
                    setSelected(
                      allSelected
                        ? new Set()
                        : new Set(initial.map((r) => r.id))
                    )
                  }
                  aria-label="Select all"
                />
              </TableHead>
              <TableHead>Run</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-end">
                <SortHeader k="latency" label="Latency" />
              </TableHead>
              <TableHead className="text-end">
                <SortHeader k="cost" label="Cost" />
              </TableHead>
              <TableHead className="w-10" />
            </TableRow>
          </TableHeader>
          <TableBody>
            {rows.map((r) => (
              <TableRow
                key={r.id}
                data-state={selected.has(r.id) ? "selected" : undefined}
              >
                <TableCell>
                  <Checkbox
                    checked={selected.has(r.id)}
                    onCheckedChange={() => toggle(r.id)}
                    aria-label={`Select ${r.id}`}
                  />
                </TableCell>
                <TableCell>
                  <div className="font-medium">{r.prompt}</div>
                  <div className="font-mono text-xs text-muted-foreground">
                    {r.id}
                  </div>
                </TableCell>
                <TableCell>
                  <Badge className={statusStyles[r.status]}>{r.status}</Badge>
                </TableCell>
                <TableCell className="text-end font-mono">
                  {(r.latency / 1000).toFixed(2)}s
                </TableCell>
                <TableCell className="text-end font-mono">
                  ${r.cost.toFixed(3)}
                </TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon-sm" aria-label="Row actions">
                        <HugeiconsIcon icon={MoreHorizontalIcon} strokeWidth={2} />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>View trace</DropdownMenuItem>
                      <DropdownMenuItem>Re-run</DropdownMenuItem>
                      <DropdownMenuItem className="text-destructive focus:text-destructive">
                        Delete
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
