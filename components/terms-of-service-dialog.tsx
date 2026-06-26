"use client"

import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { ScrollArea } from "@/components/ui/scroll-area"

export function TermsOfServiceDialog({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>Terms of Service</DialogTitle>
          <DialogDescription>Last updated June 23, 2026</DialogDescription>
        </DialogHeader>
        <ScrollArea className="-mx-6 max-h-[60vh] px-6">
          <div className="space-y-4 text-sm text-muted-foreground">
            <section className="space-y-2">
              <h3 className="font-medium text-foreground">
                1. Acceptance of Terms
              </h3>
              <p>
                By creating an account or otherwise using our services, you
                agree to be bound by these Terms of Service. If you do not agree
                to these terms, you may not access or use the services.
              </p>
            </section>
            <section className="space-y-2">
              <h3 className="font-medium text-foreground">2. Your Account</h3>
              <p>
                You are responsible for maintaining the confidentiality of your
                account credentials and for all activity that occurs under your
                account. You must notify us immediately of any unauthorized use.
              </p>
            </section>
            <section className="space-y-2">
              <h3 className="font-medium text-foreground">
                3. Acceptable Use
              </h3>
              <p>
                You agree not to misuse the services, including by interfering
                with their normal operation, attempting to access them using a
                method other than the interface and instructions we provide, or
                using them for any unlawful purpose.
              </p>
            </section>
            <section className="space-y-2">
              <h3 className="font-medium text-foreground">
                4. Intellectual Property
              </h3>
              <p>
                The services and their original content, features, and
                functionality are and will remain the exclusive property of the
                company and its licensors. Nothing in these terms grants you a
                right to use our trademarks without prior written consent.
              </p>
            </section>
            <section className="space-y-2">
              <h3 className="font-medium text-foreground">5. Termination</h3>
              <p>
                We may suspend or terminate your access to the services at any
                time, with or without cause and with or without notice. Upon
                termination, your right to use the services will immediately
                cease.
              </p>
            </section>
            <section className="space-y-2">
              <h3 className="font-medium text-foreground">
                6. Limitation of Liability
              </h3>
              <p>
                To the maximum extent permitted by law, in no event shall the
                company be liable for any indirect, incidental, special,
                consequential, or punitive damages arising out of or related to
                your use of the services.
              </p>
            </section>
            <section className="space-y-2">
              <h3 className="font-medium text-foreground">
                7. Changes to These Terms
              </h3>
              <p>
                We may update these terms from time to time. We will notify you
                of any material changes by posting the new terms on this page.
                Your continued use of the services after changes take effect
                constitutes acceptance of the revised terms.
              </p>
            </section>
          </div>
        </ScrollArea>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Close</Button>
          </DialogClose>
          <DialogClose asChild>
            <Button>I Agree</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
