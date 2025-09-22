"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AnimatedSection } from "@/components/animated-section"
import { useParallax } from "@/hooks/use-scroll-animation"
import {
  ShieldCheckIcon,
  GlobeIcon,
  AwardIcon,
  UsersIcon,
  TrendingUpIcon,
  CheckCircle2Icon,
} from "@/components/simple-icons"

export function CertificationsSection() {
  const certifications = [
    { name: "ISO 9001:2015", description: "Quality Management Systems", icon: ShieldCheckIcon },
    { name: "ISO 13485", description: "Medical Devices Quality", icon: AwardIcon },
    { name: "CE Marking", description: "European Conformity", icon: CheckCircle2Icon },
    { name: "FDA Registered", description: "US Food & Drug Administration", icon: ShieldCheckIcon },
    { name: "GMP Certified", description: "Good Manufacturing Practice", icon: AwardIcon },
    { name: "REACH Compliant", description: "EU Chemical Regulation", icon: CheckCircle2Icon },
  ]

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-orange-50 to-red-50 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#92301a] rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-800 rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative">
        <AnimatedSection className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4 md:mb-6">Certified Excellence</h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our comprehensive certifications ensure compliance with international standards across all export markets.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
          {certifications.map((cert, index) => (
            <AnimatedSection key={index} delay={index * 100} direction="up">
              <Card className="border-0 bg-white/70 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <CardContent className="p-4 md:p-6 text-center">
                  <cert.icon className="w-8 h-8 md:w-12 md:h-12 mx-auto mb-3 md:mb-4 text-[#92301a]" />
                  <h3 className="text-sm md:text-lg font-semibold text-gray-900 mb-1 md:mb-2">{cert.name}</h3>
                  <p className="text-xs md:text-sm text-gray-600">{cert.description}</p>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}

export function GlobalReachSection() {
  const { ref, offset } = useParallax(0.3)

  const stats = [
    { number: "50+", label: "Countries Served", icon: GlobeIcon },
    { number: "500+", label: "Active Clients", icon: UsersIcon },
    { number: "20+", label: "Years Experience", icon: AwardIcon },
    { number: "99.8%", label: "On-Time Delivery", icon: TrendingUpIcon },
  ]

  return (
    <section className="py-16 md:py-24 bg-gray-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gray-900"></div>
      <div ref={ref} className="absolute inset-0 opacity-5" style={{ transform: `translateY(${offset * 0.5}px)` }}>
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#92301a] rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-red-800 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        <AnimatedSection className="text-center mb-12 md:mb-16">
          <h2
            className="text-3xl md:text-4xl font-semibold mb-4 md:mb-6 text-white"
            style={{
              color: "#ffffff !important",
              textShadow: "2px 2px 4px rgba(0,0,0,0.8)",
            }}
          >
            Global Impact
          </h2>
          <p
            className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            style={{
              color: "#d1d5db !important",
              textShadow: "1px 1px 2px rgba(0,0,0,0.8)",
            }}
          >
            Connecting businesses worldwide with reliable export solutions and unmatched service quality.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <AnimatedSection key={index} delay={index * 150} direction="up">
              <div className="text-center group">
                <stat.icon className="w-8 h-8 md:w-12 md:h-12 mx-auto mb-3 md:mb-4 text-orange-400 group-hover:text-orange-300 transition-colors" />
                <div
                  className="text-2xl md:text-4xl font-bold mb-1 md:mb-2 text-white group-hover:scale-110 transition-transform"
                  style={{
                    color: "#ffffff !important",
                    textShadow: "2px 2px 4px rgba(0,0,0,0.8)",
                  }}
                >
                  {stat.number}
                </div>
                <div
                  className="text-sm md:text-base text-gray-300"
                  style={{
                    color: "#d1d5db !important",
                    textShadow: "1px 1px 2px rgba(0,0,0,0.8)",
                  }}
                >
                  {stat.label}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}

export function TestimonialsSection() {
  const testimonials = [
    {
      quote: "Hamadco's expertise in medical device exports has been invaluable to our European expansion.",
      author: "Dr. Sarah Chen",
      company: "MedTech Solutions",
      location: "Germany",
    },
    {
      quote: "Their compliance knowledge and attention to detail saved us months of regulatory delays.",
      author: "James Rodriguez",
      company: "Global Plastics Corp",
      location: "USA",
    },
    {
      quote: "Reliable, professional, and always delivers on time. Our go-to partner for Asian markets.",
      author: "Yuki Tanaka",
      company: "Precision Electronics",
      location: "Japan",
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <AnimatedSection className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4 md:mb-6">Trusted by Industry Leaders</h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            See what our clients say about their export success with Hamadco.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <AnimatedSection key={index} delay={index * 200} direction="up">
              <Card className="border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300 h-full">
                <CardContent className="p-6 md:p-8">
                  <blockquote className="text-gray-700 leading-relaxed mb-6 text-sm md:text-base">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="border-t pt-4">
                    <div className="font-semibold text-gray-900 text-sm md:text-base">{testimonial.author}</div>
                    <div className="text-xs md:text-sm text-gray-600">{testimonial.company}</div>
                    <Badge variant="outline" className="mt-2 text-xs">
                      {testimonial.location}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
