import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"

import "./globals.css"
import { cn } from "@/lib/utils"
import { siteConfig } from "@/lib/site"
import { ThemeProvider } from "@/components/theme-provider"
import { TooltipProvider } from "@/components/ui/tooltip"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import {
  SearchCommand,
  SearchCommandProvider,
} from "@/components/search-command"
import { SiteHeader } from "@/components/site-header"
import { Toaster } from "@/components/ui/sonner"

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" })

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.title} — AI, media & code components`,
    template: `%s — ${siteConfig.name}`,
  },
  description: siteConfig.description,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "antialiased",
        fontMono.variable,
        "font-sans",
        geist.variable
      )}
    >
      <body>
        <ThemeProvider>
          <SearchCommandProvider>
          <TooltipProvider delayDuration={0}>
          <SidebarProvider
      style={
        {
          "--sidebar-width": "calc(var(--spacing) * 72)",
          "--header-height": "calc(var(--spacing) * 12)",
        } as React.CSSProperties
      }
    >              <AppSidebar />
              <SidebarInset>
                <SiteHeader />
                {children}
              </SidebarInset>
            </SidebarProvider>
          </TooltipProvider>
          <SearchCommand />
          </SearchCommandProvider>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
