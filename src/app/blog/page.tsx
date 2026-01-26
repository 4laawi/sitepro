import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Script from 'next/script'
import { ArrowRight, Search, ChevronRight } from 'lucide-react'
import BlogHero from '@/components/BlogHero'

export const metadata: Metadata = {
  title: 'Blog Expertise Digitale & SEO au Maroc | Sitepro.ma',
  description: 'Découvrez nos conseils d’experts sur la création de sites web, le référencement SEO et le business digital au Maroc. Boostez votre présence en ligne.',
  alternates: { canonical: '/blog' },
}

const categories = [
  {
    title: 'Création de site web',
    description: 'Conception, UI/UX design et développement de sites performants adaptés au marché marocain.',
    slug: 'creation-site-web',
    count: 12
  },
  {
    title: 'SEO / Référencement',
    description: 'Stratégies de visibilité sur Google.ma pour dominer les résultats de recherche locaux.',
    slug: 'referencement-seo',
    count: 8
  },
  {
    title: 'Business digital au Maroc',
    description: 'Conseils pour entreprendre et réussir sa transformation digitale dans le royaume.',
    slug: 'business-digital',
    count: 5
  }
]

const ARTICLES = [
  {
    id: 'site-web-gratuit-maroc',
    title: 'Créer un site web gratuitement au Maroc : bonne ou mauvaise idée ? La vérité que personne ne dit',
    excerpt: "Est-ce une bonne idée de créer un site web gratuit pour votre business au Maroc ? Découvrez les limites cachées, les risques SEO et les conseils d’un expert.",
    image: '/site_web_gratuit_maroc_banner_1769387594208.png',
    category: 'Création Web',
    date: '26 Jan 2026',
    readTime: '12 min',
    slug: '/blog/site-web-gratuit-maroc',
    featured: true
  },
  {
    id: 'pourquoi-site-pas-sur-google',
    title: 'Pourquoi mon site web n’apparaît pas sur Google ? Causes réelles et solutions concrètes',
    excerpt: "Votre site est en ligne mais invisible ? Découvrez les causes réelles (indexation, SEO, technique) et les solutions concrètes pour enfin apparaître sur Google.",
    image: 'https://images.unsplash.com/photo-1557838923-2985c318be48?auto=format&fit=crop&q=80&w=2000',
    category: 'SEO',
    date: '26 Jan 2026',
    readTime: '10 min',
    slug: '/blog/pourquoi-site-pas-sur-google',
    featured: false
  },
  {
    id: 'comment-trouver-clients-ligne-maroc',
    title: 'Comment trouver des clients en ligne au Maroc ? Les méthodes qui marchent vraiment',
    excerpt: "Découvrez les méthodes réelles pour acquérir des clients en ligne au Maroc. Guide expert pour entrepreneurs et PME : Google, SEO local, réseaux sociaux et publicité.",
    image: '/clipboard-image-1769385165.webp',
    category: 'Stratégie',
    date: '26 Jan 2026',
    readTime: '15 min',
    slug: '/blog/comment-trouver-clients-ligne-maroc',
    featured: false
  },
  {
    id: 'combien-coute-site-web-maroc',
    title: 'Combien coûte un site web professionnel au Maroc en 2026 ? Prix réels, pièges et conseils',
    excerpt: "Découvrez les tarifs réels pour un site web au Maroc en 2026. Guide transparent d'expert sur les coûts, les pièges à éviter et comment investir intelligemment.",
    image: '/clipboard-image-1769385269.webp',
    category: 'Business',
    date: '26 Jan 2026',
    readTime: '15 min',
    slug: '/blog/combien-coute-site-web-maroc',
    featured: false
  },
  {
    id: 'seo-local-maroc-google-maps',
    title: 'SEO local au Maroc : comment apparaître sur Google Maps',
    excerpt: "Pour une entreprise marocaine, être visible sur Google Maps n'est plus une option, c'est une nécessité vitale. Découvrez comment optimiser votre référencement local.",
    image: '/clipboard-image-1769385039.webp',
    category: 'SEO',
    date: '25 Jan 2026',
    readTime: '8 min',
    slug: '/blog/seo-local-maroc-google-maps',
    featured: false
  }
]

export default function BlogPage() {
  return (
    <main className="bg-white min-h-screen pt-12 pb-20">
      {/* Breadcrumbs JSON-LD */}
      <Script id="ld-breadcrumbs-blog" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://www.sitepro.ma/' },
            { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.sitepro.ma/blog' }
          ]
        })}
      </Script>

      <div className="container mx-auto px-4 lg:px-8">
        {/* Breadcrumb Visual */}
        <nav className="flex items-center space-x-2 text-sm text-gray-500 mb-8" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-primary-600 transition-colors">Accueil</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-gray-900 font-medium">Blog</span>
        </nav>

        {/* Featured Slider (Hero) */}
        <BlogHero articles={ARTICLES} />

        {/* Header Section */}
        <header className="max-w-4xl mb-16 px-4 md:px-0">
          <h1 className="hero-title-premium mb-6">
            Expertises Digitales au Maroc : Votre Hub pour la Croissance Web & le SEO
          </h1>
          <p className="hero-subtitle-premium">
            Explorez les dernières tendances, guides pratiques et analyses stratégiques pour propulser votre entreprise sur le web marocain. Notre blog est conçu pour devenir votre ressource de référence.
          </p>
        </header>

        {/* Articles Grid */}
        <section className="mb-24 px-4 md:px-0">
          <div className="flex flex-col sm:flex-row items-center justify-between mb-12 gap-6">
            <h2 className="heading-2">Dernières publications</h2>
            <div className="flex gap-4 p-1 bg-gray-100 rounded-full">
              <button className="px-6 py-2 rounded-full text-sm font-bold bg-white shadow-sm text-gray-900 transition-all">Plus récents</button>
              <button className="px-6 py-2 rounded-full text-sm font-bold text-gray-500 hover:text-gray-900 transition-all">Populaires</button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {ARTICLES.map((article) => (
              <article key={article.id} className="group flex flex-col">
                <div className="relative aspect-[4/3] rounded-[32px] overflow-hidden mb-6 bg-gray-100 border border-gray-100 shadow-sm">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/95 backdrop-blur-sm text-gray-950 text-[10px] font-bold rounded-full uppercase tracking-widest shadow-sm">{article.category}</span>
                  </div>
                </div>
                <div className="flex items-center gap-3 mb-4 text-xs font-bold text-gray-400 uppercase tracking-widest">
                  <span>{article.date}</span>
                  <span className="w-1 h-1 rounded-full bg-gray-300" />
                  <span>{article.readTime} de lecture</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary-600 transition-colors leading-tight">
                  {article.title}
                </h3>
                <p className="text-gray-600 mb-6 line-clamp-3 text-sm leading-relaxed">
                  {article.excerpt}
                </p>
                <Link href={article.slug} className="mt-auto inline-flex items-center gap-3 font-bold text-gray-950 group-hover:text-primary-600 transition-colors uppercase text-[11px] tracking-widest">
                  Lire la suite <div className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center group-hover:border-primary-600 group-hover:bg-primary-50 transition-all"><ArrowRight className="w-3 h-3" /></div>
                </Link>
              </article>
            ))}
          </div>
        </section>

        {/* Topical Authority Hub / Internal Links */}
        <section className="bg-gray-950 rounded-[60px] p-10 lg:p-24 border border-white/5 relative overflow-hidden mb-24">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-primary-600/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10">
            <div>
              <span className="badge-gradient mb-6 block font-bold tracking-widest uppercase text-xs">Notre Expertise</span>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 leading-tight">
                Accélérez votre croissance avec nos solutions digitales
              </h2>
              <p className="text-gray-400 text-lg mb-12 leading-relaxed max-w-xl text-balance">
                Au-delà de notre blog, nous sommes une agence engagée à transformer vos ambitions en résultats concrets. Découvrez nos services piliers.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { name: 'Création Site Web', href: '/creation-site-web-maroc' },
                  { name: 'SEO / Référencement', href: '/referencement-seo' },
                  { name: 'E-commerce', href: '/e-commerce' },
                  { name: 'Contactez-nous', href: '/contact', primary: true }
                ].map((link, idx) => (
                  <Link
                    key={idx}
                    href={link.href}
                    className={`flex items-center justify-between p-5 rounded-2xl transition-all duration-300 group ${link.primary
                      ? 'bg-primary-600 text-white hover:bg-primary-700 shadow-xl shadow-primary-600/20'
                      : 'bg-white/5 text-white border border-white/10 hover:bg-white/10 hover:border-white/20'
                      }`}
                  >
                    <span className="font-bold">{link.name}</span>
                    <ArrowRight className={`w-4 h-4 transition-transform group-hover:translate-x-2 ${link.primary ? 'text-white' : 'text-primary-500'}`} />
                  </Link>
                ))}
              </div>
            </div>
            <div className="relative group">
              <div className="relative rounded-[40px] overflow-hidden shadow-2xl border border-white/10">
                <Image
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1000"
                  alt="Équipe Sitepro.ma"
                  width={800}
                  height={600}
                  className="w-full h-auto grayscale group-hover:grayscale-0 transition-all duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950 to-transparent opacity-60" />
              </div>
              {/* Floating Badge */}
              <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-[32px] shadow-2xl hidden md:block border border-gray-100 animate-float">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-2xl flex items-center justify-center">
                    <div className="w-3 h-3 bg-primary-600 rounded-full animate-ping" />
                  </div>
                  <div>
                    <span className="block text-2xl font-black text-gray-950">100%</span>
                    <span className="block text-gray-500 text-xs font-bold uppercase tracking-widest">Focus Client</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Categories Section (Explorer par thématique) */}
        <section className="mb-24 px-4 md:px-0">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <h2 className="heading-2 mb-4">Explorer par thématique</h2>
              <p className="text-gray-600 max-w-2xl">
                Choisissez une catégorie pour approfondir vos connaissances et découvrir des stratégies actionnables.
              </p>
            </div>
            <div className="relative group">
              <input
                type="text"
                placeholder="Rechercher un article..."
                className="pl-12 pr-4 py-3 rounded-2xl border border-gray-200 w-full md:w-80 focus:ring-2 focus:ring-primary-500 transition-all outline-none bg-gray-50/50"
              />
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5 group-focus-within:text-primary-500 transition-colors" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categories.map((cat, i) => (
              <Link
                key={i}
                href={`/blog/category/${cat.slug}`}
                className="p-8 rounded-3xl border border-gray-100 bg-gray-50/50 hover:bg-white hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 flex flex-col h-full group"
              >
                <div className="flex justify-between items-start mb-8">
                  <span className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-white shadow-sm text-primary-600 font-bold group-hover:bg-primary-600 group-hover:text-white transition-colors">
                    {cat.count}
                  </span>
                  <div className="w-10 h-10 rounded-full border border-gray-100 flex items-center justify-center group-hover:bg-gray-950 transition-colors">
                    <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-primary-600 transition-colors">{cat.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-8">
                  {cat.description}
                </p>
                <span className="mt-auto text-primary-600 font-bold text-sm flex items-center gap-2">
                  Voir les articles <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            ))}
          </div>
        </section>
      </div >
    </main >
  )
}
