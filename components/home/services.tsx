import { Search, Target, BarChart3 } from "lucide-react"
import Link from "next/link"

const services = [
  {
    icon: Search,
    title: "SEO Optimization",
    description:
      "Boost your organic visibility with comprehensive SEO strategies that drive qualified traffic and improve search rankings.",
    features: ["Keyword Research", "On-Page SEO", "Technical SEO", "Link Building"],
  },
  {
    icon: Target,
    title: "PPC Advertising",
    description:
      "Maximize ROI with targeted Google Ads and social media campaigns that convert prospects into customers.",
    features: ["Google Ads", "Facebook Ads", "Campaign Optimization", "A/B Testing"],
  },
  {
    icon: BarChart3,
    title: "Analytics & Insights",
    description:
      "Make data-driven decisions with comprehensive tracking, reporting, and actionable insights for your business.",
    features: ["Google Analytics", "Conversion Tracking", "Custom Reports", "Performance Analysis"],
  },
]

export default function Services() {
  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Services That Drive Growth</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive digital marketing solutions tailored to your business goals and designed to deliver measurable
            results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg card-hover border border-gray-100">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
                  <Icon className="text-blue-600" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-600">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link href="/services" className="text-blue-600 font-medium hover:text-blue-700 transition-colors">
                  Learn More →
                </Link>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
