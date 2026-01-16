import HeroSection from '@/components/HeroSection'
import ServicesSection from '@/components/ServicesSection'
import PortfolioSection from '@/components/PortfolioSection'
import PartnersSection from '@/components/PartnersSection'
import ServedCities from '@/components/ServedCities'
import AboutSection from '@/components/AboutSection'
import ContactSection from '@/components/ContactSection'

export default function EnglishHomePage() {
    return (
        <>
            <HeroSection lang="EN" />
            <section className="cv-auto"><PortfolioSection lang="EN" /></section>
            <ServicesSection lang="EN" />
            <PartnersSection lang="EN" />
            <AboutSection lang="EN" />
            <ServedCities lang="EN" />
            <ContactSection lang="EN" />
        </>
    )
}
