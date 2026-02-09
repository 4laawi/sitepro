import React from 'react'
import type { Metadata } from 'next'
import ContactSection from '@/components/ContactSection'
import Script from 'next/script'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
    title: 'Contact Web Agency Morocco | Free Quote & Consultation',
    description: 'Contact Sitepro.ma web agency Morocco. Let\'s discuss your website creation or SEO project. Free consultation, express quote and personalized support.',
    keywords: 'contact web agency morocco, website creation quote morocco, digital agency marrakech, contact sitepro',
    alternates: {
        canonical: 'https://sitepro.ma/en/contact',
        languages: {
            'fr-MA': 'https://sitepro.ma/contact',
            'en-MA': 'https://sitepro.ma/en/contact',
        },
    },
    openGraph: {
        title: 'Contact Web Agency Morocco | Free Quote & Consultation',
        description: 'Talk to us about your website creation or SEO project in Morocco and get a free consultation.',
        url: 'https://sitepro.ma/en/contact',
    },
}

export default function ContactPage() {
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'ContactPage',
        'name': 'Contact Page Sitepro.ma',
        'description': 'Contact information for Sitepro.ma web agency in Morocco.',
        'url': 'https://sitepro.ma/en/contact',
        'contactPoint': {
            '@type': 'ContactPoint',
            'telephone': '+212663711164',
            'contactType': 'customer support',
            'areaServed': 'MA',
            'availableLanguage': ['French', 'Arabic', 'English']
        }
    }

    return (
        <>
            <Script id="contact-schema-en" type="application/ld+json">
                {JSON.stringify(jsonLd)}
            </Script>
            <div className="pt-24"> {/* Add padding top for header offset */}
                <ContactSection lang="EN" />
            </div>

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
                            Your digital success starts with an <span className="text-primary-400">exceptional website</span>
                        </h2>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                            Don't settle for a simple site. Get a lead machine optimized for Google and designed to convert.
                        </p>
                        <div className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-6">
                            <Link href="/en/website-creation-morocco/" className="bg-primary-500 hover:bg-primary-600 text-white px-10 py-5 rounded-xl font-bold text-xl transition-all shadow-xl shadow-primary-900/40 flex items-center gap-3 group">
                                Web Design Agency Morocco
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
        </>
    )
}
