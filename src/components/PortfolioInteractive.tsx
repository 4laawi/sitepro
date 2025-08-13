'use client'

import Image from 'next/image'
import Link from 'next/link'
import ClientMotionWrapper from '@/components/ClientMotionWrapper'
import { useMemo, useState } from 'react'
import { ExternalLink, Tag } from 'lucide-react'

export interface PortfolioItem {
  id: number
  title: string
  category: string
  description: string
  image: string
  tags: string[]
  link: string
  caseStudy?: string
}

interface PortfolioInteractiveProps {
  items: PortfolioItem[]
  categories: string[]
}

export default function PortfolioInteractive({ items, categories }: PortfolioInteractiveProps) {
  const [selected, setSelected] = useState<string>('Tous')

  const filtered = useMemo(() => {
    if (selected === 'Tous') return items
    return items.filter((i) => i.category === selected)
  }, [items, selected])

  return (
    <div>
      {/* Filters */}
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setSelected(c)}
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm transition-all ${
              selected === c ? 'bg-primary-600 text-white shadow-lg' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            <span className="i-lucide-grid-2x2" /> {c}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filtered.map((item, index) => (
          <ClientMotionWrapper
            key={item.id}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.04 }}
            className="group bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-xl transition-all"
          >
            <div className="relative h-56">
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(min-width:1024px) 33vw, (min-width:768px) 50vw, 100vw"
                className="object-cover"
              />
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium">
                  {item.category}
                </span>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-lg font-bold text-gray-900 group-hover:text-primary-600 transition-colors">
                {item.title}
              </h3>
              <p className="text-gray-600 mt-1 text-sm">{item.description}</p>
              <div className="flex flex-wrap gap-2 mt-4">
                {item.tags.map((t) => (
                  <span key={t} className="inline-flex items-center gap-1 px-2 py-1 rounded bg-gray-100 text-gray-700 text-xs">
                    <Tag size={12} /> {t}
                  </span>
                ))}
              </div>
              <div className="flex items-center justify-between mt-5">
                <Link href={item.link} target="_blank" className="inline-flex items-center gap-2 text-primary-700 font-medium">
                  Voir en ligne <ExternalLink size={16} />
                </Link>
                {item.caseStudy && (
                  <Link href={item.caseStudy} className="text-sm text-gray-600 underline hover:text-primary-700">Étude de cas</Link>
                )}
              </div>
            </div>
          </ClientMotionWrapper>
        ))}
      </div>
    </div>
  )
}


