"use client"

import * as React from "react"
import { HugeiconsIcon } from "@hugeicons/react"
import { CheckmarkCircle02Icon } from "@hugeicons/core-free-icons"

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp"
import { Button } from "@/components/ui/button"

export default function InputOtpExample() {
  const [value, setValue] = React.useState("")
  const complete = value.length === 6

  return (
    <div className="flex w-full max-w-sm flex-col items-center gap-4 text-center">
      <div className="space-y-1">
        <p className="text-sm font-medium">Verify it&apos;s you</p>
        <p className="text-xs text-muted-foreground">
          Enter the 6-digit code to unlock the agent&apos;s billing tools.
        </p>
      </div>
      <InputOTP maxLength={6} value={value} onChange={setValue}>
        <InputOTPGroup>
          <InputOTPSlot index={0} />
          <InputOTPSlot index={1} />
          <InputOTPSlot index={2} />
        </InputOTPGroup>
        <InputOTPSeparator />
        <InputOTPGroup>
          <InputOTPSlot index={3} />
          <InputOTPSlot index={4} />
          <InputOTPSlot index={5} />
        </InputOTPGroup>
      </InputOTP>
      <Button disabled={!complete} className="w-full">
        {complete ? (
          <>
            <HugeiconsIcon icon={CheckmarkCircle02Icon} strokeWidth={2} />
            Unlock
          </>
        ) : (
          "Enter code"
        )}
      </Button>
    </div>
  )
}
