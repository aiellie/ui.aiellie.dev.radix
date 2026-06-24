"use client"

import * as React from "react"
import { HugeiconsIcon } from "@hugeicons/react"
import { Image01Icon, Maximize01Icon } from "@hugeicons/core-free-icons"

import { cn } from "@/lib/utils"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export interface GalleryImage {
  src?: string
  alt: string
  /** Tailwind gradient used as a placeholder when `src` is omitted. */
  gradient?: string
  span?: boolean
}

const DEFAULT_IMAGES: GalleryImage[] = [
  { alt: "Coastal dunes", gradient: "from-amber-300 to-rose-400" },
  { alt: "Neon alley", gradient: "from-fuchsia-500 to-indigo-500" },
  { alt: "Forest fog", gradient: "from-emerald-400 to-teal-600" },
  { alt: "Desert sky", gradient: "from-orange-400 to-pink-500" },
  { alt: "Deep ocean", gradient: "from-sky-400 to-blue-700" },
  { alt: "Lavender field", gradient: "from-violet-400 to-purple-600" },
]

export function ImageGallery({
  images = DEFAULT_IMAGES,
  className,
}: {
  images?: GalleryImage[]
  className?: string
}) {
  return (
    <Carousel className={cn("w-full max-w-xl", className)}>
      <CarouselContent>
        {images.map((image, i) => (
          <CarouselItem key={i}>
            <figure className="group relative aspect-[4/3] overflow-hidden rounded-xl border">
              {image.src ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={image.src}
                  alt={image.alt}
                  className="size-full object-cover"
                />
              ) : (
                <div
                  className={cn(
                    "flex size-full items-center justify-center bg-gradient-to-br",
                    image.gradient
                  )}
                >
                  <HugeiconsIcon
                    icon={Image01Icon}
                    className="size-6 text-white/40"
                  />
                </div>
              )}

              <figcaption className="absolute inset-0 flex items-end justify-between gap-2 bg-gradient-to-t from-black/60 to-transparent p-2.5 opacity-0 transition-opacity group-hover:opacity-100">
                <span className="text-xs font-medium text-white">
                  {image.alt}
                </span>
                <span className="flex size-6 items-center justify-center rounded-md bg-white/20 text-white backdrop-blur">
                  <HugeiconsIcon icon={Maximize01Icon} className="size-3.5" />
                </span>
              </figcaption>
            </figure>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="start-2" />
      <CarouselNext className="end-2" />
    </Carousel>
  )
}
