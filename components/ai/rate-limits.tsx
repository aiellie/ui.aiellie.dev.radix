"use client"

import * as React from "react"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"

export interface RateLimitValues {
  rpm: number | null
  tpm: number | null
  batchQueueLimit: number | null
}

export interface RateLimitTier {
  tier: string
  standard: RateLimitValues
  longContext: RateLimitValues
}

const tiers: RateLimitTier[] = [
  {
    tier: "Free",
    standard: { rpm: null, tpm: null, batchQueueLimit: null },
    longContext: { rpm: null, tpm: null, batchQueueLimit: null },
  },
  {
    tier: "Tier 1",
    standard: { rpm: 500, tpm: 500_000, batchQueueLimit: 1_500_000 },
    longContext: { rpm: null, tpm: null, batchQueueLimit: null },
  },
  {
    tier: "Tier 2",
    standard: { rpm: 5_000, tpm: 1_000_000, batchQueueLimit: 3_000_000 },
    longContext: { rpm: null, tpm: null, batchQueueLimit: null },
  },
  {
    tier: "Tier 3",
    standard: { rpm: 5_000, tpm: 2_000_000, batchQueueLimit: 100_000_000 },
    longContext: { rpm: null, tpm: null, batchQueueLimit: null },
  },
  {
    tier: "Tier 4",
    standard: { rpm: 10_000, tpm: 4_000_000, batchQueueLimit: 200_000_000 },
    longContext: {
      rpm: 10_000,
      tpm: 1_000_000,
      batchQueueLimit: 200_000_000,
    },
  },
  {
    tier: "Tier 5",
    standard: {
      rpm: 15_000,
      tpm: 40_000_000,
      batchQueueLimit: 15_000_000_000,
    },
    longContext: {
      rpm: 15_000,
      tpm: 2_000_000,
      batchQueueLimit: 15_000_000_000,
    },
  },
]

function RateLimitCells({ rpm, tpm, batchQueueLimit }: RateLimitValues) {
  if (rpm === null || tpm === null || batchQueueLimit === null) {
    return (
      <TableCell colSpan={3} className="text-muted-foreground">
        Not supported
      </TableCell>
    )
  }

  return (
    <>
      <TableCell className="text-end font-mono">{rpm.toLocaleString()}</TableCell>
      <TableCell className="text-end font-mono">{tpm.toLocaleString()}</TableCell>
      <TableCell className="text-end font-mono">
        {batchQueueLimit.toLocaleString()}
      </TableCell>
    </>
  )
}

export default function RateLimits() {
  const [longContext, setLongContext] = React.useState(false)

  return (
    <div className="w-full max-w-2xl space-y-3">
      <div className="flex items-center justify-between rounded-xl border px-4 py-3">
        <div className="grid gap-0.5 leading-snug">
          <Label htmlFor="long-context">Long context</Label>
          <span className="text-xs text-muted-foreground">
            {longContext
              ? "Showing limits for requests over 200K tokens"
              : "Showing standard limits for requests up to 200K tokens"}
          </span>
        </div>
        <Switch
          id="long-context"
          checked={longContext}
          onCheckedChange={setLongContext}
        />
      </div>

      <div className="overflow-hidden rounded-xl border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Tier</TableHead>
              <TableHead className="text-end">RPM</TableHead>
              <TableHead className="text-end">TPM</TableHead>
              <TableHead className="text-end">Batch queue limit</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {tiers.map((tier) => {
              const limits = longContext ? tier.longContext : tier.standard

              return (
                <TableRow key={tier.tier}>
                  <TableCell>
                    <Badge variant="secondary">{tier.tier}</Badge>
                  </TableCell>
                  <RateLimitCells {...limits} />
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
