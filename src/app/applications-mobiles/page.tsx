import type { Metadata } from 'next'
import Link from 'next/link'
import ClientMotionWrapper from '@/components/ClientMotionWrapper'
import Typewriter from '@/components/Typewriter'
import TextTicker from '@/components/TextTicker'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Applications mobiles & PWA | Sitepro.ma',
  description: 'Apps iOS/Android et PWA performantes. UX soignée, performance et intégrations.',
  alternates: { canonical: '/applications-mobiles' },
}

const phone = '212663711164'

export default function MobileAppsPage() {
  return (
    <section className="cv-auto">
      <Script id="ld-breadcrumbs-apps" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://www.sitepro.ma/' },
            { '@type': 'ListItem', position: 2, name: 'Applications mobiles', item: 'https://www.sitepro.ma/applications-mobiles' }
          ]
        })}
      </Script>
      <Script id="ld-service-apps" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'Développement d\u2019applications mobiles & PWA',
          serviceType: 'Mobile apps / PWA',
          provider: { '@type': 'Organization', name: 'Sitepro.ma', url: 'https://www.sitepro.ma' },
          areaServed: 'MA',
          url: 'https://www.sitepro.ma/applications-mobiles'
        })}
      </Script>
      <div className="container mx-auto px-4 py-20">
        <ClientMotionWrapper initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h1 className="heading-1 text-gray-900">Applications mobiles</h1>
          <p className="text-lg text-gray-800 font-semibold mt-2"><Typewriter words={["PWA & natif", "UX fluide", "Intégrations API", "Performance"]} /></p>
          <p className="text-gray-600 max-w-2xl mt-3">Nous créons des applications mobiles et PWA fiables avec une expérience utilisateur moderne.</p>
          <div className="mt-6 flex gap-3">
            <a href={`https://wa.me/${phone}`} className="btn-primary">Discuter d&apos;une app</a>
            <Link href="/portfolio" className="btn-secondary">Voir des apps</Link>
          </div>
        </ClientMotionWrapper>
        <TextTicker text="PWA • Natif • UX • API • Performance • Sécurité" className="mt-8 border-y border-gray-100 text-sm" />
        {/* Differentiators */}
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {[{ t: 'Expérience utilisateur', d: 'Design mobile‑first, gestes, navigation fluide et accessibilité.' }, { t: 'Performance', d: 'Temps de lancement optimisé, cache offline et notifications push.' }, { t: 'Intégrations', d: 'API, paiement, analytics, crash reporting et CI/CD.' }].map((b, i) => (
            <ClientMotionWrapper key={b.t} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.05 }} className="p-6 rounded-2xl bg-white border border-gray-100 shadow-lg">
              <h3 className="font-semibold text-gray-900">{b.t}</h3>
              <p className="text-gray-600 text-sm mt-1">{b.d}</p>
            </ClientMotionWrapper>
          ))}
        </div>
        {/* CTA banner */}
        <div className="mt-12 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-2xl p-6 text-center">
          <p className="text-lg font-semibold">Construire une application qui engage</p>
          <a href={`https://wa.me/${phone}`} className="mt-3 inline-block bg-white text-primary-700 px-6 py-3 rounded-lg font-semibold">Obtenir un devis</a>
        </div>
      </div>
    </section>
  )
}


