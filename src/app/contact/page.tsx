import React from 'react'
import type { Metadata } from 'next'
import ContactSection from '@/components/ContactSection'
import Script from 'next/script'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
    title: 'Contact Agence Web Maroc | Devis Gratuit & Consultation',
    description: 'Contact agence web maroc. Parlons de votre projet de création de site web ou SEO. Consultation gratuite, devis express et accompagnement personnalisé.',
    keywords: 'contact agence web maroc, devis création site web maroc, agence digitale marrakech, contact sitepro',
    alternates: { canonical: '/contact' },
    openGraph: {
        title: 'Contact Agence Web Maroc | Devis Gratuit & Consultation',
        description: 'Parlez-nous de votre projet de création de site web ou SEO au Maroc et obtenez une consultation gratuite.',
        url: 'https://www.sitepro.ma/contact',
    },
}

export default function ContactPage() {
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'ContactPage',
        'name': 'Page de Contact Sitepro.ma',
        'description': 'Informations de contact pour l\'agence web Sitepro.ma au Maroc.',
        'url': 'https://www.sitepro.ma/contact',
        'contactPoint': {
            '@type': 'ContactPoint',
            'telephone': '+212663711164',
            'contactType': 'customer support',
            'areaServed': 'MA',
            'availableLanguage': ['French', 'Arabic']
        }
    }

    return (
        <>
            <Script id="contact-schema" type="application/ld+json">
                {JSON.stringify(jsonLd)}
            </Script>
            <div className="pt-24"> {/* Add padding top for header offset */}
                <ContactSection lang="FR" />
            </div>

            {/* SEO Optimized Internal Link CTA Section */}
            <section className="py-24 bg-gradient-to-br from-[#022545] to-[#04335d] text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-primary-500 rounded-full blur-[150px] opacity-10"></div>
                <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-blue-600 rounded-full blur-[150px] opacity-10"></div>

                <div className="container px-4 mx-auto max-w-5xl text-center relative z-10">
                    <div className="space-y-8">
                        <span className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-sm font-bold tracking-wider text-primary-300 mb-4">
                            AGENCE DE CRÉATION DE SITE WEB AU MAROC
                        </span>
                        <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
                            Votre succès digital commence par un <span className="text-primary-400">site web d&apos;exception</span>
                        </h2>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                            Ne vous contentez pas d&apos;un simple site. Obtenez une machine à leads optimisée pour Google et conçue pour convertir.
                        </p>
                        <div className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-6">
                            <Link href="/creation-site-web-maroc/" className="bg-primary-500 hover:bg-primary-600 text-white px-10 py-5 rounded-xl font-bold text-xl transition-all shadow-xl shadow-primary-900/40 flex items-center gap-3 group">
                                Agence création site web maroc
                                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <div className="flex flex-col items-center sm:items-start text-left">
                                <p className="text-sm text-gray-400 font-medium italic">Audit technique offert</p>
                                <a href="tel:+212663711164" className="text-white hover:text-primary-400 font-bold text-lg flex items-center gap-2 transition-colors">
                                    +212 663-711164
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
