import dynamic from 'next/dynamic'
import HeroSection from '@/components/HeroSection'
import ServedCities from '@/components/ServedCities'

// Safely code-split heavier, below-the-fold sections

const PortfolioSection = dynamic(() => import('@/components/PortfolioSection'), { ssr: true })
const AboutSection = dynamic(() => import('@/components/AboutSection'), { ssr: true })
const MoroccoSection = dynamic(() => import('@/components/MoroccoSection'), { ssr: true })
const ContactSection = dynamic(() => import('@/components/ContactSection'), { ssr: true })
const ToolsSection = dynamic(() => import('@/components/ToolsSection'), { ssr: true })
const CapabilitiesSection = dynamic(() => import('@/components/CapabilitiesSection'), { ssr: true })


export default function Home() {
  return (
    <>
      <HeroSection lang="FR" />
      {/* Breadcrumb JSON-LD for homepage */}
      {/* Inject via next/script would normally be in layout if needed; homepage typically doesn't require breadcrumbs */}
      <section className="cv-auto"><PortfolioSection lang="FR" /></section>

      <CapabilitiesSection />
      <ToolsSection />

      <ServedCities lang="FR" />
      <MoroccoSection />
      <section className="cv-auto"><AboutSection lang="FR" /></section>
      <section className="cv-auto"><ContactSection lang="FR" /></section>
    </>
  )
}