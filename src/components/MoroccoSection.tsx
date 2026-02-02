'use client'

import React, { useRef } from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import './MoroccoSection.css'

interface MoroccoSectionProps {
    lang?: 'FR' | 'EN';
}

const MoroccoSection = ({ lang = 'FR' }: MoroccoSectionProps) => {
    const sectionRef = useRef(null)
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    })

    const yText = useTransform(scrollYProgress, [0, 1], [80, -80])
    const yImage = useTransform(scrollYProgress, [0, 1], [0, -100])

    const t = {
        FR: {
            solutionsBadge: "Solutions Digitales",
            solutionsTitle: "L'excellence du Web Design et du Développement au Maroc",
            solutionsParagraphs: [
                <>Chez Sitepro.ma, nous redéfinissons les standards du web design et du développement au Maroc. Nous créons des expériences numériques captivantes, alliant esthétique moderne, performance technique et ergonomie intuitive pour propulser votre présence en ligne.</>,
                <>Alignés sur la <span className="poppins-semibold">stratégie nationale</span> <a href="https://www.mmsp.gov.ma/sites/default/files/2024-09/PlaquetteInstitutionnel_18092024_Fra.pdf" className="underline" target="_blank" rel="noopener noreferrer">&quot;Digital Morocco 2030&quot;</a> initiée par le Ministère de la Transition Numérique et de la Réforme de l&apos;Administration, nous accompagnons les entreprises marocaines dans leur transformation digitale grâce à des solutions sur mesure et innovantes.</>,
                <>Notre expertise couvre le design UI/UX, le développement full-stack et l&apos;optimisation SEO, garantissant des sites web robustes et évolutifs. Avec une approche centrée sur l&apos;utilisateur et une maîtrise des dernières technologies, nous transformons vos idées en succès numériques concrets.</>
            ],
            hostingBadge: "Hébergement Premium",
            hostingTitle: "Votre hébergement web en toute facilité",
            hostingSubtitle: "Votre meilleur choix d'hébergement web au Maroc",
            hostingFeatures: [
                <>– Des <b className="poppins-semibold">performances inégalées :</b> Nos serveurs ultra-rapides garantissent des temps de chargement jusqu&apos;à 3 fois plus rapides que la concurrence.</>,
                <><b className="poppins-semibold">– La sécurité au cœur de nos préoccupations :</b> Nous mettons en place des mesures de sécurité robustes pour protéger vos données et celles de vos utilisateurs.</>,
                <>– Notre <b className="poppins-semibold">connaissance approfondie</b> de l&apos;écosystème digital au Maroc nous permet de soutenir le développement rapide de l&apos;économie numérique, de faciliter la transformation digitale des entreprises, et d&apos;améliorer leur compétitivité, notamment celle des TPE/PME, auto-entrepreneurs, et startups.</>
            ]
        },
        EN: {
            solutionsBadge: "Digital Solutions",
            solutionsTitle: "Excellence in Web Design and Development in Morocco",
            solutionsParagraphs: [
                <>At Sitepro.ma, we redefine the standards of web design and development in Morocco. We create captivating digital experiences, combining modern aesthetics, technical performance, and intuitive ergonomics to propel your online presence.</>,
                <>Aligned with the <span className="poppins-semibold">national strategy</span> <a href="https://www.mmsp.gov.ma/sites/default/files/2024-09/PlaquetteInstitutionnel_18092024_Fra.pdf" className="underline" target="_blank" rel="noopener noreferrer">&quot;Digital Morocco 2030&quot;</a> initiated by the Ministry of Digital Transition and Administration Reform, we support Moroccan companies in their digital transformation through tailor-made and innovative solutions.</>,
                <>Our expertise covers UI/UX design, full-stack development, and SEO optimization, ensuring robust and scalable websites. With a user-centric approach and mastery of the latest technologies, we transform your ideas into concrete digital successes.</>
            ],
            hostingBadge: "Premium Hosting",
            hostingTitle: "Your web hosting made easy",
            hostingSubtitle: "Your best choice for web hosting in Morocco",
            hostingFeatures: [
                <>– <b className="poppins-semibold">Unmatched performance:</b> Our ultra-fast servers guarantee loading times up to 3 times faster than the competition.</>,
                <><b className="poppins-semibold">– Security at the heart of our concerns:</b> We implement robust security measures to protect your data and that of your users.</>,
                <>– Our <b className="poppins-semibold">deep knowledge</b> of the digital ecosystem in Morocco allows us to support the rapid development of the digital economy, facilitate the digital transformation of companies, and improve their competitiveness, particularly that of TPE/PMEs, self-employed individuals, and startups.</>
            ]
        }
    }[lang];

    return (
        <section
            ref={sectionRef}
            className="bg-white rounded-t-[28px] md:rounded-t-[60px] -mt-[28px] md:-mt-[60px] relative z-20 pt-24 pb-8 md:pt-32 md:pb-24 morocco-section overflow-hidden shadow-[0_-20px_40px_-15px_rgba(0,0,0,0.05)] cv-auto"
        >
            <div className="container mx-auto px-4 lg:px-7">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        style={{ y: yText }}
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <span className="badge-gradient">{t.solutionsBadge}</span>
                        <h2 className="section-title-premium lg:text-left"> {t.solutionsTitle} </h2>
                        <div className="space-y-2 text-[#022545] text-lg">
                            {t.solutionsParagraphs.map((p, i) => (
                                <p key={i} className="paragraph">{p}</p>
                            ))}
                        </div>
                    </motion.div>
                    <motion.div
                        style={{ y: yImage }}
                        className="relative"
                    >
                        <Image
                            src="/clipboard-image-1768750283.webp"
                            alt="Expertise Web Design et Développement Maroc"
                            width={900}
                            height={600}
                            loading="eager"
                            className="lg:w-[88%] ml-auto block"
                        />
                    </motion.div>
                </div>

                {/* Hosting Section */}
                <div className="grid lg:grid-cols-2 gap-16 items-center mt-32">
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="space-y-8 lg:order-2"
                    >
                        <div className="space-y-4">
                            <span className="badge-gradient">{t.hostingBadge}</span>
                            <h2 className="section-title-premium lg:text-left">
                                {t.hostingTitle}
                            </h2>
                            <h3 className="section-subtitle-premium font-medium lg:mx-0 lg:text-left mt-[10px]">
                                {t.hostingSubtitle}
                            </h3>
                        </div>
                        <div className="space-y-6 text-[#022545]">
                            {t.hostingFeatures.map((f, i) => (
                                <div key={i}>
                                    <p className="paragraph">{f}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                    <motion.div
                        style={{ y: yImage }}
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="relative flex justify-start lg:order-1"
                    >
                        <Image
                            src="/Untitled design (12).webp"
                            alt="Hébergement web facile"
                            loading="eager"
                            width={660}
                            height={440}
                            className="xl:w-[90%] md:mt-[20px] mt-[40px] md:mr-auto md:w-[86%] w-[100%] h-auto"
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default MoroccoSection
