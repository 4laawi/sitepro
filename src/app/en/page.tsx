import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
import HeroSection from '@/components/HeroSection'
import StatsSection from '@/components/StatsSection'
import ServedCities from '@/components/ServedCities'
import TrustSection from '@/components/TrustSection'

// Safely code-split heavier, below-the-fold sections

const PortfolioSection = dynamic(() => import('@/components/PortfolioSection'), { ssr: true })
const MoroccoSection = dynamic(() => import('@/components/MoroccoSection'), { ssr: true })
const ContactSection = dynamic(() => import('@/components/ContactSection'), { ssr: true })
const ToolsSection = dynamic(() => import('@/components/ToolsSection'), { ssr: true })

const AgencyServices = dynamic(() => import('@/components/AgencyServices'), { ssr: true })
const ScrollVelocity = dynamic(() => import('@/components/ScrollVelocityWrapper'), { ssr: true })
const SolutionsSection = dynamic(() => import('@/components/SolutionsSection'), { ssr: true })

export const metadata: Metadata = {
    title: 'Sitepro.ma - Web Agency Morocco | Professional Website Creation',
    description: 'Sitepro.ma - Your trusted digital partner in Morocco. We create modern and high-performing websites for Moroccan businesses. Custom design, optimized SEO, guaranteed results.',
    alternates: {
        canonical: 'https://www.sitepro.ma/en/',
        languages: {
            'fr-MA': 'https://www.sitepro.ma/',
            'en-MA': 'https://www.sitepro.ma/en/',
        },
    },
}

export default function EnglishHomePage() {
    return (
        <>
            <HeroSection lang="EN" />
            <StatsSection lang="EN" />
            <TrustSection lang="EN" />
            <section className="cv-auto"><SolutionsSection lang="EN" /></section>
            <section className="cv-auto"><PortfolioSection lang="EN" /></section>
            <div className="mb-12">
                <ScrollVelocity
                    texts={[
                        'Website creation. Web agency Morocco. SEO Ranking.',
                        'Let’s work together. Let’s work together. Let’s work together.'
                    ]}
                    velocity={100}
                    className="text-[#022545]"
                />
            </div>
            <section className="cv-auto"><AgencyServices lang="EN" /></section>

            <ToolsSection lang="EN" />

            <ServedCities lang="EN" />
            <MoroccoSection lang="EN" />
            <section className="cv-auto"><ContactSection lang="EN" /></section>
        </>
    )
}
