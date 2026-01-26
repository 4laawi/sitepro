import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import ClientMotionWrapper from '@/components/ClientMotionWrapper'
import { CheckCircle2, Zap, Globe, ShieldCheck, ArrowRight, Bot, Clock, Lock, TrendingUp, SmartphoneNfc, Cpu, Rocket, Shield, PenTool, MessageCircle } from 'lucide-react'
import FAQSection from '@/components/FAQSection'
import ContactForm from '@/components/ContactForm'
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

    const processSteps = [
        {
            title: 'Analyse et Stratégie',
            desc: 'Nous étudions votre vision à travers un cahier des charges précis pour définir la meilleure trajectoire technologique.',
            icon: <ShieldCheck />,
            cta: { text: 'Modèle de cahier des charges', link: '#' }
        },
        {
            title: 'Conception et Prototypage',
            desc: 'Création de l\'architecture fonctionnelle et estimation détaillée des ressources nécessaires à votre projet.',
            icon: <Clock />
        },
        {
            title: 'Design UX/UI Premium',
            desc: 'Nos experts modélisent une interface visuelle unique avant de lancer la moindre ligne de code.',
            icon: <PenTool />
        },
        {
            title: 'Développement Agile',
            desc: 'Codage itératif de votre solution par nos ingénieurs spécialisés en environnement mobile.',
            icon: <SmartphoneNfc />
        },
        {
            title: 'Validation et Mise en Ligne',
            desc: 'Phase de tests rigoureux suivie du déploiement stratégique sur l\'App Store et Google Play.',
            icon: <Globe />
        },
        {
            title: 'Accompagnement Continu',
            desc: 'Maintenance proactive et mises à jour régulières pour assurer la pérennité de votre outil digital.',
            icon: <Shield />,
            cta: { text: 'Nos plans de maintenance', link: '/maintenance-site-web-maroc/' }
        }
    ]

    const timeline = [
        { step: 'Validation du projet', duration: '1 semaine', done: true },
        { step: 'UI/UX Design', duration: '2-3 semaines' },
        { step: 'Développement', duration: '1-2 mois' },
        { step: 'Test & Publication', duration: '2 semaines' },
        { step: 'Lancement officiel', duration: 'Go Live 🚀' }
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
            </section>

            {/* Features Section */}
            <section className="py-24 bg-white relative overflow-hidden">
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
            </section>

            {/* Process Section */}
            <section className="py-24 bg-white">
                <div className="container px-4 mx-auto max-w-7xl">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        <div className="lg:col-span-2 space-y-12">
                            <header className="space-y-4">
                                <h2 className="section-title-premium lg:text-left">
                                    De l’idée au déploiement : <br /> <span className="text-primary-600">notre méthodologie mobile</span>
                                </h2>
                                <p className="text-gray-600 text-lg leading-relaxed lg:text-left">
                                    Une démarche structurée, transparente et centrée sur l&apos;utilisateur pour garantir le succès de votre projet mobile.
                                </p>
                            </header>

                            <div className="bg-orange-50 border-l-4 border-orange-500 p-8 rounded-r-2xl space-y-4">
                                <div className="flex items-center gap-3 text-orange-700 font-bold">
                                    <Clock className="w-6 h-6" />
                                    <span>CRITÈRES DE COLLABORATION</span>
                                </div>
                                <p className="text-orange-900/80">
                                    Nous accompagnons exclusivement les entreprises (<strong>B2B, B2C, B2G</strong>) ayant une vision claire de leur projet. Un <strong>cahier des charges structuré</strong> est indispensable pour toute étude technique or chiffrage précis.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {processSteps.map((s, i) => (
                                    <div key={i} className="flex gap-6 group">
                                        <div className="w-12 h-12 bg-gray-50 text-gray-400 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-primary-500 group-hover:text-white transition-all">
                                            {s.icon}
                                        </div>
                                        <div className="space-y-2">
                                            <h3 className="font-bold text-gray-900">{s.title}</h3>
                                            <p className="text-sm text-gray-500 leading-relaxed">{s.desc}</p>
                                            {s.cta && (
                                                <Link href={s.cta.link} className="text-xs font-bold text-primary-600 hover:underline inline-flex items-center gap-1">
                                                    {s.cta.text} <ArrowRight className="w-3 h-3" />
                                                </Link>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="lg:col-span-1">
                            <div className="timeline-card">
                                <div className="flex justify-between items-start mb-12">
                                    <div className="space-y-1">
                                        <div className="text-primary-400 text-xs font-bold uppercase tracking-widest">DURÉE ESTIMÉE</div>
                                        <div className="text-2xl font-bold">Timeline projet</div>
                                    </div>
                                    <div className="bg-white/10 px-4 py-2 rounded-xl text-center">
                                        <div className="text-xl font-bold leading-none">2-3</div>
                                        <div className="text-[10px] font-bold opacity-60 uppercase">Mois</div>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    {timeline.map((t, i) => (
                                        <div key={i} className="timeline-item">
                                            <div className="timeline-line"></div>
                                            <div className={`timeline-dot ${t.done ? 'bg-green-500' : 'bg-primary-500'}`}></div>
                                            <div className="flex-1 -mt-1">
                                                <div className="font-bold text-sm">{t.step}</div>
                                                <div className="text-xs opacity-60 italic">{t.duration}</div>
                                            </div>
                                            {t.done && <CheckCircle2 className="w-4 h-4 text-green-500" />}
                                        </div>
                                    ))}
                                </div>

                                <Link href="/contact/" className="mt-8 w-full bg-primary-500 hover:bg-primary-600 text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all group">
                                    Démarrer mon projet <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* Pricing Info Section */}
            <section className="py-24 bg-white">
                <div className="container px-4 mx-auto max-w-7xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-8">
                            <h2 className="section-title-premium lg:text-left">
                                Budget de création d&apos;<span className="text-primary-600">Application Mobile</span> au Maroc
                            </h2>
                            <div className="space-y-4 text-gray-600 body-normal lg:text-left">
                                <p>L&apos;investissement pour une application dépend de l&apos;étendue technologique et de la complexité des flux de données.</p>
                                <p>Un <strong>MVP (Produit Minimum Viable)</strong> se situe généralement entre <strong>40 000 et 100 000 DH</strong>, parfait pour valider votre concept auprès des utilisateurs réels.</p>
                                <p>Pour une <strong>solution métier complète</strong> incluant un panel d&apos;administration expert, les budgets débutent à <strong>100 000 DH</strong>.</p>
                                <p>La phase de conception UI/UX est un pilier fondamental dont le coût varie de 8 000 à 30 000 DH selon la densité de l&apos;interface.</p>
                            </div>
                            <Link href="/contact/" className="btn-primary inline-flex items-center gap-3">
                                Obtenir mon devis personnalisé <ArrowRight className="w-5 h-5" />
                            </Link>
                        </div>

                        <div className="grid grid-cols-1 gap-6">
                            {[
                                { title: 'Design UI/UX', price: '8 000', icon: <PenTool />, features: ['Wireframes', 'Maquettes Figma', 'Design System'] },
                                { title: 'MVP Application', price: '60 000', icon: <Rocket />, features: ['Fonctions clés', '1-2 plateformes', 'Lancement rapide'] },
                                { title: 'App Complète', price: '100 000', icon: <Cpu />, features: ['iOS + Android', 'Backend expert', 'Évolutivité'] },
                            ].map((p, i) => (
                                <div key={i} className="pricing-card-mobile flex items-center gap-8 group">
                                    <div className="w-16 h-16 bg-primary-50 text-primary-600 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-primary-500 group-hover:text-white transition-all">
                                        {p.icon}
                                    </div>
                                    <div className="flex-1 space-y-1">
                                        <h3 className="font-bold text-gray-900">{p.title}</h3>
                                        <div className="text-xs text-gray-400 font-bold uppercase">{p.features.join(' • ')}</div>
                                    </div>
                                    <div className="text-right">
                                        <div className="text-sm text-gray-400 font-medium">À partir de</div>
                                        <div className="text-xl font-black text-[#022545]">{p.price} DH</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="bg-gray-50 py-24">
                <div className="container px-4 mx-auto max-w-4xl">
                    <h2 className="section-title-premium text-center mb-16">Questions fréquentes</h2>
                    <FAQSection />
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact-form-section" className="bg-[#022545] py-24 relative overflow-hidden">
                <div className="container px-4 mx-auto max-w-5xl text-center relative z-10">
                    <h2 className="section-title-premium text-white mb-16">
                        Concrétisons votre <span className="text-primary-400">vision mobile</span>
                    </h2>
                    <ContactForm />
                </div>
            </section>
        </div>
    )
}
