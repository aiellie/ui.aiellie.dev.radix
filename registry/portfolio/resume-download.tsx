import { HugeiconsIcon } from "@hugeicons/react"
import { Download04Icon, File01Icon } from "@hugeicons/core-free-icons"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item"

export function ResumeDownload({
  name = "ellie-nakamura-cv.pdf",
  meta = "PDF · 248 KB · Updated Jun 2026",
  href = "#",
  className,
}: {
  name?: string
  meta?: string
  href?: string
  className?: string
}) {
  return (
    <Item
      asChild
      variant="outline"
      className={cn(
        "group w-full max-w-sm bg-card transition-colors hover:border-primary/40",
        className
      )}
    >
      <a href={href} download>
        <ItemMedia
          variant="icon"
          className="size-11 rounded-xl bg-red-500/10 text-red-500"
        >
          <HugeiconsIcon icon={File01Icon} className="size-5.5" />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>{name}</ItemTitle>
          <ItemDescription className="text-xs">{meta}</ItemDescription>
        </ItemContent>
        <ItemActions>
          <Button
            variant="outline"
            size="icon-lg"
            className="pointer-events-none text-muted-foreground transition-colors group-hover:bg-primary group-hover:text-primary-foreground"
            tabIndex={-1}
            aria-hidden
          >
            <HugeiconsIcon icon={Download04Icon} className="size-4.5" />
          </Button>
        </ItemActions>
      </a>
    </Item>
  )
}
