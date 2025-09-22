import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, CheckCircle, Download, Mail, Phone, MapPin } from "lucide-react"
import Image from "next/image"

export default function RubberProductsPage() {
  const rubberProducts = [
    {
      title: "Industrial Seals & Gaskets",
      description: "High-performance sealing solutions for industrial applications",
      image: "/industrial-rubber-seals-gaskets.png",
      specifications: [
        "Temperature range: -40°C to +200°C",
        "Pressure rating: Up to 150 bar",
        "FDA approved materials",
      ],
    },
    {
      title: "Automotive Rubber Components",
      description: "Precision-molded rubber parts for automotive industry",
      image: "/automotive-rubber-components.png",
      specifications: ["EPDM and NBR compounds", "OEM quality standards", "Custom molding available"],
    },
    {
      title: "Medical Grade Rubber",
      description: "Biocompatible rubber products for medical devices",
      image: "/medical-grade-rubber-products.png",
      specifications: ["USP Class VI certified", "Sterilization compatible", "Low extractable compounds"],
    },
    {
      title: "O-Rings & Custom Seals",
      description: "Precision O-rings and custom sealing solutions",
      image: "/rubber-o-rings-custom-seals.png",
      specifications: ["Standard and metric sizes", "Custom compounds", "Rapid prototyping"],
    },
    {
      title: "Rubber Hoses & Tubing",
      description: "Flexible rubber hoses for various industrial applications",
      image: "/industrial-rubber-hoses-tubing.png",
      specifications: ["Reinforced construction", "Chemical resistant", "Multiple diameter options"],
    },
    {
      title: "Vibration Dampeners",
      description: "Anti-vibration mounts and shock absorbers",
      image: "/rubber-vibration-dampeners-mounts.png",
      specifications: ["Load capacity: 10-5000 kg", "Natural frequency isolation", "Weather resistant"],
    },
  ]

  const qualityFeatures = [
    "ISO 9001:2015 certified manufacturing",
    "Advanced compound testing laboratory",
    "Custom formulation capabilities",
    "Accelerated aging testing",
    "Full traceability documentation",
    "Global shipping and logistics",
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-16 pb-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-orange-50 text-orange-700 border-orange-200 rounded-full px-4 py-2 mb-6">
                Premium Rubber Solutions
              </Badge>
              <h1 className="text-5xl font-semibold text-gray-900 mb-6 leading-tight">
                Industrial rubber products engineered for excellence
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                From precision seals to custom compounds, our rubber products deliver exceptional performance across
                automotive, medical, and industrial applications.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 text-base font-medium rounded-xl"
                >
                  View Product Catalog
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-gray-300 hover:border-gray-400 hover:bg-gray-50 text-gray-700 px-8 py-4 text-base font-medium rounded-xl bg-transparent"
                >
                  Technical Specifications
                </Button>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/industrial-rubber-seals-gaskets.png"
                alt="Industrial rubber products"
                width={600}
                height={500}
                className="w-full h-auto rounded-2xl shadow-lg filter grayscale"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Product Portfolio */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-semibold text-gray-900 mb-6">Complete rubber product portfolio</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive range of rubber products designed for demanding industrial, automotive, and medical
              applications.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rubberProducts.map((product, index) => (
              <Card
                key={index}
                className="border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300 bg-white rounded-2xl overflow-hidden"
              >
                <CardContent className="p-0">
                  <div className="relative">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.title}
                      width={400}
                      height={300}
                      className="w-full h-48 object-cover filter grayscale"
                    />
                    <Badge className="absolute top-4 right-4 bg-white/90 text-gray-700 border-0 rounded-full">
                      Industrial Grade
                    </Badge>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">{product.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">{product.description}</p>
                    <div className="space-y-2 mb-6">
                      {product.specifications.map((spec, specIndex) => (
                        <div key={specIndex} className="flex items-start text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span>{spec}</span>
                        </div>
                      ))}
                    </div>
                    <Button
                      variant="outline"
                      className="w-full border-gray-300 hover:border-gray-400 hover:bg-gray-50 text-gray-700 rounded-lg bg-transparent"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Assurance */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-semibold text-gray-900 mb-6">Quality you can trust</h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Our rubber products undergo rigorous testing and quality control processes to ensure they meet the
                highest industry standards and customer expectations.
              </p>
              <div className="grid gap-4">
                {qualityFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Technical Documentation</h3>
              <div className="space-y-4">
                {[
                  { title: "Material Data Sheets", pages: "24 pages", type: "PDF" },
                  { title: "Installation Guidelines", pages: "16 pages", type: "PDF" },
                  { title: "Quality Certificates", pages: "8 pages", type: "PDF" },
                ].map((doc, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 bg-white rounded-xl border border-gray-200"
                  >
                    <div>
                      <h4 className="font-medium text-gray-900">{doc.title}</h4>
                      <p className="text-sm text-gray-500">
                        {doc.pages} • {doc.type}
                      </p>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-gray-300 hover:border-gray-400 rounded-lg bg-transparent"
                    >
                      <Download className="w-4 h-4 mr-2" />
                      Download
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gray-900 text-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-semibold mb-6">Ready to discuss your rubber product needs?</h2>
          <p className="text-xl mb-12 max-w-2xl mx-auto leading-relaxed text-gray-300">
            Our rubber specialists are ready to help you find the perfect solution for your industrial, automotive, or
            medical application requirements.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-12">
            <div className="flex items-center text-gray-300">
              <Mail className="w-5 h-5 mr-3 text-gray-400" />
              <span>rubber@hamadco.com</span>
            </div>
            <div className="flex items-center text-gray-300">
              <Phone className="w-5 h-5 mr-3 text-gray-400" />
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center text-gray-300">
              <MapPin className="w-5 h-5 mr-3 text-gray-400" />
              <span>Dubai, UAE</span>
            </div>
          </div>

          <Button
            size="lg"
            className="bg-white hover:bg-gray-100 text-gray-900 px-8 py-4 text-base font-medium rounded-xl"
          >
            Contact Rubber Specialists
          </Button>
        </div>
      </section>
    </div>
  )
}
