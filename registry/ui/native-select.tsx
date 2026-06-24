"use client"

import {
  NativeSelect,
  NativeSelectOptGroup,
  NativeSelectOption,
} from "@/components/ui/native-select"
import { Label } from "@/components/ui/label"

export default function NativeSelectExample() {
  return (
    <div className="w-full max-w-xs space-y-2">
      <Label htmlFor="tier">Model tier</Label>
      <NativeSelect id="tier" defaultValue="balanced" className="w-full">
        <NativeSelectOptGroup label="Recommended">
          <NativeSelectOption value="balanced">Balanced — GPT-4o</NativeSelectOption>
          <NativeSelectOption value="fast">Fast — GPT-4o mini</NativeSelectOption>
        </NativeSelectOptGroup>
        <NativeSelectOptGroup label="Advanced">
          <NativeSelectOption value="reasoning">Reasoning — o3</NativeSelectOption>
          <NativeSelectOption value="local">Local — Llama 3.1 8B</NativeSelectOption>
        </NativeSelectOptGroup>
      </NativeSelect>
      <p className="text-xs text-muted-foreground">
        A lightweight native control — ideal on mobile.
      </p>
    </div>
  )
}
