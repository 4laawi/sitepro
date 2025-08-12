import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import ClientMotionWrapper from '@/components/ClientMotionWrapper'
import Script from 'next/script'
import PortfolioInteractive from '@/components/PortfolioInteractive'
import { ExternalLink, ChevronRight, FolderOpen, Tag } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Portfolio | Sitepro.ma',
  description:
    'Découvrez nos projets récents: e‑commerce, restaurants, locations, immobilier et plus. UI moderne, performances et résultats mesurables.',
  alternates: { canonical: '/portfolio' },
  keywords: ['portfolio site web maroc', 'réalisations web', 'agence web maroc'],
  openGraph: {
    title: 'Portfolio | Sitepro.ma',
    description: 'Sélection de projets modernes et performants.',
    url: 'https://sitepro.ma/portfolio',
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
    image: '/ecommerce.png',
    tags: ['Next.js', 'Supabase', 'SEO'],
    link: 'https://mamafatma.ma/',
    caseStudy: '/portfolio/case-studies/mama-fatma-store',
  },
  {
    id: 2,
    title: 'EUN Cars – Location de Voitures',
    category: 'Location',
    description:
      'Système de réservation en ligne pour location de voitures à Laâyoune avec interface intuitive.',
    image: '/CAR2.png',
    tags: ['React', 'Vercel', 'Réservation'],
    link: 'https://eun-cars.vercel.app/',
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
    image: '/AIRBNB-listing.png',
    tags: ['React', 'Firebase', 'Calendrier'],
    link: 'https://tamraght-paradise.web.app/',
  },
  {
    id: 5,
    title: 'Cars Rental Business',
    category: 'Location',
    description: 'Site simple et efficace pour location de voitures.',
    image: '/CAR1.png',
    tags: ['React', 'Firebase'],
    link: 'https://cars-6431a.web.app/',
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
]

const categories = [
  'Tous',
  'E‑commerce',
  'Location',
  'Restaurant',
  'Location Airbnb',
  'Immobilier',
  'Cabinet Médical',
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
            { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://sitepro.ma/' },
            { '@type': 'ListItem', position: 2, name: 'Portfolio', item: 'https://sitepro.ma/portfolio' }
          ]
        })}
      </Script>
      {/* Hero */}
      <div className="bg-gradient-to-b from-white to-blue-50/40">
        <div className="container mx-auto px-4 py-16 lg:py-24">
          <ClientMotionWrapper
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-100 text-primary-700 text-sm font-semibold">
              <FolderOpen size={16} /> Portfolio
            </span>
            <h1 className="heading-1 text-gray-900 mt-4">Sélection de projets</h1>
            <p className="body-large text-gray-600 mt-3">
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
          <p className="text-gray-600 mb-4">Envie d'un projet similaire ? Parlons-en.</p>
          <a href={`https://wa.me/2120663711164`} className="btn-primary inline-flex items-center gap-2">
            Démarrer un projet
          </a>
        </div>
      </div>
    </section>
  )
}


