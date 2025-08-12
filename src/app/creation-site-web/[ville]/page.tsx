import type { Metadata, PageProps } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import CityExtras from '@/components/CityExtras'
import { MessageSquare } from 'lucide-react'
import ClientMotionWrapper from '@/components/ClientMotionWrapper'
import Script from 'next/script'

const CITIES = [
  'marrakech',
  'rabat',
  'casablanca',
  'agadir',
  'fes',
  'tanger',
  'laayoune',
]

export function generateStaticParams() {
  return CITIES.map((ville) => ({ ville }))
}

const phone = '2120663711164'

export async function generateMetadata({ params }: PageProps<{ ville: string }>): Promise<Metadata> {
  const { ville: city } = await params
  const cityCap = city.charAt(0).toUpperCase() + city.slice(1)
  return {
    title: `Création de site web ${cityCap} | Sitepro.ma`,
    description: `Agence web à ${cityCap}. Création de sites vitrines et e‑commerce rapides, design moderne et SEO pour les entreprises à ${cityCap}.`,
    alternates: { canonical: `/creation-site-web/${city}` },
    keywords: [
      `création site web ${cityCap}`,
      `agence web ${cityCap}`,
      `site vitrine ${cityCap}`,
      `site e‑commerce ${cityCap}`,
      'développement web maroc',
    ],
    openGraph: {
      title: `Création de site web ${cityCap} | Sitepro.ma`,
      description: `Sites rapides et SEO pour ${cityCap}. Devis WhatsApp en 1 minute.`,
      url: `https://sitepro.ma/creation-site-web/${city}`,
      type: 'website',
    },
  }
}

export default async function CityCreationPage({ params }: PageProps<{ ville: string }>) {
  const { ville: city } = await params
  const cityCap = city.charAt(0).toUpperCase() + city.slice(1)

  const zonesParVille: Record<string, string[]> = {
    rabat: ['Agdal', 'Hay Riad', 'Souissi', 'Hassan', 'Salé'],
    marrakech: ['Guéliz', 'Hivernage', 'Médina', 'Palmeraie'],
    casablanca: ['Maarif', 'Anfa', 'Sidi Maarouf', 'Ain Diab'],
    agadir: ['Centre‑ville', 'Hay Mohammadi', 'Bensergao'],
    fes: ['Ville Nouvelle', 'Fès El Bali', 'Zouagha'],
    tanger: ['Malabata', 'Iberia', 'Centre‑ville'],
  }

  const zones = zonesParVille[city as keyof typeof zonesParVille] ?? ['Centre‑ville', 'Quartiers d’affaires']

  const cityHero: Record<string, string> = {
    rabat: '/rabat.jpg',
    marrakech: '/marrakech.jpg',
    casablanca: '/casa.jpg',
    agadir: '/agadir.jpg',
    tanger: '/tangier.webp',
    laayoune: '/laayoune.webp',
  }
  const hero = cityHero[city]

  return (
    <section className="cv-auto">
      <Script id={`ld-breadcrumb-${city}`} type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://sitepro.ma/' },
            { '@type': 'ListItem', position: 2, name: 'Création de Sites Web', item: 'https://sitepro.ma/creation-site-web' },
            { '@type': 'ListItem', position: 3, name: `Création site web ${cityCap}`, item: `https://sitepro.ma/creation-site-web/${city}` },
          ],
        })}
      </Script>
      <Script id={`ld-local-${city}`} type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'LocalBusiness',
          name: `Sitepro.ma – Création de site web ${cityCap}`,
          url: `https://sitepro.ma/creation-site-web/${city}`,
          telephone: '+2120663711164',
          areaServed: cityCap,
          image: 'https://sitepro.ma/og-image.jpg',
          address: {
            '@type': 'PostalAddress',
            addressLocality: cityCap,
            addressCountry: 'MA'
          },
          sameAs: [
            'https://sitepro.ma',
          ]
        })}
      </Script>

      {/* Hero */}
      <div className="relative overflow-hidden">
        {hero && (
          <div className="absolute inset-0">
            <Image src={hero} alt={cityCap} fill className="object-cover" priority />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/20" />
          </div>
        )}
        <div className={`container mx-auto px-4 py-16 lg:py-24 ${hero ? 'relative text-white' : 'bg-gradient-to-b from-white to-blue-50/40'}`}>
          <ClientMotionWrapper
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            {/* Breadcrumb */}
            <nav aria-label="Fil d'Ariane" className={`text-sm ${hero ? 'text-white/80' : 'text-gray-600'} mb-3`}>
              <Link href="/" className="hover:underline">Accueil</Link>
              <span className="mx-1">/</span>
              <Link href="/creation-site-web" className="hover:underline">Création de Sites Web</Link>
              <span className="mx-1">/</span>
              <span>{cityCap}</span>
            </nav>
            <h1 className={`heading-1 ${hero ? 'text-white' : 'text-gray-900'}`}>Création de site web à {cityCap}</h1>
            <p className={`body-large mt-3 ${hero ? 'text-white/90' : 'text-gray-600'}`}>
              Nous concevons des sites vitrines et e‑commerce modernes, rapides et optimisés SEO pour les entreprises à {cityCap}.
              Hébergement, sécurité, analytics et support inclus.
            </p>
            <div className="mt-6 flex gap-3 justify-center">
              <a
                href={`https://wa.me/${phone}?text=${encodeURIComponent(`Bonjour, je souhaite créer un site web à ${cityCap}.`)}`}
                className={`${hero ? 'inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold bg-white text-primary-700 shadow-lg hover:shadow-xl transition' : 'btn-primary'}`}
              >
                Demander un devis
              </a>
              <Link href="/portfolio" className={`${hero ? 'inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold bg-white/10 hover:bg-white/20 text-white border border-white/40' : 'btn-secondary'}`}>Voir des projets</Link>
            </div>
            <p className={`mt-3 text-sm ${hero ? 'text-white/80' : 'text-gray-600'}`}>WhatsApp +212 06 63 71 11 64 — réponse &lt; 15 min</p>
          </ClientMotionWrapper>
        </div>
      </div>

      <div className="container mx-auto px-4 py-14">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { t: 'Design sur mesure', d: `Identité de marque adaptée au marché de ${cityCap}.` },
            { t: 'SEO local', d: `Structure, balises et vitesse pour se positionner sur ${cityCap}.` },
            { t: 'Performance', d: 'Chargement rapide, meilleures pratiques Core Web Vitals.' },
          ].map((b, i) => (
            <ClientMotionWrapper key={b.t} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.05 }} className="p-6 rounded-2xl bg-white shadow-lg border border-gray-100">
              <h3 className="font-semibold text-gray-900">{b.t}</h3>
              <p className="text-gray-600 text-sm mt-1">{b.d}</p>
            </ClientMotionWrapper>
          ))}
        </div>
      </div>

      {/* Extras: value blocks, KPIs, testimonial */}
      <CityExtras cityName={cityCap} />

      {/* Zones desservies */}
      <div className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <h2 className="heading-3 text-gray-900 mb-4 text-center">Zones desservies à {cityCap}</h2>
          <div className="flex flex-wrap gap-3 justify-center">
            {zones.map((z) => (
              <span key={z} className="px-3 py-1 rounded-full bg-white border border-gray-200 text-gray-700 text-sm">{z}</span>
            ))}
          </div>
          <p className="text-center text-gray-600 mt-4 text-sm">Disponibles sur place et à distance.</p>
        </div>
      </div>

      {/* Final CTA */}
      <div className="bg-gradient-to-r from-primary-600 to-primary-700 text-white py-14">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-2">Parlez à un expert à {cityCap}</h3>
          <p className="text-white/90 max-w-2xl mx-auto">Consultation gratuite. Nous répondons en moins de 15 minutes sur WhatsApp.</p>
          <div className="flex gap-3 justify-center mt-6">
            <a
              href={`https://wa.me/${phone}?text=${encodeURIComponent(`Bonjour, je souhaite discuter de mon projet web à ${cityCap}.`)}`}
              className="inline-flex items-center gap-2 bg-white text-primary-700 px-6 py-3 rounded-lg font-semibold hover:opacity-95 shadow-lg"
            >
              <MessageSquare size={18} /> Parler à un expert
            </a>
            <Link href="/creation-site-web" className="bg-white/10 hover:bg-white/20 px-6 py-3 rounded-lg font-semibold">
              Demander un devis
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}


