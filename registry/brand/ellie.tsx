import React from "react"

import { Orb } from "./orb"

/**
 * Ellie — the AIEllie orb turned character. The real iridescent Orb with a
 * face layered on top: a calm, happy, or winking pair of eyes, a gentle idle
 * bob, and a periodic blink. Honors `prefers-reduced-motion`.
 */

export type EllieExpression = "calm" | "happy" | "wink"

const EYE = "#2a1f57" // deep indigo — reads on the iridescent surface

const CSS = `
@keyframes ae-ellie-bob{0%,100%{transform:translateY(0)}50%{transform:translateY(-2.5px)}}
@keyframes ae-ellie-blink{0%,90%,100%{transform:scaleY(1)}94%{transform:scaleY(.12)}97%{transform:scaleY(1)}}
.ae-ellie{position:relative;display:inline-block;line-height:0;flex-shrink:0;}
.ae-ellie[data-bob="true"]{animation:ae-ellie-bob 4s ease-in-out infinite;}
.ae-ellie-face{position:absolute;inset:0;width:100%;height:100%;pointer-events:none;}
.ae-ellie-eyes{transform-box:fill-box;transform-origin:center;}
.ae-ellie[data-blink="true"] .ae-ellie-eyes{animation:ae-ellie-blink 5.6s ease-in-out infinite;}
@media (prefers-reduced-motion:reduce){
  .ae-ellie[data-bob="true"],
  .ae-ellie[data-blink="true"] .ae-ellie-eyes{animation:none;}
}
`

if (typeof document !== "undefined" && !document.getElementById("ae-ellie-styles")) {
  const el = document.createElement("style")
  el.id = "ae-ellie-styles"
  el.textContent = CSS
  document.head.appendChild(el)
}

function Face({ expression }: { expression: EllieExpression }) {
  return (
    <svg className="ae-ellie-face" viewBox="0 0 100 100" aria-hidden="true">
      <g className="ae-ellie-eyes">
        {expression === "calm" && (
          <>
            <ellipse cx={40} cy={53} rx={5} ry={6.4} fill={EYE} />
            <ellipse cx={60} cy={53} rx={5} ry={6.4} fill={EYE} />
            <circle cx={38.1} cy={50} r={1.6} fill="#fff" fillOpacity={0.92} />
            <circle cx={58.1} cy={50} r={1.6} fill="#fff" fillOpacity={0.92} />
          </>
        )}
        {expression === "happy" && (
          <>
            <path d="M33 56 Q40 48 47 56" fill="none" stroke={EYE} strokeWidth={4} strokeLinecap="round" />
            <path d="M53 56 Q60 48 67 56" fill="none" stroke={EYE} strokeWidth={4} strokeLinecap="round" />
          </>
        )}
        {expression === "wink" && (
          <>
            <ellipse cx={40} cy={53} rx={5} ry={6.4} fill={EYE} />
            <circle cx={38.1} cy={50} r={1.6} fill="#fff" fillOpacity={0.92} />
            <path d="M53 54 Q60 49 67 54" fill="none" stroke={EYE} strokeWidth={4} strokeLinecap="round" />
          </>
        )}
      </g>
    </svg>
  )
}

export interface EllieProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Diameter in px. */
  size?: number
  /** Eye expression. */
  expression?: EllieExpression
  /** Idle vertical bob. */
  bob?: boolean
  /** Periodic blink. */
  blink?: boolean
}

export function Ellie({
  size = 96,
  expression = "happy",
  bob = true,
  blink = true,
  className = "",
  style,
  ...props
}: EllieProps) {
  return (
    <span
      className={`ae-ellie ${className}`.trim()}
      data-bob={bob ? "true" : "false"}
      data-blink={blink ? "true" : "false"}
      style={{ width: size, height: size, ...style }}
      role="img"
      aria-label={`Ellie, ${expression}`}
      {...props}
    >
      <Orb size={size} />
      <Face expression={expression} />
    </span>
  )
}

export default Ellie
