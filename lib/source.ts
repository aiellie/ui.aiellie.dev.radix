import { promises as fs } from "fs"
import path from "path"

import { getItem } from "@/lib/registry"

/**
 * Reads the raw source of a registry component from disk so it can be shown in
 * the "Code" tab of the preview. Server-only (uses `fs`).
 */
export async function getComponentSource(slug: string): Promise<string | null> {
  const item = getItem(slug)
  if (!item) return null

  const file = path.join(
    process.cwd(),
    "registry",
    item.category,
    `${slug}.tsx`
  )

  try {
    return await fs.readFile(file, "utf8")
  } catch {
    return null
  }
}
