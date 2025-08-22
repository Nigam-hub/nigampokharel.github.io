import { Search, Target, BarChart3, Users, Mail, Smartphone } from "lucide-react"
import Link from "next/link"

const services = [
  {
    icon: Search,
    title: "SEO Optimization",
    description: "Comprehensive SEO strategies to improve your search rankings and drive organic traffic.",
    features: [
      "Keyword Research & Strategy",
      "On-Page SEO Optimization",
      "Technical SEO Audits",
      "Link Building Campaigns",
      "Local SEO for Businesses",
      "SEO Content Strategy",
    ],
    price: "Starting at $1,500/month",
  },
  {
    icon: Target,
    title: "PPC Advertising",
    description: "Strategic paid advertising campaigns that maximize ROI and drive qualified leads.",
    features: [
      "Google Ads Management",
      "Facebook & Instagram Ads",
      "Campaign Setup & Optimization",
      "A/B Testing & Analytics",
      "Landing Page Optimization",
      "Conversion Rate Optimization",
    ],
    price: "Starting at $2,000/month",
  },
  {
    icon: BarChart3,
    title: "Analytics & Reporting",
    description: "Data-driven insights and comprehensive reporting to track your marketing performance.",
    features: [
      "Google Analytics Setup",
      "Conversion Tracking",
      "Custom Dashboard Creation",
      "Monthly Performance Reports",
      "ROI Analysis & Insights",
      "Competitor Analysis",
    ],
    price: "Starting at $800/month",
  },
  {
    icon: Users,
    title: "Social Media Marketing",
    description: "Build your brand presence and engage with your audience across social platforms.",
    features: [
      "Social Media Strategy",
      "Content Creation & Curation",
      "Community Management",
      "Social Media Advertising",
      "Influencer Partnerships",
      "Brand Reputation Management",
    ],
    price: "Starting at $1,200/month",
  },
  {
    icon: Mail,
    title: "Email Marketing",
    description: "Nurture leads and retain customers with strategic email marketing campaigns.",
    features: [
      "Email Campaign Strategy",
      "Automated Email Sequences",
      "Newsletter Design & Content",
      "List Building & Segmentation",
      "A/B Testing & Optimization",
      "Performance Tracking",
    ],
    price: "Starting at $600/month",
  },
  {
    icon: Smartphone,
    title: "Digital Strategy Consulting",
    description: "Comprehensive digital marketing strategy and consulting for business growth.",
    features: [
      "Marketing Strategy Development",
      "Competitive Analysis",
      "Customer Journey Mapping",
      "Marketing Automation Setup",
      "Team Training & Workshops",
      "Ongoing Strategic Support",
    ],
    price: "Starting at $3,000/project",
  },
]

export default function ServicesPage() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Digital Marketing Services</h1>
          <p className="text-xl text-gray-600 mb-8">
            Comprehensive digital marketing solutions designed to grow your business and maximize ROI. From SEO to PPC,
            I've got you covered.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-lg card-hover border border-gray-100">
                  <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
                    <Icon className="text-blue-600" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>

                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-600">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="border-t border-gray-200 pt-6">
                    <div className="text-2xl font-bold text-blue-600 mb-4">{service.price}</div>
                    <Link href="/contact" className="btn-primary w-full text-center block">
                      Get Started
                    </Link>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Grow Your Business?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Let's discuss your digital marketing goals and create a custom strategy that delivers results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Start Your Project
            </Link>
            <Link
              href="/portfolio"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-blue-600 transition-colors"
            >
              View Case Studies
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
