import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import ClientMotionWrapper from '@/components/ClientMotionWrapper'
import { CheckCircle2, Zap, Globe, Bot, Lock, TrendingUp, SmartphoneNfc, Cpu, Rocket, Shield, PenTool, MessageCircle } from 'lucide-react'
import FAQSection from '@/components/FAQSection'
import ContactForm from '@/components/ContactForm'
import CallbackForm from '@/components/CallbackForm'
import './MobileApp.css'

export const metadata: Metadata = {
    title: 'Développement Application Mobile Maroc | Agence Experte Sitepro',
    description: 'Expert en création d\'applications mobiles sur mesure au Maroc. Nous développons des solutions iOS & Android innovantes, performantes et sécurisées. ☎️ 0663 75 09 08',
    alternates: { canonical: 'https://www.sitepro.ma/application-mobile-maroc/' },
    openGraph: {
        title: 'Développement Application Mobile Maroc | Agence Experte Sitepro',
        description: 'Solutions mobiles innovantes au Maroc. Création d\'applis performantes et évolutives pour iOS et Android par Sitepro.',
        url: 'https://www.sitepro.ma/application-mobile-maroc/',
        siteName: 'Sitepro.ma',
        images: [{
            url: 'https://www.sitepro.ma/og-application-mobile.jpg',
            width: 1200,
            height: 630,
            alt: 'Développement Application Mobile Maroc',
        }],
        locale: 'fr_MA',
        type: 'website',
    },
}

export default function ApplicationMobileMarocPage() {
    const features = [
        {
            title: 'Lancement Accéléré',
            desc: 'Déploiement de votre application sur iOS et Android en un temps record grâce à notre méthodologie agile.',
            icon: <Rocket className="w-6 h-6" />
        },
        {
            title: 'Sécurité de Pointe',
            desc: 'Protection rigoureuse de vos données avec des systèmes de cryptage avancés conformes aux standards internationaux.',
            icon: <Shield className="w-6 h-6" />
        },
        {
            title: 'Expérience Utilisateur (UX)',
            desc: 'Interfaces fluides et ergonomiques conçues pour maximiser l\'engagement et la satisfaction de vos utilisateurs.',
            icon: <PenTool className="w-6 h-6" />
        },
        {
            title: 'Haute Performance',
            desc: 'Développement optimisé garantissant une rapidité d\'exécution sans faille sur tous les types de terminaux mobiles.',
            icon: <Zap className="w-6 h-6" />
        },
        {
            title: 'Solutions IA Intégrées',
            desc: 'Exploitez la puissance de l\'intelligence artificielle pour offrir des fonctionnalités prédictives et personnalisées.',
            icon: <Cpu className="w-6 h-6" />
        },
        {
            title: 'Évolutivité Garantie',
            desc: 'Une architecture technique robuste pensée pour accompagner la croissance de votre entreprise sans limites.',
            icon: <TrendingUp className="w-6 h-6" />
        }
    ]



    return (
        <div className="flex flex-col w-full font-sans">
            {/* Hero Section */}
            <section className="bg-white border-b border-gray-100 overflow-hidden">
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
                                    Application Mobile Maroc
                                </span>
                            </div>

                            <h1 className="hero-title-premium">
                                Création d’applications <span className="text-primary-600">mobiles sur mesure au Maroc</span>
                            </h1>

                            <p className="hero-subtitle-premium mx-auto lg:mx-0">
                                Sitepro est votre agence partenaire de référence pour le <strong className="text-gray-900">développement mobile haute performance</strong>. Nous transformons vos idées en solutions digitales innovantes pour le marché <strong className="text-gray-900">marocain et international</strong>.
                            </p>

                            <div className="flex flex-col sm:flex-row items-center gap-6 pt-4">
                                <div className="flex flex-col items-center lg:items-start group cursor-pointer">
                                    <span className="text-primary-600 text-xs font-bold tracking-[0.2em] mb-1 group-hover:text-primary-500 transition-colors uppercase">
                                        CONSULTATION PAR EMAIL ?
                                    </span>
                                    <a href="mailto:contact@sitepro.ma" className="text-2xl md:text-3xl font-bold text-[#022545] hover:text-primary-600 transition-colors border-b-2 border-primary-500 pb-1">
                                        contact@sitepro.ma
                                    </a>
                                </div>
                            </div>
                        </ClientMotionWrapper>

                        <ClientMotionWrapper
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.7, delay: 0.2 }}
                            className="relative"
                        >
                            <Image
                                src="/Purple And White Modern Mobile App Promotion Instagram Post.webp"
                                alt="Développement application mobile Maroc"
                                width={1080}
                                height={1080}
                                className="w-full h-auto rounded-[2.5rem] relative z-10"
                                priority
                            />
                            <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary-100 rounded-full blur-3xl opacity-60 z-0 animate-pulse"></div>
                            <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-blue-50 rounded-full blur-3xl opacity-60 z-0"></div>
                        </ClientMotionWrapper>
                    </div>
                </div>
            </section>

            {/* Callback Lead Form Section */}
            <section className="callback-lead-section bg-[#022545] py-20 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary-500 rounded-full blur-[120px] opacity-10"></div>
                <div className="container px-4 mx-auto max-w-7xl relative z-10 text-center">
                    <ClientMotionWrapper
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="space-y-12"
                    >
                        <h2 className="section-title-premium text-white">
                            Création d'application mobile : un conseiller <span className="text-primary-400 border-b-4 border-primary-500 pb-2">vous rappelle !</span>
                        </h2>

                        <CallbackForm />
                    </ClientMotionWrapper>
                </div>
            </section>

            {/* Custom Sur-Mesure Section */}
            <section className="py-20 bg-white">
                <div className="container px-4 mx-auto max-w-7xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <ClientMotionWrapper
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="flex justify-center"
                        >
                            <Image
                                src="/Purple and White Minimalist Your Business Needs a Website Instagram Post (9).webp"
                                alt="Solutions mobiles sur mesure"
                                width={600}
                                height={600}
                                className="w-full h-auto rounded-[2rem] object-cover"
                            />
                        </ClientMotionWrapper>

                        <ClientMotionWrapper
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="space-y-8"
                        >
                            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                                Au-delà du code : une application unique qui porte votre vision
                            </h2>

                            <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
                                <p>
                                    Le développement sur-mesure ne se limite pas à la programmation. Chez Sitepro, nous explorons vos défis métier pour concevoir une architecture mobile qui répond précisément à vos besoins stratégiques. Que ce soit pour optimiser vos processus internes ou lancer un service disruptif, nous bâtissons l’outil qui vous propulse.
                                </p>
                                <p>
                                    En privilégiant une collaboration étroite, nous créons un produit final dont chaque pixel et chaque fonctionnalité ont un but précis. Votre application devient ainsi un actif technologique puissant, parfaitement aligné avec votre identité et vos objectifs de croissance.
                                </p>
                            </div>

                            <div className="bg-[#022545] p-8 lg:p-10 rounded-[2rem] text-white space-y-6">
                                <h3 className="text-2xl font-bold leading-tight">
                                    Vous avez un projet de création d’application web sur-mesure ?
                                </h3>
                                <p className="opacity-90">
                                    Contactez l’équipe Sitepro pour un premier échange autour de votre idée. Nous prenons le temps de comprendre votre besoin, de confronter les points de vue et de poser ensemble les bases d’une application qui répondra vraiment à votre problématique initiale.
                                </p>
                                <Link
                                    href="#contact-form-section"
                                    className="inline-block bg-white text-[#022545] px-8 py-4 rounded-full font-bold hover:bg-opacity-90 transition-all text-center"
                                >
                                    Je contacte l'équipe Sitepro
                                </Link>
                            </div>
                        </ClientMotionWrapper>
                    </div>
                </div>
            </section >

            {/* Brand Animation Section */}
            <section className="section-anim-brand">
                <div className="track-container">
                    {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="items-text">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="21" viewBox="0 0 16 21" fill="none">
                                <path d="M11.107 0.974478L0 16.9385L4.7403 20.2788L15.8473 4.3148L11.107 0.974478Z" fill="#2A4AFB" />
                            </svg>
                            <div className="brand-text">Stratégie</div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="21" viewBox="0 0 16 21" fill="none">
                                <path d="M11.107 0.974478L0 16.9385L4.7403 20.2788L15.8473 4.3148L11.107 0.974478Z" fill="#2A4AFB" />
                            </svg>
                            <div className="brand-text">Brand</div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="21" viewBox="0 0 16 21" fill="none">
                                <path d="M11.107 0.974478L0 16.9385L4.7403 20.2788L15.8473 4.3148L11.107 0.974478Z" fill="#2A4AFB" />
                            </svg>
                            <div className="brand-text">Design</div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="21" viewBox="0 0 16 21" fill="none">
                                <path d="M11.107 0.974478L0 16.9385L4.7403 20.2788L15.8473 4.3148L11.107 0.974478Z" fill="#2A4AFB" />
                            </svg>
                            <div className="brand-text">Tech</div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Features Section */}
            < section className="py-24 bg-white relative overflow-hidden" >
                <div className="container px-4 mx-auto max-w-7xl">
                    <header className="section-header-centered mb-20">
                        <h2 className="hero-title-premium text-center mb-6">
                            Expertise en développement <br className="hidden md:block" />
                            mobile <span className="text-[#2563eb]">au Maroc</span>
                        </h2>
                        <p className="section-subtitle-premium max-w-2xl mx-auto opacity-70">
                            Notre agence déploie une expertise technique avancée pour concevoir des <strong>applications mobiles natives et hybrides</strong> de classe mondiale, alliant sécurité impénétrable et design d&apos;exception.
                        </p>
                    </header>

                    <div className="content-grid-mobile">
                        {/* Features Column */}
                        <div className="features-column-mobile">
                            <div className="features-grid-mobile">
                                {features.map((f, i) => (
                                    <ClientMotionWrapper
                                        key={i}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.1 }}
                                        className="feature-card-mobile"
                                    >
                                        <div className="feature-icon-mobile">
                                            {f.icon}
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="feature-title-mobile">{f.title}</h3>
                                            <p className="feature-desc-mobile">{f.desc}</p>
                                        </div>
                                    </ClientMotionWrapper>
                                ))}
                            </div>

                            {/* Stats & Certifications Box */}
                            <div className="stats-cta-box">
                                <div className="stats-grid-mobile">
                                    {[
                                        { val: '+100', label: 'Applications créées', icon: <SmartphoneNfc className="w-5 h-5" /> },
                                        { val: '+30', label: 'Sous maintenance', icon: <Shield className="w-5 h-5" /> },
                                        { val: '+10', label: 'Développeurs seniors', icon: <Bot className="w-5 h-5" /> },
                                        { val: '+3', label: 'UI Designers', icon: <PenTool className="w-5 h-5" /> },
                                    ].map((s, i) => (
                                        <div key={i} className="stat-item-mobile">
                                            <div className="stat-icon-mobile">
                                                {s.icon}
                                            </div>
                                            <div>
                                                <div className="stat-value-mobile">{s.val}</div>
                                                <div className="stat-label-mobile">{s.label}</div>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className="cert-badges-mobile">
                                    <div className="cert-badge-mobile">
                                        <SmartphoneNfc className="w-5 h-5 text-black" />
                                        <span>Google Developer</span>
                                        <CheckCircle2 className="cert-check-mobile" />
                                    </div>
                                    <div className="cert-badge-mobile">
                                        <SmartphoneNfc className="w-5 h-5 text-black" />
                                        <span>Apple Developer</span>
                                        <CheckCircle2 className="cert-check-mobile" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Phone Column */}
                        <div className="phone-column-mobile">
                            <div className="phone-container-mobile">
                                <div className="phone-frame-mobile">
                                    <div className="phone-screen-mobile">
                                        {/* Status Bar */}
                                        <div className="phone-status-bar">
                                            <span>14:32</span>
                                            <div className="flex items-center gap-2">
                                                <div className="w-4 h-4 bg-black/5 rounded-full flex items-center justify-center">
                                                    <div className="w-2 h-2 bg-black rounded-full"></div>
                                                </div>
                                                <div className="w-6 h-3 border border-black/20 rounded-sm relative">
                                                    <div className="absolute inset-[1px] bg-[#2563eb] rounded-sm"></div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* App Content */}
                                        <div className="phone-content">
                                            <div className="phone-user-header">
                                                <div className="phone-user-info">
                                                    <span className="phone-greeting">Bonjour, Karim</span>
                                                    <span className="phone-sub-greeting">Bienvenue sur votre espace</span>
                                                </div>
                                                <div className="phone-avatar text-sm">K</div>
                                            </div>

                                            <div className="phone-stats-row">
                                                <div className="phone-stat-card">
                                                    <div className="phone-stat-icon-box blue">
                                                        <SmartphoneNfc className="w-4 h-4" />
                                                    </div>
                                                    <div>
                                                        <span className="phone-stat-v">2,847</span>
                                                        <span className="phone-stat-l">Utilisateurs</span>
                                                    </div>
                                                </div>
                                                <div className="phone-stat-card">
                                                    <div className="phone-stat-icon-box green">
                                                        <TrendingUp className="w-4 h-4" />
                                                    </div>
                                                    <div>
                                                        <span className="phone-stat-v">94%</span>
                                                        <span className="phone-stat-l">Croissance</span>
                                                    </div>
                                                </div>
                                            </div>

                                            <div>
                                                <span className="phone-section-label">Actions rapides</span>
                                                <div className="phone-quick-grid">
                                                    {[
                                                        { icon: <MessageCircle className="w-5 h-5" />, color: 'purple', label: 'Messages' },
                                                        { icon: <TrendingUp className="w-5 h-5" />, color: 'orange', label: 'Stats' },
                                                        { icon: <Cpu className="w-5 h-5" />, color: 'teal', label: 'Réglages' },
                                                        { icon: <Shield className="w-5 h-5" />, color: 'pink', label: 'Favoris' },
                                                    ].map((q, i) => (
                                                        <div key={i} className="phone-quick-item">
                                                            <div className={`phone-quick-icon ${q.color}`}>
                                                                {q.icon}
                                                            </div>
                                                            <span className="phone-quick-label">{q.label}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>

                                            <div>
                                                <span className="phone-section-label">Activité récente</span>
                                                <div className="activity-list-phone">
                                                    <div className="activity-row-phone">
                                                        <div className="activity-dot-phone green"></div>
                                                        <span className="activity-text-phone">Nouvelle commande reçue</span>
                                                        <span className="activity-time-phone">2m</span>
                                                    </div>
                                                    <div className="activity-row-phone">
                                                        <div className="activity-dot-phone blue"></div>
                                                        <span className="activity-text-phone">Mise à jour système</span>
                                                        <span className="activity-time-phone">1h</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Bottom Nav */}
                                        <div className="phone-bottom-nav">
                                            <div className="nav-item-phone active">
                                                <SmartphoneNfc className="w-6 h-6" />
                                            </div>
                                            <div className="nav-item-phone">
                                                <Globe className="w-6 h-6" />
                                            </div>
                                            <div className="nav-item-phone fab">
                                                <Rocket className="w-6 h-6" />
                                            </div>
                                            <div className="nav-item-phone">
                                                <Bot className="w-6 h-6" />
                                            </div>
                                            <div className="nav-item-phone">
                                                <Lock className="w-6 h-6" />
                                            </div>
                                        </div>
                                        <div className="phone-home-line"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section >

            {/* Process Section */}
            <section className="py-24 bg-white">
                <div className="methodology-container">
                    <div className="methodology-grid">
                        <div className="features-column">
                            <div className="features-header">
                                <h3 className="features-title">Notre processus de développement mobile, de l'idée au succès</h3>
                                <p className="features-subtitle">
                                    De la phase de réflexion stratégique au support après lancement, nous déployons une méthodologie rigoureuse pour garantir la performance de votre application.
                                </p>
                            </div>
                            <div className="features-grid">
                                <article className="feature-card">
                                    <div className="feature-icon">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                                            <polyline points="14 2 14 8 20 8" />
                                            <line x1="16" y1="13" x2="8" y2="13" />
                                            <line x1="16" y1="17" x2="8" y2="17" />
                                        </svg>
                                    </div>
                                    <div className="feature-content">
                                        <h3 className="feature-title">Analyse & Stratégie</h3>
                                        <p className="feature-description">Nous débutons par une étude approfondie de vos objectifs pour élaborer un cahier des charges technique et fonctionnel précis.</p>
                                        <a href="https://www.hostino.ma/documents/cahier-des-charges-application-mobile.docx" className="feature-cta">
                                            <span>Modèle gratuit</span>
                                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <path d="M5 12h14M12 5l7 7-7 7" />
                                            </svg>
                                        </a>
                                    </div>
                                </article>

                                <article className="feature-card">
                                    <div className="feature-icon">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                            <rect x="3" y="4" width="18" height="18" rx="2" />
                                            <line x1="16" y1="2" x2="16" y2="6" />
                                            <line x1="8" y1="2" x2="8" y2="6" />
                                            <line x1="3" y1="10" x2="21" y2="10" />
                                        </svg>
                                    </div>
                                    <div className="feature-content">
                                        <h3 className="feature-title">Planification & Chiffrage</h3>
                                        <p className="feature-description">Estimation rigoureuse des ressources et établissement d'un rétroplanning détaillé pour respecter vos délais.</p>
                                    </div>
                                </article>

                                <article className="feature-card">
                                    <div className="feature-icon">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                            <path d="M12 19l7-7 3 3-7 7-3-3z" />
                                            <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
                                            <circle cx="11" cy="11" r="2" />
                                        </svg>
                                    </div>
                                    <div className="feature-content">
                                        <h3 className="feature-title">Conception UI/UX</h3>
                                        <p className="feature-description">Nos designers imaginent une expérience utilisateur fluide et des interfaces haut de gamme pour votre application.</p>
                                    </div>
                                </article>

                                <article className="feature-card">
                                    <div className="feature-icon">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                            <polyline points="16 18 22 12 16 6" />
                                            <polyline points="8 6 2 12 8 18" />
                                            <line x1="14" y1="4" x2="10" y2="20" />
                                        </svg>
                                    </div>
                                    <div className="feature-content">
                                        <h3 className="feature-title">Développement Agile</h3>
                                        <p className="feature-description">Codage métier et intégration des fonctionnalités phares par nos experts en technologies mobiles (React Native, Flutter, Natif).</p>
                                    </div>
                                </article>

                                <article className="feature-card">
                                    <div className="feature-icon">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                                            <polyline points="22 4 12 14.01 9 11.01" />
                                        </svg>
                                    </div>
                                    <div className="feature-content">
                                        <h3 className="feature-title">Contrôle Qualité & Déploiement</h3>
                                        <p className="feature-description">Phase de QA intensive suivie d'une publication optimisée sur l'App Store et Google Play.</p>
                                    </div>
                                </article>

                                <article className="feature-card">
                                    <div className="feature-icon">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                            <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                                        </svg>
                                    </div>
                                    <div className="feature-content">
                                        <h3 className="feature-title">Optimisation & Maintenance</h3>
                                        <p className="feature-description">Suivi technique permanent pour assurer la stabilité, la sécurité et l'évolution de votre produit digital.</p>
                                        <Link href="/maintenance-site-web-maroc/" className="feature-cta">
                                            <span>Nos forfaits support</span>
                                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <path d="M5 12h14M12 5l7 7-7 7" />
                                            </svg>
                                        </Link>
                                    </div>
                                </article>
                            </div>
                        </div>

                        <aside className="methodology-timeline-column">
                            <div className="methodology-card">
                                <div className="timeline-header">
                                    <div className="timeline-header-content">
                                        <span className="timeline-label">Durée estimée</span>
                                        <h3 className="timeline-title">Timeline projet</h3>
                                    </div>
                                    <div className="timeline-badge">
                                        <span className="badge-value">2-3</span>
                                        <span className="badge-unit">mois</span>
                                    </div>
                                </div>

                                <div className="methodology-list">
                                    <div className="methodology-item first">
                                        <div className="timeline-left">
                                            <div className="timeline-icon">
                                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                                                    <polyline points="22 4 12 14.01 9 11.01" />
                                                </svg>
                                            </div>
                                            <div className="timeline-line"></div>
                                        </div>
                                        <div className="timeline-content">
                                            <span className="timeline-item-title">Validation du projet</span>
                                            <span className="timeline-item-duration">1 semaine</span>
                                        </div>
                                        <div className="timeline-check">
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                                <path d="M20 6L9 17l-5-5" />
                                            </svg>
                                        </div>
                                    </div>

                                    <div className="methodology-item">
                                        <div className="timeline-left">
                                            <div className="timeline-icon">
                                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                    <path d="M12 19l7-7 3 3-7 7-3-3z" />
                                                    <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
                                                </svg>
                                            </div>
                                            <div className="timeline-line"></div>
                                        </div>
                                        <div className="timeline-content">
                                            <span className="timeline-item-title">UI/UX Design</span>
                                            <span className="timeline-item-duration">2-3 semaines</span>
                                        </div>
                                    </div>

                                    <div className="methodology-item">
                                        <div className="timeline-left">
                                            <div className="timeline-icon">
                                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                    <polyline points="16 18 22 12 16 6" />
                                                    <polyline points="8 6 2 12 8 18" />
                                                </svg>
                                            </div>
                                            <div className="timeline-line"></div>
                                        </div>
                                        <div className="timeline-content">
                                            <span className="timeline-item-title">Développement</span>
                                            <span className="timeline-item-duration">1-2 mois</span>
                                        </div>
                                    </div>

                                    <div className="methodology-item">
                                        <div className="timeline-left">
                                            <div className="timeline-icon">
                                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                                                </svg>
                                            </div>
                                            <div className="timeline-line"></div>
                                        </div>
                                        <div className="timeline-content">
                                            <span className="timeline-item-title">Test & Publication</span>
                                            <span className="timeline-item-duration">2 semaines</span>
                                        </div>
                                    </div>

                                    <div className="methodology-item last">
                                        <div className="timeline-left">
                                            <div className="timeline-icon">
                                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                    <path d="M22 2L11 13" />
                                                    <path d="M22 2l-7 20-4-9-9-4 20-7z" />
                                                </svg>
                                            </div>
                                        </div>
                                        <div className="timeline-content">
                                            <span className="timeline-item-title">Lancement officiel</span>
                                            <span className="timeline-item-duration">Go Live 🚀</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="methodology-progress">
                                    <div className="progress-info">
                                        <span>Progression</span>
                                        <span className="progress-value">Prêt à démarrer</span>
                                    </div>
                                    <div className="progress-bar">
                                        <div className="progress-track">
                                            <div className="progress-fill"></div>
                                        </div>
                                        <div className="progress-dots">
                                            <div className="progress-dot active"></div>
                                            <div className="progress-dot"></div>
                                            <div className="progress-dot"></div>
                                            <div className="progress-dot"></div>
                                            <div className="progress-dot"></div>
                                        </div>
                                    </div>
                                </div>

                                <Link href="/contact/" className="methodology-cta">
                                    <span>Démarrer mon projet</span>
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M5 12h14M12 5l7 7-7 7" />
                                    </svg>
                                </Link>
                            </div>
                        </aside>
                    </div>
                </div>
            </section>



            {/* Pricing Info Section */}
            < section className="pricing-section snipcss-vUK6g" >
                <div className="container">
                    <div className="pricing-content">
                        <div className="pricing-left">
                            <h2 className="section-title"> Investissement de <span className="highlight">Développement Mobile</span> au Maroc </h2>
                            <div className="pricing-text">
                                <p> Quel est le tarif pour concevoir une application mobile au Maroc ? C'est une interrogation majeure pour chaque porteur de projet. Le <Link href="/contact/" id="style-wKBTF" className="style-wKBTF">coût global</Link> s'ajuste en fonction de plusieurs variables : architecture technique, design sur-mesure, complexité des algorithmes et intégrations API. </p>
                                <p> Pour une <strong>Solution Startup (MVP)</strong>, prévoyez une enveloppe optimisée entre <strong>15 000 et 35 000 DH</strong>. Cette approche ultra-agile vous permet de confronter votre idée au marché en un temps record, de capter vos premiers utilisateurs et de <span className="highlight-text">valider votre Proof of Concept sans risque financier majeur</span>. </p>
                                <p> Une <strong>architecture mobile évolutive</strong> intégrant des fonctionnalités avancées et un backend performant débute désormais <strong>à partir de 45 000 DH</strong>. Ce pack inclut le déploiement sur les deux stores, une interface d'administration intuitive et une base technique prête pour la croissance. </p>
                                <p> Le <strong>Design UI/UX Stratégique</strong> est accessible dès <strong>3 500 DH</strong>. Nous concevons des parcours utilisateurs immersifs et des maquettes haute-fidélité qui maximisent l'engagement, garantissant que votre application se démarque dès la première seconde. </p>
                            </div> <Link href="/contact/" className="cta-button"> <span>Calculer votre devis sur-mesure</span> <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg> </Link>
                        </div>
                        <div className="pricing-right">
                            <div className="pricing-table">
                                <div className="pricing-card">
                                    <div className="card-icon"> <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                        <path d="M12 19l7-7 3 3-7 7-3-3z" />
                                        <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
                                        <path d="M2 2l7.586 7.586" />
                                        <circle cx="11" cy="11" r="2" />
                                    </svg> </div>
                                    <div className="card-content">
                                        <h3 className="card-title">Design Stratégique</h3>
                                        <p className="card-description">Parcours utilisateur, UI moderne et prototypage interactif rapide</p>
                                        <div className="card-price"> <span className="price-range">Dès 3 500</span> <span className="price-currency">DH</span> </div>
                                        <ul className="card-details">
                                            <li> <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <polyline points="20 6 9 17 4 12" />
                                            </svg> Wireframes &amp; Maquettes </li>
                                            <li> <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <polyline points="20 6 9 17 4 12" />
                                            </svg> Prototype Figma </li>
                                            <li> <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <polyline points="20 6 9 17 4 12" />
                                            </svg> Design System </li>
                                            <li> <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <polyline points="20 6 9 17 4 12" />
                                            </svg> Assets exportés </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="pricing-card">
                                    <div className="card-icon"> <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
                                        <path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
                                        <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
                                        <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
                                    </svg> </div>
                                    <div className="card-content">
                                        <h3 className="card-title">Solution MVP Agile</h3>
                                        <p className="card-description">Déploiement express de vos fonctionnalités clés pour validation</p>
                                        <div className="card-price"> <span className="price-range">Dès 15 000</span> <span className="price-currency">DH</span> </div>
                                        <ul className="card-details">
                                            <li> <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <polyline points="20 6 9 17 4 12" />
                                            </svg> Fonctionnalités essentielles </li>
                                            <li> <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <polyline points="20 6 9 17 4 12" />
                                            </svg> 1 à 2 plateformes </li>
                                            <li> <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <polyline points="20 6 9 17 4 12" />
                                            </svg> Backend basique </li>
                                            <li> <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <polyline points="20 6 9 17 4 12" />
                                            </svg> Lancement rapide </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="pricing-card">
                                    <div className="card-icon"> <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                        <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
                                        <line x1="12" y1="18" x2="12.01" y2="18" />
                                    </svg> </div>
                                    <div className="card-content">
                                        <h3 className="card-title">Projet Full-Stack</h3>
                                        <p className="card-description">Application robuste, scalable et connectée pour entreprise</p>
                                        <div className="card-price"> <span className="price-range">Dès 45 000</span> <span className="price-currency">DH</span> </div>
                                        <ul className="card-details">
                                            <li> <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <polyline points="20 6 9 17 4 12" />
                                            </svg> iOS + Android </li>
                                            <li> <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <polyline points="20 6 9 17 4 12" />
                                            </svg> Backend sur mesure </li>
                                            <li> <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <polyline points="20 6 9 17 4 12" />
                                            </svg> Panneau admin </li>
                                            <li> <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <polyline points="20 6 9 17 4 12" />
                                            </svg> Intégrations avancées </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section >


            {/* FAQ Section */}
            <section className="bg-gray-50 py-24">
                <div className="container px-4 mx-auto max-w-4xl">
                    <div className="flex flex-col items-center mb-12">
                        <span className="badge-gradient mb-4">FAQ</span>
                        <h2 className="section-title-premium text-center">Création d’application mobile au Maroc</h2>
                    </div>
                    <FAQSection
                        showTitle={false}
                        data={[
                            {
                                question: "1. Qu’est-ce que la création d’une application mobile et à quoi sert-elle pour une entreprise au Maroc ?",
                                answer: "La création d’une application mobile consiste à concevoir, développer et publier une application destinée aux smartphones et tablettes (Android et/ou iOS). Pour une entreprise au Maroc, une application mobile permet de fidéliser les clients, augmenter la visibilité de la marque, automatiser certains services (réservations, paiements, commandes) et offrir une expérience utilisateur moderne adaptée aux usages mobiles locaux."
                            },
                            {
                                question: "2. Pourquoi créer une application mobile au Maroc plutôt qu’un simple site web ?",
                                answer: "Un site web est essentiel, mais une application mobile offre des avantages supplémentaires : Accès direct depuis le téléphone sans navigateur, Notifications push pour communiquer avec les clients, Meilleures performances et expérience utilisateur, Fonctionnement hors ligne pour certaines fonctionnalités. Au Maroc, où l’usage du smartphone est très élevé, une application mobile permet de toucher les utilisateurs plus efficacement qu’un site web seul."
                            },
                            {
                                question: "3. Quels types d’applications mobiles pouvez-vous développer au Maroc ?",
                                answer: "Nous développons plusieurs types d’applications mobiles : Applications vitrines pour entreprises et marques, Applications e-commerce et marketplaces, Applications de réservation (hôtels, locations, services), Applications professionnelles (gestion, CRM, ERP léger), Applications éducatives et e-learning, Applications de livraison et de services locaux. Chaque projet est conçu sur mesure selon les besoins du client et le marché marocain."
                            },
                            {
                                question: "4. Développez-vous des applications Android et iOS ?",
                                answer: "Oui. Nous développons : Des applications Android (Google Play Store), Des applications iOS (Apple App Store), Des applications cross-platform (une seule base de code pour Android et iOS). Le choix dépend de votre budget, de votre cible et de vos objectifs commerciaux."
                            },
                            {
                                question: "5. Quel est le prix de création d’une application mobile au Maroc ?",
                                answer: "Le coût de création d’une application mobile au Maroc dépend de plusieurs facteurs : Complexité de l’application, Nombre de fonctionnalités, Design UI/UX personnalisé ou standard, Android, iOS ou les deux, Intégrations externes (paiement, GPS, API, etc.). En général, le prix peut varier de quelques milliers de dirhams à plusieurs dizaines de milliers de dirhams selon le projet. Un devis précis est fourni après analyse de vos besoins."
                            },
                            {
                                question: "6. Combien de temps faut-il pour développer une application mobile ?",
                                answer: "La durée de développement varie selon le projet : Application simple : 3 à 5 semaines, Application moyenne : 1 à 2 mois, Application complexe : 3 mois ou plus. Nous respectons des délais clairs avec un planning détaillé pour chaque étape du développement."
                            },
                            {
                                question: "7. Est-ce que vous vous occupez de la publication sur Google Play et l’App Store ?",
                                answer: "Oui. Nous prenons en charge : La préparation des fichiers de publication, L’optimisation de la fiche de l’application (ASO), La soumission sur Google Play Store et Apple App Store, L’accompagnement pour la création des comptes développeur. Vous recevez une application prête à être téléchargée par vos utilisateurs."
                            },
                            {
                                question: "8. Proposez-vous la maintenance et les mises à jour des applications mobiles ?",
                                answer: "Oui. Après la mise en ligne, nous proposons des services de : Maintenance technique, Corrections de bugs, Mises à jour de sécurité, Ajout de nouvelles fonctionnalités. La maintenance garantit la stabilité et la longévité de votre application mobile."
                            },
                            {
                                question: "9. Une application mobile est-elle adaptée aux petites entreprises au Maroc ?",
                                answer: "Absolument. Les petites entreprises marocaines (restaurants, salons, agences, commerces locaux) peuvent grandement bénéficier d’une application mobile pour : Gérer les commandes et réservations, Communiquer avec leurs clients, Se différencier de la concurrence. Il existe des solutions adaptés aux petits budgets avec des fonctionnalités ciblées."
                            },
                            {
                                question: "10. Mon application mobile sera-t-elle sécurisée ?",
                                answer: "Oui. La sécurité est une priorité : Protection des données utilisateurs, Connexions sécurisées (HTTPS, authentification), Respect des bonnes pratiques de développement, Sécurisation des bases de données. Nous mettons en place des standards de sécurité adaptés aux applications mobiles modernes."
                            },
                            {
                                question: "11. Puis-je suivre l’avancement de mon projet d’application mobile ?",
                                answer: "Oui. Vous êtes impliqué à chaque étape : Validation du cahier des charges, Maquettes et design, Développement progressif, Tests avant publication. Vous avez une visibilité totale sur l’évolution du projet."
                            },
                            {
                                question: "12. Créez-vous des applications mobiles sur mesure au Maroc ?",
                                answer: "Oui. Chaque application est développée sur mesure, en fonction : De votre secteur d’activité, De vos objectifs business, De votre cible au Maroc ou à l’international. Nous ne proposons pas de solutions génériques sans adaptation."
                            },
                            {
                                question: "13. Une application mobile peut-elle être reliée à un site web existant ?",
                                answer: "Oui. Votre application mobile peut être connectée à : Un site web existant, Une base de données, Un back-office d’administration. Cela permet une gestion centralisée et une meilleure cohérence entre vos outils digitaux."
                            },
                            {
                                question: "14. Est-ce que vous optimisez les applications pour le marché marocain ?",
                                answer: "Oui. Nous tenons compte : Des habitudes des utilisateurs marocains, De la langue (français, arabe, darija), Des moyens de paiement locaux, De la performance sur les smartphones les plus utilisés au Maroc. L’objectif est une application réellement adaptée au marché local."
                            },
                            {
                                question: "15. Comment démarrer un projet de création d’application mobile au Maroc ?",
                                answer: "Pour démarrer : Vous nous contactez avec votre idée, nous analysons vos besoins, nous vous proposons une solution technique et un devis. Le développement commence après validation. Nous vous accompagnons de l’idée jusqu’à la publication finale."
                            }
                        ]}
                    />
                </div>
            </section>

            {/* Contact Section */}
            < section id="contact-form-section" className="bg-[#022545] py-24 relative overflow-hidden" >
                <div className="container px-4 mx-auto max-w-5xl text-center relative z-10">
                    <h2 className="section-title-premium text-white mb-16">
                        Concrétisons votre <span className="text-primary-400">vision mobile</span>
                    </h2>
                    <ContactForm />
                </div>
            </section >
        </div >
    )
}
