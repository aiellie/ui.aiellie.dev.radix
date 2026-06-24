"use client"

import {
  Field,
  FieldContent,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Switch } from "@/components/ui/switch"

export default function FieldExample() {
  return (
    <FieldSet className="w-full max-w-md">
      <FieldLegend>Assistant settings</FieldLegend>
      <FieldGroup>
        <Field orientation="horizontal">
          <FieldContent>
            <FieldLabel htmlFor="stream">Stream responses</FieldLabel>
            <FieldDescription>Show tokens as they are generated.</FieldDescription>
          </FieldContent>
          <Switch id="stream" defaultChecked />
        </Field>
        <FieldSeparator />
        <Field orientation="horizontal">
          <FieldContent>
            <FieldLabel htmlFor="memory">Long-term memory</FieldLabel>
            <FieldDescription>Let the assistant remember facts across chats.</FieldDescription>
          </FieldContent>
          <Switch id="memory" />
        </Field>
        <FieldSeparator />
        <Field>
          <FieldLabel htmlFor="stop">Stop sequence</FieldLabel>
          <Input id="stop" placeholder="e.g. \n\nUser:" className="font-mono" />
          <FieldDescription>Generation halts when this string appears.</FieldDescription>
        </Field>
      </FieldGroup>
    </FieldSet>
  )
}
