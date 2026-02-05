import type { Metadata } from 'next'
import Link from 'next/link'
import ClientMotionWrapper from '@/components/ClientMotionWrapper'
import Script from 'next/script'
import PortfolioInteractive from '@/components/PortfolioInteractive'
import { ArrowRight } from 'lucide-react'


export const metadata: Metadata = {
  title: 'Portfolio Agence Web Maroc | Nos Réalisations Digitales',
  description:
    'Découvrez notre portfolio agence web maroc. Projets e-commerce, vitrines et solutions sur mesure performantes. Preuve de notre expertise et résultats.',
  alternates: { canonical: '/portfolio' },
  keywords: ['portfolio agence web maroc', 'réalisations web maroc', 'projets agence web'],
  openGraph: {
    title: 'Portfolio Agence Web Maroc | Nos Réalisations Digitales',
    description: 'Sélection de projets modernes et performants par Sitepro.',
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
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <span className="badge-gradient">
              Portfolio
            </span>
            <h1 className="hero-title-premium mt-4">Portfolio agence web au Maroc – Nos meilleures réalisations</h1>
            <p className="hero-subtitle-premium mx-auto mt-3">
              Explorez notre <strong className="text-gray-900">portfolio agence web maroc</strong> et découvrez des interfaces modernes, performantes et orientées résultat.
            </p>
          </ClientMotionWrapper>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-14 border-b border-gray-100">
        <PortfolioInteractive items={items} categories={categories} />

        {/* Previous CTA - kept or removed? User asked to add a bottom section. I will replace the small CTA with a more prominent one. */}
        <div className="text-center mt-16 pb-16">
          <p className="text-gray-600 mb-4">Envie d&apos;un projet similaire ? Parlons-en.</p>
          <a href={`https://wa.me/212663711164`} className="btn-primary inline-flex items-center gap-2">
            Démarrer un projet
          </a>
        </div>
      </div>

      {/* SEO Optimized Internal Link CTA Section */}
      <section className="py-24 bg-gradient-to-br from-[#022545] to-[#04335d] text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-500 rounded-full blur-[150px] opacity-10"></div>
        <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-blue-600 rounded-full blur-[150px] opacity-10"></div>

        <div className="container px-4 mx-auto max-w-5xl text-center relative z-10">
          <ClientMotionWrapper
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <span className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-sm font-bold tracking-wider text-primary-300 mb-4">
              AGENCE DE CRÉATION DE SITE WEB AU MAROC
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight">
              Un site web qui <span className="text-primary-400">génère des clients</span> et domine Google
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Découvrez comment notre expertise en <strong>référencement SEO</strong> et performance web transforme votre présence digitale au Maroc en machine à leads.
            </p>
            <div className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link href="/creation-site-web-maroc/" className="bg-primary-500 hover:bg-primary-600 text-white px-10 py-5 rounded-xl font-bold text-xl transition-all shadow-xl shadow-primary-900/40 flex items-center gap-3 group">
                Agence création site web maroc
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </Link>
              <div className="flex flex-col items-center sm:items-start">
                <p className="text-sm text-gray-400 font-medium italic">Audit technique offert</p>
                <a href="tel:+212663711164" className="text-white hover:text-primary-400 font-bold text-lg flex items-center gap-2 transition-colors">
                  +212 663-711164
                </a>
              </div>
            </div>
          </ClientMotionWrapper>
        </div>
      </section>
    </section>
  )
}


