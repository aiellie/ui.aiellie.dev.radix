import { getComponentSource } from "@/lib/source"
import { highlightCode } from "@/lib/highlight"
import { PreviewTabs } from "@/components/registry/preview-tabs"

export async function ComponentPreview({ slug }: { slug: string }) {
  const code = (await getComponentSource(slug)) ?? "// Source not found."
  const highlightedCode = await highlightCode(code, "tsx")
  return <PreviewTabs slug={slug} code={code} highlightedCode={highlightedCode} />
}
