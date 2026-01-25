'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import './SolutionsSection.css'

const solutions = [
    {
        title: "Création de site",
        description: "Développer un site vitrine ou e-commerce sur-mesure, pensé pour votre croissance.",
        image: "https://cdn.prod.website-files.com/60c75078850651e0dfcb0945/68ce935e130a6c3d34f7a92b_Cre%CC%81ation%20de%20site.webp",
        link: "/creation-site-web-maroc",
        delay: 0.1
    },
    {
        title: "Refonte de site",
        description: "Moderniser et optimiser votre site existant pour plus de performance.",
        image: "https://cdn.prod.website-files.com/60c75078850651e0dfcb0945/68ce935fbd96b4270218427e_Refonte%20de%20site.webp",
        link: "/agence-refonte-site-web",
        delay: 0.2
    },
    {
        title: "Migration",
        description: "Transférer votre site en toute sécurité vers Shopify, Webflow, WordPress ou un autre CMS.",
        image: "https://cdn.prod.website-files.com/60c75078850651e0dfcb0945/68ce935ff81670d0543719ad_Migration.webp",
        link: "/agence-migration-site-web",
        delay: 0.3
    },
    {
        title: "Maquette UX/UI",
        description: "Concevoir des maquettes web claires et modernes, pensées pour l’expérience utilisateur et la conversion.",
        image: "https://cdn.prod.website-files.com/60c75078850651e0dfcb0945/68ce936023daeb9a9c93e94c_anding%20Page.webp",
        link: "/agence-ux-ui",
        delay: 0.4
    }
]

const SolutionsSection = () => {
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
                    <span className="badge-gradient">Nos solutions</span>
                    <h2 className="section-title-premium">Votre présence digitale, notre expertise</h2>
                    <h3 className="section-subtitle-premium">Des solutions sur mesure pour booster votre activité</h3>
                </motion.div>

                <div className="solutions-grid">
                    {solutions.map((item, index) => (
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
                                            <span>En savoir plus</span>
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
