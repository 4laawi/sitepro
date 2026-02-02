import type { Metadata } from 'next'
import CityLandingTemplate from '@/components/CityLandingTemplate'

export const metadata: Metadata = {
    title: 'Création site web Maroc | Sitepro.ma – Sites ultra-performants & SEO',
    description: 'Sitepro.ma crée votre site web 100 % optimisé SEO & IA pour booster votre visibilité au Maroc. Design moderne, rapidité extrême et résultats garantis. ☎️ 06 63 71 11 64',
    alternates: { canonical: 'https://www.sitepro.ma/creation-site-web-maroc/' },
    openGraph: {
        title: 'Création site web Maroc | Sitepro.ma – Sites ultra-performants & SEO',
        description: 'Sitepro.ma crée votre site web 100 % optimisé SEO & IA pour booster votre visibilité au Maroc. Design moderne, rapidité extrême et résultats garantis. ☎️ 06 63 71 11 64',
        url: 'https://www.sitepro.ma/creation-site-web-maroc/',
        siteName: 'Sitepro.ma',
        images: [{
            url: 'https://www.sitepro.ma/og-image.jpg',
            width: 1200,
            height: 630,
            alt: 'Création site web Maroc - Sitepro.ma',
        }],
        locale: 'fr_MA',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Création site web Maroc | Sitepro.ma – Sites ultra-performants & SEO',
        description: 'Sitepro.ma crée votre site web 100 % optimisé SEO & IA pour booster votre visibilité au Maroc. Design moderne, rapidité extrême et résultats garantis. ☎️ 06 63 71 11 64',
        images: ['https://www.sitepro.ma/og-image.jpg'],
        creator: '@sitepro_ma',
    },
}

export default function CreationSiteWebMarocPage() {
    return <CityLandingTemplate city="Maroc" isMainMaroc={true} />
}
