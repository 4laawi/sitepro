'use client'

import { motion } from 'framer-motion'
import { Award, Users, Target, Zap, CheckCircle } from 'lucide-react'
import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer'

export default function AboutSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  const stats = [
    { value: 8, suffix: '+', label: 'Années d\'expérience' },
    { value: 500, suffix: '+', label: 'Projets livrés' },
    { value: 98, suffix: '%', label: 'Clients satisfaits' },
    { value: 24, suffix: '/7', label: 'Support client' },
  ]

  const features = [
    'Expertise technique de pointe',
    'Design créatif et moderne',
    'Approche orientée résultats',
    'Support continu et maintenance',
    'Tarifs compétitifs et transparents',
    'Délais de livraison respectés',
  ]

  return (
    <section id="about" className="py-20 lg:py-32 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 50,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute -top-40 -right-40 w-80 h-80 border border-primary-100 rounded-full"
      />

      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content - Images */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative">
              {/* Main Image */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative z-10 rounded-2xl overflow-hidden shadow-2xl"
              >
                <div className="aspect-[4/3] bg-gradient-to-br from-primary-600 to-primary-700 flex items-center justify-center">
                  <div className="text-white text-center p-8">
                    <motion.div
                      animate={{
                        scale: [1, 1.1, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                      }}
                    >
                      <Award size={80} className="mx-auto mb-4" />
                    </motion.div>
                    <h3 className="text-2xl font-bold mb-2">Agence Certifiée</h3>
                    <p>Excellence & Innovation</p>
                  </div>
                </div>
              </motion.div>

              {/* Floating Cards */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl z-20"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <CheckCircle className="text-green-600" size={24} />
                  </div>
                  <div>
                    <div className="text-2xl font-bold">100%</div>
                    <div className="text-sm text-gray-600">Projets réussis</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="absolute -top-6 -right-6 bg-white p-6 rounded-xl shadow-xl z-20"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Users className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <div className="text-2xl font-bold">20+</div>
                    <div className="text-sm text-gray-600">Experts</div>
                  </div>
                </div>
              </motion.div>

              {/* Background Shapes */}
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary-100 rounded-full opacity-50 blur-2xl" />
              <div className="absolute -top-10 -right-10 w-60 h-60 bg-blue-100 rounded-full opacity-50 blur-2xl" />
            </div>
          </motion.div>

          {/* Right Content - Text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-4">
              À propos de nous
            </span>
            
            <h2 className="heading-2 text-tech-dark mb-6">
              Votre partenaire digital 
              <span className="text-primary-600"> de confiance</span>
            </h2>
            
            <p className="body-large text-gray-600 mb-8">
              Depuis plus de 8 ans, Sitepro.ma accompagne les entreprises marocaines 
              dans leur transformation digitale. Notre équipe d'experts passionnés 
              combine créativité, innovation et expertise technique pour créer des 
              solutions web qui dépassent vos attentes.
            </p>

            {/* Features List */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3"
                >
                  <div className="w-5 h-5 bg-primary-600 rounded-full flex items-center justify-center">
                    <CheckCircle size={14} className="text-white" />
                  </div>
                  <span className="text-gray-700">{feature}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block"
            >
              <a
                href="#contact"
                className="inline-flex items-center gap-3 bg-primary-600 text-white px-8 py-4 rounded-lg font-medium hover:bg-primary-700 transition-colors"
              >
                <Target size={20} />
                Discutons de votre projet
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-4xl lg:text-5xl font-bold text-primary-600 mb-2">
                {inView && (
                  <CountUp
                    start={0}
                    end={stat.value}
                    duration={2}
                    suffix={stat.suffix}
                  />
                )}
              </div>
              <p className="text-gray-600">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
