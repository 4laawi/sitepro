'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, Phone, Mail, ArrowRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { label: 'Accueil', href: '/' },
    { label: 'Services', href: '#services' },
    { label: 'Portfolio', href: '/portfolio' },
    { label: 'Création de Sites Web', href: '/creation-site-web' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <>
      {/* Top Bar */}
      <motion.div 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="bg-gradient-to-r from-primary-800 to-primary-900 text-white py-2 text-sm"
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          <p className="hidden sm:block">
            <span className="animate-pulse">🚀</span> Votre succès digital commence ici
          </p>
          <div className="flex items-center gap-6 mx-auto sm:mx-0">
            <a href="tel:+2120663711164" className="flex items-center gap-2 hover:text-primary-200 transition-colors">
              <Phone size={16} />
              <span className="font-medium">+212 06 63 71 11 64</span>
            </a>
            <span className="bg-primary-600 px-3 py-1 rounded-full text-xs font-medium animate-pulse">
              Devis Gratuit
            </span>
          </div>
        </div>
      </motion.div>

      {/* Main Header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-lg py-2' 
            : 'bg-white/80 backdrop-blur-sm py-4'
        }`}
      >
        <nav className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center group">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex items-center"
              >
                <Image
                  src="/logo.png"
                  alt="Sitepro.ma - Agence Web Maroc"
                  width={200}
                  height={60}
                  className="h-10 w-auto group-hover:scale-105 transition-transform duration-300"
                  priority
                />
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={item.href}
                    className="relative text-gray-700 hover:text-primary-600 font-medium transition-colors group"
                  >
                    {item.label}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-600 group-hover:w-full transition-all duration-300" />
                  </Link>
                </motion.div>
              ))}
              
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 }}
              >
                <Link
                  href="#contact"
                  className="bg-gradient-to-r from-primary-600 to-primary-700 text-white px-6 py-2.5 rounded-lg font-medium hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center gap-2 group"
                >
                  CONTACTEZ-NOUS
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>

          {/* Mobile Navigation */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="lg:hidden overflow-hidden"
              >
                <div className="py-4 space-y-3">
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        href={item.href}
                        className="block py-2 px-4 text-gray-700 hover:text-primary-600 hover:bg-primary-50 rounded-lg font-medium transition-all"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.label}
                      </Link>
                    </motion.div>
                  ))}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                  >
                    <Link
                      href="#contact"
                      className="block bg-gradient-to-r from-primary-600 to-primary-700 text-white px-6 py-3 rounded-lg font-medium text-center hover:shadow-lg transition-all"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      CONTACTEZ-NOUS
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </header>
    </>
  )
}
