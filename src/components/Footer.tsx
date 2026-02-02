'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
import {
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Mail,
  Phone,
  MapPin
} from 'lucide-react'


export default function Footer() {
  const pathname = usePathname()

  // Determine language based on route
  const language = pathname.startsWith('/en') ? 'EN' : 'FR'

  const t = {
    FR: {
      tagline: 'Votre partenaire digital de confiance au Maroc. Nous créons des expériences web exceptionnelles qui propulsent votre business.',
      services: 'Services',
      company: 'Entreprise',
      contact: 'Contact',
      rights: 'Tous droits réservés.',
      serviceLinks: [
        { label: 'Création de Sites Web', href: '/creation-site-web-maroc' },
        { label: 'E-commerce', href: '/e-commerce' },
        { label: 'Applications Mobiles', href: '/application-mobile-maroc' },
        { label: 'Référencement SEO', href: '/referencement-seo' },
        { label: 'Design & Branding', href: '/design-branding' },
        { label: 'Maintenance & Support', href: '/maintenance-site-web-maroc' },
      ],
      companyLinks: [
        { label: 'À propos', href: '/#about' },
        { label: 'Portfolio', href: '/portfolio' },
        { label: 'Villes', href: '/#villes' },
        { label: 'Contact', href: '/#contact' },
      ],
      legalLinks: [
        { label: 'Mentions Légales', href: '#' },
        { label: 'Politique de Confidentialité', href: '#' },
        { label: 'CGV', href: '#' },
        { label: 'Cookies', href: '#' },
      ]
    },
    EN: {
      tagline: 'Your trusted digital partner in Morocco. We create exceptional web experiences that propel your business.',
      services: 'Services',
      company: 'Company',
      contact: 'Contact',
      rights: 'All rights reserved.',
      serviceLinks: [
        { label: 'Website Creation', href: '/creation-site-web-maroc' },
        { label: 'E-commerce', href: '/e-commerce' },
        { label: 'Mobile Applications', href: '/application-mobile-maroc' },
        { label: 'SEO Ranking', href: '/referencement-seo' },
        { label: 'Design & Branding', href: '/design-branding' },
        { label: 'Maintenance & Support', href: '/maintenance-site-web-maroc' },
      ],
      companyLinks: [
        { label: 'About Us', href: '/#about' },
        { label: 'Portfolio', href: '/portfolio' },
        { label: 'Cities', href: '/#villes' },
        { label: 'Contact', href: '/#contact' },
      ],
      legalLinks: [
        { label: 'Legal Notice', href: '#' },
        { label: 'Privacy Policy', href: '#' },
        { label: 'Terms of Service', href: '#' },
        { label: 'Cookies', href: '#' },
      ]
    }
  }[language];


  const socialLinks = [
    { icon: Facebook, href: 'https://web.facebook.com/spongebobbffring/', label: 'Facebook' },
    { icon: Instagram, href: 'https://www.instagram.com/sitepro.ma/', label: 'Instagram' },
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
                src="/Logo-site-web-pro-maroc.webp"
                alt="Sitepro.ma - Agence Web Maroc"
                width={150}
                height={50}
                className="h-14 w-auto filter brightness-0 invert hover:scale-105 transition-transform duration-300"
              />
            </Link>
            <p className="text-gray-400 mb-6 leading-relaxed">
              {t.tagline}
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
            <h4 className="text-lg font-semibold mb-6">{t.services}</h4>
            <ul className="space-y-3">
              {t.serviceLinks.map((link, index) => (
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
            <h4 className="text-lg font-semibold mb-6">{t.company}</h4>
            <ul className="space-y-3">
              {t.companyLinks.map((link, index) => (
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
            <h4 className="text-lg font-semibold mb-6">{t.contact}</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+212663711164"
                  className="flex items-center gap-3 text-gray-400 hover:text-primary-400 transition-colors"
                >
                  <Phone size={18} />
                  +212 6 63 71 11 64
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
              © 2024 Sitepro.ma. {t.rights}
            </p>

            <div className="flex items-center gap-6">
              {t.legalLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="text-gray-400 hover:text-primary-400 text-sm transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

    </footer>
  )
}
