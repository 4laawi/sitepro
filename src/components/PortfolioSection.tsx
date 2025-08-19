'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { ExternalLink, Eye, ChevronRight } from 'lucide-react'
import Image from 'next/image'

const portfolioItems = [
  {
    id: 1,
    title: 'Mama Fatma Store',
    category: 'E-commerce',
    description: 'Boutique en ligne moderne avec gestion des produits, SEO optimisé et performances élevées',
    image: '/ecommerce.png',
    tags: ['Next.js', 'Supabase', 'SEO'],
    stats: { visitors: '15K+', conversion: '4.2%' },
    link: 'https://mamafatma.ma/'
  },
  {
    id: 2,
    title: 'EUN Cars - Location de Voitures',
    category: 'Location',
    description: 'Système de réservation en ligne pour location de voitures à Laayoune avec interface intuitive',
    image: '/CAR2.png',
    tags: ['React', 'Vercel', 'Système de réservation'],
    stats: { visitors: '8K+', conversion: '6.1%' },
    link: 'https://eun-cars.vercel.app/'
  },
  {
    id: 3,
    title: 'Le Grand Bazar Marrakech',
    category: 'Restaurant',
    description: 'Site de restaurant à Marrakech avec système de réservation de tables en ligne',
    image: '/restau.png',
    tags: ['Next.js', 'Réservation', 'Marrakech'],
    stats: { visitors: '12K+', conversion: '5.3%' },
    link: 'https://legrandbazarmarrakech.com/fr/'
  },
  {
    id: 4,
    title: 'Tamraght Paradise',
    category: 'Location Airbnb',
    description: 'Listing Airbnb luxueux à Tamraght avec système de réservation et sélecteur de calendrier',
    image: '/AIRBNB-listing.png',
    tags: ['React', 'Firebase', 'Calendrier'],
    stats: { visitors: '6K+', conversion: '7.8%' },
    link: 'https://tamraght-paradise.web.app/'
  },
  {
    id: 5,
    title: 'Cars Rental Business',
    category: 'Location',
    description: 'Site simple et efficace pour entreprise de location de voitures',
    image: '/CAR1.png',
    tags: ['React', 'Firebase', 'Design simple'],
    stats: { visitors: '5K+', conversion: '4.7%' },
    link: 'https://cars-6431a.web.app/'
  },
  {
    id: 6,
    title: 'Atlas Touareg Immobilier',
    category: 'Immobilier',
    description: 'Agence immobilière à Marrakech permettant aux utilisateurs de trouver des biens adaptés',
    image: '/agence.png',
    tags: ['React', 'Firebase', 'Recherche'],
    stats: { visitors: '10K+', conversion: '3.9%' },
    link: 'https://atlastouareg.com/'
  },
  {
    id: 7,
    title: 'Centre Dentaire Bentouda',
    category: 'Cabinet Médical',
    description: 'Cabinet dentaire à Agadir avec visuels magnifiques, SEO optimisé et performances élevées',
    image: '/cabinet.png',
    tags: ['WordPress', 'SEO', 'Performance'],
    stats: { visitors: '20K+', conversion: '8.5%' },
    link: 'https://centredentairebentouda.com/'
  },
  {
    id: 8,
    title: 'Rabat Rentals',
    category: 'Location',
    description: 'Agence premium de location de voitures à Rabat avec flotte de luxe et service chauffeur professionnel',
    image: '/rabat-rentals.webp',
    tags: ['Next.js', 'Vercel', 'Service Premium'],
    stats: { visitors: '18K+', conversion: '5.8%' },
    link: 'https://rabat-rentals.vercel.app/'
  },
  {
    id: 9,
    title: 'Rabat Rental',
    category: 'Location',
    description: 'Location de voitures à Rabat avec système de réservation en ligne et assistance 24h/24',
    image: '/rabat-rental.webp',
    tags: ['React', 'Vercel', 'Réservation 24/7'],
    stats: { visitors: '14K+', conversion: '6.3%' },
    link: 'https://rabat-rental.vercel.app/'
  }
]

const categories = ['Tous', 'E-commerce', 'Location', 'Restaurant', 'Location Airbnb', 'Immobilier', 'Cabinet Médical']

export default function PortfolioSection() {
  const [selectedCategory, setSelectedCategory] = useState('Tous')
  const [hoveredItem, setHoveredItem] = useState<number | null>(null)

  const filteredItems = selectedCategory === 'Tous' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === selectedCategory)

  return (
    <section id="portfolio" className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-4" id="portfolio">
            Portfolio
          </span>
          <h2 className="heading-2 text-tech-dark mb-4">
            Nos Réalisations Récentes
          </h2>
          <p className="body-large text-gray-600 max-w-3xl mx-auto">
            Découvrez une sélection de projets qui illustrent notre expertise 
            et notre capacité à créer des solutions digitales performantes.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-primary-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Portfolio Grid */}
        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onHoverStart={() => setHoveredItem(item.id)}
              onHoverEnd={() => setHoveredItem(null)}
              className="group relative"
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                {/* Project Image */}
                <div className="relative h-64 overflow-hidden">

                  <Image 
                    src={item.image} 
                    alt={`Projet: ${item.title}`}
                    fill
                    sizes="(min-width:1024px) 33vw, (min-width:768px) 50vw, 100vw"
                    className="object-cover"
                  />
                  
                  {/* Overlay on Hover */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hoveredItem === item.id ? 1 : 0 }}
                    className="absolute inset-0 bg-black/70 flex items-center justify-center gap-4"
                  >
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-tech-dark hover:bg-primary-600 hover:text-white transition-colors"
                    >
                      <Eye size={20} />
                    </motion.button>
                    <motion.a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-tech-dark hover:bg-primary-600 hover:text-white transition-colors"
                    >
                      <ExternalLink size={20} />
                    </motion.a>
                  </motion.div>

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium">
                      {item.category}
                    </span>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-tech-dark mb-2 group-hover:text-primary-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {item.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {item.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Stats */}
                  <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                    <div>
                      <p className="text-xs text-gray-500">Visiteurs</p>
                      <p className="font-bold text-primary-600">{item.stats.visitors}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Conversion</p>
                      <p className="font-bold text-green-600">{item.stats.conversion}</p>
                    </div>
                    <motion.div
                      whileHover={{ x: 5 }}
                      className="text-primary-600"
                    >
                      <ChevronRight size={20} />
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-gray-600 mb-6">
            Vous avez un projet en tête ? Discutons-en !
          </p>
          <motion.a
            href="/portfolio"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 bg-primary-600 text-white px-8 py-4 rounded-lg font-medium hover:bg-primary-700 transition-colors"
          >
            Voir Plus de Projets
            <ChevronRight size={20} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
