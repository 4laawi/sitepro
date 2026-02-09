import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import ClientMotionWrapper from '@/components/ClientMotionWrapper'
import { CheckCircle2, Zap, Globe, Bot, Lock, TrendingUp, SmartphoneNfc, Cpu, Rocket, Shield, PenTool, MessageCircle, ArrowRight } from 'lucide-react'
import FAQSection from '@/components/FAQSection'
import CallbackForm from '@/components/CallbackForm'
import '../../application-mobile-maroc/MobileApp.css'

export const metadata: Metadata = {
    title: 'Mobile App Development Morocco | Expert Agency Sitepro',
    description: 'Mobile app creation in Morocco. Experts in custom iOS & Android development, high performance and secure. Free quote and complete support.',
    alternates: {
        canonical: 'https://sitepro.ma/en/mobile-apps-morocco',
        languages: {
            'fr-MA': 'https://sitepro.ma/application-mobile-maroc',
            'en-MA': 'https://sitepro.ma/en/mobile-apps-morocco',
        },
    },
    openGraph: {
        title: 'Mobile App Development Morocco | Expert Agency Sitepro',
        description: 'Mobile app creation in Morocco. Experts in custom iOS & Android development, high performance and secure. Free quote and complete support.',
        url: 'https://sitepro.ma/en/mobile-apps-morocco',
        siteName: 'Sitepro.ma',
        images: [{
            url: 'https://sitepro.ma/og-application-mobile.jpg',
            width: 1200,
            height: 630,
            alt: 'Mobile App Creation Morocco',
        }],
        locale: 'en_MA',
        type: 'website',
    },
}

export default function MobileAppPageEn() {
    const features = [
        {
            title: 'Accelerated Launch',
            desc: 'Deployment of your application on iOS and Android in record time thanks to our agile methodology.',
            icon: <Rocket className="w-6 h-6" />
        },
        {
            title: 'Cutting-Edge Security',
            desc: 'Rigorous data protection with advanced encryption systems compliant with international standards.',
            icon: <Shield className="w-6 h-6" />
        },
        {
            title: 'User Experience (UX)',
            desc: 'Fluid and ergonomic interfaces designed to maximize user engagement and satisfaction.',
            icon: <PenTool className="w-6 h-6" />
        },
        {
            title: 'High Performance',
            desc: 'Optimized development guaranteeing flawless execution speed on all types of mobile devices.',
            icon: <Zap className="w-6 h-6" />
        },
        {
            title: 'Integrated AI Solutions',
            desc: 'Harness the power of artificial intelligence to offer predictive and personalized functionalities.',
            icon: <Cpu className="w-6 h-6" />
        },
        {
            title: 'Guaranteed Scalability',
            desc: 'A robust technical architecture designed to support your company\'s growth without limits.',
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
                                    Mobile App Morocco
                                </span>
                            </div>

                            <h1 className="hero-title-premium">
                                Custom mobile app creation in Morocco
                            </h1>

                            <p className="hero-subtitle-premium mx-auto lg:mx-0">
                                Sitepro is your reference partner agency for <strong className="text-gray-900">mobile app creation in Morocco</strong>. We transform your ideas into innovative and high-performance digital solutions.
                            </p>

                            <div className="flex flex-col sm:flex-row items-center gap-6 pt-4">
                                <div className="flex flex-col items-center lg:items-start group cursor-pointer">
                                    <span className="text-primary-600 text-xs font-bold tracking-[0.2em] mb-1 group-hover:text-primary-500 transition-colors uppercase">
                                        EMAIL CONSULTATION?
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
                                alt="Mobile App Creation Morocco - Custom Solutions"
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
                            Mobile app creation: an advisor <span className="text-primary-400 border-b-4 border-primary-500 pb-2">calls you back!</span>
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
                                alt="Custom mobile solutions"
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
                                Beyond code: a unique app that carries your vision
                            </h2>

                            <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
                                <p>
                                    Custom development is not limited to programming. At Sitepro, we explore your business challenges to design a mobile architecture that precisely meets your strategic needs. Whether to optimize your internal processes or launch a disruptive service, we build the tool that propels you.
                                </p>
                                <p>
                                    By favoring close collaboration, we create a final product where every pixel and every feature has a specific purpose. Your application thus becomes a powerful technological asset, perfectly aligned with your identity and growth objectives.
                                </p>
                            </div>

                            <div className="bg-[#022545] p-8 lg:p-10 rounded-[2rem] text-white space-y-6">
                                <h3 className="text-2xl font-bold leading-tight">
                                    Do you have a custom mobile app project?
                                </h3>
                                <p className="opacity-90">
                                    Contact the Sitepro team for an initial discussion about your idea. We take the time to understand your needs, challenge perspectives, and together lay the foundations for an application that truly addresses your initial problem.
                                </p>
                                <Link
                                    href="#contact-form-section"
                                    className="inline-block bg-white text-[#022545] px-8 py-4 rounded-full font-bold hover:bg-opacity-90 transition-all text-center"
                                >
                                    Contact Sitepro Team
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
                            <div className="brand-text">Strategy</div>
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
                            Mobile development expertise <br className="hidden md:block" />
                            <span className="text-[#2563eb]">in Morocco</span>
                        </h2>
                        <p className="section-subtitle-premium max-w-2xl mx-auto opacity-70">
                            Our agency deploys advanced technical expertise to design world-class <strong>native and hybrid mobile applications</strong>, combining impenetrable security and exceptional design.
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
                                        { val: '+100', label: 'Apps Created', icon: <SmartphoneNfc className="w-5 h-5" /> },
                                        { val: '+30', label: 'Under Maintenance', icon: <Shield className="w-5 h-5" /> },
                                        { val: '+10', label: 'Senior Developers', icon: <Bot className="w-5 h-5" /> },
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
                                                    <span className="phone-greeting">Hello, Karim</span>
                                                    <span className="phone-sub-greeting">Welcome to your space</span>
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
                                                        <span className="phone-stat-l">Users</span>
                                                    </div>
                                                </div>
                                                <div className="phone-stat-card">
                                                    <div className="phone-stat-icon-box green">
                                                        <TrendingUp className="w-4 h-4" />
                                                    </div>
                                                    <div>
                                                        <span className="phone-stat-v">94%</span>
                                                        <span className="phone-stat-l">Growth</span>
                                                    </div>
                                                </div>
                                            </div>

                                            <div>
                                                <span className="phone-section-label">Quick Actions</span>
                                                <div className="phone-quick-grid">
                                                    {[
                                                        { icon: <MessageCircle className="w-5 h-5" />, color: 'purple', label: 'Messages' },
                                                        { icon: <TrendingUp className="w-5 h-5" />, color: 'orange', label: 'Stats' },
                                                        { icon: <Cpu className="w-5 h-5" />, color: 'teal', label: 'Settings' },
                                                        { icon: <Shield className="w-5 h-5" />, color: 'pink', label: 'Favorites' },
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
                                                <span className="phone-section-label">Recent Activity</span>
                                                <div className="activity-list-phone">
                                                    <div className="activity-row-phone">
                                                        <div className="activity-dot-phone green"></div>
                                                        <span className="activity-text-phone">New order received</span>
                                                        <span className="activity-time-phone">2m</span>
                                                    </div>
                                                    <div className="activity-row-phone">
                                                        <div className="activity-dot-phone blue"></div>
                                                        <span className="activity-text-phone">System update</span>
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
                                <h3 className="features-title">Our mobile development process, from idea to success</h3>
                                <p className="features-subtitle">
                                    From strategic thinking to post-launch support, we deploy a rigorous methodology to ensure the performance of your application.
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
                                        <h3 className="feature-title">Analysis & Strategy</h3>
                                        <p className="feature-description">We start with an in-depth study of your goals to develop a precise technical and functional specifications document.</p>
                                        <a href="https://www.hostino.ma/documents/cahier-des-charges-application-mobile.docx" className="feature-cta">
                                            <span>Free Template</span>
                                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <path d="M5 12h14M12 5l7 7-7 7" />
                                            </svg>
                                        </a>
                                    </div>
                                </article>

                                {/* ... Other method cards simplified for brevity in this response but I should include them all in real implementation ... */}
                                {/* I will include them now */}
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
                                        <h3 className="feature-title">Planning & Costing</h3>
                                        <p className="feature-description">Rigorous resource estimation and establishment of a detailed schedule to meet your deadlines.</p>
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
                                        <h3 className="feature-title">UI/UX Design</h3>
                                        <p className="feature-description">Our designers imagine a fluid user experience and high-end interfaces for your application.</p>
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
                                        <h3 className="feature-title">Agile Development</h3>
                                        <p className="feature-description">Business coding and integration of key features by our experts in mobile technologies (React Native, Flutter, Native).</p>
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
                                        <h3 className="feature-title">QA & Deployment</h3>
                                        <p className="feature-description">Intensive QA phase followed by optimized publication on the App Store and Google Play.</p>
                                    </div>
                                </article>

                                <article className="feature-card">
                                    <div className="feature-icon">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                            <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                                        </svg>
                                    </div>
                                    <div className="feature-content">
                                        <h3 className="feature-title">Optimization & Maintenance</h3>
                                        <p className="feature-description">Permanent technical support to ensure the stability, security, and evolution of your digital product.</p>
                                        <Link href="/en/maintenance-website-morocco/" className="feature-cta">
                                            <span>Mobile App Maintenance</span>
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
                                        <span className="timeline-label">Estimated duration</span>
                                        <h3 className="timeline-title">Project Timeline</h3>
                                    </div>
                                    <div className="timeline-badge">
                                        <span className="badge-value">2-3</span>
                                        <span className="badge-unit">months</span>
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
                                            <span className="timeline-item-title">Project Validation</span>
                                            <span className="timeline-item-duration">1 week</span>
                                        </div>
                                        <div className="timeline-check">
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                                <path d="M20 6L9 17l-5-5" />
                                            </svg>
                                        </div>
                                    </div>

                                    {/* Timeline items similar to FR but translated */}
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
                                            <span className="timeline-item-duration">2-3 weeks</span>
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
                                            <span className="timeline-item-title">Development</span>
                                            <span className="timeline-item-duration">1-2 months</span>
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
                                            <span className="timeline-item-duration">2 weeks</span>
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
                                            <span className="timeline-item-title">Official Launch</span>
                                            <span className="timeline-item-duration">Go Live 🚀</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="methodology-progress">
                                    <div className="progress-info">
                                        <span>Progress</span>
                                        <span className="progress-value">Ready to start</span>
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

                                <Link href="/en/contact/" className="methodology-cta">
                                    <span>Start my project</span>
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
                            <h2 className="section-title"> Mobile Development <span className="highlight">Investment</span> in Morocco </h2>
                            <div className="pricing-text">
                                <p> What is the cost to design a mobile app in Morocco? This is a major question for every project holder. The <Link href="/en/contact/" id="style-wKBTF" className="style-wKBTF">overall cost</Link> adjusts according to several variables: technical architecture, custom design, complexity of algorithms and API integrations. </p>
                                <p> For a <strong>Startup Solution (MVP)</strong>, plan an optimized budget between <strong>15,000 and 35,000 DH</strong>. This ultra-agile approach allows you to confront your idea with the market in record time, capture your first users and <span className="highlight-text">validate your Proof of Concept without major financial risk</span>. </p>
                                <p> A <strong>scalable mobile architecture</strong> integrating advanced features and a high-performance backend now starts <strong>from 45,000 DH</strong>. This pack includes deployment on both stores, an intuitive administration interface and a technical base ready for growth. </p>
                                <p> <strong>Strategic UI/UX Design</strong> is accessible from <strong>3,500 DH</strong>. We design immersive user journeys and high-fidelity mockups that maximize engagement, ensuring your application stands out from the first second. </p>
                            </div> <Link href="/en/contact/" className="cta-button"> <span>Calculate your custom quote</span> <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
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
                                        <h3 className="card-title">Strategic Design</h3>
                                        <p className="card-description">User journey, modern UI and rapid interactive prototyping</p>
                                        <div className="card-price"> <span className="price-range">From 3,500</span> <span className="price-currency">DH</span> </div>
                                        <ul className="card-details">
                                            <li> <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <polyline points="20 6 9 17 4 12" />
                                            </svg> Wireframes &amp; Mockups </li>
                                            <li> <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <polyline points="20 6 9 17 4 12" />
                                            </svg> Figma Prototype </li>
                                            <li> <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <polyline points="20 6 9 17 4 12" />
                                            </svg> Design System </li>
                                            <li> <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <polyline points="20 6 9 17 4 12" />
                                            </svg> Exported Assets </li>
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
                                        <h3 className="card-title">Agile MVP Solution</h3>
                                        <p className="card-description">Express deployment of your key features for validation</p>
                                        <div className="card-price"> <span className="price-range">From 15,000</span> <span className="price-currency">DH</span> </div>
                                        <ul className="card-details">
                                            <li> <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <polyline points="20 6 9 17 4 12" />
                                            </svg> Essential Features </li>
                                            <li> <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <polyline points="20 6 9 17 4 12" />
                                            </svg> 1 to 2 Platforms </li>
                                            <li> <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <polyline points="20 6 9 17 4 12" />
                                            </svg> Basic Backend </li>
                                            <li> <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <polyline points="20 6 9 17 4 12" />
                                            </svg> Fast Launch </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="pricing-card">
                                    <div className="card-icon"> <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                        <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
                                        <line x1="12" y1="18" x2="12.01" y2="18" />
                                    </svg> </div>
                                    <div className="card-content">
                                        <h3 className="card-title">Full-Stack Project</h3>
                                        <p className="card-description">Robust, scalable and connected application for enterprise</p>
                                        <div className="card-price"> <span className="price-range">From 45,000</span> <span className="price-currency">DH</span> </div>
                                        <ul className="card-details">
                                            <li> <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <polyline points="20 6 9 17 4 12" />
                                            </svg> iOS + Android </li>
                                            <li> <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <polyline points="20 6 9 17 4 12" />
                                            </svg> Custom Backend </li>
                                            <li> <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <polyline points="20 6 9 17 4 12" />
                                            </svg> Admin Panel </li>
                                            <li> <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <polyline points="20 6 9 17 4 12" />
                                            </svg> Advanced Integrations </li>
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
                        <h2 className="section-title-premium text-center">Mobile App Creation in Morocco</h2>
                    </div>
                    <FAQSection
                        showTitle={false}
                        data={[
                            {
                                question: "1. What is mobile app creation and what is it for in Morocco?",
                                answer: "Mobile app creation consists of designing, developing, and publishing an application for smartphones and tablets (Android and/or iOS). For a company in Morocco, a mobile app allows customer loyalty, increased brand visibility, automation of certain services (reservations, payments, orders) and offering a modern user experience adapted to local mobile usage."
                            },
                            {
                                question: "2. Why create a mobile app in Morocco rather than just a website?",
                                answer: "A website is essential, but a mobile app offers additional benefits: Direct access from the phone without a browser, Push notifications to communicate with clients, Better performance and user experience, Offline operation for certain features. In Morocco, where smartphone usage is very high, a mobile app allows you to reach users more effectively than a website alone."
                            },
                            {
                                question: "3. What types of mobile apps can you develop in Morocco?",
                                answer: "We develop several types of mobile apps: Showcase apps for companies and brands, E-commerce and marketplace apps, Booking apps (hotels, rentals, services), Professional apps (management, CRM, light ERP), Educational and e-learning apps, Delivery and local service apps. Each project is custom-designed according to client needs and the Moroccan market."
                            },
                            {
                                question: "4. Do you develop Android and iOS apps?",
                                answer: "Yes. We develop: Android apps (Google Play Store), iOS apps (Apple App Store), Cross-platform apps (a single code base for Android and iOS). The choice depends on your budget, your target, and your business objectives."
                            },
                            {
                                question: "5. What is the price of creating a mobile app in Morocco?",
                                answer: "The cost of creating a mobile app in Morocco depends on several factors: App complexity, Number of features, Custom UI/UX design or standard, Android, iOS or both, External integrations (payment, GPS, API, etc.). In general, the price can vary from a few thousand dirhams to several tens of thousands of dirhams depending on the project. A precise quote is provided after analyzing your needs."
                            },
                            {
                                question: "6. How long does it take to develop a mobile app?",
                                answer: "Development time varies by project: Simple app: 3 to 5 weeks, Medium app: 1 to 2 months, Complex app: 3 months or more. We respect clear deadlines with a detailed schedule for each stage of development."
                            },
                            {
                                question: "7. Do you handle publication on Google Play and the App Store?",
                                answer: "Yes. We handle: Preparation of publication files, App Store Optimization (ASO), Submission to Google Play Store and Apple App Store, Support for creating developer accounts. You receive an app ready to be downloaded by your users."
                            },
                            {
                                question: "8. Do you offer maintenance and updates for mobile apps?",
                                answer: "Yes. After launch, we offer services for: Technical maintenance, Bug fixes, Security updates, Adding new features. Maintenance ensures the stability and longevity of your mobile app."
                            },
                            {
                                question: "9. Is a mobile app suitable for small businesses in Morocco?",
                                answer: "Absolutely. Small Moroccan businesses (restaurants, salons, agencies, local shops) can greatly benefit from a mobile app to: Manage orders and reservations, Communicate with their clients, Differentiate themselves from the competition. There are solutions adapted to small budgets with targeted features."
                            },
                            {
                                question: "10. Will my mobile app be secure?",
                                answer: "Yes. Security is a priority: User data protection, Secure connections (HTTPS, authentication), Compliance with best development practices, Database security. We implement security standards adapted to modern mobile applications."
                            },
                            {
                                question: "11. Can I track the progress of my mobile app project?",
                                answer: "Yes. You are involved at every stage: Validation of specifications, Mockups and design, Progressive development, Tests before publication. You have total visibility on the project's evolution."
                            },
                            {
                                question: "12. Do you create custom mobile apps in Morocco?",
                                answer: "Yes. Each application is developed custom, depending on: Your business sector, Your business goals, Your target in Morocco or internationally. We do not offer generic solutions without adaptation."
                            },
                            {
                                question: "13. Can a mobile app be linked to an existing website?",
                                answer: "Yes. Your mobile app can be connected to: An existing website, A database, An administration back-office. This allows centralized management and better consistency between your digital tools."
                            },
                            {
                                question: "14. Do you optimize apps for the Moroccan market?",
                                answer: "Yes. We take into account: The habits of Moroccan users, The language (French, Arabic, Darija), Local payment methods, Performance on the most used smartphones in Morocco. The goal is an application truly adapted to the local market."
                            },
                            {
                                question: "15. How to start a mobile app creation project in Morocco?",
                                answer: "To start: Contact us with your idea, we analyze your needs, we propose a technical solution and a quote. Development begins after validation. We accompany you from the idea to the final publication."
                            }
                        ]}
                    />
                </div>
            </section>

            {/* SEO Optimized Internal Link CTA Section */}
            <section className="py-24 bg-gradient-to-br from-[#022545] to-[#04335d] text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-primary-500 rounded-full blur-[150px] opacity-10"></div>
                <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-blue-600 rounded-full blur-[150px] opacity-10"></div>

                <div className="container px-4 mx-auto max-w-5xl text-center relative z-10">
                    <div className="space-y-8">
                        <span className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-sm font-bold tracking-wider text-primary-300 mb-4">
                            WEB DESIGN AGENCY IN MOROCCO
                        </span>
                        <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
                            Boost your business with an <span className="text-primary-400">exceptional website</span>
                        </h2>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                            Your application deserves a powerful digital ecosystem. Get a website that converts your visitors into loyal customers in Morocco.
                        </p>
                        <div className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-6">
                            <Link href="/en/website-creation-morocco/" className="bg-primary-500 hover:bg-primary-600 text-white px-10 py-5 rounded-xl font-bold text-xl transition-all shadow-xl shadow-primary-900/40 flex items-center gap-3 group">
                                Website Creation Morocco
                                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <div className="flex flex-col items-center sm:items-start text-left">
                                <p className="text-sm text-gray-400 font-medium italic">Free technical audit</p>
                                <a href="tel:+212663711164" className="text-white hover:text-primary-400 font-bold text-lg flex items-center gap-2 transition-colors">
                                    +212 663-711164
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div >
    )
}
