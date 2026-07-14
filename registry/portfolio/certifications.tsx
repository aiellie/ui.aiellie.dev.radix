import { HugeiconsIcon } from "@hugeicons/react"
import {
  ArrowUpRight01Icon,
  Certificate01Icon,
} from "@hugeicons/core-free-icons"

import { cn } from "@/lib/utils"

type Cert = {
  name: string
  issuer: string
  year: string
  href?: string
}

const defaultCerts: Cert[] = [
  {
    name: "AWS Solutions Architect",
    issuer: "Amazon Web Services",
    year: "2025",
  },
  {
    name: "Professional Cloud Developer",
    issuer: "Google Cloud",
    year: "2024",
  },
  {
    name: "Accessibility Specialist (CPACC)",
    issuer: "IAAP",
    year: "2023",
  },
]

export function Certifications({
  certs = defaultCerts,
  className,
}: {
  certs?: Cert[]
  className?: string
}) {
  return (
    <div
      className={cn("w-full max-w-md rounded-2xl border bg-card p-6", className)}
    >
      <h2 className="font-semibold tracking-tight">Certifications</h2>
      <ul className="mt-4 flex flex-col divide-y">
        {certs.map((cert) => (
          <li key={cert.name}>
            <a
              href={cert.href ?? "#"}
              className="group flex items-center gap-3 py-3 first:pt-0 last:pb-0"
            >
              <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <HugeiconsIcon icon={Certificate01Icon} className="size-5" />
              </span>
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-medium">{cert.name}</p>
                <p className="truncate text-xs text-muted-foreground">
                  {cert.issuer} · {cert.year}
                </p>
              </div>
              <HugeiconsIcon
                icon={ArrowUpRight01Icon}
                className="size-4 shrink-0 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100"
              />
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
