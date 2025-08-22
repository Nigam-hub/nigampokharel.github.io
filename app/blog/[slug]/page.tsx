import Image from "next/image"
import Link from "next/link"
import { Calendar, Clock, ArrowLeft, Share2, Twitter, Linkedin, Facebook } from "lucide-react"

// This would typically come from a CMS or API
const blogPost = {
  title: "10 SEO Trends That Will Dominate 2024",
  excerpt:
    "Stay ahead of the curve with these emerging SEO strategies that will shape search rankings in the coming year.",
  content: `
    <p>Search Engine Optimization continues to evolve at a rapid pace, and 2024 promises to bring significant changes that will reshape how we approach SEO strategy. As search engines become more sophisticated and user behavior continues to shift, staying ahead of these trends is crucial for maintaining and improving your search visibility.</p>

    <h2>1. AI-Powered Content Optimization</h2>
    <p>Artificial Intelligence is revolutionizing how we create and optimize content. Tools powered by machine learning are now capable of analyzing search intent with unprecedented accuracy, helping marketers create content that truly matches what users are looking for.</p>

    <h2>2. Core Web Vitals Evolution</h2>
    <p>Google's Core Web Vitals continue to be a critical ranking factor, but the metrics are evolving. Page experience signals are becoming more nuanced, with new metrics being introduced to better measure user experience.</p>

    <h2>3. Voice Search Optimization</h2>
    <p>With the continued growth of voice assistants and smart speakers, optimizing for voice search is no longer optional. This means focusing on conversational keywords and featured snippet optimization.</p>

    <h2>4. E-A-T and YMYL Content</h2>
    <p>Expertise, Authoritativeness, and Trustworthiness (E-A-T) remain crucial, especially for Your Money or Your Life (YMYL) content. Building author authority and demonstrating expertise through content is more important than ever.</p>

    <h2>5. Video SEO Integration</h2>
    <p>Video content continues to dominate user engagement, and search engines are getting better at understanding video content. Optimizing video content for search is becoming a critical component of SEO strategy.</p>

    <p>These trends represent just the beginning of what we can expect in 2024. The key to success is staying adaptable and continuously testing new strategies while maintaining focus on fundamental SEO principles.</p>
  `,
  image: "/placeholder.svg?height=400&width=800",
  date: "2024-01-15",
  readTime: "8 min read",
  category: "SEO",
  author: {
    name: "Nigam Pokharel",
    image: "/placeholder.svg?height=60&width=60",
    bio: "Digital Marketing Expert with 3+ years of experience",
  },
}

const relatedPosts = [
  {
    title: "How to Optimize Google Ads for Maximum ROI",
    slug: "google-ads-roi-optimization",
    image: "/placeholder.svg?height=150&width=200",
    category: "PPC",
  },
  {
    title: "The Complete Guide to GA4 Migration",
    slug: "ga4-migration-guide",
    image: "/placeholder.svg?height=150&width=200",
    category: "Analytics",
  },
  {
    title: "Local SEO Checklist for Small Businesses",
    slug: "local-seo-checklist",
    image: "/placeholder.svg?height=150&width=200",
    category: "Local SEO",
  },
]

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  return (
    <div className="pt-16">
      {/* Back Button */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link href="/blog" className="inline-flex items-center text-blue-600 hover:text-blue-700 transition-colors">
          <ArrowLeft size={20} className="mr-2" />
          Back to Blog
        </Link>
      </div>

      {/* Article Header */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-8">
          <div className="flex items-center space-x-4 mb-6">
            <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">
              {blogPost.category}
            </span>
            <div className="flex items-center text-gray-500 text-sm">
              <Calendar size={16} className="mr-1" />
              {new Date(blogPost.date).toLocaleDateString()}
            </div>
            <div className="flex items-center text-gray-500 text-sm">
              <Clock size={16} className="mr-1" />
              {blogPost.readTime}
            </div>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">{blogPost.title}</h1>

          <p className="text-xl text-gray-600 mb-8">{blogPost.excerpt}</p>

          {/* Author Info */}
          <div className="flex items-center justify-between border-t border-b border-gray-200 py-6">
            <div className="flex items-center">
              <Image
                src={blogPost.author.image || "/placeholder.svg"}
                alt={blogPost.author.name}
                width={50}
                height={50}
                className="rounded-full mr-4"
              />
              <div>
                <h4 className="font-semibold text-gray-900">{blogPost.author.name}</h4>
                <p className="text-gray-600 text-sm">{blogPost.author.bio}</p>
              </div>
            </div>

            {/* Share Buttons */}
            <div className="flex items-center space-x-3">
              <span className="text-gray-600 text-sm mr-2">Share:</span>
              <button className="text-gray-400 hover:text-blue-600 transition-colors">
                <Twitter size={20} />
              </button>
              <button className="text-gray-400 hover:text-blue-600 transition-colors">
                <Linkedin size={20} />
              </button>
              <button className="text-gray-400 hover:text-blue-600 transition-colors">
                <Facebook size={20} />
              </button>
              <button className="text-gray-400 hover:text-blue-600 transition-colors">
                <Share2 size={20} />
              </button>
            </div>
          </div>
        </header>

        {/* Featured Image */}
        <div className="mb-8">
          <Image
            src={blogPost.image || "/placeholder.svg"}
            alt={blogPost.title}
            width={800}
            height={400}
            className="w-full h-64 md:h-96 object-cover rounded-2xl"
          />
        </div>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none mb-12">
          <div dangerouslySetInnerHTML={{ __html: blogPost.content }} />
        </div>

        {/* CTA Section */}
        <div className="bg-blue-50 rounded-2xl p-8 mb-12 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Need Help With Your SEO Strategy?</h3>
          <p className="text-gray-600 mb-6">
            Let's discuss how I can help you implement these SEO trends and improve your search rankings.
          </p>
          <Link href="/contact" className="btn-primary">
            Get SEO Consultation
          </Link>
        </div>
      </article>

      {/* Related Posts */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Related Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedPosts.map((post, index) => (
              <article key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg card-hover">
                <Image
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  width={200}
                  height={150}
                  className="w-full h-40 object-cover"
                />
                <div className="p-6">
                  <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium mb-3 inline-block">
                    {post.category}
                  </span>
                  <h3 className="text-lg font-bold text-gray-900 mb-4 hover:text-blue-600 transition-colors">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h3>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-blue-600 font-medium hover:text-blue-700 transition-colors"
                  >
                    Read Article →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
