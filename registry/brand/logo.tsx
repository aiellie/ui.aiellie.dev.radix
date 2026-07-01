import { useId, type ComponentProps, type ElementType } from "react";

import { cn } from "@/lib/utils";

export function LogoIcon({
  className,
  ...props
}: ComponentProps<"svg">) {
  const id = useId().replace(/:/g, "");
  const orb = `${id}-orb`;
  const shade = `${id}-shade`;
  const spec = `${id}-spec`;
  const orbBw = `${id}-orb-bw`;
  const shadeBw = `${id}-shade-bw`;
  const specBw = `${id}-spec-bw`;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      className={cn("size-8 shrink-0", className)}
      {...props}
    >
      <defs>
        <radialGradient id={orb} cx="36%" cy="30%" r="74%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="20%" stopColor="#fce7f3" />
          <stop offset="46%" stopColor="#e9d5ff" />
          <stop offset="73%" stopColor="#c4b5fd" />
          <stop offset="100%" stopColor="#a5b4fc" />
        </radialGradient>
        <radialGradient id={shade} cx="30%" cy="80%" r="58%">
          <stop offset="58%" stopColor="#8b7ff0" stopOpacity={0} />
          <stop offset="100%" stopColor="#7d6fe8" stopOpacity={0.42} />
        </radialGradient>
        <radialGradient id={spec} cx="68%" cy="22%" r="26%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity={0.95} />
          <stop offset="100%" stopColor="#ffffff" stopOpacity={0} />
        </radialGradient>
        <radialGradient id={orbBw} cx="36%" cy="30%" r="74%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="34%" stopColor="#e4e4e7" />
          <stop offset="70%" stopColor="#a1a1aa" />
          <stop offset="100%" stopColor="#52525b" />
        </radialGradient>
        <radialGradient id={shadeBw} cx="30%" cy="82%" r="58%">
          <stop offset="54%" stopColor="#18181b" stopOpacity={0} />
          <stop offset="100%" stopColor="#18181b" stopOpacity={0.45} />
        </radialGradient>
        <radialGradient id={specBw} cx="68%" cy="22%" r="26%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity={0.95} />
          <stop offset="100%" stopColor="#ffffff" stopOpacity={0} />
        </radialGradient>
      </defs>

      <g className="group-hover:hidden dark:hidden">
        <circle cx="50" cy="50" r="48" fill={`url(#${orb})`} />
        <circle cx="50" cy="50" r="48" fill={`url(#${shade})`} />
        <circle cx="50" cy="50" r="48" fill={`url(#${spec})`} />
        <g fill="#2a1f57">
          <ellipse cx="40" cy="53" rx="5" ry="6.4" />
          <ellipse cx="60" cy="53" rx="5" ry="6.4" />
        </g>
        <g fill="#ffffff" fillOpacity={0.92}>
          <circle cx="38.1" cy="50" r="1.6" />
          <circle cx="58.1" cy="50" r="1.6" />
        </g>
      </g>

      <g className="hidden group-hover:block dark:group-hover:hidden">
        <circle cx="50" cy="50" r="48" fill={`url(#${orb})`} />
        <circle cx="50" cy="50" r="48" fill={`url(#${shade})`} />
        <circle cx="50" cy="50" r="48" fill={`url(#${spec})`} />
        <ellipse cx="40" cy="53" rx="5" ry="6.4" fill="#2a1f57" />
        <circle cx="38.1" cy="50" r="1.6" fill="#ffffff" fillOpacity={0.92} />
        <path
          d="M53 54 Q60 49 67 54"
          fill="none"
          stroke="#2a1f57"
          strokeWidth={4}
          strokeLinecap="round"
        />
      </g>

      <g className="hidden dark:block">
        <circle cx="50" cy="50" r="48" fill={`url(#${orbBw})`} />
        <circle cx="50" cy="50" r="48" fill={`url(#${shadeBw})`} />
        <circle cx="50" cy="50" r="48" fill={`url(#${specBw})`} />
        <g fill="none" stroke="#18181b" strokeWidth={4} strokeLinecap="round">
          <path d="M33 56 Q40 48 47 56" />
          <path d="M53 56 Q60 48 67 56" />
        </g>
      </g>
    </svg>
  );
}

export function LogoWordmark({
  as: Comp = "span",
  className,
}: {
  as?: ElementType;
  className?: string;
}) {
  return (
    <Comp
      className={cn("flex items-baseline tracking-tight", className)}
    >
      <span className="bg-gradient-to-br from-white via-[#e9d5ff] to-[#7d6fe8] bg-clip-text text-transparent dark:from-zinc-50 dark:via-zinc-300 dark:to-zinc-500">
        AI
      </span>
      <span className="bg-gradient-to-b from-[#2a1f57] to-[#6d5fd6] bg-clip-text text-transparent dark:from-zinc-100 dark:to-zinc-400">
        Ellie
      </span>
    </Comp>
  );
}

export function Logo() {
  return (
    <div className="group flex items-center gap-2">
      <LogoIcon role="img" aria-label="Brand logo" />
      <LogoWordmark as="h1" className="text-[1.05rem] font-bold" />
    </div>
  );
}
