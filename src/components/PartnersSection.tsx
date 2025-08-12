'use client'

import { motion } from 'framer-motion'

const partners = [
  { name: 'Google Cloud Partner', logo: 'GCP' },
  { name: 'Meta Business Partners', logo: 'META' },
  { name: 'Google Partner', logo: 'GOOGLE' },
  { name: 'Shopify Partner', logo: 'SHOPIFY' },
  { name: 'TikTok Marketing Partners', logo: 'TIKTOK' },
  { name: 'WordPress VIP', logo: 'WP' },
]

export default function PartnersSection() {
  return (
    <section className="py-16 bg-gray-50 relative overflow-hidden z-10">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-tech-dark mb-4">
            NOS PARTENAIRES TECHNOLOGIQUES
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Nous collaborons avec les leaders mondiaux du digital pour vous offrir 
            les meilleures solutions et technologies
          </p>
        </motion.div>

        {/* Partners Carousel */}
        <div className="relative">
            <div className="flex overflow-hidden" aria-label="Logos de partenaires">
            <div className="flex animate-scroll gap-8 lg:gap-16">
              {/* Create 8 sets of partners for truly seamless infinite loop */}
              {[...partners, ...partners, ...partners, ...partners, ...partners, ...partners, ...partners, ...partners].map((partner, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="flex-shrink-0"
                >
                  <div className="bg-white px-8 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                    <div className="w-32 h-16 flex items-center justify-center" aria-label={partner.name}>
                      <span className="text-2xl font-bold text-gray-400 grayscale hover:grayscale-0 transition-all">
                        {partner.logo}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gray-50 to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-gray-50 to-transparent pointer-events-none" />
        </div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 grid md:grid-cols-3 gap-8 max-w-4xl mx-auto"
        >
          {[
            { title: 'Certifié Google', desc: 'Agence certifiée Google Ads & Analytics' },
            { title: 'Partenaire Meta', desc: 'Expert en publicité Facebook & Instagram' },
            { title: 'Excellence Shopify', desc: 'Développement e-commerce professionnel' },
          ].map((badge, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className="text-center p-6 bg-white rounded-xl shadow-lg border border-gray-100"
            >
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="font-bold text-lg mb-2">{badge.title}</h3>
              <p className="text-gray-600 text-sm">{badge.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
