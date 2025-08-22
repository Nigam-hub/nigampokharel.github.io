import Link from "next/link"
import Image from "next/image"
import { Calendar, ArrowRight } from "lucide-react"

const blogPosts = [
  {
    title: "10 SEO Trends That Will Dominate 2024",
    excerpt:
      "Stay ahead of the curve with these emerging SEO strategies that will shape search rankings in the coming year.",
    image: "/placeholder.svg?height=200&width=300",
    date: "2024-01-15",
    category: "SEO",
    slug: "seo-trends-2024",
  },
  {
    title: "How to Optimize Google Ads for Maximum ROI",
    excerpt: "Learn the advanced techniques I use to help clients achieve 300%+ ROAS on their Google Ads campaigns.",
    image: "/placeholder.svg?height=200&width=300",
    date: "2024-01-10",
    category: "PPC",
    slug: "google-ads-roi-optimization",
  },
  {
    title: "The Complete Guide to GA4 Migration",
    excerpt: "Everything you need to know about transitioning from Universal Analytics to Google Analytics 4.",
    image: "/placeholder.svg?height=200&width=300",
    date: "2024-01-05",
    category: "Analytics",
    slug: "ga4-migration-guide",
  },
]

export default function BlogPreview() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Latest Insights</h2>
          <p className="text-xl text-gray-600">Stay updated with the latest digital marketing trends and strategies</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post, index) => (
            <article key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg card-hover">
              <Image
                src={post.image || "/placeholder.svg"}
                alt={post.title}
                width={300}
                height={200}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">
                    {post.category}
                  </span>
                  <div className="flex items-center text-gray-500 text-sm">
                    <Calendar size={16} className="mr-1" />
                    {new Date(post.date).toLocaleDateString()}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-blue-600 transition-colors">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-blue-600 font-medium hover:text-blue-700 transition-colors inline-flex items-center"
                >
                  Read More
                  <ArrowRight size={16} className="ml-1" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center">
          <Link href="/blog" className="btn-primary">
            View All Posts
          </Link>
        </div>
      </div>
    </section>
  )
}
