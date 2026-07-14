import { HugeiconsIcon } from "@hugeicons/react"
import {
  ArrowUpRight01Icon,
  Certificate01Icon,
} from "@hugeicons/core-free-icons"

import { cn } from "@/lib/utils"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemMedia,
  ItemSeparator,
  ItemTitle,
} from "@/components/ui/item"

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
    <Card
      className={cn("w-full max-w-md [--card-spacing:--spacing(6)]", className)}
    >
      <CardHeader>
        <CardTitle className="font-semibold tracking-tight">
          Certifications
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ItemGroup className="gap-0">
          {certs.map((cert, i) => (
            <div key={cert.name}>
              {i > 0 ? <ItemSeparator /> : null}
              <Item asChild size="sm" className="group px-0">
                <a href={cert.href ?? "#"}>
                  <ItemMedia
                    variant="icon"
                    className="size-10 rounded-xl bg-primary/10 text-primary"
                  >
                    <HugeiconsIcon icon={Certificate01Icon} className="size-5" />
                  </ItemMedia>
                  <ItemContent>
                    <ItemTitle>{cert.name}</ItemTitle>
                    <ItemDescription className="text-xs">
                      {cert.issuer} · {cert.year}
                    </ItemDescription>
                  </ItemContent>
                  <ItemActions>
                    <HugeiconsIcon
                      icon={ArrowUpRight01Icon}
                      className="size-4 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100"
                    />
                  </ItemActions>
                </a>
              </Item>
            </div>
          ))}
        </ItemGroup>
      </CardContent>
    </Card>
  )
}
