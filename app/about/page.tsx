import Image from "next/image"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-teal-700 to-teal-500 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Labophar Ltd</h1>
          <p className="text-xl max-w-3xl">
            A leading pharmaceutical manufacturer in Rwanda with a mission to provide high-quality affordable medicines.
          </p>
        </div>
      </section>

      {/* Company History */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our History</h2>
              <p className="text-lg text-gray-700 mb-4">
                LABOPHAR Ltd is a private Rwandan company that has been manufacturing pharmaceutical products since 1983
                with a mission to avail high quality affordable medicines in Rwanda and Africa.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                LABOPHAR was acquired from the Government of Rwanda by Depot Pharmaceutique et Materiel Medical
                Kalisimbi (DPMMK) Ltd in April 2024.
              </p>
              <p className="text-lg text-gray-700">
                DPMMK Ltd is an experienced Rwandan owned company that produces and supplies medical oxygen and
                nitrogen, pharmaceutical products and equipment to different health facilities in Rwanda and in the
                region.
              </p>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image src="/placeholder.svg?height=800&width=600" alt="Labophar History" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission & Vision</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-teal-600 mb-4">Our Mission</h3>
              <p className="text-lg text-gray-700">
                To avail high quality affordable medicines in Rwanda and Africa, improving healthcare access and
                outcomes for all communities we serve.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-teal-600 mb-4">Our Vision</h3>
              <p className="text-lg text-gray-700">
                To be the leading pharmaceutical manufacturer in East Africa, known for quality, innovation, and
                commitment to improving public health.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Parent Company */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image src="/placeholder.svg?height=800&width=600" alt="DPMMK Facilities" fill className="object-cover" />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">About DPMMK Ltd</h2>
              <p className="text-lg text-gray-700 mb-4">
                Depot Pharmaceutique et Materiel Medical Kalisimbi (DPMMK) Ltd is an experienced Rwandan owned company
                that acquired Labophar in April 2024.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                DPMMK produces and supplies medical oxygen and nitrogen, pharmaceutical products and equipment to
                different health facilities in Rwanda and in the region.
              </p>
              <p className="text-lg text-gray-700">
                DPMMK also manages the landfill of Nduba and provides treatment of hazardous waste services to public
                and private institutions in Rwanda. In 2023, DPMMK Ltd purchased Mageragere industrial incinerator from
                the Government of Rwanda.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
