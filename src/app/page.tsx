import type { Metadata } from 'next'
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

export const metadata: Metadata = {
  title: 'Création Site Web Maroc | Agence Web Sitepro',
  description: 'Agence de création site web au Maroc. Sites professionnels, rapides et optimisés SEO. Devis gratuit, design sur mesure et résultats mesurables.',
  alternates: {
    canonical: 'https://sitepro.ma',
    languages: {
      'fr-MA': 'https://sitepro.ma',
      'en-MA': 'https://sitepro.ma/en',
    },
  },
}

export default function Home() {
  return (
    <>
      <HeroSection lang="FR" />
      <StatsSection lang="FR" />

      <section className="cv-auto"><SolutionsSection lang="FR" /></section>
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
      <section className="cv-auto"><AgencyServices lang="FR" /></section>

      <ToolsSection lang="FR" />

      <ServedCities lang="FR" />
      <MoroccoSection lang="FR" />
      <section className="cv-auto"><ContactSection lang="FR" /></section>
    </>
  )
}