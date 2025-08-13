import type { Metadata } from 'next'
import Link from 'next/link'
import ClientMotionWrapper from '@/components/ClientMotionWrapper'
import Typewriter from '@/components/Typewriter'
import TextTicker from '@/components/TextTicker'
import { Database, Search, Sparkles, Wrench, Rocket, Shield, CreditCard, Globe } from 'lucide-react'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Création de sites e‑commerce | Sitepro.ma',
  description: 'Boutiques en ligne performantes: paiement sécurisé, catalogue, analytics, SEO. Devis rapide sur WhatsApp.',
  alternates: { canonical: '/e-commerce' },
}

const phone = '2120663711164'

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
      <div className="container mx-auto px-4 py-20">
        <ClientMotionWrapper initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h1 className="heading-1 text-gray-900">E‑commerce performant</h1>
          <p className="text-lg text-gray-800 font-semibold mt-2"><Typewriter words={["Paiements sécurisés","Catalogue & commandes","SEO & vitesse","Analytics & tracking"]} /></p>
          <p className="text-gray-600 max-w-2xl mt-3">Paiement, gestion des commandes, SEO, performance et sécurité. Nous construisons des boutiques prêtes à vendre.</p>
          <div className="mt-6 flex gap-3">
            <a href={`https://wa.me/${phone}`} className="btn-primary">Demander un devis</a>
            <Link href="/portfolio" className="btn-secondary">Voir des projets</Link>
          </div>
        </ClientMotionWrapper>
        <TextTicker text="Paiement • Catalogue • Commandes • SEO • Vitesse • Analytics" className="mt-8 border-y border-gray-100 text-sm" />
        {/* Why us */}
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {[{t:'Conversion‑first',d:'UX claire, checkout optimisé, moyens de paiement adaptés et upsells.'},{t:'Stack moderne',d:'Next.js, intégrations paiement & logistique, analytics et pixels.'},{t:'Accompagnement',d:'Formation, support et amélioration continue après lancement.'}].map((b,i)=> (
            <ClientMotionWrapper key={b.t} initial={{opacity:0,y:12}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.4,delay:i*0.05}} className="p-6 rounded-2xl bg-white border border-gray-100 shadow-lg">
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
              <ClientMotionWrapper key={c.title} initial={{opacity:0,y:12}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.4,delay:i*0.05}} className="p-6 rounded-2xl bg-white border border-gray-100 shadow-lg">
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
          <ClientMotionWrapper initial={{opacity:0,y:12}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.4}} className="p-6 rounded-2xl bg-white border border-gray-100 shadow-lg">
            <div className="flex items-start gap-3">
              <span className="w-10 h-10 rounded-lg bg-primary-100 text-primary-700 flex items-center justify-center"><Database size={18} /></span>
              <div>
                <h3 className="font-semibold text-gray-900">Base de données Supabase</h3>
                <p className="text-gray-600 text-sm mt-1">Solution scalable et sécurisée pour produits, commandes et utilisateurs. API en temps réel et auth robuste.</p>
              </div>
            </div>
          </ClientMotionWrapper>
          <ClientMotionWrapper initial={{opacity:0,y:12}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.4,delay:0.05}} className="p-6 rounded-2xl bg-white border border-gray-100 shadow-lg">
            <div className="flex items-start gap-3">
              <span className="w-10 h-10 rounded-lg bg-primary-100 text-primary-700 flex items-center justify-center"><Search size={18} /></span>
              <div>
                <h3 className="font-semibold text-gray-900">SEO & performance</h3>
                <p className="text-gray-600 text-sm mt-1">Balises, sitemap, robots, maillage, Core Web Vitals et images optimisées pour un référencement durable.</p>
              </div>
            </div>
          </ClientMotionWrapper>
          <ClientMotionWrapper initial={{opacity:0,y:12}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.4,delay:0.1}} className="p-6 rounded-2xl bg-white border border-gray-100 shadow-lg">
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
            {[{icon:Wrench,t:'Fonctionnalités sur mesure',d:"Configurateurs, abonnements, marketplaces, intégrations métiers…"},{icon:Rocket,t:'Lancements rapides',d:"MVP en semaines puis itérations agiles pour accélérer."},{icon:Shield,t:'Qualité & fiabilité',d:"Tests, monitoring, sauvegardes et support prioritaire."},{icon:Sparkles,t:'Design différenciant',d:"UI/UX élégante, animations modernes et identité forte."}].map((c,i)=> (
              <ClientMotionWrapper key={c.t} initial={{opacity:0,y:12}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.4,delay:i*0.05}} className="p-5 rounded-2xl bg-white border border-gray-100 shadow-lg">
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
        {/* CTA banner */}
        <div className="mt-12 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-2xl p-6 text-center">
          <p className="text-lg font-semibold">Lancer une boutique prête à vendre</p>
          <a href={`https://wa.me/${phone}`} className="mt-3 inline-block bg-white text-primary-700 px-6 py-3 rounded-lg font-semibold">Parler à un expert</a>
        </div>
      </div>
    </section>
  )
}


