"use client"

import * as React from "react"

import { cn } from "@/lib/utils"
import { Tabs, TabsContent } from "@/components/ui/tabs"
import { CopyButton } from "@/components/registry/copy-button"
import { demos } from "@/components/registry/demos"
import { UiExample } from "@/components/registry/ui-example"
import { CodePreviewToggle } from "@/components/registry/code-preview-toggle"
import { EXAMPLES } from "@/registry/ui/registry"

export function PreviewTabs({
  slug,
  code,
  highlightedCode,
  className,
}: {
  slug: string
  code: string
  highlightedCode?: string
  className?: string
}) {
  const demo =
    demos[slug] ?? (slug in EXAMPLES ? <UiExample slug={slug} /> : undefined)
  const lines = code.replace(/\n+$/, "").split("\n")
  const [tab, setTab] = React.useState<"preview" | "code">("preview")
  return (
    <>
    <CodePreviewToggle view={tab} onViewChange={(view) => {
      setTab(view)
    }} />
    <div className="pt-2"></div>
    <Tabs value={tab} onValueChange={(value) => setTab(value as "preview" | "code")} className={cn("gap-3", className)}>
    {tab === "preview" && (
      <TabsContent value="preview">
        <div
          className="relative flex min-h-[300px] w-full items-center justify-center overflow-hidden rounded-xl border bg-background p-6 sm:p-10"
          style={{
            backgroundImage:
              "radial-gradient(color-mix(in oklch, var(--border) 70%, transparent) 1px, transparent 1px)",
            backgroundSize: "16px 16px",
          }}
        >
          {demo ?? (
            <p className="text-sm text-muted-foreground">
              No preview available.
            </p>
          )}
        </div>
      </TabsContent>
    )}
    {tab === "code" && (
      <TabsContent value="code">
        <div className="group/code relative overflow-hidden rounded-xl border">
          <CopyButton
            value={code}
            className="absolute end-3 top-3 z-10 text-muted-foreground opacity-0 transition-opacity group-hover/code:opacity-100 hover:bg-foreground/10 hover:text-foreground focus-visible:opacity-100"
          />
          {highlightedCode ? (
            <div
              dir="ltr"
              className={cn(
                "max-h-[300px] overflow-auto text-[13px] leading-relaxed [scrollbar-width:thin]",
                "[&_pre]:min-w-full [&_pre]:py-4 [&_pre]:font-mono [&_pre]:outline-none",
                "[&_code]:grid [&_code]:[counter-reset:line]",
                "[&_.line]:px-4 [&_.line:hover]:bg-foreground/[0.04]",
                "[&_.line]:before:me-4 [&_.line]:before:inline-block [&_.line]:before:w-8 [&_.line]:before:text-end [&_.line]:before:tabular-nums [&_.line]:before:text-muted-foreground/40 [&_.line]:before:content-[counter(line)] [&_.line]:before:[counter-increment:line]"
              )}
              dangerouslySetInnerHTML={{ __html: highlightedCode }}
            />
          ) : (
            <div
              dir="ltr"
              className="max-h-[300px] overflow-auto py-4 text-[13px] leading-relaxed text-[oklch(0.92_0_0)] [scrollbar-width:thin]"
            >
              <pre className="min-w-full font-mono">
                {lines.map((line, i) => (
                  <div key={i} className="flex px-4 hover:bg-white/[0.04]">
                    <span className="me-4 w-8 shrink-0 text-end text-white/25 select-none tabular-nums">
                      {i + 1}
                    </span>
                    <code className="whitespace-pre">{line || " "}</code>
                  </div>  
                ))}
              </pre>
            </div>
          )}
        </div>
      </TabsContent>
    )}
    </Tabs>
    </>
  )
}
