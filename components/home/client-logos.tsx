import Image from "next/image"

const clients = [
  { name: "TechCorp", logo: "/placeholder.svg?height=60&width=120" },
  { name: "StartupXYZ", logo: "/placeholder.svg?height=60&width=120" },
  { name: "E-commerce Plus", logo: "/placeholder.svg?height=60&width=120" },
  { name: "Digital Agency", logo: "/placeholder.svg?height=60&width=120" },
  { name: "SaaS Company", logo: "/placeholder.svg?height=60&width=120" },
  { name: "Local Business", logo: "/placeholder.svg?height=60&width=120" },
]

export default function ClientLogos() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Trusted by Leading Brands</h2>
          <p className="text-gray-600">I've helped these companies achieve their digital marketing goals</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {clients.map((client, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-4 grayscale hover:grayscale-0 transition-all duration-300"
            >
              <Image
                src={client.logo || "/placeholder.svg"}
                alt={client.name}
                width={120}
                height={60}
                className="max-w-full h-auto opacity-60 hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
