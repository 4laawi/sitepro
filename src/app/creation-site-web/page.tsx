import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import ClientMotionWrapper from '@/components/ClientMotionWrapper'
import { CheckCircle2 } from 'lucide-react'
import Script from 'next/script'
import FAQSection from '@/components/FAQSection'

export const metadata: Metadata = {
  title: 'Création de sites web professionnels | Sitepro.ma',
  description:
    "Conception et développement de sites web modernes, rapides et SEO-friendly. Processus clair, stack moderne (Next.js), et résultats mesurables.",
  alternates: { canonical: '/creation-site-web' },
  keywords: [
    'création site web maroc',
    'agence web maroc',
    'site vitrine maroc',
    'site e‑commerce maroc',
    'développement web marrakech',
  ],
  openGraph: {
    title: 'Création de sites web professionnels | Maroc',
    description: 'Design moderne, SEO, performance. Devis rapide sur WhatsApp.',
    url: 'https://www.sitepro.ma/creation-site-web',
    type: 'article',
  },
}

const phone = '212663711164'

export default function CreationSiteWebPage() {
  const features = [
    { title: 'Design sur mesure', desc: 'Identité visuelle unique et moderne', icon: '🎨' },
    { title: 'SEO de base inclus', desc: 'Balises, sitemap, vitesse, structure', icon: '🔎' },
    { title: 'Ultra performant', desc: 'LCP et CLS optimisés, chargement rapide', icon: '⚡' },
    { title: 'Sécurisé & fiable', desc: 'HTTPS, protections, sauvegardes', icon: '🛡️' },
    { title: 'CMS simple', desc: 'Mise à jour autonome du contenu', icon: '📝' },
    { title: 'Support 24/7', desc: 'Assistance continue après mise en ligne', icon: '🎧' },
  ]

  const steps = [
    { title: '1. Découverte', desc: "Brief, objectifs, publics cibles et KPIs." },
    { title: '2. UX / Wireframes', desc: "Architecture d'information et parcours utilisateur." },
    { title: '3. UI & Design', desc: 'Maquettes haute fidélité, design system & composants.' },
    { title: '4. Développement', desc: 'Next.js, animations soignées, intégrations (CMS, paiement...).' },
    { title: '5. Contenu & SEO', desc: 'Rédaction, optimisation on-page, tracking analytics.' },
    { title: '6. Recette & Lancement', desc: 'Tests QA, performances, sécurité, formation & mise en ligne.' },
  ]

  const stack = ['Next.js', 'React', 'Tailwind CSS', 'Framer Motion', 'Supabase', 'Vercel', 'Stripe']

  const packages = [
    {
      name: 'Starter',
      price: '2 200 MAD',
      bullets: [
        'Design mobile‑friendly',
        'Bouton WhatsApp click‑to‑chat',
        'SEO de base + formulaire de contact',
        'Livraison en 5 jours ouvrés',
      ],
    },
    {
      name: 'Growth',
      price: '3 000 MAD',
      bullets: [
        "Tableau de bord d’administration (édition simple)",
        'Formulaire de réservation / prise de rendez‑vous',
        'Support prioritaire & SEO avancé',
      ],
    },
    {
      name: 'Premium',
      price: '4 200 MAD',
      bullets: [
        'Site multilingue',
        'Paiement en ligne',
        'Chatbot IA',
        'Outils d’analytics avancés',
      ],
    },
  ]

  const addons = [
    { name: 'Multi‑langue', price: 'à partir de 600 MAD' },
    { name: 'Système de réservation', price: 'à partir de 700 MAD' },
    { name: 'Tableau de bord admin', price: 'à partir de 500 MAD' },
    { name: 'Chatbot IA', price: 'à partir de 1 200 MAD' },
  ]

  return (
    <section className="cv-auto">
      <Script id="ld-faq-creation" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: [
            { '@type': 'Question', name: 'Combien de temps pour créer un site ?', acceptedAnswer: { '@type': 'Answer', text: '2 à 4 semaines pour un site vitrine, 4 à 8 semaines pour un e‑commerce selon les fonctionnalités.' } },
            { '@type': 'Question', name: 'Puis‑je gérer le site moi‑même ?', acceptedAnswer: { '@type': 'Answer', text: 'Oui, un CMS est inclus et une formation est fournie.' } },
            { '@type': 'Question', name: 'Le SEO est‑il inclus ?', acceptedAnswer: { '@type': 'Answer', text: 'Un socle SEO est inclus (balises, vitesse, sitemap, structure). Des prestations avancées sont possibles.' } }
          ]
        })}
      </Script>
      {/* Hero */}
      <div className="relative overflow-hidden bg-gradient-to-b from-white to-blue-50/40">
        <div className="container mx-auto px-4 py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <ClientMotionWrapper
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-100 text-primary-700 text-sm font-semibold">
                Création de sites web
              </span>
              <h1 className="heading-1 text-gray-900">Création de sites web au Maroc – modernes et performants</h1>
              <p className="body-large text-gray-600 max-w-xl">
                Nous concevons et développons des sites rapides, esthétiques et faciles à gérer,
                pensés pour votre croissance et le référencement naturel.
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                <a
                  href={`https://wa.me/${phone}?text=${encodeURIComponent('Bonjour, je souhaite créer un site web.')}`}
                  className="btn-primary"
                  aria-label="Demander un devis sur WhatsApp"
                >
                  Demander un devis
                </a>
                <Link href="/portfolio" className="btn-secondary" aria-label="Voir le portfolio de Sitepro.ma">Voir le portfolio</Link>
              </div>
            </ClientMotionWrapper>

            <ClientMotionWrapper
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="hidden lg:block"
            >
              <div className="relative">
                <Image
                  src="/hero-img.png"
                  alt="Aperçu site web"
                  width={820}
                  height={560}
                  sizes="(min-width:1024px) 700px, 100vw"
                  className="w-full max-w-[700px]"
                  priority
                />
              </div>
            </ClientMotionWrapper>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="container mx-auto px-4 py-14">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <ClientMotionWrapper
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="p-6 rounded-2xl bg-white shadow-lg border border-gray-100 hover:shadow-xl transition-all"
            >
              <div className="text-3xl mb-3">{f.icon}</div>
              <h3 className="font-semibold text-lg text-gray-900">{f.title}</h3>
              <p className="text-gray-600 text-sm mt-1">{f.desc}</p>
            </ClientMotionWrapper>
          ))}
        </div>
      </div>

      {/* Process */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="heading-2 text-center text-gray-900 mb-10">Notre méthodologie</h2>
          <ol className="relative max-w-3xl mx-auto before:content-[''] before:absolute before:left-3.5 before:top-0 before:bottom-0 before:w-[2px] before:bg-gray-200">
            {steps.map((s, i) => (
              <ClientMotionWrapper
                key={s.title}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, ease: 'easeOut', delay: i * 0.05 }}
                className="relative ps-14 py-3 mb-8"
                as="li"
              >
                <span className="absolute left-3.5 -translate-x-1/2 top-1 flex h-7 w-7 items-center justify-center rounded-full bg-primary-600 text-white text-xs font-bold shadow-sm ring-1 ring-white/60">
                  {i + 1}
                </span>
                <h3 className="font-semibold text-gray-900">{s.title}</h3>
                <p className="text-gray-600 text-sm">{s.desc}</p>
              </ClientMotionWrapper>
            ))}
          </ol>
        </div>
      </div>

      {/* Tech stack & deliverables */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h3 className="heading-3 text-gray-900 mb-4">Technologies modernes</h3>
            <p className="text-gray-600 mb-4">Nous utilisons une stack fiable et performante pour vous garantir qualité, sécurité et évolutivité.</p>
            <div className="flex flex-wrap gap-2">
              {stack.map((t) => (
                <span key={t} className="px-3 py-1 rounded-full bg-gray-100 text-gray-700 text-sm">{t}</span>
              ))}
            </div>
          </div>
          <div>
            <h3 className="heading-3 text-gray-900 mb-4">Livrables inclus</h3>
            <ul className="space-y-2 text-gray-700">
              {[
                'Design responsive et accessibilité AA',
                'SEO de base (balises, sitemap, robots, redirections)',
                'Performances (images optimisées, cache, best practices)',
                'CMS pour gestion autonome du contenu',
                'Analytics & pixels (GA4, Meta…)',
                'Sécurité, sauvegardes et monitoring',
                'Formation et documentation',
              ].map((d) => (
                <li key={d} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5" />
                  <span>{d}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Pourquoi nous choisir */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="heading-2 text-center text-gray-900 mb-10">Pourquoi nous choisir</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                t: 'SEO pensé dès le départ',
                d: 'Structure sémantique propre, balises, contenus et vitesse pour viser le top sur "création site web maroc".',
              },
              {
                t: 'Performance et Core Web Vitals',
                d: 'Images optimisées, chargement intelligent et code moderne pour un site ultra rapide.',
              },
              {
                t: 'Accompagnement',
                d: 'Support WhatsApp réactif, formation et conseils pour faire grandir votre visibilité.',
              },
            ].map((b, i) => (
              <ClientMotionWrapper
                key={b.t}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="p-6 rounded-2xl bg-white shadow-lg border border-gray-100"
              >
                <h3 className="font-semibold text-gray-900">{b.t}</h3>
                <p className="text-gray-600 text-sm mt-1">{b.d}</p>
              </ClientMotionWrapper>
            ))}
          </div>
        </div>
      </div>

      {/* Villes desservies (liens internes) */}
      <div className="container mx-auto px-4 py-14">
        <h2 className="heading-3 text-gray-900 mb-6 text-center">Villes desservies</h2>
        <div className="flex flex-wrap justify-center gap-3">
          {['marrakech', 'rabat', 'casablanca', 'agadir', 'fes', 'tanger', 'laayoune'].map((v) => (
            <Link key={v} href={`/creation-site-web/${v}`} className="px-4 py-2 rounded-full bg-gray-100 text-gray-700 text-sm hover:bg-gray-200" aria-label={`Création de site web ${v}`}>
              {v.charAt(0).toUpperCase() + v.slice(1)}
            </Link>
          ))}
        </div>
      </div>

      {/* Packages */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="heading-2 text-center text-gray-900 mb-10">Formules</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {packages.map((p, i) => (
              <ClientMotionWrapper
                key={p.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="p-6 rounded-2xl bg-white border border-gray-100 shadow-lg hover:shadow-xl transition-all"
              >
                <h3 className="font-bold text-xl text-gray-900">{p.name}</h3>
                <p className="text-primary-700 font-semibold mt-1">{p.price}</p>
                <ul className="mt-4 space-y-2 text-gray-700">
                  {p.bullets.map((b) => (
                    <li key={b} className="flex gap-2 text-sm"><span>•</span><span>{b}</span></li>
                  ))}
                </ul>
                <a
                  href={`https://wa.me/${phone}?text=${encodeURIComponent('Bonjour, je souhaite un devis: ' + p.name)}`}
                  className="btn-primary mt-5 inline-block"
                >
                  Démarrer
                </a>
              </ClientMotionWrapper>
            ))}
          </div>

          {/* Add‑ons */}
          <div className="mt-12">
            <h3 className="heading-3 text-center text-gray-900 mb-6">Add‑ons</h3>
            <ul className="max-w-2xl mx-auto grid sm:grid-cols-2 gap-3 text-gray-800">
              {addons.map((a) => (
                <li key={a.name} className="flex items-center justify-between bg-gray-50 border border-gray-200 rounded-xl px-4 py-3">
                  <span>+ {a.name}</span>
                  <span className="text-gray-600">— {a.price}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <FAQSection />

      {/* CTA */}
      <div className="bg-gradient-to-r from-primary-600 to-primary-700 text-white py-14">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-3">Prêt à transformer votre présence digitale ?</h3>
          <p className="text-white/90 max-w-2xl mx-auto">Parlons de votre projet et obtenez un plan d’action sous 24h.</p>
          <div className="flex gap-3 justify-center mt-6">
            <a href={`https://wa.me/${phone}`} className="bg-white text-primary-700 px-6 py-3 rounded-lg font-semibold">Discuter sur WhatsApp</a>
            <Link href="/portfolio" className="bg-white/10 hover:bg-white/20 px-6 py-3 rounded-lg font-semibold">Voir le portfolio</Link>
          </div>
        </div>
      </div>
    </section>
  )
}


