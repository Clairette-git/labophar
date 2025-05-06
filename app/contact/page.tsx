"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Phone } from "lucide-react"

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setSubmitSuccess(true)
    setFormState({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    })

    // Reset success message after 5 seconds
    setTimeout(() => setSubmitSuccess(false), 5000)
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-teal-700 to-teal-500 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl max-w-3xl">Get in touch with our team for inquiries about our products and services.</p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="border-none shadow-lg">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="bg-teal-100 p-4 rounded-full mb-4">
                  <MapPin className="h-6 w-6 text-teal-700" />
                </div>
                <h3 className="text-xl font-bold mb-2">Our Location</h3>
                <p className="text-gray-600">Kigali, Rwanda</p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="bg-teal-100 p-4 rounded-full mb-4">
                  <Phone className="h-6 w-6 text-teal-700" />
                </div>
                <h3 className="text-xl font-bold mb-2">Phone Number</h3>
                <p className="text-gray-600">+250 788 846 574</p>
                <p className="text-gray-600">+250 788 389 615</p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="bg-teal-100 p-4 rounded-full mb-4">
                  <Mail className="h-6 w-6 text-teal-700" />
                </div>
                <h3 className="text-xl font-bold mb-2">Email Address</h3>
                <a href="mailto:info@labophar.rw" className="text-gray-600 hover:text-teal-600">
                  info@labophar.rw
                </a>
              </CardContent>
            </Card>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Name
                    </label>
                    <Input id="name" name="name" value={formState.name} onChange={handleChange} required />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formState.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number
                    </label>
                    <Input id="phone" name="phone" value={formState.phone} onChange={handleChange} />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                      Subject
                    </label>
                    <Input id="subject" name="subject" value={formState.subject} onChange={handleChange} required />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formState.message}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div>
                  <Button
                    type="submit"
                    className="w-full md:w-auto bg-teal-600 hover:bg-teal-700"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>

                  {submitSuccess && (
                    <p className="mt-4 text-green-600 font-medium">
                      Your message has been sent successfully. We'll get back to you soon!
                    </p>
                  )}
                </div>
              </form>
            </div>

            <div className="h-[400px] md:h-auto rounded-lg overflow-hidden shadow-xl">
              {/* Google Maps iframe for Kigali, Rwanda */}
              <div className="w-full h-full relative">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63799.41091957967!2d30.03955565!3d-1.9440867!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca4258ed8e797%3A0xf32b36a5411c0180!2sKigali%2C%20Rwanda!5e0!3m2!1sen!2sus!4v1715018400000!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Labophar Location Map"
                  className="absolute inset-0"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
