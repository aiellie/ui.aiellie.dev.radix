"use client"

import { toast } from "sonner"
import { Button } from "@/components/ui/button"

export default function SonnerExample() {
  return (
    <div className="grid w-full max-w-md grid-cols-2 gap-2">
      <Button
        variant="outline"
        onClick={() => toast.success("Response copied to clipboard")}
      >
        Copy response
      </Button>
      <Button
        variant="outline"
        onClick={() => toast("Saved to memory", { description: "The assistant will remember this." })}
      >
        Save to memory
      </Button>
      <Button
        variant="outline"
        onClick={() =>
          toast.error("Rate limit reached", {
            description: "Try again in 30 seconds.",
          })
        }
      >
        Trigger error
      </Button>
      <Button
        variant="outline"
        onClick={() =>
          toast.promise(
            new Promise((resolve) => setTimeout(resolve, 1800)),
            {
              loading: "Generating image…",
              success: "Image ready",
              error: "Generation failed",
            }
          )
        }
      >
        Generate image
      </Button>
    </div>
  )
}
