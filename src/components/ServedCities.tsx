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
      title: 'Villes desservies',
      description: 'Nous travaillons partout au Maroc — en présentiel et à distance. Choisissez votre ville pour voir notre service local.',
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
    <section className="py-16 bg-gradient-to-b from-white to-blue-50/40 relative overflow-hidden">
      {/* soft background accents */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary-200/30 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-100 text-primary-700 text-sm font-semibold">
            <MapPin size={16} /> {t.badge}
          </span>
          <h2 className="heading-2 text-tech-dark mt-3">{t.title}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">{t.description}</p>
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


