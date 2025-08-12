import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog | Sitepro.ma',
  description: 'Conseils SEO, performance et conversions pour les sites web au Maroc. Articles à venir.',
  alternates: { canonical: '/blog' },
}

export default function BlogPage() {
  return (
    <section className="cv-auto">
      <div className="container mx-auto px-4 py-20">
        <h1 className="heading-1 text-gray-900 text-center">Blog</h1>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mt-3">
          Nos articles arrivent bientôt: stratégies SEO locales, performances, design et conversion.
        </p>
      </div>
    </section>
  )
}


