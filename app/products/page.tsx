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
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Sample products - replace with actual products */}
                <ProductCard
                  name="Medical Oxygen"
                  category="Medical Gases"
                  image="/placeholder.svg?height=300&width=300"
                  description="High-purity medical oxygen for healthcare facilities."
                />

                <ProductCard
                  name="Medical Nitrogen"
                  category="Medical Gases"
                  image="/placeholder.svg?height=300&width=300"
                  description="Medical-grade nitrogen for various healthcare applications."
                />

                <ProductCard
                  name="Paracetamol Tablets"
                  category="Pain Relief"
                  image="/placeholder.svg?height=300&width=300"
                  description="500mg tablets for pain relief and fever reduction."
                />

                <ProductCard
                  name="Amoxicillin Capsules"
                  category="Antibiotics"
                  image="/placeholder.svg?height=300&width=300"
                  description="250mg and 500mg capsules for bacterial infections."
                />

                <ProductCard
                  name="Metformin Tablets"
                  category="Diabetes Management"
                  image="/placeholder.svg?height=300&width=300"
                  description="500mg tablets for type 2 diabetes management."
                />

                <ProductCard
                  name="Omeprazole Capsules"
                  category="Gastrointestinal"
                  image="/placeholder.svg?height=300&width=300"
                  description="20mg capsules for acid reflux and ulcers."
                />
              </div>
            </TabsContent>

            <TabsContent value="upcoming">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Upcoming products based on expansion plans */}
                <ProductCard
                  name="Intravenous Fluids"
                  category="IV Solutions"
                  image="/placeholder.svg?height=300&width=300"
                  description="Sterile IV solutions for fluid replacement therapy."
                  upcoming={true}
                />

                <ProductCard
                  name="IV Bags"
                  category="Medical Supplies"
                  image="/placeholder.svg?height=300&width=300"
                  description="High-quality IV bags for fluid administration."
                  upcoming={true}
                />

                <ProductCard
                  name="Cough Syrup"
                  category="Respiratory"
                  image="/placeholder.svg?height=300&width=300"
                  description="Syrup formulation for cough relief."
                  upcoming={true}
                />

                <ProductCard
                  name="Antibiotic Ointment"
                  category="Topical Medications"
                  image="/placeholder.svg?height=300&width=300"
                  description="Topical ointment for preventing infection in minor cuts and burns."
                  upcoming={true}
                />

                <ProductCard
                  name="Hydrocortisone Cream"
                  category="Topical Medications"
                  image="/placeholder.svg?height=300&width=300"
                  description="Cream for relieving skin inflammation and itching."
                  upcoming={true}
                />

                <ProductCard
                  name="Multivitamin Syrup"
                  category="Nutritional Supplements"
                  image="/placeholder.svg?height=300&width=300"
                  description="Liquid multivitamin supplement for children."
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
  upcoming?: boolean
}

function ProductCard({ name, category, image, description, upcoming = false }: ProductCardProps) {
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
        <p className="text-gray-600">{description}</p>
      </CardContent>
    </Card>
  )
}
