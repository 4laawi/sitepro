import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, Share2, Calendar, Clock, ChevronRight, ArrowRight, XCircle, CheckCircle, Smartphone, Globe } from 'lucide-react'

export const metadata: Metadata = {
    title: 'Les erreurs les plus fréquentes des cabinets dentaires sans site web',
    description: 'Découvrez pourquoi se priver d\'un site web est une erreur critique pour votre cabinet dentaire. Guide expert pour éviter les pièges et attirer plus de patients.',
    alternates: { canonical: 'https://sitepro.ma/blog/les-erreurs-frequentes-cabinets-dentaires-sans-site-web' },
    openGraph: {
        title: 'Les erreurs les plus fréquentes des cabinets dentaires sans site web',
        description: 'Découvrez pourquoi se priver d\'un site web est une erreur critique pour votre cabinet dentaire.',
        url: 'https://sitepro.ma/blog/les-erreurs-frequentes-cabinets-dentaires-sans-site-web',
        type: 'article',
        images: [{ url: 'https://sitepro.ma/photo5.webp', width: 1200, height: 630 }],
    },
}

const phone = '212663711164'

export default function BlogPost() {
    return (
        <main className="bg-white min-h-screen pt-24 pb-20">
            <div className="container mx-auto px-4 lg:px-8">
                {/* Breadcrumbs */}
                <nav className="flex items-center space-x-2 text-sm text-gray-500 mb-8" aria-label="Breadcrumb">
                    <Link href="/" className="hover:text-primary-600 transition-colors">Accueil</Link>
                    <ChevronRight className="w-4 h-4" />
                    <Link href="/blog" className="hover:text-primary-600 transition-colors">Blog</Link>
                    <ChevronRight className="w-4 h-4" />
                    <span className="text-gray-900 font-medium line-clamp-1">Erreurs Cabinets Dentaires</span>
                </nav>

                <article className="max-w-4xl mx-auto">
                    {/* Header */}
                    <header className="mb-12">
                        <Link href="/blog" className="inline-flex items-center gap-2 text-primary-600 font-bold text-sm mb-8 hover:gap-3 transition-all">
                            <ArrowLeft className="w-4 h-4" /> Retour au blog
                        </Link>
                        <div className="flex gap-3 mb-6">
                            <span className="px-3 py-1 bg-primary-100 text-primary-600 text-[10px] font-bold rounded-full uppercase tracking-wider">Santé & Digital</span>
                            <span className="px-3 py-1 bg-red-100 text-red-600 text-[10px] font-bold rounded-full uppercase tracking-wider">Erreurs à éviter</span>
                        </div>
                        <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-gray-950 mb-8 leading-tight">
                            Les erreurs les plus fréquentes des cabinets dentaires sans site web
                        </h1>

                        <div className="flex flex-wrap items-center gap-6 py-8 border-y border-gray-100">
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 rounded-full bg-primary-500 relative overflow-hidden">
                                    <Image src="/Untitled design (3).webp" alt="Ali Taghi" fill className="object-cover" />
                                </div>
                                <div>
                                    <span className="block text-gray-950 font-bold text-sm">Ali Taghi</span>
                                    <span className="block text-gray-500 text-xs uppercase tracking-wider">8+ Ans d'Expérience Web</span>
                                </div>
                            </div>
                            <div className="flex items-center gap-6 text-sm text-gray-500">
                                <div className="flex items-center gap-2">
                                    <Calendar className="w-4 h-4" />
                                    <span>14 Février 2026</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Clock className="w-4 h-4" />
                                    <span>10 min de lecture</span>
                                </div>
                            </div>
                            <button className="ml-auto w-10 h-10 rounded-full border border-gray-100 flex items-center justify-center text-gray-500 hover:bg-gray-50 transition-colors">
                                <Share2 className="w-4 h-4" />
                            </button>
                        </div>
                    </header>

                    {/* Featured Image */}
                    <div className="relative aspect-[16/9] rounded-[40px] overflow-hidden mb-16 shadow-2xl border border-gray-100">
                        <Image
                            src="/photo5.webp"
                            alt="Cabinet dentaire moderne au Maroc"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>

                    {/* Content */}
                    <div className="prose prose-lg prose-primary max-w-none">
                        <p className="lead text-xl text-gray-600 mb-12 leading-relaxed">
                            En 2026, ne pas avoir de site web pour son cabinet dentaire n'est plus un choix de "vieille école", c'est un frein actif à votre développement. Alors que vos patients vivent connectés, votre absence ligne laisse le champ libre à vos concurrents.
                        </p>

                        <section id="introduction" className="mb-12">
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-950 mb-6">Pourquoi tant de cabinets sous-estiment encore le web ?</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Beaucoup de dentistes au Maroc pensent encore que leur réputation suffit. "Le bouche-à-oreille marche très bien", disent-ils. C'est vrai, mais le bouche-à-oreille a changé de nature. Aujourd'hui, il est digital. Avant de prendre rendez-vous, même sur recommandation, un patient va vérifier votre existence sur Google.
                            </p>
                        </section>

                        <section id="error-1" className="mb-12">
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-950 mb-6">Erreur #1 : Tout miser sur le bouche-à-oreille et les réseaux sociaux</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Facebook et Instagram sont utiles pour montrer des cas cliniques, mais ils ne remplacent pas un site web. Les réseaux sociaux sont des flux d'actualité éphémères. Un site web est une vitrine permanente et structurée.
                            </p>
                            <div className="bg-red-50 p-6 rounded-xl border border-red-100 mb-6">
                                <h4 className="font-bold text-red-700 mb-2 flex items-center gap-2">
                                    <XCircle className="w-5 h-5" /> Le piège des réseaux sociaux
                                </h4>
                                <p className="text-sm text-red-600">
                                    Sur Instagram, vous ne maîtrisez rien. Un changement d'algorithme et votre visibilité chute. Sur votre site, vous êtes chez vous.
                                </p>
                            </div>
                        </section>

                        <section id="error-2" className="mb-12">
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-950 mb-6">Erreur #2 : Être invisible quand le patient cherche</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Imaginons qu'un patient cherche "dentiste implants Casablanca" ou "urgence dentaire Agadir". S'il ne vous trouve pas dans les 3 premiers résultats Google (le Pack Local) ou juste en dessous avec un site web bien référencé, pour lui, vous n'existez pas.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                C'est ce qu'on appelle "le moment de vérité". Vous perdez des patients qualifiés à chaque minute où vous êtes absent de ces recherches.
                            </p>
                        </section>

                        <section id="error-3" className="mb-12">
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-950 mb-6">Erreur #3 : Donner une image amateur</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                En l'absence de site web, Google va peut-être afficher une fiche sommaire, sans photos, ou pire, avec de mauvaises informations.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Votre cabinet est moderne, vos équipements sont à la pointe... mais en ligne, vous avez l'air fermé ou obsolète. Un <Link href="/creation-site-web-maroc" className="text-primary-600 font-bold hover:underline">site web professionnel</Link> est le reflet numérique de votre excellence médicale.
                            </p>
                        </section>

                        <section id="error-4" className="mb-12">
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-950 mb-6">Erreur #4 : Rendre la prise de contact difficile</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Le patient d'aujourd'hui est pressé et impatient. S'il doit chercher votre numéro, tomber sur une ligne occupée, ou attendre le lundi matin pour appeler... il ira ailleurs.
                            </p>
                            <div className="bg-green-50 p-6 rounded-xl border border-green-100 mb-6">
                                <h4 className="font-bold text-green-700 mb-2 flex items-center gap-2">
                                    <CheckCircle className="w-5 h-5" /> La solution simple
                                </h4>
                                <p className="text-sm text-green-600">
                                    Un site web avec un bouton "Appeler" et un lien WhatsApp direct permet de capter le patient instantanément, même le soir ou le weekend (via messagerie).
                                </p>
                            </div>
                        </section>

                        <section id="error-5" className="mb-12">
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-950 mb-6">Erreur #5 : Laisser vos concurrents prendre vos parts de marché</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Pendant que vous héritez sur l'utilité d'un site web, vos confrères investissent. Ils captent les nouveaux arrivants dans votre quartier, les urgences, et les patients à haute valeur ajoutée (esthétique, implants).
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Ne leur laissez pas cette avance. Le web est un terrain où le premier arrivé est souvent le mieux servi.
                            </p>
                        </section>

                        <section id="scenarios" className="mb-12 bg-gray-50 p-8 rounded-2xl">
                            <h2 className="text-2xl font-bold text-gray-950 mb-6">Scénarios réalistes au Maroc</h2>
                            <div className="space-y-6">
                                <div className="flex gap-4">
                                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 text-blue-600 font-bold">1</div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">Le nouvel arrivant</h4>
                                        <p className="text-sm text-gray-600">Karim vient d'emménager à Tanger. Il a mal aux dents. Il tape "dentiste centre ville" sur Google Maps. Il choisit celui qui a un site web rassurant avec des photos du cabinet.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0 text-purple-600 font-bold">2</div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">Le sourire parfait</h4>
                                        <p className="text-sm text-gray-600">Sarah veut se faire poser des facettes. C'est un gros budget. Elle compare 3 dentistes. Elle élimine celui qui n'a pas de site web pour montrer ses avant/après.</p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section id="attentes-patients" className="mb-12">
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-950 mb-6">Ce que vos patients attendent de vous en ligne</h2>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <li className="flex items-center gap-3 p-4 border border-gray-100 rounded-lg">
                                    <Globe className="w-5 h-5 text-primary-500" />
                                    <span className="text-gray-700 text-sm font-medium">Vos horaires et adresse exacts</span>
                                </li>
                                <li className="flex items-center gap-3 p-4 border border-gray-100 rounded-lg">
                                    <Smartphone className="w-5 h-5 text-primary-500" />
                                    <span className="text-gray-700 text-sm font-medium">Un contact facile (WhatsApp/Tél)</span>
                                </li>
                                <li className="flex items-center gap-3 p-4 border border-gray-100 rounded-lg">
                                    <CheckCircle className="w-5 h-5 text-primary-500" />
                                    <span className="text-gray-700 text-sm font-medium">Vos spécialités clairement expliquées</span>
                                </li>
                                <li className="flex items-center gap-3 p-4 border border-gray-100 rounded-lg">
                                    <Image src="/photo5.webp" alt="Confiance" width={20} height={20} className="rounded-full object-cover w-5 h-5" />
                                    <span className="text-gray-700 text-sm font-medium">Des photos qui inspirent confiance</span>
                                </li>
                            </ul>
                        </section>

                        <section id="solution" className="mb-12">
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-950 mb-6">La solution est plus simple que vous ne le pensez</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Avoir un site web professionnel ne signifie pas dépenser des millions ou y passer des mois.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Un site efficace, c'est : une page d'accueil claire, une page pour vos soins, une page contact, et une optimisation pour Google. C'est exactement ce que nous faisons chez <strong>SitePro.ma</strong>.
                            </p>
                        </section>

                        <section id="conclusion" className="mb-12 py-10 border-t border-gray-100">
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-950 mb-6">Conclusion : Passez au niveau supérieur</h2>
                            <p className="text-gray-700 leading-relaxed mb-10">
                                Ne laissez plus internet être le point faible de votre activité. Votre expertise mérite d'être vue et reconnue. Un site web est le meilleur employé que vous pourrez embaucher : il travaille 24h/24, ne prend pas de vacances, et vous apporte des patients en continu.
                            </p>

                            <div className="bg-gray-950 rounded-[40px] p-8 md:p-12 text-center">
                                <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">Prêt à digitaliser votre cabinet ?</h3>
                                <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
                                    Discutons de votre projet. Chez <strong>SitePro.ma</strong>, nous comprenons les besoins spécifiques des dentistes au Maroc.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <Link href="/contact" className="btn-primary">
                                        Contactez-nous
                                    </Link>
                                    <a href={`https://wa.me/${phone}`} className="bg-white/10 text-white border border-white/20 px-8 py-4 rounded-full font-bold hover:bg-white/20 transition-all">
                                        Contact WhatsApp
                                    </a>
                                </div>
                            </div>
                        </section>
                    </div>

                    {/* Sidebar / More Posts placeholder */}
                    <footer className="mt-20 pt-12 border-t border-gray-100">
                        <div className="flex items-center justify-between mb-8">
                            <h3 className="text-xl font-bold text-gray-950">D'autres articles pour votre cabinet</h3>
                            <Link href="/blog" className="text-primary-600 font-bold text-sm hover:underline">Voir tout le blog</Link>
                        </div>
                    </footer>
                </article>
            </div>

            {/* SEO Optimized Internal Link CTA Section */}
            <section className="py-24 bg-gradient-to-br from-[#022545] to-[#04335d] text-white relative overflow-hidden mt-20">
                <div className="absolute top-0 right-0 w-96 h-96 bg-primary-500 rounded-full blur-[150px] opacity-10"></div>
                <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-blue-600 rounded-full blur-[150px] opacity-10"></div>

                <div className="container px-4 mx-auto max-w-5xl text-center relative z-10">
                    <div className="space-y-8">
                        <span className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-sm font-bold tracking-wider text-primary-300 mb-4">
                            AGENCE WEB SPÉCIALISÉE SANTÉ
                        </span>
                        <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
                            Votre site web dentaire <span className="text-primary-400">clé en main</span>
                        </h2>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                            Augmentez votre patientèle et valorisez votre image avec un site web moderne, rapide et visible sur Google.
                        </p>
                        <div className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-6">
                            <Link href="/creation-site-web-maroc/" className="bg-primary-500 hover:bg-primary-600 text-white px-10 py-5 rounded-xl font-bold text-xl transition-all shadow-xl shadow-primary-900/40 flex items-center gap-3 group">
                                Découvrir nos offres
                                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <div className="flex flex-col items-center sm:items-start text-left">
                                <p className="text-sm text-gray-400 font-medium italic">Parlons de votre projet</p>
                                <a href={`tel:+${phone}`} className="text-white hover:text-primary-400 font-bold text-lg flex items-center gap-2 transition-colors">
                                    +212 663-711164
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
