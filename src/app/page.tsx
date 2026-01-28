import dynamic from 'next/dynamic'
import HeroSection from '@/components/HeroSection'
import StatsSection from '@/components/StatsSection'
import ServedCities from '@/components/ServedCities'

// Safely code-split heavier, below-the-fold sections

const PortfolioSection = dynamic(() => import('@/components/PortfolioSection'), { ssr: true })
const MoroccoSection = dynamic(() => import('@/components/MoroccoSection'), { ssr: true })
const ContactSection = dynamic(() => import('@/components/ContactSection'), { ssr: true })
const ToolsSection = dynamic(() => import('@/components/ToolsSection'), { ssr: true })

const AgencyServices = dynamic(() => import('@/components/AgencyServices'), { ssr: true })
const ScrollVelocity = dynamic(() => import('@/components/ScrollVelocityWrapper'), { ssr: true })
const SolutionsSection = dynamic(() => import('@/components/SolutionsSection'), { ssr: true })


export default function Home() {
  return (
    <>
      <HeroSection lang="FR" />
      <StatsSection />
      {/* Breadcrumb JSON-LD for homepage */}
      {/* Inject via next/script would normally be in layout if needed; homepage typically doesn't require breadcrumbs */}
      <section className="cv-auto"><SolutionsSection /></section>
      <section className="cv-auto"><PortfolioSection lang="FR" /></section>
      <div className="mb-12">
        <ScrollVelocity
          texts={[
            'Création de site web. Agence web Maroc. Référencement.',
            'Let’s work together. Let’s work together. Let’s work together.'
          ]}
          velocity={100}
          className="text-[#022545]"
        />
      </div>
      <section className="cv-auto"><AgencyServices /></section>

      <ToolsSection />

      <ServedCities lang="FR" />
      <MoroccoSection />
      <section className="cv-auto"><ContactSection lang="FR" /></section>
    </>
  )
}