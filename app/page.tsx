import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, FlaskRoundIcon as Flask, Microscope, Pill, ShieldPlus, Truck } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-teal-700 to-teal-500 text-white">
        <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-10"></div>
        <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              High-Quality Pharmaceutical Products for Rwanda and Africa
            </h1>
            <p className="text-xl mb-8">
              Manufacturing affordable medicines since 1983, committed to improving healthcare access across the region.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-white text-teal-700 hover:bg-teal-50">
                <Link href="/products">Our Products</Link>
              </Button>
              <Button asChild size="lg" className="bg-white text-teal-700 hover:bg-teal-50 border-2 border-white">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">About Labophar Ltd</h2>
              <p className="text-lg text-gray-700 mb-6">
                LABOPHAR Ltd is a private Rwandan company that has been manufacturing pharmaceutical products since 1983
                with a mission to avail high quality affordable medicines in Rwanda and Africa.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                In April 2024, LABOPHAR was acquired from the Government of Rwanda by Depot Pharmaceutique et Materiel
                Medical Kalisimbi (DPMMK) Ltd, an experienced Rwandan owned company.
              </p>
              <Button asChild className="bg-teal-600 hover:bg-teal-700">
                <Link href="/about" className="flex items-center gap-2">
                  Learn More <ArrowRight size={16} />
                </Link>
              </Button>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/placeholder.svg?height=800&width=600"
                alt="Labophar Facility"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Services & Expertise</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              DPMMK Ltd produces and supplies medical oxygen and nitrogen, pharmaceutical products and equipment to
              different health facilities in Rwanda and in the region.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <div className="bg-teal-100 p-3 rounded-full w-fit mb-4">
                  <Pill className="h-6 w-6 text-teal-700" />
                </div>
                <h3 className="text-xl font-bold mb-2">Pharmaceutical Manufacturing</h3>
                <p className="text-gray-600">
                  Manufacturing high-quality pharmaceutical products including our upcoming facility for IV fluids,
                  bags, syrups and ointments.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <div className="bg-teal-100 p-3 rounded-full w-fit mb-4">
                  <Flask className="h-6 w-6 text-teal-700" />
                </div>
                <h3 className="text-xl font-bold mb-2">Medical Gases</h3>
                <p className="text-gray-600">
                  Production and supply of medical oxygen and nitrogen to healthcare facilities throughout Rwanda and
                  neighboring regions.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <div className="bg-teal-100 p-3 rounded-full w-fit mb-4">
                  <ShieldPlus className="h-6 w-6 text-teal-700" />
                </div>
                <h3 className="text-xl font-bold mb-2">Medical Equipment</h3>
                <p className="text-gray-600">
                  Supply of essential medical equipment to different health facilities in Rwanda and throughout the
                  region.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <div className="bg-teal-100 p-3 rounded-full w-fit mb-4">
                  <Microscope className="h-6 w-6 text-teal-700" />
                </div>
                <h3 className="text-xl font-bold mb-2">Research & Development</h3>
                <p className="text-gray-600">
                  Ongoing research to develop new pharmaceutical products that meet the specific needs of the African
                  market.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <div className="bg-teal-100 p-3 rounded-full w-fit mb-4">
                  <Truck className="h-6 w-6 text-teal-700" />
                </div>
                <h3 className="text-xl font-bold mb-2">Distribution Network</h3>
                <p className="text-gray-600">
                  Efficient distribution of pharmaceutical products throughout Rwanda and neighboring countries.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Expansion Plans Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/placeholder.svg?height=800&width=600"
                alt="New Manufacturing Facility"
                fill
                className="object-cover"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Strategic Expansion</h2>
              <p className="text-lg text-gray-700 mb-6">
                LABOPHAR is undertaking a strategic expansion by establishing a new manufacturing facility for
                intravenous (IV) fluids, bags, syrups and ointments.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                The facility will meet current Good Manufacturing Practices (GMP) and global regulatory requirements,
                ensuring the highest quality standards for all our products.
              </p>
              <Button asChild className="bg-teal-600 hover:bg-teal-700">
                <Link href="/expansion" className="flex items-center gap-2">
                  Expansion Details <ArrowRight size={16} />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-teal-700 to-teal-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Interested in Our Products?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Contact us today to learn more about our pharmaceutical products and services.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-white text-teal-700 hover:bg-teal-50 border-2 border-teal-300 shadow-lg"
          >
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
