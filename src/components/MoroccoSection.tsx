'use client'

import React, { useRef } from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import './MoroccoSection.css'

const MoroccoSection = () => {
    const sectionRef = useRef(null)
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    })

    const yText = useTransform(scrollYProgress, [0, 1], [80, -80])
    const yImage = useTransform(scrollYProgress, [0, 1], [0, -100])

    return (
        <section
            ref={sectionRef}
            className="bg-white rounded-t-[28px] md:rounded-t-[60px] -mt-[28px] md:-mt-[60px] relative z-20 pt-24 pb-16 md:pt-32 md:pb-24 morocco-section overflow-hidden shadow-[0_-20px_40px_-15px_rgba(0,0,0,0.05)] cv-auto"
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
                        <h2 className="title-section"> L&apos;excellence du Web Design et du Développement au Maroc </h2>
                        <div className="space-y-2 text-[#022545] text-lg">
                            <p className="paragraph">
                                Chez Sitepro.ma, nous redéfinissons les standards du web design et du développement au Maroc. Nous créons des expériences numériques captivantes, alliant esthétique moderne, performance technique et ergonomie intuitive pour propulser votre présence en ligne.
                            </p>
                            <p className="paragraph">
                                Alignés sur la <span className="poppins-semibold">stratégie nationale</span>{' '}
                                <a
                                    href="https://www.mmsp.gov.ma/sites/default/files/2024-09/PlaquetteInstitutionnel_18092024_Fra.pdf"
                                    className="underline"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    &quot;Digital Morocco 2030&quot;
                                </a>{' '}
                                initiée par le Ministère de la Transition Numérique et de la Réforme de l&apos;Administration, nous accompagnons les entreprises marocaines dans leur transformation digitale grâce à des solutions sur mesure et innovantes.
                            </p>
                            <p className="paragraph">
                                Notre expertise couvre le design UI/UX, le développement full-stack et l&apos;optimisation SEO, garantissant des sites web robustes et évolutifs. Avec une approche centrée sur l&apos;utilisateur et une maîtrise des dernières technologies, nous transformons vos idées en succès numériques concrets.
                            </p>
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
                        style={{ y: yImage }}
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="relative flex justify-start"
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
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <div className="space-y-4">
                            <h2 className="title-section md:pr-[180px] lg:pr-[0]">
                                Votre hébergement web en toute facilité
                            </h2>
                            <h3 className="text-2xl lg:text-3xl poppins-semibold mt-[10px] text-[#022545]">
                                Votre meilleur choix d&apos;hébergement web au Maroc
                            </h3>
                        </div>
                        <div className="space-y-6 text-[#022545]">
                            <div>
                                <p className="paragraph">
                                    – Des <b className="poppins-semibold">performances inégalées :</b> Nos serveurs ultra-rapides garantissent des temps de chargement jusqu&apos;à 3 fois plus rapides que la concurrence.
                                </p>
                            </div>
                            <div>
                                <p className="paragraph">
                                    <b className="poppins-semibold">– La sécurité au cœur de nos préoccupations :</b> Nous mettons en place des mesures de sécurité robustes pour protéger vos données et celles de vos utilisateurs.
                                </p>
                            </div>
                            <div>
                                <p className="paragraph">
                                    – Notre <b className="poppins-semibold">connaissance approfondie</b> de l&apos;écosystème digital au Maroc nous permet de soutenir le développement rapide de l&apos;économie numérique, de faciliter la transformation digitale des entreprises, et d&apos;améliorer leur compétitivité, notamment celle des TPE/PME, auto-entrepreneurs, et startups.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default MoroccoSection
