'use client'

import { useRouter, usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import './Header.css'

export default function Header() {
  const router = useRouter()
  const pathname = usePathname()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [openMobileSubmenus, setOpenMobileSubmenus] = useState<{ [key: string]: boolean }>({})
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  // Determine language based on route
  const language = pathname.startsWith('/en') ? 'EN' : 'FR'

  const t = {
    FR: {
      creationWeb: 'Sites Web',
      portfolio: 'Portfolio',
      appsMobiles: 'Applications Mobiles',
      seoSea: 'SEO/SEA',
      creationWebSub: {
        siteWeb: 'Création site web',
        vitrine: 'Sites Vitrine',
        ecommerce: 'E-commerce',
        branding: 'Design & Branding',
        maintenance: 'Maintenance',
      },
      seoSub: {
        seo: 'Agence SEO',
        geo: 'Agence GEO',
        gmb: 'Agence GMB',
        ads: 'Google Ads',
      },
      contact: 'Contact',
      blog: 'Blog'
    },
    EN: {
      creationWeb: 'Websites',
      portfolio: 'Portfolio',
      appsMobiles: 'Mobile Apps',
      seoSea: 'SEO/SEA',
      creationWebSub: {
        siteWeb: 'Website Creation',
        vitrine: 'Showcase Sites',
        ecommerce: 'E-commerce',
        branding: 'Design & Branding',
        maintenance: 'Maintenance',
      },
      seoSub: {
        seo: 'SEO Agency',
        geo: 'GEO Agency',
        gmb: 'GMB Agency',
        ads: 'Google Ads',
      },
      contact: 'Contact',
      blog: 'Blog'
    }
  }[language];

  const toggleLanguage = (lang: 'FR' | 'EN') => {
    if (lang === 'EN' && !pathname.startsWith('/en')) {
      router.push('/en')
    } else if (lang === 'FR' && pathname.startsWith('/en')) {
      router.push('/')
    }
  }

  useEffect(() => {
    let ticking = false;

    const controlNavbar = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (typeof window !== 'undefined') {
            // Keep navbar visible on mobile/tablets
            if (window.innerWidth < 1024) {
              setIsVisible(true)
              ticking = false;
              return
            }

            const currentScrollY = window.scrollY

            // Always show navbar at the very top
            if (currentScrollY < 10) {
              setIsVisible(true)
            } else if (currentScrollY > lastScrollY) {
              // Scrolling down - hide navbar
              setIsVisible(false)
            } else {
              // Scrolling up - show navbar
              setIsVisible(true)
            }

            setLastScrollY(currentScrollY)
          }
          ticking = false;
        });
        ticking = true;
      }
    }

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar)

      // Close dropdown on click outside
      const handleClickOutside = (event: MouseEvent) => {
        if (openDropdown && !(event.target as Element).closest('.relative.group')) {
          setOpenDropdown(null)
        }
      }
      document.addEventListener('click', handleClickOutside)

      // Cleanup
      return () => {
        window.removeEventListener('scroll', controlNavbar)
        document.removeEventListener('click', handleClickOutside)
      }
    }
  }, [lastScrollY, openDropdown])

  const toggleMobileSubmenu = (key: string) => {
    setOpenMobileSubmenus(prev => ({
      ...prev,
      [key]: !prev[key]
    }))
  }

  const toggleDropdown = (key: string) => {
    setOpenDropdown(openDropdown === key ? null : key)
  }

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMobileMenuOpen])

  return (
    <>
      <header className={`bg-white py-[20px] lg:sticky lg:top-0 z-70 snipcss-ooWPY transition-transform duration-300 ease-in-out ${!isVisible && !isMobileMenuOpen ? 'header-hidden' : ''}`}>
        <div className="h-[70px] flex items-center justify-between header">
          <div className="flex w-full items-center justify-between z-[111]">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/Logo-site-web-pro-maroc.webp"
                alt="Sitepro.ma"
                width={400}
                height={100}
                className="h-[38px] sm:h-[55px] w-auto relative z-[160]"
                priority
              />
            </Link>
            <nav>
              <ul className="hidden lg:flex items-center sm:gap-[12px] xl:gap-[20px]">
                <li className="relative dropdown-hebergement group">
                  <button
                    className={`animated-link link_header text-title flex items-center gap-2 navbar-bold border-none p-0 transition-colors duration-200 ${openDropdown === 'creationWeb' ? 'text-[#2563eb]' : 'hover:text-[#2563eb]'}`}
                    onClick={() => toggleDropdown('creationWeb')}
                  >
                    {t.creationWeb}
                    <svg className={`w-4 h-4 transition-transform duration-300 dropdown-arrow ${openDropdown === 'creationWeb' ? 'is-open' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div className={`pt-[35px] absolute dropdown-menu ${openDropdown === 'creationWeb' ? 'is-open' : ''}`}>
                    <ul className="dropDown-menu top-full left-0 w-56 bg-white py-2">
                      <li> <Link href={"/creation-site-web-maroc/"} className="block animated-link link_header ml-6 my-3 text-title navbar-bold"> {t.creationWebSub.siteWeb} </Link> </li>

                      <li> <Link href={"/design-branding/"} className="block animated-link link_header ml-6 my-3 text-title navbar-bold"> {t.creationWebSub.branding} </Link> </li>
                      <li> <Link href={"/maintenance-site-web-maroc/"} className="block animated-link link_header ml-6 my-3 text-title navbar-bold"> {t.creationWebSub.maintenance} </Link> </li>
                    </ul>
                  </div>
                </li>

                <li> <Link href={"/portfolio/"} className="text-title animated-link link_header navbar-bold hover:text-[#2563eb] transition-colors duration-200"> {t.portfolio} </Link> </li>
                <li>
                  <Link href={"/application-mobile-maroc/"} className="flex items-center animated-link link_header gap-2 text-title navbar-bold transition-colors duration-200 hover:text-[#2563eb]">
                    <svg width="20" height="20" viewBox="0 0 28 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7 18L1 12L7 6" stroke="#022545" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M21 6L27 12L21 18" stroke="#022545" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M16 4L12 20" stroke="#022545" strokeWidth="2.5" strokeLinecap="round" />
                    </svg>
                    {t.appsMobiles}
                  </Link>
                </li>
                <li className="relative dropdown-seo group">
                  <button
                    className={`flex items-center animated-link link_header gap-2 text-title navbar-bold transition-colors duration-200 ${openDropdown === 'seo' ? 'text-[#2563eb]' : 'hover:text-[#2563eb]'}`}
                    onClick={() => toggleDropdown('seo')}
                  >
                    <Image src="https://www.hostino.ma/images/google-svg.svg" alt="Google" width={20} height={20} />
                    {t.seoSea}
                    <svg className={`w-4 h-4 transition-transform duration-300 dropdown-arrow ${openDropdown === 'seo' ? 'is-open' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div className={`pt-[35px] absolute dropdown-menu ${openDropdown === 'seo' ? 'is-open' : ''}`}>
                    <ul className="z-50 dropDown-menu top-full right-0 w-56 bg-white py-2">
                      <li> <Link href={"/referencement-seo/"} className="block navbar-bold ml-6 my-3 link_header animated-link text-title transition-colors"> {t.seoSub.seo} </Link> </li>
                      {/* Temporarily hiding non-existent routes until created 
                      <li> <Link href={language === 'EN' ? "/en/agence-geo-maroc/" : "/agence-geo-maroc/"} className="block navbar-bold ml-6 my-3 link_header animated-link text-title transition-colors"> {t.seoSub.geo} </Link> </li>
                      <li> <Link href={language === 'EN' ? "/en/google-my-business-maroc/" : "/google-my-business-maroc/"} className="block navbar-bold ml-6 my-3 link_header animated-link text-title transition-colors"> {t.seoSub.gmb} </Link> </li>
                      <li> <Link href={language === 'EN' ? "/en/google-ads-maroc/" : "/google-ads-maroc/"} className="block navbar-bold ml-6 my-3 animated-link link_header text-title hover:bg-gray-50 transition-colors"> {t.seoSub.ads} </Link> </li>
                      */}
                    </ul>
                  </div>
                </li>
                <li> <Link href={"/blog/"} className="text-title animated-link link_header navbar-bold hover:text-[#2563eb] transition-colors duration-200"> {t.blog} </Link> </li>
                <li> <Link href={"/contact/"} className="text-title animated-link link_header navbar-bold hover:text-[#2563eb] transition-colors duration-200"> {t.contact} </Link> </li>
              </ul>
            </nav>
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="hidden sm:flex items-center">
                <div className="lang-switch-container" data-lang={language}>
                  <div className="lang-slider"></div>
                  <div
                    className={`lang-option ${language === 'FR' ? 'active' : ''}`}
                    onClick={() => toggleLanguage('FR')}
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                    </svg>
                    <span>FR</span>
                  </div>
                  <div
                    className={`lang-option ${language === 'EN' ? 'active' : ''}`}
                    onClick={() => toggleLanguage('EN')}
                  >
                    <span>EN</span>
                  </div>
                </div>
              </div>

              <div>
                <Link href="https://wa.me/212663750908" target="_blank" rel="noopener noreferrer" className="sm:hidden flex items-center justify-center w-10 h-10 bg-[#2563eb] rounded-full hover:shadow-xl hover:scale-110 transition-all duration-300 group relative z-[160]" aria-label="Contact us on WhatsApp">
                  <svg viewBox="0 0 32 32" className="w-5 h-5 fill-white" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 0c-8.837 0-16 7.163-16 16 0 2.825 0.737 5.607 2.137 8.048l-2.137 7.952 7.933-2.127c2.42 1.37 5.173 2.127 8.067 2.127 8.837 0 16-7.163 16-16s-7.163-16-16-16zM16 29.467c-2.482 0-4.908-0.646-7.07-1.87l-0.507-0.292-5.245 1.408 1.408-5.245-0.292-0.507c-1.224-2.162-1.87-4.588-1.87-7.070 0-7.72 6.28-14 14-14s14 6.28 14 14-6.28 14-14 14zM23.407 19.51c-0.407-0.204-2.397-1.183-2.77-1.319-0.373-0.136-0.644-0.204-0.915 0.204s-1.053 1.319-1.291 1.59c-0.237 0.271-0.475 0.305-0.882 0.102s-1.722-0.635-3.278-2.023c-1.212-1.081-2.030-2.416-2.267-2.823s-0.025-0.628 0.179-0.831c0.184-0.184 0.407-0.475 0.611-0.712s0.271-0.407 0.407-0.678c0.136-0.271 0.068-0.509-0.034-0.712s-0.915-2.207-1.254-3.023c-0.339-0.815-0.678-0.678-0.915-0.678s-0.509-0.034-0.78-0.034-0.712 0.102-1.087 0.509c-0.373 0.407-1.427 1.394-1.427 3.399s1.461 3.942 1.665 4.213c0.204 0.271 2.817 4.434 6.865 6.196 4.047 1.762 4.047 1.173 4.776 1.105s2.397-0.982 2.735-1.929c0.339-0.947 0.339-1.757 0.237-1.929s-0.373-0.271-0.78-0.475z" />
                  </svg>
                </Link>
              </div>
              <button
                className={`lg:hidden text-title burger-button relative z-[160] ${isMobileMenuOpen ? 'active' : ''}`}
                aria-label="Toggle menu"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                <div className="burger-icon"> <span></span> <span></span> <span></span> </div>
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className={`mobile-menu lg:hidden ${isMobileMenuOpen ? 'active' : ''}`}>
        <nav className="px-6 py-4">
          <ul className="space-y-1">
            <li className="mobile-dropdown-hebergement">
              <span
                className="w-full link_header cursor-pointer flex items-center justify-between py-4 text-title navbar-bold transition-colors duration-200 hover:text-[#2563eb]"
                onClick={() => toggleMobileSubmenu('creationWeb')}
              >
                <div className="flex items-center gap-3">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
                    <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
                    <line x1="6" y1="6" x2="6" y2="6" />
                    <line x1="6" y1="18" x2="6" y2="18" />
                  </svg>
                  <span className="text-[17px]">{t.creationWeb}</span>
                </div>
                <svg className={`w-5 h-5 transition-transform duration-300 mobile-arrow ${openMobileSubmenus['creationWeb'] ? 'active' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </span>
              <ul className={`mobile-submenu pl-9 space-y-2 pb-2 ${openMobileSubmenus['creationWeb'] ? 'active' : 'hidden'}`}>
                <li> <Link href={"/creation-site-web-maroc/"} onClick={() => setIsMobileMenuOpen(false)} className="link_header block py-2 text-title font-semibold hover:text-[#2563eb]"> {t.creationWebSub.siteWeb} </Link> </li>

                <li> <Link href={"/design-branding/"} onClick={() => setIsMobileMenuOpen(false)} className="link_header block py-2 text-title font-semibold hover:text-[#2563eb]"> {t.creationWebSub.branding} </Link> </li>
                <li> <Link href={"/maintenance-site-web-maroc/"} onClick={() => setIsMobileMenuOpen(false)} className="link_header block py-2 text-title font-semibold hover:text-[#2563eb]"> {t.creationWebSub.maintenance} </Link> </li>
              </ul>
            </li>

            <li>
              <Link
                href={"/portfolio/"}
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center gap-3 text-title link_header cursor-pointer navbar-bold py-4 transition-colors duration-200 hover:text-[#2563eb]"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="2" y1="12" x2="22" y2="12" />
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>
                <span className="text-[17px]">{t.portfolio}</span>
              </Link>
            </li>
            <li>
              <Link
                href={"/application-mobile-maroc/"}
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center gap-3 text-title link_header cursor-pointer navbar-bold py-4 transition-colors duration-200 hover:text-[#2563eb]"
              >
                <div className="flex items-center gap-3">
                  <svg width="22" height="22" viewBox="0 0 28 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 18L1 12L7 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M21 6L27 12L21 18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M16 4L12 20" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                  </svg>
                  <span className="text-[17px]">{t.appsMobiles}</span>
                </div>
              </Link>
            </li>
            <li className="mobile-dropdown-seo">
              <span
                className="w-full link_header cursor-pointer flex items-center justify-between py-4 text-title navbar-bold transition-colors duration-200 hover:text-[#2563eb]"
                onClick={() => toggleMobileSubmenu('seo')}
              >
                <div className="flex items-center gap-3">
                  <div className="w-[22px] h-[22px] flex items-center justify-center">
                    <Image src="https://www.hostino.ma/images/google-svg.svg" alt="google" width={20} height={20} />
                  </div>
                  <span className="text-[17px]">{t.seoSea}</span>
                </div>
                <svg className={`w-5 h-5 transition-transform duration-300 mobile-arrow ${openMobileSubmenus['seo'] ? 'active' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </span>
              <ul className={`mobile-submenu pl-9 space-y-2 pb-2 ${openMobileSubmenus['seo'] ? 'active' : 'hidden'}`}>
                <li> <Link href={"/referencement-seo/"} onClick={() => setIsMobileMenuOpen(false)} className="block link_header py-2 text-title font-semibold hover:text-[#2563eb]"> {t.seoSub.seo} </Link> </li>
                {/* Temporarily hiding non-existent routes until created 
                <li> <Link href={language === 'EN' ? "/en/agence-geo-maroc/" : "/agence-geo-maroc/"} onClick={() => setIsMobileMenuOpen(false)} className="block link_header py-2 text-title font-semibold hover:text-[#2563eb]"> {t.seoSub.geo} </Link> </li>
                <li> <Link href={language === 'EN' ? "/en/google-my-business-maroc/" : "/google-my-business-maroc/"} onClick={() => setIsMobileMenuOpen(false)} className="block link_header py-2 text-title font-semibold hover:text-[#2563eb]"> {t.seoSub.gmb} </Link> </li>
                <li> <Link href={language === 'EN' ? "/en/google-ads-maroc/" : "/google-ads-maroc/"} onClick={() => setIsMobileMenuOpen(false)} className="block link_header py-2 text-title font-semibold hover:text-[#2563eb]"> {t.seoSub.ads} </Link> </li>
                */}
              </ul>
            </li>
            <li>
              <Link
                href={"/blog/"}
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center gap-3 text-title link_header cursor-pointer navbar-bold py-4 transition-colors duration-200 hover:text-[#2563eb]"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                  <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
                </svg>
                <span className="text-[17px]">{t.blog}</span>
              </Link>
            </li>
            <li>
              <Link
                href={"/contact/"}
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center gap-3 text-title link_header cursor-pointer navbar-bold py-4 transition-colors duration-200 hover:text-[#2563eb]"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3.08a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-3.86-4.23 19.5 19.5 0 0 1-4.23-3.86A19.79 19.79 0 0 1 2 4.18 2 2 0 0 1 4.18 2h3.08a2 2 0 0 1 2 1.72c.1.64.31 1.26.61 1.85a2 2 0 0 1-.41 2.44L6.84 9.18a15.92 15.92 0 0 0 4 4 15.92 15.92 0 0 0 4-4l1.18-1.18a2 2 0 0 1 2.44-.41c.59.3 1.21.51 1.85.61a2 2 0 0 1 1.72 2z" />
                </svg>
                <span className="text-[17px]">{t.contact}</span>
              </Link>
            </li>
          </ul>
          <div className="pt-6 mt-6 border-t border-gray-100">
            <div className="lang-switch-container-mobile" data-lang={language}>
              <div className="lang-slider"></div>
              <div
                className={`lang-option-mobile ${language === 'FR' ? 'active' : ''}`}
                onClick={() => toggleLanguage('FR')}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
                <span>FR</span>
              </div>
              <div
                className={`lang-option-mobile ${language === 'EN' ? 'active' : ''}`}
                onClick={() => toggleLanguage('EN')}
              >
                <span>EN</span>
              </div>
            </div>

            <div className="mobile-cta-container mt-8">
              <Link
                href={language === 'EN' ? "/en/contact/" : "/contact/"}
                onClick={() => setIsMobileMenuOpen(false)}
                className="btn-mobile-cta"
              >
                {language === 'EN' ? 'Get my website quote' : 'Obtenir mon devis site web'}
              </Link>
            </div>
          </div>
        </nav >
      </div >
    </>
  )
}
