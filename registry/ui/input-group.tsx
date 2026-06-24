"use client"

import { HugeiconsIcon } from "@hugeicons/react"
import {
  Attachment01Icon,
  Mic01Icon,
  SentIcon,
  Globe02Icon,
} from "@hugeicons/core-free-icons"

import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupTextarea,
  InputGroupText,
} from "@/components/ui/input-group"

export default function InputGroupExample() {
  return (
    <InputGroup className="w-full max-w-xl">
      <InputGroupTextarea placeholder="Message aiellie…" rows={2} />
      <InputGroupAddon align="block-end">
        <InputGroupButton size="icon-xs" aria-label="Attach file">
          <HugeiconsIcon icon={Attachment01Icon} strokeWidth={2} />
        </InputGroupButton>
        <InputGroupButton size="xs">
          <HugeiconsIcon icon={Globe02Icon} strokeWidth={2} />
          Search
        </InputGroupButton>
        <InputGroupButton size="icon-xs" aria-label="Dictate">
          <HugeiconsIcon icon={Mic01Icon} strokeWidth={2} />
        </InputGroupButton>
        <InputGroupText className="ms-auto font-mono text-xs">⌘↵</InputGroupText>
        <InputGroupButton
          size="icon-xs"
          variant="default"
          aria-label="Send message"
        >
          <HugeiconsIcon icon={SentIcon} strokeWidth={2} className="rtl:-scale-x-100" />
        </InputGroupButton>
      </InputGroupAddon>
    </InputGroup>
  )
}
