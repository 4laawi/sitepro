'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { MapPin } from 'lucide-react'

const cities = [
  { slug: 'marrakech', label: 'Marrakech' },
  { slug: 'rabat', label: 'Rabat' },
  { slug: 'casablanca', label: 'Casablanca' },
  { slug: 'agadir', label: 'Agadir' },
  { slug: 'fes', label: 'Fès' },
  { slug: 'tanger', label: 'Tanger' },
  { slug: 'laayoune', label: 'Laayoune' },
]

interface ServedCitiesProps {
  lang?: 'FR' | 'EN';
}

export default function ServedCities({ lang = 'FR' }: ServedCitiesProps) {
  const t = {
    FR: {
      badge: 'Zones d’intervention',
      title: 'Expertise Web par Ville au Maroc',
      description: 'Nous accompagnons les entreprises à Casablanca, Rabat, Marrakech et partout au Maroc. Consultez nos services de création site web par ville.',
      cityAria: 'Création de site web'
    },
    EN: {
      badge: 'Intervention Zones',
      title: 'Cities Served',
      description: 'We work everywhere in Morocco — in person and remotely. Choose your city to see our local service.',
      cityAria: 'Website creation'
    }
  }[lang];

  return (
    <section className="pt-16 pb-32 bg-[#f9fafb] relative overflow-hidden z-10">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231e40af' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <span className="badge-gradient">
            {t.badge}
          </span>
          <h2 className="section-title-premium">{t.title}</h2>
          <p className="section-subtitle-premium">{t.description}</p>
        </motion.div>

        <div className="mx-auto grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-5xl">
          {cities.map((city, idx) => (
            <motion.div
              key={city.slug}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.05 }}
            >
              <Link
                href={`/creation-site-web/${city.slug}`}
                className="group relative block rounded-xl border border-gray-200 bg-white/80 backdrop-blur-sm px-5 py-4 shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5"
                aria-label={`${t.cityAria} ${city.label}`}
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-primary-50 text-primary-700 group-hover:scale-105 transition-transform">
                    <MapPin size={18} />
                  </span>
                  <span className="font-semibold text-gray-800">{city.label}</span>
                </div>
                <div className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-primary-300/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}


