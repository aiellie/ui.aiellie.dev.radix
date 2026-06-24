import { cn } from "@/lib/utils"

export interface TypingIndicatorProps extends React.ComponentProps<"div"> {
  label?: string
}

export function TypingIndicator({
  label,
  className,
  ...props
}: TypingIndicatorProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 rounded-full bg-muted px-3 py-2",
        className
      )}
      {...props}
    >
      <span className="flex gap-1" aria-hidden>
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            className="size-1.5 animate-bounce rounded-full bg-muted-foreground/60"
            style={{ animationDelay: `${i * 0.16}s`, animationDuration: "1s" }}
          />
        ))}
      </span>
      {label ? (
        <span className="text-xs text-muted-foreground">{label}</span>
      ) : (
        <span className="sr-only">Assistant is typing</span>
      )}
    </div>
  )
}
