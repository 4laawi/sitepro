'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronRight, CheckCircle2 } from 'lucide-react'

export default function AgencyServices() {
    const features = [
        'Design moderne et intuitif',
        'Optimisation SEO avancée',
        'Performance et rapidité (Core Web Vitals)',
        'Sécurité et maintenance incluses'
    ]

    return (
        <section className="py-20 lg:py-32 bg-white overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="flex-1 text-center lg:text-left"
                    >
                        <h2 className="section-title-premium lg:text-left">
                            L&apos;agence web au Maroc pour votre <span className="text-primary-600">création de sites web</span> et stratégie <span className="text-primary-600">SEO</span>
                        </h2>

                        <h3 className="section-subtitle-premium font-medium lg:mx-0 lg:text-left mb-6">
                            Boostez votre visibilité et votre taux de conversion avec des solutions digitales sur mesure.
                        </h3>

                        <p className="body-normal text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0">
                            Chez <strong>Sitepro.ma</strong>, nous construisons des sites web modernes, sécurisés et ultra-rapides. Nos experts créent des expériences digitales uniques qui transforment vos visiteurs en clients fidèles, tout en garantissant un référencement naturel optimal.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10 max-w-xl mx-auto lg:mx-0">
                            {features.map((feature, index) => (
                                <div key={index} className="flex items-center gap-3 text-gray-700">
                                    <CheckCircle2 className="w-5 h-5 text-primary-600 flex-shrink-0" />
                                    <span className="text-sm font-medium">{feature}</span>
                                </div>
                            ))}
                        </div>

                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Link
                                href="/creation-site-web-maroc"
                                className="inline-flex items-center gap-2 bg-primary-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-primary-700 transition-all shadow-lg shadow-primary-600/20 group"
                            >
                                Découvrir nos services
                                <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                            </Link>
                        </motion.div>
                    </motion.div>

                    {/* Visual Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="flex-1 relative"
                    >
                        <div className="relative z-10">
                            <Image
                                src="/Purple and White Minimalist Your Business Needs a Website Instagram Post (2).webp"
                                alt="Agence web Maroc - création site internet optimisé SEO"
                                width={800}
                                height={800}
                                className="w-full h-auto"
                                priority
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
