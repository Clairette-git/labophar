"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="relative h-12 w-48">
              <Image src="./labophar-logo.png" alt="Labophar Logo" fill className="object-contain" priority />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-skyblue-500 font-medium">
              Home
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-skyblue-500 font-medium">
              About Us
            </Link>
            <Link href="/products" className="text-gray-700 hover:text-skyblue-500 font-medium">
              Products
            </Link>
            <Link href="/services" className="text-gray-700 hover:text-skyblue-500 font-medium">
              Services
            </Link>
            <Link href="/expansion" className="text-gray-700 hover:text-skyblue-500 font-medium">
              Expansion
            </Link>
            <Button asChild className="bg-skyblue-500 hover:bg-skyblue-600 border-2 border-skyblue-400 shadow-sm">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 py-4">
          <div className="container mx-auto px-4 flex flex-col space-y-4">
            <Link
              href="/"
              className="text-gray-700 hover:text-skyblue-500 font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-gray-700 hover:text-skyblue-500 font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/products"
              className="text-gray-700 hover:text-skyblue-500 font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Products
            </Link>
            <Link
              href="/services"
              className="text-gray-700 hover:text-skyblue-500 font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/expansion"
              className="text-gray-700 hover:text-skyblue-500 font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Expansion
            </Link>
            <Button
              asChild
              className="bg-teal-600 hover:bg-teal-700 w-full border-2 border-teal-500 shadow-sm"
              onClick={() => setIsMenuOpen(false)}
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
