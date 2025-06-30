import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ProductsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-skyblue-700 to-skyblue-300 text-white min-h-screen flex items-center">
              <div className="absolute inset-0">
                        <Image
                          src="/Products.jpg"
                          alt="products"
                          fill
                          className="object-cover opacity-70"
                          priority
                        />
                      </div>
                      
              <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
                <div className="max-w-3xl"></div>
           
                <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Products</h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl">
              High-quality pharmaceutical products manufactured to international standards, serving healthcare
              facilities across Rwanda and Africa.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-white text-skyblue-700 hover:bg-skyblue-50">
                <Link href="#current">View Products</Link>
              </Button>
              <Button asChild size="lg" className="bg-white text-skyblue-700 hover:bg-skyblue-50 border-2 border-white">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="current" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList>
                <TabsTrigger value="current">Ongoing Products</TabsTrigger>
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
                {/* Current Products List with Better Images - No People, No Duplicates */}
                <ProductCard
                  name="Paracetamol Suspension B.P"
                  category="Pain Relief & Fever"
                  src="/Labomol.jpg"
                  description="Oral suspension for pain relief and fever reduction in children and adults."
                  packSize="100ml"
                />

                <ProductCard
                  name="Ibuprofen Suspension B.P"
                  category="Pain Relief & Anti-inflammatory"
                  image="https://images.unsplash.com/photo-1550572017-edd951b55104?w=300&h=300&fit=crop&crop=center"
                  description="Oral suspension for pain relief and inflammation reduction."
                  packSize="100ml"
                />

                <ProductCard
                  name="Metronidazole Suspension B.P"
                  category="Antibiotic"
                  image="https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=300&h=300&fit=crop&crop=center"
                  description="Oral suspension for treating bacterial and parasitic infections."
                  packSize="100ml"
                />

                <ProductCard
                  name="Cotrimoxazole Suspension B.P"
                  category="Antibiotic"
                  image="/cotrimazole.jpg"
                  description="Oral suspension for treating various bacterial infections."
                  packSize="100ml"
                />

                <ProductCard
                  name="Camphor Ointment 10% B.P"
                  category="Topical Treatment"
                  image="https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?w=300&h=300&fit=crop&crop=center"
                  description="Topical ointment for relieving pain and itching."
                  packSize="50gr"
                />

                <ProductCard
                  name="Povidone Iodine 10% B.P"
                  category="Antiseptic"
                  image="https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=300&h=300&fit=crop&crop=center"
                  description="Antiseptic solution for skin disinfection and wound care."
                  packSize="200ml"
                />

                <ProductCard
                  name="Lysol 6% B.P"
                  category="Disinfectant"
                  image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE4XLObjyV0rv4XdyOI-twuw-mpjsdmou4D9VoGAgiD1eStVSncvURH2bn36ayy03exzk&usqp=CAU"
                  description="Disinfectant solution for cleaning and sanitizing surfaces."
                  packSize="5L"
                />

                <ProductCard
                  name="Chlorhexidine/Cetrimide B.P"
                  category="Antiseptic"
                  image="https://images.unsplash.com/photo-1576602976047-174e57a47881?w=300&h=300&fit=crop&crop=center"
                  description="Antiseptic solution for skin cleansing and wound care."
                  packSize="1L"
                />

                <ProductCard
                  name="Emulsifying Ointment B.P"
                  category="Skin Care"
                  image="https://medicolab.africa/wp-content/uploads/2022/03/EMULSIFYING-OINTMENT-BP-500g.jpeg"
                  description="Base for compounding medicated ointments and as a skin emollient."
                  packSize="400gr"
                />

                <ProductCard
                  name="Spray Hand Sanitizer"
                  category="Hygiene"
                  image="https://images.unsplash.com/photo-1584483720412-ce931f4aefa8?w=300&h=300&fit=crop&crop=center"
                  description="Alcohol-based hand sanitizer in convenient spray form."
                  packSize="500ml"
                />

                <ProductCard
                  name="Gel Hand Sanitizer"
                  category="Hygiene"
                  image="http://content.health.harvard.edu/wp-content/uploads/2021/09/a93b41ec-6510-4053-acd8-3d3cee6504ed.jpg"
                  description="Alcohol-based hand sanitizer in gel form for effective hand hygiene."
                  packSize="500ml"
                />

                <ProductCard
                  name="Whitfield Ointment B.P"
                  category="Antifungal"
                  image="https://images.unsplash.com/photo-1628771065518-0d82f1938462?w=300&h=300&fit=crop&crop=center"
                  description="Topical ointment for treating fungal skin infections."
                  packSize="20gr"
                />

                <ProductCard
                  name="Morphine Oral Solution B.P"
                  category="Pain Management"
                  image="https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=300&h=300&fit=crop&crop=center"
                  description="Oral solution for managing severe pain in controlled medical settings."
                  packSize="500ml"
                />

                <ProductCard
                  name="Hydrogen Peroxide 3% B.P"
                  category="Antiseptic"
                  image="https://images.unsplash.com/photo-1584017911766-d451b3d0e843?w=300&h=300&fit=crop&crop=center"
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
                {/* Upcoming IV Fluids with Better Images */}
                <ProductCard
                  name="Normal Saline"
                  category="IV Fluids"
                  image="https://vikrantlifesciences.com/wp-content/uploads/2024/05/ns-e1717683864675-300x375.jpg"
                  description="Isotonic crystalloid fluid for intravenous administration and fluid replacement."
                  upcoming={true}
                  
                />

                <ProductCard
                  name="Ringer's Lactate"
                  category="IV Fluids"
                  image="https://images.unsplash.com/photo-1576671081837-49000212a370?w=300&h=300&fit=crop&crop=center"
                  description="Balanced electrolyte solution for fluid replacement and resuscitation."
                  upcoming={true}
                />

                <ProductCard
                  name="Dextrose"
                  category="IV Fluids"
                  image="https://timsnutrition.co.ke/wp-content/uploads/2024/09/HAPPY-INTERNATIONAL-WOMENS-DAY-2024-09-15T094426.427.png"
                  description="Glucose solution for intravenous administration and energy supplementation."
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
              All our products are manufactured according to Good Manufacturing Practice (GMP) and meet global
              regulatory requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-skyblue-100 p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <Image
                  src="https://images.unsplash.com/photo-1584017911766-d451b3d0e843?w=40&h=40&fit=crop&crop=center"
                  alt="GMP Certified"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">GMP Certified</h3>
              <p className="text-gray-600">
                Our manufacturing processes follow Good Manufacturing Practices to ensure product quality and safety.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-skyblue-100 p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <Image
                  src="https://images.unsplash.com/photo-1583947581924-860bda6a26df?w=40&h=40&fit=crop&crop=center"
                  alt="Quality Testing"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">Rigorous Testing</h3>
              <p className="text-gray-600">
                Every batch undergoes comprehensive quality testing before release to ensure efficacy and safety.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-skyblue-100 p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <Image
                  src="https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?w=40&h=40&fit=crop&crop=center"
                  alt="Regulatory Compliance"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">Regulatory Compliance</h3>
              <p className="text-gray-600">
                We adhere to all local and international regulatory requirements for pharmaceutical manufacturing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section id="featured-products" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Products</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Our most popular pharmaceutical products, trusted by healthcare providers across Rwanda.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Featured Products - Same as homepage */}
            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <div className="relative h-48">
                <Image
                  src="https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=300&h=300&fit=crop&crop=center"
                  alt="Paracetamol Suspension"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-4">
                <h3 className="text-lg font-bold mb-1">Paracetamol Suspension B.P</h3>
                <p className="text-sm text-gray-600 mb-2">Pain Relief & Fever</p>
                <div className="text-xs bg-gray-100 px-2 py-1 rounded-full inline-block">100ml</div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <div className="relative h-48">
                <Image
                  src="https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=300&h=300&fit=crop&crop=center"
                  alt="Povidone Iodine"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-4">
                <h3 className="text-lg font-bold mb-1">Povidone Iodine 10% B.P</h3>
                <p className="text-sm text-gray-600 mb-2">Antiseptic</p>
                <div className="text-xs bg-gray-100 px-2 py-1 rounded-full inline-block">200ml</div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <div className="relative h-48">
                <Image
                  src="http://content.health.harvard.edu/wp-content/uploads/2021/09/a93b41ec-6510-4053-acd8-3d3cee6504ed.jpg"
                  alt="Hand Sanitizer"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-4">
                <h3 className="text-lg font-bold mb-1">Gel Hand Sanitizer</h3>
                <p className="text-sm text-gray-600 mb-2">Hygiene</p>
                <div className="text-xs bg-gray-100 px-2 py-1 rounded-full inline-block">500ml</div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <div className="relative h-48">
                <Image
                  src="https://images.unsplash.com/photo-1550572017-edd951b55104?w=300&h=300&fit=crop&crop=center"
                  alt="Ibuprofen Suspension"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-4">
                <h3 className="text-lg font-bold mb-1">Ibuprofen Suspension B.P</h3>
                <p className="text-sm text-gray-600 mb-2">Pain Relief & Anti-inflammatory</p>
                <div className="text-xs bg-gray-100 px-2 py-1 rounded-full inline-block">100ml</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Need More Information?</h2>
          <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto">
            Contact us to learn more about our products, pricing, and availability.
          </p>
          <Button asChild size="lg" className="bg-skyblue-500 hover:bg-skyblue-600 text-white">
            <Link href="/contact">Contact Us</Link>
          </Button>
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
