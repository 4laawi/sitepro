import type { Metadata } from 'next'
import ClientMotionWrapper from '@/components/ClientMotionWrapper'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
    title: 'Étude de cas: marocMaroc | Sitepro.ma',
    description: "Boutique e-commerce de luxe avec SEO optimisé et expérience utilisateur premium.",
    alternates: { canonical: 'https://sitepro.ma/portfolio/case-studies/maroc-maroc' },
}

const phone = '212663711164'

export default function CaseStudyMarocMaroc() {
    return (
        <section className="cv-auto">
            <div className="container mx-auto px-4 py-20">
                <ClientMotionWrapper initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                    <h1 className="heading-1 text-gray-900">Étude de cas — marocMaroc</h1>
                    <p className="text-gray-600 max-w-3xl mt-3">Boutique e-commerce premium (Next.js) spécialisée dans les rituels de beauté et cosmétiques marocains de luxe, offrant une expérience fluide et performante.</p>
                    <div className="grid md:grid-cols-3 gap-6 mt-8">
                        {[
                            { k: 'Temps de chargement', v: '≤ 1.5s LCP' },
                            { k: 'Visiteurs/mois', v: '12k+' },
                            { k: 'Taux de conversion', v: '5.1%' },
                        ].map((s) => (
                            <div key={s.k} className="p-6 rounded-2xl bg-white shadow-lg border border-gray-100">
                                <p className="text-gray-500 text-sm">{s.k}</p>
                                <p className="text-2xl font-bold text-primary-700">{s.v}</p>
                            </div>
                        ))}
                    </div>
                    <div className="mt-8 flex gap-3">
                        <a href={`https://wa.me/${phone}`} className="btn-primary">Lancer un projet</a>
                        <Link href="/portfolio" className="btn-secondary">Retour au portfolio</Link>
                    </div>
                </ClientMotionWrapper>
            </div>

            {/* SEO Optimized Internal Link CTA Section */}
            <section className="py-24 bg-gradient-to-br from-[#022545] to-[#04335d] text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-primary-500 rounded-full blur-[150px] opacity-10"></div>
                <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-blue-600 rounded-full blur-[150px] opacity-10"></div>

                <div className="container px-4 mx-auto max-w-5xl text-center relative z-10">
                    <ClientMotionWrapper
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <span className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-sm font-bold tracking-wider text-primary-300 mb-4">
                            AGENCE DE CRÉATION DE SITE WEB AU MAROC
                        </span>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight">
                            Un site web qui <span className="text-primary-400">génère des clients</span> et domine Google
                        </h2>
                        <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                            Découvrez comment notre expertise en <strong>référencement SEO</strong> et performance web transforme votre présence digitale au Maroc en machine à leads.
                        </p>
                        <div className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-6">
                            <Link href="/creation-site-web-maroc/" className="bg-primary-500 hover:bg-primary-600 text-white px-10 py-5 rounded-xl font-bold text-xl transition-all shadow-xl shadow-primary-900/40 flex items-center gap-3 group">
                                Création site web Maroc
                                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <div className="flex flex-col items-center sm:items-start">
                                <p className="text-sm text-gray-400 font-medium italic">Audit technique offert</p>
                                <a href="tel:+212663711164" className="text-white hover:text-primary-400 font-bold text-lg flex items-center gap-2 transition-colors">
                                    +212 663-711164
                                </a>
                            </div>
                        </div>
                    </ClientMotionWrapper>
                </div>
            </section>
        </section>
    )
}
