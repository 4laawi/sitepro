'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { Check, Sparkles, Monitor, Gauge, Headphones, Timer } from 'lucide-react'
import AnimatedBackground from './AnimatedBackground'
import WavyText from './WavyText'
import Image from 'next/image';

export default function HeroSection() {
  const [currentStep, setCurrentStep] = useState(1)
  const [name, setName] = useState('')
  const [websiteType, setWebsiteType] = useState('')
  const [sector, setSector] = useState('')
  const [deadline, setDeadline] = useState('')
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Only proceed if we're on step 4 and all data is complete
    if (currentStep !== 4 || !canProceed()) {
      console.log('Form submission blocked:', { currentStep, canProceed: canProceed() })
      return
    }
    
    const message = [
      'Bonjour Sitepro.ma 👋',
      'Je souhaite obtenir un devis pour la création de mon site web.',
      'Voici les informations :',
      `- Nom : ${name}`,
      `- Type de site : ${websiteType}`,
      `- Secteur d'activité : ${sector}`,
      `- Deadline : ${deadline}`,
      '',
      'Merci de me recontacter au plus vite pour en discuter. 📩',
    ].join('\n')

    const phone = '2120663711164'
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`
    window.open(url, '_blank')
    
    // Close modal after submission
    setIsModalOpen(false)
    setCurrentStep(1)
    setName('')
    setWebsiteType('')
    setSector('')
    setDeadline('')
  }

  const canProceed = () => {
    if (currentStep === 1) return name.trim().length > 1
    if (currentStep === 2) return websiteType !== ''
    if (currentStep === 3) return sector !== ''
    if (currentStep === 4) return deadline !== ''
    return false
  }

  const openModal = () => {
    setIsModalOpen(true)
    setCurrentStep(1)
    setName('')
    setWebsiteType('')
    setSector('')
    setDeadline('')
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setCurrentStep(1)
    setName('')
    setWebsiteType('')
    setSector('')
    setDeadline('')
  }

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Award-worthy Animated Background */}
      <AnimatedBackground />

      <div className="relative container mx-auto px-4 py-20 lg:py-28" style={{ zIndex: 10 }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Image - Top of Section with Enhanced Design */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1, ease: "easeOut" }}
            className="text-center mb-16 relative lg:hidden"
          >
            {/* Decorative background elements */}
            <div className="absolute inset-0 -z-10">
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-50/50 via-purple-50/30 to-cyan-50/50 rounded-full blur-3xl opacity-60"></div>
              <div className="absolute top-0 left-1/4 w-32 h-32 bg-gradient-to-br from-blue-200/40 to-purple-200/40 rounded-full blur-2xl animate-pulse"></div>
              <div className="absolute top-0 right-1/4 w-24 h-24 bg-gradient-to-br from-cyan-200/40 to-blue-200/40 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>

            <div className="relative flex justify-center group">
              {/* Enhanced hero image with hover effects */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="relative"
              >
                <Image
                  src="/hero-img.png"
                  alt="Sitepro - Sites web professionnels"
                  width={900}
                  height={700}
                  sizes="(max-width: 1024px) 100vw, 900px"
                  className="w-full max-w-5xl h-auto rounded-3xl shadow-2xl border border-white/20"
                  priority
                />
                
                {/* Enhanced floating elements with better positioning and margins */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ delay: 1, duration: 0.8, ease: "easeOut" }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="absolute -bottom-8 bg-gradient-to-br from-white/95 to-white/90 backdrop-blur-xl p-6 rounded-2xl shadow-2xl border border-white/30 hover:shadow-3xl transition-all duration-300"
                  style={{ left: 'max(-32px, calc(-50vw + 50% + 20px))' }}
                >
                  <div className="text-center">
                    <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">500+</div>
                    <div className="text-sm font-medium text-gray-600 mt-1">Sites créés</div>
                    <div className="w-8 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mt-2"></div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.8, y: -20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ delay: 1.2, duration: 0.8, ease: "easeOut" }}
                  whileHover={{ scale: 1.05, y: 5 }}
                  className="absolute -top-8 bg-gradient-to-br from-white/95 to-white/90 backdrop-blur-xl p-6 rounded-2xl shadow-2xl border border-white/30 hover:shadow-3xl transition-all duration-300"
                  style={{ right: 'max(-32px, calc(-50vw + 50% + 20px))' }}
                >
                  <div className="text-center">
                    <div className="text-3xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">24/7</div>
                    <div className="text-sm font-medium text-gray-600 mt-1">Support</div>
                    <div className="w-8 h-1 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full mx-auto mt-2"></div>
                  </div>
                </motion.div>

                {/* Interactive floating dots */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 pointer-events-none"
                >
                  {[...Array(6)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-3 h-3 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-60"
                      style={{
                        left: `${(50 + 40 * Math.cos(i * Math.PI / 3)).toFixed(3)}%`,
                        top: `${(50 + 40 * Math.sin(i * Math.PI / 3)).toFixed(3)}%`,
                      }}
                      animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.6, 1, 0.6],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: i * 0.5,
                      }}
                    />
                  ))}
                </motion.div>
              </motion.div>
            </div>
          </motion.div>

          {/* Enhanced Content Grid with Better Spacing (Desktop two-columns) */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content - Enhanced Text & CTA */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 1, ease: "easeOut" }}
              className="space-y-8"
            >
              {/* Simple, non-animated badge for performance */}
              <div
                className="inline-flex items-center gap-2 bg-white/90 text-blue-700 px-4 py-2 rounded-xl text-sm font-semibold border border-blue-200"
              >
                <Sparkles className="w-4 h-4" />
                <span>Leader de la création web au Maroc</span>
              </div>

              {/* Enhanced Main Heading */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 1, ease: "easeOut" }}
                className="space-y-4"
              >
                <h1 className="heading-1 text-gray-900 leading-tight">
                  Votre Agence Web{' '}
                  <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
                    Sitepro.ma
                  </span>
                </h1>
                <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
              </motion.div>

              {/* Enhanced Description */}
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 1, ease: "easeOut" }}
                className="body-large text-gray-600 leading-relaxed text-lg"
              >
                Transformez votre présence digitale avec des sites web qui convertissent. 
                Nous créons des expériences web uniques qui propulsent votre entreprise vers de nouveaux sommets.
              </motion.p>

              {/* Enhanced Features List */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 1, ease: "easeOut" }}
                className="space-y-2 md:space-y-3"
              >
                {[
                  { text: 'Sites web responsifs et modernes', Icon: Monitor },
                  { text: 'Optimisation SEO et performance', Icon: Gauge },
                  { text: 'Support technique 24/7', Icon: Headphones },
                  { text: 'Délais de livraison garantis', Icon: Timer }
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.6 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-2 md:gap-3 p-0 rounded-xl transition-all duration-300 group"
                  >
                    <feature.Icon className="w-5 h-5 md:w-6 md:h-6 text-primary-600 group-hover:text-primary-700 transition-colors" />
                    <WavyText
                      text={feature.text}
                      className="m-0 leading-snug body-normal text-gray-700 font-medium"
                      delay={index * 1.1}
                    />
                  </motion.div>
                ))}
              </motion.div>

              {/* Enhanced CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 1, ease: "easeOut" }}
                className="pt-4"
              >
                <motion.button
                  onClick={openModal}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative px-10 py-5 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 text-white rounded-2xl font-bold text-lg shadow-2xl hover:shadow-3xl transition-all duration-300 overflow-hidden"
                >
                  <span className="relative z-10">Obtenez un devis</span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-blue-700 via-purple-700 to-cyan-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />
                  <motion.div
                    className="absolute -inset-1 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 rounded-2xl blur opacity-30 group-hover:opacity-100 transition-opacity duration-300"
                  />
                </motion.button>
              </motion.div>
            </motion.div>
            {/* Right Column - Desktop Hero Visuals */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 1, ease: "easeOut" }}
              className="hidden lg:flex justify-center"
            >
              <div className="relative flex justify-center group">
                {/* Enhanced hero image with hover effects */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="relative"
                >
                  <Image
                    src="/hero-img.png"
                    alt="Sitepro - Sites web professionnels"
                    width={900}
                    height={700}
                    sizes="(min-width:1024px) 780px, 100vw"
                    className="w-full max-w-[780px] h-auto rounded-3xl shadow-2xl border border-white/20"
                    priority
                  />

                  {/* Enhanced floating elements with better positioning and margins */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ delay: 1, duration: 0.8, ease: "easeOut" }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="absolute -bottom-8 bg-gradient-to-br from-white/95 to-white/90 backdrop-blur-xl p-6 rounded-2xl shadow-2xl border border-white/30 hover:shadow-3xl transition-all duration-300"
                    style={{ left: 'max(-32px, calc(-50vw + 50% + 20px))' }}
                  >
                    <div className="text-center">
                      <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">500+</div>
                      <div className="text-sm font-medium text-gray-600 mt-1">Sites créés</div>
                      <div className="w-8 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mt-2"></div>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, scale: 0.8, y: -20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ delay: 1.2, duration: 0.8, ease: "easeOut" }}
                    whileHover={{ scale: 1.05, y: 5 }}
                    className="absolute -top-8 bg-gradient-to-br from-white/95 to-white/90 backdrop-blur-xl p-6 rounded-2xl shadow-2xl border border-white/30 hover:shadow-3xl transition-all duration-300"
                    style={{ right: 'max(-32px, calc(-50vw + 50% + 20px))' }}
                  >
                    <div className="text-center">
                      <div className="text-3xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">24/7</div>
                      <div className="text-sm font-medium text-gray-600 mt-1">Support</div>
                      <div className="w-8 h-1 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full mx-auto mt-2"></div>
                    </div>
                  </motion.div>

                  {/* Interactive floating dots */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 pointer-events-none"
                  >
                    {[...Array(6)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-3 h-3 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-60"
                        style={{
                          left: `${(50 + 40 * Math.cos(i * Math.PI / 3)).toFixed(3)}%`,
                          top: `${(50 + 40 * Math.sin(i * Math.PI / 3)).toFixed(3)}%`,
                        }}
                        animate={{
                          scale: [1, 1.5, 1],
                          opacity: [0.6, 1, 0.6],
                        }}
                        transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}
                      />
                    ))}
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Enhanced Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-md z-50 flex items-center justify-center p-4"
            onClick={closeModal}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 30 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="relative bg-gradient-to-br from-white/95 via-white/98 to-white/95 backdrop-blur-xl rounded-3xl shadow-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto border border-white/30"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Enhanced Close button (kept clear but aligned with modal padding) */}
              <motion.button
                onClick={closeModal}
                aria-label="Fermer le formulaire"
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                className="absolute top-4 right-4 w-10 h-10 bg-gradient-to-r from-gray-100 to-gray-200 hover:from-gray-200 hover:to-gray-300 rounded-full flex items-center justify-center transition-all duration-300 z-10 shadow-lg hover:shadow-xl"
              >
                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </motion.button>

              {/* Modal content */}
              <div className="p-8">
                <h3 className="heading-3 mb-6 text-gray-800 text-center">
                  Obtenez Votre Devis Gratuit
                </h3>
                
                {/* Step Indicators */}
                <div className="flex items-center justify-between mb-6 px-2 md:px-6">
                  {[1, 2, 3, 4].map((step) => (
                    <div key={step} className="flex items-center flex-1">
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        className="relative z-10"
                      >
                        <div
                          className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 ${
                            step <= currentStep
                              ? 'bg-gradient-to-r from-primary-600 to-primary-700 text-white shadow-lg'
                              : 'bg-gray-200 text-gray-500'
                          }`}
                        >
                          {step < currentStep ? <Check size={16} /> : step}
                        </div>
                      </motion.div>
                      {step < 4 && (
                        <div className={`flex-1 h-0.5 mx-2 transition-all duration-300 ${
                          step <= currentStep ? 'bg-primary-600' : 'bg-gray-300'
                        }`} />
                      )}
                    </div>
                  ))}
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <AnimatePresence mode="wait">
                    {currentStep === 1 && (
                      <motion.div
                        key="step-1"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                      >
                        <label className="block text-sm font-medium text-gray-700 mb-2">Votre Nom <span className="text-red-500">*</span></label>
                        <input
                          type="text"
                          placeholder="Entrez votre nom"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          onKeyDown={(e) => e.key === 'Enter' && e.preventDefault()}
                          className="w-full px-3 py-2.5 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-all duration-300 bg-white/80 backdrop-blur-sm shadow-inner"
                        />
                      </motion.div>
                    )}

                    {currentStep === 2 && (
                      <motion.div
                        key="step-2"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                      >
                        <label className="block text-sm font-medium text-gray-700 mb-2">Type de site</label>
                        <select
                          value={websiteType}
                          onChange={(e) => setWebsiteType(e.target.value)}
                          onKeyDown={(e) => e.key === 'Enter' && e.preventDefault()}
                          className="w-full px-3 py-2.5 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-all duration-300 bg-white/80 backdrop-blur-sm shadow-inner"
                        >
                          <option value="">Sélectionnez un type</option>
                          <option>Site vitrine</option>
                          <option>E-commerce</option>
                          <option>Site de réservation</option>
                          <option>Projet sur mesure</option>
                        </select>
                      </motion.div>
                    )}

                    {currentStep === 3 && (
                      <motion.div
                        key="step-3"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                      >
                        <label className="block text-sm font-medium text-gray-700 mb-2">Quel est votre secteur d&apos;activité ?</label>
                        <div className="grid grid-cols-2 gap-2">
                          {['Restaurant / Café', 'Magasin / Boutique', 'Services / Coaching', 'Autre'].map((option) => (
                            <button
                              key={option}
                              type="button"
                              onClick={() => setSector(option)}
                              className={`p-2.5 rounded-lg border-2 transition-all duration-300 text-xs font-medium ${
                                sector === option
                                  ? 'border-primary-500 bg-primary-50 text-primary-700 shadow-md'
                                  : 'border-gray-200 bg-white/60 hover:border-primary-300 hover:bg-primary-25'
                              }`}
                            >
                              {option}
                            </button>
                          ))}
                        </div>
                      </motion.div>
                    )}

                    {currentStep === 4 && (
                      <motion.div
                        key="step-4"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                      >
                        <label className="block text-sm font-medium text-gray-700 mb-2">Quand en avez-vous besoin ?</label>
                        <div className="space-y-2">
                          {['Dans 1 semaine', 'Dans 1 mois', 'Flexible'].map((option) => (
                            <button
                              key={option}
                              type="button"
                              onClick={() => setDeadline(option)}
                              className={`w-full p-2.5 rounded-lg border-2 transition-all duration-300 text-sm font-medium ${
                                deadline === option
                                  ? 'border-primary-500 bg-primary-50 text-primary-700 shadow-md'
                                  : 'border-gray-200 bg-white/60 hover:border-primary-300 hover:bg-primary-25'
                              }`}
                            >
                              {option}
                            </button>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Navigation Buttons */}
                  <div className="flex items-center justify-between pt-2">
                    {currentStep > 1 && (
                      <button
                        type="button"
                        onClick={() => setCurrentStep(currentStep - 1)}
                        className="text-sm text-gray-600 hover:text-primary-700 transition-colors"
                      >
                        Précédent
                      </button>
                    )}
                    {currentStep === 1 && <div></div>} {/* Placeholder to maintain flex spacing */}
                    
                    {currentStep < 4 ? (
                      <button
                        type="button"
                        onClick={() => setCurrentStep(currentStep + 1)}
                        disabled={!canProceed()}
                        className="ml-auto px-5 py-2 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-xl font-medium hover:from-primary-700 hover:to-primary-800 transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed text-sm"
                      >
                        Continuer
                      </button>
                    ) : (
                      <button
                        type="submit"
                        disabled={!canProceed()}
                        className="ml-auto px-5 py-2 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-xl font-medium hover:from-green-700 hover:to-green-800 transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed text-sm"
                      >
                        Envoyer sur WhatsApp
                      </button>
                    )}
                  </div>
                </form>

                {/* Trust indicator */}
                <div className="mt-4 pt-3 border-t border-gray-100">
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>97% de nos clients sont satisfaits</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
