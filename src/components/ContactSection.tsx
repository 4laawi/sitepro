'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { 
  Phone, 
  Mail, 
  MapPin, 
  Send, 
  Clock, 
  MessageSquare,
  CheckCircle
} from 'lucide-react'

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    projectType: '',
    budget: '',
    deadline: '',
    description: '',
    source: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError('')
    
    try {
      // Create query string from form data
      const queryParams = new URLSearchParams({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        company: formData.company,
        projectType: formData.projectType,
        budget: formData.budget,
        deadline: formData.deadline,
        description: formData.description,
        source: formData.source
      })

      await fetch(`https://script.google.com/macros/s/AKfycbz9AAzzOr0zzbo7fc9tTEmEqGDWYZxj1FAsomPjvVVRDS4lVDdzqkAojIfnOdsEqNIu/exec?${queryParams.toString()}`, {
        method: 'GET',
        mode: 'no-cors' // This is required for Google Apps Script
      })

      // Since we're using no-cors, we can't read the response
      // But we can assume success if no error was thrown
      setIsSubmitted(true)
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        projectType: '',
        budget: '',
        deadline: '',
        description: '',
        source: ''
      })
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false)
      }, 5000)
      
    } catch (err) {
      setError('Erreur lors de l\'envoi du formulaire. Veuillez réessayer.')
      console.error('Form submission error:', err)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const contactInfo = [
    {
      icon: Phone,
      title: 'Téléphone',
      content: '+212 06 63 71 11 64',
      link: 'tel:+2120663711164'
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'contact@sitepro.ma',
      link: 'mailto:contact@sitepro.ma'
    },
    {
      icon: MapPin,
      title: 'Adresse',
      content: 'Marrakech, Maroc',
      link: '#'
    },
    {
      icon: Clock,
      title: 'Horaires',
      content: 'Lun-Ven: 9h-18h',
      link: '#'
    }
  ]

  return (
    <section id="contact" className="py-20 lg:py-32 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-100 rounded-full blur-3xl opacity-20" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-20" />

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
            Contact
          </span>
          <h2 className="heading-2 text-tech-dark mb-4">
            Parlons de votre projet
          </h2>
          <p className="body-large text-gray-600 max-w-3xl mx-auto">
            Prêt à donner vie à votre vision ? Contactez-nous pour une consultation 
            gratuite et découvrez comment nous pouvons transformer votre présence digitale.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-10">
              <h3 className="heading-3 mb-6">Envoyez-nous un message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <motion.div whileFocus={{ scale: 1.02 }}>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary-500 transition-colors"
                      placeholder="Ahmed Bennani"
                    />
                  </motion.div>
                  
                  <motion.div whileFocus={{ scale: 1.02 }}>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary-500 transition-colors"
                      placeholder="ahmed@restaurant.ma"
                    />
                  </motion.div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <motion.div whileFocus={{ scale: 1.02 }}>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Téléphone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary-500 transition-colors"
                      placeholder="06 12 34 56 78"
                    />
                  </motion.div>
                  
                  <motion.div whileFocus={{ scale: 1.02 }}>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Entreprise
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary-500 transition-colors"
                      placeholder="Restaurant Al Fassia"
                    />
                  </motion.div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <motion.div whileFocus={{ scale: 1.02 }}>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Type de projet *
                    </label>
                    <select
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary-500 transition-colors"
                    >
                      <option value="">Sélectionnez</option>
                      <option value="Site Web">Site Web</option>
                      <option value="E-commerce">E-commerce</option>
                      <option value="Application Mobile">Application Mobile</option>
                      <option value="Site Vitrine">Site Vitrine</option>
                      <option value="Référencement SEO">Référencement SEO</option>
                      <option value="Autre">Autre</option>
                    </select>
                  </motion.div>
                  
                  <motion.div whileFocus={{ scale: 1.02 }}>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Budget estimé
                    </label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary-500 transition-colors"
                    >
                      <option value="">Sélectionnez</option>
                      <option value="À partir de 1300 MAD">À partir de 1300 MAD</option>
                      <option value="2000 – 3500 MAD">2000 – 3500 MAD</option>
                      <option value="3500 – 5000 MAD">3500 – 5000 MAD</option>
                      <option value="5000+ MAD (sur mesure)">5000+ MAD (sur mesure)</option>
                    </select>
                  </motion.div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <motion.div whileFocus={{ scale: 1.02 }}>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Délai souhaité
                    </label>
                    <select
                      name="deadline"
                      value={formData.deadline}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary-500 transition-colors"
                    >
                      <option value="">Sélectionnez</option>
                      <option value="Dans 1 semaine">Dans 1 semaine</option>
                      <option value="Dans 1 mois">Dans 1 mois</option>
                      <option value="Dans 3 mois">Dans 3 mois</option>
                      <option value="Flexible">Flexible</option>
                    </select>
                  </motion.div>
                  
                  <motion.div whileFocus={{ scale: 1.02 }}>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Comment nous avez-vous trouvés ?
                    </label>
                    <select
                      name="source"
                      value={formData.source}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary-500 transition-colors"
                    >
                      <option value="">Sélectionnez</option>
                      <option value="Google Search">Google Search</option>
                      <option value="Réseaux sociaux">Réseaux sociaux</option>
                      <option value="Recommandation">Recommandation</option>
                      <option value="Autre">Autre</option>
                    </select>
                  </motion.div>
                </div>

                <motion.div whileFocus={{ scale: 1.01 }}>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Description du projet *
                  </label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary-500 transition-colors resize-none"
                    placeholder="Décrivez votre projet en détail..."
                  />
                </motion.div>

                {error && (
                  <div className="text-red-600 text-sm -mt-2">{error}</div>
                )}

                <motion.button
                  type="submit"
                  disabled={isSubmitting || isSubmitted}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-4 rounded-lg font-medium transition-all duration-300 flex items-center justify-center gap-2 ${
                    isSubmitted 
                      ? 'bg-green-600 text-white' 
                      : 'bg-primary-600 hover:bg-primary-700 text-white'
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Envoi en cours...
                    </>
                  ) : isSubmitted ? (
                    <>
                      <CheckCircle size={20} />
                      Message envoyé !
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      Envoyer le message
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Quick Contact */}
            <div className="bg-primary-600 text-white rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4">Besoin d&apos;aide rapide ?</h3>
              <p className="mb-6 text-white/90">
                Notre équipe est là pour répondre à toutes vos questions et vous 
                accompagner dans votre projet digital.
              </p>
              <div className="flex items-center gap-3 mb-4">
                <MessageSquare size={20} />
                <span>Réponse sous 24h</span>
              </div>
              <a
        href="https://wa.me/2120663711164"
                className="inline-flex items-center gap-2 bg-white text-primary-600 px-6 py-3 rounded-lg font-medium hover:shadow-lg transition-all duration-300"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                Chat WhatsApp
              </a>
            </div>

            {/* Contact Details */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.link}
                  whileHover={{ x: 5 }}
                  className="bg-white rounded-xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center group-hover:bg-primary-600 transition-colors">
                    <info.icon size={24} className="text-primary-600 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-500 text-sm">{info.title}</h4>
                    <p className="text-tech-dark font-medium">{info.content}</p>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
