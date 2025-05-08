import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"

export default function ExpansionPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-skyblue-700 to-skyblue-300 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Strategic Expansion</h1>
          <p className="text-xl max-w-3xl">
            LABOPHAR is undertaking a strategic expansion to enhance our manufacturing capabilities and product
            offerings.
          </p>
        </div>
      </section>

      {/* Expansion Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">New Manufacturing Facility</h2>
              <p className="text-lg text-gray-700 mb-4">
                LABOPHAR is establishing a new manufacturing facility for intravenous (IV) fluids, bags, syrups and
                ointments in Rwanda.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                The facility will meet current Good Manufacturing Practices (GMP) and global regulatory requirements,
                ensuring the highest quality standards for all our products.
              </p>
              <p className="text-lg text-gray-700">
                This expansion will significantly enhance our production capacity and enable us to better serve
                healthcare facilities throughout Rwanda and neighboring countries.
              </p>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/placeholder.svg?height=800&width=600"
                alt="New Manufacturing Facility"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* New Product Lines */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">New Product Lines</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Our expansion will enable us to manufacture several new product lines to meet the growing healthcare needs
              in Rwanda and Africa.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-none shadow-lg">
              <CardContent className="p-6">
                <div className="bg-skyblue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <Image src="/placeholder.svg?height=40&width=40" alt="IV Fluids" width={40} height={40} />
                </div>
                <h3 className="text-xl font-bold mb-2">IV Fluids</h3>
                <p className="text-gray-600 mb-4">
                  Sterile intravenous solutions for fluid replacement therapy, including normal saline, dextrose, and
                  Ringer's lactate.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="p-6">
                <div className="bg-skyblue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <Image src="/placeholder.svg?height=40&width=40" alt="IV Bags" width={40} height={40} />
                </div>
                <h3 className="text-xl font-bold mb-2">IV Bags</h3>
                <p className="text-gray-600 mb-4">
                  High-quality intravenous bags for fluid administration, designed for safety and ease of use.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="p-6">
                <div className="bg-skyblue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <Image src="/placeholder.svg?height=40&width=40" alt="Syrups" width={40} height={40} />
                </div>
                <h3 className="text-xl font-bold mb-2">Syrups</h3>
                <p className="text-gray-600 mb-4">
                  Liquid medication formulations including cough syrups, antihistamines, and multivitamin supplements.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="p-6">
                <div className="bg-skyblue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <Image src="/placeholder.svg?height=40&width=40" alt="Ointments" width={40} height={40} />
                </div>
                <h3 className="text-xl font-bold mb-2">Ointments</h3>
                <p className="text-gray-600 mb-4">
                  Topical medications for skin conditions, including antibiotic ointments, anti-inflammatory creams, and
                  moisturizing products.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/placeholder.svg?height=800&width=600"
                alt="Healthcare Benefits"
                fill
                className="object-cover"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Benefits of Our Expansion</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-skyblue-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-lg text-gray-700">
                    Increased availability of essential medications in Rwanda and neighboring countries
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-teal-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-lg text-gray-700">Reduced dependence on imported pharmaceutical products</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-teal-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-lg text-gray-700">
                    Creation of new employment opportunities for skilled workers
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-teal-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-lg text-gray-700">Enhanced healthcare infrastructure in the region</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-teal-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-lg text-gray-700">
                    Contribution to Rwanda's economic development and healthcare self-sufficiency
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Interested in Learning More?</h2>
          <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto">
            Contact us to learn more about our expansion plans and upcoming product lines.
          </p>
          <Button asChild size="lg" className="bg-skyblue-500 hover:bg-skyblue-600 text-white">
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
