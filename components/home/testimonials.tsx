import { Star, Quote } from "lucide-react"
import Image from "next/image"

const testimonials = [
  {
    name: "Michael Chen",
    role: "CEO, TechStartup",
    image: "/placeholder.svg?height=80&width=80",
    content:
      "Sarah transformed our digital presence completely. Our organic traffic increased by 300% in just 6 months, and our conversion rates doubled. Her strategic approach and attention to detail are unmatched.",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    role: "Marketing Director, E-commerce Co",
    image: "/placeholder.svg?height=80&width=80",
    content:
      "Working with Sarah was a game-changer for our PPC campaigns. She optimized our Google Ads spend and increased our ROAS by 250%. The results speak for themselves - highly recommended!",
    rating: 5,
  },
]

export default function Testimonials() {
  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Clients Say</h2>
          <p className="text-xl text-gray-600">Don't just take my word for it - hear from satisfied clients</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 rounded-2xl p-8 card-hover">
              <div className="flex items-center mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 fill-current" size={20} />
                ))}
              </div>

              <Quote className="text-blue-600 mb-4" size={32} />

              <p className="text-gray-700 text-lg mb-6 leading-relaxed">"{testimonial.content}"</p>

              <div className="flex items-center">
                <Image
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  width={60}
                  height={60}
                  className="rounded-full mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
