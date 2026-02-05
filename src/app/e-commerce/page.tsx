import type { Metadata } from 'next'
import ClientMotionWrapper from '@/components/ClientMotionWrapper'
import { Database, Search, Sparkles, Wrench, Rocket, Shield, CreditCard, Globe, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import Script from 'next/script'
import EcommerceHero from '@/components/EcommerceHero'

export const metadata: Metadata = {
  title: 'Création de sites e‑commerce | Sitepro.ma',
  description: 'Boutiques en ligne performantes: paiement sécurisé, catalogue, analytics, SEO. Devis rapide sur WhatsApp.',
  alternates: {
    canonical: 'https://sitepro.ma/e-commerce/',
    languages: {
      'fr-MA': 'https://sitepro.ma/e-commerce/',
      'en-MA': 'https://sitepro.ma/en/e-commerce/',
    },
  },
}

const phone = '212663711164'

export default function EcommercePage() {
  return (
    <section className="cv-auto">
      <Script id="ld-breadcrumbs-ecommerce" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://sitepro.ma/' },
            { '@type': 'ListItem', position: 2, name: 'E-commerce', item: 'https://sitepro.ma/e-commerce' }
          ]
        })}
      </Script>
      <Script id="ld-service-ecommerce" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'Création de boutiques en ligne',
          serviceType: 'E-commerce',
          provider: { '@type': 'Organization', name: 'Sitepro.ma', url: 'https://sitepro.ma' },
          areaServed: 'MA',
          url: 'https://sitepro.ma/e-commerce'
        })}
      </Script>

      <EcommerceHero lang="FR" />

      <div className="container mx-auto px-4 py-20">

        {/* Why us */}
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {[{ t: 'Conversion‑first', d: 'UX claire, checkout optimisé, moyens de paiement adaptés et upsells.' }, { t: 'Stack moderne', d: 'Next.js, intégrations paiement & logistique, analytics et pixels.' }, { t: 'Accompagnement', d: 'Formation, support et amélioration continue après lancement.' }].map((b, i) => (
            <ClientMotionWrapper key={b.t} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.05 }} className="p-6 rounded-2xl bg-white border border-gray-100 shadow-lg">
              <h3 className="font-semibold text-gray-900">{b.t}</h3>
              <p className="text-gray-600 text-sm mt-1">{b.d}</p>
            </ClientMotionWrapper>
          ))}
        </div>

        {/* Solutions pour les commerces marocains */}
        <div className="mt-16">
          <h2 className="heading-2 text-gray-900 mb-6">Pensé pour les commerces marocains</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: CreditCard, title: 'Paiements adaptés', desc: 'Intégration des moyens locaux/internationaux et gestion des taxes/livraison.' },
              { icon: Globe, title: 'Multi‑langues & zones', desc: 'FR/AR et zones de livraison configurables, tarifs par ville/région.' },
              { icon: Shield, title: 'Sécurité & conformité', desc: 'HTTPS, protections anti‑bots, rôles et sauvegardes.' },
            ].map((c, i) => (
              <ClientMotionWrapper key={c.title} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.05 }} className="p-6 rounded-2xl bg-white border border-gray-100 shadow-lg">
                <div className="flex items-start gap-3">
                  <span className="w-10 h-10 rounded-lg bg-primary-100 text-primary-700 flex items-center justify-center"><c.icon size={18} /></span>
                  <div>
                    <h3 className="font-semibold text-gray-900">{c.title}</h3>
                    <p className="text-gray-600 text-sm mt-1">{c.desc}</p>
                  </div>
                </div>
              </ClientMotionWrapper>
            ))}
          </div>
        </div>

        {/* Stack & SEO */}
        <div className="mt-16 grid lg:grid-cols-3 gap-6 items-start">
          <ClientMotionWrapper initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="p-6 rounded-2xl bg-white border border-gray-100 shadow-lg">
            <div className="flex items-start gap-3">
              <span className="w-10 h-10 rounded-lg bg-primary-100 text-primary-700 flex items-center justify-center"><Database size={18} /></span>
              <div>
                <h3 className="font-semibold text-gray-900">Base de données Supabase</h3>
                <p className="text-gray-600 text-sm mt-1">Solution scalable et sécurisée pour produits, commandes et utilisateurs. API en temps réel et auth robuste.</p>
              </div>
            </div>
          </ClientMotionWrapper>
          <ClientMotionWrapper initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.05 }} className="p-6 rounded-2xl bg-white border border-gray-100 shadow-lg">
            <div className="flex items-start gap-3">
              <span className="w-10 h-10 rounded-lg bg-primary-100 text-primary-700 flex items-center justify-center"><Search size={18} /></span>
              <div>
                <h3 className="font-semibold text-gray-900">SEO & performance</h3>
                <p className="text-gray-600 text-sm mt-1">Balises, sitemap, robots, maillage, Core Web Vitals et images optimisées pour un référencement durable.</p>
              </div>
            </div>
          </ClientMotionWrapper>
          <ClientMotionWrapper initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.1 }} className="p-6 rounded-2xl bg-white border border-gray-100 shadow-lg">
            <div className="flex items-start gap-3">
              <span className="w-10 h-10 rounded-lg bg-primary-100 text-primary-700 flex items-center justify-center"><Sparkles size={18} /></span>
              <div>
                <h3 className="font-semibold text-gray-900">Sites uniques & personnalisables</h3>
                <p className="text-gray-600 text-sm mt-1">Pas de mockups figés: design sur mesure, composants modulaires et évolutions selon vos plans.</p>
              </div>
            </div>
          </ClientMotionWrapper>
        </div>

        {/* Idées folles -> réalité */}
        <div className="mt-16">
          <h2 className="heading-2 text-gray-900 mb-6">Des idées ambitieuses ? On les réalise</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[{ icon: Wrench, t: 'Fonctionnalités sur mesure', d: "Configurateurs, abonnements, marketplaces, intégrations métiers…" }, { icon: Rocket, t: 'Lancements rapides', d: "MVP en semaines puis itérations agiles pour accélérer." }, { icon: Shield, t: 'Qualité & fiabilité', d: "Tests, monitoring, sauvegardes et support prioritaire." }, { icon: Sparkles, t: 'Design différenciant', d: "UI/UX élégante, animations modernes et identité forte." }].map((c, i) => (
              <ClientMotionWrapper key={c.t} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.05 }} className="p-5 rounded-2xl bg-white border border-gray-100 shadow-lg">
                <div className="flex items-start gap-3">
                  <span className="w-9 h-9 rounded-lg bg-primary-100 text-primary-700 flex items-center justify-center"><c.icon size={16} /></span>
                  <div>
                    <h3 className="font-semibold text-gray-900">{c.t}</h3>
                    <p className="text-gray-600 text-sm mt-1">{c.d}</p>
                  </div>
                </div>
              </ClientMotionWrapper>
            ))}
          </div>
          <div className="text-center mt-8">
            <a href={`https://wa.me/${phone}`} className="btn-primary">Parler de votre idée</a>
          </div>
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
                Élargissez votre horizon avec un <span className="text-primary-400">site web d&apos;exception</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Votre boutique en ligne mérite la meilleure vitrine. Obtenez un site web sur-mesure, 100% optimisé pour le SEO et l&apos;IA pour dominer le marché marocain.
              </p>
              <div className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-6">
                <Link href="/creation-site-web-maroc/" className="bg-primary-500 hover:bg-primary-600 text-white px-10 py-5 rounded-xl font-bold text-xl transition-all shadow-xl shadow-primary-900/40 flex items-center gap-3 group">
                  Création site web Maroc
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </Link>
                <div className="flex flex-col items-center sm:items-start text-left">
                  <p className="text-sm text-gray-400 font-medium italic">Consultation gratuite</p>
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


