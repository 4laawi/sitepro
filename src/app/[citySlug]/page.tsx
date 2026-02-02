import type { Metadata } from 'next'
import CityLandingTemplate from '@/components/CityLandingTemplate'

const CITIES = [
    'Tanger', 'Rabat', 'Kénitra', 'Tétouan', 'Larache', 'Asilah', 'Chefchaouen',
    'Al hoceima', 'Nador', 'Casablanca', 'Khouribga', 'Fes', 'Meknès', 'Ifrane',
    'Marrakech', 'Essaouira', 'Benguerir', 'Agadir', 'Laayoune', 'Dakhla'
]

export function generateStaticParams() {
    return CITIES.map((city) => ({
        citySlug: `creation-site-web-${city.toLowerCase().replace(/\s+/g, '-')}`
    }))
}

type CityPageProps = {
    params: Promise<{ citySlug: string }>
}

export async function generateMetadata({ params }: CityPageProps): Promise<Metadata> {
    const { citySlug } = await params
    const cityPart = citySlug.replace('creation-site-web-', '')
    const city = CITIES.find(c => c.toLowerCase().replace(/\s+/g, '-') === cityPart) || cityPart
    const cityCap = city.charAt(0).toUpperCase() + city.slice(1)

    return {
        title: `Création site web ${cityCap} | Sitepro.ma – Sites ultra-performants & SEO`,
        description: `Sitepro.ma crée votre site web à ${cityCap} 100 % optimisé SEO & IA pour booster votre visibilité. Design moderne, rapidité extrême et résultats garantis. ☎️ 06 63 71 11 64`,
        alternates: { canonical: `https://www.sitepro.ma/${citySlug}` },
        openGraph: {
            title: `Création site web ${cityCap} | Sitepro.ma – Sites ultra-performants & SEO`,
            description: `Sitepro.ma crée votre site web à ${cityCap} 100 % optimisé SEO & IA. Design moderne et rapidité extrême.`,
            url: `https://www.sitepro.ma/${citySlug}`,
            siteName: 'Sitepro.ma',
            images: [{
                url: 'https://www.sitepro.ma/og-image.jpg',
                width: 1200,
                height: 630,
                alt: `Création site web ${cityCap} - Sitepro.ma`,
            }],
            locale: 'fr_MA',
            type: 'website',
        },
    }
}

export default async function CityPage({ params }: CityPageProps) {
    const { citySlug } = await params
    const cityPart = citySlug.replace('creation-site-web-', '')
    const city = CITIES.find(c => c.toLowerCase().replace(/\s+/g, '-') === cityPart) || cityPart

    return <CityLandingTemplate city={city} />
}
