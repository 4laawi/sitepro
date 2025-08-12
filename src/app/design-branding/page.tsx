import type { Metadata } from 'next'
import ClientMotionWrapper from '@/components/ClientMotionWrapper'
import Typewriter from '@/components/Typewriter'

export const metadata: Metadata = {
  title: 'Design & Branding | Sitepro.ma',
  description: 'Identité visuelle, logo, charte graphique et design system pour une marque forte.',
  alternates: { canonical: '/design-branding' },
}

export default function DesignBrandingPage() {
  return (
    <section className="cv-auto">
      <div className="container mx-auto px-4 py-20">
        <ClientMotionWrapper initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h1 className="heading-1 text-gray-900">Design & Branding</h1>
          <p className="text-lg text-gray-800 font-semibold mt-2"><Typewriter words={["Logo & identité","Charte & composants","Design system","UI élégante"]} /></p>
          <p className="text-gray-600 max-w-2xl mt-3">Nous créons des identités fortes et cohérentes avec un système de design réutilisable.</p>
          <div className="mt-6 flex gap-3">
            <a href={`https://wa.me/2120663711164`} className="btn-primary">Demander un audit design</a>
            <a href={`/portfolio`} className="btn-secondary">Voir des projets</a>
          </div>
        </ClientMotionWrapper>
        {/* Pourquoi nous */}
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {[{t:'Méthodologie prouvée',d:'Process clair: recherche, moodboard, exploration, itérations et design system.'},{t:'Design qui performe',d:'Orienté conversion: lisibilité, hiérarchie, contraste, cohérence multi‑écran.'},{t:'Livrables complets',d:'Logos, déclinaisons, charte graphique, composants UI et guide d’usage.'}].map((b,i)=> (
            <ClientMotionWrapper key={b.t} initial={{opacity:0,y:12}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.4,delay:i*0.05}} className="p-6 rounded-2xl bg-white border border-gray-100 shadow-lg">
              <h3 className="font-semibold text-gray-900">{b.t}</h3>
              <p className="text-gray-600 text-sm mt-1">{b.d}</p>
            </ClientMotionWrapper>
          ))}
        </div>
        {/* Packages conversion */}
        <div className="mt-16">
          <h2 className="heading-2 text-gray-900 mb-6">Formules de branding</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[{n:'Starter',p:'3 500 MAD',l:['Logo + palette','Carte de visite','Guide d’usage (1 page)']},{n:'Pro',p:'7 500 MAD',l:['Identité complète','Charte graphique','Composants UI']},{n:'Enterprise',p:'Sur devis',l:['Design system','Design tokens','Kit marketing']}] .map((pkg,i)=> (
              <ClientMotionWrapper key={pkg.n} initial={{opacity:0,y:12}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.4,delay:i*0.05}} className="p-6 rounded-2xl bg-white border border-gray-100 shadow-lg">
                <h3 className="font-bold text-xl text-gray-900">{pkg.n}</h3>
                <p className="text-primary-700 font-semibold mt-1">{pkg.p}</p>
                <ul className="mt-3 space-y-1 text-gray-700 text-sm">
                  {pkg.l.map((x)=> (<li key={x}>• {x}</li>))}
                </ul>
                <a href={`https://wa.me/2120663711164`} className="btn-primary mt-4 inline-block">Obtenir un devis</a>
              </ClientMotionWrapper>
            ))}
          </div>
        </div>
        {/* FAQ SEO */}
        <div className="mt-16">
          <h2 className="heading-2 text-gray-900 mb-4">FAQ</h2>
          <details className="group bg-white rounded-xl border border-gray-200 p-4 open:shadow-md mb-3"><summary className="cursor-pointer font-medium text-gray-900">Combien de temps pour une identité ?</summary><p className="mt-2 text-gray-600 text-sm">Entre 1 et 3 semaines selon la complexité et les itérations.</p></details>
          <details className="group bg-white rounded-xl border border-gray-200 p-4 open:shadow-md mb-3"><summary className="cursor-pointer font-medium text-gray-900">Livrez‑vous un design system ?</summary><p className="mt-2 text-gray-600 text-sm">Oui, pour les offres Pro et Enterprise: composants, tokens, règles d’usage.</p></details>
          <details className="group bg-white rounded-xl border border-gray-200 p-4 open:shadow-md"><summary className="cursor-pointer font-medium text-gray-900">Proposez‑vous des refontes ?</summary><p className="mt-2 text-gray-600 text-sm">Oui, nous auditons l’existant et proposons une refonte ciblée ou complète.</p></details>
        </div>
      </div>
    </section>
  )
}


