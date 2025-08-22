import Image from "next/image"
import Link from "next/link"
import { Calendar, Clock, ArrowRight, Search } from "lucide-react"

const blogPosts = [
  {
    title: "10 SEO Trends That Will Dominate 2024",
    excerpt:
      "Stay ahead of the curve with these emerging SEO strategies that will shape search rankings in the coming year. From AI-powered content to Core Web Vitals optimization.",
    image: "/placeholder.svg?height=250&width=400",
    date: "2024-01-15",
    readTime: "8 min read",
    category: "SEO",
    slug: "seo-trends-2024",
    featured: true,
  },
  {
    title: "How to Optimize Google Ads for Maximum ROI",
    excerpt:
      "Learn the advanced techniques I use to help clients achieve 300%+ ROAS on their Google Ads campaigns. Includes bid strategies, audience targeting, and landing page optimization.",
    image: "/placeholder.svg?height=250&width=400",
    date: "2024-01-10",
    readTime: "12 min read",
    category: "PPC",
    slug: "google-ads-roi-optimization",
    featured: false,
  },
  {
    title: "The Complete Guide to GA4 Migration",
    excerpt:
      "Everything you need to know about transitioning from Universal Analytics to Google Analytics 4. Step-by-step migration process and key differences explained.",
    image: "/placeholder.svg?height=250&width=400",
    date: "2024-01-05",
    readTime: "15 min read",
    category: "Analytics",
    slug: "ga4-migration-guide",
    featured: false,
  },
  {
    title: "Local SEO Checklist for Small Businesses",
    excerpt:
      "A comprehensive checklist to improve your local search visibility. Covers Google My Business optimization, local citations, and review management strategies.",
    image: "/placeholder.svg?height=250&width=400",
    date: "2023-12-28",
    readTime: "10 min read",
    category: "Local SEO",
    slug: "local-seo-checklist",
    featured: false,
  },
  {
    title: "Facebook Ads vs Google Ads: Which is Right for Your Business?",
    excerpt:
      "Compare the two major advertising platforms and learn when to use each one. Includes cost analysis, targeting options, and campaign optimization tips.",
    image: "/placeholder.svg?height=250&width=400",
    date: "2023-12-20",
    readTime: "9 min read",
    category: "PPC",
    slug: "facebook-vs-google-ads",
    featured: false,
  },
  {
    title: "Content Marketing Strategy That Actually Works",
    excerpt:
      "Build a content marketing strategy that drives traffic and converts visitors. Learn how to create content that ranks well and resonates with your audience.",
    image: "/placeholder.svg?height=250&width=400",
    date: "2023-12-15",
    readTime: "11 min read",
    category: "Content Marketing",
    slug: "content-marketing-strategy",
    featured: false,
  },
]

const categories = ["All", "SEO", "PPC", "Analytics", "Local SEO", "Content Marketing", "Social Media"]

export default function BlogPage() {
  const featuredPost = blogPosts.find((post) => post.featured)
  const regularPosts = blogPosts.filter((post) => !post.featured)

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Digital Marketing Blog</h1>
          <p className="text-xl text-gray-600 mb-8">
            Stay updated with the latest digital marketing trends, strategies, and insights. Learn from real case
            studies and actionable tips.
          </p>

          {/* Search Bar */}
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search articles..."
              className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent"
            />
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Featured Article</h2>
              <div className="w-20 h-1 bg-blue-600"></div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden shadow-xl border border-gray-100">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="relative h-64 lg:h-auto">
                  <Image
                    src={featuredPost.image || "/placeholder.svg"}
                    alt={featuredPost.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">Featured</span>
                  </div>
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center space-x-4 mb-4">
                    <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">
                      {featuredPost.category}
                    </span>
                    <div className="flex items-center text-gray-500 text-sm">
                      <Calendar size={16} className="mr-1" />
                      {new Date(featuredPost.date).toLocaleDateString()}
                    </div>
                    <div className="flex items-center text-gray-500 text-sm">
                      <Clock size={16} className="mr-1" />
                      {featuredPost.readTime}
                    </div>
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">{featuredPost.title}</h3>
                  <p className="text-gray-600 mb-6 text-lg">{featuredPost.excerpt}</p>
                  <Link href={`/blog/${featuredPost.slug}`} className="btn-primary inline-flex items-center w-fit">
                    Read Full Article
                    <ArrowRight size={16} className="ml-2" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Category Filter */}
      <section className="py-8 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                className="px-6 py-2 rounded-full border border-gray-300 text-gray-700 hover:border-blue-600 hover:text-blue-600 transition-colors bg-white"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post, index) => (
              <article key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg card-hover">
                <Image
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  width={400}
                  height={250}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                    <div className="flex items-center text-gray-500 text-sm">
                      <Clock size={14} className="mr-1" />
                      {post.readTime}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-blue-600 transition-colors">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h3>

                  <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-gray-500 text-sm">
                      <Calendar size={14} className="mr-1" />
                      {new Date(post.date).toLocaleDateString()}
                    </div>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="text-blue-600 font-medium hover:text-blue-700 transition-colors inline-flex items-center"
                    >
                      Read More
                      <ArrowRight size={14} className="ml-1" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-12">
            <button className="btn-secondary">Load More Articles</button>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="section-padding bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Never Miss an Update</h2>
          <p className="text-xl text-blue-100 mb-8">
            Get the latest digital marketing insights delivered straight to your inbox.
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-blue-300"
            />
            <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
