import Link from "next/link"
import { HugeiconsIcon } from "@hugeicons/react"
import { ArrowRight01Icon, SparklesIcon } from "@hugeicons/core-free-icons"

import { categories, getItemsByCategory, registry } from "@/lib/registry"
import { siteConfig } from "@/lib/site"
import { Badge } from "@/components/ui/badge"
import { CopyButton } from "@/components/registry/copy-button"

const INIT_COMMAND =
  "pnpm dlx shadcn@latest init --preset b37aICLsQ --template next --rtl --pointer"

export default function HomePage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 lg:py-16">
      {/* Hero */}
      <section className="flex flex-col items-start gap-5">
        <Badge variant="secondary" className="gap-1.5">
          <HugeiconsIcon icon={SparklesIcon} className="size-3.5 text-primary" />
          {registry.length} components · AIEllie registry
        </Badge>
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
          <span className="bg-gradient-to-br from-foreground to-foreground/55 bg-clip-text text-transparent">
            Build AI products faster
          </span>
        </h1>
        <p className="max-w-2xl text-base text-muted-foreground sm:text-lg">
          {siteConfig.description} Each component ships with an{" "}
          <span className="font-medium text-foreground">Open in v0</span> button,
          a one-line CLI install, and a live preview / code toggle.
        </p>

        <div
          dir="ltr"
          className="mt-1 flex w-full max-w-2xl items-center gap-2 rounded-xl border bg-muted/40 ps-3 pe-1.5 py-1"
        >
          <span className="font-mono text-sm text-muted-foreground/70 select-none">
            $
          </span>
          <code className="flex-1 overflow-x-auto py-1.5 font-mono text-xs whitespace-nowrap sm:text-sm [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {INIT_COMMAND}
          </code>
          <CopyButton value={INIT_COMMAND} className="shrink-0" />
        </div>
      </section>

      {/* Category sections */}
      {categories.map((category) => {
        const items = getItemsByCategory(category.id)
        return (
          <section key={category.id} className="mt-14 scroll-mt-20" id={category.id}>
            <div className="flex items-center gap-2.5">
              <span className="flex size-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <HugeiconsIcon icon={category.icon} className="size-4.5" />
              </span>
              <div>
                <h2 className="text-lg font-semibold">{category.label}</h2>
                <p className="text-sm text-muted-foreground">
                  {category.description}
                </p>
              </div>
              <Badge variant="outline" className="ms-auto">
                {items.length}
              </Badge>
            </div>

            <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {items.map((item) => (
                <Link
                  key={item.slug}
                  href={`/c/${item.slug}`}
                  className="group flex flex-col gap-3 rounded-2xl border bg-card p-5 transition-all hover:-translate-y-0.5 hover:border-ring hover:shadow-md"
                >
                  <span className="flex size-10 items-center justify-center rounded-xl border bg-background text-foreground transition-colors group-hover:border-primary/40 group-hover:bg-primary/5 group-hover:text-primary">
                    <HugeiconsIcon icon={item.icon} className="size-5" />
                  </span>
                  <div className="flex flex-1 flex-col gap-1">
                    <h3 className="font-medium">{item.title}</h3>
                    <p className="line-clamp-2 text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                  <span className="flex items-center gap-1 text-sm font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100">
                    View component
                    <HugeiconsIcon
                      icon={ArrowRight01Icon}
                      className="size-4 rtl:rotate-180"
                    />
                  </span>
                </Link>
              ))}
            </div>
          </section>
        )
      })}
    </div>
  )
}
