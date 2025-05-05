"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function MailingList() {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("loading")

    // This would connect to your actual mailing list service
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))
      setStatus("success")
      setEmail("")
    } catch (error) {
      setStatus("error")
    }
  }

  return (
    <section className="space-y-4">
      <div>
        <p className="text-xs text-lightest">Join Our Community</p>
        <p className="mt-2 text-xs text-lightest/80">
          Subscribe to our newsletter to stay updated with Capi events and announcements.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-col sm:flex-row gap-3">
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="bg-darker border-medium text-lightest text-xs h-8"
          />
          <Button
            type="submit"
            disabled={status === "loading"}
            className="bg-medium hover:bg-lighter text-lightest text-xs h-8"
          >
            {status === "loading" ? "Subscribing..." : "Subscribe"}
          </Button>
        </div>

        {status === "success" && <p className="text-xs text-green-400">Thank you for subscribing!</p>}

        {status === "error" && <p className="text-xs text-red-400">Something went wrong. Please try again.</p>}
      </form>
    </section>
  )
}
