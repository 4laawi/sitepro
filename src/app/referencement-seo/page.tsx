import type { Metadata } from 'next'
import Link from 'next/link'
import ClientMotionWrapper from '@/components/ClientMotionWrapper'
import Typewriter from '@/components/Typewriter'
import TextTicker from '@/components/TextTicker'
import { ArrowRight } from 'lucide-react'
import Script from 'next/script'
import SeoLottie from '@/components/SeoLottie'

export const metadata: Metadata = {
  title: 'Référencement Naturel Maroc | Expert SEO & Visibilité Google',
  description: 'Référencement naturel Maroc 100% efficace. Audit SEO, optimisation technique et contenu pour dominer Google. Boostez votre visibilité et vos leads.',
  alternates: {
    canonical: 'https://sitepro.ma/referencement-seo/',
    languages: {
      'fr-MA': 'https://sitepro.ma/referencement-seo/',
      'en-MA': 'https://sitepro.ma/en/seo-agency-morocco/',
    },
  },
}

const phone = '212663711164'

export default function SeoPage() {
  return (
    <section className="cv-auto">
      <Script id="ld-breadcrumbs-seo" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://sitepro.ma/' },
            { '@type': 'ListItem', position: 2, name: 'Référencement SEO', item: 'https://sitepro.ma/referencement-seo' }
          ]
        })}
      </Script>
      <Script id="ld-service-seo" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'Référencement SEO',
          serviceType: 'SEO',
          provider: { '@type': 'Organization', name: 'Sitepro.ma', url: 'https://sitepro.ma' },
          areaServed: 'MA',
          url: 'https://sitepro.ma/referencement-seo'
        })}
      </Script>
      <div className="container mx-auto px-4 py-20">
        <ClientMotionWrapper initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h1 className="heading-1 text-gray-900">Référencement naturel au Maroc – Expertise SEO & Visibilité</h1>
          <p className="text-lg text-gray-800 font-semibold mt-2"><Typewriter words={["Audit technique", "On‑page & contenu", "Maillage & vitesse", "SEO local"]} /></p>
          <p className="text-gray-600 max-w-2xl mt-3">Nous optimisons votre structure et votre contenu pour dominer le <strong className="text-gray-900">référencement naturel maroc</strong> et maximiser votre visibilité organique.</p>
          <div className="mt-6 flex gap-3">
            <a href={`https://wa.me/${phone}`} className="btn-primary">Parler SEO</a>
            <Link href="/portfolio" className="btn-secondary">Voir des résultats</Link>
          </div>
        </ClientMotionWrapper>

        <div className="mt-12 lg:mt-0 lg:absolute lg:top-20 lg:right-0 lg:w-1/2 -z-10 opacity-80 lg:opacity-100">
          <SeoLottie />
        </div>
        <TextTicker text="Audit • On‑page • Contenu • Maillage • Vitesse • SEO local" className="mt-8 border-y border-gray-100 text-sm" />
        {/* Why choose us */}
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {[{ t: 'Approche data‑driven', d: 'Audit complet, logs, Search Console, Analytics et outils de crawl.' }, { t: 'Gains rapides + long terme', d: 'Quick wins techniques puis stratégie contenu & maillage durable.' }, { t: 'Expertise locale', d: 'SEO local (GMB), pages de ville et signaux E‑E‑A‑T.' }].map((b, i) => (
            <ClientMotionWrapper key={b.t} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.05 }} className="p-6 rounded-2xl bg-white border border-gray-100 shadow-lg">
              <h3 className="font-semibold text-gray-900">{b.t}</h3>
              <p className="text-gray-600 text-sm mt-1">{b.d}</p>
            </ClientMotionWrapper>
          ))}
        </div>
        {/* SEO Optimized Internal Link CTA Section */}
        <section className="py-24 bg-gradient-to-br from-[#022545] to-[#04335d] text-white relative overflow-hidden rounded-[40px] mt-12 mb-20">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary-500 rounded-full blur-[150px] opacity-10"></div>
          <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-blue-600 rounded-full blur-[150px] opacity-10"></div>

          <div className="container px-4 mx-auto max-w-5xl text-center relative z-10">
            <div className="space-y-8">
              <span className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-sm font-bold tracking-wider text-primary-300 mb-4">
                AGENCE DE CRÉATION DE SITE WEB AU MAROC
              </span>
              <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
                Donnez à votre SEO une <span className="text-primary-400">assise solide</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Le référencement commence par un site web techniquement irréprochable. Construisons ensemble le socle de votre visibilité au Maroc.
              </p>
              <div className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-6">
                <Link href="/creation-site-web-maroc/" className="bg-primary-500 hover:bg-primary-600 text-white px-10 py-5 rounded-xl font-bold text-xl transition-all shadow-xl shadow-primary-900/40 flex items-center gap-3 group">
                  Agence création site web maroc
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </Link>
                <div className="flex flex-col items-center sm:items-start text-left">
                  <p className="text-sm text-gray-400 font-medium italic">Audit SEO offert</p>
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


