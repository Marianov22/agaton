import Header from '@/components/header'
import Hero from '@/components/hero'
import Featured from '@/components/featured'
import Features from '@/components/features'
import Founders from '@/components/founders'
import Testimonials from '@/components/testimonials'
import CTA from '@/components/cta'
import ContactForm from '@/components/contact-form'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Featured />
        <Features />
        <Founders />
        <Testimonials />
        <CTA />
        <ContactForm />
      </main>
      <Footer />
    </div>
  )
}

