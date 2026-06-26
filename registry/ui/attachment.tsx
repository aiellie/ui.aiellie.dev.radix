"use client"

import { HugeiconsIcon } from "@hugeicons/react"
import {
  Cancel01Icon,
  Download04Icon,
  File01Icon,
  FileCodeIcon,
  TableIcon,
} from "@hugeicons/core-free-icons"

import {
  Attachment,
  AttachmentAction,
  AttachmentActions,
  AttachmentContent,
  AttachmentDescription,
  AttachmentGroup,
  AttachmentMedia,
  AttachmentTitle,
} from "@/components/ui/attachment"

export default function AttachmentExample() {
  return (
    <div className="w-full max-w-md space-y-4">
      <Attachment>
        <AttachmentMedia>
          <HugeiconsIcon icon={File01Icon} strokeWidth={2} />
        </AttachmentMedia>
        <AttachmentContent>
          <AttachmentTitle>q3-revenue-summary.pdf</AttachmentTitle>
          <AttachmentDescription>PDF · 2.4 MB</AttachmentDescription>
        </AttachmentContent>
        <AttachmentActions>
          <AttachmentAction aria-label="Download q3-revenue-summary.pdf">
            <HugeiconsIcon icon={Download04Icon} strokeWidth={2} />
          </AttachmentAction>
        </AttachmentActions>
      </Attachment>

      <Attachment state="uploading">
        <AttachmentMedia>
          <HugeiconsIcon icon={TableIcon} strokeWidth={2} />
        </AttachmentMedia>
        <AttachmentContent>
          <AttachmentTitle>training-set.csv</AttachmentTitle>
          <AttachmentDescription>Uploading · 64%</AttachmentDescription>
        </AttachmentContent>
        <AttachmentActions>
          <AttachmentAction aria-label="Cancel upload">
            <HugeiconsIcon icon={Cancel01Icon} strokeWidth={2} />
          </AttachmentAction>
        </AttachmentActions>
      </Attachment>

      <Attachment state="error">
        <AttachmentMedia>
          <HugeiconsIcon icon={FileCodeIcon} strokeWidth={2} />
        </AttachmentMedia>
        <AttachmentContent>
          <AttachmentTitle>embeddings.json</AttachmentTitle>
          <AttachmentDescription>
            Upload failed — file exceeds 25 MB limit
          </AttachmentDescription>
        </AttachmentContent>
        <AttachmentActions>
          <AttachmentAction aria-label="Remove embeddings.json">
            <HugeiconsIcon icon={Cancel01Icon} strokeWidth={2} />
          </AttachmentAction>
        </AttachmentActions>
      </Attachment>

      <AttachmentGroup>
        {[
          "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=400&auto=format&fit=crop&q=80",
          "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&auto=format&fit=crop&q=80",
          "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&auto=format&fit=crop&q=80",
        ].map((src, i) => (
          <Attachment key={src} orientation="vertical">
            <AttachmentMedia variant="image">
              <img src={src} alt={`Reference ${i + 1}`} />
            </AttachmentMedia>
            <AttachmentContent>
              <AttachmentTitle>reference-{i + 1}.png</AttachmentTitle>
              <AttachmentDescription>PNG · 820 KB</AttachmentDescription>
            </AttachmentContent>
          </Attachment>
        ))}
      </AttachmentGroup>
    </div>
  )
}
