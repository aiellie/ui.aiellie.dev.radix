"use client"

import { cn } from "@/lib/utils"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const variations = [
  "bg-gradient-to-br from-amber-400 to-rose-500",
  "bg-gradient-to-br from-sky-400 to-indigo-600",
  "bg-gradient-to-br from-emerald-400 to-teal-600",
  "bg-gradient-to-br from-fuchsia-500 to-purple-700",
]

export default function CarouselExample() {
  return (
    <div className="w-full max-w-xs space-y-3">
      <p className="text-center text-sm text-muted-foreground">
        4 variations for{" "}
        <span className="font-medium text-foreground">
          “a fox in a spacesuit”
        </span>
      </p>
      <Carousel className="w-full">
        <CarouselContent>
          {variations.map((grad, i) => (
            <CarouselItem key={i}>
              <div
                className={cn(
                  "flex aspect-square items-end rounded-xl p-3 text-sm font-medium text-white shadow-inner",
                  grad
                )}
              >
                Variation {i + 1}
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <p className="text-center text-xs text-muted-foreground">
        Swipe or use the arrows · tap to upscale
      </p>
    </div>
  )
}
