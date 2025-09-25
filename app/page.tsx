"use client"

import { Card, CardContent } from "@/components/ui/card"
import type React from "react"

import { HomeExtraSections } from "@/components/home-extra-sections"
import ScrollMarquee from "@/components/scroll-marquee"
import { GSAPAnimatedSection } from "@/components/gsap-animated-section"
import { CertificationsSection, GlobalReachSection, TestimonialsSection } from "@/components/business-sections"
import {
  GeometricBackground,
  FloatingShapes,
  WaveBackground,
  GridBackground,
  ParticleBackground,
  HexagonPattern,
  MorphingBlobs,
  NetworkDots,
  SpiralPattern,
} from "@/components/animated-backgrounds"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { useState } from "react"

export default function LandingPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    country: "",
    productInterest: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        const data = await response.json()
        if (data.whatsappUrl) {
          window.open(data.whatsappUrl, "_blank")
        }

        setSubmitStatus("success")
        setFormData({
          name: "",
          email: "",
          company: "",
          phone: "",
          country: "",
          productInterest: "",
          message: "",
        })
      } else {
        setSubmitStatus("error")
      }
    } catch (error) {
      console.error("Error submitting form:", error)
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  const productCategories = [
    {
      title: "Pharmaceutical Exports",
      description: "High-quality pharmaceutical products, medical supplies & healthcare equipment",
      iconName: "Stethoscope",
      href: "/medical",
      image: "/medical-devices-surgical-instruments.png",
      color: "bg-blue-50 text-blue-600",
    },
  ]

  return (
    <>
      <div className="min-h-screen bg-white overflow-hidden">
        <GSAPAnimatedSection animation="fadeUp">
          <section
            className="relative overflow-hidden bg-slate-900 text-white pt-20 pb-16 md:pt-24 md:pb-24"
            style={{ minHeight: "80vh" }} // Updated hero section height from 100vh to 80vh
          >
            <MorphingBlobs />
            <NetworkDots />

            <div className="absolute inset-0 bg-slate-900/40" />

            <img
              src="/images/low-angle-greyscale-shot-airplane-flying-high-rise-buildings.jpg"
              alt="Global logistics and transportation network with futuristic holograms"
              className="absolute inset-0 w-full h-full object-cover object-center opacity-70 blur-sm"
              crossOrigin="anonymous"
            />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 text-center z-10">
              <GSAPAnimatedSection animation="scale" delay={0.3}>
                <div className="bg-white/98 backdrop-blur-md rounded-xl md:rounded-2xl p-4 sm:p-6 md:p-8 shadow-2xl border border-white/20">
                  <GSAPAnimatedSection animation="fadeUp" delay={0.5}>
                    <p className="text-xs font-medium mb-2 md:mb-3 text-slate-600">International Export Specialists</p>
                  </GSAPAnimatedSection>

                  <GSAPAnimatedSection animation="fadeUp" delay={0.7}>
                    <h1 className="text-xl sm:text-2xl md:text-4xl font-serif font-bold mb-3 md:mb-4 text-balance text-slate-900">
                      World‑Class Exports. Seamless Compliance.
                    </h1>
                  </GSAPAnimatedSection>

                  <GSAPAnimatedSection animation="fadeUp" delay={0.9}>
                    <p className="text-xs sm:text-sm max-w-2xl mx-auto mb-4 md:mb-6 leading-relaxed text-slate-700 text-justify hidden md:block">
                      We specialize in delivering reliable export solutions across pharmaceutical, marine, and
                      aeronautical industries. Partner with us for quality, compliance, and global reach in
                      international trade.
                    </p>
                  </GSAPAnimatedSection>

                  <GSAPAnimatedSection animation="stagger" delay={1.1}>
                    <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 justify-center mb-8 md:mb-12">
                      <button
                        className="px-3 sm:px-6 py-2 sm:py-3 text-xs sm:text-base font-semibold rounded-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
                        style={{
                          backgroundColor: "#ffffff",
                          color: "#92301a",
                          border: "2px solid #92301a",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = "#ffffff"
                          e.currentTarget.style.borderColor = "#ffffff"
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = "#ffffff"
                          e.currentTarget.style.borderColor = "#92301a"
                        }}
                        onClick={() => (window.location.href = "/medical")}
                      >
                        <span className="sm:hidden">Explore</span>
                        <span className="hidden sm:inline">Explore Our Products</span>
                      </button>
                      <button
                        className="px-3 sm:px-6 py-2 sm:py-3 text-xs sm:text-base font-semibold rounded-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
                        style={{
                          backgroundColor: "#ffffff",
                          color: "#92301a",
                          border: "2px solid #92301a",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = "#f8fafc"
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = "#ffffff"
                        }}
                        onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                      >
                        Get a Quote
                      </button>
                    </div>
                  </GSAPAnimatedSection>

                  <GSAPAnimatedSection animation="scale" delay={1.3}>
                    <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4 sm:p-6 md:p-8 shadow-lg border border-gray-200/50 max-w-6xl mx-auto overflow-hidden">
                      <div className="flex flex-col md:flex-row items-start gap-6 md:gap-8 overflow-hidden">
                        <div className="flex-1 md:flex-[2]">
                          <div className="relative mb-4">
                            <div className="relative group">
                              <img
                                src="/images/medicine-caduceus.gif"
                                alt="Medical Caduceus Symbol"
                                className="relative w-12 h-12 md:w-16 md:h-16 mx-auto md:mx-0 rounded-full object-cover transition-all duration-300"
                                crossOrigin="anonymous"
                              />
                            </div>
                            <h3 className="text-xl md:text-2xl font-serif font-bold text-gray-900 mb-2 group-hover:text-gray-800 transition-colors text-center md:text-left">
                              Pharmaceutical Exports
                            </h3>
                            <p className="text-gray-700 text-sm md:text-base leading-relaxed text-center md:text-left mb-4">
                              High-quality pharmaceutical products, medical supplies & healthcare equipment ensuring
                              global health standards with reliable worldwide distribution
                            </p>
                          </div>
                        </div>

                        <div className="flex-1 md:flex-1">
                          <div className="hidden md:grid grid-cols-1 md:grid-cols-2 gap-4">
                            {/* Quality Standards Tile */}
                            <div className="p-4 rounded-lg" style={{ backgroundColor: "#f0f9ff" }}>
                              <h4 className="font-semibold text-black mb-2 text-sm">Quality Standards</h4>
                              <ul className="text-black text-xs space-y-1">
                                <li>• WHO-GMP certified</li>
                                <li>• FDA approved facilities</li>
                                <li>• ISO 13485 compliance</li>
                                <li>• Temperature monitoring</li>
                                <li>• Batch tracking systems</li>
                                <li>• Quality assurance protocols</li>
                              </ul>
                            </div>

                            {/* Global Reach Tile */}
                            <div className="p-4 rounded-lg" style={{ backgroundColor: "#f0fdf4" }}>
                              <h4 className="font-semibold text-black mb-2 text-sm">Global Reach</h4>
                              <ul className="text-black text-xs space-y-1">
                                <li>• 50+ countries served</li>
                                <li>• Cold chain logistics</li>
                                <li>• Regulatory compliance</li>
                                <li>• Regional distribution centers</li>
                                <li>• Multi-language support</li>
                                <li>• Customs expertise</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Bottom CTA button */}
                      <div className="mt-6 pt-4 border-t border-gray-200">
                        <button
                          className="flex items-center justify-center px-4 py-2 text-sm font-semibold rounded-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg w-full md:w-auto mx-auto"
                          style={{
                            backgroundColor: "#ffffff",
                            color: "#92301a",
                            border: "2px solid #92301a",
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = "#ffffff"
                            e.currentTarget.style.borderColor = "#7a2817"
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = "#ffffff"
                            e.currentTarget.style.borderColor = "#92301a"
                          }}
                          onClick={() => (window.location.href = "/medical")}
                        >
                          Explore Pharmaceutical Products
                          <svg
                            className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M17 8l4 4m0 0l-4 4m4-4H3"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </GSAPAnimatedSection>
                </div>
              </GSAPAnimatedSection>
            </div>
          </section>
        </GSAPAnimatedSection>

        <ScrollMarquee />

        <GSAPAnimatedSection animation="fadeUp">
          <section id="about" className="py-12 md:py-16 bg-white relative overflow-hidden">
            <GeometricBackground />
            <HexagonPattern />
            <SpiralPattern />

            <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10 overflow-hidden">
              <GSAPAnimatedSection animation="fadeUp" className="text-center mb-8 md:mb-12">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold mb-3 md:mb-4 text-gray-900">
                  About Us
                </h2>
                <p className="text-base sm:text-lg md:text-xl max-w-3xl mx-auto mb-4 md:mb-6 leading-relaxed text-gray-600">
                  Hamad Co has grown from a small India-based trading company into a globally recognized brand with a
                  strong reputation for quality, trust, and reliability.
                </p>
              </GSAPAnimatedSection>

              <div className="grid lg:grid-cols-2 gap-8 md:gap-12 mb-12 overflow-hidden">
                <GSAPAnimatedSection animation="slideLeft">
                  <div className="space-y-6">
                    <h3 className="text-xl sm:text-2xl font-serif font-bold text-gray-900">Our Mission & Vision</h3>
                    <div className="space-y-6">
                      <div className="bg-blue-50 p-6 rounded-lg">
                        <h4 className="text-lg font-semibold text-blue-900 mb-3">Our Mission</h4>
                        <p className="text-blue-800 text-sm sm:text-base leading-relaxed">
                          To provide world-class products and services that empower businesses worldwide, ensuring
                          reliability, sustainability, and customer satisfaction in every deal we make.
                        </p>
                      </div>
                      <div className="bg-green-50 p-6 rounded-lg">
                        <h4 className="text-lg font-semibold text-green-900 mb-3">Our Vision</h4>
                        <p className="text-green-800 text-sm sm:text-base leading-relaxed">
                          To be recognized as a global leader in trade and exports, creating long-term value for our
                          clients, partners, and communities by embracing innovation, integrity, and excellence.
                        </p>
                      </div>
                    </div>
                  </div>
                </GSAPAnimatedSection>

                <GSAPAnimatedSection animation="slideRight">
                  <div className="space-y-6">
                    <h3 className="text-xl sm:text-2xl font-serif font-bold text-gray-900">Message from the Founder</h3>
                    <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-gray-300">
                      <p className="text-gray-700 text-sm sm:text-base leading-relaxed text-justify italic mb-4">
                        "When I started Hamad Co, my vision was simple: to build a company that stands for trust and
                        quality while making India proud in global markets. Today, with our expanding reach and growing
                        customer base, I am proud that we are living that vision every day. Our focus will always remain
                        on innovation, excellence, and building long-term relationships with our partners worldwide."
                      </p>
                      <p className="text-gray-900 font-semibold">- Mr. Hamad , Founder</p>
                    </div>
                  </div>
                </GSAPAnimatedSection>
              </div>

              <div className="grid md:grid-cols-2 gap-8 md:gap-12 overflow-hidden">
                <GSAPAnimatedSection animation="slideLeft">
                  <div className="space-y-6">
                    <h3 className="text-xl sm:text-2xl font-serif font-bold text-gray-900 mb-6">Our Core Values</h3>
                    <div className="space-y-4">
                      {[
                        {
                          title: "Integrity",
                          desc: "We believe in honesty and transparency in every transaction.",
                          color: "blue",
                        },
                        {
                          title: "Quality",
                          desc: "Every product we deliver meets strict international standards.",
                          color: "green",
                        },
                        {
                          title: "Customer Focus",
                          desc: "We put our clients at the center of everything we do.",
                          color: "purple",
                        },
                        {
                          title: "Innovation",
                          desc: "Continuously evolving to meet the needs of a changing world.",
                          color: "orange",
                        },
                        {
                          title: "Sustainability",
                          desc: "Building a future-friendly business with responsibility.",
                          color: "teal",
                        },
                      ].map((value, index) => (
                        <div key={index} className="flex items-start gap-4 p-4 bg-white rounded-lg border shadow-sm">
                          <div className={`w-3 h-3 bg-${value.color}-600 rounded-full mt-2 flex-shrink-0`}></div>
                          <div>
                            <h4 className="font-semibold text-gray-900 text-sm sm:text-base">{value.title}</h4>
                            <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">{value.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </GSAPAnimatedSection>

                <GSAPAnimatedSection animation="slideRight">
                  <div className="space-y-8">
                    <Card className="shadow-lg">
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold text-gray-900 mb-4">Why Choose Hamad Co?</h3>
                        <div className="space-y-4">
                          <div className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                            <span className="text-gray-700">20+ years of export experience</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                            <span className="text-gray-700">50+ countries served worldwide</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                            <span className="text-gray-700">Full regulatory compliance support</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                            <span className="text-gray-700">24/7 customer support</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </GSAPAnimatedSection>
              </div>
            </div>
          </section>
        </GSAPAnimatedSection>

        <GSAPAnimatedSection animation="fadeUp">
          <section id="products" className="py-12 md:py-16 bg-gray-50 relative overflow-hidden">
            <FloatingShapes />
            <GridBackground />
            <MorphingBlobs />

            <div className="max-w-6xl mx-auto px-6 relative z-10 overflow-hidden">
              <GSAPAnimatedSection animation="fadeUp" className="text-center mb-8 md:mb-12">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold mb-3 md:mb-4 text-gray-900">
                  Our Products & Services
                </h2>
                <p className="text-base sm:text-lg md:text-xl max-w-3xl mx-auto mb-4 md:mb-6 leading-relaxed text-gray-600">
                  We cater to multiple industries with a diverse product portfolio
                </p>
              </GSAPAnimatedSection>

              <GSAPAnimatedSection
                animation="stagger"
                className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 overflow-hidden"
              >
                {[
                  {
                    title: "Marine Spare Parts",
                    desc: "Durable, reliable solutions for the marine industry.",
                    icon: "🚢",
                    color: "blue",
                  },
                  {
                    title: "Pharmaceutical Products",
                    desc: "Trusted supplies to support global healthcare.",
                    icon: "💊",
                    color: "green",
                  },
                  {
                    title: "Aeronautical Spare Parts",
                    desc: "High-precision components for aviation needs.",
                    icon: "✈️",
                    color: "sky",
                  },
                  {
                    title: "Steel & Aluminium",
                    desc: "Strong, versatile materials for industrial use.",
                    icon: "🏗️",
                    color: "gray",
                  },
                  {
                    title: "Rubber Products",
                    desc: "Quality solutions tailored for industrial applications.",
                    icon: "⚙️",
                    color: "orange",
                  },
                ].map((product, index) => (
                  <Card
                    key={index}
                    className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                  >
                    <CardContent className="p-6">
                      <div className="text-4xl mb-4 text-center">{product.icon}</div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3 text-center">{product.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed text-center">{product.desc}</p>
                    </CardContent>
                  </Card>
                ))}
              </GSAPAnimatedSection>

              <GSAPAnimatedSection animation="fadeUp" className="text-center mt-8 overflow-hidden">
                <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
                  With this broad range, Hamad Co ensures that businesses around the world find everything they need
                  under one roof.
                </p>
              </GSAPAnimatedSection>
            </div>
          </section>
        </GSAPAnimatedSection>

        <GSAPAnimatedSection animation="fadeUp">
          <section id="global-presence" className="py-12 md:py-16 bg-white relative overflow-hidden">
            <ParticleBackground />
            <NetworkDots />
            <HexagonPattern />

            <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10 overflow-hidden">
              <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center overflow-hidden">
                <GSAPAnimatedSection animation="slideLeft">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold mb-6 text-gray-900">
                    Our Global Presence
                  </h2>
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed text-justify mb-6 overflow-hidden">
                    Headquartered in India, Hamad Co exports to markets worldwide. Our commitment to timely delivery,
                    strong logistics, and customer-first service has enabled us to build trusted partnerships across
                    Asia, the Middle East, Europe, and Africa.
                  </p>
                  <div className="grid grid-cols-2 gap-4 overflow-hidden">
                    <div className="text-center p-4 bg-blue-50 rounded-lg overflow-hidden">
                      <div className="text-2xl font-bold text-blue-600 mb-2">50+</div>
                      <div className="text-sm text-blue-800">Countries Served</div>
                    </div>
                    <div className="text-center p-4 bg-green-50 rounded-lg overflow-hidden">
                      <div className="text-2xl font-bold text-green-600 mb-2">100%</div>
                      <div className="text-sm text-green-800">Client Satisfaction</div>
                    </div>
                  </div>
                </GSAPAnimatedSection>

                <GSAPAnimatedSection animation="slideRight">
                  <div className="bg-gray-50 p-6 rounded-lg overflow-hidden">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Why Choose Hamad Co?</h3>
                    <div className="space-y-4 overflow-hidden">
                      {[
                        {
                          title: "Experienced leadership with global vision",
                          desc: "",
                        },
                        {
                          title: "Wide range of industries and products",
                          desc: "",
                        },
                        {
                          title: "Trusted by clients across multiple continents",
                          desc: "",
                        },
                        {
                          title: "Strong export capabilities with reliable logistics",
                          desc: "",
                        },
                        {
                          title: "Commitment to customer satisfaction",
                          desc: "",
                        },
                      ].map((reason, index) => (
                        <div key={index} className="flex items-center gap-3 overflow-hidden">
                          <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                          <span className="text-gray-700">{reason.title}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </GSAPAnimatedSection>
              </div>
            </div>
          </section>
        </GSAPAnimatedSection>

        <GSAPAnimatedSection animation="fadeUp">
          <section id="certifications">
            <CertificationsSection />
          </section>
        </GSAPAnimatedSection>

        <GSAPAnimatedSection animation="fadeUp">
          <section id="global-reach">
            <GlobalReachSection />
          </section>
        </GSAPAnimatedSection>

        <GSAPAnimatedSection animation="fadeUp">
          <section id="testimonials">
            <TestimonialsSection />
          </section>
        </GSAPAnimatedSection>

        <GSAPAnimatedSection animation="fadeUp">
          <section id="references" className="py-12 md:py-16 bg-gray-50 relative overflow-hidden">
            <WaveBackground />
            <SpiralPattern />

            <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10 overflow-hidden">
              <GSAPAnimatedSection animation="fadeUp" className="text-center mb-8 md:mb-12 overflow-hidden">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold mb-3 md:mb-4 text-gray-900">
                  Our References
                </h2>
                <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto text-justify overflow-hidden">
                  Trusted by organizations and distributors across the globe for reliable export services.
                </p>
              </GSAPAnimatedSection>

              <GSAPAnimatedSection
                animation="stagger"
                className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 overflow-hidden"
              >
                {[
                  {
                    company: "African Medical Distributors Ltd.",
                    location: "Lagos, Nigeria",
                    testimonial: "Hamadco has been our reliable partner for pharmaceutical imports for over 5 years.",
                  },
                  {
                    company: "East Africa Healthcare Solutions",
                    location: "Nairobi, Kenya",
                    testimonial: "Excellent compliance support and timely delivery of medical supplies.",
                  },
                  {
                    company: "Middle East Medical Trading",
                    location: "Dubai, UAE",
                    testimonial: "Professional service and high-quality medical products consistently delivered.",
                  },
                ].map((reference, index) => (
                  <Card key={index} className="border shadow-sm hover:shadow-md transition-shadow overflow-hidden">
                    <CardContent className="p-4 sm:p-5 overflow-hidden">
                      <h3 className="text-sm sm:text-base font-semibold text-gray-900 mb-2">{reference.company}</h3>
                      <p className="text-xs text-gray-500 mb-2 sm:mb-3">{reference.location}</p>
                      <p className="text-gray-600 text-xs sm:text-sm leading-relaxed text-justify overflow-hidden">
                        "{reference.testimonial}"
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </GSAPAnimatedSection>
            </div>
          </section>
        </GSAPAnimatedSection>

        <HomeExtraSections />

        <GSAPAnimatedSection animation="fadeUp">
          <section id="contact" className="py-20 bg-white relative overflow-hidden">
            <GeometricBackground />
            <FloatingShapes />
            <MorphingBlobs />
            <NetworkDots />

            <div className="max-w-6xl mx-auto px-6 relative z-10 overflow-hidden">
              <div className="text-center mb-12 overflow-hidden">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Get in Touch with Hamadco</h2>
                <p className="text-xl max-w-2xl mx-auto leading-relaxed text-gray-600 overflow-hidden">
                  Ready to expand your business globally? Contact our export specialists for personalized solutions and
                  competitive pricing.
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-12 overflow-hidden">
                {/* Contact Form */}
                <Card className="shadow-lg overflow-hidden">
                  <CardContent className="p-6 overflow-hidden">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Send us a Message</h3>
                    <p className="text-gray-600 mb-6 overflow-hidden">
                      Fill out the form below and we'll get back to you within 24 hours.
                    </p>

                    {submitStatus === "success" && (
                      <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg overflow-hidden">
                        <p className="text-green-800 font-medium overflow-hidden">
                          Thank you for your inquiry! Your message has been formatted and sent to WhatsApp. We'll get
                          back to you within 24 hours.
                        </p>
                      </div>
                    )}

                    {submitStatus === "error" && (
                      <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg overflow-hidden">
                        <p className="text-red-800 font-medium overflow-hidden">
                          Sorry, there was an error sending your message. Please try again or contact us directly at
                          info@hamadco.in
                        </p>
                      </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-6 overflow-hidden">
                      <div className="grid md:grid-cols-2 gap-4 overflow-hidden">
                        <div>
                          <Label htmlFor="name" className="text-gray-700 font-medium">
                            Full Name *
                          </Label>
                          <Input
                            id="name"
                            name="name"
                            type="text"
                            required
                            value={formData.name}
                            onChange={handleInputChange}
                            className="mt-1"
                            placeholder="Your full name"
                          />
                        </div>
                        <div>
                          <Label htmlFor="email" className="text-gray-700 font-medium">
                            Email Address *
                          </Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            required
                            value={formData.email}
                            onChange={handleInputChange}
                            className="mt-1"
                            placeholder="your.email@company.com"
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4 overflow-hidden">
                        <div>
                          <Label htmlFor="company" className="text-gray-700 font-medium">
                            Company Name
                          </Label>
                          <Input
                            id="company"
                            name="company"
                            type="text"
                            value={formData.company}
                            onChange={handleInputChange}
                            className="mt-1"
                            placeholder="Your company name"
                          />
                        </div>
                        <div>
                          <Label htmlFor="phone" className="text-gray-700 font-medium">
                            Phone Number
                          </Label>
                          <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={handleInputChange}
                            className="mt-1"
                            placeholder="+91 9562769005"
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4 overflow-hidden">
                        <div>
                          <Label htmlFor="country" className="text-gray-700 font-medium">
                            Country *
                          </Label>
                          <Input
                            id="country"
                            name="country"
                            type="text"
                            required
                            value={formData.country}
                            onChange={handleInputChange}
                            className="mt-1"
                            placeholder="Your country"
                          />
                        </div>
                        <div>
                          <Label htmlFor="productInterest" className="text-gray-700 font-medium">
                            Product Interest
                          </Label>
                          <select
                            id="productInterest"
                            name="productInterest"
                            value={formData.productInterest}
                            onChange={handleInputChange}
                            className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          >
                            <option value="">Select a category</option>
                            <option value="pharmaceuticals">Pharmaceutical Products</option>
                            <option value="medical-supplies">Medical Supplies</option>
                            <option value="healthcare-equipment">Healthcare Equipment</option>
                            <option value="surgical-instruments">Surgical Instruments</option>
                            <option value="marine-parts">Marine Parts</option>
                            <option value="aeronautical-parts">Aeronautical Parts</option>
                            <option value="other">Other</option>
                          </select>
                        </div>
                      </div>

                      <div className="overflow-hidden">
                        <Label htmlFor="message" className="text-gray-700 font-medium">
                          Message *
                        </Label>
                        <Textarea
                          id="message"
                          name="message"
                          required
                          value={formData.message}
                          onChange={handleInputChange}
                          className="mt-1"
                          rows={5}
                          placeholder="Tell us about your requirements, target markets, or any specific questions you have..."
                        />
                      </div>

                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-3 text-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                        style={{
                          backgroundColor: "#92301a",
                          color: "#ffffff",
                          border: "2px solid #92301a",
                        }}
                        onMouseEnter={(e) => {
                          if (!isSubmitting) {
                            e.currentTarget.style.backgroundColor = "#7a2817"
                            e.currentTarget.style.borderColor = "#7a2817"
                          }
                        }}
                        onMouseLeave={(e) => {
                          if (!isSubmitting) {
                            e.currentTarget.style.backgroundColor = "#92301a"
                            e.currentTarget.style.borderColor = "#92301a"
                          }
                        }}
                      >
                        {isSubmitting ? "Sending Message..." : "Send Message"}
                      </Button>
                    </form>
                  </CardContent>
                </Card>

                {/* Contact Information Card */}
                <Card className="shadow-lg overflow-hidden">
                  <CardContent className="p-6 overflow-hidden">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
                    <div className="space-y-6 overflow-hidden">
                      <div className="flex items-start gap-4 overflow-hidden">
                        <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 overflow-hidden">
                          <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900">Address</h4>
                          <p className="text-gray-600">
                            123 Medical Export Plaza
                            <br />
                            Business District, Mumbai 400001
                            <br />
                            India
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4 overflow-hidden">
                        <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0 overflow-hidden">
                          <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                            />
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900">Phone</h4>
                          <p className="text-gray-600">
                            +91 8086890111
                            <br />
                            +91 98765 43210
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4 overflow-hidden">
                        <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0 overflow-hidden">
                          <svg
                            className="w-5 h-5 text-purple-600"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                            />
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900">Email</h4>
                          <p className="text-gray-600">
                            info@hamadco.in
                            <br />
                            exports@hamadco.in
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4 overflow-hidden">
                        <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0 overflow-hidden">
                          <svg
                            className="w-5 h-5 text-orange-600"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900">Business Hours</h4>
                          <p className="text-gray-600">
                            Monday - Friday: 9:00 AM - 6:00 PM IST
                            <br />
                            Saturday: 9:00 AM - 2:00 PM IST
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-8 pt-6 border-t border-gray-200 overflow-hidden">
                      <h4 className="text-lg font-semibold text-gray-900 mb-4">Quick Facts</h4>
                      <div className="space-y-3 overflow-hidden">
                        <div className="flex items-center gap-3 overflow-hidden">
                          <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                          <span className="text-gray-700">20+ years of export experience</span>
                        </div>
                        <div className="flex items-center gap-3 overflow-hidden">
                          <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                          <span className="text-gray-700">50+ countries worldwide</span>
                        </div>
                        <div className="flex items-center gap-3 overflow-hidden">
                          <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                          <span className="text-gray-700">Full regulatory compliance support</span>
                        </div>
                        <div className="flex items-center gap-3 overflow-hidden">
                          <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                          <span className="text-gray-700">24/7 customer support</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>
        </GSAPAnimatedSection>

        <style jsx>{`
          /* Removed custom button styles since we're now using CSS classes from globals.css */
          :global(body) {
            cursor: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><text x="50%" y="50%" textAnchor="middle" dy=".3em" fontFamily="Arial, sans-serif" fontSize="16" fontWeight="bold" fill="%23333">H</text></svg>') 12 12, auto;
          }
        `}</style>
      </div>
    </>
  )
}
