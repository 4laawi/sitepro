import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, Share2, Calendar, Clock, ChevronRight, ArrowRight, CheckCircle2 } from 'lucide-react'

export const metadata: Metadata = {
    title: 'Pourquoi un cabinet dentaire au Maroc a besoin d’un site web pro en 2026',
    description: 'Découvrez pourquoi avoir un site internet est crucial pour les dentistes au Maroc. Attirez plus de patients, améliorez votre visibilité locale et rassurez votre patientèle.',
    alternates: { canonical: 'https://sitepro.ma/blog/pourquoi-site-web-cabinet-dentaire-maroc-2026' },
    openGraph: {
        title: 'Pourquoi un cabinet dentaire au Maroc a besoin d’un site web pro en 2026',
        description: 'Découvrez pourquoi avoir un site internet est crucial pour les dentistes au Maroc.',
        url: 'https://sitepro.ma/blog/pourquoi-site-web-cabinet-dentaire-maroc-2026',
        type: 'article',
        images: [{ url: 'https://sitepro.ma/photo4.webp', width: 1200, height: 630 }],
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
                    <span className="text-gray-900 font-medium line-clamp-1">Site Web Cabinet Dentaire Maroc</span>
                </nav>

                <article className="max-w-4xl mx-auto">
                    {/* Header */}
                    <header className="mb-12">
                        <Link href="/blog" className="inline-flex items-center gap-2 text-primary-600 font-bold text-sm mb-8 hover:gap-3 transition-all">
                            <ArrowLeft className="w-4 h-4" /> Retour au blog
                        </Link>
                        <div className="flex gap-3 mb-6">
                            <span className="px-3 py-1 bg-primary-100 text-primary-600 text-[10px] font-bold rounded-full uppercase tracking-wider">Santé & Digital</span>
                            <span className="px-3 py-1 bg-gray-100 text-gray-600 text-[10px] font-bold rounded-full uppercase tracking-wider">Marketing Médical</span>
                        </div>
                        <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-gray-950 mb-8 leading-tight">
                            Pourquoi un cabinet dentaire au Maroc a besoin d’un site web professionnel en 2026
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
                                    <span>10 Février 2026</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Clock className="w-4 h-4" />
                                    <span>6 min de lecture</span>
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
                            src="/photo4.webp"
                            alt="Cabinet dentaire moderne au Maroc"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>

                    {/* Content */}
                    <div className="prose prose-lg prose-primary max-w-none">
                        <p className="lead text-xl text-gray-600 mb-12 leading-relaxed">
                            Il est loin le temps où le bouche-à-oreille suffisait à remplir une salle d’attente. En 2026 au Maroc, la première consultation ne se passe pas sur votre fauteuil, mais sur l’écran d’un smartphone.
                        </p>

                        <section id="introduction" className="mb-12">
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-950 mb-6">Comment les patients marocains cherchent-ils un dentiste aujourd'hui ?</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Imaginez la scène : une personne à Casablanca ou Tanger a une rage de dents un dimanche soir, ou cherche à se faire poser des facettes. Son premier réflexe ? Ce n'est plus d'appeler l'annuaire.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Elle sort son téléphone, ouvre Google ou Google Maps et tape "meilleur dentiste près de moi" ou "cabinet dentaire [quartier]". Si vous n'êtes pas là, ou pire, si vous êtes là mais sans site web pour rassurer, vous n'existez tout simplement pas pour ce patient.
                            </p>
                        </section>

                        <section id="premiere-impression" className="mb-12">
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-950 mb-6">Votre site web est votre salle d'attente virtuelle</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Dans le domaine de la santé, la <strong>confiance</strong> est la monnaie la plus précieuse. Avant même de vous confier leur sourire (et leur santé), les patients ont besoin d'être rassurés.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Un <Link href="/creation-site-web-maroc" className="text-primary-600 font-bold hover:underline">site web professionnel</Link>, propre et moderne envoie un message inconscient mais puissant : <em>"Ce cabinet est moderne, propre et professionnel."</em>
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                À l'inverse, une absence de site ou une page Facebook datant de 2019 peut laisser penser que votre matériel est aussi obsolète que votre présence digitale.
                            </p>
                        </section>

                        <section id="visibilite-locale" className="mb-12">
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-950 mb-6">La visibilité locale : Être le choix n°1 dans votre quartier</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                La bataille se joue sur le terrain local. Google favorise les cabinets médicaux qui ont une présence structurée. Avoir un site web optimisé pour le référencement local (avec des mentions claires de votre ville, quartier et spécialités) vous propulse devant vos confrères.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Cela permet d'apparaître sur des recherches précises comme :
                            </p>
                            <ul className="list-disc pl-6 space-y-4 text-gray-700 mb-6">
                                <li>"Implant dentaire Marrakech"</li>
                                <li>"Orthodontiste pour enfants Rabat"</li>
                                <li>"Urgence dentaire Agadir"</li>
                            </ul>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Sans site web, vous laissez ces patients (et ce chiffre d'affaires) à vos concurrents qui ont investi dans leur image.
                            </p>
                        </section>

                        <section id="mobile-first" className="mb-12">
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-950 mb-6">Une réalité marocaine : Le "Mobile First"</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Au Maroc, plus de 80% des recherches de santé se font sur mobile. Un patient qui souffre veut une solution <strong>rapide</strong>.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Votre site doit se charger instantanément et proposer de gros boutons clairs : "Appeler maintenant" ou "Prendre RDV sur WhatsApp".
                            </p>
                            <div className="bg-primary-50 p-8 rounded-2xl mb-8 border border-primary-100">
                                <h3 className="text-xl font-bold text-primary-900 mb-4 flex items-center gap-2">
                                    <CheckCircle2 className="w-6 h-6 text-green-500" />
                                    Le facteur WhatsApp
                                </h3>
                                <p className="text-primary-800">
                                    Chez <strong>SitePro.ma</strong>, nous intégrons systématiquement un bouton WhatsApp flottant sur nos sites médicaux. C'est le canal de communication préféré des Marocains. La prise de contact devient fluide, sans friction.
                                </p>
                            </div>
                        </section>

                        <section id="investissement" className="mb-12">
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-950 mb-6">Investissement vs Dépense : Le calcul est vite fait</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Beaucoup de dentistes voient le site web comme une dépense. C'est une erreur comptable.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Prenons un exemple concret :
                                <br />
                                Un implant dentaire coûte en moyenne entre 4000 et 8000 DH. Si votre site web vous apporte ne serait-ce que <strong>deux</strong> nouveaux patients pour des implants par an, il est déjà rentabilisé.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                La réalité ? Un site bien référencé peut vous apporter des dizaines de nouveaux patients qualifiés chaque mois. C'est l'actif marketing le plus rentable de votre cabinet.
                            </p>
                        </section>

                        <section id="objections" className="mb-12">
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-950 mb-6">"Je n’ai pas le temps de m’en occuper"</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                C'est l'objection n°1 que nous entendons. Et c'est normal, votre métier est de soigner, pas de gérer un site.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                C'est pour cela qu'un site professionnel doit être conçu pour être autonome. Une fois en ligne, il travaille pour vous 24h/24, 7j/7. Il informe vos patients sur vos horaires, vos tarifs, vos soins, et filtre les appels inutiles ("Est-ce que vous faites le blanchiment ?" &rarr; La réponse est sur le site).
                            </p>
                        </section>

                        <section id="conclusion" className="mb-12 py-10 border-t border-gray-100">
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-950 mb-6">Conclusion : Ne laissez pas votre fauteuil vide</h2>
                            <p className="text-gray-700 leading-relaxed mb-10">
                                En 2026, ne pas avoir de site web pour un cabinet dentaire au Maroc, c'est comme ne pas avoir d'enseigne sur la rue. Vous existez pour vos habitués, mais vous êtes invisible pour le reste du monde.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-10">
                                Offrez à votre cabinet l'image qu'il mérite. Rassurez vos futurs patients avant même qu'ils ne franchissent votre porte.
                            </p>

                            <div className="bg-gray-950 rounded-[40px] p-8 md:p-12 text-center">
                                <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">Votre cabinet mérite un site d'exception</h3>
                                <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
                                    Discutons de votre projet. Nous créons des sites web sur-mesure pour les professionnels de santé au Maroc, alliant esthétique et performance.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <a href={`https://wa.me/${phone}`} className="btn-primary">
                                        Discuter sur WhatsApp
                                    </a>
                                    <Link href="/contact" className="bg-white/10 text-white border border-white/20 px-8 py-4 rounded-full font-bold hover:bg-white/20 transition-all">
                                        Demander un devis
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
                            SITES POUR CABINETS MÉDICAUX
                        </span>
                        <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
                            Digitalisez votre <span className="text-primary-400">cabinet dentaire</span>
                        </h2>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                            SitePro.ma accompagne les professionnels de santé vers une présence digitale rassurante et efficace.
                        </p>
                        <div className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-6">
                            <Link href="/portfolio" className="bg-primary-500 hover:bg-primary-600 text-white px-10 py-5 rounded-xl font-bold text-xl transition-all shadow-xl shadow-primary-900/40 flex items-center gap-3 group">
                                Voir nos réalisations médicales
                                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <div className="flex flex-col items-center sm:items-start text-left">
                                <p className="text-sm text-gray-400 font-medium italic">Consultation offerte</p>
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
