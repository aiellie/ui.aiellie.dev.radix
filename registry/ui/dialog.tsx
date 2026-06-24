"use client"

import { toast } from "sonner"
import { HugeiconsIcon } from "@hugeicons/react"
import { Share08Icon, Copy01Icon } from "@hugeicons/core-free-icons"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"

const shareUrl = "https://aiellie.chat/s/9f2a7c41"

export default function DialogExample() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">
          <HugeiconsIcon icon={Share08Icon} strokeWidth={2} />
          Share chat
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Share this chat</DialogTitle>
          <DialogDescription>
            Anyone with the link can view this conversation up to now and
            continue it in their own copy.
          </DialogDescription>
        </DialogHeader>
        <div className="flex items-center gap-2">
          <Input readOnly value={shareUrl} className="font-mono text-xs" />
          <Button
            type="button"
            onClick={() => {
              navigator.clipboard?.writeText(shareUrl)
              toast.success("Share link copied to clipboard")
            }}
          >
            <HugeiconsIcon icon={Copy01Icon} strokeWidth={2} />
            Copy
          </Button>
        </div>
        <DialogFooter className="sm:justify-between">
          <span className="text-xs text-muted-foreground">
            New messages stay private until you re-share.
          </span>
          <DialogClose asChild>
            <Button variant="ghost">Done</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
