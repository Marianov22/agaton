import Header from '@/components/header'
import Hero from '@/components/hero'
import Featured from '@/components/featured'
import Features from '@/components/features'
import Founders from '@/components/founders'
import Testimonials from '@/components/testimonials'
import CTA from '@/components/cta'
import ContactForm from '@/components/contact-form'
import Footer from '@/components/footer'
import VideoSection from '@/components/VideoSection'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Features />
        <Founders />
        <Testimonials />
        <CTA />
        <Featured />
        <ContactForm />
        <VideoSection />
      </main>
      <Footer />
    </div>
  )
}

