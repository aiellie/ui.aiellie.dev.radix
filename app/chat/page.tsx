import type { Metadata } from "next"

import { Chat } from "@/registry/blocks/chat"

export const metadata: Metadata = {
  title: "Chat",
  description:
    "A full-page chat experience composed from the AI building blocks — messages, reasoning, tools, sources, and a composer.",
}

export default function ChatPage() {
  // Fill the viewport below the sticky 3.5rem (h-14) site header.
  return (
    <div className="h-[calc(100svh-3.5rem)]">
      <Chat />
    </div>
  )
}
