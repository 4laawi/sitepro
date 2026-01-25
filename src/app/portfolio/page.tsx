import type { Metadata } from 'next'
import Link from 'next/link'
import ClientMotionWrapper from '@/components/ClientMotionWrapper'
import Script from 'next/script'
import PortfolioInteractive from '@/components/PortfolioInteractive'
import { FolderOpen } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Portfolio | Sitepro.ma',
  description:
    'Découvrez nos projets récents: e‑commerce, restaurants, locations, immobilier et plus. UI moderne, performances et résultats mesurables.',
  alternates: { canonical: '/portfolio' },
  keywords: ['portfolio site web maroc', 'réalisations web', 'agence web maroc'],
  openGraph: {
    title: 'Portfolio | Sitepro.ma',
    description: 'Sélection de projets modernes et performants.',
    url: 'https://www.sitepro.ma/portfolio',
    type: 'website',
  },
}

const items = [
  {
    id: 1,
    title: 'Mama Fatma Store',
    category: 'E‑commerce',
    description:
      'Boutique en ligne moderne avec gestion produits, SEO optimisé et performances élevées.',
    image: '/Screenshot 2026-01-20 at 10.04.03 PM.webp',
    tags: ['Next.js', 'Supabase', 'SEO'],
    link: 'https://mamafatma.ma/',
    caseStudy: '/portfolio/case-studies/mama-fatma-store',
    scrollOnHover: true,
  },
  {
    id: 2,
    title: 'EUN Cars – Location de Voitures',
    category: 'Location',
    description:
      'Système de réservation en ligne pour location de voitures à Laâyoune avec interface intuitive.',
    image: '/Screenshot 2026-01-20 at 10.03.01 PM.webp',
    tags: ['React', 'Vercel', 'Réservation'],
    link: 'https://eun-cars.vercel.app/',
    scrollOnHover: true,
  },
  {
    id: 3,
    title: 'Le Grand Bazar Marrakech',
    category: 'Restaurant',
    description: 'Site restaurant avec réservation de tables en ligne.',
    image: '/restau.png',
    tags: ['Next.js', 'Réservation', 'Marrakech'],
    link: 'https://legrandbazarmarrakech.com/fr/',
    caseStudy: '/portfolio/case-studies/le-grand-bazar',
  },
  {
    id: 4,
    title: 'Tamraght Paradise',
    category: 'Location Airbnb',
    description: 'Listing luxueux avec calendrier et réservation.',
    image: '/Screenshot 2026-01-21 at 6.07.54 PM.webp',
    tags: ['React', 'Firebase', 'Calendrier'],
    link: 'https://tamraght-paradise.web.app/',
    scrollOnHover: true,
  },
  {
    id: 5,
    title: 'Cars Rental Business',
    category: 'Location',
    description: 'Site simple et efficace pour location de voitures.',
    image: '/CAR1.png',
    tags: ['React', 'Firebase'],
    link: 'https://cars-6431a.web.app/',
    hideFromAll: true,
  },
  {
    id: 6,
    title: 'Atlas Touareg Immobilier',
    category: 'Immobilier',
    description: "Agence immobilière avec recherche d'annonces.",
    image: '/agence.png',
    tags: ['React', 'Firebase', 'Recherche'],
    link: 'https://atlastouareg.com/',
  },
  {
    id: 7,
    title: 'Centre Dentaire Bentouda',
    category: 'Cabinet Médical',
    description:
      'Cabinet dentaire à Agadir avec visuels soignés, SEO optimisé et chargement rapide.',
    image: '/cabinet.png',
    tags: ['WordPress', 'SEO', 'Performance'],
    link: 'https://centredentairebentouda.com/',
  },
  {
    id: 8,
    title: 'Rabat Rentals',
    category: 'Location',
    description: 'Agence premium de location de voitures à Rabat avec flotte de luxe et service chauffeur professionnel.',
    image: '/Screenshot 2026-01-21 at 6.24.54 PM.webp',
    tags: ['Next.js', 'Vercel', 'Service Premium'],
    link: 'https://rabat-rentals.vercel.app/',
    scrollOnHover: true,
  },
  {
    id: 9,
    title: 'Rabat Rental',
    category: 'Location',
    description: 'Location de voitures à Rabat avec système de réservation en ligne et assistance 24h/24.',
    image: '/rabat-rental.webp',
    tags: ['React', 'Vercel', 'Réservation 24/7'],
    link: 'https://rabat-rental.vercel.app/',
  },
  {
    id: 10,
    title: 'Essouira Surf House Club',
    category: 'Location',
    description: 'Site web moderne pour club de surf à Essaouira avec design épuré et expérience utilisateur optimale.',
    image: '/sitepro_ma_creation_de_site_web_maroc.webp',
    tags: ['React', 'Netlify', 'Design Moderne'],
    link: 'https://surf11.netlify.app/',
    hideFromAll: true,
  },
  {
    id: 11,
    title: 'Trevi Rent Car Location',
    category: 'Location',
    description: 'Site de location de voitures professionnel avec système de réservation en ligne et gestion de flotte.',
    image: '/Screenshot 2026-01-21 at 6.27.59 PM.webp',
    tags: ['Next.js', 'Réservation', 'Location Voitures'],
    link: 'https://www.trevirentcarlocation.ma/',
    scrollOnHover: true,
  },
  {
    id: 12,
    title: 'Apex Clinique Dentaire',
    category: 'Cabinet Médical',
    description: 'Site web moderne pour une clinique dentaire premium avec un design épuré et une navigation fluide.',
    image: '/Screenshot 2026-01-20 at 11.54.18 PM.webp',
    tags: ['Next.js', 'SEO', 'Design Premium'],
    link: 'https://apexdental.ma/',
    scrollOnHover: true,
  },
  {
    id: 13,
    title: 'marocMaroc',
    category: 'E‑commerce',
    description:
      'Boutique e-commerce premium spécialisée dans les rituels de beauté et cosmétiques marocains de luxe.',
    image: '/Screenshot 2026-01-20 at 9.52.32 PM (1).jpg',
    tags: ['Next.js', 'E-commerce', 'Luxe'],
    link: 'https://www.marocmaroc.ma/',
    caseStudy: '/portfolio/case-studies/maroc-maroc',
    scrollOnHover: true,
  },
  {
    id: 14,
    title: 'Car Hire Agadir',
    category: 'Location',
    description: 'Service de location de voitures premium à Agadir avec un large choix de véhicules et assistance 24/7.',
    image: '/Screenshot 2026-01-21 at 6.43.33 PM.webp',
    tags: ['React', 'Agadir', 'Location Voitures'],
    link: 'https://car-hire-agadir.com/',
    scrollOnHover: true,
  },
  {
    id: 15,
    title: 'Power Delivery',
    category: 'Livraison',
    description: 'Solution logistique innovante au Maroc avec suivi de colis en temps réel et portail dédié pour les entreprises.',
    image: '/Screenshot 2026-01-21 at 6.58.12 PM.webp',
    tags: ['Next.js', 'Logistique', 'Suivi de colis'],
    link: 'https://power-delivery.ma/',
    scrollOnHover: true,
  },
  {
    id: 16,
    title: 'MetaLivraison',
    category: 'Livraison',
    description: 'Plateforme de livraison marocaine ultra-moderne avec des animations fluides et une expérience utilisateur immersive.',
    image: '/Screenshot 2026-01-21 at 6.51.53 PM.webp',
    tags: ['Next.js', 'Framer Motion', 'Logistique'],
    link: 'https://metalivraison.ma/',
    scrollOnHover: true,
  },
  {
    id: 17,
    title: 'LondonFood.ma',
    category: 'Restaurant',
    description: 'Site de restauration vibrant avec un design graphique soigné, permettant la commande en ligne de manière simple et intuitive.',
    image: '/screencapture-londonfood-ma-2025.webp',
    tags: ['Next.js', 'Restaurant', 'E-commerce'],
    link: 'https://londonfood.ma/',
    scrollOnHover: true,
  },
]

const categories = [
  'Tous',
  'E‑commerce',
  'Location',
  'Restaurant',
  'Location Airbnb',
  'Immobilier',
  'Cabinet Médical',
  'Livraison',
]

export default function PortfolioPage() {
  return (
    <section className="cv-auto">
      <nav aria-label="Fil d'Ariane" className="container mx-auto px-4 pt-4 text-sm text-gray-600">
        <Link href="/" className="hover:text-primary-700">Accueil</Link>
        <span className="mx-2">/</span>
        <span>Portfolio</span>
      </nav>
      <Script id="ld-breadcrumbs" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://www.sitepro.ma/' },
            { '@type': 'ListItem', position: 2, name: 'Portfolio', item: 'https://www.sitepro.ma/portfolio' }
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
            <h1 className="hero-title-premium mt-4">Sélection de projets</h1>
            <p className="hero-subtitle-premium mx-auto mt-3">
              Des interfaces modernes, performantes et orientées résultat pour des secteurs variés.
            </p>
          </ClientMotionWrapper>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-14">
        <PortfolioInteractive items={items} categories={categories} />

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-4">Envie d&apos;un projet similaire ? Parlons-en.</p>
          <a href={`https://wa.me/212663711164`} className="btn-primary inline-flex items-center gap-2">
            Démarrer un projet
          </a>
        </div>
      </div>
    </section>
  )
}


