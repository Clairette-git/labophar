import Image from "next/image"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-skyblue-700 to-skyblue-300 text-white min-h-screen flex items-center">
        <div className="absolute inset-0">
                  <Image
                    src="https://img.freepik.com/free-photo/3d-coronavirus-vaccine_23-2148963960.jpg?uid=R202430338&ga=GA1.1.1572254899.1747053563&semt=ais_items_boosted&w=740"
                    alt="About Us"
                    fill
                    className="object-cover opacity-80"
                    priority
                  />
                </div>
                
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
                Labophar Ltd is a private Rwandan pharmaceutical manufacturing company with a legacy of local production since 1983. In April 2024, the company was acquired from the Government of Rwanda by Depot Pharmaceutique et Matériel Médical Kalisimbi (DPMMK) Ltd, ushering in a new phase focused on expanding Rwanda’s pharmaceutical self-sufficiency.
Our mission is to provide high-quality, safe, and affordable medicines to improve health outcomes in Rwanda and across Africa.
This strategic acquisition is part of a national effort to reduce dependence on imported medicines, which often leads to shortages, quality inconsistencies, and supply delays. In response, Labophar is investing in a modern, GMP-compliant manufacturing facility designed to meet both local and international regulatory standards.
The facility will initially focus on the production of IV fluids, syrups, and topical pharmaceuticals, with plans to supply both domestic and regional markets starting in 2025.
With a renewed vision and operational strength under DPMMK, Labophar is positioned to become a key player in Africa’s pharmaceutical manufacturing landscape, delivering quality products and supporting public health systems across the continent.
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
