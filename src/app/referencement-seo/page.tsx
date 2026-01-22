import type { Metadata } from 'next'
import Link from 'next/link'
import ClientMotionWrapper from '@/components/ClientMotionWrapper'
import Typewriter from '@/components/Typewriter'
import TextTicker from '@/components/TextTicker'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Référencement SEO au Maroc | Sitepro.ma',
  description: 'Audit SEO, optimisation technique et contenu, maillage interne, performances. Gagnez des positions durablement.',
  alternates: { canonical: '/referencement-seo' },
}

const phone = '2120663711164'

export default function SeoPage() {
  return (
    <section className="cv-auto">
      <Script id="ld-breadcrumbs-seo" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://www.sitepro.ma/' },
            { '@type': 'ListItem', position: 2, name: 'Référencement SEO', item: 'https://www.sitepro.ma/referencement-seo' }
          ]
        })}
      </Script>
      <Script id="ld-service-seo" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'Référencement SEO',
          serviceType: 'SEO',
          provider: { '@type': 'Organization', name: 'Sitepro.ma', url: 'https://www.sitepro.ma' },
          areaServed: 'MA',
          url: 'https://www.sitepro.ma/referencement-seo'
        })}
      </Script>
      <div className="container mx-auto px-4 py-20">
        <ClientMotionWrapper initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h1 className="heading-1 text-gray-900">Référencement SEO</h1>
          <p className="text-lg text-gray-800 font-semibold mt-2"><Typewriter words={["Audit technique", "On‑page & contenu", "Maillage & vitesse", "SEO local"]} /></p>
          <p className="text-gray-600 max-w-2xl mt-3">Nous optimisons la structure, la technique et le contenu pour maximiser votre visibilité organique au Maroc.</p>
          <div className="mt-6 flex gap-3">
            <a href={`https://wa.me/${phone}`} className="btn-primary">Parler SEO</a>
            <Link href="/portfolio" className="btn-secondary">Voir des résultats</Link>
          </div>
        </ClientMotionWrapper>
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
        {/* CTA band */}
        <div className="mt-12 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-2xl p-6 text-center">
          <p className="text-lg font-semibold">Prêt à gagner des positions ?</p>
          <a href={`https://wa.me/${phone}`} className="mt-3 inline-block bg-white text-primary-700 px-6 py-3 rounded-lg font-semibold">Obtenir un audit SEO</a>
        </div>
      </div>
    </section>
  )
}


