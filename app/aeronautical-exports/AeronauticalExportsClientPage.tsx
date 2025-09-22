"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import IslandNavbar from "@/components/island-navbar"
import { ArrowLeft, Globe2, MapPin, Mail, Phone, Plane, Settings, Wrench } from "lucide-react"

export default function AeronauticalExportsClientPage() {
  return (
    <div className="min-h-screen bg-background">
      <IslandNavbar showLogo={true} />

      {/* Hero */}
      <section className="relative h-[80vh] min-h-[500px] w-full overflow-hidden">
        <div
          className="absolute inset-0 bg-slate-900"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/airplane-aircraft-aviation.jpg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />
        <div className="relative z-10 h-full w-full">
          <div className="mx-auto flex h-full max-w-4xl flex-col items-center justify-center px-6 text-center">
            <Link
              href="/"
              className="inline-flex items-center text-white hover:text-sky-200 mb-6 transition-colors duration-300 hover:scale-105 transform"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to home
            </Link>
            <h1 className="text-balance text-3xl md:text-4xl lg:text-5xl font-serif font-light tracking-wide text-white animate-fade-in-up">
              Aeronautical Parts Exports
            </h1>
            <p className="mt-3 text-base md:text-lg text-white animate-fade-in-up animation-delay-200 font-serif">
              High-Precision Aircraft Components & Aviation Spare Parts
            </p>
            <p className="mt-2 text-sm md:text-base text-sky-200 animate-fade-in-up animation-delay-300 font-medium">
              Coming Soon - Expanding Our Aviation Division
            </p>
            <p className="mt-6 max-w-2xl text-pretty text-white/95 leading-relaxed text-sm md:text-base animate-fade-in-up animation-delay-400 text-justify">
              We are expanding our export capabilities to include high-precision aircraft components and aviation spare
              parts. Our aeronautical division will specialize in sourcing and exporting certified aviation parts to
              meet international aviation standards and regulatory requirements.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3 animate-fade-in-up animation-delay-600">
              <Button className="rounded-full bg-sky-600 hover:bg-sky-700 px-6 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl text-white">
                Get Notified
              </Button>
              <Button
                variant="outline"
                className="rounded-full border-white/60 text-white hover:bg-white/20 hover:text-white px-6 bg-transparent transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Coming Soon Content */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-light text-gray-900 mb-4">
              Aeronautical Division Coming Soon
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-justify leading-relaxed">
              We are currently developing our aeronautical exports division to serve the growing aviation industry with
              high-quality aircraft components and spare parts.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <Card className="rounded-2xl hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 group">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 grid h-16 w-16 place-items-center rounded-full bg-sky-50 group-hover:bg-sky-100 transition-colors duration-300">
                  <Plane className="h-8 w-8 text-sky-600 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <CardTitle className="text-xl font-serif group-hover:text-sky-600 transition-colors duration-300">
                  Aircraft Components
                </CardTitle>
                <CardDescription className="text-justify leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                  High-precision aircraft parts including avionics, hydraulics, pneumatics, and structural components
                  sourced from certified aviation manufacturers.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="rounded-2xl hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 group">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 grid h-16 w-16 place-items-center rounded-full bg-sky-50 group-hover:bg-sky-100 transition-colors duration-300">
                  <Settings className="h-8 w-8 text-sky-600 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <CardTitle className="text-xl font-serif group-hover:text-sky-600 transition-colors duration-300">
                  Aviation Standards
                </CardTitle>
                <CardDescription className="text-justify leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                  All parts will meet international aviation standards including FAA, EASA, and other regulatory
                  requirements with proper certifications and documentation.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="rounded-2xl hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 group">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 grid h-16 w-16 place-items-center rounded-full bg-sky-50 group-hover:bg-sky-100 transition-colors duration-300">
                  <Wrench className="h-8 w-8 text-sky-600 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <CardTitle className="text-xl font-serif group-hover:text-sky-600 transition-colors duration-300">
                  Maintenance Support
                </CardTitle>
                <CardDescription className="text-justify leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                  Comprehensive support for aircraft maintenance operations including spare parts sourcing, technical
                  documentation, and logistics coordination.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Placeholder for Future Content */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-6xl px-6">
          <Card className="rounded-2xl border-2 border-dashed border-gray-300 bg-gray-50/50">
            <CardContent className="p-12 text-center">
              <div className="mx-auto mb-6 grid h-20 w-20 place-items-center rounded-full bg-sky-100">
                <Plane className="h-10 w-10 text-sky-600" />
              </div>
              <h3 className="text-2xl font-serif font-semibold text-gray-900 mb-4">
                Aeronautical Exports Brochure Content
              </h3>
              <p className="text-gray-600 max-w-2xl mx-auto text-justify leading-relaxed mb-6">
                This section will be populated with detailed information about our aeronautical parts and services once
                our aviation division is fully operational. We are working to establish partnerships with certified
                aviation manufacturers and suppliers.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-sky-600 hover:bg-sky-700 text-white">Request Information</Button>
                <Button variant="outline" className="border-sky-600 text-sky-600 hover:bg-sky-50 bg-transparent">
                  Join Mailing List
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-light text-white">
            Get Updates on Our Aviation Division
          </h2>
          <p className="mt-3 text-white/90 text-justify leading-relaxed max-w-2xl mx-auto">
            Interested in our upcoming aeronautical exports services? Contact us to learn more about our aviation
            division development and get notified when we launch.
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
            <Button className="rounded-full bg-sky-600 hover:bg-sky-700 px-7 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl text-white">
              Get Notified When We Launch
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
                <Plane className="w-10 h-10 text-sky-400" />
                <div>
                  <h3 className="text-xl font-semibold text-white font-serif">HAMADCO AVIATION</h3>
                  <p className="text-sm text-white/70">Aeronautical Export Division</p>
                </div>
              </div>
              <p className="text-white/80 text-sm leading-relaxed mb-4 text-justify">
                Expanding our expertise to serve the aviation industry with high-quality aircraft components and spare
                parts. Coming soon with certified suppliers and international aviation standards compliance.
              </p>
              <div className="flex gap-4">
                <Badge variant="outline" className="border-white/30 text-white/90 hover:bg-white/10">
                  Coming Soon
                </Badge>
                <Badge variant="outline" className="border-white/30 text-white/90 hover:bg-white/10">
                  Aviation Standards
                </Badge>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white font-serif">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                {["Aircraft Parts", "Aviation Services", "Certifications", "Global Markets", "Documentation"].map(
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
              © 2024 HAMADCO AVIATION. All rights reserved. Aviation Division Coming Soon.
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
