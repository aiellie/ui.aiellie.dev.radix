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

export function PrivacyPolicyDialog({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>Privacy Policy</DialogTitle>
          <DialogDescription>Last updated June 23, 2026</DialogDescription>
        </DialogHeader>
        <ScrollArea className="-mx-6 max-h-[60vh] px-6">
          <div className="space-y-4 text-sm text-muted-foreground">
            <section className="space-y-2">
              <h3 className="font-medium text-foreground">
                1. Information We Collect
              </h3>
              <p>
                We collect information you provide directly to us, such as your
                name and email address when you create an account, as well as
                information collected automatically, including usage data and
                device information.
              </p>
            </section>
            <section className="space-y-2">
              <h3 className="font-medium text-foreground">
                2. How We Use Your Information
              </h3>
              <p>
                We use the information we collect to provide, maintain, and
                improve our services, to communicate with you, to personalize
                your experience, and to protect the security of our services.
              </p>
            </section>
            <section className="space-y-2">
              <h3 className="font-medium text-foreground">
                3. Sharing of Information
              </h3>
              <p>
                We do not sell your personal information. We may share
                information with service providers who process data on our
                behalf, and when required by law or to protect our rights.
              </p>
            </section>
            <section className="space-y-2">
              <h3 className="font-medium text-foreground">
                4. Cookies and Tracking
              </h3>
              <p>
                We use cookies and similar technologies to remember your
                preferences, understand how you use our services, and improve
                your experience. You can control cookies through your browser
                settings.
              </p>
            </section>
            <section className="space-y-2">
              <h3 className="font-medium text-foreground">5. Data Retention</h3>
              <p>
                We retain your personal information for as long as your account
                is active or as needed to provide you with the services, comply
                with our legal obligations, resolve disputes, and enforce our
                agreements.
              </p>
            </section>
            <section className="space-y-2">
              <h3 className="font-medium text-foreground">6. Your Rights</h3>
              <p>
                Depending on your location, you may have the right to access,
                correct, or delete your personal information, as well as to
                object to or restrict certain processing of your data. Contact
                us to exercise these rights.
              </p>
            </section>
            <section className="space-y-2">
              <h3 className="font-medium text-foreground">7. Contact Us</h3>
              <p>
                If you have any questions about this Privacy Policy or our data
                practices, please contact us through the support channels listed
                on our website.
              </p>
            </section>
          </div>
        </ScrollArea>
        <DialogFooter>
          <DialogClose asChild>
            <Button>Close</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
