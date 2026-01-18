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
        <section ref={sectionRef} className="bg-white lg:my-[150px] my-[80px] morocco-section overflow-hidden">
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
                            src="/hebergeur-web-depuis-maroc copy.jpg"
                            alt="Expertise Web Design et Développement Maroc"
                            width={900}
                            height={600}
                            loading="eager"
                            className="lg:w-[88%] ml-auto block"
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default MoroccoSection
