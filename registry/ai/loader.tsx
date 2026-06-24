import {
    Loader,
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
  
  const SIZES = ["sm", "md", "lg"] as const
  
  const VARIANTS = [
    {
      id: "circular",
      label: "Circular",
      render: (size: typeof SIZES[number]) => <CircularLoader size={size} />,
    },
    {
      id: "classic",
      label: "Classic",
      render: (size: typeof SIZES[number]) => <ClassicLoader size={size} />,
    },
    {
      id: "vercel",
      label: "Vercel",
      render: (size: typeof SIZES[number]) => <VercelLoader size={size} />,
    },
    {
      id: "pulse",
      label: "Pulse",
      render: (size: typeof SIZES[number]) => <PulseLoader size={size} />,
    },
    {
      id: "pulse-dot",
      label: "Pulse dot",
      render: (size: typeof SIZES[number]) => <PulseDotLoader size={size} />,
    },
    {
      id: "dots",
      label: "Dots",
      render: (size: typeof SIZES[number]) => <DotsLoader size={size} />,
    },
    {
      id: "typing",
      label: "Typing",
      render: (size: typeof SIZES[number]) => <TypingLoader size={size} />,
    },
    {
      id: "wave",
      label: "Wave",
      render: (size: typeof SIZES[number]) => <WaveLoader size={size} />,
    },
    {
      id: "bars",
      label: "Bars",
      render: (size: typeof SIZES[number]) => <BarsLoader size={size} />,
    },
    {
      id: "terminal",
      label: "Terminal",
      render: (size: typeof SIZES[number]) => <TerminalLoader size={size} />,
    },
    {
      id: "text-blink",
      label: "Text blink",
      render: (size: typeof SIZES[number]) => (
        <TextBlinkLoader text="Thinking" size={size} />
      ),
    },
    {
      id: "text-shimmer",
      label: "Text shimmer",
      render: (size: typeof SIZES[number]) => (
        <TextShimmerLoader text="Thinking" size={size} />
      ),
    },
    {
      id: "loading-dots",
      label: "Loading dots",
      render: (size: typeof SIZES[number]) => (
        <TextDotsLoader text="Thinking" size={size} />
      ),
    },
  ] as const
  
  export default function LoaderDemo() {
    return (
      <div className="p-8 space-y-2">
        {/* Header row */}
        <div className="grid grid-cols-[180px_1fr_1fr_1fr] gap-4 pb-2 border-b">
          <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
            Variant
          </span>
          {SIZES.map((s) => (
            <span
              key={s}
              className="text-xs font-medium text-muted-foreground uppercase tracking-wide text-center"
            >
              {s}
            </span>
          ))}
        </div>
  
        {/* Rows */}
        {VARIANTS.map(({ id, label, render }) => (
          <div
            key={id}
            className="grid grid-cols-[180px_1fr_1fr_1fr] gap-4 items-center py-3 border-b border-border/50 last:border-0"
          >
            <span className="text-sm text-muted-foreground font-mono">{label}</span>
            {SIZES.map((s) => (
              <div key={s} className="flex items-center justify-center">
                {render(s)}
              </div>
            ))}
          </div>
        ))}
      </div>
    )
  }