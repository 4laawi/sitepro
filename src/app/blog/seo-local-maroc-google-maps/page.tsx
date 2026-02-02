import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, Share2, Calendar, Clock, ChevronRight, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
    title: 'SEO local au Maroc : comment apparaître sur Google Maps | Sitepro.ma',
    description: 'Pour une entreprise marocaine, être visible sur Google Maps n\'est plus une option, c\'est une nécessité vitale. Découvrez comment optimiser votre SEO local.',
    alternates: { canonical: '/blog/seo-local-maroc-google-maps' },
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
                    <span className="text-gray-900 font-medium line-clamp-1">SEO Local au Maroc</span>
                </nav>

                <article className="max-w-4xl mx-auto">
                    {/* Header */}
                    <header className="mb-12">
                        <Link href="/blog" className="inline-flex items-center gap-2 text-primary-600 font-bold text-sm mb-8 hover:gap-3 transition-all">
                            <ArrowLeft className="w-4 h-4" /> Retour au blog
                        </Link>
                        <div className="flex gap-3 mb-6">
                            <span className="px-3 py-1 bg-primary-100 text-primary-600 text-[10px] font-bold rounded-full uppercase tracking-wider">SEO Local</span>
                            <span className="px-3 py-1 bg-gray-100 text-gray-600 text-[10px] font-bold rounded-full uppercase tracking-wider">Guide</span>
                        </div>
                        <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-gray-950 mb-8 leading-tight">
                            SEO local au Maroc : comment apparaître sur Google Maps
                        </h1>

                        <div className="flex flex-wrap items-center gap-6 py-8 border-y border-gray-100">
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 rounded-full bg-primary-500 relative overflow-hidden">
                                    <Image src="/Untitled design (3).webp" alt="Ali Taghi" fill className="object-cover" />
                                </div>
                                <div>
                                    <span className="block text-gray-950 font-bold text-sm">Ali Taghi</span>
                                    <span className="block text-gray-500 text-xs uppercase tracking-wider">Expert SEO</span>
                                </div>
                            </div>
                            <div className="flex items-center gap-6 text-sm text-gray-500">
                                <div className="flex items-center gap-2">
                                    <Calendar className="w-4 h-4" />
                                    <span>25 Janvier 2026</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Clock className="w-4 h-4" />
                                    <span>8 min de lecture</span>
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
                            src="https://images.unsplash.com/photo-1574950578143-858c6fc58922?auto=format&fit=crop&q=80&w=2000"
                            alt="SEO Local Maroc Google Maps"
                            fill
                            className="object-cover"
                        />
                    </div>

                    {/* Content */}
                    <div className="prose prose-lg prose-primary max-w-none">
                        <p className="lead text-xl text-gray-600 mb-12 leading-relaxed">
                            Pour une entreprise marocaine, être visible sur Google Maps n'est plus une option, c'est une nécessité vitale. Que vous soyez un dentiste à Casablanca, un restaurateur à Marrakech ou une agence de services à Rabat, vos clients vous cherchent d'abord sur leur téléphone.
                        </p>

                        <section id="introduction" className="mb-12">
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-950 mb-6">Introduction : Le pouvoir de la proximité</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Le SEO local (Search Engine Optimization) est l'art d'optimiser votre présence en ligne pour attirer des clients issus de recherches géographiquement ciblées. Au Maroc, où l'usage du smartphone est omniprésent, apparaître dans les premiers résultats de Google Maps peut transformer radicalement votre chiffre d'affaires.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Pour de nombreuses PME marocaines, les résultats Google Maps comptent souvent plus que le site web lui-même. Pourquoi ? Parce qu'ils offrent une réponse immédiate : une adresse, un bouton d'appel et un itinéraire. C'est le raccourci le plus court entre un besoin client et votre porte d'entrée.
                            </p>
                        </section>

                        <section id="definition-seo-local" className="mb-12">
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-950 mb-6">Qu’est-ce que le SEO local au Maroc ?</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Contrairement au SEO "classique" qui vise une visibilité globale ou nationale sur des mots-clés génériques, le SEO local se concentre sur les recherches avec une intention locale (ex: "expert comptable Tanger").
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Google décide de l'affichage des entreprises sur Maps selon trois piliers majeurs :
                            </p>
                            <ul className="list-disc pl-6 space-y-4 text-gray-700 mb-6">
                                <li><strong>La Pertinence :</strong> Est-ce que votre fiche correspond exactement à ce que l'utilisateur cherche ?</li>
                                <li><strong>La Distance :</strong> À quelle distance se trouve votre entreprise de l'utilisateur (ou de la zone recherchée) ?</li>
                                <li><strong>La Proéminence :</strong> À quel point votre entreprise est-elle connue et jugée fiable par Google (avis, liens, notices sur d'autres sites) ?</li>
                            </ul>
                        </section>

                        <section id="importance-google-maps" className="mb-12">
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-950 mb-6">Pourquoi Google Maps est crucial pour les entreprises marocaines</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Le comportement du consommateur marocain a évolué. Aujourd'hui, on ne cherche plus "restaurant", on cherche "restaurant près de moi" ou "restaurant [nom du quartier]".
                            </p>
                            <ul className="list-disc pl-6 space-y-4 text-gray-700 mb-6">
                                <li><strong>Le Mobile First :</strong> La majorité des recherches locales se font en déplacement. Si vous n'êtes pas sur la carte, vous n'existez pas pour ces clients potentiels.</li>
                                <li><strong>La Confiance :</strong> Une fiche Google Maps bien entretenue, avec des avis récents et des photos réelles, rassure immédiatement le client marocain qui est naturellement plus méfiant envers les sites web anonymes.</li>
                                <li><strong>Visibilité gratuite :</strong> Contrairement à la publicité payante (Ads), le référencement local offre une visibilité organique durable si le travail est bien fait.</li>
                            </ul>
                        </section>

                        <section id="mots-cles-locaux" className="mb-12">
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-950 mb-6">Les mots-clés locaux : la base de votre stratégie</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Avant même de toucher à votre fiche, vous devez comprendre comment vos clients vous cherchent. Un mot-clé local combine votre service et votre localisation.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Exemples concrets au Maroc :
                            </p>
                            <ul className="list-disc pl-6 space-y-4 text-gray-700 mb-6">
                                <li>"Dentiste à Agadir"</li>
                                <li>"Agence web à Laâyoune"</li>
                                <li>"Location de voiture Tanger Med"</li>
                            </ul>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Google est devenu extrêmement intelligent au Maroc : il comprend les variantes linguistiques et connecte l'intention de l'utilisateur à sa position GPS, même si la ville n'est pas explicitement mentionnée.
                            </p>
                        </section>

                        <section id="google-business-profile" className="mb-12">
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-950 mb-6">Google Business Profile : Le sésame pour Google Maps</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                L'outil <strong>Google Business Profile</strong> (anciennement Google My Business) est l'interface qui alimente Google Maps. Sans lui, aucune chance d'apparaître sur la carte de manière officielle.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Les informations critiques (NAP) doivent être rigoureusement exactes :
                            </p>
                            <ul className="list-disc pl-6 space-y-4 text-gray-700 mb-6">
                                <li><strong>Name (Nom) :</strong> Le nom réel de votre entreprise, sans accumulation abusive de mots-clés.</li>
                                <li><strong>Address (Adresse) :</strong> Une adresse physique vérifiable au Maroc (Google envoie souvent un code de vérification par courrier postal).</li>
                                <li><strong>Phone (Téléphone) :</strong> Un numéro local fonctionnel.</li>
                            </ul>
                        </section>

                        <section id="optimisation-gbp" className="mb-12">
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-950 mb-6">Optimisation de votre fiche (ne vous contentez pas de la créer)</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                La survie de votre SEO local dépend de l'entretien de votre fiche :
                            </p>
                            <ol className="list-decimal pl-6 space-y-4 text-gray-700 mb-6">
                                <li><strong>Le choix des catégories :</strong> Soyez précis. "Salon de coiffure pour femmes" est bien plus puissant que simplement "Beauté".</li>
                                <li><strong>Description humanisée :</strong> Rédigez un texte qui parle à vos clients, tout en intégrant naturellement vos mots-clés principaux. Évitez les textes robotiques.</li>
                                <li><strong>Photos réelles :</strong> Au Maroc, les gens veulent voir votre devanture, votre équipe et votre intérieur. Les photos de banques d'images ("stock photos") sont à bannir, elles tuent la confiance.</li>
                                <li><strong>Avis et Réponses :</strong> Sollicitez activement des avis de vos clients. Répondez à TOUS les avis, même les négatifs, avec professionnalisme et courtoisie.</li>
                            </ol>
                        </section>

                        <section id="role-site-web" className="mb-12">
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-950 mb-6">Le rôle crucial de votre site web dans le SEO local</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Votre site web et votre fiche Maps ne travaillent pas en silos ; ils se renforcent mutuellement. Google analyse votre site pour confirmer les informations de votre fiche.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Pour booster votre SEO local via votre site, vous avez besoin d'un <Link href="/referencement-seo" className="text-primary-600 font-bold hover:underline">référencement naturel (SEO)</Link> solide, avec des pages dédiées par ville si vous couvrez plusieurs zones. Le maillage interne entre ces pages locales et vos fiches Business Profile envoie des signaux de pertinence très forts à Google.
                            </p>
                        </section>

                        <section id="erreurs-graves" className="mb-12">
                            <div className="bg-red-50 border-l-4 border-red-500 p-8 rounded-2xl">
                                <h3 className="text-xl font-bold text-red-950 mb-4 flex items-center gap-2">
                                    ⚠️ ATTENTION : Erreurs graves qui peuvent tuer votre SEO local
                                </h3>
                                <p className="text-red-900 mb-6">
                                    Au Maroc, beaucoup d'entreprises tentent de "tricher" avec l'algorithme. Voici ce qui peut entraîner une suspension définitive de votre fiche :
                                </p>
                                <ul className="list-disc pl-6 space-y-2 text-red-900 mb-6">
                                    <li><strong>Incohérence des informations :</strong> Avoir une adresse différente sur Facebook, votre site web et Google Maps.</li>
                                    <li><strong>Fausses localisations :</strong> Créer des fiches pour des bureaux qui n'existent pas ou utiliser des adresses résidentielles sans accueil client.</li>
                                    <li><strong>Keyword Stuffing :</strong> Ajouter "Meilleur plombier Casablanca pas cher" dans le champ NOM de l'entreprise.</li>
                                    <li><strong>Avis factices :</strong> Acheter des avis. Google détecte les patterns de spam très facilement.</li>
                                </ul>
                                <p className="text-red-950 font-bold">
                                    Les sanctions : Perte de confiance de Google, chute brutale dans les classements, ou disparition totale de Maps (Blacklist).
                                </p>
                            </div>
                        </section>

                        <section id="legitimite-google" className="mb-12">
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-950 mb-6">Pourquoi Google sanctionne les entreprises "non légitimes"</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Google a une seule obsession : la confiance de l'utilisateur. Si un utilisateur se rend à une adresse indiquée sur Maps et ne trouve pas l'entreprise, il perd confiance en Google.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                C'est pourquoi l'algorithme privilégie la <strong>cohérence</strong> et la <strong>légitimité</strong>. Une entreprise qui a une présence stable, des mentions sur des annuaires marocains sérieux et un site web pro sera toujours mieux classée qu'un "fantôme digital".
                            </p>
                        </section>

                        <section id="bonnes-pratiques-maroc" className="mb-12">
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-950 mb-6">Bonnes pratiques SEO local spécifiques au Maroc</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Le marché marocain a ses particularités :
                            </p>
                            <ul className="list-disc pl-6 space-y-4 text-gray-700 mb-6">
                                <li><strong>Bilinguisme :</strong> Pensez à votre audience. Si vos clients cherchent en Français mais aussi parfois en Darija (transcrit), adaptez votre contenu.</li>
                                <li><strong>Précision géographique :</strong> Au Maroc, les quartiers sont souvent plus importants que la ville globale (ex: l'Agdal à Rabat ou Guéliz à Marrakech). Mentionnez vos quartiers.</li>
                                <li><strong>WhatsApp :</strong> Intégrez votre numéro WhatsApp Business sur votre fiche. C'est le canal de conversion préféré des Marocains.</li>
                            </ul>
                        </section>

                        <section id="delais-seo" className="mb-12">
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-950 mb-6">Combien de temps faut-il pour apparaître sur Google Maps ?</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Soyons honnêtes : il n'y a pas de magie. En général, comptez entre 2 et 4 semaines pour commencer à apparaître après vérification de la fiche, et 3 à 6 mois pour dominer les premières positions sur des secteurs concurrentiels.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Toute agence vous promettant la 1ère place en 24h au Maroc cherche probablement à vous tromper. Le SEO local est un marathon de crédibilité.
                            </p>
                        </section>

                        <section id="conclusion" className="mb-12 py-10 border-t border-gray-100">
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-950 mb-6">Conclusion : Prenez le contrôle de votre visibilité locale</h2>
                            <p className="text-gray-700 leading-relaxed mb-10">
                                Le SEO local n'est pas qu'un aspect technique de votre marketing, c'est le cœur de votre croissance physique au Maroc. En appliquant ces conseils avec rigueur, vous vous donnez les moyens de dépasser vos concurrents et d'être là où vos clients vous attendent.
                            </p>

                            <div className="bg-gray-950 rounded-[40px] p-8 md:p-12 text-center">
                                <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">Prêt à dominer Google Maps au Maroc ?</h3>
                                <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
                                    Notre équipe d'experts vous accompagne dans l'optimisation de votre fiche Google Business Profile pour attirer plus de clients qualifiés.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <a href={`https://wa.me/${phone}`} className="btn-primary">
                                        Audit SEO Local Gratuit
                                    </a>
                                    <Link href="/contact" className="bg-white/10 text-white border border-white/20 px-8 py-4 rounded-full font-bold hover:bg-white/20 transition-all">
                                        Nous contacter
                                    </Link>
                                </div>
                            </div>
                        </section>
                    </div>

                    {/* Sidebar / More Posts placeholder */}
                    <footer className="mt-20 pt-12 border-t border-gray-100">
                        <div className="flex items-center justify-between mb-8">
                            <h3 className="text-xl font-bold text-gray-950">D'autres articles qui pourraient vous intéresser</h3>
                            <Link href="/blog" className="text-primary-600 font-bold text-sm hover:underline">Voir tout le blog</Link>
                        </div>
                        {/* Grid for related posts could go here */}
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
                            AGENCE DE CRÉATION DE SITE WEB AU MAROC
                        </span>
                        <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
                            Soyez le n°1 sur <span className="text-primary-400">Google Maps Maroc</span>
                        </h2>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                            Nous vous aidons à optimiser votre présence locale pour attirer les clients de votre quartier et de votre ville.
                        </p>
                        <div className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-6">
                            <Link href="/creation-site-web-maroc/" className="bg-primary-500 hover:bg-primary-600 text-white px-10 py-5 rounded-xl font-bold text-xl transition-all shadow-xl shadow-primary-900/40 flex items-center gap-3 group">
                                Création site web Maroc
                                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <div className="flex flex-col items-center sm:items-start text-left">
                                <p className="text-sm text-gray-400 font-medium italic">Consultation gratuite</p>
                                <a href="tel:+212663711164" className="text-white hover:text-primary-400 font-bold text-lg flex items-center gap-2 transition-colors">
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
