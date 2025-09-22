import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, CheckCircle, Download, Mail, Phone, MapPin } from "lucide-react"
import Image from "next/image"

export default function ElectronicsPage() {
  const electronicsProducts = [
    {
      title: "Circuit Boards & PCBs",
      description: "High-quality printed circuit boards for various applications",
      image: "/electronic-components-circuit-boards.png",
      specifications: ["Multi-layer PCB capabilities", "RoHS compliant materials", "IPC-A-600 quality standards"],
    },
    {
      title: "Electronic Connectors",
      description: "Precision connectors for industrial and automotive use",
      image: "/electronic-connectors-industrial.png",
      specifications: ["IP67/IP68 rated options", "High current capacity", "Temperature resistant"],
    },
    {
      title: "Sensors & Transducers",
      description: "Advanced sensing solutions for automation systems",
      image: "/electronic-sensors-transducers.png",
      specifications: ["High accuracy measurements", "Digital and analog outputs", "Industrial grade housing"],
    },
    {
      title: "Power Components",
      description: "Reliable power management and distribution components",
      image: "/electronic-power-components.png",
      specifications: ["Wide voltage range", "Thermal protection", "EMI/EMC compliance"],
    },
    {
      title: "Control Systems",
      description: "Programmable logic controllers and automation modules",
      image: "/electronic-control-systems.png",
      specifications: ["Modular design", "Real-time processing", "Network connectivity"],
    },
    {
      title: "Display Technologies",
      description: "Industrial displays and human-machine interfaces",
      image: "/electronic-display-technologies.png",
      specifications: ["Sunlight readable", "Touch screen options", "Wide operating temperature"],
    },
  ]

  const qualityFeatures = [
    "IPC certified manufacturing",
    "Automated optical inspection",
    "Environmental stress testing",
    "Component traceability",
    "ESD protected handling",
    "Global component sourcing",
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-16 pb-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-purple-50 text-purple-700 border-purple-200 rounded-full px-4 py-2 mb-6">
                Advanced Electronics
              </Badge>
              <h1 className="text-5xl font-semibold text-gray-900 mb-6 leading-tight">
                Cutting-edge electronic components for modern applications
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                From precision circuit boards to advanced control systems, our electronic components power innovation
                across industries worldwide.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 text-base font-medium rounded-xl"
                >
                  View Component Catalog
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-gray-300 hover:border-gray-400 hover:bg-gray-50 text-gray-700 px-8 py-4 text-base font-medium rounded-xl bg-transparent"
                >
                  Technical Datasheets
                </Button>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/electronic-components-circuit-boards.png"
                alt="Electronic components and circuit boards"
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
            <h2 className="text-4xl font-semibold text-gray-900 mb-6">Complete electronics portfolio</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive range of electronic components designed for industrial automation, automotive, and consumer
              applications.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {electronicsProducts.map((product, index) => (
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
                      Professional Grade
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
              <h2 className="text-4xl font-semibold text-gray-900 mb-6">Precision engineering standards</h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Our electronic components are manufactured to the highest industry standards with rigorous testing and
                quality control processes ensuring reliable performance.
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
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Technical Resources</h3>
              <div className="space-y-4">
                {[
                  { title: "Component Specifications", pages: "32 pages", type: "PDF" },
                  { title: "Application Notes", pages: "28 pages", type: "PDF" },
                  { title: "Quality Certifications", pages: "12 pages", type: "PDF" },
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
          <h2 className="text-4xl font-semibold mb-6">Ready to power your next project?</h2>
          <p className="text-xl mb-12 max-w-2xl mx-auto leading-relaxed text-gray-300">
            Our electronics specialists are ready to help you find the perfect components for your industrial,
            automotive, or consumer electronics applications.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-12">
            <div className="flex items-center text-gray-300">
              <Mail className="w-5 h-5 mr-3 text-gray-400" />
              <span>electronics@hamadco.com</span>
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
            Contact Electronics Team
          </Button>
        </div>
      </section>
    </div>
  )
}
