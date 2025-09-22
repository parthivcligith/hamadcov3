import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Mail, Phone, MapPin, Star, Shield, Package, ArrowLeft, CheckCircle, Award, Recycle, Zap } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function PlasticsProductsPage() {
  const plasticsProducts = [
    {
      name: "Medical Grade Plastics",
      description: "Biocompatible plastic components for medical applications",
      image: "/medical-plastic-components-tubes.png",
      features: ["USP Class VI", "Biocompatible", "Autoclave Safe", "FDA Approved"],
      categories: ["Tubing", "Connectors", "Housings", "Disposables"],
    },
    {
      name: "Industrial Polymers",
      description: "High-performance engineering plastics for industrial use",
      image: "/industrial-plastic-polymers-sheets.png",
      features: ["High Temperature", "Chemical Resistant", "UV Stable", "Custom Colors"],
      categories: ["Sheets", "Rods", "Profiles", "Machined Parts"],
    },
    {
      name: "Food Grade Plastics",
      description: "Safe plastic materials for food contact applications",
      image: "/food-grade-plastic-containers.png",
      features: ["FDA Food Contact", "BPA Free", "Easy Clean", "Temperature Resistant"],
      categories: ["Containers", "Packaging", "Processing Equipment", "Storage"],
    },
    {
      name: "Automotive Plastics",
      description: "Durable plastic components for automotive industry",
      image: "/automotive-plastic-components.png",
      features: ["Impact Resistant", "Weather Resistant", "Lightweight", "Flame Retardant"],
      categories: ["Interior Parts", "Exterior Trim", "Under Hood", "Electrical"],
    },
    {
      name: "Electronic Housings",
      description: "Precision plastic enclosures for electronic devices",
      image: "/electronic-plastic-housings.png",
      features: ["EMI Shielding", "Flame Retardant", "Precision Molded", "Custom Design"],
      categories: ["Enclosures", "Connectors", "Insulators", "Heat Sinks"],
    },
    {
      name: "Recycled Plastics",
      description: "Sustainable recycled plastic materials and products",
      image: "/recycled-plastic-materials.png",
      features: ["Eco-Friendly", "Post-Consumer", "Certified Recycled", "Carbon Neutral"],
      categories: ["rPET", "rPP", "rPE", "Mixed Plastics"],
    },
  ]

  const certifications = [
    { name: "ISO 9001", icon: CheckCircle },
    { name: "FDA Approved", icon: Award },
    { name: "RoHS Compliant", icon: Shield },
    { name: "Recyclable", icon: Recycle },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/industrial-plastic-manufacturing-facility.png')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/60 to-green-800/40" />

        <div className="relative z-10 text-center max-w-5xl mx-auto px-6">
          <Link href="/" className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Categories
          </Link>
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-600 to-green-800 flex items-center justify-center">
              <Package className="w-8 h-8 text-white" />
            </div>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-3xl border border-white/20 p-12 shadow-2xl">
            <h1 className="text-5xl md:text-6xl font-light text-white mb-6 tracking-wide text-balance">
              Plastics & Polymers
              <br />
              <span className="font-normal">Engineering Excellence</span>
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed text-pretty">
              High-performance plastic materials and polymer solutions for medical, industrial, automotive, and
              electronic applications. Trusted by manufacturers worldwide for quality and reliability.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {certifications.map((cert, index) => {
                const IconComponent = cert.icon
                return (
                  <div
                    key={index}
                    className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20"
                  >
                    <IconComponent className="w-4 h-4 text-green-300 mr-2" />
                    <span className="text-white text-sm font-medium">{cert.name}</span>
                  </div>
                )
              })}
            </div>
            <Button
              size="lg"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-sm tracking-wider font-medium rounded-full shadow-lg"
            >
              EXPLORE PLASTIC PRODUCTS
            </Button>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-gray-900 mb-6 tracking-wide">Our Plastics & Polymer Portfolio</h2>
            <div className="w-24 h-px bg-green-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto text-pretty">
              Comprehensive range of plastic materials and polymer solutions engineered to meet diverse industry
              requirements with superior performance and sustainability.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {plasticsProducts.map((product, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-500 border-0 bg-white rounded-2xl overflow-hidden"
              >
                <CardHeader className="p-0">
                  <div className="relative overflow-hidden">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      width={400}
                      height={300}
                      className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-700 filter grayscale"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-green-600 text-white border-0 rounded-full px-3 py-1">
                        <Star className="w-3 h-3 mr-1 fill-current" />
                        Premium Grade
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-8">
                  <CardTitle className="text-xl mb-3 text-gray-900 font-medium">{product.name}</CardTitle>
                  <CardDescription className="mb-6 text-gray-600 leading-relaxed">
                    {product.description}
                  </CardDescription>

                  <div className="mb-6">
                    <h4 className="text-sm font-medium text-gray-900 mb-3">Key Features:</h4>
                    <div className="space-y-2">
                      {product.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-600">
                          <div className="w-1.5 h-1.5 bg-green-600 rounded-full mr-3" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-medium text-gray-900 mb-3">Product Categories:</h4>
                    <div className="flex flex-wrap gap-2">
                      {product.categories.map((category, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs border-green-200 text-green-700">
                          {category}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quality & Sustainability */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-light text-gray-900 mb-6 tracking-wide">Quality & Sustainability</h2>
              <div className="w-24 h-px bg-green-600 mx-auto mb-8"></div>
              <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto text-pretty">
                Our plastic and polymer products are manufactured with the highest quality standards while maintaining
                our commitment to environmental sustainability and circular economy principles.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-12">
              <div className="text-center group">
                <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-green-100 transition-colors">
                  <Shield className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-medium mb-4 text-gray-900">Quality Assurance</h3>
                <p className="text-gray-600 leading-relaxed">
                  ISO 9001 certified manufacturing with rigorous quality control and material testing protocols
                </p>
              </div>
              <div className="text-center group">
                <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-green-100 transition-colors">
                  <Recycle className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-medium mb-4 text-gray-900">Sustainable Materials</h3>
                <p className="text-gray-600 leading-relaxed">
                  Eco-friendly recycled content options and biodegradable alternatives for environmental responsibility
                </p>
              </div>
              <div className="text-center group">
                <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-green-100 transition-colors">
                  <Zap className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-medium mb-4 text-gray-900">Advanced Processing</h3>
                <p className="text-gray-600 leading-relaxed">
                  State-of-the-art injection molding, extrusion, and thermoforming capabilities for precision parts
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gray-900 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-light mb-6 tracking-wide">Ready to Source Plastic Materials?</h2>
          <div className="w-24 h-px bg-green-600 mx-auto mb-8"></div>
          <p className="text-xl mb-12 max-w-2xl mx-auto leading-relaxed text-gray-300 text-pretty">
            Connect with our plastics and polymer specialists to discuss your material requirements and discover how
            Hamadco can support your manufacturing needs with premium plastic solutions.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-12">
            <div className="flex items-center text-gray-300">
              <div className="w-10 h-10 bg-green-600/20 rounded-full flex items-center justify-center mr-3">
                <Mail className="w-5 h-5 text-green-400" />
              </div>
              <span className="tracking-wide">plastics@hamadco.com</span>
            </div>
            <div className="flex items-center text-gray-300">
              <div className="w-10 h-10 bg-green-600/20 rounded-full flex items-center justify-center mr-3">
                <Phone className="w-5 h-5 text-green-400" />
              </div>
              <span className="tracking-wide">+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center text-gray-300">
              <div className="w-10 h-10 bg-green-600/20 rounded-full flex items-center justify-center mr-3">
                <MapPin className="w-5 h-5 text-green-400" />
              </div>
              <span className="tracking-wide">Dubai, UAE</span>
            </div>
          </div>
          <Button
            size="lg"
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-sm tracking-wider font-medium rounded-full shadow-lg"
          >
            REQUEST PLASTICS CATALOG
          </Button>
        </div>
      </section>
    </div>
  )
}
