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
import FAQ from '@/components/faq'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Features />
        <Testimonials />
        <CTA />
        <Featured />
        <ContactForm />
        <VideoSection />
        <FAQ />
        <Founders />
      </main>
      <Footer />
    </div>
  )
}

