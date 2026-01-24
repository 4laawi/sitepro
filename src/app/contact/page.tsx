import React from 'react'
import type { Metadata } from 'next'
import ContactSection from '@/components/ContactSection'
import Script from 'next/script'

export const metadata: Metadata = {
    title: 'Contactez Sitepro.ma - Votre Agence Digitale au Maroc',
    description: 'Besoin d\'un site web ou d\'une stratégie SEO ? Contactez Sitepro.ma. Notre équipe est à votre disposition pour donner vie à vos projets digitaux au Maroc.',
    keywords: 'contact agence web maroc, devis création site web, agence digitale marrakech, contact sitepro.ma',
    alternates: { canonical: '/contact' },
    openGraph: {
        title: 'Contactez Sitepro.ma - Expertise Digitale au Maroc',
        description: 'Parlez-nous de votre projet et obtenez une consultation gratuite.',
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
        </>
    )
}
