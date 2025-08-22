import Image from "next/image"
import { Award, Calendar, MapPin, Download } from "lucide-react"

const timeline = [
  {
    year: "2024",
    title: "Senior Digital Marketing Consultant",
    company: "Freelance",
    description: "Launched independent consultancy, helping 50+ businesses achieve their digital marketing goals.",
  },
  {
    year: "2022",
    title: "Digital Marketing Manager",
    company: "TechCorp Inc.",
    description: "Led a team of 5 marketers, increased organic traffic by 400% and managed $500K+ ad spend.",
  },
  {
    year: "2020",
    title: "SEO Specialist",
    company: "Digital Agency Pro",
    description: "Specialized in technical SEO and content strategy for e-commerce and SaaS clients.",
  },
  {
    year: "2019",
    title: "Marketing Coordinator",
    company: "StartupXYZ",
    description: "Started career in digital marketing, focusing on social media and content marketing.",
  },
]

const skills = [
  { name: "Google Ads", level: 95, icon: "🎯" },
  { name: "SEO", level: 98, icon: "🔍" },
  { name: "Google Analytics", level: 92, icon: "📊" },
  { name: "Facebook Ads", level: 88, icon: "📱" },
  { name: "Content Marketing", level: 85, icon: "✍️" },
  { name: "Email Marketing", level: 90, icon: "📧" },
]

const certifications = [
  "Google Ads Certified",
  "Google Analytics Certified",
  "Facebook Blueprint Certified",
  "HubSpot Content Marketing",
  "SEMrush SEO Toolkit",
  "Hootsuite Social Media",
]

export default function AboutPage() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Hi, I'm Nigam Pokharel</h1>
              <p className="text-xl text-gray-600 mb-6">
                A passionate digital marketing expert with 5+ years of experience helping businesses grow through
                strategic SEO, PPC, and data-driven marketing solutions.
              </p>
              <div className="flex items-center space-x-6 mb-8">
                <div className="flex items-center text-gray-600">
                  <MapPin size={20} className="mr-2 text-blue-600" />
                  Balkot, Bhaktapur
                </div>
                <div className="flex items-center text-gray-600">
                  <Calendar size={20} className="mr-2 text-blue-600" />
                  3+ Years Experience
                </div>
              </div>
              <button className="btn-primary inline-flex items-center">
                <Download size={20} className="mr-2" />
                Download Resume
              </button>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=500&width=400"
                alt="Nigam Pokharel"
                width={400}
                height={500}
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Professional Story */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">My Story</h2>
          <div className="prose prose-lg max-w-none text-gray-600">
            <p className="mb-6">
              My journey in digital marketing began 3 years ago when I discovered the power of data-driven marketing
              strategies. What started as curiosity about how search engines work evolved into a passion for helping
              businesses achieve measurable growth through strategic digital marketing.
            </p>
            <p className="mb-6">
              Throughout my career, I've had the privilege of working with diverse clients - from ambitious startups to
              established enterprises. Each project has taught me something new about the ever-evolving digital
              landscape and reinforced my belief that successful marketing is built on understanding both data and human
              behavior.
            </p>
            <p>
              Today, I specialize in creating comprehensive digital marketing strategies that combine technical
              expertise with creative thinking. My approach is always results-focused, transparent, and tailored to each
              client's unique goals and challenges.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">Career Journey</h2>
          <div className="relative">
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-blue-200"></div>
            {timeline.map((item, index) => (
              <div
                key={index}
                className={`relative flex items-center mb-8 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
              >
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? "md:pr-8" : "md:pl-8"}`}>
                  <div className="bg-white p-6 rounded-2xl shadow-lg card-hover ml-12 md:ml-0">
                    <div className="text-blue-600 font-bold text-lg mb-2">{item.year}</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{item.title}</h3>
                    <div className="text-blue-600 font-medium mb-3">{item.company}</div>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 bg-blue-600 rounded-full border-4 border-white shadow-lg flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="section-padding bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">Skills & Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-2xl">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <span className="text-2xl mr-3">{skill.icon}</span>
                    <span className="font-semibold text-gray-900">{skill.name}</span>
                  </div>
                  <span className="text-blue-600 font-bold">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-blue-600 h-2 rounded-full transition-all duration-1000"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">Certifications & Awards</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-lg card-hover text-center">
                <Award className="text-blue-600 mx-auto mb-4" size={32} />
                <h3 className="font-semibold text-gray-900">{cert}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
