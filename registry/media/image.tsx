"use client"

import * as React from "react"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  ArrowExpand01Icon,
  Download04Icon,
  Image01Icon,
} from "@hugeicons/core-free-icons"

import { cn } from "@/lib/utils"

export function Image({
  src,
  alt = "Generated image",
  caption = "A wide-angle shot of a misty pine forest at dawn",
  gradient = "from-emerald-400 via-teal-500 to-sky-600",
  className,
}: {
  src?: string
  alt?: string
  caption?: string
  gradient?: string
  className?: string
}) {
  const [loaded, setLoaded] = React.useState(!src)

  return (
    <figure className={cn("group w-full max-w-xs", className)}>
      <div className="relative aspect-square overflow-hidden rounded-xl border">
        {src ? (
          <>
            {!loaded ? (
              <div className="absolute inset-0 animate-pulse bg-muted" />
            ) : null}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={src}
              alt={alt}
              onLoad={() => setLoaded(true)}
              className={cn(
                "size-full object-cover transition-opacity duration-500",
                loaded ? "opacity-100" : "opacity-0"
              )}
            />
          </>
        ) : (
          <div
            className={cn(
              "flex size-full items-center justify-center bg-gradient-to-br",
              gradient
            )}
          >
            <HugeiconsIcon icon={Image01Icon} className="size-8 text-white/40" />
          </div>
        )}

        <span className="absolute start-2 top-2 rounded-full bg-black/55 px-2 py-0.5 text-[10px] font-medium text-white backdrop-blur">
          AI
        </span>

        <div className="absolute inset-x-0 bottom-0 flex items-center justify-end gap-1 bg-gradient-to-t from-black/50 to-transparent p-2 opacity-0 transition-opacity group-hover:opacity-100">
          <button
            type="button"
            aria-label="Download"
            className="flex size-7 items-center justify-center rounded-md bg-white/20 text-white backdrop-blur transition-colors hover:bg-white/30"
          >
            <HugeiconsIcon icon={Download04Icon} className="size-4" />
          </button>
          <button
            type="button"
            aria-label="Expand"
            className="flex size-7 items-center justify-center rounded-md bg-white/20 text-white backdrop-blur transition-colors hover:bg-white/30"
          >
            <HugeiconsIcon icon={ArrowExpand01Icon} className="size-4" />
          </button>
        </div>
      </div>
      {caption ? (
        <figcaption className="mt-2 text-xs leading-relaxed text-muted-foreground">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  )
}
