'use client'

import Image from 'next/image'
import Link from 'next/link'
import ClientMotionWrapper from '@/components/ClientMotionWrapper'
import { CheckCircle2, XCircle, Zap, Globe, ShieldCheck, ArrowRight, Lock, TrendingUp, MapPin, Rocket, Database, Layout, Settings } from 'lucide-react'
import FAQSection from '@/components/FAQSection'
import ContactForm from '@/components/ContactForm'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { useHasMounted } from '@/hooks/useHasMounted'

import '../app/creation-site-web-maroc/NewGenSection.css'
import '../app/creation-site-web-maroc/LeadGenTable.css'
import '../app/creation-site-web-maroc/SuccessStories.css'
import '../app/creation-site-web-maroc/ServicesSlider.css'
import '../app/agence-wordpress-maroc/WordpressLanding.css'

interface WordpressLandingTemplateProps {
    lang?: 'FR' | 'EN';
}

export default function WordpressLandingTemplate({ lang = 'FR' }: WordpressLandingTemplateProps) {
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
        { name: 'WordPress', color: '#21759B' },
        { name: 'WooCommerce', color: '#96588A' },
        { name: 'Elementor', color: '#92003B' },
        { name: 'PHP 8+', color: '#777BB4' },
        { name: 'Yoast SEO', color: '#A4286A' },
    ]

    const featuresFR = [
        {
            title: <>Vitesse <span className="text-primary">Optimisée</span></>,
            description: <>Sites WordPress ultra-rapides grâce à notre stack technique avancée (Cache, CDN, Optimisation d'images). Score Google PageSpeed élevé garanti.</>,
            icon: <Zap className="w-6 h-6" />,
        },
        {
            title: <>Administration <span className="text-primary">Facile</span></>,
            description: <>Gérez votre contenu en toute autonomie. Interface intuitive, formation incluse et support réactif pour vous accompagner.</>,
            icon: <Settings className="w-6 h-6" />,
            highlighted: true,
        },
        {
            title: <>SEO <span className="text-primary">WordPress Expert</span></>,
            description: <>Structure optimisée pour le référencement naturel. Installation et configuration des meilleurs plugins SEO (Yoast/RankMath) pour dominer Google.</>,
            icon: <Globe className="w-6 h-6" />,
        },
        {
            title: <>Sécurité <span className="text-primary">Maximale</span></>,
            description: <>Protection contre les attaques, sauvegardes automatiques et mises à jour régulières pour un site WordPress 100% sécurisé.</>,
            icon: <ShieldCheck className="w-6 h-6" />,
        }
    ];

    const featuresEN = [
        {
            title: <>Optimized <span className="text-primary">Speed</span></>,
            description: <>Ultra-fast WordPress sites thanks to our advanced tech stack (Cache, CDN, Image Optimization). High Google PageSpeed score guaranteed.</>,
            icon: <Zap className="w-6 h-6" />,
        },
        {
            title: <>Easy <span className="text-primary">Administration</span></>,
            description: <>Manage your content independently. Intuitive interface, training included, and responsive support to assist you.</>,
            icon: <Settings className="w-6 h-6" />,
            highlighted: true,
        },
        {
            title: <>Expert <span className="text-primary">WordPress SEO</span></>,
            description: <>Structure optimized for organic search. Installation and configuration of the best SEO plugins (Yoast/RankMath) to dominate Google.</>,
            icon: <Globe className="w-6 h-6" />,
        },
        {
            title: <>Maximum <span className="text-primary">Security</span></>,
            description: <>Protection against attacks, automatic backups, and regular updates for a 100% secure WordPress site.</>,
            icon: <ShieldCheck className="w-6 h-6" />,
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
                                    {lang === 'EN' ? 'WordPress Agency Morocco' : 'Agence WordPress Maroc'}
                                </span>
                            </div>

                            <h1 className="hero-title-premium">
                                {lang === 'EN'
                                    ? "WordPress Expert in Morocco – Professional & Custom Websites"
                                    : "Expert WordPress au Maroc – Sites Web Professionnels & Sur Mesure"}
                            </h1>

                            <p className="hero-subtitle-premium mx-auto lg:mx-0">
                                {lang === 'EN' ? (
                                    <>Our <strong className="text-gray-900">WordPress agency in Morocco</strong> designs your customized <strong className="text-gray-900">website</strong>. Easy to manage, secured, and fully optimized for <strong className="text-gray-900">SEO</strong> to rank #1 on Google.</>
                                ) : (
                                    <>Notre <strong className="text-gray-900">agence WordPress au Maroc</strong> conçoit votre <strong className="text-gray-900">site web</strong> clé en main. Facile à gérer, sécurisé et entièrement optimisé pour le <strong className="text-gray-900">SEO</strong> pour atteindre la 1ère position sur Google.</>
                                )}
                            </p>

                            <div className="flex flex-col sm:flex-row items-center gap-6 pt-4">
                                <div className="flex flex-col items-center lg:items-start group cursor-pointer">
                                    <span className="text-primary-600 text-xs font-bold tracking-[0.2em] mb-1 group-hover:text-primary-500 transition-colors">
                                        {lang === 'EN' ? 'FREE QUOTE?' : 'DEVIS GRATUIT ?'}
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
                                alt="Agence WordPress Maroc - Création site internet"
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
                                <>WordPress Project: an expert <span className="text-primary-400 border-b-4 border-primary-500 pb-2">will call you back!</span></>
                            ) : (
                                <>Projet WordPress : un expert <span className="text-primary-400 border-b-4 border-primary-500 pb-2">vous rappelle !</span></>
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
                                <><span>Excellence in WordPress</span> <br /> <span className="title-line-2"><span className="highlight">development</span> in Morocco</span></>
                            ) : (
                                <><span>Excellence en développement</span> <br /> <span className="title-line-2"><span className="highlight">WordPress</span> au Maroc</span></>
                            )}
                        </h2>
                        <p className="section-subtitle-premium mx-auto">
                            {lang === 'EN' ? (
                                <>We build high-performance, secure, and scalable <strong className="text-gray-900">WordPress websites</strong> designed to grow your business.</>
                            ) : (
                                <>Nous développons des <strong className="text-gray-900">sites WordPress</strong> performants, sécurisés et évolutifs, conçus pour faire croître votre entreprise.</>
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
                                    <Database className="w-8 h-8 text-primary-600" />
                                </div>
                                <div className="cta-text">
                                    <p className="cta-headline">
                                        {lang === 'EN' ? (
                                            <>Need a custom <strong>WordPress theme</strong>?</>
                                        ) : (
                                            <>Besoin d&apos;un <strong>thème WordPress</strong> sur mesure ?</>
                                        )}
                                    </p>
                                    <p className="cta-subtext">
                                        {lang === 'EN' ? (
                                            <>Custom development • Plugin creation • API Integration</>
                                        ) : (
                                            <>Développement spécifique • Création de plugin • Intégration API</>
                                        )}
                                    </p>
                                </div>
                            </div>

                            <Link href="/contact/" className="btn-launch group">
                                <div className="btn-launch-content">
                                    {lang === 'EN' ? 'Discuss my project' : 'Discuter de mon projet'}
                                    <ArrowRight className="w-5 h-5 ml-2" />
                                </div>
                                <div className="btn-launch-content absolute">
                                    {lang === 'EN' ? 'Discuss my project' : 'Discuter de mon projet'}
                                    <ArrowRight className="w-5 h-5 ml-2" />
                                </div>
                            </Link>
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
                                alt="Site WordPress sur mesure"
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
                                Au-delà du thème : un site WordPress unique qui porte votre vision
                            </h2>

                            <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
                                <p>
                                    Le développement WordPress ne se limite pas à installer un thème. Chez Sitepro, nous explorons vos défis métier pour concevoir une architecture WordPress sur-mesure qui répond précisément à vos besoins stratégiques. Que ce soit pour optimiser vos processus internes ou lancer un service disruptif, nous bâtissons l’outil qui vous propulse.
                                </p>
                                <p>
                                    En privilégiant une collaboration étroite, nous créons un produit final dont chaque pixel et chaque fonctionnalité ont un but précis. Votre site devient ainsi un actif technologique puissant, parfaitement aligné avec votre identité et vos objectifs de croissance.
                                </p>
                            </div>

                            <div className="bg-[#022545] p-8 lg:p-10 rounded-[2rem] text-white space-y-6">
                                <h3 className="text-2xl font-bold leading-tight">
                                    Vous avez un projet de site WordPress sur-mesure ?
                                </h3>
                                <p className="opacity-90">
                                    Contactez l’équipe Sitepro pour un premier échange autour de votre idée. Nous prenons le temps de comprendre votre besoin, de confronter les points de vue et de poser ensemble les bases d’un site qui répondra vraiment à votre problématique initiale.
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

            {/* Comparison Section */}
            <section className="py-16 lg:py-24 bg-white relative overflow-hidden">
                <div className="container px-4 mx-auto max-w-7xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-8">
                            <h2 className="section-title-premium lg:text-left">
                                {lang === 'EN' ? (
                                    <>Why choose a <span className="text-primary-600">Professional WordPress Site</span>?</>
                                ) : (
                                    <>Pourquoi choisir un <span className="text-primary-600">Site WordPress Professionnel</span> ?</>
                                )}
                            </h2>
                            <p className="section-subtitle-premium lg:text-left lg:mx-0">
                                {lang === 'EN' ? (
                                    <>Don't settle for a basic template. Our <strong className="text-gray-900">WordPress experts</strong> create unique digital experiences that convert visitors into customers.</>
                                ) : (
                                    <>Ne vous contentez pas d'un modèle basique. Nos <strong className="text-gray-900">experts WordPress</strong> créent des expériences digitales uniques qui convertissent vos visiteurs en clients.</>
                                )}
                            </p>

                            <div className="grid grid-cols-3 gap-8 pt-4">
                                <div className="space-y-2">
                                    <div className="text-4xl font-black text-[#022545]">43<span className="text-lg text-gray-400">%</span></div>
                                    <p className="text-xs font-bold text-gray-500 uppercase tracking-wider">{lang === 'EN' ? 'of the Web' : 'du Web mondial'}</p>
                                </div>
                                <div className="space-y-2">
                                    <div className="text-4xl font-black text-[#022545]">100<span className="text-lg text-gray-400">%</span></div>
                                    <p className="text-xs font-bold text-gray-500 uppercase tracking-wider">{lang === 'EN' ? 'Customizable' : 'Personnalisable'}</p>
                                </div>
                                <div className="space-y-2">
                                    <div className="text-4xl font-black text-[#022545]">SEO</div>
                                    <p className="text-xs font-bold text-gray-500 uppercase tracking-wider">{lang === 'EN' ? 'Friendly' : 'Optimisé'}</p>
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
                                    <span className="font-bold text-red-600 text-sm md:text-base uppercase">{lang === 'EN' ? 'Amateur/Wix Site' : 'Site Amateur/Wix'}</span>
                                </div>
                                <div className="flex-1 p-6 bg-primary-500 flex items-center justify-center gap-2">
                                    <CheckCircle2 className="w-5 h-5 text-white" />
                                    <span className="font-bold text-white text-sm md:text-base uppercase">{lang === 'EN' ? 'Pro WP Site' : 'Site WP Pro'}</span>
                                </div>
                            </div>

                            <div className="p-8 space-y-6">
                                {[
                                    {
                                        label: lang === 'EN' ? 'Ownership' : 'Propriété',
                                        icons: <Lock className="w-5 h-5 text-green-500" />,
                                        bad: lang === 'EN' ? 'Rented (Monthly fees)' : 'Loué (Abonnement)',
                                        good: lang === 'EN' ? '100% Yours' : '100% à Vous'
                                    },
                                    {
                                        label: lang === 'EN' ? 'SEO Potential' : 'Potentiel SEO',
                                        icons: <Globe className="w-5 h-5 text-green-500" />,
                                        bad: lang === 'EN' ? 'Limited' : 'Limité',
                                        good: lang === 'EN' ? 'Unlimited' : 'Illimité'
                                    },
                                    {
                                        label: lang === 'EN' ? 'Scalability' : 'Évolutivité',
                                        icons: <TrendingUp className="w-5 h-5 text-green-500" />,
                                        bad: lang === 'EN' ? 'Restricted' : 'Restreinte',
                                        good: lang === 'EN' ? 'Total' : 'Totale'
                                    },
                                    {
                                        label: lang === 'EN' ? 'Design' : 'Design',
                                        icons: <Layout className="w-5 h-5 text-green-500" />,
                                        bad: lang === 'EN' ? 'Templates' : 'Template Générique',
                                        good: lang === 'EN' ? 'Custom Made' : 'Sur Mesure'
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
                        </ClientMotionWrapper>
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="py-24 bg-white">
                <div className="methodology-container">
                    <div className="methodology-grid">
                        <div className="features-column">
                            <div className="features-header">
                                <h3 className="features-title">Notre processus de création WordPress, de l'idée au succès</h3>
                                <p className="features-subtitle">
                                    De la phase de réflexion stratégique au support après lancement, nous déployons une méthodologie rigoureuse pour garantir la performance de votre site WordPress.
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
                                        <a href="#" className="feature-cta">
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
                                        <h3 className="feature-title">Planification & Design</h3>
                                        <p className="feature-description">Estimation rigoureuse des ressources et création de maquettes UI/UX pour valider l'apparence de votre futur site.</p>
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
                                        <h3 className="feature-title">Développement & Intégration</h3>
                                        <p className="feature-description">Nos développeurs intègrent votre design sur WordPress, configuraient les plugins et développent les fonctionnalités spécifiques.</p>
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
                                        <h3 className="feature-title">Optimisation & Sécurité</h3>
                                        <p className="feature-description">Configuration avancée du cache, compression des images et sécurisation contre les attaques (WAF, 2FA).</p>
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
                                        <h3 className="feature-title">Contrôle Qualité & Mise en ligne</h3>
                                        <p className="feature-description">Phase de QA intensive suivie d'une mise en production sécurisée sur votre hébergement.</p>
                                    </div>
                                </article>

                                <article className="feature-card">
                                    <div className="feature-icon">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                            <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                                        </svg>
                                    </div>
                                    <div className="feature-content">
                                        <h3 className="feature-title">Formation & Support</h3>
                                        <p className="feature-description">Formation à l'interface d'administration WordPress et support technique permanent pour assurer la pérennité.</p>
                                        <Link href="/maintenance-site-web-maroc/" className="feature-cta">
                                            <span>Maintenance WordPress</span>
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
                                        <span className="badge-value">2-4</span>
                                        <span className="badge-unit">semaines</span>
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
                                            <span className="timeline-item-duration">3-5 jours</span>
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
                                            <span className="timeline-item-title">Design & Maquette</span>
                                            <span className="timeline-item-duration">1 semaine</span>
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
                                            <span className="timeline-item-duration">1-2 semaines</span>
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
                                            <span className="timeline-item-title">Contenu & SEO</span>
                                            <span className="timeline-item-duration">3-5 jours</span>
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
                                    <span>Je lance mon projet</span>
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M5 12h14M12 5l7 7-7 7" />
                                    </svg>
                                </Link>
                            </div>
                        </aside>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="py-16 lg:py-24 bg-[#f8fafc]">
                <div className="container px-4 mx-auto max-w-7xl">
                    <header className="mb-20">
                        <h2 className="section-title-premium">
                            {lang === 'EN' ? (
                                <>Our <br /> WordPress Services</>
                            ) : (
                                <>Nos Services <br /> WordPress</>
                            )}
                        </h2>
                    </header>

                    <div className="services-grid-mobile-slider">
                        {[
                            {
                                title: lang === 'EN' ? 'Custom Theme Creation' : 'Création de Thème Sur Mesure',
                                desc: lang === 'EN' ? 'Unique design aligned with your brand image, without bloatware.' : 'Design unique aligné avec votre image de marque, sans code superflu.',
                                icon: <Layout />,
                                link: '/creation-site-web-maroc/'
                            },
                            {
                                title: lang === 'EN' ? 'WooCommerce E-commerce' : 'E-commerce WooCommerce',
                                desc: lang === 'EN' ? 'Complete online store: simplified management, secure payments.' : 'Boutique en ligne complète : gestion simplifiée, paiements sécurisés.',
                                icon: <TrendingUp />
                            },
                            {
                                title: lang === 'EN' ? 'WordPress Redesign' : 'Refonte WordPress',
                                desc: lang === 'EN' ? 'Modernize your existing site: better speed, new design, mobile version.' : 'Modernisez votre site actuel : meilleure vitesse, nouveau design, version mobile.',
                                icon: <Zap />
                            },
                            {
                                title: lang === 'EN' ? 'Maintenance & Security' : 'Maintenance & Sécurité',
                                desc: lang === 'EN' ? 'Updates, backups, and 24/7 monitoring of your WordPress site.' : 'Mises à jour, sauvegardes et surveillance 24/7 de votre site WordPress.',
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

            {/* Pricing Info Section */}
            <section className="pricing-section snipcss-vUK6g">
                <div className="container">
                    <div className="pricing-content">
                        <div className="pricing-left">
                            <h2 className="section-title"> Investissement de <span className="highlight">Site WordPress</span> au Maroc </h2>
                            <div className="pricing-text">
                                <p> Quel est le tarif pour concevoir un site WordPress au Maroc ? C'est une interrogation majeure. Le <Link href="/contact/" id="style-wKBTF" className="style-wKBTF">budget global</Link> s'ajuste en fonction de vos besoins : thème premium ou sur-mesure, e-commerce, fonctionnalités spécifiques. </p>
                                <p> Pour un <strong>Site Vitrine Pro</strong>, prévoyez une enveloppe optimisée à partir de <strong>3 500 DH</strong>. Cette approche vous offre une présence professionnelle rapide, idéale pour présenter votre activité et inspirer confiance. </p>
                                <p> Une <strong>architecture E-commerce ou Business</strong> intégrant WooCommerce et des fonctionnalités avancées débute <strong>à partir de 8 500 DH</strong>. Ce pack inclut le paiement en ligne, la gestion des stocks et une optimisation SEO poussée. </p>
                                <p> Le <strong>WordPress Sur-Mesure est accessible dès 15 000 DH</strong>. Nous développons un thème unique, une architecture complexe et des intégrations API spécifiques pour les projets ambitieux. </p>
                            </div> <Link href="/contact/" className="cta-button"> <span>Calculer votre devis sur-mesure</span> <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg> </Link>
                        </div>
                        <div className="pricing-right">
                            <div className="pricing-table">
                                <div className="pricing-card">
                                    <div className="card-icon"> <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                        <rect x="3" y="4" width="18" height="18" rx="2" />
                                        <line x1="16" y1="2" x2="16" y2="6" />
                                        <line x1="8" y1="2" x2="8" y2="6" />
                                        <line x1="3" y1="10" x2="21" y2="10" />
                                    </svg> </div>
                                    <div className="card-content">
                                        <h3 className="card-title">Vitrine Pro</h3>
                                        <p className="card-description">Présence professionnelle, design soigné et formulaire de contact.</p>
                                        <div className="card-price"> <span className="price-range">Dès 3 500</span> <span className="price-currency">DH</span> </div>
                                        <ul className="card-details">
                                            <li> <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <polyline points="20 6 9 17 4 12" />
                                            </svg> Design Responsive </li>
                                            <li> <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <polyline points="20 6 9 17 4 12" />
                                            </svg> Sécurisé SSL </li>
                                            <li> <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <polyline points="20 6 9 17 4 12" />
                                            </svg> Optimisé SEO </li>
                                            <li> <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <polyline points="20 6 9 17 4 12" />
                                            </svg> Contact & Map </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="pricing-card">
                                    <div className="card-icon"> <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                        <path d="M20.38 3.46L16 2a4 4 0 01-8 0L3.62 3.46a2 2 0 00-1.34 2.23l1.5 9.09a2 2 0 00.57 1.12l7 7a2 2 0 002.65 0l7-7a2 2 0 00.57-1.12l1.5-9.09a2 2 0 00-1.34-2.23z"></path>
                                    </svg> </div>
                                    <div className="card-content">
                                        <h3 className="card-title">E-commerce / Business</h3>
                                        <p className="card-description">Boutique en ligne complète ou site vitrine avancé pour PME.</p>
                                        <div className="card-price"> <span className="price-range">Dès 8 500</span> <span className="price-currency">DH</span> </div>
                                        <ul className="card-details">
                                            <li> <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <polyline points="20 6 9 17 4 12" />
                                            </svg> WooCommerce </li>
                                            <li> <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <polyline points="20 6 9 17 4 12" />
                                            </svg> Paiement en ligne </li>
                                            <li> <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <polyline points="20 6 9 17 4 12" />
                                            </svg> Blog Intégré </li>
                                            <li> <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <polyline points="20 6 9 17 4 12" />
                                            </svg> Formation Admin </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="pricing-card">
                                    <div className="card-icon"> <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                        <path d="M12 2L2 7l10 5 10-5-10-5z" />
                                        <path d="M2 17l10 5 10-5" />
                                        <path d="M2 12l10 5 10-5" />
                                    </svg> </div>
                                    <div className="card-content">
                                        <h3 className="card-title">Sur-Mesure</h3>
                                        <p className="card-description">Développement spécifique, thème unique et intégrations complexes.</p>
                                        <div className="card-price"> <span className="price-range">Dès 15 000</span> <span className="price-currency">DH</span> </div>
                                        <ul className="card-details">
                                            <li> <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <polyline points="20 6 9 17 4 12" />
                                            </svg> Thème Unique </li>
                                            <li> <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <polyline points="20 6 9 17 4 12" />
                                            </svg> API & CRM </li>
                                            <li> <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <polyline points="20 6 9 17 4 12" />
                                            </svg> Performance Max </li>
                                            <li> <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <polyline points="20 6 9 17 4 12" />
                                            </svg> Audit Sécurité </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Success Section */}
            <section className="py-16 lg:py-24 bg-white">
                <div className="container px-4 mx-auto max-w-7xl text-center mb-16">
                    <h2 className="section-title-premium">{lang === 'EN' ? <>Sitepro.ma Expertise: <br /> Proven Results</> : <>Expertise Sitepro.ma : <br /> Résultats Prouvés</>}</h2>
                    <p className="section-subtitle-premium mx-auto">
                        {lang === 'EN' ? (
                            <>We help companies in Morocco rank their WordPress sites on the first page of Google. <strong className="text-primary-600">Join our success stories</strong>.</>
                        ) : (
                            <>Nous aidons les entreprises au Maroc à classer leur site WordPress en première page de Google. <strong className="text-primary-600">Rejoignez nos success stories</strong>.</>
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
                                        <span className="font-poppins">Maroc</span>
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

            {/* Cities Section - Adapted for WP */}
            <section className="py-16 lg:py-24 bg-white relative overflow-hidden">
                <div className="container px-4 mx-auto max-w-7xl relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="section-title-premium">
                            {lang === 'EN' ? `WordPress Creation in Morocco: Presence across the Kingdom` : `Création WordPress au Maroc : Une présence dans tout le Royaume`}
                        </h2>
                        <p className="section-subtitle-premium mx-auto">
                            {lang === 'EN' ? 'We develop your WordPress site remotely or locally in major Moroccan cities.' : 'Nous développons votre site WordPress à distance ou en local dans les grandes villes du Maroc.'}
                        </p>
                    </div>
                    <div className="flex flex-col lg:flex-row gap-16 items-start">
                        <div className="flex-1 space-y-6">
                            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-2 gap-4">
                                {cities.map((cityItem) => (
                                    <Link key={cityItem} href={`/creation-site-web-${cityItem.toLowerCase()}/`} className="text-gray-500 hover:text-primary-600 hover:translate-x-1 transition-all flex items-center gap-2">
                                        <MapPin size={14} className="text-primary-500 shrink-0" />
                                        {cityItem}
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
                        {lang === 'EN' ? `FAQ - WordPress Agency Morocco` : `FAQ - Agence WordPress Maroc`}
                    </h2>
                    <FAQSection lang={lang} />
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-24 bg-[#022545] relative overflow-hidden">
                <div className="container px-4 mx-auto text-center relative z-10">
                    <h2 className="section-title-premium text-white mb-8">
                        {lang === 'EN' ? `Ready to launch your WordPress project in Morocco?` : `Prêt à lancer votre projet WordPress au Maroc ?`}
                    </h2>
                    <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto">
                        {lang === 'EN' ? 'Join hundreds of satisfied clients. Get a free quote for your WordPress website today.' : 'Rejoignez des centaines de clients satisfaits. Obtenez un devis gratuit pour votre site WordPress aujourd\'hui.'}
                    </p>
                    <Link href="/contact/" className="inline-flex items-center gap-3 px-10 py-5 bg-primary-500 text-white rounded-2xl font-black text-lg hover:bg-primary-600 transition-all shadow-2xl shadow-primary-500/20 group">
                        {lang === 'EN' ? 'Start my project' : 'Démarrer mon projet'}
                        <Rocket className="w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </Link>
                </div>
            </section>
        </div>
    )
}
