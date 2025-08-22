import Image from "next/image"
import Link from "next/link"
import { ExternalLink } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "E-commerce SEO Transformation",
    client: "TechGear Pro",
    category: "SEO",
    image: "/placeholder.svg?height=300&width=400",
    tags: ["SEO", "E-commerce", "Content Strategy"],
    results: {
      traffic: "+340%",
      revenue: "+$2.1M",
      keywords: "1,200+",
    },
    description: "Complete SEO overhaul for an e-commerce electronics retailer, resulting in massive organic growth.",
    slug: "techgear-pro-seo",
  },
  {
    id: 2,
    title: "SaaS PPC Campaign Optimization",
    client: "CloudSync Solutions",
    category: "PPC",
    image: "/placeholder.svg?height=300&width=400",
    tags: ["Google Ads", "PPC", "SaaS", "Lead Generation"],
    results: {
      roas: "450%",
      cpa: "-65%",
      leads: "+280%",
    },
    description: "Optimized Google Ads campaigns for a B2B SaaS company, dramatically improving lead quality and ROI.",
    slug: "cloudsync-ppc-optimization",
  },
  {
    id: 3,
    title: "Local Business Digital Presence",
    client: "Urban Fitness Studio",
    category: "Local SEO",
    image: "/placeholder.svg?height=300&width=400",
    tags: ["Local SEO", "Google My Business", "Social Media"],
    results: {
      visibility: "+500%",
      bookings: "+180%",
      reviews: "4.9★",
    },
    description: "Built comprehensive digital presence for local fitness studio, dominating local search results.",
    slug: "urban-fitness-local-seo",
  },
  {
    id: 4,
    title: "Content Marketing Strategy",
    client: "FinTech Startup",
    category: "Content Marketing",
    image: "/placeholder.svg?height=300&width=400",
    tags: ["Content Strategy", "SEO", "Lead Generation"],
    results: {
      traffic: "+220%",
      leads: "+150%",
      authority: "Top 3",
    },
    description: "Developed content marketing strategy that positioned fintech startup as industry thought leader.",
    slug: "fintech-content-strategy",
  },
  {
    id: 5,
    title: "E-commerce PPC & Social Ads",
    client: "Fashion Forward",
    category: "Paid Advertising",
    image: "/placeholder.svg?height=300&width=400",
    tags: ["Facebook Ads", "Google Ads", "E-commerce", "ROAS"],
    results: {
      roas: "380%",
      sales: "+$1.8M",
      cac: "-45%",
    },
    description: "Multi-platform advertising strategy for fashion e-commerce brand, scaling profitably.",
    slug: "fashion-forward-ads",
  },
  {
    id: 6,
    title: "B2B Lead Generation System",
    client: "Enterprise Solutions Inc",
    category: "Lead Generation",
    image: "/placeholder.svg?height=300&width=400",
    tags: ["LinkedIn Ads", "Email Marketing", "Marketing Automation"],
    results: {
      leads: "+320%",
      quality: "+85%",
      pipeline: "+$5M",
    },
    description: "Implemented comprehensive lead generation system for B2B enterprise software company.",
    slug: "enterprise-lead-generation",
  },
]

const categories = ["All", "SEO", "PPC", "Local SEO", "Content Marketing", "Paid Advertising", "Lead Generation"]

export default function PortfolioPage() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Portfolio & Case Studies</h1>
          <p className="text-xl text-gray-600 mb-8">
            Explore real results from successful digital marketing campaigns. Each project showcases strategic thinking,
            execution excellence, and measurable outcomes.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                className="px-6 py-2 rounded-full border border-gray-300 text-gray-700 hover:border-blue-600 hover:text-blue-600 transition-colors"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-2xl overflow-hidden shadow-lg card-hover border border-gray-100"
              >
                <div className="relative">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {project.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-blue-600 font-medium mb-3">{project.client}</p>
                  <p className="text-gray-600 mb-4">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, index) => (
                      <span key={index} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="grid grid-cols-3 gap-4 mb-6 p-4 bg-gray-50 rounded-lg">
                    {Object.entries(project.results).map(([key, value], index) => (
                      <div key={index} className="text-center">
                        <div className="text-lg font-bold text-blue-600">{value}</div>
                        <div className="text-xs text-gray-600 capitalize">{key}</div>
                      </div>
                    ))}
                  </div>

                  <Link
                    href={`/portfolio/${project.slug}`}
                    className="btn-primary w-full text-center inline-flex items-center justify-center"
                  >
                    View Case Study
                    <ExternalLink size={16} className="ml-2" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Ready to Be My Next Success Story?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Let's discuss how I can help you achieve similar results for your business.
          </p>
          <Link href="/contact" className="btn-primary">
            Start Your Project
          </Link>
        </div>
      </section>
    </div>
  )
}
