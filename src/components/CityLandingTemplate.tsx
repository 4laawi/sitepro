'use client'

import Image from 'next/image'
import Link from 'next/link'
import ClientMotionWrapper from '@/components/ClientMotionWrapper'
import { CheckCircle2, XCircle, Zap, Globe, ShieldCheck, ArrowRight, Bot, Clock, Lock, TrendingUp, MapPin, Rocket } from 'lucide-react'
import FAQSection from '@/components/FAQSection'
import ContactForm from '@/components/ContactForm'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { useHasMounted } from '@/hooks/useHasMounted'
import '../app/creation-site-web-maroc/NewGenSection.css'
import '../app/creation-site-web-maroc/LeadGenTable.css'
import '../app/creation-site-web-maroc/SuccessStories.css'
import '../app/creation-site-web-maroc/ServicesSlider.css'

interface CityLandingTemplateProps {
    city: string;
    isMainMaroc?: boolean;
    lang?: 'FR' | 'EN';
}

export default function CityLandingTemplate({ city, isMainMaroc = false, lang = 'FR' }: CityLandingTemplateProps) {
    const [isMobile, setIsMobile] = useState(false);
    const hasMounted = useHasMounted();

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const effectiveIsMobile = hasMounted ? isMobile : false;

    const techStack = [
        { name: 'Astro', color: '#FF5D01' },
        { name: 'Next.js', color: '#000000' },
        { name: 'React', color: '#61DAFB' },
        { name: 'TypeScript', color: '#3178C6' },
        { name: 'Tailwind', color: '#06B6D4' },
    ]

    const featuresFR = [
        {
            title: <>Vitesse <span className="text-primary">foudroyante</span></>,
            description: <>Score Lighthouse <strong>99-100</strong>. Temps de chargement ultra-rapide pour réduire le taux de rebond et plaire aux algorithmes de Google.</>,
            icon: (
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13 10V3L4 14h7v7l9-11h-7z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                </svg>
            ),
        },
        {
            title: <>Architecture <span className="text-primary">Evolutive</span></>,
            description: <>Frameworks <strong>Next.js</strong> et <strong>Astro</strong> pour une scalabilité totale. Votre site reste performant, sécurisé et moderne au fil des années.</>,
            icon: (
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L2 7l10 5 10-5-10-5z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                    <path d="M2 17l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                    <path d="M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                </svg>
            ),
            highlighted: true,
        },
        {
            title: <>SEO <span className="text-primary">Sémantique Avancé</span></>,
            description: <>Balisage de données structurées et hiérarchie de contenu optimisée pour dominer les résultats de recherche {isMainMaroc ? "au Maroc et à l'international" : `à ${city}`}.</>,
            icon: (
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none" />
                    <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" stroke="currentColor" strokeWidth="2" fill="none" />
                </svg>
            ),
        },
        {
            title: <>Visibilité <span className="text-primary">Moteurs d&apos;IA</span></>,
            description: <>Contenu optimisé pour être cité par les agents intelligents comme <strong>ChatGPT</strong> et <strong>Gemini</strong>, augmentant votre autorité digitale.</>,
            icon: (
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.5 2l1.5 4.5L15.5 8l-4.5 1.5L9.5 14l-1.5-4.5L3.5 8l4.5-1.5L9.5 2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                    <path d="M17 12l1 3 3 1-3 1-1 3-1-3-3-1 3-1 1-3z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                </svg>
            ),
        }
    ];

    const featuresEN = [
        {
            title: <>Lightning <span className="text-primary">Fast Speed</span></>,
            description: <>Lighthouse score <strong>99-100</strong>. Ultra-fast loading times to reduce bounce rates and please Google algorithms.</>,
            icon: (
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13 10V3L4 14h7v7l9-11h-7z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                </svg>
            ),
        },
        {
            title: <>Scalable <span className="text-primary">Architecture</span></>,
            description: <><strong>Next.js</strong> and <strong>Astro</strong> frameworks for total scalability. Your site remains high-performing, secure, and modern over the years.</>,
            icon: (
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L2 7l10 5 10-5-10-5z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                    <path d="M2 17l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                    <path d="M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                </svg>
            ),
            highlighted: true,
        },
        {
            title: <>Advanced <span className="text-primary">Semantic SEO</span></>,
            description: <>Structured data markup and optimized content hierarchy to dominate search results {isMainMaroc ? "in Morocco and internationally" : `in ${city}`}.</>,
            icon: (
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none" />
                    <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" stroke="currentColor" strokeWidth="2" fill="none" />
                </svg>
            ),
        },
        {
            title: <>Visibility <span className="text-primary">AI Engines</span></>,
            description: <>Content optimized to be cited by intelligent agents like <strong>ChatGPT</strong> and <strong>Gemini</strong>, increasing your digital authority.</>,
            icon: (
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.5 2l1.5 4.5L15.5 8l-4.5 1.5L9.5 14l-1.5-4.5L3.5 8l4.5-1.5L9.5 2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                    <path d="M17 12l1 3 3 1-3 1-1 3-1-3-3-1 3-1 1-3z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                </svg>
            ),
        }
    ];

    const features = lang === 'EN' ? featuresEN : featuresFR;

    const citiesFR = [
        'Tanger', 'Rabat', 'Kénitra', 'Tétouan', 'Larache', 'Asilah', 'Chefchaouen',
        'Al hoceima', 'Nador', 'Casablanca', 'Khouribga', 'Fes', 'Meknès', 'Ifrane',
        'Marrakech', 'Essaouira', 'Benguerir', 'Agadir', 'Laayoune', 'Dakhla'
    ];

    const citiesEN = [
        'Tangier', 'Rabat', 'Kenitra', 'Tetouan', 'Larache', 'Asilah', 'Chefchaouen',
        'Al Hoceima', 'Nador', 'Casablanca', 'Khouribga', 'Fez', 'Meknes', 'Ifrane',
        'Marrakech', 'Essaouira', 'Benguerir', 'Agadir', 'Laayoune', 'Dakhla'
    ];

    const cities = lang === 'EN' ? citiesEN : citiesFR;

    const successStoriesFR = [
        { url: 'ultrapc.ma', kw: ["PC Portables Maroc", "laptop Maroc"] },
        { url: 'opal.ma', kw: ["chaise maroc", "Chaises ergonomiques Maroc"] },
        { url: 'typoedit.com', kw: ["imprimerie rabat", "imprimerie commercial rabat"] },
    ];

    const successStoriesEN = [
        { url: 'ultrapc.ma', kw: ["Laptops Morocco", "laptop Morocco"] },
        { url: 'opal.ma', kw: ["chair morocco", "Ergonomic chairs Morocco"] },
        { url: 'typoedit.com', kw: ["print shop rabat", "commercial printing rabat"] },
    ];

    const successStories = lang === 'EN' ? successStoriesEN : successStoriesFR;

    const displayCity = isMainMaroc ? (lang === 'EN' ? 'Morocco' : 'Maroc') : city;
    const preposition = lang === 'EN' ? 'in' : (city.toLowerCase() === 'maroc' ? 'au' : 'à');

    return (
        <div className="flex flex-col w-full font-sans snipcss-odHLl">
            {/* Hero Section */}
            <section className="bg-white border-b border-gray-100">
                <div className="container px-4 py-8 lg:py-24 mx-auto max-w-7xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                        <ClientMotionWrapper
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="space-y-8 text-center lg:text-left"
                        >
                            <div className="flex justify-center lg:justify-start">
                                <span className="badge-gradient">
                                    {lang === 'EN' ? `Website creation ${displayCity}` : `Création site web ${displayCity}`}
                                </span>
                            </div>

                            <h1 className="hero-title-premium">
                                {lang === 'EN'
                                    ? (isMainMaroc ? "Website Creation in Morocco – Professional Solutions" : `Website Creation ${preposition} ${displayCity} – 100% SEO & AI Optimized`)
                                    : (isMainMaroc ? "Création de site web au Maroc – Solutions professionnelles" : `Création de site web ${preposition} ${displayCity} – 100 % optimisé SEO et IA`)}
                            </h1>

                            <p className="hero-subtitle-premium mx-auto lg:mx-0">
                                {lang === 'EN' ? (
                                    <>Our <strong className="text-gray-900">website creation agency in Morocco</strong> designs your customized <strong className="text-gray-900">professional website</strong>, fully optimized for <strong className="text-gray-900">SEO</strong> and new <strong className="text-gray-900">AI engines</strong>.</>
                                ) : (
                                    <>Notre <strong className="text-gray-900">agence de création de sites web au Maroc</strong> conçoit votre <strong className="text-gray-900">site web professionnel</strong> sur mesure, entièrement optimisé pour le <strong className="text-gray-900">SEO</strong> et les nouveaux <strong className="text-gray-900">moteurs d’IA</strong>.</>
                                )}
                            </p>

                            <div className="flex flex-col sm:flex-row items-center gap-6 pt-4">
                                <div className="flex flex-col items-center lg:items-start group cursor-pointer">
                                    <span className="text-primary-600 text-xs font-bold tracking-[0.2em] mb-1 group-hover:text-primary-500 transition-colors">
                                        {lang === 'EN' ? 'FREE CONSULTATION?' : 'CONSULTATION GRATUITE ?'}
                                    </span>
                                    <a href="mailto:contact@sitepro.ma" className="text-2xl md:text-3xl font-bold text-[#022545] hover:text-primary-600 transition-colors border-b-2 border-primary-500 pb-1">
                                        contact@sitepro.ma
                                    </a>
                                </div>
                            </div>
                        </ClientMotionWrapper>

                        <ClientMotionWrapper
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.7, delay: 0.2 }}
                            className="relative"
                        >
                            <Image
                                src="/Purple and White Minimalist Your Business Needs a Website Instagram Post (1).webp"
                                alt={`Agence création site web ${displayCity} - Solutions pro`}
                                width={1080}
                                height={1080}
                                className="w-full h-auto max-w-[400px] lg:max-w-[620px] mx-auto relative z-10 transition-transform duration-700 rounded-xl"
                                priority
                            />
                            <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary-100 rounded-full blur-3xl opacity-60 z-0"></div>
                            <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-blue-50 rounded-full blur-3xl opacity-60 z-0"></div>
                        </ClientMotionWrapper>
                    </div>
                </div>
            </section>

            {/* Form CTA Section */}
            <section id="contact-form-section" className="bg-[#022545] py-12 lg:py-20 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary-500 rounded-full blur-[120px] opacity-10"></div>
                <div className="container px-4 mx-auto max-w-5xl text-center relative z-10">
                    <ClientMotionWrapper
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <h2 className="section-title-premium text-white">
                            {lang === 'EN' ? (
                                <>Website creation: an advisor <span className="text-primary-400 border-b-4 border-primary-500 pb-2">will call you back!</span></>
                            ) : (
                                <>Création de site web : un conseiller <span className="text-primary-400 border-b-4 border-primary-500 pb-2">vous rappelle !</span></>
                            )}
                        </h2>
                    </ClientMotionWrapper>

                    <div className="mt-16 max-w-4xl mx-auto">
                        <ContactForm lang={lang} />
                    </div>
                </div>
            </section>

            {/* New Generation Section */}
            <section className="py-16 lg:py-24 bg-white new-gen-section">
                <div className="new-gen-container">
                    <header className="section-header">
                        <h2 className="section-title-premium">
                            {lang === 'EN' ? (
                                <><span>Excellence in web design</span> <br /> <span className="title-line-2"><span className="highlight">new generation</span> {preposition} {displayCity}</span></>
                            ) : (
                                <><span>Excellence en conception web</span> <br /> <span className="title-line-2"><span className="highlight">nouvelle génération</span> {preposition} {displayCity}</span></>
                            )}
                        </h2>
                        <p className="section-subtitle-premium mx-auto">
                            {lang === 'EN' ? (
                                <>We build ultra-performing digital infrastructures for your <strong className="text-gray-900">website creation in Morocco</strong>, designed to <strong className="text-gray-900">convert your visitors</strong> and dominate search results.</>
                            ) : (
                                <>Nous bâtissons des infrastructures digitales ultra-performantes pour votre <strong>création site web maroc</strong>, conçues pour <strong>convertir vos visiteurs</strong> et dominer les résultats de recherche.</>
                            )}
                        </p>
                        <div className="tech-stack">
                            {techStack.map((tech) => (
                                <span key={tech.name} className="tech-pill">
                                    <span className="tech-dot" style={{ backgroundColor: tech.color }}></span>
                                    {tech.name}
                                </span>
                            ))}
                        </div>
                    </header>

                    <div className="features-grid">
                        {features.map((feature, idx) => (
                            <motion.div
                                key={idx}
                                initial={effectiveIsMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                className={`feature-card ${feature.highlighted ? 'feature-card--highlight' : ''}`}
                            >
                                <div className="feature-icon">
                                    {feature.icon}
                                </div>
                                <div className="feature-content">
                                    <h3 className="feature-title">{feature.title}</h3>
                                    <p className="feature-description">{feature.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <div className="cta-container">
                        <ClientMotionWrapper
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="cta-box"
                        >
                            <div className="cta-content">
                                <div className="cta-icon">
                                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        <polyline points="22 4 12 14.01 9 11.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <div className="cta-text">
                                    <p className="cta-headline">
                                        {lang === 'EN' ? (
                                            <>Need a website that <strong>surpasses</strong> your goals?</>
                                        ) : (
                                            <>Besoin d&apos;un site web qui <strong>surpasse</strong> vos objectifs ?</>
                                        )}
                                    </p>
                                    <p className="cta-subtext">
                                        {lang === 'EN' ? (
                                            <>Free technical audit • Express quote • Expertise {isMainMaroc ? 'in Morocco' : `in ${displayCity}`}</>
                                        ) : (
                                            <>Audit technique offert • Devis express • Expertise {isMainMaroc ? 'marocaine' : `à ${displayCity}`}</>
                                        )}
                                    </p>
                                </div>
                            </div>

                            <Link href="/contact/" className="btn-launch group">
                                <div className="btn-launch-content">
                                    {lang === 'EN' ? 'Launch my project' : 'Lancer mon projet'}
                                    <svg width="24" className="w-5 h-5" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <div className="btn-launch-content absolute">
                                    {lang === 'EN' ? 'Launch my project' : 'Lancer mon projet'}
                                    <svg width="24" className="w-5 h-5" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                            </Link>
                        </ClientMotionWrapper>
                    </div>
                </div>
            </section>

            {/* Comparison Section */}
            <section className="py-16 lg:py-24 bg-white relative overflow-hidden">
                <div className="container px-4 mx-auto max-w-7xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-8">
                            <h2 className="section-title-premium lg:text-left">
                                {lang === 'EN' ? (
                                    <>Take the lead: web technologies that <span className="text-primary-600">outperform your competitors</span></>
                                ) : (
                                    <>Prenez l&apos;avantage : des technologies web qui <span className="text-primary-600">surpassent vos concurrents</span></>
                                )}
                            </h2>
                            <p className="section-subtitle-premium lg:text-left lg:mx-0">
                                {lang === 'EN' ? (
                                    <>While your competitors stagnate with outdated sites — your <strong className="text-gray-900">professional website in Morocco</strong> dominates search results and appeals to AI algorithms.</>
                                ) : (
                                    <>Pendant que vos concurrents stagnent avec des sites dépassés — votre <strong className="text-gray-900">site web professionnel au Maroc</strong> domine les résultats de recherche et séduit les algorithmes d&apos;IA.</>
                                )}
                            </p>

                            <div className="grid grid-cols-3 gap-8 pt-4">
                                <div className="space-y-2">
                                    <div className="text-4xl font-black text-[#022545]">99<span className="text-lg text-gray-400">/100</span></div>
                                    <p className="text-xs font-bold text-gray-500 uppercase tracking-wider">PageSpeed Insights</p>
                                </div>
                                <div className="space-y-2">
                                    <div className="text-4xl font-black text-[#022545] inline-flex items-baseline">&lt;1<span className="text-lg text-gray-400 ml-1">s</span></div>
                                    <p className="text-xs font-bold text-gray-500 uppercase tracking-wider">{lang === 'EN' ? 'Loading Time' : 'Temps de chargement'}</p>
                                </div>
                                <div className="space-y-2">
                                    <div className="text-4xl font-black text-[#022545]">100<span className="text-lg text-gray-400">%</span></div>
                                    <p className="text-xs font-bold text-gray-500 uppercase tracking-wider">SEO & IA Ready</p>
                                </div>
                            </div>
                        </div>

                        <ClientMotionWrapper
                            initial={{ opacity: 0, x: 40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-3xl shadow-[0_40px_100px_-20px_rgba(0,0,0,0.1)] border border-gray-100 overflow-hidden"
                        >
                            <div className="flex border-b border-gray-100">
                                <div className="flex-1 p-6 bg-red-50/50 flex items-center justify-center gap-2 border-r border-gray-100">
                                    <XCircle className="w-5 h-5 text-red-500" />
                                    <span className="font-bold text-red-600 text-sm md:text-base uppercase">{lang === 'EN' ? 'Low-Cost Sites' : 'Sites Low-Cost'}</span>
                                </div>
                                <div className="flex-1 p-6 bg-primary-500 flex items-center justify-center gap-2">
                                    <CheckCircle2 className="w-5 h-5 text-white" />
                                    <span className="font-bold text-white text-sm md:text-base uppercase">{lang === 'EN' ? 'New Gen Sites' : 'Sites New Gen'}</span>
                                </div>
                            </div>

                            <div className="p-8 space-y-6">
                                {[
                                    {
                                        label: 'PageSpeed Score',
                                        icons: <Zap className="w-5 h-5 text-green-500" />,
                                        bad: '35-50',
                                        good: '99-100'
                                    },
                                    {
                                        label: lang === 'EN' ? 'Google Visibility' : 'Visibilité Google',
                                        icons: <Globe className="w-5 h-5 text-green-500" />,
                                        bad: lang === 'EN' ? 'Non-existent' : 'Inexistante',
                                        good: lang === 'EN' ? 'Optimized' : 'Optimisée'
                                    },
                                    {
                                        label: lang === 'EN' ? 'AI SEO' : 'Référencement IA',
                                        icons: <Bot className="w-5 h-5 text-green-500" />,
                                        bad: lang === 'EN' ? 'Not compatible' : 'Non compatible',
                                        good: lang === 'EN' ? '100% Optimized' : '100% optimisé'
                                    },
                                    {
                                        label: lang === 'EN' ? 'Loading Time' : 'Temps de chargement',
                                        icons: <Clock className="w-5 h-5 text-green-500" />,
                                        bad: lang === 'EN' ? '+5 seconds' : '+5 secondes',
                                        good: lang === 'EN' ? '<1 second' : '<1 seconde'
                                    },
                                ].map((row, i) => (
                                    <div key={i} className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 group">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-primary-50 transition-colors shrink-0">
                                                {row.icons}
                                            </div>
                                            <span className="font-semibold text-tech-dark">{row.label}</span>
                                        </div>
                                        <div className="flex items-center gap-4">
                                            <span className="px-4 py-1.5 rounded-lg bg-red-50 text-red-600 text-sm font-bold min-w-[100px] text-center">{row.bad}</span>
                                            <span className="px-4 py-1.5 rounded-lg bg-primary-50 text-primary-600 text-sm font-bold min-w-[100px] text-center">{row.good}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="mx-6 mb-6 p-6 bg-[#022545] rounded-2xl flex items-center justify-between text-white">
                                <div className="space-y-1">
                                    <h4 className="font-bold">{lang === 'EN' ? 'Test our site yourself' : 'Testez vous-même notre site'}</h4>
                                    <p className="text-white/60 text-xs">{lang === 'EN' ? 'sitepro.ma — speed guaranteed' : 'sitepro.ma — rapidité garantie'}</p>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="relative">
                                        <svg className="w-14 h-14 -rotate-90">
                                            <circle cx="28" cy="28" r="24" fill="transparent" stroke="white" strokeWidth="4" className="opacity-10" />
                                            <circle cx="28" cy="28" r="24" fill="transparent" stroke="#3b82f6" strokeWidth="4" strokeDasharray="150" strokeDashoffset="0" strokeLinecap="round" />
                                        </svg>
                                        <div className="absolute inset-0 flex items-center justify-center font-bold text-sm">99</div>
                                    </div>
                                    <div className="text-xs font-bold leading-tight">
                                        <div className="text-primary-500">PageSpeed</div>
                                        <div className="text-white/60">Insights Score</div>
                                    </div>
                                </div>
                            </div>
                        </ClientMotionWrapper>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section className="py-16 lg:py-24 bg-white">
                <div className="container px-4 mx-auto max-w-7xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="order-2 lg:order-1">
                            <Image
                                src="/Purple and White Minimalist Your Business Needs a Website Instagram Post (7).webp"
                                alt={lang === 'EN' ? `Professional website creation expert ${preposition} ${displayCity}` : `Expert en création de sites web professionnels ${preposition} ${displayCity}`}
                                width={1080}
                                height={1080}
                                className="w-full h-auto"
                            />
                        </div>
                        <div className="space-y-6 order-1 lg:order-2">
                            <h2 className="section-title-premium lg:text-left">
                                {lang === 'EN'
                                    ? `Website creation agency optimized for SEO, AI, and conversion ${preposition} ${displayCity}`
                                    : `Agence de création de sites web optimisés SEO, IA et conversion ${preposition} ${displayCity}`}
                            </h2>
                            <div className="space-y-4 text-gray-600 section-subtitle-premium lg:text-left lg:mx-0">
                                {lang === 'EN' ? (
                                    <>
                                        <p>Sitepro.ma is your <strong>website creation agency in Morocco</strong> specialized in designing high-end digital solutions. {isMainMaroc ? "Based in Marrakech, we support entrepreneurs and SMEs throughout the Kingdom with sharp SEO expertise." : `We support entrepreneurs and SMEs from ${displayCity} in their digital success.`}</p>
                                        <p>Our approach is performance-oriented: each <strong className="text-gray-900">professional website</strong> is co-built to be 100% optimized, ensuring maximum visibility in Morocco.</p>
                                        <p>We focus on <strong>conversion</strong>, <strong>security</strong>, and extreme speed to turn your visitors into loyal customers.</p>
                                    </>
                                ) : (
                                    <>
                                        <p>Sitepro.ma est votre <strong>agence création site web maroc</strong> spécialisée dans la conception de solutions digitales haut de gamme. {isMainMaroc ? "Basés à Marrakech, nous accompagnons les entrepreneurs et les PME dans tout le Royaume avec une expertise SEO pointue." : `Nous accompagnons les entrepreneurs et les PME de ${displayCity} dans leur réussite digitale.`}</p>
                                        <p>Notre approche est axée sur la performance : chaque <strong className="text-gray-900">site web professionnel</strong> est co-construit pour être 100 % optimisé, assurant une visibilité maximale au Maroc.</p>
                                        <p>Nous mettons l&apos;accent sur la <strong>conversion</strong>, la <strong>sécurité</strong>, et la rapidité extrême pour transformer vos visiteurs en clients fidèles.</p>
                                    </>
                                )}
                            </div>
                            <div className="pt-6">
                                <Link href="/contact/" className="inline-flex items-center gap-3 px-8 py-4 bg-[#022545] text-white rounded-xl font-bold hover:bg-gray-800 transition-all">
                                    {lang === 'EN' ? 'Contact us' : 'Contactez-nous'}
                                    <ArrowRight className="w-5 h-5" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Error Section */}
            <section className="py-16 lg:py-24 bg-white">
                <div className="container px-4 mx-auto max-w-7xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-6">
                            <h2 className="section-title-premium lg:text-left">
                                {lang === 'EN' ? (
                                    <>Website creation: <span className="underline decoration-red-500">the mistake not to make</span> ⚠️</>
                                ) : (
                                    <>Création de site web : <span className="underline decoration-red-500">l&apos;erreur à ne pas commettre</span> ⚠️</>
                                )}
                            </h2>
                            <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
                                {lang === 'EN' ? (
                                    <>
                                        <p>Today, creating a website has become extremely simple thanks to <strong>no-code platforms</strong> and <strong>AI site generators</strong>, as well as web agencies that offer low-cost sites.</p>
                                        <p className="bg-red-50 border-l-4 border-red-500 p-4">While many people ignore it at first, these sites will <strong>never achieve a good ranking on Google</strong>. They will serve at best as a simple showcase for a business card.</p>
                                        <p>Every site we develop is designed for <strong>maximum visibility</strong>. We meticulously optimize it for <Link href="/creative-site-web-maroc/" className="text-primary-600 font-bold hover:underline">website creation in Morocco</Link> and SEO, guaranteeing an excellent Google ranking.</p>
                                    </>
                                ) : (
                                    <>
                                        <p>Aujourd&apos;hui, créer un site web est devenu extrêmement simple grâce aux <strong>plateformes no code</strong> et aux <strong>générateurs de sites IA</strong>, mais aussi aux agences web qui proposent des sites low-cost.</p>
                                        <p className="bg-red-50 border-l-4 border-red-500 p-4">Bien que beaucoup de gens l&apos;ignorent au départ, ces sites n&apos;atteindront <strong>jamais un bon classement sur Google</strong>. Ils ne serviront au mieux que de simple vitrine à mentionner sur une carte de visite.</p>
                                        <p>Chaque site que nous développons est conçu pour une <strong>visibilité maximale</strong>. Nous l&apos;optimisons méticuleusement pour la <Link href="/agence-seo-maroc/" className="text-primary-600 font-bold hover:underline">création site web au maroc</Link> et le référencement naturel, garantissant un excellent classement sur Google.</p>
                                    </>
                                )}
                            </div>
                            <div className="pt-6">
                                <Link href="/contact/" className="inline-flex items-center gap-3 px-8 py-4 bg-primary-500 text-white rounded-xl font-bold hover:bg-primary-600 transition-all shadow-lg shadow-primary-200">
                                    {lang === 'EN' ? 'Request a free audit' : 'Demandez un audit gratuit'}
                                    <ArrowRight className="w-5 h-5" />
                                </Link>
                            </div>
                        </div>
                        <div className="relative">
                            <Image
                                src="/Purple and White Minimalist Your Business Needs a Website Instagram Post (8).webp"
                                alt={lang === 'EN' ? "Why choose a professional website creation agency in Morocco" : "Pourquoi choisir une agence de création site web au maroc professionnelle"}
                                width={1080}
                                height={1080}
                                className="w-full h-auto max-w-[400px] lg:max-w-full mx-auto"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="py-16 lg:py-24 bg-[#f8fafc]">
                <div className="container px-4 mx-auto max-w-7xl">
                    <header className="mb-20">
                        <h2 className="section-title-premium">
                            {lang === 'EN' ? (
                                <>Discover all our <br /> website creation services {displayCity}</>
                            ) : (
                                <>Découvrez l&apos;ensemble de nos <br /> services de création site web {displayCity}</>
                            )}
                        </h2>
                    </header>

                    <div className="services-grid-mobile-slider">
                        {[
                            {
                                title: lang === 'EN' ? 'Showcase Website' : 'Site Vitrine Pro',
                                desc: lang === 'EN' ? '100% optimized for SEO and new AI engines.' : '100 % optimisés pour le SEO et les nouveaux moteurs d\'IA.',
                                icon: <CheckCircle2 />
                            },
                            {
                                title: lang === 'EN' ? 'SEO E-commerce' : 'E-commerce SEO',
                                desc: lang === 'EN' ? 'E-commerce website creation with WordPress and WooCommerce.' : 'Création de site e-commerce avec WordPress et Woocommerce.',
                                icon: <TrendingUp />
                            },
                            {
                                title: lang === 'EN' ? 'Website Redesign' : 'Refonte de site',
                                desc: lang === 'EN' ? 'Design, technology, content and loading speed optimized.' : 'Design, technique, contenus et rapidité de chargement optimisés.',
                                icon: <Zap />
                            },
                            {
                                title: lang === 'EN' ? 'Maintenance' : 'Maintenance',
                                desc: lang === 'EN' ? 'Reinforced security and continuous performance monitoring.' : 'Sécurité renforcée et suivi continu de ses performances.',
                                icon: <Lock />,
                                link: '/maintenance-site-web-maroc/'
                            },
                        ].map((service, i) => (
                            <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:border-primary-500/30 hover:shadow-xl transition-all group relative overflow-hidden">
                                <div className="w-14 h-14 bg-gray-50 text-primary-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary-500 group-hover:text-white transition-all">
                                    {service.icon}
                                </div>
                                <h3 className="text-lg font-bold text-gray-900 mb-3">{service.title}</h3>
                                <p className="text-gray-500 text-sm mb-6 leading-relaxed">{service.desc}</p>
                                <Link href={service.link || "/contact/"} className="flex items-center gap-2 text-primary-600 font-bold text-sm hover:gap-3 transition-all underline underline-offset-4 decoration-primary-500/30">
                                    {lang === 'EN' ? (service.link ? 'Read more' : 'Learn more') : (service.link ? 'Lire la suite' : 'En savoir plus')} <ArrowRight className="w-4 h-4" />
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Success Section */}
            <section className="py-16 lg:py-24 bg-white">
                <div className="container px-4 mx-auto max-w-7xl text-center mb-16">
                    <h2 className="section-title-premium">{lang === 'EN' ? <>Sitepro.ma Expertise: <br /> Performance & Visibility</> : <>Expertise Sitepro.ma : <br /> Performance & Visibilité</>}</h2>
                    <p className="section-subtitle-premium mx-auto">
                        {lang === 'EN' ? (
                            <>We have helped dozens of companies {preposition} {displayCity} reach the first page of Google. <strong className="text-primary-600">Join our success stories</strong>.</>
                        ) : (
                            <>Nous avons aidé des dizaines d&apos;entreprises {preposition} {displayCity} à atteindre la première page de Google. <strong className="text-primary-600">Rejoignez nos success stories</strong>.</>
                        )}
                    </p>
                </div>
                <div className="container px-4 mx-auto max-w-7xl">
                    <div className="success-stories-grid">
                        {successStories.map((site, i) => (
                            <div key={i} className="card-hover">
                                <div className="card-header-border">
                                    <div className="flex items-center gap-2 text-[#022545] font-semibold text-[15px]">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary-500">
                                            <circle cx="12" cy="12" r="10" />
                                            <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                                        </svg>
                                        <span className="font-poppins">{site.url}</span>
                                    </div>
                                    <div className="country-badge">
                                        <svg viewBox="0 0 24 24" width="20" height="20" fill="none">
                                            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                                            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                                            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                                            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                                        </svg>
                                        <span className="font-poppins">{displayCity}</span>
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    {site.kw.map((k, j) => (
                                        <div key={j} className="keyword-item">
                                            <span className="text-[16px] text-[#202124] font-poppins">{k}</span>
                                            <span className="position-badge">1</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* GDPR Section */}
            <section className="py-16 lg:py-24 bg-white">
                <div className="container px-4 mx-auto max-w-7xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-6">
                            <h2 className="section-title-premium lg:text-left">
                                {lang === 'EN' ? 'CNDP compliant websites in Morocco and GDPR in Europe' : 'Sites web conformes CNDP au Maroc et au RGPD en Europe'}
                            </h2>
                            <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
                                {lang === 'EN' ? (
                                    <>
                                        <p>Our agency is committed to ensuring your site&apos;s compliance, both with <strong>GDPR in Europe</strong> and the Moroccan legal framework (<strong>CNDP</strong>).</p>
                                        <p>These standards are not to be taken lightly. In the European Union, failure to comply with GDPR can result in <strong>fines</strong> ranging from several thousand euros.</p>
                                    </>
                                ) : (
                                    <>
                                        <p>Notre agence s&apos;engage à garantir la conformité de votre site, tant avec le <strong>RGPD en Europe</strong> qu&apos;avec le cadre juridique marocain (<strong>CNDP</strong>).</p>
                                        <p>Ces normes ne sont pas à prendre à la légère. Dans l&apos;Union européenne, le non-respect du RGPD peut entraîner <strong>des amendes</strong> allant de plusieurs milliers d&apos;euros.</p>
                                    </>
                                )}
                            </div>
                            <div className="pt-6">
                                <Link href="/contact/" className="inline-flex items-center gap-3 px-8 py-4 border-2 border-[#022545] text-[#022545] rounded-xl font-bold hover:bg-[#022545] hover:text-white transition-all text-balance">
                                    {lang === 'EN' ? 'Check my compliance' : 'Vérifier ma conformité'}
                                    <ShieldCheck className="w-5 h-5" />
                                </Link>
                            </div>
                        </div>
                        <div>
                            <Image
                                src="/images/creation-site-web-gdpr.png"
                                alt={lang === 'EN' ? "CNDP and GDPR Compliance" : "Conformité CNDP et RGPD"}
                                width={665}
                                height={557}
                                className="rounded-3xl shadow-xl w-full h-auto"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Lead Gen Table */}
            <section className="py-16 lg:py-24 bg-white lead-gen-comparison">
                <div className="container">
                    <h2 className="section-title-premium text-center mb-12">
                        {lang === 'EN' ? (
                            <>Website {displayCity} oriented <span className="text-primary-600">lead generation</span></>
                        ) : (
                            <>Site web {displayCity} orienté <span className="text-primary-600">génération de leads</span></>
                        )}
                    </h2>
                    <div className="overflow-x-auto">
                        <table className="w-full border-collapse">
                            <thead className="border border-[#f8f8f8]">
                                <tr className="bg-[#f8f8f8] text-title">
                                    <th className=" px-6 py-4 text-left poppins-semibold "> {lang === 'EN' ? 'Criteria' : 'Critères'} </th>
                                    <th className="  px-6 py-4 text-left poppins-semibold "> {lang === 'EN' ? 'Lead generating website' : 'Site web qui génère des leads'} </th>
                                    <th className="  px-6 py-4 text-left poppins-semibold "> {lang === 'EN' ? 'Low-cost website' : 'Site web low-cost'} </th>
                                </tr>
                            </thead>
                            <tbody className="border border-[#f8f8f8]">
                                {[
                                    {
                                        criterion: lang === 'EN' ? 'Main Objective' : 'Objectif principal',
                                        good: lang === 'EN' ? 'Attract qualified prospects and convert into customers' : 'Attirer des prospects qualifiés et convertir en clients',
                                        bad: lang === 'EN' ? 'Basic presence without real strategy' : 'Présence basique sans réelle stratégie'
                                    },
                                    {
                                        criterion: 'SEO',
                                        good: lang === 'EN' ? 'Technical optimization and original content' : 'Optimisation technique et contenu original',
                                        bad: lang === 'EN' ? 'Little or no optimization, generic content' : 'Peu ou pas optimisé, contenu générique'
                                    },
                                    {
                                        criterion: lang === 'EN' ? 'Design & UX' : 'Design & UX',
                                        good: lang === 'EN' ? 'Smooth experience, strategic CTAs' : 'Expérience fluide, CTA stratégiques',
                                        bad: lang === 'EN' ? 'Basic design, low impact' : 'Design basique, faible impact'
                                    },
                                    {
                                        criterion: lang === 'EN' ? 'Speed' : 'Vitesse',
                                        good: lang === 'EN' ? 'Fast loading compliant with PageSpeed' : 'Chargement rapide conforme PageSpeed',
                                        bad: lang === 'EN' ? 'Slow, penalized by Google' : 'Lent, pénalisé par Google'
                                    },
                                    {
                                        criterion: lang === 'EN' ? 'Security' : 'Sécurité',
                                        good: lang === 'EN' ? 'SSL, advanced protection, Anti DDOS, Zero Trust' : 'SSL, protection avancée, Anti DDOS, Zero Trust',
                                        bad: lang === 'EN' ? 'Minimal security' : 'Sécurité minimale'
                                    },
                                    {
                                        criterion: 'ROI',
                                        good: lang === 'EN' ? 'Profitable long-term investment' : 'Investissement rentable à long terme',
                                        bad: lang === 'EN' ? 'Low return on investment' : 'Faible retour sur investissement'
                                    }
                                ].map((row, idx) => (
                                    <tr key={idx} className={idx % 2 === 0 ? "bg-white text-title" : "text-title bg-[#f8f8f8]"}>
                                        <td className=" px-6 border border-[#f8f8f8] py-4 font-medium" data-label={lang === 'EN' ? 'Criterion' : 'Critère'}> {row.criterion} </td>
                                        <td className=" px-6 border border-[#f8f8f8] py-4" data-label={lang === 'EN' ? 'Lead generating website' : 'Site web qui génère des leads'}> {row.good} </td>
                                        <td className=" px-6 border border-[#f8f8f8] py-4 " data-label={lang === 'EN' ? 'Low-cost website' : 'Site web low-cost'}> {row.bad} </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* Cities Section */}
            <section className="py-16 lg:py-24 bg-white relative overflow-hidden">
                <div className="container px-4 mx-auto max-w-7xl relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="section-title-premium">
                            {lang === 'EN' ? `Website creation ${displayCity}: Local and national visibility` : `Création site web ${displayCity} : Une visibilité locale et nationale`}
                        </h2>
                        <p className="section-subtitle-premium mx-auto">
                            {lang === 'EN' ? 'We create your website anywhere in Morocco with local support in major economic hubs.' : 'Nous créons votre site web partout au Maroc avec un accompagnement de proximité dans les pôles économiques majeurs.'}
                        </p>
                    </div>
                    <div className="flex flex-col lg:flex-row gap-16 items-start">
                        <div className="flex-1 space-y-6">
                            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-2 gap-4">
                                {cities.map((cityItem) => (
                                    <Link key={cityItem} href={`/creation-site-web-${cityItem.toLowerCase()}/`} className="text-gray-500 hover:text-primary-600 hover:translate-x-1 transition-all flex items-center gap-2">
                                        <MapPin size={14} className="text-primary-500 shrink-0" />
                                        {lang === 'EN' ? `Website creation ${cityItem}` : `Création site web ${cityItem}`}
                                    </Link>
                                ))}
                            </div>
                        </div>
                        <div className="flex-1 w-full h-[500px] bg-gray-100 rounded-[3rem] overflow-hidden shadow-inner relative group">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3441728.5579234385!2d-9.998168768750002!3d31.791702!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd0b265f3c7b1ab5%3A0x99f83ab3e9b22e25!2sMorocco!5e0!3m2!1sen!2sma!4v1234567890123!5m2!1sen!2sma"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen={true}
                                loading="lazy"
                                title="Map Maroc"
                                className="grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="bg-gray-50 py-24">
                <div className="container px-4 mx-auto max-w-4xl">
                    <h2 className="section-title-premium">
                        {lang === 'EN' ? `FAQ - Website creation ${displayCity}` : `FAQ - Création site web ${displayCity}`}
                    </h2>
                    <FAQSection lang={lang} />
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-24 bg-[#022545] relative overflow-hidden">
                <div className="container px-4 mx-auto text-center relative z-10">
                    <h2 className="section-title-premium text-white mb-8">
                        {lang === 'EN' ? `Ready to dominate digital ${preposition} ${displayCity}?` : `Prêt à dominer le digital ${preposition} ${displayCity} ?`}
                    </h2>
                    <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto">
                        {lang === 'EN' ? 'Give your business the website it deserves. Performance, SEO, and conversion guaranteed.' : 'Donnez à votre entreprise le site web qu\'elle mérite. Performance, SEO et conversion garantis.'}
                    </p>
                    <Link href="/contact/" className="inline-flex items-center gap-3 px-10 py-5 bg-primary-500 text-white rounded-2xl font-black text-lg hover:bg-primary-600 transition-all shadow-2xl shadow-primary-500/20 group">
                        {lang === 'EN' ? 'Launch my project now' : 'Lancer mon projet maintenant'}
                        <Rocket className="w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </Link>
                </div>
            </section>
        </div>
    )
}
