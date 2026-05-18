import { BenefitsSection } from '@/components/landing/benefits-section'
import { CTASection } from '@/components/landing/cta-section'
import { FAQSection } from '@/components/landing/faq-section'
import { FeaturesSection } from '@/components/landing/features-section'
import { Footer } from '@/components/landing/footer'
import { HeroSection } from '@/components/landing/hero-section'
import { HowItWorksSection } from '@/components/landing/how-it-works-section'
import { Navbar } from '@/components/landing/navbar'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <BenefitsSection />
      <HowItWorksSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </main>
  )
}
