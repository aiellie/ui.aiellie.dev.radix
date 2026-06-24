"use client"

import * as React from "react"
import { HugeiconsIcon } from "@hugeicons/react"
import { SentIcon } from "@hugeicons/core-free-icons"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function InputExample() {
  const [value, setValue] = React.useState("")

  return (
    <form
      className="w-full max-w-md space-y-2"
      onSubmit={(e) => e.preventDefault()}
    >
      <label htmlFor="ask" className="text-sm font-medium">
        Ask anything
      </label>
      <div className="flex items-center gap-2">
        <Input
          id="ask"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="How do I deploy a Next.js app?"
        />
        <Button type="submit" size="icon" disabled={!value.trim()} aria-label="Send">
          <HugeiconsIcon icon={SentIcon} strokeWidth={2} className="rtl:-scale-x-100" />
        </Button>
      </div>
      <p className="text-xs text-muted-foreground">
        The assistant will answer in this thread.
      </p>
    </form>
  )
}
