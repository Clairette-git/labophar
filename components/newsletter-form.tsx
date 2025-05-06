"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { subscribeToNewsletter } from "@/app/actions/newsletter"
import { Loader2 } from "lucide-react"

export function NewsletterForm() {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<{
    type: "success" | "error" | "loading" | null
    message: string
  }>({
    type: null,
    message: "",
  })

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus({ type: "loading", message: "Subscribing..." })

    const formData = new FormData()
    formData.append("email", email)

    const result = await subscribeToNewsletter(formData)

    if (result.success) {
      setStatus({ type: "success", message: result.message })
      setEmail("")
    } else {
      setStatus({ type: "error", message: result.message })
    }

    // Clear status after 5 seconds
    setTimeout(() => {
      setStatus({ type: null, message: "" })
    }, 5000)
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-2">
      <Input
        type="email"
        placeholder="Your email address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 text-white"
        required
        aria-label="Email address for newsletter"
        disabled={status.type === "loading"}
      />
      <Button
        type="submit"
        className="px-4 py-2 bg-teal-600 text-white rounded-md hover:bg-teal-700 transition-colors flex items-center justify-center"
        disabled={status.type === "loading"}
      >
        {status.type === "loading" ? (
          <>
            <Loader2 className="h-4 w-4 mr-2 animate-spin" />
            Subscribing...
          </>
        ) : (
          "Subscribe"
        )}
      </Button>

      {status.type && (
        <div
          className={`mt-2 text-sm ${
            status.type === "success" ? "text-green-400" : status.type === "error" ? "text-red-400" : "text-gray-400"
          }`}
        >
          {status.message}
        </div>
      )}
    </form>
  )
}
