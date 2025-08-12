'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Typewriter from '@/components/Typewriter'
import { 
  Globe, 
  Smartphone, 
  Search, 
  ShoppingCart, 
  Palette, 
  Rocket, 
  Shield,
  ArrowRight
} from 'lucide-react'
import { useState } from 'react'

const services = [
  {
    icon: Globe,
    title: 'Création de Sites Web',
    description: 'Sites vitrines, corporate et institutionnels parfaitement optimisés pour votre marque.',
    features: ['Design sur mesure', 'Responsive design', 'SEO intégré'],
    color: 'from-blue-500 to-blue-600',
  },
  {
    icon: ShoppingCart,
    title: 'E-commerce',
    description: 'Boutiques en ligne performantes avec paiement sécurisé et gestion simplifiée.',
    features: ['Paiement sécurisé', 'Gestion des stocks', 'Multi-devises'],
    color: 'from-purple-500 to-purple-600',
  },
  {
    icon: Search,
    title: 'Référencement SEO',
    description: 'Optimisation pour les moteurs de recherche et visibilité maximale.',
    features: ['Audit SEO', 'Optimisation on-page', 'Stratégie de contenu'],
    color: 'from-green-500 to-green-600',
  },
  {
    icon: Smartphone,
    title: 'Applications Mobiles',
    description: 'Applications natives et PWA pour iOS et Android.',
    features: ['Cross-platform', 'UI/UX optimal', 'Performance native'],
    color: 'from-orange-500 to-orange-600',
  },
  {
    icon: Palette,
    title: 'Design & Branding',
    description: 'Identité visuelle complète et design graphique professionnel.',
    features: ['Logo design', 'Charte graphique', 'Design system'],
    color: 'from-pink-500 to-pink-600',
  },
  {
    icon: Shield,
    title: 'Maintenance & Support',
    description: 'Support technique continu et maintenance préventive.',
    features: ['Support 24/7', 'Mises à jour', 'Sauvegardes'],
    color: 'from-indigo-500 to-indigo-600',
  },
]

export default function ServicesSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const slugFor = (title: string): string | null => {
    switch (title) {
      case 'Création de Sites Web':
        return '/creation-site-web'
      case 'E-commerce':
        return '/e-commerce'
      case 'Référencement SEO':
        return '/referencement-seo'
      case 'Applications Mobiles':
        return '/applications-mobiles'
      case 'Design & Branding':
        return '/design-branding'
      case 'Maintenance & Support':
        return '/maintenance-support'
      default:
        return null
    }
  }

  return (
    <section id="services" className="py-20 lg:py-32 bg-gray-50 relative overflow-hidden z-10">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231e40af' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-4">
            Nos Services
          </span>
          <h2 className="heading-2 text-tech-dark mb-2">
            Solutions Digitales <span className="text-primary-700">Complètes</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-800 font-semibold">
            <Typewriter words={[
              'SEO qui performe',
              'E‑commerce qui convertit',
              'Applications mobiles modernes',
              'Design & branding',
              'Maintenance & support',
            ]} />
          </p>
          <p className="body-large text-gray-600 max-w-3xl mx-auto">
            De la conception à la réalisation, nous offrons une gamme complète de services 
            pour transformer votre présence digitale et accélérer votre croissance.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              className="relative group"
            >
              <div className="bg-white rounded-2xl p-8 h-full shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden relative">
                {/* Background Gradient on Hover */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`}
                />
                
                {/* Icon */}
                <motion.div
                  animate={{
                    scale: hoveredIndex === index ? 1.06 : 1,
                    y: hoveredIndex === index ? -2 : 0,
                  }}
                  transition={{ duration: 0.2 }}
                  className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${service.color} text-white mb-6 shadow-sm`}
                >
                  <service.icon size={28} />
                </motion.div>

                {/* Content */}
                <h3 className="heading-3 text-tech-dark mb-3 group-hover:text-primary-700 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <motion.li
                      key={featureIndex}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ 
                        opacity: hoveredIndex === index ? 1 : 0.7,
                        x: hoveredIndex === index ? 0 : -10
                      }}
                      transition={{ delay: featureIndex * 0.1 }}
                      className="flex items-center gap-2 text-sm text-gray-600"
                    >
                      <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.color}`} />
                      {feature}
                    </motion.li>
                  ))}
                </ul>

                {/* CTA */}
                <motion.div whileHover={{ x: 5 }}>
                  {(() => {
                    const href = slugFor(service.title)
                    if (href) {
                      return (
                        <Link href={href} className="inline-flex items-center gap-2 text-primary-600 font-medium group/link">
                          En savoir plus
                          <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
                        </Link>
                      )
                    }
                    return (
                      <a href="#contact" className="inline-flex items-center gap-2 text-primary-600 font-medium group/link">
                        En savoir plus
                        <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
                      </a>
                    )
                  })()}
                </motion.div>

                {/* Decorative Elements */}
                <motion.div
                  animate={{
                    scale: hoveredIndex === index ? [1, 1.2, 1] : 1,
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-primary-200 to-primary-300 rounded-full opacity-10 blur-3xl"
                />

                {/* Make whole card clickable */}
                {slugFor(service.title) && (
                  <Link
                    href={slugFor(service.title)!}
                    aria-label={`Découvrir: ${service.title}`}
                    className="absolute inset-0 rounded-2xl z-10"
                  />
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-8 lg:p-12 relative overflow-hidden">
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl"
            />
            
            <div className="relative">
              <h3 className="text-3xl font-bold text-white mb-4">
                Prêt à transformer votre présence digitale ?
              </h3>
              <p className="text-white/90 mb-8 max-w-2xl mx-auto">
                Discutons de votre projet et découvrez comment nous pouvons 
                vous aider à atteindre vos objectifs.
              </p>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 bg-white text-primary-700 px-8 py-4 rounded-lg font-bold hover:shadow-xl transition-all duration-300"
              >
                <Rocket size={20} />
                Démarrer Mon Projet
                <ArrowRight size={20} />
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
