import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react"
import { NewsletterForm } from "@/components/newsletter-form"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="relative h-12 w-48 mb-4">
              <Image src="./labophar-logo.png" alt="Labophar Logo" fill className="object-contain" />
            </div>
            <p className="text-gray-400 mb-4">
              A private Rwandan pharmaceutical company manufacturing high-quality affordable medicines since 1983.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Linkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-gray-400 hover:text-white">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-white">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/expansion" className="text-gray-400 hover:text-white">
                  Expansion Plans
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-gray-400 hover:text-white">
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={20} className="text-teal-500 mr-2 mt-1 flex-shrink-0" />
                <span className="text-gray-400">Kigali, Rwanda</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="text-teal-500 mr-2 flex-shrink-0" />
                <span className="text-gray-400">+250 788 846 574</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="text-teal-500 mr-2 flex-shrink-0" />
                <span className="text-gray-400">+250 788 389 615</span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="text-teal-500 mr-2 flex-shrink-0" />
                <a href="mailto:info@labophar.rw" className="text-gray-400 hover:text-white">
                  info@labophar.rw
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-gray-400 mb-4">Subscribe to our newsletter for the latest updates.</p>
            <NewsletterForm />
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Labophar Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
