import HeroSection from '@/components/HeroSection'

import PortfolioSection from '@/components/PortfolioSection'
import ServedCities from '@/components/ServedCities'
import ContactSection from '@/components/ContactSection'
import TrustSection from '@/components/TrustSection'

export default function EnglishHomePage() {
    return (
        <>
            <HeroSection lang="EN" />
            <TrustSection lang="EN" />
            <section className="cv-auto"><PortfolioSection lang="EN" /></section>


            <ServedCities lang="EN" />
            <ContactSection lang="EN" />
        </>
    )
}
