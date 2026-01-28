import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import ClientMotionWrapper from '@/components/ClientMotionWrapper'
import { CheckCircle2, XCircle, Zap, Globe, ShieldCheck, ArrowRight, Bot, Clock, Lock, TrendingUp, MapPin } from 'lucide-react'
import FAQSection from '@/components/FAQSection'
import ContactForm from '@/components/ContactForm'
import './NewGenSection.css'
import './LeadGenTable.css'

export const metadata: Metadata = {
    title: 'Création site web Maroc | Sitepro.ma – Sites ultra-performants & SEO',
    description: 'Sitepro.ma crée votre site web 100 % optimisé SEO & IA pour booster votre visibilité au Maroc. Design moderne, rapidité extrême et résultats garantis. ☎️ 06 63 71 11 64',
    alternates: { canonical: 'https://www.sitepro.ma/creation-site-web-maroc/' },
    openGraph: {
        title: 'Création site web Maroc | Sitepro.ma – Sites ultra-performants & SEO',
        description: 'Sitepro.ma crée votre site web 100 % optimisé SEO & IA pour booster votre visibilité au Maroc. Design moderne, rapidité extrême et résultats garantis. ☎️ 06 63 71 11 64',
        url: 'https://www.sitepro.ma/creation-site-web-maroc/',
        siteName: 'Sitepro.ma',
        images: [{
            url: 'https://www.sitepro.ma/og-image.jpg',
            width: 1200,
            height: 630,
            alt: 'Création site web Maroc - Sitepro.ma',
        }],
        locale: 'fr_MA',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Création site web Maroc | Sitepro.ma – Sites ultra-performants & SEO',
        description: 'Sitepro.ma crée votre site web 100 % optimisé SEO & IA pour booster votre visibilité au Maroc. Design moderne, rapidité extrême et résultats garantis. ☎️ 06 63 71 11 64',
        images: ['https://www.sitepro.ma/og-image.jpg'],
        creator: '@sitepro_ma',
    },
}

const phone = '212663711164'

export default function CreationSiteWebMarocPage() {
    const techStack = [
        { name: 'Astro', color: '#FF5D01' },
        { name: 'Next.js', color: '#000000' },
        { name: 'React', color: '#61DAFB' },
        { name: 'TypeScript', color: '#3178C6' },
        { name: 'Tailwind', color: '#06B6D4' },
    ]

    const features = [
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
            description: <>Balisage de données structurées et hiérarchie de contenu optimisée pour dominer les résultats de recherche au Maroc et à l&apos;international.</>,
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
    ]

    const cities = [
        'Tanger', 'Rabat', 'Kénitra', 'Tétouan', 'Larache', 'Asilah', 'Chefchaouen',
        'Al hoceima', 'Nador', 'Casablanca', 'Khouribga', 'Fes', 'Meknès', 'Ifrane',
        'Marrakech', 'Essaouira', 'Benguerir', 'Agadir', 'Laayoune', 'Dakhla'
    ]

    return (
        <div className="flex flex-col w-full font-sans snipcss-odHLl">
            {/* Hero Section */}
            <section className="bg-white border-b border-gray-100">
                <div className="container px-4 py-16 lg:py-24 mx-auto max-w-7xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <ClientMotionWrapper
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="space-y-8 text-center lg:text-left"
                        >
                            <div className="flex justify-center lg:justify-start">
                                <span className="badge-gradient">
                                    Création site web Maroc
                                </span>
                            </div>

                            <h1 className="hero-title-premium">
                                Création de site web au Maroc – <span className="text-primary-600">100 % optimisé</span> SEO et IA
                            </h1>

                            <p className="hero-subtitle-premium mx-auto lg:mx-0">
                                Notre <strong className="text-gray-900">agence de création de sites web</strong> au <strong className="text-gray-900">Maroc</strong> conçoit des solutions sur mesure, entièrement optimisées pour le <strong className="text-gray-900">SEO</strong> et les nouveaux <strong className="text-gray-900">moteurs d’IA</strong>.
                            </p>

                            <div className="flex flex-col sm:flex-row items-center gap-6 pt-4">
                                <div className="flex flex-col items-center lg:items-start group cursor-pointer">
                                    <span className="text-primary-600 text-xs font-bold tracking-[0.2em] mb-1 group-hover:text-primary-500 transition-colors">
                                        CONSULTATION GRATUITE ?
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
                                alt="Création site web Maroc"
                                width={1080}
                                height={1080}
                                className="w-full h-auto max-w-[620px] mx-auto relative z-10 transition-transform duration-700 rounded-xl"
                                priority
                            />
                            <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary-100 rounded-full blur-3xl opacity-60 z-0"></div>
                            <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-blue-50 rounded-full blur-3xl opacity-60 z-0"></div>
                        </ClientMotionWrapper>
                    </div>
                </div>
            </section>

            {/* Form CTA Section */}
            <section id="contact-form-section" className="bg-[#022545] py-20 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary-500 rounded-full blur-[120px] opacity-10"></div>
                <div className="container px-4 mx-auto max-w-5xl text-center relative z-10">
                    <ClientMotionWrapper
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <h2 className="section-title-premium text-white">
                            Création de site web : un conseiller <span className="text-primary-400 border-b-4 border-primary-500 pb-2">vous rappelle !</span>
                        </h2>
                    </ClientMotionWrapper>

                    <div className="mt-16 max-w-4xl mx-auto">
                        <ContactForm />
                    </div>
                </div>
            </section>

            {/* New Generation Section */}
            <section className="py-24 bg-white new-gen-section">
                <div className="new-gen-container">
                    <header className="section-header">
                        <h2 className="section-title-premium">
                            <span>Excellence en conception web</span> <br /> <span className="title-line-2"><span className="highlight">nouvelle génération</span> au Maroc</span>
                        </h2>
                        <p className="section-subtitle-premium mx-auto">Nous bâtissons des infrastructures digitales ultra-performantes, conçues pour <strong>convertir vos visiteurs</strong> et dominer les résultats de recherche.</p>
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
                            <ClientMotionWrapper
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className={`feature-card ${feature.highlighted ? 'feature-card--highlight' : ''}`}
                            >
                                <div className="feature-icon">
                                    {feature.icon}
                                </div>
                                <div className="feature-content">
                                    <h3 className="feature-title">{feature.title}</h3>
                                    <p className="feature-description">{feature.description}</p>
                                </div>
                            </ClientMotionWrapper>
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
                                    <p className="cta-headline">Besoin d&apos;un site web qui <strong>surpasse</strong> vos objectifs ?</p>
                                    <p className="cta-subtext">Audit technique offert • Devis express • Expertise marocaine</p>
                                </div>
                            </div>

                            <Link href="/contact/" className="btn-launch group">
                                <div className="btn-launch-content">
                                    Lancer mon projet
                                    <svg width="24" className="w-5 h-5" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <div className="btn-launch-content absolute">
                                    Lancer mon projet
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
            <section className="py-24 bg-white relative overflow-hidden">
                <div className="container px-4 mx-auto max-w-7xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-8">
                            <h2 className="section-title-premium lg:text-left">
                                Prenez l&apos;avantage : des technologies web qui <span className="text-primary-600">surpassent vos concurrents</span>
                            </h2>
                            <p className="section-subtitle-premium lg:text-left lg:mx-0">
                                Pendant que vos concurrents stagnent avec des sites dépassés <strong>invisibles sur Google</strong> et <strong>ignorés par les IA</strong> — votre site domine les résultats au Maroc et à l&apos;étranger.
                            </p>

                            <div className="grid grid-cols-3 gap-8 pt-4">
                                <div className="space-y-2">
                                    <div className="text-4xl font-black text-[#022545]">99<span className="text-lg text-gray-400">/100</span></div>
                                    <p className="text-xs font-bold text-gray-500 uppercase tracking-wider">PageSpeed Insights</p>
                                </div>
                                <div className="space-y-2">
                                    <div className="text-4xl font-black text-[#022545] inline-flex items-baseline">&lt;1<span className="text-lg text-gray-400 ml-1">s</span></div>
                                    <p className="text-xs font-bold text-gray-500 uppercase tracking-wider">Temps de chargement</p>
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
                                    <span className="font-bold text-red-600 text-sm md:text-base">SITES LOW-COST</span>
                                </div>
                                <div className="flex-1 p-6 bg-primary-500 flex items-center justify-center gap-2">
                                    <CheckCircle2 className="w-5 h-5 text-white" />
                                    <span className="font-bold text-white text-sm md:text-base">SITES NEW GEN</span>
                                </div>
                            </div>

                            <div className="p-8 space-y-6">
                                {[
                                    { label: 'PageSpeed Score', icons: <Zap className="w-5 h-5 text-green-500" />, bad: '35-50', good: '99-100' },
                                    { label: 'Visibilité Google', icons: <Globe className="w-5 h-5 text-green-500" />, bad: 'Inexistante', good: 'Optimisée' },
                                    { label: 'Référencement IA', icons: <Bot className="w-5 h-5 text-green-500" />, bad: 'Non compatible', good: '100% optimisé' },
                                    { label: 'Temps de chargement', icons: <Clock className="w-5 h-5 text-green-500" />, bad: '+5 secondes', good: '<1 seconde' },
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
                                    <h4 className="font-bold">Testez vous-même notre site</h4>
                                    <p className="text-white/60 text-xs">sitepro.ma — rapidité garantie</p>
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
            <section className="py-24 bg-white">
                <div className="container px-4 mx-auto max-w-7xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="order-2 lg:order-1">
                            <Image
                                src="/Purple and White Minimalist Your Business Needs a Website Instagram Post (7).webp"
                                alt="Agence de création de sites web optimisés SEO, IA et conversion"
                                width={1080}
                                height={1080}
                                className="w-full h-auto"
                            />
                        </div>
                        <div className="space-y-6 order-1 lg:order-2">
                            <h2 className="section-title-premium lg:text-left">
                                Agence de création de sites web optimisés SEO, IA et conversion
                            </h2>
                            <div className="space-y-4 text-gray-600 section-subtitle-premium lg:text-left lg:mx-0">
                                <p>Sitepro.ma est votre agence web de référence spécialisée dans la création de sites internet au Maroc. Basés à Marrakech, nous accompagnons les entrepreneurs et les PME dans leur réussite digitale.</p>
                                <p>Notre approche est humaine : chaque site est co-construit avec vous pour être <strong className="text-gray-900">100 % optimisé pour le SEO</strong>, assurant une visibilité immédiate sur les moteurs de recherche.</p>
                                <p>Nous mettons l&apos;accent sur la <strong>conversion</strong> et la <strong>sécurité</strong>, tout en garantissant des temps de chargement ultra-rapides pour ne perdre aucun client potentiel.</p>
                            </div>
                            <div className="pt-6">
                                <Link href="/contact/" className="inline-flex items-center gap-3 px-8 py-4 bg-[#022545] text-white rounded-xl font-bold hover:bg-gray-800 transition-all">
                                    Contactez-nous
                                    <ArrowRight className="w-5 h-5" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Error Section */}
            <section className="py-24 bg-white">
                <div className="container px-4 mx-auto max-w-7xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-6">
                            <h2 className="section-title-premium lg:text-left">
                                Création de site web : <span className="underline decoration-red-500">l&apos;erreur à ne pas commettre</span> ⚠️
                            </h2>
                            <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
                                <p>Aujourd&apos;hui, créer un site web est devenu extrêmement simple grâce aux <strong>plateformes no code</strong> et aux <strong>générateurs de sites IA</strong>, mais aussi aux agences web qui proposent des sites low-cost.</p>
                                <p className="bg-red-50 border-l-4 border-red-500 p-4">Bien que beaucoup de gens l&apos;ignorent au départ, ces sites n&apos;atteindront <strong>jamais un bon classement sur Google</strong>. Ils ne serviront au mieux que de simple vitrine à mentionner sur une carte de visite.</p>
                                <p>Chaque site que nous développons est conçu pour une <strong>visibilité maximale</strong>. Nous l&apos;optimisons méticuleusement pour le <Link href="/agence-seo-maroc/" className="text-primary-600 font-bold hover:underline">référencement naturel (SEO)</Link>, garantissant un excellent classement sur Google et les nouvelles plateformes d&apos;IA.</p>
                            </div>
                            <div className="pt-6">
                                <Link href="/formulaire-contact-site-web-maroc/" className="inline-flex items-center gap-3 px-8 py-4 bg-primary-500 text-white rounded-xl font-bold hover:bg-primary-600 transition-all shadow-lg shadow-primary-200">
                                    Demandez un audit gratuit
                                    <ArrowRight className="w-5 h-5" />
                                </Link>
                            </div>
                        </div>
                        <div className="relative">
                            <Image
                                src="/Purple and White Minimalist Your Business Needs a Website Instagram Post (8).webp"
                                alt="Pourquoi le site web low-cost est une erreur"
                                width={1080}
                                height={1080}
                                className="w-full h-auto"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="py-24 bg-[#f8fafc]">
                <div className="container px-4 mx-auto max-w-7xl">
                    <header className="mb-20">
                        <h2 className="section-title-premium">
                            Découvrez l&apos;ensemble de nos <br />
                            services de création site web Maroc
                        </h2>
                    </header>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { title: 'Site Vitrine Pro', desc: '100 % optimisés pour le SEO et les nouveaux moteurs d\'IA.', icon: <CheckCircle2 /> },
                            { title: 'E-commerce SEO', desc: 'Création de site e-commerce avec WordPress et Woocommerce.', icon: <TrendingUp /> },
                            { title: 'Refonte de site', desc: 'Design, technique, contenus et rapidité de chargement optimisés.', icon: <Zap /> },
                            { title: 'Maintenance', desc: 'Sécurité renforcée et suivi continu de ses performances.', icon: <Lock />, link: '/maintenance-site-web-maroc/' },
                        ].map((service, i) => (
                            <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:border-primary-500/30 hover:shadow-xl transition-all group relative overflow-hidden">
                                <div className="w-14 h-14 bg-gray-50 text-primary-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary-500 group-hover:text-white transition-all">
                                    {service.icon}
                                </div>
                                <h3 className="text-lg font-bold text-gray-900 mb-3">{service.title}</h3>
                                <p className="text-gray-500 text-sm mb-6 leading-relaxed">{service.desc}</p>
                                <Link href={service.link || "/contact/"} className="flex items-center gap-2 text-primary-600 font-bold text-sm hover:gap-3 transition-all underline underline-offset-4 decoration-primary-500/30">
                                    {service.link ? 'Lire la suite' : 'En savoir plus'} <ArrowRight className="w-4 h-4" />
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Success Section */}
            <section className="py-24 bg-white">
                <div className="container px-4 mx-auto max-w-7xl text-center mb-16">
                    <h2 className="section-title-premium">Expertise Sitepro.ma : <br /> Performance & Visibilité</h2>
                    <p className="section-subtitle-premium mx-auto">Nous avons aidé des dizaines d&apos;entreprises au Maroc à atteindre la première page de Google. <strong className="text-primary-600">Rejoignez nos success stories</strong>.</p>
                </div>
                <div className="container px-4 mx-auto max-w-7xl">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { url: 'certifyproinsights.ma', kw: ['ISO 9001 Maroc', 'ISO 9001 Tanger'] },
                            { url: 'sendatrack.ma', kw: ['GPS Tanger', 'Installation GPS Tanger'] },
                            { url: 'econer.ma', kw: ['Toner Tanger', 'Matériel info Tanger'] },
                        ].map((site, i) => (
                            <div key={i} className="p-8 rounded-3xl bg-gray-50 border border-gray-100 hover:bg-white hover:shadow-2xl transition-all group">
                                <div className="flex items-center justify-between mb-8 pb-4 border-b border-gray-200">
                                    <span className="font-bold text-gray-900">{site.url}</span>
                                    <span className="px-3 py-1 bg-white rounded-lg text-xs font-bold text-gray-400">MAROC</span>
                                </div>
                                <div className="space-y-4">
                                    {site.kw.map((k, j) => (
                                        <div key={j} className="flex items-center justify-between p-3 bg-white rounded-xl border border-gray-50 group-hover:border-primary-100 transition-all">
                                            <span className="text-sm text-gray-600">{k}</span>
                                            <span className="w-8 h-8 rounded-full bg-primary-500 text-white font-bold flex items-center justify-center text-xs">1</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* GDPR Section */}
            <section className="py-24 bg-white">
                <div className="container px-4 mx-auto max-w-7xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-6">
                            <h2 className="section-title-premium lg:text-left">
                                Sites web conformes CNDP au Maroc et au RGPD en Europe
                            </h2>
                            <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
                                <p>Notre agence s&apos;engage à garantir la conformité de votre site, tant avec le <strong>RGPD en Europe</strong> qu&apos;avec le cadre juridique marocain (<strong>CNDP</strong>).</p>
                                <p>Ces normes ne sont pas à prendre à la légère. Dans l&apos;Union européenne, le non-respect du RGPD peut entraîner <strong>des amendes</strong> allant de plusieurs milliers d&apos;euros.</p>
                            </div>
                            <div className="pt-6">
                                <Link href="/contact/" className="inline-flex items-center gap-3 px-8 py-4 border-2 border-[#022545] text-[#022545] rounded-xl font-bold hover:bg-[#022545] hover:text-white transition-all text-balance">
                                    Vérifier ma conformité
                                    <ShieldCheck className="w-5 h-5" />
                                </Link>
                            </div>
                        </div>
                        <div>
                            <Image
                                src="/images/creation-site-web-gdpr.png"
                                alt="Conformité CNDP et RGPD"
                                width={665}
                                height={557}
                                className="rounded-3xl shadow-xl w-full h-auto"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Lead Gen Table */}
            <section className="py-24 bg-white lead-gen-comparison">
                <div className="container">
                    <h2 className="section-title-premium text-center mb-12">Site web orienté <span className="text-primary-600">génération de leads</span></h2>
                    <div className="overflow-x-auto">
                        <table className="w-full border-collapse">
                            <thead className="border border-[#f8f8f8]">
                                <tr className="bg-[#f8f8f8] text-title">
                                    <th className=" px-6 py-4 text-left poppins-semibold "> Critères </th>
                                    <th className="  px-6 py-4 text-left poppins-semibold "> Site web qui génère des leads </th>
                                    <th className="  px-6 py-4 text-left poppins-semibold "> Site web low-cost </th>
                                </tr>
                            </thead>
                            <tbody className="border border-[#f8f8f8]">
                                <tr key="0" className="bg-white text-title ">
                                    <td className=" px-6 border border-[#f8f8f8] py-4 font-medium"> Objectif principal </td>
                                    <td className=" px-6 border border-[#f8f8f8] py-4"> Attirer des prospects qualifiés et convertir en clients </td>
                                    <td className=" px-6 border border-[#f8f8f8] py-4 "> Présence basique sans réelle stratégie </td>
                                </tr>
                                <tr key="1" className=" text-title bg-[#f8f8f8]">
                                    <td className=" px-6 border border-[#f8f8f8] py-4 font-medium"> SEO </td>
                                    <td className=" px-6 border border-[#f8f8f8] py-4"> Optimisation technique et contenu original </td>
                                    <td className=" px-6 border border-[#f8f8f8] py-4 "> Peu ou pas optimisé, contenu générique </td>
                                </tr>
                                <tr key="2" className="bg-white text-title ">
                                    <td className=" px-6 border border-[#f8f8f8] py-4 font-medium"> Design &amp; UX </td>
                                    <td className=" px-6 border border-[#f8f8f8] py-4"> Expérience fluide, CTA stratégiques </td>
                                    <td className=" px-6 border border-[#f8f8f8] py-4 "> Design basique, faible impact </td>
                                </tr>
                                <tr key="3" className=" text-title bg-[#f8f8f8]">
                                    <td className=" px-6 border border-[#f8f8f8] py-4 font-medium"> Vitesse </td>
                                    <td className=" px-6 border border-[#f8f8f8] py-4"> Chargement rapide conforme PageSpeed </td>
                                    <td className=" px-6 border border-[#f8f8f8] py-4 "> Lent, pénalisé par Google </td>
                                </tr>
                                <tr key="4" className="bg-white text-title ">
                                    <td className=" px-6 border border-[#f8f8f8] py-4 font-medium"> Sécurité </td>
                                    <td className=" px-6 border border-[#f8f8f8] py-4"> SSL, protection avancée, Anti DDOS, Zero Trust </td>
                                    <td className=" px-6 border border-[#f8f8f8] py-4 "> Sécurité minimale </td>
                                </tr>
                                <tr key="5" className=" text-title bg-[#f8f8f8]">
                                    <td className=" px-6 border border-[#f8f8f8] py-4 font-medium"> ROI </td>
                                    <td className=" px-6 border border-[#f8f8f8] py-4"> Investissement rentable à long terme </td>
                                    <td className=" px-6 border border-[#f8f8f8] py-4 "> Faible retour sur investissement </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* Cities Section */}
            <section className="py-24 bg-white">
                <div className="container px-4 mx-auto max-w-7xl">
                    <div className="flex flex-col lg:flex-row gap-16 items-start">
                        <div className="flex-1 space-y-6">
                            <h2 className="section-title-premium lg:text-left">Création site web partout au Maroc</h2>
                            <p className="section-subtitle-premium lg:text-left lg:mx-0">Nous accompagnons les entreprises dans toutes les régions du Royaume.</p>
                            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-2 gap-4">
                                {cities.map((city) => (
                                    <Link key={city} href={`/creation-site-web-${city.toLowerCase()}/`} className="text-gray-500 hover:text-primary-600 hover:translate-x-1 transition-all flex items-center gap-2">
                                        <MapPin size={14} className="text-primary-500 shrink-0" />
                                        Création site web {city}
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
                    <h2 className="section-title-premium">FAQ - Création site web Maroc</h2>
                    <FAQSection />
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-24 bg-primary-500 text-white">
                <div className="container px-4 mx-auto max-w-5xl text-center space-y-8">
                    <h2 className="hero-title-premium text-white">Besoin d&apos;un site web pro ?</h2>
                    <p className="text-2xl opacity-90">Appelez le <a href={`tel:+${phone}`} className="underline hover:no-underline font-black">{phone.replace(/(\d{4})(\d{2})(\d{2})(\d{2})/, '+$1 $2 $3 $4')}</a></p>
                    <div className="pt-8">
                        <Link href="#contact-form-section" className="bg-[#022545] text-white px-12 py-5 rounded-full font-bold text-xl hover:scale-105 transition-all inline-block shadow-2xl">
                            Démarrer mon projet maintenant
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}
