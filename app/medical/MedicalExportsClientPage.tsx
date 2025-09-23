"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"
import IslandNavbar from "@/components/island-navbar"
import {
  ArrowLeft,
  BookOpen,
  FileText,
  Globe2,
  Package2,
  ShieldCheck,
  Ship,
  Thermometer,
  Pill,
  Heart,
  Stethoscope,
  Syringe,
  Microscope,
  Activity,
  Zap,
  Star,
  Target,
  Award,
  Users,
  TrendingUp,
  Shield,
  Phone,
  Mail,
} from "lucide-react"

const FloatingShapes = ({ variant = "default" }: { variant?: "default" | "dots" | "lines" | "circles" }) => {
  if (variant === "dots") {
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Mesh background */}
        <div className="absolute inset-0 opacity-5">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="mesh-dots" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                <circle cx="20" cy="20" r="1" fill="#0c6f53" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#mesh-dots)" />
          </svg>
        </div>

        <div className="absolute top-10 left-10 w-2 h-2 bg-[#0c6f53]/30 rounded-full animate-pulse opacity-60" />
        <div
          className="absolute top-32 right-20 w-1 h-1 bg-[#0c6f53]/40 rounded-full animate-pulse opacity-40"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute bottom-40 left-1/4 w-3 h-3 bg-[#0c6f53]/20 rounded-full animate-pulse opacity-50"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute bottom-20 right-1/3 w-1.5 h-1.5 bg-[#0c6f53]/35 rounded-full animate-pulse opacity-30"
          style={{ animationDelay: "3s" }}
        />
        <div
          className="absolute top-1/2 left-10 w-4 h-4 bg-[#0c6f53]/25 rounded-full animate-pulse opacity-40"
          style={{ animationDelay: "4s" }}
        />
        <div
          className="absolute top-20 right-1/4 w-2.5 h-2.5 bg-[#0c6f53]/40 rounded-full animate-pulse opacity-35"
          style={{ animationDelay: "5s" }}
        />
        <div className="absolute top-16 left-1/3 opacity-15 animate-pulse" style={{ animationDelay: "6s" }}>
          <div className="w-6 h-2 bg-[#0c6f53]/40 rounded-full" />
          <div className="w-2 h-6 bg-[#0c6f53]/40 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
        </div>
        <div className="absolute bottom-32 right-10 opacity-20 animate-pulse" style={{ animationDelay: "7s" }}>
          <Activity className="h-8 w-8 text-[#0c6f53]/50" />
        </div>
      </div>
    )
  }

  if (variant === "lines") {
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        {/* Mesh background */}
        <div className="absolute inset-0 opacity-3">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="mesh-lines" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M0 30 L60 30 M30 0 L30 60" stroke="#0c6f53" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#mesh-lines)" />
          </svg>
        </div>

        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-[#0c6f53]/40 to-transparent" />
        <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-[#0c6f53]/30 to-transparent" />
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#0c6f53]/30 to-transparent" />
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#0c6f53]/25 to-transparent transform rotate-12" />
          <div className="absolute bottom-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#0c6f53]/25 to-transparent transform -rotate-12" />
        </div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-15">
          <div className="w-32 h-px bg-[#0c6f53]/40 animate-pulse" style={{ animationDelay: "8s" }} />
          <div
            className="w-px h-32 bg-[#0c6f53]/40 animate-pulse absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            style={{ animationDelay: "9s" }}
          />
        </div>
      </div>
    )
  }

  if (variant === "circles") {
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Mesh background */}
        <div className="absolute inset-0 opacity-4">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="mesh-circles" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
                <circle cx="40" cy="40" r="20" fill="none" stroke="#0c6f53" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#mesh-circles)" />
          </svg>
        </div>

        <div className="absolute -top-20 -right-20 w-40 h-40 border border-[#0c6f53]/30 rounded-full opacity-30 animate-pulse" />
        <div
          className="absolute -bottom-10 -left-10 w-32 h-32 border border-[#0c6f53]/25 rounded-full opacity-20 animate-pulse"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 border border-[#0c6f53]/20 rounded-full opacity-10 animate-pulse"
          style={{ animationDelay: "4s" }}
        />
        <div className="absolute top-20 right-20 w-16 h-16 opacity-15" style={{ animationDelay: "6s" }}>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-2 bg-[#0c6f53]/30 rounded-full animate-pulse" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-12 bg-[#0c6f53]/30 rounded-full animate-pulse" />
        </div>
        <div className="absolute top-10 left-20 opacity-20 animate-pulse" style={{ animationDelay: "10s" }}>
          <div className="w-20 h-20 border border-[#0c6f53]/30 rounded-full flex items-center justify-center">
            <Stethoscope className="h-6 w-6 text-[#0c6f53]/50" />
          </div>
        </div>
        <div className="absolute bottom-20 right-32 opacity-15 animate-pulse" style={{ animationDelay: "12s" }}>
          <div className="w-16 h-16 border border-[#0c6f53]/25 rounded-full flex items-center justify-center">
            <Heart className="h-5 w-5 text-[#0c6f53]/40" />
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Mesh background */}
      <div className="absolute inset-0 opacity-3">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="mesh-default" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse">
              <rect x="0" y="0" width="50" height="50" fill="none" stroke="#0c6f53" strokeWidth="0.3" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#mesh-default)" />
        </svg>
      </div>

      <div className="absolute top-20 left-10 w-8 h-8 bg-[#0c6f53]/20 rounded-lg rotate-45 animate-pulse opacity-40" />
      <div
        className="absolute bottom-32 right-16 w-6 h-6 bg-[#0c6f53]/30 rounded-full animate-pulse opacity-30"
        style={{ animationDelay: "1.5s" }}
      />
      <div
        className="absolute top-1/2 left-1/4 w-4 h-4 bg-[#0c6f53]/25 rounded-sm rotate-12 animate-pulse opacity-20"
        style={{ animationDelay: "3s" }}
      />
      <div
        className="absolute top-40 right-1/4 w-3 h-8 bg-[#0c6f53]/25 rounded-full animate-pulse opacity-25"
        style={{ animationDelay: "4.5s" }}
      />
      <div
        className="absolute bottom-1/4 left-1/3 w-6 h-3 bg-[#0c6f53]/22 rounded-full animate-pulse opacity-30"
        style={{ animationDelay: "6s" }}
      />
      <div className="absolute top-32 right-10 opacity-20 animate-pulse" style={{ animationDelay: "7s" }}>
        <Zap className="h-6 w-6 text-[#0c6f53]/40 transform rotate-12" />
      </div>
      <div className="absolute bottom-40 left-16 opacity-25 animate-pulse" style={{ animationDelay: "8s" }}>
        <Star className="h-5 w-5 text-[#0c6f53]/50" />
      </div>
      <div className="absolute top-1/3 right-1/3 opacity-15 animate-pulse" style={{ animationDelay: "9s" }}>
        <Target className="h-7 w-7 text-[#0c6f53]/35" />
      </div>
      <div className="absolute bottom-1/3 left-1/4 opacity-20 animate-pulse" style={{ animationDelay: "10s" }}>
        <Award className="h-6 w-6 text-[#0c6f53]/45" />
      </div>
    </div>
  )
}

const scrollToContact = () => {
  const contactSection = document.getElementById("contact")
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: "smooth" })
  }
}

export default function MedicalExportsClientPage() {
  const productCategories = [
    {
      title: "Antibiotics",
      examples: ["Amoxicillin", "Ciprofloxacin", "Azithromycin"],
      icon: Pill,
    },
    {
      title: "Vitamins & Nutraceuticals",
      examples: ["Multivitamins", "Vitamin C", "Iron & Folic Acid"],
      icon: Heart,
    },
    {
      title: "Generic Medicines",
      examples: ["Paracetamol", "Metformin", "Losartan"],
      icon: Stethoscope,
    },
    {
      title: "Medical Devices & Consumables",
      examples: ["Surgical gloves", "Syringes", "BP monitors"],
      icon: Syringe,
    },
    {
      title: "Specialty Pharmaceuticals",
      examples: ["ARVs", "Antimalarials", "Oncology drugs"],
      icon: Microscope,
    },
  ]

  const listingIncludes = [
    { label: "Description & Composition", icon: BookOpen },
    { label: "Strength & Dosage Form", icon: Package2 },
    { label: "Shelf Life & Packaging Options", icon: Ship },
    { label: "Export Certifications (COPP, CoA, MSDS, etc.)", icon: FileText },
  ]

  const services = [
    {
      title: "Product Sourcing",
      desc: "From WHO‑GMP & CDSCO‑certified Indian manufacturers",
      icon: ShieldCheck,
    },
    {
      title: "Export Documentation",
      desc: "Invoice, Packing List, Certificate of Origin, COPP",
      icon: FileText,
    },
    {
      title: "Regulatory Compliance",
      desc: "CDSCO, DGFT and country‑specific registration guidance",
      icon: ShieldCheck,
    },
    {
      title: "Shipping & Logistics",
      desc: "End‑to‑end support for air and sea freight",
      icon: Ship,
    },
    {
      title: "Cold Chain Logistics",
      desc: "Temperature‑controlled handling for sensitive products",
      icon: Thermometer,
    },
    {
      title: "Labeling & Packaging",
      desc: "Country‑specific labeling and packaging support",
      icon: Package2,
    },
  ]

  const markets = [
    "Nigeria",
    "Ghana",
    "Kenya",
    "Ethiopia",
    "Uganda",
    "Rwanda",
    "South Africa",
    "Tanzania",
    "Other African nations",
  ]

  const articles = [
    "How to Import Medicines from India to Africa",
    "What is a Certificate of Pharmaceutical Product (COPP)?",
    "Understanding Regulatory Requirements in Kenya and Nigeria",
    "How to Ensure Cold Chain Compliance in African Markets",
  ]

  return (
    <div className="min-h-screen bg-background">
      <IslandNavbar />
      
      {/* Hero - Updated with medical desk background */}
      <div
      
        className="relative w-full overflow-hidden"
        style={{
          height: "80vh",
          minHeight: "500px",
          backgroundColor: "#f8fafc",
          background: "#f8fafc",
        }}
      >
        <br /><br />
        <FloatingShapes variant="circles" />

        <div className="absolute inset-0" style={{ backgroundColor: "#f8fafc" }}>
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url('/images/3d-coronavirus-vaccine.jpg')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              opacity: 0.7,
              filter: "blur(3px)",
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background: "linear-gradient(135deg, rgba(248, 250, 252, 0.7) 0%, rgba(231, 243, 255, 0.5) 100%)",
            }}
          />
        </div>

        {/* ... existing hero content ... */}
        <div className="relative h-full w-full flex items-center justify-center" style={{ zIndex: 10 }}>
          <div
            className="max-w-4xl mx-auto px-6 text-center"
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.95)",
              padding: "2rem",
              borderRadius: "1rem",
              boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
            }}
          >

            <center>
              <Image
                    src="/images/hpharma.png"
                    alt="Animated hands protecting medical cross symbol"
                    width={120}
                    height={60}
                    className="md:w-60 md:h-18 ml-4 group-hover:scale-110 transition-transform duration-300"
                  />
            </center>
            <center>
            <h1
            
              className="text-balance text-3xl md:text-4xl lg:text-5xl font-serif font-light tracking-wide animate-fade-in-up"
              style={{
                color: "#163764",
                marginBottom: "1rem",
              }}
            >
            India’s Trusted Medical Exporters to Africa
            </h1></center>

            <div className="mt-6 flex justify-center">
              <Image
                src="/images/world-health-day.gif"
                alt="Animated tablet and medicine illustration"
                width={80}
                height={80}
                className="opacity-80 hover:opacity-100 transition-opacity duration-300"
              />
            </div>
            <p
              className="text-base md:text-lg animate-fade-in-up animation-delay-200 font-serif"
              style={{
                color: "#0c6f53",
                marginBottom: "1.5rem",
                fontWeight: "600",
              }}
            >
              Delivering Health. Ensuring Compliance.
              
              
            </p>

            <p
              className="max-w-2xl mx-auto text-pretty leading-relaxed text-sm md:text-base animate-fade-in-up animation-delay-400 text-justify"
              style={{
                color: "#374151",
                marginBottom: "2rem",
              }}
            >
              We are an India-based merchant export company specializing in high-quality medical pharmaceuticals products, equipment, and healthcare solutions for African markets.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3 animate-fade-in-up animation-delay-600">
              <button
                onClick={() => window.open("https://wa.me/918086890111", "_blank")}
                className="rounded-full px-6 py-3 font-medium transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl bg-[#163764] hover:bg-[#163764]/90 text-white border-none cursor-pointer"
              >
                Request catalog
              </button>

              <br />
              <br />
              <br />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-[#163764] to-[#0c6f53] py-4 overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          <span className="text-white mx-8 flex items-center gap-2">
            <Pill className="h-4 w-4 animate-pulse" />
            WHO-GMP Certified Products
          </span>
          <span className="text-white mx-8 flex items-center gap-2">
            <ShieldCheck className="h-4 w-4 animate-pulse" />
            CDSCO Approved Manufacturers
          </span>
          <span className="text-white mx-8 flex items-center gap-2">
            <Ship className="h-4 w-4 animate-pulse" />
            Global Shipping Network
          </span>
          <span className="text-white mx-8 flex items-center gap-2">
            <Heart className="h-4 w-4 animate-pulse" />
            Quality Healthcare Solutions
          </span>
          <span className="text-white mx-8 flex items-center gap-2">
            <Globe2 className="h-4 w-4 animate-pulse" />
            Serving 15+ African Countries
          </span>
          <span className="text-white mx-8 flex items-center gap-2">
            <Users className="h-4 w-4 animate-pulse" />
            Trusted by 500+ Clients
          </span>
          <span className="text-white mx-8 flex items-center gap-2">
            <TrendingUp className="h-4 w-4 animate-pulse" />
            Growing Healthcare Network
          </span>
          <span className="text-white mx-8 flex items-center gap-2">
            <Shield className="h-4 w-4 animate-pulse" />
            100% Compliance Guaranteed
          </span>
          <span className="text-white mx-8 flex items-center gap-2">
            <Pill className="h-4 w-4 animate-pulse" />
            WHO-GMP Certified Products
          </span>
          <span className="text-white mx-8 flex items-center gap-2">
            <ShieldCheck className="h-4 w-4 animate-pulse" />
            CDSCO Approved Manufacturers
          </span>
          <span className="text-white mx-8 flex items-center gap-2">
            <Ship className="h-4 w-4 animate-pulse" />
            Global Shipping Network
          </span>
          <span className="text-white mx-8 flex items-center gap-2">
            <Heart className="h-4 w-4 animate-pulse" />
            Quality Healthcare Solutions
          </span>
          <span className="text-white mx-8 flex items-center gap-2">
            <Globe2 className="h-4 w-4 animate-pulse" />
            Serving 15+ African Countries
          </span>
        </div>
      </div>

      {/* Mission & About */}
      <section id="mission" className="py-16 md:py-24 relative overflow-hidden">
        <FloatingShapes variant="dots" />

        {/* ... existing mission content ... */}
        <div className="mx-auto max-w-6xl px-6 relative z-10">
          <div className="grid gap-6 md:grid-cols-2">
            <Card className="rounded-2xl hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 group border-l-4 border-l-[#163764]">
              <CardHeader className="pb-2 md:pb-6">
                <div className="flex items-center justify-between mb-4">
                  <CardTitle className="text-xl md:text-2xl font-serif group-hover:text-[#163764] transition-colors duration-300">
                    Our Mission
                  </CardTitle>
                  <Image
                    src="/images/doctor-healthcare.gif"
                    alt="Animated hands protecting medical cross symbol"
                    width={60}
                    height={60}
                    className="md:w-20 md:h-20 ml-4 group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <CardDescription className="text-justify leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                  To be a trusted bridge between India's leading medical and pharmaceutical producers and the growing
                  healthcare needs of African countries—delivering quality pharmaceutical products with integrity and
                  efficiency while ensuring full regulatory compliance.
                </CardDescription>
                <div className="mt-4">
                  
                </div>
              </CardHeader>
            </Card>
            <Card className="rounded-2xl hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 group border-l-4 border-l-[#0c6f53]">
              <CardHeader className="pb-2 md:pb-6">
                <div className="flex items-center justify-between mb-4">
                  <CardTitle className="text-xl md:text-2xl font-serif group-hover:text-[#0c6f53] transition-colors duration-300">
                    About Us
                  </CardTitle>
                  <Image
                    src="/images/medicine-caduceus.gif"
                    alt="Animated medicine bottle illustration"
                    width={60}
                    height={60}
                    className="md:w-20 md:h-20 ml-4 group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <CardDescription className="text-justify leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                  HAMAD CO is a merchant export company focused on delivering Indian medical and pharmaceutical products
                  to clients across Africa. Our business is built on reliability, compliance, and strong partnerships
                  with certified Indian manufacturers in the healthcare sector.
                </CardDescription>
                <div className="mt-4">
                  
                </div>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Products */}
      <section id="products" className="py-16 md:py-24 relative overflow-hidden">
        <FloatingShapes variant="lines" />

        <div className="mx-auto max-w-6xl px-6 relative z-10">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-light text-gray-900">
              Medical Export Products
            </h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-justify leading-relaxed">
              All medical products meet international healthcare standards and are
              sourced from licensed Indian manufacturers with required medical
              certifications and regulatory approvals.
            </p>
            <div className="mt-6 flex justify-center">
              <Image
                src="/images/Medical Shield.gif"
                alt="Animated tablet and medicine illustration"
                width={80}
                height={80}
                className="opacity-80 hover:opacity-100 transition-opacity duration-300"
              />
            </div>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {productCategories.map((cat, index) => {
              const Icon = cat.icon
              return (
                <Card
                  key={cat.title}
                  className="rounded-2xl hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="h-10 w-10 rounded-full bg-[#163764]/10 grid place-items-center group-hover:bg-[#163764]/20 transition-colors duration-300">
                        <Icon className="h-5 w-5 text-[#163764] group-hover:scale-110 transition-transform duration-300" />
                      </div>
                      <CardTitle className="text-lg font-serif group-hover:text-[#163764] transition-colors duration-300">
                        {cat.title}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="text-sm text-gray-600">
                    <ul className="list-disc pl-5 space-y-1">
                      {cat.examples.map((ex) => (
                        <li
                          key={ex}
                          className="group-hover:text-gray-700 transition-colors duration-300"
                        >
                          {ex}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          {/* Each Listing Includes */}
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {listingIncludes.map((item, index) => {
              const Icon = item.icon
              return (
                <div
                  key={item.label}
                  className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm p-5 hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-1 group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <Icon className="h-5 w-5 text-[#163764] group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-gray-800 group-hover:text-[#163764] transition-colors duration-300">
                    {item.label}
                  </span>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Export Services */}
      <section id="services" className="py-16 md:py-24 bg-gray-50 relative overflow-hidden">
        <FloatingShapes variant="default" />

        {/* ... existing services content ... */}
        <div className="mx-auto max-w-6xl px-6 relative z-10">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-light text-gray-900">Medical Export Services</h2>
            <center>
              <Image
                src="/images/Animated Africa continent.gif"
                alt="Animated tablet and medicine illustration"
                width={80}
                height={80}
                className="md:w-70 md:h-70 ml-4 group-hover:scale-110 transition-transform duration-300"
              />
            </center>
            
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-justify leading-relaxed">
              We handle the entire medical export workflow—from sourcing to delivery—while maintaining full compliance
              with both Indian and African regulatory requirements for healthcare products.
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
                    <div className="h-10 w-10 rounded-full bg-[#163764]/10 grid place-items-center group-hover:bg-[#163764]/20 transition-colors duration-300">
                      <Icon className="h-5 w-5 text-[#163764] group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <div className="p-0">
                      <CardTitle className="text-lg font-serif group-hover:text-[#163764] transition-colors duration-300">
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
      <section id="markets" className="py-16 relative overflow-hidden">
        <FloatingShapes variant="circles" />

        <div className="mx-auto max-w-6xl px-6 relative z-10">
          <h2 className="text-2xl md:text-3xl font-serif font-light text-gray-900">Healthcare Markets We Serve</h2>
          <div className="mt-6 flex flex-wrap gap-3">
            {markets.map((m, index) => (
              <Badge
                key={m}
                variant="outline"
                className="rounded-full border-gray-300 text-gray-800 hover:bg-[#163764]/10 hover:border-[#163764]/30 hover:text-[#163764] transition-all duration-300 transform hover:scale-105"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <Globe2 className="mr-2 h-3.5 w-3.5" />
                {m}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* References */}
      <section id="references" className="py-16 bg-gray-50 relative overflow-hidden">
        <FloatingShapes variant="dots" />

        <div className="mx-auto max-w-6xl px-6 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-serif font-light text-gray-900">Our Medical Export References</h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-justify leading-relaxed">
              Trusted partnerships with healthcare organizations and medical distributors across Africa and the Middle
              East.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                company: "Lagos Medical Supplies Ltd.",
                location: "Lagos, Nigeria",
                products: "Pharmaceutical imports",
                partnership: "5+ years",
              },
              {
                company: "Kenya Healthcare Distributors",
                location: "Nairobi, Kenya",
                products: "Medical equipment & supplies",
                partnership: "3+ years",
              },
              {
                company: "Gulf Medical Trading Co.",
                location: "Dubai, UAE",
                products: "Pharmaceutical products",
                partnership: "7+ years",
              },
              {
                company: "West Africa Pharma Solutions",
                location: "Accra, Ghana",
                products: "Generic medicines",
                partnership: "4+ years",
              },
              {
                company: "East African Medical Corp.",
                location: "Kampala, Uganda",
                products: "Medical consumables",
                partnership: "2+ years",
              },
              {
                company: "Sahara Healthcare Network",
                location: "Khartoum, Sudan",
                products: "Pharmaceutical exports",
                partnership: "6+ years",
              },
            ].map((reference, index) => (
              <Card
                key={index}
                className="rounded-2xl hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-[#163764] transition-colors duration-300">
                    {reference.company}
                  </h3>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex items-center gap-2 group-hover:text-gray-700 transition-colors duration-300">
                      <Globe2 className="h-4 w-4 text-[#163764] group-hover:scale-110 transition-transform duration-300" />
                      <span>{reference.location}</span>
                    </div>
                    <div className="flex items-center gap-2 group-hover:text-gray-700 transition-colors duration-300">
                      <Package2 className="h-4 w-4 text-[#0c6f53] group-hover:scale-110 transition-transform duration-300" />
                      <span>{reference.products}</span>
                    </div>
                    <div className="flex items-center gap-2 group-hover:text-gray-700 transition-colors duration-300">
                      <ShieldCheck className="h-4 w-4 text-[#163764] group-hover:scale-110 transition-transform duration-300" />
                      <span>Partnership: {reference.partnership}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Photo Gallery Section ===== */}
      <section className="py-16 bg-gray-100" id="gallery">
        <div className="max-w-7xl mx-auto px-6 text-center">
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div className="overflow-hidden rounded-2xl shadow-lg">
              <img
                src="/images/medicalexport.jpg"
                alt="Medical export operations"
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="overflow-hidden rounded-2xl shadow-lg">
              <img
                src="/images/bf.jpg"
                alt="Pharmaceutical supplies"
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="overflow-hidden rounded-2xl shadow-lg">
              <img
                src="/images/gff.jpg"
                alt="Healthcare equipment"
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            
            
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 bg-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-10 left-10 w-3 h-3 bg-white/10 rounded-full animate-pulse opacity-60" />
          <div
            className="absolute top-32 right-20 w-2 h-2 bg-white/20 rounded-full animate-pulse opacity-40"
            style={{ animationDelay: "1s" }}
          />
          <div
            className="absolute bottom-40 left-1/4 w-4 h-4 bg-white/5 rounded-full animate-pulse opacity-50"
            style={{ animationDelay: "2s" }}
          />
          <div
            className="absolute bottom-20 right-1/3 w-2.5 h-2.5 bg-white/10 rounded-full animate-pulse opacity-30"
            style={{ animationDelay: "3s" }}
          />
          <div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 border border-white/10 rounded-full opacity-20 animate-pulse"
            style={{ animationDelay: "4s" }}
          />
          <div className="absolute top-20 right-10 opacity-10 animate-pulse" style={{ animationDelay: "5s" }}>
            <Activity className="h-8 w-8 text-white/20" />
          </div>
          <div className="absolute bottom-32 left-20 opacity-15 animate-pulse" style={{ animationDelay: "6s" }}>
            <Microscope className="h-6 w-6 text-white/25" />
          </div>
        </div>

        <div className="mx-auto max-w-6xl px-6 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-serif font-light text-white">Contact Our Medical Export Team</h2>
          <p className="mt-3 text-white/90 text-justify leading-relaxed max-w-2xl mx-auto">
            Ready to place a pharmaceutical export order or need more information about our pharmaceutical and
            healthcare products? Our expert team is here to help with all your pharmaceutical export needs.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm p-5 hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-1 group">
              <div className="mx-auto mb-3 grid h-10 w-10 place-items-center rounded-full bg-white/10 group-hover:bg-white/20 transition-colors duration-300">
                <Phone className="h-5 w-5 text-white group-hover:scale-110 transition-transform duration-300" />
              </div>
              <p className="text-sm text-white/80">Phone</p>
              <p className="mt-1 font-medium tracking-wide text-white">+966599274750</p>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm p-5 hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-1 group">
              <div className="mx-auto mb-3 grid h-10 w-10 place-items-center rounded-full bg-white/10 group-hover:bg-white/20 transition-colors duration-300">
                <Mail className="h-5 w-5 text-white group-hover:scale-110 transition-transform duration-300" />
              </div>
              <p className="text-sm text-white/80">Email</p>
              <p className="mt-1 font-medium tracking-wide text-white">Hamad@Hamadco.in</p>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm p-5 hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-1 group">
              <div className="mx-auto mb-3 grid h-10 w-10 place-items-center rounded-full bg-white/10 group-hover:bg-white/20 transition-colors duration-300">
                <Globe2 className="h-5 w-5 text-white group-hover:scale-110 transition-transform duration-300" />
              </div>
              <p className="text-sm text-white/80">Website</p>
              <p className="mt-1 font-medium tracking-wide text-white">www.hamadco.in</p>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm p-5 hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-1 group">
              <div className="mx-auto mb-3 grid h-10 w-10 place-items-center rounded-full bg-white/10 group-hover:bg-white/20 transition-colors duration-300">
                <Globe2 className="h-5 w-5 text-white group-hover:scale-110 transition-transform duration-300" />
              </div>
              <p className="text-sm text-white/80">Location</p>
              <p className="mt-1 font-medium tracking-wide text-white">Kerala, India</p>
            </div>
          </div>

          <div className="mt-12 bg-gradient-to-r from-[#163764] to-[#0c6f53] rounded-2xl p-8 transform hover:scale-105 transition-all duration-300">
            <h3 className="text-2xl font-serif font-light text-white mb-4">Get Instant Support</h3>
            <p className="text-white/90 mb-6 max-w-md mx-auto">
              Connect with our medical export specialists directly on WhatsApp for immediate assistance with your
              pharmaceutical needs.
            </p>
            <a
              href="https://wa.me/918086890111"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white font-medium px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.173-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
              </svg>
              Chat on WhatsApp
            </a>
            <p className="text-white/70 text-sm mt-4">+91-8086890111</p>
          </div>

          <div className="mt-10">
            
          </div>
        </div>
      </section>

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
        
        @keyframes marquee {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
        
        .animate-marquee {
          animation: marquee 25s linear infinite;
        }
        
        .animation-delay-200 {
          animation-delay: 0.2s;
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

        :global(body) {
          cursor: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><text x="50%" y="50%" textAnchor="middle" dy=".3em" fontFamily="Arial, sans-serif" fontSize="16" fontWeight="bold" fill="#333">H</text></svg>') 12 12, auto;
        }
      `}</style>
    </div>
  )
}
