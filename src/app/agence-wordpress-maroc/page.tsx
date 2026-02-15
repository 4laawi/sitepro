import type { Metadata } from 'next'
import WordpressLandingTemplate from '@/components/WordpressLandingTemplate'

export const metadata: Metadata = {
    title: 'Agence WordPress Maroc | Création Site Internet & Expert WP',
    description: 'Agence WordPress experte au Maroc. Création de sites internet sur mesure, thèmes premium, plugins pro. Devis gratuit pour votre projet web.',
    alternates: {
        canonical: 'https://sitepro.ma/agence-wordpress-maroc',
    },
    keywords: [
        'agence wordpress maroc',
        'expert wordpress maroc',
        'création site wordpress',
        'développeur wordpress',
        'maintenance site wordpress',
        'refonte site wordpress',
        'thème wordpress sur mesure',
        'woocommerce maroc'
    ],
    openGraph: {
        title: 'Agence WordPress Maroc | Création Site Internet & Expert WP',
        description: 'Agence WordPress experte au Maroc. Création de sites internet sur mesure, thèmes premium, plugins pro. Devis gratuit pour votre projet web.',
        url: 'https://sitepro.ma/agence-wordpress-maroc',
        siteName: 'Sitepro.ma',
        images: [{
            url: 'https://sitepro.ma/og-image.jpg', // Using existing OG image for now, can be updated if user provides specific WP one
            width: 1200,
            height: 630,
            alt: 'Agence WordPress Maroc - Sitepro.ma',
        }],
        locale: 'fr_MA',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Agence WordPress Maroc | Création Site Internet & Expert WP',
        description: 'Agence WordPress experte au Maroc. Création de sites internet sur mesure, thèmes premium, plugins pro. Devis gratuit pour votre projet web.',
        images: ['https://sitepro.ma/og-image.jpg'],
        creator: '@sitepro_ma',
    },
}

export default function AgenceWordpressMarocPage() {
    return <WordpressLandingTemplate lang="FR" />
}
