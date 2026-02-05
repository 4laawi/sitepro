'use client'

import { motion, useInView } from 'framer-motion'
import * as React from 'react'
import { ChevronRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const portfolioItems = [
  {
    id: 1,
    title: 'Apex Clinique Dentaire',
    category: 'Cabinet Médical',
    description: 'Clinique dentaire de pointe à Tanger, Maroc, avec une présence digitale élégante et fonctionnelle.',
    image: '/Screenshot 2026-01-20 at 11.54.18 PM.webp',
    tags: ['Next.js', 'Clinique Dentaire', 'Tanger'],
    stats: { visitors: '7K+', conversion: '6.5%' },
    link: 'https://www.apexdental.ma/',
    scrollOnHover: true
  },
  {
    id: 2,
    title: 'Mama Fatma Store',
    category: 'E-commerce',
    description: 'Boutique en ligne moderne avec gestion des produits, SEO optimisé et performances élevées',
    image: '/Screenshot 2026-01-20 at 10.04.03 PM.webp',
    tags: ['Next.js', 'Supabase', 'SEO'],
    stats: { visitors: '15K+', conversion: '4.2%' },
    link: 'https://mamafatma.ma/',
    scrollOnHover: true
  },
  {
    id: 3,
    title: 'EUN Cars - Location de Voitures',
    category: 'Location',
    description: 'Système de réservation en ligne pour location de voitures à Laayoune avec interface intuitive',
    image: '/Screenshot 2026-01-20 at 10.03.01 PM.webp',
    tags: ['React', 'Vercel', 'Système de réservation'],
    stats: { visitors: '8K+', conversion: '6.1%' },
    link: 'https://eun-cars.vercel.app/',
    scrollOnHover: true
  },
  {
    id: 4,
    title: 'Le Grand Bazar Marrakech',
    category: 'Restaurant',
    description: 'Site de restaurant à Marrakech avec système de réservation de tables en ligne',
    image: '/restau.png',
    tags: ['Next.js', 'Réservation', 'Marrakech'],
    stats: { visitors: '12K+', conversion: '5.3%' },
    link: 'https://legrandbazarmarrakech.com/fr/'
  },
  {
    id: 5,
    title: 'Tamraght Paradise',
    category: 'Location Airbnb',
    description: 'Listing Airbnb luxueux à Tamraght avec système de réservation et sélecteur de calendrier',
    image: '/Screenshot 2026-01-21 at 6.07.54 PM.webp',
    tags: ['React', 'Firebase', 'Calendrier'],
    stats: { visitors: '6K+', conversion: '7.8%' },
    link: 'https://tamraght-paradise.web.app/',
    scrollOnHover: true
  },
  {
    id: 6,
    title: 'Cars Rental Business',
    category: 'Location',
    description: 'Site simple et efficace pour entreprise de location de voitures',
    image: '/CAR1.png',
    tags: ['React', 'Firebase', 'Design simple'],
    stats: { visitors: '5K+', conversion: '4.7%' },
    link: 'https://cars-6431a.web.app/',
    hideFromAll: true
  },
  {
    id: 7,
    title: 'Atlas Touareg Immobilier',
    category: 'Immobilier',
    description: 'Agence immobilière à Marrakech permettant aux utilisateurs de trouver des biens adaptés',
    image: '/agence.png',
    tags: ['React', 'Firebase', 'Recherche'],
    stats: { visitors: '10K+', conversion: '3.9%' },
    link: 'https://atlastouareg.com/'
  },
  {
    id: 8,
    title: 'Centre Dentaire Bentouda',
    category: 'Cabinet Médical',
    description: 'Cabinet dentaire à Agadir avec visuels magnifiques, SEO optimisé et performances élevées',
    image: '/cabinet.png',
    tags: ['WordPress', 'SEO', 'Performance'],
    stats: { visitors: '20K+', conversion: '8.5%' },
    link: 'https://centredentairebentouda.com/'
  },
  {
    id: 9,
    title: 'Rabat Rentals',
    category: 'Location',
    description: 'Agence premium de location de voitures à Rabat avec flotte de luxe et service chauffeur professionnel',
    image: '/Screenshot 2026-01-21 at 6.24.54 PM.webp',
    tags: ['Next.js', 'Vercel', 'Service Premium'],
    stats: { visitors: '18K+', conversion: '5.8%' },
    link: 'https://rabat-rentals.vercel.app/',
    scrollOnHover: true
  },
  {
    id: 10,
    title: 'Rabat Rental',
    category: 'Location',
    description: 'Location de voitures à Rabat avec système de réservation en ligne et assistance 24h/24',
    image: '/rabat-rental.webp',
    tags: ['React', 'Vercel', 'Réservation 24/7'],
    stats: { visitors: '14K+', conversion: '6.3%' },
    link: 'https://rabat-rental.vercel.app/'
  },
  {
    id: 11,
    title: 'Essouira Surf House Club',
    category: 'Location',
    description: 'Site web moderne pour club de surf à Essaouira avec design épuré et expérience utilisateur optimale',
    image: '/sitepro_ma_creation_de_site_web_maroc.webp',
    tags: ['React', 'Netlify', 'Design Moderne'],
    stats: { visitors: '9K+', conversion: '5.1%' },
    link: 'https://surf11.netlify.app/',
    hideFromAll: true
  },
  {
    id: 12,
    title: 'Trevi Rent Car Location',
    category: 'Location',
    description: 'Site de location de voitures professionnel avec système de réservation en ligne et gestion de flotte',
    image: '/Screenshot 2026-01-21 at 6.27.59 PM.webp',
    tags: ['Next.js', 'Réservation', 'Location Voitures'],
    stats: { visitors: '11K+', conversion: '5.5%' },
    link: 'https://www.trevirentcarlocation.ma/',
    scrollOnHover: true
  },
  {
    id: 13,
    title: 'marocMaroc',
    category: 'E-commerce',
    description: 'Boutique e-commerce premium spécialisée dans les rituels de beauté et cosmétiques marocains de luxe.',
    image: '/Screenshot 2026-01-20 at 9.52.32 PM (1).jpg',
    tags: ['Next.js', 'E-commerce', 'Beauty'],
    stats: { visitors: '12K+', conversion: '5.1%' },
    link: 'https://www.marocmaroc.ma/',
    scrollOnHover: true
  },
  {
    id: 14,
    title: 'Car Hire Agadir',
    category: 'Location',
    description: 'Service de location de voitures premium à Agadir avec un large choix de véhicules et assistance 24/7.',
    image: '/Screenshot 2026-01-21 at 6.43.33 PM.webp',
    tags: ['React', 'Agadir', 'Location Voitures'],
    stats: { visitors: '13K+', conversion: '5.9%' },
    link: 'https://car-hire-agadir.com/',
    scrollOnHover: true
  },
  {
    id: 15,
    title: 'Power Delivery',
    category: 'Livraison',
    description: 'Solution logistique innovante au Maroc avec suivi de colis en temps réel et portail dédié pour les entreprises.',
    image: '/Screenshot 2026-01-21 at 6.58.12 PM.webp',
    tags: ['Next.js', 'Logistique', 'Suivi de colis'],
    stats: { visitors: '22K+', conversion: '5.4%' },
    link: 'https://power-delivery.ma/',
    scrollOnHover: true
  },
  {
    id: 16,
    title: 'MetaLivraison',
    category: 'Livraison',
    description: 'Plateforme de livraison marocaine ultra-moderne avec des animations fluides et une expérience utilisateur immersive.',
    image: '/Screenshot 2026-01-21 at 6.51.53 PM.webp',
    tags: ['Next.js', 'Framer Motion', 'Logistique'],
    stats: { visitors: '18K+', conversion: '6.2%' },
    link: 'https://metalivraison.ma/',
    scrollOnHover: true
  },
  {
    id: 17,
    title: 'LondonFood.ma',
    category: 'Restaurant',
    description: 'Site de restauration vibrant avec un design graphique soigné, permettant la commande en ligne de manière simple et intuitive.',
    image: '/screencapture-londonfood-ma-2025.webp',
    tags: ['Next.js', 'Restaurant', 'E-commerce'],
    stats: { visitors: '15K+', conversion: '7.2%' },
    link: 'https://londonfood.ma/',
    scrollOnHover: true
  }
]


interface PortfolioSectionProps {
  lang?: 'FR' | 'EN';
}

interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
  stats: {
    visitors: string;
    conversion: string;
  };
  link: string;
  scrollOnHover?: boolean;
  hideFromAll?: boolean;
}

interface TranslationType {
  badge: string;
  title: string;
  description: string;
  categories: string[];
  items: {
    category: string;
    description: string;
  }[];
  visitors: string;
  conversion: string;
  ctaText: string;
  ctaButton: string;
  projectAlt: string;
}

interface PortfolioCardProps {
  item: PortfolioItem;
  index: number;
  isInView: boolean;
  randomDelays: number[];
  t: TranslationType;
  isMobile?: boolean;
}

function PortfolioCard({ item, index, isInView, randomDelays, t, isMobile }: PortfolioCardProps) {
  const [isLoaded, setIsLoaded] = React.useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative"
    >
      <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
        {/* Project Image */}
        <div className="relative h-48 overflow-hidden bg-gray-100">
          {!isLoaded && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-8 h-8 border-4 border-primary-200 border-t-primary-600 rounded-full animate-spin"></div>
            </div>
          )}
          <div
            className={`w-full relative ${((item.scrollOnHover || (isMobile && index < 3)) && isInView && isLoaded) ? 'animate-auto-scroll' : ''} transition-transform duration-[6000ms] ease-in-out group-hover:translate-y-[calc(-100%+12rem)]`}
            style={((item.scrollOnHover || (isMobile && index < 3)) && isInView && isLoaded) ? {
              animationDelay: isMobile && index < 3 ? `${index * 1}s` : `${randomDelays[index % randomDelays.length]}s`,
            } : {}}
          >
            {item.scrollOnHover ? (
              <Image
                src={item.image}
                alt={`${t.projectAlt}: ${item.title}`}
                className={`w-full h-auto block transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
                width={500}
                height={1000}
                priority={index < 3}
                onLoad={() => setIsLoaded(true)}
              />
            ) : (
              <div className="relative h-48 w-full">
                <Image
                  src={item.image}
                  alt={`${t.projectAlt}: ${item.title}`}
                  fill
                  sizes="(min-width:1024px) 33vw, (min-width:768px) 50vw, 100vw"
                  className={`object-cover object-top transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
                  priority={index < 3}
                  onLoad={() => setIsLoaded(true)}
                />
              </div>
            )}
          </div>

          {/* Category Badge */}
          <div className="absolute top-4 left-4 z-10">
            <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium">
              {item.category}
            </span>
          </div>
        </div>

        {/* Project Info */}
        <div className="p-6">
          <Link href={item.link} target="_blank" rel="noopener noreferrer">
            <h3 className="text-xl font-bold text-tech-dark mb-2 group-hover:text-primary-600 transition-colors">
              {item.title}
            </h3>
          </Link>
          <p className="text-gray-600 mb-4">
            {item.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {item.tags.map((tag: string, tagIndex: number) => (
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
              <p className="text-xs text-gray-500">{t.visitors}</p>
              <p className="font-bold text-primary-600">{item.stats.visitors}</p>
            </div>
            <div>
              <p className="text-xs text-gray-500">{t.conversion}</p>
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
  );
}

export default function PortfolioSection({ lang = 'FR' }: PortfolioSectionProps) {
  const [selectedCategory, setSelectedCategory] = React.useState(lang === 'FR' ? 'Tous' : 'All')
  const [isMobile, setIsMobile] = React.useState(false)
  const sectionRef = React.useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { amount: 0.1, once: false })

  React.useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const t = React.useMemo(() => ({
    FR: {
      badge: 'Portfolio',
      title: 'Nos Réalisations Récentes',
      description: 'Découvrez une sélection de projets qui illustrent notre expertise et notre capacité à créer des solutions digitales performantes.',
      categories: ['Tous', 'E-commerce', 'Location', 'Restaurant', 'Location Airbnb', 'Immobilier', 'Cabinet Médical', 'Livraison'],
      items: [
        {
          category: 'Cabinet Médical',
          description: 'Clinique dentaire de pointe à Tanger, Maroc, avec une présence digitale élégante et fonctionnelle.',
        },
        {
          category: 'E-commerce',
          description: 'Boutique en ligne moderne avec gestion des produits, SEO optimisé et performances élevées',
        },
        {
          category: 'Location',
          description: 'Système de réservation en ligne pour location de voitures à Laayoune avec interface intuitive',
        },
        {
          category: 'Restaurant',
          description: 'Site de restaurant à Marrakech avec système de réservation de tables en ligne',
        },
        {
          category: 'Location Airbnb',
          description: 'Listing Airbnb luxueux à Tamraght avec système de réservation et sélecteur de calendrier',
        },
        {
          category: 'Location',
          description: 'Site simple et efficace pour entreprise de location de voitures',
        },
        {
          category: 'Immobilier',
          description: 'Agence immobilière à Marrakech permettant aux utilisateurs de trouver des biens adaptés',
        },
        {
          category: 'Cabinet Médical',
          description: 'Cabinet dentaire à Agadir avec visuels magnifiques, SEO optimisé et performances élevées',
        },
        {
          category: 'Location',
          description: 'Agence premium de location de voitures à Rabat avec flotte de luxe et service chauffeur professionnel',
        },
        {
          category: 'Location',
          description: 'Location de voitures à Rabat avec système de réservation en ligne et assistance 24h/24',
        },
        {
          category: 'Location',
          description: 'Site web moderne pour club de surf à Essaouira avec design épuré et expérience utilisateur optimale',
        },
        {
          category: 'Location',
          description: 'Site de location de voitures professionnel avec système de réservation en ligne et gestion de flotte',
        },
        {
          category: 'E-commerce',
          description: 'Boutique e-commerce premium spécialisée dans les rituels de beauté et cosmétiques marocains de luxe.',
        },
        {
          category: 'Location',
          description: 'Service de location de voitures premium à Agadir avec un large choix de véhicules et assistance 24/7.',
        },
        {
          category: 'Livraison',
          description: 'Solution logistique innovante au Maroc avec suivi de colis en temps réel et portail dédié pour les entreprises.',
        },
        {
          category: 'Livraison',
          description: 'Plateforme de livraison marocaine ultra-moderne avec des animations fluides et une expérience utilisateur immersive.',
        },
        {
          category: 'Restaurant',
          description: 'Site de restauration vibrant avec un design graphique soigné, permettant la commande en ligne de manière simple et intuitive.',
        }
      ],
      visitors: 'Visiteurs',
      conversion: 'Conversion',
      ctaText: 'Vous avez un projet en tête ? Discutons-en !',
      ctaButton: 'Voir Plus de Projets',
      projectAlt: 'Projet'
    },
    EN: {
      badge: 'Portfolio',
      title: 'Our Recent Achievements',
      description: 'Discover a selection of projects that illustrate our expertise and our ability to create high-performance digital solutions.',
      categories: ['All', 'E-commerce', 'Rental', 'Restaurant', 'Airbnb Rental', 'Real Estate', 'Medical Practice', 'Delivery'],
      items: [
        {
          category: 'Medical Practice',
          description: 'State-of-the-art dental clinic in Tangier, Morocco, with an elegant and functional digital presence.',
        },
        {
          category: 'E-commerce',
          description: 'Modern online store with product management, optimized SEO, and high performance.',
        },
        {
          category: 'Rental',
          description: 'Online booking system for car rental in Laayoune with an intuitive interface.',
        },
        {
          category: 'Restaurant',
          description: 'Restaurant site in Marrakech with an online table reservation system.',
        },
        {
          category: 'Airbnb Rental',
          description: 'Luxurious Airbnb listing in Tamraght with a booking system and calendar selector.',
        },
        {
          category: 'Rental',
          description: 'Simple and effective site for a car rental company.',
        },
        {
          category: 'Real Estate',
          description: 'Real estate agency in Marrakech allowing users to find suitable properties.',
        },
        {
          category: 'Medical Practice',
          description: 'Dental practice in Agadir with beautiful visuals, optimized SEO, and high performance.',
        },
        {
          category: 'Rental',
          description: 'Premium car rental agency in Rabat with a luxury fleet and professional chauffeur service.',
        },
        {
          category: 'Rental',
          description: 'Car rental in Rabat with online booking system and 24/7 assistance.',
        },
        {
          category: 'Rental',
          description: 'Modern website for a surf club in Essaouira with clean design and optimal user experience.',
        },
        {
          category: 'Rental',
          description: 'Professional car rental site with online booking system and fleet management.',
        },
        {
          category: 'E-commerce',
          description: 'Premium e-commerce boutique specializing in luxury Moroccan beauty rituals and cosmetics.',
        },
        {
          category: 'Rental',
          description: 'Premium car rental service in Agadir with a wide choice of vehicles and 24/7 assistance.',
        },
        {
          category: 'Delivery',
          description: 'Innovative logistics solution in Morocco with real-time parcel tracking and dedicated portal for businesses.',
        },
        {
          category: 'Delivery',
          description: 'Ultra-modern Moroccan delivery platform with fluid animations and immersive user experience.',
        },
        {
          category: 'Restaurant',
          description: 'Vibrant restaurant site with careful graphic design, allowing online ordering in a simple and intuitive way.',
        }
      ],
      visitors: 'Visitors',
      conversion: 'Conversion',
      ctaText: 'Have a project in mind? Let\'s talk!',
      ctaButton: 'See More Projects',
      projectAlt: 'Project'
    }
  }[lang]), [lang]);

  const translatedPortfolioItems = React.useMemo(() => portfolioItems.map((item, index) => ({
    ...item,
    ...t.items[index]
  })), [t.items])

  const filteredItems = React.useMemo(() => {
    const baseItems = selectedCategory === (lang === 'FR' ? 'Tous' : 'All')
      ? translatedPortfolioItems.filter(item => !item.hideFromAll)
      : translatedPortfolioItems.filter(item => item.category === selectedCategory);
    return baseItems;
  }, [selectedCategory, lang, translatedPortfolioItems])

  const displayedItems = React.useMemo(() => (isMobile && (selectedCategory === 'Tous' || selectedCategory === 'All'))
    ? filteredItems.slice(0, 3)
    : filteredItems, [isMobile, selectedCategory, filteredItems])

  const randomDelays = React.useMemo(() => {
    return Array.from({ length: 50 }, () => Math.random() * 10)
  }, [])

  return (
    <section id="portfolio" ref={sectionRef} className="pt-10 pb-20 lg:pt-16 lg:pb-32 bg-white snipcss-odHLl">
      <style jsx global>{`
        @keyframes autoScrollReturn {
          0%, 10% { transform: translateY(0); }
          45%, 55% { transform: translateY(calc(-100% + 12rem)); }
          90%, 100% { transform: translateY(0); }
        }
        .animate-auto-scroll {
          animation: autoScrollReturn 15s ease-in-out infinite;
        }
        .pause-on-hover:hover .animate-auto-scroll {
          animation-play-state: paused;
        }
      `}</style>

      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="badge-gradient" id="portfolio">
            {t.badge}
          </span>
          <h2 className="hero-title-premium">
            {t.title}
          </h2>
          <p className="hero-subtitle-premium mx-auto">
            {t.description}
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 md:gap-4 mb-12 pb-4"
        >
          {t.categories.map((category: string) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-5 py-2 rounded-full font-medium transition-all duration-300 whitespace-nowrap text-sm ${selectedCategory === category
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
          {displayedItems.map((item, index) => (
            <PortfolioCard
              key={item.id}
              item={item}
              index={index}
              isInView={isInView}
              randomDelays={randomDelays}
              t={t}
              isMobile={isMobile}
            />
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
            {t.ctaText}
          </p>
          <motion.a
            href={lang === 'EN' ? "/en/portfolio/" : "/portfolio"}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 bg-primary-600 text-white px-8 py-4 rounded-lg font-medium hover:bg-primary-700 transition-colors"
          >
            {t.ctaButton}
            <ChevronRight size={20} />
          </motion.a>
        </motion.div>
      </div>
    </section >
  )
}
