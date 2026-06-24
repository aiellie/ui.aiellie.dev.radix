import { HugeiconsIcon } from "@hugeicons/react"
import { PlayIcon } from "@hugeicons/core-free-icons"

import { cn } from "@/lib/utils"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

export interface VideoCardProps {
  title?: string
  channel?: string
  channelAvatar?: string
  views?: string
  age?: string
  duration?: string
  thumbnail?: string
  gradient?: string
  className?: string
}

export function VideoCard({
  title = "Designing a component registry from scratch",
  channel = "shadcn",
  channelAvatar,
  views = "128K views",
  age = "3 days ago",
  duration = "12:48",
  thumbnail,
  gradient = "from-indigo-500 via-purple-500 to-pink-500",
  className,
}: VideoCardProps) {
  return (
    <div className={cn("group w-full max-w-xs", className)}>
      <div className="relative aspect-video overflow-hidden rounded-xl border">
        {thumbnail ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={thumbnail}
            alt={title}
            className="size-full object-cover"
          />
        ) : (
          <div
            className={cn("size-full bg-gradient-to-br", gradient)}
            aria-hidden
          />
        )}

        <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors group-hover:bg-black/20">
          <span className="flex size-11 scale-90 items-center justify-center rounded-full bg-black/55 text-white opacity-0 backdrop-blur transition-all group-hover:scale-100 group-hover:opacity-100">
            <HugeiconsIcon icon={PlayIcon} className="size-5" />
          </span>
        </div>

        <Badge className="absolute end-2 bottom-2 bg-black/75 font-mono text-white tabular-nums">
          {duration}
        </Badge>
      </div>

      <div className="mt-3 flex gap-3">
        <Avatar className="size-9 border">
          {channelAvatar ? (
            <AvatarImage src={channelAvatar} alt={channel} />
          ) : null}
          <AvatarFallback className="bg-primary/10 text-xs font-semibold text-primary uppercase">
            {channel.charAt(0)}
          </AvatarFallback>
        </Avatar>
        <div className="flex min-w-0 flex-col">
          <h3 className="line-clamp-2 text-sm leading-snug font-medium">
            {title}
          </h3>
          <p className="mt-0.5 truncate text-xs text-muted-foreground">
            {channel}
          </p>
          <p className="truncate text-xs text-muted-foreground">
            {views} · {age}
          </p>
        </div>
      </div>
    </div>
  )
}
