import Image from "next/image"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-skyblue-700 to-skyblue-300 text-white">
        <div className="absolute inset-0 bg-[url('/ivfluids.jpg')] opacity-50"></div>
        <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
          <div className="max-w-3xl"></div>
      
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
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <video
    src="/highlight.mov"
    controls
    className="object-cover w-full h-full"
  />
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
              <h3 className="text-2xl font-bold text-skyblue-600 mb-4">Our Mission</h3>
              <p className="text-lg text-gray-700">
                To avail high quality affordable medicines in Rwanda and Africa, improving healthcare access and
                outcomes for all communities we serve.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-skyblue-600 mb-4">Our Vision</h3>
              <p className="text-lg text-gray-700">
                To be the leading pharmaceutical manufacturer in Africa, known for quality, innovation, and
                commitment to improving public health.
              </p>
            </div>
          </div>
        </div>
      </section>

     
           
    </div>
  )
}
