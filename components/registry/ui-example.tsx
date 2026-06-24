"use client"

import { EXAMPLES } from "@/registry/ui/registry"

export function UiExample({ slug }: { slug: string }) {
  const Example = EXAMPLES[slug]
  if (!Example) return null
  return <Example />
}
