import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { HugeiconsIcon } from "@hugeicons/react"

import { getItem, registry } from "@/lib/registry"
import { Badge } from "@/components/ui/badge"
import { ComponentPreview } from "@/components/registry/component-preview"
import { OpenInV0Button } from "@/components/registry/open-in-v0-button"
import { NpxCommand } from "@/components/registry/npx-command"

export function generateStaticParams() {
  return registry.map((item) => ({ slug: item.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const item = getItem(slug)
  if (!item) return {}
  return { title: item.title, description: item.description }
}

export default async function ComponentPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const item = getItem(slug)

  if (!item) {
    notFound()
  }

  const deps = [
    ...(item.registryDependencies ?? []),
    ...(item.dependencies ?? []),
  ]

  return (
    <div className="mx-auto w-full max-w-4xl px-4 py-8 sm:px-6 lg:py-12">
      {/* Header */}
      <header className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex gap-3.5">
          <span className="flex size-11 shrink-0 items-center justify-center rounded-xl border bg-card text-primary">
            <HugeiconsIcon icon={item.icon} className="size-5.5" />
          </span>
          <div className="flex flex-col gap-1">
            <h1 className="text-2xl font-semibold tracking-tight">
              {item.title}
            </h1>
            <p className="max-w-xl text-sm text-muted-foreground">
              {item.description}
            </p>
          </div>
        </div>
        <div className="flex shrink-0 items-center gap-2">
          <OpenInV0Button slug={item.slug} className="shrink-0" />
          <NpxCommand slug={item.slug} />
        </div>
      </header>

      {/* Install */}
      <div className="mt-6">
      
        {deps.length > 0 ? (
          <div className="mt-3 flex flex-wrap items-center gap-1.5">
            {deps.map((dep) => (
              <Badge key={dep} variant="secondary" className="font-mono">
                {dep}
              </Badge>
            ))}
          </div>
        ) : null}
      </div>

      {/* Preview / Code */}
      <div className="mt-6">
        <ComponentPreview slug={item.slug} />
      </div>
    </div>
  )
}