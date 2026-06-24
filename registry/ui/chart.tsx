"use client"

import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  type ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

const data = [
  { day: "Mon", opus: 38, haiku: 64 },
  { day: "Tue", opus: 52, haiku: 71 },
  { day: "Wed", opus: 41, haiku: 88 },
  { day: "Thu", opus: 67, haiku: 73 },
  { day: "Fri", opus: 58, haiku: 96 },
  { day: "Sat", opus: 22, haiku: 40 },
  { day: "Sun", opus: 19, haiku: 33 },
]

const config = {
  opus: { label: "Opus 4.8", color: "var(--chart-4)" },
  haiku: { label: "Haiku 4.5", color: "var(--chart-2)" },
} satisfies ChartConfig

export default function ChartExample() {
  return (
    <Card className="w-full max-w-lg">
      <CardHeader>
        <CardTitle>Token usage</CardTitle>
        <CardDescription>Thousands of tokens · last 7 days, by model</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={config} className="h-[220px] w-full">
          <BarChart accessibilityLayer data={data}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="day"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
            />
            <ChartTooltip content={<ChartTooltipContent />} />
            <ChartLegend content={<ChartLegendContent />} />
            <Bar dataKey="opus" fill="var(--color-opus)" radius={[4, 4, 0, 0]} />
            <Bar dataKey="haiku" fill="var(--color-haiku)" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
