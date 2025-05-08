import type React from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, FlaskRoundIcon as Flask, Pill, ShieldPlus, Truck, Beaker, Wrench } from "lucide-react"

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-skyblue-700 to-skyblue-300 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl max-w-3xl">
            Comprehensive pharmaceutical services and solutions for healthcare facilities across Rwanda and the region.
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Core Services</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              DPMMK Ltd and Labophar provide a wide range of pharmaceutical services to meet the needs of healthcare
              facilities throughout Rwanda and neighboring countries.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              title="Pharmaceutical Manufacturing"
              description="Production of high-quality pharmaceutical products including tablets, capsules, and our upcoming IV fluids, syrups, and ointments."
              icon={<Pill className="h-10 w-10 text-skyblue-700" />}
            />

            <ServiceCard
              title="Medical Gas Supply"
              description="Production and distribution of medical oxygen and nitrogen to healthcare facilities, ensuring a reliable supply of these essential gases."
              icon={<Flask className="hh-10 w-10 text-skyblue-700" />}
            />

            <ServiceCard
              title="Medical Equipment"
              description="Supply of essential medical equipment to healthcare facilities, including diagnostic tools, treatment equipment, and monitoring devices."
              icon={<ShieldPlus className="h-10 w-10 text-skyblue-700" />}
            />

            <ServiceCard
              title="Waste Management"
              description="Management of the Nduba landfill and provision of hazardous waste treatment services to public and private institutions in Rwanda."
              icon={<Beaker className="h-10 w-10 text-skyblue-7000" />}
            />

            <ServiceCard
              title="Distribution Network"
              description="Efficient distribution of pharmaceutical products throughout Rwanda and neighboring countries, ensuring timely delivery to healthcare facilities."
              icon={<Truck className="h-10 w-10 text-skyblue-700" />}
            />

            <ServiceCard
              title="Technical Support"
              description="Technical support and maintenance services for medical equipment and gas supply systems, ensuring optimal performance and reliability."
              icon={<Wrench className="h-10 w-10 text-skyblue-700" />}
            />
          </div>
        </div>
      </section>

      {/* Quality Assurance */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Quality Assurance</h2>
              <p className="text-lg text-gray-700 mb-4">
                At Labophar, quality is at the heart of everything we do. Our comprehensive quality assurance program
                ensures that all our products and services meet the highest standards.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                Our manufacturing processes follow Good Manufacturing Practices (GMP) and our new facility will meet
                global regulatory requirements, ensuring the safety, efficacy, and quality of all our products.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                Every batch of our products undergoes rigorous testing in our quality control laboratory before release,
                ensuring that they meet all specifications and quality standards.
              </p>
              <Button asChild className="bg-skyblue-500 hover:bg-skyblue-600 text-white">
                <Link href="/about" className="flex items-center gap-2">
                  Learn More About Us <ArrowRight size={16} />
                </Link>
              </Button>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/placeholder.svg?height=800&width=600"
                alt="Quality Assurance"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Healthcare Partnerships */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/placeholder.svg?height=800&width=600"
                alt="Healthcare Partnerships"
                fill
                className="object-cover"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Healthcare Partnerships</h2>
              <p className="text-lg text-gray-700 mb-4">
                We work closely with healthcare facilities, government agencies, and international organizations to
                improve healthcare access and outcomes in Rwanda and the region.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                Our partnerships enable us to better understand the needs of healthcare providers and patients, allowing
                us to develop products and services that address specific challenges.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                Through these collaborations, we contribute to strengthening healthcare systems and improving public
                health in Rwanda and neighboring countries.
              </p>
              <Button asChild className="bg-skyblue-500 hover:bg-skyblue-600 text-white">
                <Link href="/contact" className="flex items-center gap-2">
                  Partner With Us <ArrowRight size={16} />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-skyblue-700 to-skyblue-300 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Need Our Services?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Contact us today to learn more about how our pharmaceutical services can benefit your healthcare facility.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-white text-skyblue-700 hover:bg-skyblue-50 border-2 border-skyblue-300 shadow-lg"
          >
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

interface ServiceCardProps {
  title: string
  description: string
  icon: React.ReactNode
}

function ServiceCard({ title, description, icon }: ServiceCardProps) {
  return (
    <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
      <CardContent className="p-8">
        <div className="bg-skyblue-100 p-4 rounded-full w-fit mb-6">{icon}</div>
        <h3 className="text-xl font-bold mb-3">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </CardContent>
    </Card>
  )
}
