import type { Metadata } from 'next'
import Link from 'next/link'
import ClientMotionWrapper from '@/components/ClientMotionWrapper'
import Script from 'next/script'
import PortfolioInteractive from '@/components/PortfolioInteractive'
import { ArrowRight } from 'lucide-react'


export const metadata: Metadata = {
    title: 'Portfolio Web Agency Morocco | Our Digital Achievements',
    description:
        'Discover our web agency portfolio in Morocco. E-commerce projects, showcase sites, and high-performance custom solutions. Proof of our expertise and results.',
    alternates: {
        canonical: 'https://sitepro.ma/en/portfolio',
        languages: {
            'fr-MA': 'https://sitepro.ma/portfolio',
            'en-MA': 'https://sitepro.ma/en/portfolio',
        },
    },
    keywords: ['portfolio web agency morocco', 'web achievements morocco', 'web agency projects'],
    openGraph: {
        title: 'Portfolio Web Agency Morocco | Our Digital Achievements',
        description: 'Selection of modern and high-performance projects by Sitepro.',
        url: 'https://sitepro.ma/en/portfolio',
        type: 'website',
    },
}

const items = [
    {
        id: 1,
        title: 'Mama Fatma Store',
        category: 'E‑commerce',
        description:
            'Modern online store with product management, optimized SEO, and high performance.',
        image: '/Screenshot 2026-01-20 at 10.04.03 PM.webp',
        tags: ['Next.js', 'Supabase', 'SEO'],
        link: 'https://mamafatma.ma/',
        caseStudy: '/portfolio/case-studies/mama-fatma-store',
        scrollOnHover: true,
    },
    {
        id: 2,
        title: 'EUN Cars – Car Rental',
        category: 'Rental',
        description:
            'Online booking system for car rental in Laayoune with intuitive interface.',
        image: '/Screenshot 2026-01-20 at 10.03.01 PM.webp',
        tags: ['React', 'Vercel', 'Booking'],
        link: 'https://eun-cars.vercel.app/',
        scrollOnHover: true,
    },
    {
        id: 3,
        title: 'Le Grand Bazar Marrakech',
        category: 'Restaurant',
        description: 'Restaurant website with online table reservation.',
        image: '/restau.png',
        tags: ['Next.js', 'Reservation', 'Marrakech'],
        link: 'https://legrandbazarmarrakech.com/fr/',
        caseStudy: '/portfolio/case-studies/le-grand-bazar',
    },
    {
        id: 4,
        title: 'Tamraght Paradise',
        category: 'Airbnb Rental',
        description: 'Luxury listing with calendar and booking.',
        image: '/Screenshot 2026-01-21 at 6.07.54 PM.webp',
        tags: ['React', 'Firebase', 'Calendar'],
        link: 'https://tamraght-paradise.web.app/',
        scrollOnHover: true,
    },
    {
        id: 5,
        title: 'Cars Rental Business',
        category: 'Rental',
        description: 'Simple and effective site for car rental.',
        image: '/CAR1.png',
        tags: ['React', 'Firebase'],
        link: 'https://cars-6431a.web.app/',
        hideFromAll: true,
    },
    {
        id: 6,
        title: 'Atlas Touareg Real Estate',
        category: 'Real Estate',
        description: "Real estate agency with property search.",
        image: '/agence.png',
        tags: ['React', 'Firebase', 'Search'],
        link: 'https://atlastouareg.com/',
    },
    {
        id: 7,
        title: 'Centre Dentaire Bentouda',
        category: 'Medical Cabinet',
        description:
            'Dental cabinet in Agadir with polished visuals, optimized SEO, and fast loading.',
        image: '/cabinet.png',
        tags: ['WordPress', 'SEO', 'Performance'],
        link: 'https://centredentairebentouda.com/',
    },
    {
        id: 8,
        title: 'Rabat Rentals',
        category: 'Rental',
        description: 'Premium car rental agency in Rabat with luxury fleet and professional chauffeur service.',
        image: '/Screenshot 2026-01-21 at 6.24.54 PM.webp',
        tags: ['Next.js', 'Vercel', 'Premium Service'],
        link: 'https://rabat-rentals.vercel.app/',
        scrollOnHover: true,
    },
    {
        id: 9,
        title: 'Rabat Rental',
        category: 'Rental',
        description: 'Car rental in Rabat with online booking system and 24/7 assistance.',
        image: '/rabat-rental.webp',
        tags: ['React', 'Vercel', '24/7 Booking'],
        link: 'https://rabat-rental.vercel.app/',
    },
    {
        id: 10,
        title: 'Essouira Surf House Club',
        category: 'Rental',
        description: 'Modern website for surf club in Essaouira with clean design and optimal user experience.',
        image: '/sitepro_ma_creation_de_site_web_maroc.webp',
        tags: ['React', 'Netlify', 'Modern Design'],
        link: 'https://surf11.netlify.app/',
        hideFromAll: true,
    },
    {
        id: 11,
        title: 'Trevi Rent Car Location',
        category: 'Rental',
        description: 'Professional car rental site with online booking system and fleet management.',
        image: '/Screenshot 2026-01-21 at 6.27.59 PM.webp',
        tags: ['Next.js', 'Booking', 'Car Rental'],
        link: 'https://www.trevirentcarlocation.ma/',
        scrollOnHover: true,
    },
    {
        id: 12,
        title: 'Apex Dental Clinic',
        category: 'Medical Cabinet',
        description: 'Modern website for a premium dental clinic with clean design and smooth navigation.',
        image: '/Screenshot 2026-01-20 at 11.54.18 PM.webp',
        tags: ['Next.js', 'SEO', 'Premium Design'],
        link: 'https://apexdental.ma/',
        scrollOnHover: true,
    },
    {
        id: 13,
        title: 'marocMaroc',
        category: 'E‑commerce',
        description:
            'Premium e-commerce store specializing in luxury Moroccan beauty rituals and cosmetics.',
        image: '/Screenshot 2026-01-20 at 9.52.32 PM (1).jpg',
        tags: ['Next.js', 'E-commerce', 'Luxury'],
        link: 'https://www.marocmaroc.ma/',
        caseStudy: '/portfolio/case-studies/maroc-maroc',
        scrollOnHover: true,
    },
    {
        id: 14,
        title: 'Car Hire Agadir',
        category: 'Rental',
        description: 'Premium car rental service in Agadir with a wide choice of vehicles and 24/7 assistance.',
        image: '/Screenshot 2026-01-21 at 6.43.33 PM.webp',
        tags: ['React', 'Agadir', 'Car Rental'],
        link: 'https://car-hire-agadir.com/',
        scrollOnHover: true,
    },
    {
        id: 15,
        title: 'Power Delivery',
        category: 'Delivery',
        description: 'Innovative logistics solution in Morocco with real-time parcel tracking and dedicated portal for businesses.',
        image: '/Screenshot 2026-01-21 at 6.58.12 PM.webp',
        tags: ['Next.js', 'Logistics', 'Tracking'],
        link: 'https://power-delivery.ma/',
        scrollOnHover: true,
    },
    {
        id: 16,
        title: 'MetaLivraison',
        category: 'Delivery',
        description: 'Ultra-modern Moroccan delivery platform with fluid animations and immersive user experience.',
        image: '/Screenshot 2026-01-21 at 6.51.53 PM.webp',
        tags: ['Next.js', 'Framer Motion', 'Logistics'],
        link: 'https://metalivraison.ma/',
        scrollOnHover: true,
    },
    {
        id: 17,
        title: 'LondonFood.ma',
        category: 'Restaurant',
        description: 'Vibrant restaurant site with polished graphic design, allowing simple and intuitive online ordering.',
        image: '/screencapture-londonfood-ma-2025.webp',
        tags: ['Next.js', 'Restaurant', 'E-commerce'],
        link: 'https://londonfood.ma/',
        scrollOnHover: true,
    },
]

const categories = [
    'All',
    'E‑commerce',
    'Rental',
    'Restaurant',
    'Airbnb Rental',
    'Real Estate',
    'Medical Cabinet',
    'Delivery',
]

export default function PortfolioPageEn() {
    return (
        <section className="cv-auto">
            <nav aria-label="Breadcrumb" className="container mx-auto px-4 pt-4 text-sm text-gray-600">
                <Link href="/en/" className="hover:text-primary-700">Home</Link>
                <span className="mx-2">/</span>
                <span>Portfolio</span>
            </nav>
            <Script id="ld-breadcrumbs-en" type="application/ld+json" strategy="afterInteractive">
                {JSON.stringify({
                    '@context': 'https://schema.org',
                    '@type': 'BreadcrumbList',
                    itemListElement: [
                        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://sitepro.ma/en/' },
                        { '@type': 'ListItem', position: 2, name: 'Portfolio', item: 'https://sitepro.ma/en/portfolio' }
                    ]
                })}
            </Script>
            {/* Hero */}
            <div className="bg-gradient-to-b from-white to-blue-50/40">
                <div className="container mx-auto px-4 py-16 lg:py-24">
                    <ClientMotionWrapper
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-center max-w-4xl mx-auto"
                    >
                        <span className="badge-gradient">
                            Portfolio
                        </span>
                        <h1 className="hero-title-premium mt-4">Web Agency Portfolio Morocco – Our Best Projects</h1>
                        <p className="hero-subtitle-premium mx-auto mt-3">
                            Explore our <strong className="text-gray-900">web agency portfolio morocco</strong> and discover modern, high-performance, and result-oriented interfaces.
                        </p>
                    </ClientMotionWrapper>
                </div>
            </div>

            {/* Content */}
            <div className="container mx-auto px-4 py-14 border-b border-gray-100">
                <PortfolioInteractive items={items} categories={categories} lang="EN" />

                <div className="text-center mt-16 pb-16">
                    <p className="text-gray-600 mb-4">Want a similar project? Let's talk.</p>
                    <a href={`https://wa.me/212663711164`} className="btn-primary inline-flex items-center gap-2">
                        Start a project
                    </a>
                </div>
            </div>

            {/* SEO Optimized Internal Link CTA Section */}
            <section className="py-24 bg-gradient-to-br from-[#022545] to-[#04335d] text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-primary-500 rounded-full blur-[150px] opacity-10"></div>
                <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-blue-600 rounded-full blur-[150px] opacity-10"></div>

                <div className="container px-4 mx-auto max-w-5xl text-center relative z-10">
                    <ClientMotionWrapper
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <span className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-sm font-bold tracking-wider text-primary-300 mb-4">
                            WEB DESIGN AGENCY IN MOROCCO
                        </span>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight">
                            A website that <span className="text-primary-400">generates customers</span> and dominates Google
                        </h2>
                        <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                            Discover how our expertise in <strong>SEO</strong> and web performance transforms your digital presence in Morocco into a lead machine.
                        </p>
                        <div className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-6">
                            <Link href="/en/website-creation-morocco/" className="bg-primary-500 hover:bg-primary-600 text-white px-10 py-5 rounded-xl font-bold text-xl transition-all shadow-xl shadow-primary-900/40 flex items-center gap-3 group">
                                Website Creation Morocco
                                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <div className="flex flex-col items-center sm:items-start">
                                <p className="text-sm text-gray-400 font-medium italic">Free technical audit</p>
                                <a href="tel:+212663711164" className="text-white hover:text-primary-400 font-bold text-lg flex items-center gap-2 transition-colors">
                                    +212 663-711164
                                </a>
                            </div>
                        </div>
                    </ClientMotionWrapper>
                </div>
            </section>
        </section>
    )
}
