import React from "react"

/**
 * Orb — AIEllie's signature iridescent sphere. A pure-CSS rendition of the
 * product's WebGL orb: a pink→violet→indigo gradient with a glossy highlight
 * and an optional gentle float. Honors `prefers-reduced-motion`.
 */

const CSS = `
@keyframes ae-orb-float{0%,100%{transform:translateY(0)}50%{transform:translateY(-3px)}}
.ae-orb{position:relative;display:inline-block;border-radius:9999px;flex-shrink:0;
  background:
    radial-gradient(circle at 70% 30%, oklch(1 0 0) 0%, oklch(1 0 0 / .6) 12%, transparent 32%),
    radial-gradient(circle at 28% 72%, oklch(0.785 0.115 320 / .9) 0%, transparent 45%),
    linear-gradient(135deg,
      oklch(0.86 0.09 330) 0%,
      oklch(0.80 0.12 300) 32%,
      oklch(0.70 0.16 282) 60%,
      oklch(0.585 0.233 277.117) 100%);
  box-shadow:
    inset -4px -6px 14px oklch(0.398 0.195 277.366 / .35),
    inset 4px 5px 12px oklch(1 0 0 / .6);}
.ae-orb[data-float="true"]{animation:ae-orb-float 4s var(--ease-in-out,ease-in-out) infinite;}
@media (prefers-reduced-motion:reduce){.ae-orb[data-float="true"]{animation:none;}}
`

if (typeof document !== "undefined" && !document.getElementById("ae-orb-styles")) {
  const el = document.createElement("style")
  el.id = "ae-orb-styles"
  el.textContent = CSS
  document.head.appendChild(el)
}

export interface OrbProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Diameter in px. */
  size?: number
  /** Gentle 4s vertical float. */
  float?: boolean
  /** Apply the brand `--shadow-glow`. */
  glow?: boolean
}

export function Orb({
  size = 32,
  float = false,
  glow = false,
  className = "",
  style,
  ...props
}: OrbProps) {
  return (
    <span
      className={`ae-orb ${className}`.trim()}
      data-float={float ? "true" : "false"}
      style={{
        width: size,
        height: size,
        boxShadow: glow ? "var(--shadow-glow)" : undefined,
        ...style,
      }}
      role="img"
      aria-label="AIEllie orb"
      {...props}
    />
  )
}

export default Orb
