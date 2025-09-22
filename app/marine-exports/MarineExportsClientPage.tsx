"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import IslandNavbar from "@/components/island-navbar"
import {
  ArrowLeft,
  BookOpen,
  Check,
  FileText,
  Globe2,
  MapPin,
  Mail,
  Phone,
  Package2,
  ShieldCheck,
  Ship,
  Anchor,
  Waves,
} from "lucide-react"

export default function MarineExportsClientPage() {
  const productCategories = [
    {
      title: "Engine & Transmission",
      examples: ["Pistons", "Liners", "Injectors", "Turbochargers", "Crankshafts"],
    },
    {
      title: "Propulsion & Pumps",
      examples: ["Propellers", "Thrusters", "Bilge/Water Pumps", "Impellers", "Seals"],
    },
    {
      title: "Electrical & Navigation",
      examples: ["Switchboards", "Sensors", "Marine Lighting", "Power Systems"],
    },
    {
      title: "Safety & Deck Equipment",
      examples: ["Life Jackets", "Lifeboats", "Firefighting Systems", "Anchors", "Winches"],
    },
    {
      title: "Consumables & Maintenance",
      examples: ["Filters", "Bearings", "Valves", "Lubricants", "Gaskets", "Chemicals"],
    },
  ]

  const listingIncludes = [
    { label: "Technical Specifications", icon: BookOpen },
    { label: "OEM Part Numbers", icon: Package2 },
    { label: "Marine Packaging Standards", icon: Ship },
    { label: "Export Certifications & CoO", icon: FileText },
  ]

  const services = [
    {
      title: "Global Supplier Sourcing",
      desc: "Certified marine manufacturers and OEM suppliers worldwide",
      icon: ShieldCheck,
    },
    {
      title: "Export Documentation",
      desc: "Invoice, Packing List, Certificate of Origin",
      icon: FileText,
    },
    {
      title: "Import Compliance",
      desc: "Maldives & Saudi Arabia import regulations support",
      icon: ShieldCheck,
    },
    {
      title: "Marine Packaging",
      desc: "Safe transport packaging for marine environments",
      icon: Package2,
    },
    {
      title: "Logistics Support",
      desc: "Air & sea freight coordination and tracking",
      icon: Ship,
    },
  ]

  const markets = [
    {
      country: "Maldives",
      description: "Fishing vessels, resort ferries, yachts, passenger boats",
    },
    {
      country: "Saudi Arabia",
      description: "Offshore rigs, oilfield vessels, shipyards, shipping companies",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <IslandNavbar showLogo={true} />

      {/* Hero */}
      <section className="relative h-[80vh] min-h-[500px] w-full overflow-hidden">
        <div
          className="absolute inset-0 bg-slate-900"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/ship-anchor-marine.jpg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />
        <div className="relative z-10 h-full w-full">
          <div className="mx-auto flex h-full max-w-4xl flex-col items-center justify-center px-6 text-center">
            <Link
              href="/"
              className="inline-flex items-center text-white hover:text-teal-200 mb-6 transition-colors duration-300 hover:scale-105 transform"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to home
            </Link>
            <h1 className="text-balance text-3xl md:text-4xl lg:text-5xl font-serif font-light tracking-wide text-white animate-fade-in-up">
              HAMAD MARINE
            </h1>
            <p className="mt-3 text-base md:text-lg text-white animate-fade-in-up animation-delay-200 font-serif">
              Trusted Merchant Exporter of Marine Spare Parts
            </p>
            <p className="mt-2 text-sm md:text-base text-teal-200 animate-fade-in-up animation-delay-300 font-medium">
              Reliable Parts. On Time. Every Time.
            </p>
            <p className="mt-6 max-w-2xl text-pretty text-white/95 leading-relaxed text-sm md:text-base animate-fade-in-up animation-delay-400 text-justify">
              HAMAD MARINE is a merchant exporting company based in India, specializing in supplying high-quality marine
              spare parts to the Maldives and Saudi Arabia. We partner with certified global manufacturers and OEM
              suppliers, ensuring every shipment meets international quality standards.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3 animate-fade-in-up animation-delay-600">
              <Button className="rounded-full bg-teal-600 hover:bg-teal-700 px-6 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl text-white">
                Request Marine Catalog
              </Button>
              <Button
                variant="outline"
                className="rounded-full border-white/60 text-white hover:bg-white/20 hover:text-white px-6 bg-transparent transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Talk to Marine Expert
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & About */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-6 md:grid-cols-2">
            <Card className="rounded-2xl hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 group">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <CardTitle className="text-2xl font-serif group-hover:text-teal-600 transition-colors duration-300">
                    Our Mission
                  </CardTitle>
                  <Anchor className="w-12 h-12 text-teal-600 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <CardDescription className="text-justify leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                  To be the trusted bridge between global marine manufacturers and the growing marine industries of the
                  Indian Ocean and Middle East, delivering spare parts with integrity and reliability.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="rounded-2xl hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 group">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <CardTitle className="text-2xl font-serif group-hover:text-teal-600 transition-colors duration-300">
                    About Us
                  </CardTitle>
                  <Waves className="w-12 h-12 text-teal-600 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <CardDescription className="text-justify leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                  HAMAD MARINE is a merchant exporting company based in India, specializing in supplying high-quality
                  marine spare parts to the Maldives and Saudi Arabia. We partner with certified global manufacturers
                  and OEM suppliers, ensuring every shipment meets international quality standards. With a
                  customer-first approach, we deliver trust, efficiency, and cost-effective solutions to ship operators,
                  shipyards, and marine service providers.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="py-4">
        <div className="mx-auto max-w-6xl px-6">
          <Card className="rounded-2xl hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1">
            <CardHeader>
              <CardTitle className="text-2xl font-serif">Why Choose HAMAD MARINE?</CardTitle>
              <CardDescription className="text-justify leading-relaxed">
                Built on marine expertise, reliability, and quality assurance.
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4 md:grid-cols-2">
              {[
                "OEM & certified suppliers",
                "End-to-end export support",
                "Expertise in Maldives & Saudi markets",
                "Timely shipping via air & sea freight",
                "Competitive pricing & bulk supply options",
                "Dedicated after-sales support",
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 group hover:bg-teal-50 p-3 rounded-lg transition-all duration-300"
                >
                  <Check className="mt-0.5 h-5 w-5 text-teal-600 group-hover:scale-110 transition-transform duration-300" />
                  <p className="text-gray-700 text-justify leading-relaxed group-hover:text-gray-900 transition-colors duration-300">
                    {item}
                  </p>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Products */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-light text-gray-900">Marine Spare Parts</h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-justify leading-relaxed">
              All marine parts meet international maritime standards and are sourced from certified global manufacturers
              with required marine certifications and quality approvals.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {productCategories.map((cat, index) => (
              <Card
                key={cat.title}
                className="rounded-2xl hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <CardTitle className="text-lg font-serif group-hover:text-teal-600 transition-colors duration-300">
                    {cat.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-gray-600">
                  <span className="block mb-2 font-medium text-gray-900 group-hover:text-teal-600 transition-colors duration-300">
                    E.g.,
                  </span>
                  <ul className="list-disc pl-5 space-y-1">
                    {cat.examples.map((ex) => (
                      <li key={ex} className="group-hover:text-gray-700 transition-colors duration-300">
                        {ex}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Each Listing Includes */}
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {listingIncludes.map((item, index) => {
              const Icon = item.icon
              return (
                <div
                  key={item.label}
                  className="rounded-xl border bg-white px-4 py-5 flex items-center gap-3 text-sm hover:shadow-lg hover:bg-teal-50 transition-all duration-300 transform hover:-translate-y-1 group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <Icon className="h-5 w-5 text-teal-600 group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-gray-800 group-hover:text-teal-600 transition-colors duration-300">
                    {item.label}
                  </span>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Export Services */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-light text-gray-900">Export Services</h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-justify leading-relaxed">
              We handle the entire marine export workflow—from sourcing to delivery—while maintaining full compliance
              with international maritime and export regulations.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s, index) => {
              const Icon = s.icon
              return (
                <Card
                  key={s.title}
                  className="rounded-2xl hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardHeader className="flex-row items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-teal-50 grid place-items-center group-hover:bg-teal-100 transition-colors duration-300">
                      <Icon className="h-5 w-5 text-teal-600 group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <div className="p-0">
                      <CardTitle className="text-lg font-serif group-hover:text-teal-600 transition-colors duration-300">
                        {s.title}
                      </CardTitle>
                      <CardDescription className="text-justify leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                        {s.desc}
                      </CardDescription>
                    </div>
                  </CardHeader>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Markets We Serve */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-2xl md:text-3xl font-serif font-light text-gray-900 mb-8">Marine Markets We Serve</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {markets.map((market, index) => (
              <Card
                key={market.country}
                className="rounded-2xl hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Globe2 className="h-8 w-8 text-teal-600 group-hover:scale-110 transition-transform duration-300" />
                    <CardTitle className="text-xl font-serif group-hover:text-teal-600 transition-colors duration-300">
                      {market.country}
                    </CardTitle>
                  </div>
                  <CardDescription className="text-justify leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                    {market.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-light text-white">Contact Our Marine Export Team</h2>
          <p className="mt-3 text-white/90 text-justify leading-relaxed max-w-2xl mx-auto">
            Ready to place a marine parts order or need more information about our marine spare parts and equipment? Our
            expert team is here to help with all your marine export needs.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-xl border border-white/10 bg-white/5 p-5 hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-1 group">
              <div className="mx-auto mb-3 grid h-10 w-10 place-items-center rounded-full bg-white/10 group-hover:bg-white/20 transition-colors duration-300">
                <Phone className="h-5 w-5 text-white group-hover:scale-110 transition-transform duration-300" />
              </div>
              <p className="text-sm text-white/80">Phone</p>
              <p className="mt-1 font-medium tracking-wide text-white">+966599274750</p>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/5 p-5 hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-1 group">
              <div className="mx-auto mb-3 grid h-10 w-10 place-items-center rounded-full bg-white/10 group-hover:bg-white/20 transition-colors duration-300">
                <Mail className="h-5 w-5 text-white group-hover:scale-110 transition-transform duration-300" />
              </div>
              <p className="text-sm text-white/80">Email</p>
              <p className="mt-1 font-medium tracking-wide text-white">Hamad@Hamadco.in</p>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/5 p-5 hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-1 group">
              <div className="mx-auto mb-3 grid h-10 w-10 place-items-center rounded-full bg-white/10 group-hover:bg-white/20 transition-colors duration-300">
                <Globe2 className="h-5 w-5 text-white group-hover:scale-110 transition-transform duration-300" />
              </div>
              <p className="text-sm text-white/80">Website</p>
              <p className="mt-1 font-medium tracking-wide text-white">www.hamadco.in</p>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/5 p-5 hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-1 group">
              <div className="mx-auto mb-3 grid h-10 w-10 place-items-center rounded-full bg-white/10 group-hover:bg-white/20 transition-colors duration-300">
                <MapPin className="h-5 w-5 text-white group-hover:scale-110 transition-transform duration-300" />
              </div>
              <p className="text-sm text-white/80">Location</p>
              <p className="mt-1 font-medium tracking-wide text-white">Kerala, India</p>
            </div>
          </div>

          <div className="mt-10">
            <Button className="rounded-full bg-teal-600 hover:bg-teal-700 px-7 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl text-white">
              Request Marine Parts Catalog
            </Button>
          </div>
        </div>
      </section>

      <footer className="bg-slate-950 text-white py-12">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-8 md:grid-cols-4">
            {/* Company Info */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <Ship className="w-10 h-10 text-teal-400" />
                <div>
                  <h3 className="text-xl font-semibold text-white font-serif">HAMAD MARINE</h3>
                  <p className="text-sm text-white/70">Marine Export Specialists</p>
                </div>
              </div>
              <p className="text-white/80 text-sm leading-relaxed mb-4 text-justify">
                Your trusted partner for marine spare parts exports from India to Maldives and Saudi Arabia. We ensure
                quality, compliance, and reliable delivery of marine equipment and spare parts across maritime markets.
              </p>
              <div className="flex gap-4">
                <Badge variant="outline" className="border-white/30 text-white/90 hover:bg-white/10">
                  OEM Certified
                </Badge>
                <Badge variant="outline" className="border-white/30 text-white/90 hover:bg-white/10">
                  Maritime Standards
                </Badge>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white font-serif">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                {["Marine Parts", "Export Services", "Certifications", "Market Coverage", "Documentation"].map(
                  (link) => (
                    <li key={link}>
                      <Link
                        href="#"
                        className="text-white/70 hover:text-white transition-colors duration-300 hover:underline"
                      >
                        {link}
                      </Link>
                    </li>
                  ),
                )}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white font-serif">Contact Info</h4>
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-2 text-white/80">
                  <Phone className="h-4 w-4" />
                  <span>+966599274750</span>
                </div>
                <div className="flex items-center gap-2 text-white/80">
                  <Mail className="h-4 w-4" />
                  <span>Hamad@Hamadco.in</span>
                </div>
                <div className="flex items-center gap-2 text-white/80">
                  <Globe2 className="h-4 w-4" />
                  <span>www.hamadco.in</span>
                </div>
                <div className="flex items-center gap-2 text-white/80">
                  <MapPin className="h-4 w-4" />
                  <span>Kerala, India</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-8 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/60 text-sm">
              © 2024 HAMAD MARINE. All rights reserved. Marine Export License: DGFT/2024/MAR/001
            </p>
            <div className="flex gap-6 text-sm">
              <Link href="#" className="text-white/60 hover:text-white transition-colors duration-300">
                Privacy Policy
              </Link>
              <Link href="#" className="text-white/60 hover:text-white transition-colors duration-300">
                Terms of Service
              </Link>
              <Link href="#" className="text-white/60 hover:text-white transition-colors duration-300">
                Export Compliance
              </Link>
            </div>
          </div>
        </div>
      </footer>

      {/* Added custom CSS for animations */}
      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
        
        .animation-delay-200 {
          animation-delay: 0.2s;
          opacity: 0;
        }
        
        .animation-delay-300 {
          animation-delay: 0.3s;
          opacity: 0;
        }
        
        .animation-delay-400 {
          animation-delay: 0.4s;
          opacity: 0;
        }
        
        .animation-delay-600 {
          animation-delay: 0.6s;
          opacity: 0;
        }
      `}</style>
    </div>
  )
}
