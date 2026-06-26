"use client"

import { HugeiconsIcon } from "@hugeicons/react"
import {
  Copy01Icon,
  ThumbsUpIcon,
  ThumbsDownIcon,
} from "@hugeicons/core-free-icons"

import {
  Bubble,
  BubbleContent,
  BubbleGroup,
} from "@/components/ui/bubble"
import { Button } from "@/components/ui/button"
import { Marker, MarkerContent } from "@/components/ui/marker"
import {
  Message,
  MessageAvatar,
  MessageContent,
  MessageFooter,
} from "@/components/ui/message"
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import { createGlassAvatarUri } from "@/lib/glass"

const assistantAvatar = createGlassAvatarUri("assistant", { fill: "gradient" })
const userAvatar = createGlassAvatarUri("ellie")

export default function MessageExample() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-6 py-4">
      <Message align="end">
        <MessageAvatar>
          <Avatar>
            <AvatarImage src={userAvatar} alt="You" />
            <AvatarFallback>EL</AvatarFallback>
          </Avatar>
        </MessageAvatar>
        <MessageContent>
          <Bubble>
            <BubbleContent>
              Refactor the auth middleware to use the new session helper.
            </BubbleContent>
          </Bubble>
          <MessageFooter>Delivered</MessageFooter>
        </MessageContent>
      </Message>

      <Message>
        <MessageAvatar>
          <Avatar>
            <AvatarImage src={assistantAvatar} alt="Assistant" />
            <AvatarFallback>AI</AvatarFallback>
          </Avatar>
        </MessageAvatar>
        <MessageContent>
          <BubbleGroup>
            <Bubble variant="muted">
              <BubbleContent>
                Done. I swapped the manual cookie parsing for getSession().
              </BubbleContent>
            </Bubble>
            <Bubble variant="muted">
              <BubbleContent>
                It also removed 30 lines and a duplicate type. Want me to run the
                test suite?
              </BubbleContent>
            </Bubble>
          </BubbleGroup>
          <MessageFooter className="gap-1">
            <Button variant="ghost" size="icon-sm" aria-label="Copy">
              <HugeiconsIcon icon={Copy01Icon} strokeWidth={2} />
            </Button>
            <Button variant="ghost" size="icon-sm" aria-label="Like">
              <HugeiconsIcon icon={ThumbsUpIcon} strokeWidth={2} />
            </Button>
            <Button variant="ghost" size="icon-sm" aria-label="Dislike">
              <HugeiconsIcon icon={ThumbsDownIcon} strokeWidth={2} />
            </Button>
          </MessageFooter>
        </MessageContent>
      </Message>

      <Marker role="status">
        <MarkerContent className="shimmer">
          <span className="font-medium text-foreground">Assistant</span> is
          typing…
        </MarkerContent>
      </Marker>
    </div>
  )
}
