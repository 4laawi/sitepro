'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Facebook, 
  Instagram, 
  Linkedin, 
  Twitter, 
  Mail, 
  Phone, 
  MapPin,
  ArrowUp,
  Heart
} from 'lucide-react'
import { useEffect, useState } from 'react'

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const footerLinks = {
    services: [
      { label: 'Création de Sites Web', href: '/creation-site-web' },
      { label: 'E-commerce', href: '/e-commerce' },
      { label: 'Applications Mobiles', href: '/applications-mobiles' },
      { label: 'Référencement SEO', href: '/referencement-seo' },
      { label: 'Design & Branding', href: '/design-branding' },
      { label: 'Maintenance & Support', href: '/maintenance-support' },
    ],
    company: [
      { label: 'À propos', href: '/#about' },
      { label: 'Portfolio', href: '/portfolio' },
      { label: 'Blog', href: '/blog' },
      { label: 'Contact', href: '/#contact' },
    ],
    legal: [
      { label: 'Mentions Légales', href: '/mentions-legales' },
      { label: 'Politique de Confidentialité', href: '/politique-de-confidentialite' },
      { label: 'CGV', href: '/cgv' },
      { label: 'Cookies', href: '/cookies' },
    ],
  }

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
  ]

  return (
    <footer className="bg-tech-dark text-white relative">

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Link href="/" className="inline-block mb-6">
              <Image
                src="/logo.png"
                alt="Sitepro.ma - Agence Web Maroc"
                width={150}
                height={50}
                className="h-10 w-auto filter brightness-0 invert hover:scale-105 transition-transform duration-300"
              />
            </Link>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Votre partenaire digital de confiance au Maroc. 
              Nous créons des expériences web exceptionnelles 
              qui propulsent votre business.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-10 h-10 bg-white/10 hover:bg-primary-600 rounded-lg flex items-center justify-center transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Services Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-6">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-primary-400 transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-4 h-0.5 bg-primary-400 transition-all duration-300" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-6">Entreprise</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-primary-400 transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-4 h-0.5 bg-primary-400 transition-all duration-300" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-6">Contact</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+2120663711164"
                  className="flex items-center gap-3 text-gray-400 hover:text-primary-400 transition-colors"
                >
                  <Phone size={18} />
                  +212 06 63 71 11 64
                </a>
              </li>
              <li>
                <a
                  href="mailto:contact@sitepro.ma"
                  className="flex items-center gap-3 text-gray-400 hover:text-primary-400 transition-colors"
                >
                  <Mail size={18} />
                  contact@sitepro.ma
                </a>
              </li>
              <li className="flex items-start gap-3 text-gray-400">
                <MapPin size={18} className="mt-1" />
                <span>
                  Marrakech, Maroc<br />
                  Avenue Mohammed VI
                </span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2024 Sitepro.ma. Tous droits réservés.
            </p>
            
            <div className="flex items-center gap-6">
              {footerLinks.legal.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="text-gray-400 hover:text-primary-400 text-sm transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
            
            <p className="text-gray-400 text-sm flex items-center gap-1">
              Fait avec <Heart size={16} className="text-red-500" /> au Maroc
            </p>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 w-12 h-12 bg-primary-600 hover:bg-primary-700 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 z-50"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
          >
            <ArrowUp size={20} />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  )
}
