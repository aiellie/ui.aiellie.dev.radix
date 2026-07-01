import {
  CircularLoader,
  ClassicLoader,
  VercelLoader,
  PulseLoader,
  PulseDotLoader,
  DotsLoader,
  TypingLoader,
  WaveLoader,
  BarsLoader,
  TerminalLoader,
  TextBlinkLoader,
  TextShimmerLoader,
  TextDotsLoader,
} from "@/components/ui/loader"

export default function LoaderDemo() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-8 p-8">
      <CircularLoader />
      <ClassicLoader />
      <VercelLoader />
      <PulseLoader />
      <PulseDotLoader />
      <DotsLoader />
      <TypingLoader />
      <WaveLoader />
      <BarsLoader />
      <TerminalLoader />
      <TextBlinkLoader text="Thinking" />
      <TextShimmerLoader text="Thinking" />
      <TextDotsLoader text="Thinking" />
    </div>
  )
}
