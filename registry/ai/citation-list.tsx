import { HugeiconsIcon } from "@hugeicons/react"
import { ArrowUpRight01Icon } from "@hugeicons/core-free-icons"

import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"

export interface Citation {
  title: string
  url: string
  snippet?: string
}

const DEFAULT_CITATIONS: Citation[] = [
  {
    title: "Attention Is All You Need",
    url: "https://arxiv.org/abs/1706.03762",
    snippet:
      "Introduces the Transformer, a model architecture relying entirely on attention mechanisms.",
  },
  {
    title: "Retrieval-Augmented Generation",
    url: "https://ai.meta.com/research/rag",
    snippet:
      "Combines a parametric model with a non-parametric retriever for knowledge-intensive tasks.",
  },
  {
    title: "Scaling Laws for Neural Language Models",
    url: "https://arxiv.org/abs/2001.08361",
  },
]

function hostname(url: string) {
  try {
    return new URL(url).hostname.replace(/^www\./, "")
  } catch {
    return url
  }
}

export function CitationList({
  citations = DEFAULT_CITATIONS,
  className,
}: {
  citations?: Citation[]
  className?: string
}) {
  return (
    <div className={cn("flex flex-col gap-2", className)}>
      <div className="flex items-center gap-2 px-1">
        <span className="text-xs font-medium text-muted-foreground">
          Sources
        </span>
        <Badge variant="secondary" className="h-5 px-1.5 text-xs">
          {citations.length}
        </Badge>
      </div>
      <div className="grid gap-2 sm:grid-cols-2">
        {citations.map((citation, i) => {
          const host = hostname(citation.url)
          return (
            <a
              key={i}
              href={citation.url}
              target="_blank"
              rel="noreferrer"
              className="group flex gap-2.5 rounded-xl border bg-card p-3 transition-colors hover:border-ring hover:bg-accent"
            >
              <span className="flex size-6 shrink-0 items-center justify-center rounded-md bg-primary/10 text-xs font-semibold text-primary">
                {i + 1}
              </span>
              <span className="flex min-w-0 flex-1 flex-col gap-1">
                <span className="flex items-center gap-1 text-sm font-medium">
                  <span className="truncate">{citation.title}</span>
                  <HugeiconsIcon
                    icon={ArrowUpRight01Icon}
                    className="size-3.5 shrink-0 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100"
                  />
                </span>
                {citation.snippet ? (
                  <span className="line-clamp-2 text-xs leading-relaxed text-muted-foreground">
                    {citation.snippet}
                  </span>
                ) : null}
                <span className="flex items-center gap-1 text-xs text-muted-foreground/80">
                  <span className="flex size-3.5 items-center justify-center rounded-full bg-muted text-[8px] font-bold uppercase">
                    {host.charAt(0)}
                  </span>
                  {host}
                </span>
              </span>
            </a>
          )
        })}
      </div>
    </div>
  )
}
