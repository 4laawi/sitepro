import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, Share2, Calendar, Clock, ChevronRight, AlertCircle, Search, MapPin, Globe, Users, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
    title: 'Comment trouver des clients en ligne au Maroc ? Méthodes qui marchent | Sitepro.ma',
    description: 'Découvrez les méthodes réelles pour acquérir des clients en ligne au Maroc. Guide expert pour entrepreneurs et PME : Google, SEO local, réseaux sociaux et publicité.',
    alternates: { canonical: 'https://sitepro.ma/blog/comment-trouver-clients-ligne-maroc' },
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
                    <span className="text-gray-900 font-medium line-clamp-1">Trouver des clients au Maroc</span>
                </nav>

                <article className="max-w-4xl mx-auto">
                    {/* Header */}
                    <header className="mb-12">
                        <Link href="/blog" className="inline-flex items-center gap-2 text-primary-600 font-bold text-sm mb-8 hover:gap-3 transition-all">
                            <ArrowLeft className="w-4 h-4" /> Retour au blog
                        </Link>
                        <div className="flex gap-3 mb-6">
                            <span className="px-3 py-1 bg-primary-100 text-primary-600 text-[10px] font-bold rounded-full uppercase tracking-wider">Stratégie</span>
                            <span className="px-3 py-1 bg-gray-100 text-gray-600 text-[10px] font-bold rounded-full uppercase tracking-wider">Acquisition</span>
                        </div>
                        <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-gray-950 mb-8 leading-tight">
                            Comment trouver des clients en ligne au Maroc ? Les méthodes qui marchent vraiment
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
                                    <span>26 Janvier 2026</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Clock className="w-4 h-4" />
                                    <span>15 min de lecture</span>
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
                            src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=2000"
                            alt="Trouver des clients en ligne au Maroc"
                            fill
                            className="object-cover"
                        />
                    </div>

                    {/* Content */}
                    <div className="prose prose-lg prose-primary max-w-none">

                        {/* INTRODUCTION */}
                        <section id="introduction" className="mb-16">
                            <p className="lead text-xl text-gray-600 mb-8 leading-relaxed italic">
                                "J'ai un bon produit, j'ai un bon service... mais le téléphone ne sonne pas."
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                C'est la frustration que je vois sur le visage de tant d'entrepreneurs marocains. Vous avez investi du temps, de l'énergie, et peut-être même de l'argent dans des posts Facebook ou des flyers, mais les résultats sont minces. Vous regardez vos concurrents et vous vous demandez : "Qu'est-ce qu'ils ont compris que je n'ai pas ?"
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Après 35 ans de carrière à observer l'évolution du commerce au Maroc, du porte-à-porte au digital, je peux vous dire une chose avec certitude : trouver des clients en ligne n'est pas une question de "magie" ou de "chance". Ce n'est pas non plus une question de budget illimité. C'est une question de <strong>clarté</strong> et de <strong>méthode</strong>.
                            </p>
                            <p className="text-gray-700 leading-relaxed">
                                Dans cet article, on va oublier le jargon technique et les promesses de réussite éclair. Je vais vous expliquer, comme si nous étions autour d'un café, ce qui fonctionne réellement sur le terrain marocain aujourd'hui. Sans filtre.
                            </p>
                        </section>

                        {/* COMMENT LES CLIENTS CHERCHENT */}
                        <section id="comportement-clients" className="mb-16">
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-950 mb-6 font-display">Comment les clients cherchent-ils des services aujourd'hui au Maroc ?</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Avant de vouloir "trouver" des clients, il faut comprendre comment ils se comportent. Le client marocain a radicalement changé. Il est méfiant, informé et ultra-connecté. Voici ses quatre réflexes principaux :
                            </p>
                            <div className="grid md:grid-cols-2 gap-6 mb-8">
                                <div className="bg-gray-50 p-6 rounded-3xl border border-gray-100">
                                    <div className="flex items-center gap-3 mb-3">
                                        <Search className="w-5 h-5 text-primary-600" />
                                        <h3 className="text-lg font-bold text-gray-900">Les recherches Google</h3>
                                    </div>
                                    <p className="text-gray-600 text-sm">"Expert comptable Casablanca" ou "Plombier Rabat". C'est l'intention pure. Le besoin est là, immédiat.</p>
                                </div>
                                <div className="bg-gray-50 p-6 rounded-3xl border border-gray-100">
                                    <div className="flex items-center gap-3 mb-3">
                                        <MapPin className="w-5 h-5 text-primary-600" />
                                        <h3 className="text-lg font-bold text-gray-900">Google Maps</h3>
                                    </div>
                                    <p className="text-gray-600 text-sm">Pour tout ce qui est local. On regarde la distance, mais surtout les avis et les photos.</p>
                                </div>
                                <div className="bg-gray-50 p-6 rounded-3xl border border-gray-100">
                                    <div className="flex items-center gap-3 mb-3">
                                        <Users className="w-5 h-5 text-primary-600" />
                                        <h3 className="text-lg font-bold text-gray-900">Les réseaux sociaux</h3>
                                    </div>
                                    <p className="text-gray-600 text-sm">Instagram, Facebook, TikTok. Ici, on ne cherche pas forcément, on découvre. C'est la vitrine émotionnelle.</p>
                                </div>
                                <div className="bg-gray-50 p-6 rounded-3xl border border-gray-100">
                                    <div className="flex items-center gap-3 mb-3">
                                        <Globe className="w-5 h-5 text-primary-600" />
                                        <h3 className="text-lg font-bold text-gray-900">Le bouche-à-oreille digital</h3>
                                    </div>
                                    <p className="text-gray-600 text-sm">Les groupes WhatsApp ou Facebook. La recommandation reste le moteur n°1 de confiance au Maroc.</p>
                                </div>
                            </div>
                        </section>

                        {/* METHODE 1 : GOOGLE */}
                        <section id="methode-1-google" className="mb-16">
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-950 mb-6 font-display">Méthode n°1 : Google (Là où la demande existe déjà)</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Pourquoi je parle toujours de Google en premier ? Parce que c'est le seul endroit où les gens lèvent la main pour dire : <strong>"J'ai besoin de vous maintenant"</strong>.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Sur les réseaux sociaux, vous interrompez les gens (visibilité). Sur Google, vous répondez à leur question (intention). Cette différence est fondamentale. Si vous êtes un avocat à Marrakech, vous voulez apparaître quand quelqu'un tape "avocat divorce Marrakech", pas seulement poster une belle photo sur Instagram.
                            </p>
                            <div className="bg-primary-50 p-8 rounded-3xl border border-primary-100 mb-6">
                                <h3 className="text-lg font-bold text-gray-900 mb-4 italic">Le secret du SEO au Maroc</h3>
                                <p className="text-gray-700">
                                    Le marché marocain est encore moins compétitif que l'Europe sur beaucoup de secteurs. Être "simplement" bien structuré techniquement en français et en arabe vous donne souvent une longueur d'avance colossale.
                                </p>
                            </div>
                        </section>

                        {/* METHODE 2 : GOOGLE MAPS & SEO LOCAL */}
                        <section id="methode-2-maps" className="mb-16">
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-950 mb-6 font-display">Méthode n°2 : Google Maps et le SEO local</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Si vous avez un commerce physique ou si vous intervenez chez les gens (dentiste, pâtissier, menuisier, agence de location), Google Maps est votre actif le plus précieux.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Pourquoi ça convertit mieux que la publicité ? Parce que l'humain fait confiance à ses pairs. Un profil Maps avec 50 avis positifs et des photos réelles de votre travail vaut toutes les campagnes publicitaires du monde. C'est du réalisme pur.
                            </p>
                            <div className="flex gap-4 items-start bg-amber-50 p-6 rounded-2xl border border-amber-100">
                                <AlertCircle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                                <p className="text-amber-900 text-sm italic">
                                    Attention : Ne tombez pas dans le piège des faux avis achetés. L'algorithme de Google devient très intelligent et les clients marocains finissent toujours par le sentir. Soyez vrai.
                                </p>
                            </div>
                        </section>

                        {/* METHODE 3 : RESEAUX SOCIAUX */}
                        <section id="methode-3-reseaux-sociaux" className="mb-16">
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-950 mb-6 font-display">Méthode n°3 : Les réseaux sociaux (Ce qu’ils font bien et ce qu’ils ne font pas)</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Les réseaux sociaux sont fascinants au Maroc, mais ils sont mal compris. Beaucoup d'entrepreneurs pensent que "faire du Facebook" c'est vendre.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                <strong>Ce qu'ils font bien :</strong> Créer une relation, montrer votre visage, humaniser votre marque. C'est parfait pour la "considération". Le client voit votre travail, s'habitue à vous, et quand il a un besoin, il pense à vous.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                <strong>Ce qu'ils ne font pas :</strong> Ils ne vous garantissent pas la pérennité. Vous êtes locataire de l'algorithme. Demain, Facebook décide que votre portée devient nulle, et votre business s'arrête. C'est un risque trop grand pour une entreprise sérieuse.
                            </p>
                        </section>

                        {/* METHODE 4 : PUBLICITE EN LIGNE */}
                        <section id="methode-4-publicite" className="mb-16">
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-950 mb-6 font-display">Méthode n°4 : La publicité en ligne (Quand ça vaut le coup)</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Meta Ads (FB/IG) et Google Ads sont des accélérateurs. Mais attention : ils amplifient ce qui existe déjà.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Si votre offre est floue ou que votre site est lent, la publicité ne fera que brûler votre budget plus vite. En revanche, si vous avez une offre irrésistible (ex: "Bilan gratuit pour les entreprises de Tanger"), la publicité peut remplir votre carnet de rendez-vous en 48h. C'est un robinet que l'on ouvre et que l'on ferme.
                            </p>
                        </section>

                        {/* POURQUOI CA NE MARCHE PAS POUR CERTAINS */}
                        <section id="echecs" className="mb-16">
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-950 mb-6 font-display">Pourquoi beaucoup d’entrepreneurs n’obtiennent pas de résultats</h2>
                            <p className="text-gray-700 mb-8">
                                En tant qu'observateur, je vois trois erreurs fatales revenir sans cesse :
                            </p>
                            <ul className="space-y-6 list-none pl-0">
                                <li className="flex gap-4">
                                    <div className="w-8 h-8 rounded-full bg-red-100 text-red-600 flex items-center justify-center flex-shrink-0 font-bold">1</div>
                                    <div>
                                        <span className="font-bold block text-gray-950">L'absence de stratégie globale</span>
                                        <p className="text-gray-700 text-sm">On poste au hasard, on fait un peu de pub, on change d'avis toutes les semaines. Sans fil conducteur, l'argent s'évapore.</p>
                                    </div>
                                </li>
                                <li className="flex gap-4">
                                    <div className="w-8 h-8 rounded-full bg-red-100 text-red-600 flex items-center justify-center flex-shrink-0 font-bold">2</div>
                                    <div>
                                        <span className="font-bold block text-gray-950">L'absence de fondations</span>
                                        <p className="text-gray-700 text-sm">Vouloir vendre sans avoir une identité claire ou un point de chute (site/profil) professionnel. C'est comme inviter des gens à dîner chez soi alors que la maison est en travaux.</p>
                                    </div>
                                </li>
                                <li className="flex gap-4">
                                    <div className="w-8 h-8 rounded-full bg-red-100 text-red-600 flex items-center justify-center flex-shrink-0 font-bold">3</div>
                                    <div>
                                        <span className="font-bold block text-gray-950">L'impatience</span>
                                        <p className="text-gray-700 text-sm">Le digital au Maroc récompense la constance. Ceux qui cherchent le "coup d'un soir" via une pub agressive finissent souvent par être déçus.</p>
                                    </div>
                                </li>
                            </ul>
                        </section>

                        {/* ROLE DU SITE WEB */}
                        <section id="role-site-web" className="mb-16">
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-950 mb-6 font-display">Le rôle central d’un site web professionnel</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Vous allez me dire : "Mais Ali, avec Facebook et Instagram, j'ai besoin d'un site ?"
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Ma réponse est : <strong>Voulez-vous être un commerçant ambulant ou le propriétaire de votre magasin ?</strong>
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Un site web est le seul endroit qui vous appartient totalement. C'est là que vous construisez votre crédibilité. Face à un client important (B2B) ou un projet à haut budget, le premier réflexe de l'internaute est de chercher votre site. S'il ne le trouve pas, ou s'il tombe sur un site amateur, vous perdez la vente avant d'avoir pu parler.
                            </p>
                        </section>

                        {/* LIEN INTERNE */}
                        <section id="internal-link" className="mb-16 p-8 bg-primary-900 rounded-[40px] text-white">
                            <div className="flex flex-col md:flex-row gap-8 items-center">
                                <div className="flex-1">
                                    <h3 className="text-xl font-bold mb-4">Besoin de bases solides ?</h3>
                                    <p className="text-primary-100 mb-0 leading-relaxed">
                                        Avant de lancer de grandes campagnes, assurez-vous que votre vitrine digitale est à la hauteur de votre talent. Un site bien conçu est le socle de toute votre acquisition client.
                                    </p>
                                </div>
                                <Link href="/creation-site-web-maroc" className="inline-flex items-center gap-2 bg-white text-primary-900 px-8 py-4 rounded-full font-bold hover:bg-primary-50 transition-all group whitespace-nowrap">
                                    Voir nos solutions web <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        </section>

                        {/* EXEMPLES CONCRETS */}
                        <section id="exemples" className="mb-16">
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-950 mb-6 font-display">Exemples concrets du terrain</h2>
                            <div className="space-y-8">
                                <div className="border-l-4 border-primary-200 pl-6 h-full">
                                    <h4 className="font-bold text-gray-900">Le Service Local (ex: Serrurier à Casablanca)</h4>
                                    <p className="text-gray-700 text-sm italic">Stratégie gagnante : Google Maps optimisé + Campagne Google Ads sur des mots-clés d'urgence. Résultats quasi immédiats.</p>
                                </div>
                                <div className="border-l-4 border-primary-200 pl-6 h-full">
                                    <h4 className="font-bold text-gray-900">Le Freelancer (ex: Consultant RH)</h4>
                                    <p className="text-gray-700 text-sm italic">Stratégie gagnante : LinkedIn pour la prospection + Site web vitrine de haute qualité pour la réassurance lors de l'envoi du devis.</p>
                                </div>
                                <div className="border-l-4 border-primary-200 pl-6 h-full">
                                    <h4 className="font-bold text-gray-900">La Petite Entreprise (ex: Fabrique de meubles à Agadir)</h4>
                                    <p className="text-gray-700 text-sm italic">Stratégie gagnante : Instagram pour le visuel et le catalogue + SEO local pour attirer ceux qui cherchent du sur-mesure.</p>
                                </div>
                            </div>
                        </section>

                        {/* COMBIEN DE TEMPS ? */}
                        <section id="delais" className="mb-16">
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-950 mb-6 font-display">Combien de temps faut-il pour obtenir des résultats ?</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Soyons honnêtes : le digital n'est pas un micro-ondes. C'est un jardin.
                            </p>
                            <ul className="list-disc pl-6 space-y-4 text-gray-700">
                                <li><strong>Publicité :</strong> 24h à 48h (mais s'arrête dès que vous ne payez plus).</li>
                                <li><strong>SEO Local & Maps :</strong> 2 à 4 mois pour monter dans le peloton de tête.</li>
                                <li><strong>SEO (Google Recherche) :</strong> 4 à 8 mois pour des positions solides et durables.</li>
                            </ul>
                        </section>

                        {/* QUELLE STRATEGIE CHOISIR ? */}
                        <section id="choisir-strategie" className="mb-16 bg-gray-50 p-8 rounded-3xl border border-gray-100">
                            <h2 className="text-2xl font-bold text-gray-950 mb-6">Quelle stratégie choisir selon votre situation ?</h2>
                            <div className="space-y-6">
                                <div>
                                    <span className="font-bold text-primary-600 block mb-2">Vous débutez ?</span>
                                    <p className="text-gray-700">Ouvrez votre profil Google Maps et commencez par une présence gratuite ou un site "Essentiel". Soyez irréprochable sur le service.</p>
                                </div>
                                <div>
                                    <span className="font-bold text-primary-600 block mb-2">Budget limité ?</span>
                                    <p className="text-gray-700">Misez tout sur le contenu utile. Expliquez à vos clients comment vous résolvez leurs problèmes. Le temps remplace l'argent.</p>
                                </div>
                                <div>
                                    <span className="font-bold text-primary-600 block mb-2">Business déjà existant qui veut scaler ?</span>
                                    <p className="text-gray-700">Il est temps d'investir dans un site haut de gamme et un SEO agressif. Vous avez déjà les preuves de votre succès, il faut juste que tout le monde le sache.</p>
                                </div>
                            </div>
                        </section>

                        {/* CONCLUSION */}
                        <section id="conclusion" className="mb-12 py-10 border-t border-gray-100">
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-950 mb-6 font-display">Conclusion</h2>
                            <p className="text-gray-700 leading-relaxed mb-8">
                                Le Maroc est en pleine ébullition digitale. On ne cherche plus des clients comme on le faisait en 2010. Aujourd'hui, la clarté bat la complexité. En choisissant une méthode, en s'y tenant avec patience, et en construisant des bases solides, vous ne chercherez plus les clients : vous ferez en sorte qu'ils vous trouvent.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-10">
                                Mon expérience m'a appris que les gagnants sont ceux qui ont une vision à long terme et qui traitent leur présence en ligne avec le même respect que leur boutique physique.
                            </p>
                            <div className="bg-gray-950 rounded-[40px] p-8 md:p-12 text-center text-white">
                                <h3 className="text-2xl md:text-3xl font-bold mb-6">Clarifiez votre vision digitale</h3>
                                <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
                                    Si vous vous sentez un peu perdu dans tout cela, sachez que c'est normal. Parfois, un regard extérieur et expérimenté peut tout changer.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <a href={`https://wa.me/${phone}`} className="inline-flex items-center justify-center gap-2 bg-primary-500 text-white px-8 py-4 rounded-full font-bold hover:bg-primary-600 transition-all">
                                        Discuter sur WhatsApp
                                    </a>
                                    <Link href="/contact" className="bg-white/10 text-white border border-white/20 px-8 py-4 rounded-full font-bold hover:bg-white/20 transition-all">
                                        Demander un audit
                                    </Link>
                                </div>
                            </div>
                        </section>
                    </div>

                    <footer className="mt-20 pt-12 border-t border-gray-100">
                        <div className="flex items-center justify-between mb-8">
                            <h3 className="text-xl font-bold text-gray-950">D'autres lectures conseillées</h3>
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
                            AGENCE DE CRÉATION DE SITE WEB AU MAROC
                        </span>
                        <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
                            Prêt à dominer votre <span className="text-primary-400">marché au Maroc</span> ?
                        </h2>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                            Ne laissez pas vos concurrents prendre toute la place. Lancez un site web qui capte l&apos;attention et convertit vos visiteurs en clients.
                        </p>
                        <div className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-6">
                            <Link href="/creation-site-web-maroc/" className="bg-primary-500 hover:bg-primary-600 text-white px-10 py-5 rounded-xl font-bold text-xl transition-all shadow-xl shadow-primary-900/40 flex items-center gap-3 group">
                                Création site web Maroc
                                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <div className="flex flex-col items-center sm:items-start text-left">
                                <p className="text-sm text-gray-400 font-medium italic">Audit technique offert</p>
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
