import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, Share2, Calendar, Clock, ChevronRight, ArrowRight, MapPin, Smartphone, Search } from 'lucide-react'

export const metadata: Metadata = {
    title: 'Comment attirer plus de patients avec Google et un site web dentaire',
    description: 'Guide pratique pour les dentistes au Maroc : améliorez votre visibilité locale, optimisez votre fiche Google Maps et attirez plus de patients grâce à votre site web.',
    alternates: { canonical: 'https://sitepro.ma/blog/comment-attirer-patients-google-site-web-dentaire' },
    openGraph: {
        title: 'Comment attirer plus de patients avec Google et un site web dentaire',
        description: 'Guide pratique pour les dentistes au Maroc : améliorez votre visibilité locale et attirez plus de patients.',
        url: 'https://sitepro.ma/blog/comment-attirer-patients-google-site-web-dentaire',
        type: 'article',
        images: [{ url: 'https://sitepro.ma/photo-problems.webp', width: 1200, height: 630 }],
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
                    <span className="text-gray-900 font-medium line-clamp-1">Attirer Patients Google</span>
                </nav>

                <article className="max-w-4xl mx-auto">
                    {/* Header */}
                    <header className="mb-12">
                        <Link href="/blog" className="inline-flex items-center gap-2 text-primary-600 font-bold text-sm mb-8 hover:gap-3 transition-all">
                            <ArrowLeft className="w-4 h-4" /> Retour au blog
                        </Link>
                        <div className="flex gap-3 mb-6">
                            <span className="px-3 py-1 bg-primary-100 text-primary-600 text-[10px] font-bold rounded-full uppercase tracking-wider">SEO Local</span>
                            <span className="px-3 py-1 bg-gray-100 text-gray-600 text-[10px] font-bold rounded-full uppercase tracking-wider">Guide Pratique</span>
                        </div>
                        <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-gray-950 mb-8 leading-tight">
                            Comment attirer plus de patients avec Google et un site web de cabinet dentaire
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
                                    <span>12 Février 2026</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Clock className="w-4 h-4" />
                                    <span>7 min de lecture</span>
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
                            src="/photo-problems.webp"
                            alt="Cabinet dentaire moderne et accueil patients"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>

                    {/* Content */}
                    <div className="prose prose-lg prose-primary max-w-none">
                        <p className="lead text-xl text-gray-600 mb-12 leading-relaxed">
                            Vous êtes un excellent dentiste, votre cabinet est impeccable, mais votre agenda a encore quelques trous ? La solution ne se trouve pas dans les flyers, mais dans la poche de vos futurs patients.
                        </p>

                        <section id="introduction" className="mb-12">
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-950 mb-6">Comment les patients trouvent-ils leur dentiste au Maroc aujourd'hui ?</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Le temps des Pages Jaunes est révolu. Aujourd'hui, lorsqu'un patient cherche un dentiste à Casablanca, Rabat ou Tanger, le réflexe est universel : <strong>Google</strong>.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Que ce soit pour une urgence ou pour de l'esthétique dentaire (facettes, blanchiment), le parcours commence par une recherche sur smartphone. Si vous n'êtes pas visible à ce moment précis, le patient ira chez votre confrère qui l'est.
                            </p>
                        </section>

                        <section id="google-confiance" className="mb-12">
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-950 mb-6">Pourquoi Google inspire confiance</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Google n'est pas qu'un moteur de recherche, c'est un moteur de recommandation. Les patients font confiance aux résultats de Google because l'algorithme privilégie les établissements pertinents, proches et bien notés.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Apparaître en haut des résultats, c'est envoyer un signal fort de crédibilité et de sérieux médical.
                            </p>
                        </section>

                        <section id="dentiste-pres-de-moi" className="mb-12">
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-950 mb-6">Comprendre la recherche "Dentiste près de moi"</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                C'est la recherche la plus courante. Google utilise la géolocalisation pour proposer les cabinets les plus proches.
                            </p>
                            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 mb-6">
                                <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                                    <MapPin className="w-5 h-5 text-primary-500" />
                                    Le Pack Local (Les 3 premiers)
                                </h3>
                                <p className="text-gray-600 text-sm">
                                    Sur Google, une carte s'affiche avec 3 résultats principaux. C'est le "Pack Local". <strong>70% des clics</strong> se font ici. Votre objectif absolu est d'être dans ce trio pour votre quartier.
                                </p>
                            </div>
                        </section>

                        <section id="role-site-web" className="mb-12">
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-950 mb-6">Le rôle de votre site web : Convertir le visiteur en patient</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Être visible sur Google Maps est une première étape, mais cela ne suffit pas toujours. Le patient va souvent cliquer sur "Site Web" pour en savoir plus avant d'appeler.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                C'est là que votre <Link href="/creation-site-web-maroc" className="text-primary-600 font-bold hover:underline">site web professionnel</Link> entre en jeu. Il doit répondre immédiatement à 3 questions :
                            </p>
                            <ul className="list-disc pl-6 space-y-4 text-gray-700 mb-6">
                                <li><strong>Qui êtes-vous ?</strong> (Vos diplômes, votre équipe, des photos rassurantes)</li>
                                <li><strong>Que faites-vous ?</strong> (Vos spécialités : implantologie, orthodontie, parodontie...)</li>
                                <li><strong>Comment prendre RDV ?</strong> (Un bouton d'appel clair et un lien WhatsApp)</li>
                            </ul>
                        </section>

                        <section id="synergie-maps-site" className="mb-12">
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-950 mb-6">La synergie Google Maps + Site Web</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Google favorise les fiches Google Maps qui sont reliées à un site web pertinent et bien optimisé.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Si votre site contient des pages dédiées à vos soins (ex: une page "Implants dentaires"), Google comprendra mieux votre activité et vous fera remonter sur les recherches liées aux implants, et pas seulement sur "dentiste".
                            </p>
                        </section>

                        <section id="mobile-optimization" className="mb-12">
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-950 mb-6">L'importance cruciale du mobile</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Imaginez un patient en douleur qui essaie de trouver votre numéro sur un site qui ne s'affiche pas bien sur son iPhone. Il va quitter la page en 3 secondes.
                            </p>
                            <div className="flex items-start gap-4 p-6 bg-blue-50 rounded-xl border border-blue-100">
                                <Smartphone className="w-8 h-8 text-primary-600 flex-shrink-0" />
                                <div>
                                    <h4 className="font-bold text-gray-900 mb-2">L'expérience "Un pouce"</h4>
                                    <p className="text-sm text-gray-700">
                                        Sur nos sites <strong>SitePro.ma</strong>, nous plaçons les boutons d'action (Appel, WhatsApp) en bas de l'écran sur mobile, accessibles facilement avec le pouce. C'est un détail qui augmente drastiquement le nombre de RDV.
                                    </p>
                                </div>
                            </div>
                        </section>

                        <section id="whatsapp-messagerie" className="mb-12">
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-950 mb-6">Facilitez la prise de contact</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Beaucoup de patients, surtout les jeunes actifs, préfèrent écrire plutôt que d'appeler, ou cherchent un RDV en dehors des heures d'ouverture du secrétariat.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Avoir un bouton WhatsApp sur votre site permet de capter ces demandes le soir ou le weekend, et de les traiter dès votre retour au cabinet. C'est un service très apprécié au Maroc.
                            </p>
                        </section>

                        <section id="erreurs-communes" className="mb-12">
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-950 mb-6">Les erreurs qui vous rendent invisible</h2>
                            <ul className="space-y-4 text-gray-700 mb-6">
                                <li className="flex items-start gap-3">
                                    <span className="text-red-500 font-bold">❌</span>
                                    <span>Ne pas avoir de fiche Google Business Profile ou ne pas l'avoir revendiquée.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-red-500 font-bold">❌</span>
                                    <span>Avoir des horaires incorrects (frustrant pour le patient qui trouve porte close).</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-red-500 font-bold">❌</span>
                                    <span>N'avoir aucune photo de l'intérieur du cabinet (le patient a besoin de voir la propreté).</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-red-500 font-bold">❌</span>
                                    <span>Ne pas répondre aux avis Google (même un simple "Merci").</span>
                                </li>
                            </ul>
                        </section>

                        <section id="conseils-pratiques" className="mb-12">
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-950 mb-6">3 actions à faire dès aujourd'hui</h2>
                            <ol className="list-decimal pl-6 space-y-4 text-gray-700 mb-6">
                                <li><strong>Vérifiez votre fiche :</strong> Tapez le nom de votre cabinet sur Google. Les horaires sont-ils justes ? Le numéro est-il bon ?</li>
                                <li><strong>Demandez des avis :</strong> Après chaque consultation satisfaisante, demandez poliment au patient de laisser un avis sur Google. C'est le facteur n°1 de classement.</li>
                                <li><strong>Auditez votre site actuel :</strong> Regardez-le sur votre téléphone. Est-il rapide ? Le numéro est-il cliquable ? Si la réponse est non, il est temps de changer.</li>
                            </ol>
                        </section>

                        <section id="conclusion" className="mb-12 py-10 border-t border-gray-100">
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-950 mb-6">Conclusion : Votre visibilité est votre croissance</h2>
                            <p className="text-gray-700 leading-relaxed mb-10">
                                Attirer plus de patients ne demande pas de devenir un expert en marketing. Il s'agit simplement d'être présent là où vos patients vous cherchent : sur Google, avec les bonnes informations et une image professionnelle rassurante.
                            </p>

                            <div className="bg-gray-950 rounded-[40px] p-8 md:p-12 text-center">
                                <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">Besoin d'aide pour votre visibilité ?</h3>
                                <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
                                    Chez <strong>SitePro.ma</strong>, nous sommes spécialisés dans la création de sites web performants pour les cabinets dentaires au Maroc. Nous nous occupons de tout, de la conception au référencement Google.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <Link href="/contact" className="btn-primary">
                                        Demander un audit gratuit
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
