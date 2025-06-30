'use client';

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowRight,
  FlaskRoundIcon as Flask,
  Microscope,
  Pill,
  ShieldPlus,
  Truck,
} from "lucide-react";

const backgroundImages = [
  "https://making.com/wp-content/uploads/2021/06/Gel-bottles-transfer-on-conveyor-belt-system-of-gel-filling-machine-in-an-industry-scaled.jpg?w=530&h=330&auto=format,compress&fit=crop&q=60&crop=edges&dpr=1",
  "/paracetamol.jpg",
  "https://img.freepik.com/premium-psd/pharmaceutical-medicine-syrup-bottle-packaging-mockup_47987-4812.jpg"
];

export default function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 5000); // 5 seconds per image

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-skyblue-700 to-skyblue-300 text-white overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-70 animate-kenburns"
          style={{ backgroundImage: `url(${backgroundImages[currentImageIndex]})` }}
        ></div>
        <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              High-Quality Pharmaceutical Products for Rwanda and Africa
            </h1>
            <p className="text-xl mb-8">
              Manufacturing affordable medicines since 1983, committed to improving healthcare access across the region.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-white text-skyblue-700 hover:bg-skyblue-50">
                <Link href="/products">Our Products</Link>
              </Button>
              <Button
                asChild
                size="lg"
                className="bg-white text-skyblue-700 hover:bg-skyblue-50 border-2 border-white"
              >
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
              <Button asChild className="bg-skyblue-500 hover:bg-skyblue-600">
                <Link href="/about" className="flex items-center gap-2">
                  Learn More <ArrowRight size={16} />
                </Link>
              </Button>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/About_side.jpeg?height=800&width=600"
                alt="Labophar Facility"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

 {/* Featured Products Section - NEW */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Products</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Discover our range of high-quality pharmaceutical products manufactured to international standards.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Featured Products */}
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

          <div className="text-center mt-12">
            <Button asChild className="bg-skyblue-500 hover:bg-skyblue-600 text-white">
              <Link href="/products" className="flex items-center gap-2">
                View All Products <ArrowRight size={16} />
              </Link>
            </Button>
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
                <div className="bg-skyblue-100 p-3 rounded-full w-fit mb-4">
                  <Pill className="h-6 w-6 text-skyblue-700" />
                </div>
                <h3 className="text-xl font-bold mb-2">Pharmaceutical Manufacturing</h3>
                <p className="text-gray-600">
                  Manufacturing high-quality pharmaceutical products including our upcoming facility for IV fluids, syrups and topicals products.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <div className="bg-skyblue-100 p-3 rounded-full w-fit mb-4">
                  <Microscope className="h-6 w-6 text-skyblue-700" />
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
                <div className="bg-skyblue-100 p-3 rounded-full w-fit mb-4">
                  <Truck className="h-6 w-6 text-skyblue-700" />
                </div>
                <h3 className="text-xl font-bold mb-2">Distribution Network</h3>
                <p className="text-gray-600">
                  Efficient distribution of pharmaceutical products throughout Rwanda and Africa.
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
                src="/expand.jpg?height=800&width=600"
                alt="New Manufacturing Facility"
                fill
                className="object-cover"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Strategic Expansion</h2>
              <p className="text-lg text-gray-700 mb-6">
                LABOPHAR is undertaking a strategic expansion by establishing a new manufacturing facility for
                intravenous (IV) fluids, syrups and topicals products.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                The facility will meet current Good Manufacturing Practices (GMP) and global regulatory requirements,
                ensuring the highest quality standards for all our products.
              </p>
              <Button asChild className="bg-skyblue-500 hover:bg-skyblue-600">
                <Link href="/expansion" className="flex items-center gap-2">
                  Expansion Details <ArrowRight size={16} />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
{/* Partners Section - Updated */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Partners</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              We collaborate with key government institutions to advance healthcare and pharmaceutical manufacturing in
              Rwanda.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            {/* Ministry of Health - Clickable */}
            <a
              href="https://moh.gov.rw/"
              target="_blank"
              rel="noopener noreferrer"
              className="block transition-transform hover:scale-105"
              aria-label="Visit Ministry of Health website"
            >
              <div className="bg-white p-5 rounded-lg shadow-md h-40 md:h-44 w-full flex items-center justify-center">
                <div className="relative h-32 md:h-36 w-full">
                  <Image src="/MiniHealth.png" alt="Ministry of Health Logo" fill className="object-contain" />
                </div>
              </div>
            </a>

            {/* Minecofin - Clickable */}
            <a
              href="https://www.minecofin.gov.rw/"
              target="_blank"
              rel="noopener noreferrer"
              className="block transition-transform hover:scale-105"
              aria-label="Visit Minecofin website"
            >
              <div className="bg-white p-5 rounded-lg shadow-md h-40 md:h-44 w-full flex items-center justify-center">
                <div className="relative h-32 md:h-36 w-full">
                  <Image src="/Minecofin.png" alt="Minecofin Logo" fill className="object-contain" />
                </div>
              </div>
            </a>

            {/* RDB - Clickable */}
            <a
              href="https://rdb.rw/"
              target="_blank"
              rel="noopener noreferrer"
              className="block transition-transform hover:scale-105"
              aria-label="Visit Rwanda Development Board website"
            >
              <div className="bg-white p-5 rounded-lg shadow-md h-40 md:h-44 w-full flex items-center justify-center">
                <div className="relative h-32 md:h-36 w-full">
                  <Image src="/rdb_logo.png" alt="Rwanda Development Board Logo" fill className="object-contain" />
                </div>
              </div>
            </a>

            {/* NIRDA - Clickable */}
            <a
              href="https://nirda.gov.rw/"
              target="_blank"
              rel="noopener noreferrer"
              className="block transition-transform hover:scale-105"
              aria-label="Visit NIRDA website"
            >
              <div className="bg-white p-5 rounded-lg shadow-md h-40 md:h-44 w-full flex items-center justify-center">
                <div className="relative h-32 md:h-36 w-full">
                  <Image src="/NIRDA.png" alt="NIRDA Logo" fill className="object-contain" />
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-skyblue-700 to-skyblue-300 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Interested in Our Products?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Contact us today to learn more about our pharmaceutical products and services.
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
