"use client"

import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

const turns = [
  { id: 1, model: "Opus 4.8", prompt: 820, completion: 410, cost: 0.018 },
  { id: 2, model: "Sonnet 4.6", prompt: 1240, completion: 360, cost: 0.009 },
  { id: 3, model: "Haiku 4.5", prompt: 540, completion: 180, cost: 0.001 },
]

export default function TableExample() {
  const total = turns.reduce(
    (acc, t) => ({
      prompt: acc.prompt + t.prompt,
      completion: acc.completion + t.completion,
      cost: acc.cost + t.cost,
    }),
    { prompt: 0, completion: 0, cost: 0 }
  )

  return (
    <div className="w-full max-w-lg overflow-hidden rounded-xl border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Turn</TableHead>
            <TableHead>Model</TableHead>
            <TableHead className="text-end">Prompt</TableHead>
            <TableHead className="text-end">Completion</TableHead>
            <TableHead className="text-end">Cost</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {turns.map((t) => (
            <TableRow key={t.id}>
              <TableCell className="text-muted-foreground">#{t.id}</TableCell>
              <TableCell>
                <Badge variant="secondary">{t.model}</Badge>
              </TableCell>
              <TableCell className="text-end font-mono">
                {t.prompt.toLocaleString()}
              </TableCell>
              <TableCell className="text-end font-mono">
                {t.completion.toLocaleString()}
              </TableCell>
              <TableCell className="text-end font-mono">
                ${t.cost.toFixed(3)}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={2}>Total</TableCell>
            <TableCell className="text-end font-mono">
              {total.prompt.toLocaleString()}
            </TableCell>
            <TableCell className="text-end font-mono">
              {total.completion.toLocaleString()}
            </TableCell>
            <TableCell className="text-end font-mono">
              ${total.cost.toFixed(3)}
            </TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  )
}
