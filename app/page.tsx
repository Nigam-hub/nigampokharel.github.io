import Hero from "@/components/home/hero"
import Services from "@/components/home/services"
import ClientLogos from "@/components/home/client-logos"
import Testimonials from "@/components/home/testimonials"
import BlogPreview from "@/components/home/blog-preview"

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <ClientLogos />
      <Testimonials />
      <BlogPreview />
    </>
  )
}
