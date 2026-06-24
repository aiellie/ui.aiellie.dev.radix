"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function AccordionExample() {
  return (
    <Accordion
      type="single"
      collapsible
      defaultValue="sources"
      className="w-full max-w-md"
    >
      <AccordionItem value="sources">
        <AccordionTrigger>Sources used (3)</AccordionTrigger>
        <AccordionContent className="space-y-1.5 text-muted-foreground">
          <p>1. nextjs.org — Release Blog: Next.js 16</p>
          <p>2. react.dev — You Might Not Need an Effect</p>
          <p>3. internal-architecture.pdf — page 12</p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="followups">
        <AccordionTrigger>Suggested follow-ups</AccordionTrigger>
        <AccordionContent className="space-y-1.5 text-muted-foreground">
          <p>· How do I migrate from the Pages Router?</p>
          <p>· What changed in caching behavior?</p>
          <p>· Show me a minimal example.</p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="how">
        <AccordionTrigger>How was this answered?</AccordionTrigger>
        <AccordionContent className="text-muted-foreground">
          Retrieved 3 passages, ranked by similarity, then summarized with Claude
          Opus 4.8 at temperature 0.4.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
