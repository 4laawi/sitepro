import type { Metadata } from 'next'
import Link from 'next/link'
import ClientMotionWrapper from '@/components/ClientMotionWrapper'
import Typewriter from '@/components/Typewriter'
import TextTicker from '@/components/TextTicker'
import { ArrowRight } from 'lucide-react'
import Script from 'next/script'
import SeoLottie from '@/components/SeoLottie'
import FAQSection from '@/components/FAQSection'

export const metadata: Metadata = {
  title: 'Agence SEO Maroc | Référencement Naturel & Visibilité Google',
  description: 'Sitepro.ma, votre agence SEO au Maroc. Expertise en référencement naturel, audit technique et stratégie de contenu pour dominer les résultats Google.',
  alternates: {
    canonical: 'https://sitepro.ma/referencement-seo',
    languages: {
      'fr-MA': 'https://sitepro.ma/referencement-seo',
      'en-MA': 'https://sitepro.ma/en/seo-agency-morocco',
    },
  },
}

const phone = '212663711164'

const faqSEO = [
  {
    question: "Pourquoi faire appel à une agence SEO au Maroc ?",
    answer: "Une agence SEO spécialisée au Maroc comme Sitepro.ma comprend les spécificités du marché local et les intentions de recherche des utilisateurs marocains. Nous optimisons votre visibilité sur des mots-clés stratégiques pour attirer un trafic qualifié et convertir vos visiteurs en clients."
  },
  {
    question: "Combien de temps faut-il pour voir des résultats SEO ?",
    answer: "Le référencement naturel est une stratégie à long terme. En général, les premiers résultats significatifs apparaissent entre 3 et 6 mois, selon la concurrence de votre secteur et l'état technique initial de votre site web."
  },
  {
    question: "Proposez-vous un audit SEO gratuit ?",
    answer: "Oui, nous proposons un pré-audit SEO gratuit pour analyser les principaux blocages techniques de votre site et identifier les opportunités de croissance immédiates."
  }
];

export default function SeoPage() {
  return (
    <section className="cv-auto">
      <Script id="ld-breadcrumbs-seo" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://sitepro.ma/' },
            { '@type': 'ListItem', position: 2, name: 'Agence SEO Maroc', item: 'https://sitepro.ma/referencement-seo' }
          ]
        })}
      </Script>
      <Script id="ld-service-seo" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'Agence SEO Maroc - Référencement Naturel',
          serviceType: 'SEO',
          provider: { '@type': 'Organization', name: 'Sitepro.ma', url: 'https://sitepro.ma' },
          areaServed: 'MA',
          url: 'https://sitepro.ma/referencement-seo'
        })}
      </Script>
      <div className="container mx-auto px-4 py-20">
        <ClientMotionWrapper initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h1 className="heading-1 text-gray-900">Agence SEO Maroc – Experts en Référencement Naturel</h1>
          <p className="text-lg text-gray-800 font-semibold mt-2"><Typewriter words={["Audit SEO complet", "Optimisation On‑page", "Stratégie de Netlinking", "SEO Local Maroc"]} /></p>
          <p className="text-gray-600 max-w-2xl mt-3">Sitepro.ma est votre partenaire de confiance pour dominer Google. En tant qu&apos;<strong>agence SEO au Maroc</strong>, nous déployons des stratégies sur mesure pour propulser votre site en première page.</p>
          <div className="mt-6 flex gap-3">
            <a href={`https://wa.me/${phone}`} className="btn-primary">Demander mon audit SEO</a>
            <Link href="/portfolio" className="btn-secondary">Nos Success Stories</Link>
          </div>
        </ClientMotionWrapper>

        <div className="mt-12 lg:mt-0 lg:absolute lg:top-20 lg:right-0 lg:w-1/2 -z-10 opacity-80 lg:opacity-100">
          <SeoLottie />
        </div>
        <TextTicker text="Agence SEO • Audit • On‑page • Netlinking • Vitesse • Google Maps" className="mt-8 border-y border-gray-100 text-sm" />
        
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {[
            { t: 'Audit SEO Approfondi', d: 'Analyse complète de vos logs, structure technique et positionnement concurrentiel au Maroc.' },
            { t: 'Stratégie de Contenu', d: 'Création de contenus optimisés sémantiquement pour répondre aux intentions de recherche locales.' },
            { t: 'Autorité & Netlinking', d: 'Acquisition de backlinks de qualité pour renforcer la confiance de Google envers votre domaine.' }
          ].map((b, i) => (
            <ClientMotionWrapper key={b.t} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.05 }} className="p-6 rounded-2xl bg-white border border-gray-100 shadow-lg">
              <h3 className="font-semibold text-gray-900">{b.t}</h3>
              <p className="text-gray-600 text-sm mt-1">{b.d}</p>
            </ClientMotionWrapper>
          ))}
        </div>

        <div className="mt-20">
          <FAQSection data={faqSEO} lang="FR" />
        </div>

        <section className="py-24 bg-gradient-to-br from-[#022545] to-[#04335d] text-white relative overflow-hidden rounded-[40px] mt-12 mb-20">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary-500 rounded-full blur-[150px] opacity-10"></div>
          <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-blue-600 rounded-full blur-[150px] opacity-10"></div>

          <div className="container px-4 mx-auto max-w-5xl text-center relative z-10">
            <div className="space-y-8">
              <span className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-sm font-bold tracking-wider text-primary-300 mb-4">
                VOTRE CROISSANCE COMMENCE ICI
              </span>
              <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
                Prêt à devenir le <span className="text-primary-400">leader de votre secteur</span> ?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Ne laissez pas vos concurrents prendre toute la place. Notre agence SEO vous aide à capturer chaque opportunité de recherche au Maroc.
              </p>
              <div className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-6">
                <a href={`https://wa.me/${phone}`} className="bg-primary-500 hover:bg-primary-600 text-white px-10 py-5 rounded-xl font-bold text-xl transition-all shadow-xl shadow-primary-900/40 flex items-center gap-3 group">
                  Lancer mon projet SEO
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </a>
                <div className="flex flex-col items-center sm:items-start text-left">
                  <p className="text-sm text-gray-400 font-medium italic">Devis personnalisé sous 24h</p>
                  <a href="tel:+212663711164" className="text-white hover:text-primary-400 font-bold text-lg flex items-center gap-2 transition-colors">
                    +212 663-711164
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  )
}


