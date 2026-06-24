"use client"

import {
  Avatar,
  AvatarBadge,
  AvatarFallback,
  AvatarGroup,
  AvatarGroupCount,
  AvatarImage,
} from "@/components/ui/avatar"
import { HugeiconsIcon } from "@hugeicons/react"
import { SparklesIcon } from "@hugeicons/core-free-icons"
import { createGlassAvatarUri } from "@/lib/glass"

// Deterministic glass avatars — seed by a stable identity (name, id, email).
// Same seed → same avatar every render.
const assistantAvatar = createGlassAvatarUri("assistant", { fill: "gradient" })
const ellieAvatar = createGlassAvatarUri("ellie")
const johnAvatar = createGlassAvatarUri("john-doe")
const collaborators = ["maya-chen", "raj-patel", "lin-wu"].map((seed) => ({
  seed,
  uri: createGlassAvatarUri(seed),
}))

export default function AvatarExample() {
  return (
    <div className="flex flex-col items-center gap-8">
      <div className="flex items-end gap-8">
        <div className="flex flex-col items-center gap-2">
          <Avatar size="lg">
            <AvatarImage src={assistantAvatar} alt="Assistant" />
            <AvatarFallback className="bg-primary/10 text-primary">
              <HugeiconsIcon icon={SparklesIcon} strokeWidth={2} className="size-5" />
            </AvatarFallback>
            <AvatarBadge className="bg-emerald-500" />
          </Avatar>
          <span className="text-xs text-muted-foreground">Assistant · online</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <Avatar size="lg">
            <AvatarImage src={ellieAvatar} alt="You" />
            <AvatarFallback>EL</AvatarFallback>
            <AvatarBadge className="bg-emerald-500" />
          </Avatar>
          <span className="text-xs text-muted-foreground">You</span>
        </div>
      </div>
      <div className="flex flex-col items-center gap-2">
        <AvatarGroup>
          <Avatar>
            <AvatarImage src={assistantAvatar} alt="Assistant" />
            <AvatarFallback className="bg-primary/10 text-primary">
              <HugeiconsIcon icon={SparklesIcon} strokeWidth={2} className="size-4" />
            </AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarImage src={ellieAvatar} alt="Ellie" />
            <AvatarFallback>EL</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarImage src={johnAvatar} alt="John Doe" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          {collaborators.map((c) => (
            <Avatar key={c.seed}>
              <AvatarImage src={c.uri} alt={c.seed} />
              <AvatarFallback>{c.seed.slice(0, 2).toUpperCase()}</AvatarFallback>
            </Avatar>
          ))}
          <AvatarGroupCount>+3</AvatarGroupCount>
        </AvatarGroup>
        <span className="text-xs text-muted-foreground">
          Assistant &amp; 5 collaborators in this thread
        </span>
      </div>
    </div>
  )
}