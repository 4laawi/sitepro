import dynamic from 'next/dynamic'
import HeroSection from '@/components/HeroSection'
import ServedCities from '@/components/ServedCities'

// Safely code-split heavier, below-the-fold sections
const PartnersSection = dynamic(() => import('@/components/PartnersSection'), { ssr: true })
const ServicesSection = dynamic(() => import('@/components/ServicesSection'), { ssr: true })
const PortfolioSection = dynamic(() => import('@/components/PortfolioSection'), { ssr: true })
const AboutSection = dynamic(() => import('@/components/AboutSection'), { ssr: true })
const ContactSection = dynamic(() => import('@/components/ContactSection'), { ssr: true })

export default function Home() {
  return (
    <>
      <HeroSection />
      {/* Breadcrumb JSON-LD for homepage */}
      {/* Inject via next/script would normally be in layout if needed; homepage typically doesn't require breadcrumbs */}
      <section className="cv-auto"><PortfolioSection /></section>
      <section className="cv-auto"><PartnersSection /></section>
      <section className="cv-auto"><ServicesSection /></section>
      <ServedCities />
      <section className="cv-auto"><AboutSection /></section>
      <section className="cv-auto"><ContactSection /></section>
    </>
  )
}