import type { Metadata } from 'next'
import ClientMotionWrapper from '@/components/ClientMotionWrapper'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Étude de cas: Mama Fatma Store | Sitepro.ma',
  description: "E‑commerce rapide avec SEO, gestion produits et conversion optimisée.",
  alternates: { canonical: '/portfolio/case-studies/mama-fatma-store' },
}

const phone = '212663711164'

export default function CaseStudyMamaFatma() {
  return (
    <section className="cv-auto">
      <div className="container mx-auto px-4 py-20">
        <ClientMotionWrapper initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h1 className="heading-1 text-gray-900">Étude de cas — Mama Fatma Store</h1>
          <p className="text-gray-600 max-w-3xl mt-3">Boutique en ligne moderne (Next.js) avec SEO et performances élevées pour une meilleure conversion.</p>
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            {[
              { k: 'Temps de chargement', v: '≤ 1.8s LCP' },
              { k: 'Visiteurs/mois', v: '15k+' },
              { k: 'Taux de conversion', v: '4.2%' },
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
    </section>
  )
}


