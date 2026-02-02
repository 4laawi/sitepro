import type { Metadata } from 'next'
import CityLandingTemplate from '@/components/CityLandingTemplate'

export const metadata: Metadata = {
    title: 'Création Site Web au Maroc | Prix & Devis Gratuit',
    description: 'Création site web au Maroc sur mesure. Sites professionnels, rapides et optimisés SEO. Prix clairs, accompagnement complet et devis gratuit.',
    alternates: { canonical: 'https://www.sitepro.ma/creation-site-web-maroc/' },
    openGraph: {
        title: 'Création Site Web au Maroc | Prix & Devis Gratuit',
        description: 'Création site web au Maroc sur mesure. Sites professionnels, rapides et optimisés SEO. Prix clairs, accompagnement complet et devis gratuit.',
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
