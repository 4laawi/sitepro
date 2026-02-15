import type { Metadata } from 'next'
import CityLandingTemplate from '@/components/CityLandingTemplate'

export const metadata: Metadata = {
    title: 'Création Site Web Maroc | Agence Web & Devis Gratuit dès 2500dh',
    description: 'Création de site web au Maroc sur mesure, professionnel et pas cher (à partir de 2500dh). Agence web experte en référencement SEO. Devis gratuit et immédiat.',
    alternates: {
        canonical: 'https://sitepro.ma/creation-site-web-maroc',
    },
    keywords: [
        'création site web maroc',
        'création site internet maroc',
        'agence web maroc',
        'création site e-commerce maroc',
        'prix site web maroc',
        'développeur web maroc',
    ],
    openGraph: {
        title: 'Création Site Web au Maroc | Agence Web Sitepro.ma',
        description: 'Agence web leader au Maroc pour la création de sites internet professionnels, e-commerce et vitrine. Solutions performantes, sécurisées et optimisées SEO.',
        url: 'https://www.sitepro.ma/creation-site-web-maroc/',
        siteName: 'Sitepro.ma',
        images: [{
            url: 'https://www.sitepro.ma/og-image.jpg',
            width: 1200,
            height: 630,
            alt: 'Création Site Web au Maroc - Sitepro.ma',
        }],
        locale: 'fr_MA',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Création Site Web au Maroc | Prix & Devis Gratuit',
        description: 'Création site web au Maroc sur mesure. Sites professionnels, rapides et optimisés SEO. Prix clairs, accompagnement complet et devis gratuit.',
        images: ['https://www.sitepro.ma/og-image.jpg'],
        creator: '@sitepro_ma',
    },
}

export default function CreationSiteWebMarocPage() {
    return <CityLandingTemplate city="Maroc" isMainMaroc={true} />
}
