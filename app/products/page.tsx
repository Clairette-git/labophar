import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ProductsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-skyblue-700 to-skyblue-300 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Products</h1>
          <p className="text-xl max-w-3xl">
            High-quality pharmaceutical products manufactured to international standards.
          </p>
        </div>
      </section>

     {/* Products Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="current" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList>
                <TabsTrigger value="current">Current Products</TabsTrigger>
                <TabsTrigger value="upcoming">Upcoming Products</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="current">
              <div className="text-center mb-8">
                <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                  Our current product range includes pharmaceutical formulations manufactured to the highest quality
                  standards.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Current Products List */}
                <ProductCard
                  name="Paracetamol Suspension B.P"
                  category="Pain Relief & Fever"
                  image="/placeholder.svg?height=300&width=300&text=Paracetamol"
                  description="Oral suspension for pain relief and fever reduction."
                  packSize="100ml"
                />

                <ProductCard
                  name="Ibuprofen Suspension B.P"
                  category="Pain Relief & Anti-inflammatory"
                  image="/placeholder.svg?height=300&width=300&text=Ibuprofen"
                  description="Oral suspension for pain relief and inflammation."
                  packSize="100ml"
                />

                <ProductCard
                  name="Metronidazole Suspension B.P"
                  category="Antibiotic"
                  image="/placeholder.svg?height=300&width=300&text=Metronidazole"
                  description="Oral suspension for treating bacterial and parasitic infections."
                  packSize="100ml"
                />

                <ProductCard
                  name="Cotrimoxazole Suspension B.P"
                  category="Antibiotic"
                  image="/placeholder.svg?height=300&width=300&text=Cotrimoxazole"
                  description="Oral suspension for treating various bacterial infections."
                  packSize="100ml"
                />

                <ProductCard
                  name="Camphor Ointment 10% B.P"
                  category="Topical Treatment"
                  image="/placeholder.svg?height=300&width=300&text=Camphor"
                  description="Topical ointment for relieving pain and itching."
                  packSize="50gr"
                />

                <ProductCard
                  name="Povidone Iodine 10% B.P"
                  category="Antiseptic"
                  image="/placeholder.svg?height=300&width=300&text=Povidone"
                  description="Antiseptic solution for skin disinfection."
                  packSize="200ml"
                />

                <ProductCard
                  name="Lysol 6% B.P"
                  category="Disinfectant"
                  image="/placeholder.svg?height=300&width=300&text=Lysol"
                  description="Disinfectant solution for cleaning and sanitizing surfaces."
                  packSize="5L"
                />

                <ProductCard
                  name="Chlorhexidine/Cetrimide B.P"
                  category="Antiseptic"
                  image="/placeholder.svg?height=300&width=300&text=Chlorhexidine"
                  description="Antiseptic solution for skin cleansing and wound care."
                  packSize="1L"
                />

                <ProductCard
                  name="Emulsifying Ointment B.P"
                  category="Skin Care"
                  image="/placeholder.svg?height=300&width=300&text=Emulsifying"
                  description="Base for compounding medicated ointments and as a skin emollient."
                  packSize="400gr"
                />

                <ProductCard
                  name="Spray Hand Sanitizer"
                  category="Hygiene"
                  image="/placeholder.svg?height=300&width=300&text=Spray+Sanitizer"
                  description="Alcohol-based hand sanitizer in spray form."
                  packSize="500ml"
                />

                <ProductCard
                  name="Gel Hand Sanitizer"
                  category="Hygiene"
                  image="/placeholder.svg?height=300&width=300&text=Gel+Sanitizer"
                  description="Alcohol-based hand sanitizer in gel form."
                  packSize="500ml"
                />

                <ProductCard
                  name="Whitfield Ointment B.P"
                  category="Antifungal"
                  image="/placeholder.svg?height=300&width=300&text=Whitfield"
                  description="Topical ointment for treating fungal skin infections."
                  packSize="20gr"
                />

                <ProductCard
                  name="Morphine Oral Solution B.P"
                  category="Pain Management"
                  image="/placeholder.svg?height=300&width=300&text=Morphine"
                  description="Oral solution for managing severe pain."
                  packSize="500ml"
                />

                <ProductCard
                  name="Hydrogen Peroxide 3% B.P"
                  category="Antiseptic"
                  image="/placeholder.svg?height=300&width=300&text=Hydrogen+Peroxide"
                  description="Antiseptic solution for wound cleansing and disinfection."
                  packSize="10ml"
                />
              </div>
            </TabsContent>

            <TabsContent value="upcoming">
              <div className="text-center mb-8">
                <p className="text-lg text-gray-700">
                  In the coming year, we will be expanding our product line to include the following IV fluids:
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Upcoming IV Fluids */}
                <ProductCard
                  name="Normal Saline"
                  category="IV Fluids"
                  image="/placeholder.svg?height=300&width=300&text=Normal+Saline"
                  description="Isotonic crystalloid fluid for intravenous administration."
                  upcoming={true}
                />

                <ProductCard
                  name="Ringer Lactate"
                  category="IV Fluids"
                  image="/placeholder.svg?height=300&width=300&text=Ringer+Lactate"
                  description="Balanced electrolyte solution for fluid replacement and resuscitation."
                  upcoming={true}
                />

                <ProductCard
                  name="Dextrose"
                  category="IV Fluids"
                  image="/placeholder.svg?height=300&width=300&text=Dextrose"
                  description="Glucose solution for intravenous administration."
                  upcoming={true}
                />
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Quality Standards */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Quality Standards</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              All our products are manufactured according to Good Manufacturing Practices (GMP) and meet global
              regulatory requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-skyblue-100 p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <Image src="/placeholder.svg?height=40&width=40" alt="GMP Certified" width={40} height={40} />
              </div>
              <h3 className="text-xl font-bold mb-2">GMP Certified</h3>
              <p className="text-gray-600">
                Our manufacturing processes follow Good Manufacturing Practices to ensure product quality and safety.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-teal-100 p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <Image src="/placeholder.svg?height=40&width=40" alt="Quality Testing" width={40} height={40} />
              </div>
              <h3 className="text-xl font-bold mb-2">Rigorous Testing</h3>
              <p className="text-gray-600">
                Every batch undergoes comprehensive quality testing before release to ensure efficacy and safety.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-teal-100 p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <Image src="/placeholder.svg?height=40&width=40" alt="Regulatory Compliance" width={40} height={40} />
              </div>
              <h3 className="text-xl font-bold mb-2">Regulatory Compliance</h3>
              <p className="text-gray-600">
                We adhere to all local and international regulatory requirements for pharmaceutical manufacturing.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

interface ProductCardProps {
  name: string
  category: string
  image: string
  description: string
  packSize?: string
  upcoming?: boolean
}

function ProductCard({ name, category, image, description, packSize, upcoming = false }: ProductCardProps) {
  return (
    <Card className="overflow-hidden">
      <div className="relative h-48">
        <Image src={image || "/placeholder.svg"} alt={name} fill className="object-cover" />
        {upcoming && (
          <div className="absolute top-2 right-2 bg-skyblue-500 text-white text-xs font-bold px-2 py-1 rounded">
            Coming Soon
          </div>
        )}
      </div>
      <CardContent className="p-6">
        <div className="text-sm text-skyblue-500 font-medium mb-1">{category}</div>
        <h3 className="text-xl font-bold mb-2">{name}</h3>
        <p className="text-gray-600 mb-2">{description}</p>
        {packSize && (
          <div className="mt-2 inline-block bg-gray-100 px-3 py-1 rounded-full text-sm font-medium text-gray-700">
            Pack Size: {packSize}
          </div>
        )}
      </CardContent>
    </Card>
  )
}
