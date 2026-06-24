"use client"

import { HugeiconsIcon } from "@hugeicons/react"
import { InformationCircleIcon, Alert02Icon } from "@hugeicons/core-free-icons"

import {
  Alert,
  AlertAction,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert"
import { Button } from "@/components/ui/button"

export default function AlertExample() {
  return (
    <div className="w-full max-w-md space-y-3">
      <Alert>
        <HugeiconsIcon icon={InformationCircleIcon} strokeWidth={2} />
        <AlertTitle>AI-generated — verify important details</AlertTitle>
        <AlertDescription>
          This assistant can make mistakes. Check facts, figures, and code before
          relying on them.
        </AlertDescription>
      </Alert>

      <Alert variant="destructive">
        <HugeiconsIcon icon={Alert02Icon} strokeWidth={2} />
        <AlertTitle>Daily message limit reached</AlertTitle>
        <AlertDescription>
          You&apos;ve used all free messages for today.
        </AlertDescription>
        <AlertAction>
          <Button size="sm" variant="outline">
            Upgrade
          </Button>
        </AlertAction>
      </Alert>
    </div>
  )
}
