import ClientMotionWrapper from '@/components/ClientMotionWrapper'
import { Megaphone, LineChart, PenTool, Gift, Quote } from 'lucide-react'
import Image from 'next/image'

interface CityExtrasProps {
  cityName: string
}

export default function CityExtras({ cityName }: CityExtrasProps) {
  const items = [
    {
      icon: Megaphone,
      title: 'Publicité ciblée',
      desc: "Campagnes Meta/Google pour atteindre votre audience à " + cityName + '. '
        + 'Optimisation continue pour maximiser le ROAS.',
    },
    {
      icon: LineChart,
      title: 'SEO local & technique',
      desc: 'Amélioration du classement Google (pages locales, vitesse, balises, maillage interne).',
    },
    {
      icon: PenTool,
      title: 'Contenu qui convertit',
      desc: 'Rédaction et visuels pensés pour la conversion et l’autorité dans votre secteur.',
    },
    {
      icon: Gift,
      title: 'Promotions & offres',
      desc: 'Mécaniques d’offres limitées, codes promo et upsells pour déclencher l’achat.',
    },
  ]

  const kpis = [
    { label: 'Hausse moyenne du trafic', value: '21%' },
    { label: 'Conversions en hausse', value: '+38%' },
    { label: 'Satisfaction clients', value: '4.9/5' },
  ]

  return (
    <div className="container mx-auto px-4 py-14">
      <h2 className="heading-2 text-center text-gray-900 mb-10">
        Comment nous générons des résultats pour nos clients
      </h2>

      {/* Value grid */}
      <div className="grid md:grid-cols-2 gap-8">
        {items.map((i, idx) => (
          <ClientMotionWrapper
            key={i.title}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.05 }}
            className="p-6 rounded-2xl bg-white shadow-lg border border-gray-100"
          >
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-primary-100 text-primary-700 flex items-center justify-center">
                <i.icon size={20} />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">{i.title}</h3>
                <p className="text-gray-600 text-sm mt-1">{i.desc}</p>
              </div>
            </div>
          </ClientMotionWrapper>
        ))}
      </div>

      {/* KPI strip */}
      <div className="mt-12 grid sm:grid-cols-3 gap-4">
        {kpis.map((k) => (
          <div key={k.label} className="rounded-xl bg-gray-50 border border-gray-200 p-4 text-center">
            <p className="text-2xl font-bold text-primary-700">{k.value}</p>
            <p className="text-gray-600 text-sm">{k.label}</p>
          </div>
        ))}
      </div>

      {/* Offices */}
      <div className="mt-12 grid md:grid-cols-2 gap-6">
        <figure className="rounded-2xl overflow-hidden border border-gray-100 shadow-lg">
          <Image src="/office.webp" alt="Bureau Sitepro" width={800} height={480} className="w-full h-60 object-cover" />
          <figcaption className="text-center text-xs text-gray-500 py-2">Bureau — accueil clients</figcaption>
        </figure>
        <figure className="rounded-2xl overflow-hidden border border-gray-100 shadow-lg">
          <Image src="/office2.webp" alt="Salle de réunion Sitepro" width={800} height={480} className="w-full h-60 object-cover" />
          <figcaption className="text-center text-xs text-gray-500 py-2">Salle de réunion — sessions de cadrage</figcaption>
        </figure>
      </div>

      {/* Testimonial */}
      <div className="mt-12 rounded-2xl bg-white border border-gray-100 shadow-lg p-6">
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 rounded-full bg-primary-100 text-primary-700 flex items-center justify-center">
            <Quote size={18} />
          </div>
          <div>
            <p className="text-gray-700 italic">
              « Grâce à votre accompagnement, nous avons constaté une nette progression du trafic et des ventes. 
              L’exécution est rapide et la communication claire. »
            </p>
            <p className="text-gray-500 text-sm mt-2">Directrice Marketing — Client local</p>
          </div>
        </div>
      </div>
    </div>
  )
}


