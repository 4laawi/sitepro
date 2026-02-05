'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import './SolutionsSection.css'

interface SolutionsSectionProps {
    lang?: 'FR' | 'EN';
}

const SolutionsSection = ({ lang = 'FR' }: SolutionsSectionProps) => {
    const t = {
        FR: {
            badge: "Nos solutions",
            title: "Votre présence digitale, notre expertise",
            subtitle: "Des solutions sur mesure pour booster votre activité",
            learnMore: "En savoir plus",
            solutions: [
                {
                    title: "Création de site",
                    description: "Développer un site vitrine ou e-commerce sur-mesure, pensé pour votre croissance.",
                    image: "/clipboard-image-1769520418.webp",
                    link: "/creation-site-web-maroc",
                    delay: 0.1
                },
                {
                    title: "Application mobile",
                    description: "Développement d'applications iOS et Android sur mesure, fluides et performantes.",
                    image: "/clipboard-image-1769520336.webp",
                    link: "/application-mobile-maroc",
                    delay: 0.2
                },
                {
                    title: "Portfolio",
                    description: "Découvrez nos dernières réalisations et projets web & mobile pour nos clients.",
                    image: "/portfolio-solutions.png",
                    link: "/portfolio",
                    delay: 0.3
                },
                {
                    title: "Blog",
                    description: "Conseils, actualités et expertise sur le monde du digital et du développement.",
                    image: "/blog-solutions.png",
                    link: "/blog",
                    delay: 0.4
                }
            ]
        },
        EN: {
            badge: "Our solutions",
            title: "Your digital presence, our expertise",
            subtitle: "Custom solutions to boost your business",
            learnMore: "Learn more",
            solutions: [
                {
                    title: "Website Creation",
                    description: "Develop a custom showcase or e-commerce site, designed for your growth.",
                    image: "/clipboard-image-1769520418.webp",
                    link: "/en/website-creation-morocco/",
                    delay: 0.1
                },
                {
                    title: "Mobile App",
                    description: "Development of custom iOS and Android applications, fluid and high-performing.",
                    image: "/clipboard-image-1769520336.webp",
                    link: "/en/mobile-apps-morocco/",
                    delay: 0.2
                },
                {
                    title: "Portfolio",
                    description: "Discover our latest achievements and web & mobile projects for our clients.",
                    image: "/portfolio-solutions.png",
                    link: "/en/portfolio/",
                    delay: 0.3
                },
                {
                    title: "Blog",
                    description: "Tips, news, and expertise on the world of digital and development.",
                    image: "/blog-solutions.png",
                    link: "/blog/",
                    delay: 0.4
                }
            ]
        }
    }[lang];

    return (
        <section className="solutions-section">
            <div className="solutions-container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="solutions-header"
                >
                    <span className="badge-gradient">{t.badge}</span>
                    <h2 className="section-title-premium">{t.title}</h2>
                    <h3 className="section-subtitle-premium">{t.subtitle}</h3>
                </motion.div>

                <div className="solutions-grid">
                    {t.solutions.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: item.delay }}
                            viewport={{ once: true }}
                        >
                            <Link href={item.link} className="solution-card-link">
                                <div className="solution-card">
                                    <div className="solution-content">
                                        <h3 className="solution-name">{item.title}</h3>
                                        <p className="solution-description">{item.description}</p>
                                    </div>
                                    <div className="solution-image-container">
                                        <Image
                                            src={item.image}
                                            alt={item.title}
                                            width={400}
                                            height={300}
                                            className="solution-image"
                                            loading="lazy"
                                        />
                                        <div className="learn-more-overlay">
                                            <span>{t.learnMore}</span>
                                            <svg className="arrow-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default SolutionsSection
