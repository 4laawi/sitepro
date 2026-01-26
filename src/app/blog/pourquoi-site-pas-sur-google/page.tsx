import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, Share2, Calendar, Clock, ChevronRight, CheckCircle2, AlertCircle, Search, EyeOff, BarChart3, ShieldCheck } from 'lucide-react'

export const metadata: Metadata = {
    title: 'Pourquoi mon site web n’apparaît pas sur Google ? Causes réelles et solutions | Sitepro.ma',
    description: 'Votre site est invisible sur Google ? Découvrez les causes (indexation, SEO, technique) et les solutions concrètes pour les entreprises au Maroc.',
    alternates: { canonical: '/blog/pourquoi-site-pas-sur-google' },
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
                    <span className="text-gray-900 font-medium line-clamp-1">Invisibilité Google</span>
                </nav>

                <article className="max-w-4xl mx-auto">
                    {/* Header */}
                    <header className="mb-12">
                        <Link href="/blog" className="inline-flex items-center gap-2 text-primary-600 font-bold text-sm mb-8 hover:gap-3 transition-all">
                            <ArrowLeft className="w-4 h-4" /> Retour au blog
                        </Link>
                        <div className="flex gap-3 mb-6">
                            <span className="px-3 py-1 bg-primary-100 text-primary-600 text-[10px] font-bold rounded-full uppercase tracking-wider">SEO & Visibilité</span>
                            <span className="px-3 py-1 bg-gray-100 text-gray-600 text-[10px] font-bold rounded-full uppercase tracking-wider">Conseils d'Expert</span>
                        </div>
                        <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-gray-950 mb-8 leading-tight">
                            Pourquoi mon site web n’apparaît pas sur Google ? Causes réelles et solutions concrètes
                        </h1>

                        <div className="flex flex-wrap items-center gap-6 py-8 border-y border-gray-100">
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 rounded-full bg-primary-500 relative overflow-hidden">
                                    <Image src="/Untitled design (3).webp" alt="Ali Taghi" fill className="object-cover" />
                                </div>
                                <div>
                                    <span className="block text-gray-950 font-bold text-sm">Ali Taghi</span>
                                    <span className="block text-gray-500 text-xs uppercase tracking-wider">30+ Ans d'Expérience Web</span>
                                </div>
                            </div>
                            <div className="flex items-center gap-6 text-sm text-gray-500">
                                <div className="flex items-center gap-2">
                                    <Calendar className="w-4 h-4" />
                                    <span>26 Janvier 2026</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Clock className="w-4 h-4" />
                                    <span>10 min de lecture</span>
                                </div>
                            </div>
                        </div>
                    </header>

                    {/* Featured Image */}
                    <div className="relative aspect-[16/9] rounded-[40px] overflow-hidden mb-16 shadow-2xl border border-gray-100">
                        <Image
                            src="https://images.unsplash.com/photo-1557838923-2985c318be48?auto=format&fit=crop&q=80&w=2000"
                            alt="Mystère de l'invisibilité sur Google"
                            fill
                            className="object-cover"
                        />
                    </div>

                    {/* Content */}
                    <div className="prose prose-lg prose-primary max-w-none">

                        <section id="introduction" className="mb-16">
                            <p className="lead text-xl text-gray-600 mb-8 leading-relaxed italic">
                                "Ali, mon site est en ligne depuis un mois, mais quand je tape mon nom sur Google, je ne trouve rien. C'est normal ?"
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Si vous ressentez de la frustration, sachez que vous n'êtes pas seul. En trois décennies de métier, c'est probablement la question qu'on m'a posée le plus souvent. On investit du temps, de l'argent et de l'espoir dans un projet, pour finir par avoir l'impression de crier dans le vide.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Je vais être direct : avoir un site web et être visible sur Google sont deux métiers totalement différents. L'un est de l'architecture, l'autre est de la diplomatie avec un algorithme complexe.
                            </p>
                            <p className="text-gray-700 leading-relaxed">
                                Respirez. Dans la grande majorité des cas, votre site n'a pas de "bug". Il attend simplement qu'on lui donne les bons outils pour se présenter au monde. On va regarder ça ensemble, posément.
                            </p>
                        </section>

                        <section id="comprendre-indexation" className="mb-16">
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-950 mb-6 font-display">Votre site web existe, mais Google ne le “comprend” pas encore</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Il y a une nuance capitale que beaucoup ignorent : <strong>l’Indexation vs la Visibilité</strong>.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                L'indexation, c'est quand Google sait que vous existez et vous a rangé dans sa bibliothèque géante. La visibilité, c'est quand il décide de vous mettre en tête de rayon.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Voyez Google comme un bibliothécaire extrêmement méfiant. Il ne va pas recommander un nouveau livre à ses lecteurs dès le premier jour. Il va d'abord l'analyser, vérifier si l'auteur est sérieux, si le contenu est utile, et si d'autres personnes en parlent.
                            </p>
                            <div className="bg-gray-50 p-6 rounded-3xl border border-gray-100 flex gap-4 items-start">
                                <Search className="text-primary-600 w-8 h-8 flex-shrink-0" />
                                <div className="text-sm text-gray-700 italic m-0">
                                    Mon astuce d'expert : Tapez <code className="bg-gray-200 px-1 rounded">site:votredomaine.com</code> dans Google. Si des pages s'affichent, vous êtes indexé. Si rien n'apparaît, Google n'a pas encore "lu" votre site.
                                </div>
                            </div>
                        </section>

                        <section id="raisons-courantes" className="mb-16">
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-950 mb-6 font-display">Les raisons les plus courantes pour lesquelles un site n’apparaît pas sur Google</h2>
                            <p className="text-gray-700 leading-relaxed mb-8">
                                Je ne vais pas vous abreuver de jargon technique. Voici la vérité nue :
                            </p>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="p-6 bg-white border border-gray-100 rounded-2xl shadow-sm">
                                    <h3 className="text-lg font-bold mb-2">1. Site trop récent</h3>
                                    <p className="text-gray-600 text-sm">Le "Sandbox" de Google existe. Il faut souvent plusieurs semaines, voire mois, pour gagner la confiance initiale de l'algorithme.</p>
                                </div>
                                <div className="p-6 bg-white border border-gray-100 rounded-2xl shadow-sm">
                                    <h3 className="text-lg font-bold mb-2">2. Mauvaise structure</h3>
                                    <p className="text-gray-600 text-sm">Si votre menu est un labyrinthe et que vos liens sont cassés, les robots de Google se perdent et s'en vont.</p>
                                </div>
                                <div className="p-6 bg-white border border-gray-100 rounded-2xl shadow-sm">
                                    <h3 className="text-lg font-bold mb-2">3. Aucun SEO de base</h3>
                                    <p className="text-gray-600 text-sm">Pas de titres clairs, pas de descriptions... c'est comme envoyer une lettre sans adresse sur l'enveloppe.</p>
                                </div>
                                <div className="p-6 bg-white border border-gray-100 rounded-2xl shadow-sm">
                                    <h3 className="text-lg font-bold mb-2">4. Contenu "vide"</h3>
                                    <p className="text-gray-600 text-sm">Google déteste les pages qui ne disent rien d'utile. S'il n'y a que trois lignes de texte, il vous ignorera.</p>
                                </div>
                            </div>
                        </section>

                        <section id="erreur-1" className="mb-16">
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-950 mb-6 font-display text-primary-600 uppercase text-sm tracking-widest">Erreur n°1</h2>
                            <h3 className="text-2xl md:text-3xl font-bold text-gray-950 mb-6">Penser qu’un site web suffit</h3>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                C’est le piège classique au Maroc. On se dit : "J'ai payé pour un site, maintenant les clients vont arriver".
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Imaginez que vous ouvrez une magnifique boutique de tapis dans une impasse sombre, sans enseigne, sans publicité, et à 20 kilomètres de la route principale. Personne ne viendra, même si vos tapis sont les plus beaux du pays.
                            </p>
                            <p className="text-gray-700 leading-relaxed">
                                Un site web sans travail de visibilité n'est qu'une brochure numérique. Pour exister sur Google, il faut lui donner des raisons de vous montrer.
                            </p>
                        </section>

                        <section id="erreur-2" className="mb-16">
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-950 mb-6 font-display text-primary-600 uppercase text-sm tracking-widest">Erreur n°2</h2>
                            <h3 className="text-2xl md:text-3xl font-bold text-gray-950 mb-6">Aucun travail SEO dès le départ</h3>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Le SEO (Référencement Naturel) n'est pas une option qu'on ajoute après coup comme une couche de peinture. C'est la fondation du bâtiment.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Beaucoup de sites sont invisibles dès le premier jour parce qu'ils sont techniquement illisibles pour Google. Si vos balises ne sont pas optimisées, si vos images n'ont pas de description, vous partez avec un handicap majeur.
                            </p>
                            <p className="text-gray-700 leading-relaxed">
                                C'est pourquoi un bon prestataire doit intégrer le SEO "on-page" dès la conception.
                            </p>
                        </section>

                        <section id="erreur-3" className="mb-16">
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-950 mb-6 font-display text-primary-600 uppercase text-sm tracking-widest">Erreur n°3</h2>
                            <h3 className="text-2xl md:text-3xl font-bold text-gray-950 mb-6">Mauvais mots-clés ou mauvais ciblage</h3>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Vous voulez apparaître sur "Avocat" ? C'est quasi impossible si vous débutez. La compétition est mondiale.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Les gens cherchent des solutions précises : "Avocat droit de la famille Marrakech" ou "Location de voiture Casablanca pas cher".
                            </p>
                            <div className="bg-amber-50 rounded-3xl p-8 border border-amber-100">
                                <div className="text-amber-900 leading-relaxed m-0 italic font-medium">
                                    "Trop d'entrepreneurs marocains visent des mots trop larges. En étant spécifique, vous devenez le premier de votre ville au lieu d'être le millionième de votre pays."
                                </div>
                            </div>
                        </section>

                        <section id="erreur-4" className="mb-16">
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-950 mb-6 font-display text-primary-600 uppercase text-sm tracking-widest">Erreur n°4</h2>
                            <h3 className="text-2xl md:text-3xl font-bold text-gray-950 mb-6">Site lent, mal structuré ou non optimisé mobile</h3>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Google est obsédé par l'expérience de l'utilisateur. Pourquoi ? Parce que si Google recommande un site qui met 10 secondes à charger, l'utilisateur sera mécontent de Google.
                            </p>
                            <ul className="list-disc pl-6 space-y-3 text-gray-700">
                                <li><strong>Le Mobile d'abord :</strong> Au Maroc, 80% des gens vous cherchent sur leur téléphone. Si votre site est illisible sur smartphone, Google vous ignorera.</li>
                                <li><strong>La Vitesse :</strong> Au-delà de 3 secondes de chargement, vous perdez la moitié de vos visiteurs potentiels.</li>
                            </ul>
                        </section>

                        <section id="erreur-5" className="mb-16">
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-950 mb-6 font-display text-primary-600 uppercase text-sm tracking-widest">Erreur n°5</h2>
                            <h3 className="text-2xl md:text-3xl font-bold text-gray-950 mb-6">Incohérences entre le site et Google (Local SEO)</h3>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Si vous êtes une entreprise locale au Maroc, votre <strong>Google Business Profile</strong> (fiche Google Maps) est le complément indispensable de votre site.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Si votre numéro de téléphone ou votre adresse diffèrent entre votre fiche Maps et votre site, Google perd confiance. La cohérence est le socle de la légitimité digitale.
                            </p>
                        </section>

                        <section id="maillage-interne" className="mb-16">
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-950 mb-6 font-display">Le rôle fondamental d'un site web bien construit</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Une bonne structure ne sert pas qu’à Google, elle sert à vos ventes. Un site bien construit guide le visiteur naturellement vers vos services.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-8">
                                C’est le concept du maillage interne : chaque page de votre site doit avoir un sens et un lien logique avec les autres, créant une expérience fluide et rassurante.
                            </p>
                            <div className="bg-gray-950 rounded-[40px] p-8 md:p-12 text-white shadow-xl">
                                <h3 className="text-xl font-bold mb-4">Construire des bases solides</h3>
                                <p className="text-gray-400 mb-8 leading-relaxed">
                                    Une visibilité durable commence par une construction technique impeccable. Découvrez comment nous aidons les entreprises marocaines à se faire remarquer.
                                </p>
                                <Link href="/creation-site-web-maroc" className="inline-flex items-center gap-2 bg-primary-500 text-white px-8 py-4 rounded-full font-bold hover:bg-primary-600 transition-all group">
                                    Nos solutions de création web au Maroc <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        </section>

                        <section id="combien-de-temps" className="mb-16">
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-950 mb-6 font-display">Combien de temps faut-il pour apparaître sur Google ?</h2>
                            <p className="text-gray-700 leading-relaxed mb-8">
                                Soyons réalistes : le SEO est un marathon. Ceux qui vous promettent la première page en 48 heures vendent du rêve.
                            </p>
                            <div className="space-y-6">
                                <div className="flex gap-4">
                                    <div className="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0 text-primary-600 font-bold text-sm">1</div>
                                    <div className="text-gray-700 m-0"><strong>0 à 1 mois :</strong> Phase de découverte. Google indexe vos premières pages.</div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0 text-primary-600 font-bold text-sm">2</div>
                                    <div className="text-gray-700 m-0"><strong>1 à 3 mois :</strong> Phase de stabilisation. On commence à grimper sur des termes spécifiques.</div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0 text-primary-600 font-bold text-sm">3</div>
                                    <div className="text-gray-700 m-0"><strong>3 à 6 mois :</strong> Phase de croissance. Les premiers résultats concrets (appels, devis) arrivent.</div>
                                </div>
                            </div>
                        </section>

                        <section id="ce-que-cherche-google" className="mb-16">
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-950 mb-6 font-display">Ce que Google cherche réellement</h2>
                            <p className="text-gray-700 leading-relaxed mb-6 text-lg font-medium">
                                En fin de compte, Google veut satisfaire ses utilisateurs en leur offrant :
                            </p>
                            <ul className="grid md:grid-cols-2 gap-4 list-none pl-0">
                                <li className="bg-gray-50 p-4 rounded-xl border border-gray-100"><strong>Confiance :</strong> Sécurité (HTTPS) et professionnalisme.</li>
                                <li className="bg-gray-50 p-4 rounded-xl border border-gray-100"><strong>Pertinence :</strong> Répondre précisément à la recherche.</li>
                                <li className="bg-gray-50 p-4 rounded-xl border border-gray-100"><strong>Constance :</strong> Des informations à jour et vérifiées.</li>
                                <li className="bg-gray-50 p-4 rounded-xl border border-gray-100"><strong>Valeur :</strong> Un contenu qui aide vraiment l'internaute.</li>
                            </ul>
                        </section>

                        <section id="comment-corriger-le-probleme" className="mb-16 bg-primary-50 p-8 md:p-12 rounded-[40px] border border-primary-100">
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-950 mb-6 font-display flex items-center gap-3">
                                <ShieldCheck className="text-primary-600" /> Comment corriger le problème (sans jargon)
                            </h2>
                            <p className="text-gray-800 leading-relaxed mb-8">
                                Voici votre plan d'action pour sortir de l'ombre :
                            </p>
                            <ul className="space-y-6 list-none pl-0">
                                <li className="flex gap-4">
                                    <CheckCircle2 className="text-green-600 flex-shrink-0" />
                                    <div className="text-gray-700"><strong>Vérifiez votre présence :</strong> Connectez-vous à Google Search Console pour voir les erreurs de lecture de votre site.</div>
                                </li>
                                <li className="flex gap-4">
                                    <CheckCircle2 className="text-green-600 flex-shrink-0" />
                                    <div className="text-gray-700"><strong>Optimisez l'essentiel :</strong> Assurez-vous que chaque page a un titre clair qui inclut votre métier et votre ville.</div>
                                </li>
                                <li className="flex gap-4">
                                    <CheckCircle2 className="text-green-600 flex-shrink-0" />
                                    <div className="text-gray-700"><strong>Parlez à vos clients :</strong> Écrivez du contenu qui répond à leurs questions fréquentes, pas juste une liste de prix.</div>
                                </li>
                                <li className="flex gap-4">
                                    <CheckCircle2 className="text-green-600 flex-shrink-0" />
                                    <div className="text-gray-700"><strong>Soyez local :</strong> Si vous travaillez au Maroc, votre fiche Google Maps doit être impeccable et cohérente avec votre site.</div>
                                </li>
                            </ul>
                        </section>

                        <section id="conclusion" className="mb-12 py-10 border-t border-gray-100">
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-950 mb-6 font-display">Conclusion</h2>
                            <p className="text-gray-700 leading-relaxed mb-10">
                                L'invisibilité digitale n'est pas une fatalité. C'est simplement le signe qu'il y a un décalage entre votre outil et les attentes de Google.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-10">
                                Mon dernier conseil ? Soyez patient. Le web récompense la qualité et la persévérance. Une fois que la machine est lancée sur de bonnes bases, elle devient votre meilleur allié commercial, infatigable et accessible 24h/24.
                            </p>

                            <div className="bg-gray-950 rounded-[40px] p-8 md:p-12 text-center text-white relative overflow-hidden">
                                <div className="relative z-10">
                                    <h3 className="text-2xl md:text-3xl font-bold mb-6">Votre site est invisible ? Changeons cela ensemble.</h3>
                                    <p className="text-gray-400 mb-8 max-w-2xl mx-auto italic">
                                        "Chaque minute passée dans l'ombre est une opportunité offerte à vos concurrents. Construisons enfin votre visibilité."
                                    </p>
                                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                        <a href={`https://wa.me/${phone}`} className="inline-flex items-center justify-center gap-2 bg-primary-500 text-white px-8 py-4 rounded-full font-bold hover:bg-primary-600 transition-all">
                                            Analyser mon site sur WhatsApp
                                        </a>
                                        <Link href="/contact" className="bg-white/10 text-white border border-white/20 px-8 py-4 rounded-full font-bold hover:bg-white/20 transition-all">
                                            Demander une étude personnalisée
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>

                    <footer className="mt-20 pt-12 border-t border-gray-100">
                        <div className="flex items-center justify-between mb-8">
                            <h3 className="text-xl font-bold text-gray-950">D'autres articles qui pourraient vous intéresser</h3>
                            <Link href="/blog" className="text-primary-600 font-bold text-sm hover:underline">Voir tout le blog</Link>
                        </div>
                    </footer>
                </article>
            </div>
        </main>
    )
}
