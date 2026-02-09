import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, ChevronRight, Calendar, Clock, AlertCircle, HelpCircle, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
    title: "Créer un site web gratuitement au Maroc : La vérité que personne ne dit | Sitepro.ma",
    description: "Est-ce une bonne idée de créer un site web gratuit pour votre business au Maroc ? Découvrez les limites cachées, les risques SEO et les conseils d’un expert.",
    alternates: { canonical: 'https://sitepro.ma/blog/site-web-gratuit-maroc' },
}

const phone = '212663711164'

export default function BlogPost() {
    const faqSchema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
            {
                '@type': 'Question',
                name: 'Un site gratuit peut-il apparaître sur Google ?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Techniquement oui, mais c’est extrêmement difficile. Les sites gratuits manquent d’autorité de domaine et de structure technique optimisée, ce qui les relègue souvent loin dans les résultats de recherche.'
                }
            },
            {
                '@type': 'Question',
                name: 'Wix est-il bon pour le SEO au Maroc ?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Wix s’est amélioré, mais sa version gratuite reste catastrophique pour le SEO local au Maroc : URL non professionnelle, lenteur et impossibilité de configurer certains paramètres avancés de visibilité.'
                }
            },
            {
                '@type': 'Question',
                name: 'Facebook suffit-il pour un business ?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Facebook est un excellent complément, but il ne remplace pas un site. Sur Facebook, vous louez votre audience. Sur votre site, vous êtes chez vous. De plus, beaucoup de clients cherchent sur Google avant d’acheter.'
                }
            },
            {
                '@type': 'Question',
                name: 'Combien coûte un vrai site web au Maroc ?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Pour un résultat professionnel et sérieux, comptez environ 2 800 DH pour un site vitrine de qualité et à partir de 4 000 DH pour une solution totalement optimisée pour le SEO.'
                }
            },
            {
                '@type': 'Question',
                name: 'Est-ce que Google pénalise les sites gratuits ?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Google ne "pénalise" pas directement, but il favorise les sites qui offrent une excellente expérience utilisateur, de la crédibilité et une technique irréprochable. Ce que les plateformes gratuites ne permettent pas.'
                }
            }
        ]
    }

    return (
        <main className="bg-white min-h-screen pt-24 pb-20">
            <script id="faq-schema" type="application/ld+json">
                {JSON.stringify(faqSchema)}
            </script>

            <div className="container mx-auto px-4 lg:px-8">
                {/* Breadcrumbs */}
                <nav className="flex items-center space-x-2 text-sm text-gray-500 mb-8" aria-label="Breadcrumb">
                    <Link href="/" className="hover:text-primary-600 transition-colors">Accueil</Link>
                    <ChevronRight className="w-4 h-4" />
                    <Link href="/blog" className="hover:text-primary-600 transition-colors">Blog</Link>
                    <ChevronRight className="w-4 h-4" />
                    <span className="text-gray-900 font-medium line-clamp-1">Site Gratuit Maroc</span>
                </nav>

                <article className="max-w-4xl mx-auto">
                    {/* Header */}
                    <header className="mb-12">
                        <Link href="/blog" className="inline-flex items-center gap-2 text-primary-600 font-bold text-sm mb-8 hover:gap-3 transition-all">
                            <ArrowLeft className="w-4 h-4" /> Retour au blog
                        </Link>
                        <div className="flex gap-3 mb-6">
                            <span className="px-3 py-1 bg-primary-100 text-primary-600 text-[10px] font-bold rounded-full uppercase tracking-wider">Création Web</span>
                            <span className="px-3 py-1 bg-gray-100 text-gray-600 text-[10px] font-bold rounded-full uppercase tracking-wider">La Vérité</span>
                        </div>
                        <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-gray-950 mb-8 leading-tight">
                            Créer un site web gratuitement au Maroc : bonne ou mauvaise idée ? La vérité que personne ne dit
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
                                    <span>12 min de lecture</span>
                                </div>
                            </div>
                        </div>
                    </header>

                    {/* Featured Image */}
                    <div className="relative aspect-[16/9] rounded-[40px] overflow-hidden mb-16 shadow-2xl border border-gray-100">
                        <Image
                            src="/site_web_gratuit_maroc_banner_1769387594208.png"
                            alt="Créer un site web gratuitement au Maroc"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>

                    {/* Content */}
                    <div className="prose prose-lg prose-primary max-w-none">
                        <section id="introduction" className="mb-16">
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Je vous vois venir. Vous venez de lancer votre business à Casablanca, Tanger ou Marrakech, et vous voulez limiter les frais. C&apos;est tout à fait humain. Au Maroc, on aime ce qui est gratuit. On se dit : &laquo; Pourquoi payer une agence alors que Wix me propose un site gratuit en 10 minutes ? &raquo; ou &laquo; Ma page Facebook suffit largement &raquo;.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Écoutez-moi bien. J&apos;ai commencé le web quand les modems faisaient encore des bruits de soucoupe volante. J&apos;ai vu passer toutes les modes, tous les outils miracles. Et s&apos;il y a une chose que j&apos;ai apprise en 40 ans, c&apos;est que le gratuit, dans le business, finit toujours par coûter très cher.
                            </p>
                            <p className="text-gray-700 leading-relaxed">
                                Aujourd&apos;hui, on va parler franchement. Pas de langue de bois, pas de marketing. Juste la vérité sur ce que signifie réellement &laquo; créer un site web gratuitement au Maroc &raquo; en 2026.
                            </p>
                        </section>

                        <section id="signification-gratuit" className="mb-16">
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-950 mb-6 font-display">Que signifie vraiment &laquo; site web gratuit &raquo; ?</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Quand on parle de gratuité, on pense souvent à des plateformes comme <strong>Wix Maroc</strong>, Google Sites ou WordPress.com. Pour être honnête, ces outils sont formidables pour leur technologie. Ils vous offrent un hébergement, un éditeur visuel et une adresse temporaire.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6 text-lg font-medium italic">
                                Mais voici ce qu&apos;on ne vous dit pas : vous n&apos;êtes pas le propriétaire. Vous êtes un locataire dans un immeuble social.
                            </p>
                            <p className="text-gray-700 leading-relaxed">
                                Le &quot;gratuit&quot; s&apos;arrête là où vos besoins commencent : une adresse .ma, pas de publicités clignotantes sur tout l&apos;écran, et surtout, le droit d&apos;exister sérieusement sur Google.
                            </p>
                        </section>

                        <section id="avantages" className="mb-16">
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-950 mb-6 font-display">Avantages d&apos;un site web gratuit (soyons justes)</h2>
                            <p className="text-gray-700 leading-relaxed mb-8">
                                Je ne vais pas cracher dans la soupe. Créer un site gratuit a ses moments de gloire :
                            </p>
                            <div className="grid md:grid-cols-3 gap-6">
                                <div className="p-6 bg-green-50 rounded-2xl border border-green-100">
                                    <h3 className="text-lg font-bold mb-2 text-green-900">Zéro investissement</h3>
                                    <p className="text-green-800 text-sm">Idéal pour l&apos;étudiant ou le passionné qui veut juste un jardin numérique.</p>
                                </div>
                                <div className="p-6 bg-green-50 rounded-2xl border border-green-100">
                                    <h3 className="text-lg font-bold mb-2 text-green-900">Rapidité extrême</h3>
                                    <p className="text-green-800 text-sm">En une heure, vous avez quelque chose en ligne. Magique, non ?</p>
                                </div>
                                <div className="p-6 bg-green-50 rounded-2xl border border-green-100">
                                    <h3 className="text-lg font-bold mb-2 text-green-900">Test d&apos;idée</h3>
                                    <p className="text-green-800 text-sm">Vous voulez voir si votre concept de &quot;tajines à domicile&quot; intéresse quelqu&apos;un ? Testez vite.</p>
                                </div>
                            </div>
                        </section>

                        <section id="limites-cachees" className="mb-16">
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-950 mb-6 font-display">Les limites cachées (L&apos;expérience parle)</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                C&apos;est ici que les problèmes commencent. Dans mon bureau, j&apos;ai vu des dizaines d&apos;entrepreneurs arriver en pleurs parce que leur site gratuit ne leur rapportait pas un seul dirham de chiffre d&apos;affaires. Pourquoi ?
                            </p>
                            <ul className="space-y-4 list-none pl-0">
                                <li className="flex gap-4 p-4 bg-gray-50 rounded-xl border border-gray-100">
                                    <AlertCircle className="text-red-500 flex-shrink-0" />
                                    <div className="text-gray-700"><strong>URL non professionnelle :</strong> Imaginez donner une carte de visite avec écrit <code className="bg-gray-200 px-1 rounded">mon-business.wixsite.com</code>. Quel client sérieux va vous faire confiance ?</div>
                                </li>
                                <li className="flex gap-4 p-4 bg-gray-50 rounded-xl border border-gray-100">
                                    <AlertCircle className="text-red-500 flex-shrink-0" />
                                    <div className="text-gray-700"><strong>Publicité imposée :</strong> Vous travaillez gratuitement… pour faire la pub de Wix ou de WordPress sur votre propre site.</div>
                                </li>
                                <li className="flex gap-4 p-4 bg-gray-50 rounded-xl border border-gray-100">
                                    <AlertCircle className="text-red-500 flex-shrink-0" />
                                    <div className="text-gray-700"><strong>Vitesse de tortue :</strong> Ces sites sont souvent hébergés sur des serveurs surchargés. Si ça rame, le Marocain zap.</div>
                                </li>
                                <li className="flex gap-4 p-4 bg-gray-50 rounded-xl border border-gray-100">
                                    <AlertCircle className="text-red-500 flex-shrink-0" />
                                    <div className="text-gray-700"><strong>Aucune crédibilité :</strong> Pour un vrai business au Maroc, l&apos;image est capitale. Le gratuit transmet un message : &quot;Je ne suis pas assez solide pour investir dans mon image&quot;.</div>
                                </li>
                            </ul>
                        </section>

                        <section id="seo-blocage" className="mb-16">
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-950 mb-6 font-display">SEO et Google : pourquoi le &laquo; gratuit &raquo; bloque votre visibilité</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                C&apos;est mon combat quotidien. Google ne déteste pas les sites gratuits par principe. Il les ignore car ils sont techniquement &quot;pauvres&quot;.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Un site <strong>WordPress gratuit</strong> ou un Wix gratuit souffre d&apos;un manque criant d&apos;autorité. Votre nom de domaine est une extension d&apos;un autre domaine. Pour Google, vous n&apos;êtes qu&apos;une petite branche d&apos;un arbre géant qui ne vous appartient pas.
                            </p>
                            <ul className="list-disc pl-6 space-y-3 text-gray-700">
                                <li><strong>Indexation laborieuse :</strong> Google mettra des mois à vous trouver.</li>
                                <li><strong>SEO Local impossible :</strong> Comment apparaître sur &quot;Menuisier à Agadir&quot; si votre site n&apos;est qu&apos;un sous-domaine technique ?</li>
                                <li><strong>Google Maps disconnect :</strong> Google a du mal à lier un site gratuit à une fiche Google Business Profile sérieuse.</li>
                            </ul>
                        </section>

                        <section id="danger-warning" className="mb-16 bg-red-50 p-8 md:p-12 rounded-[40px] border border-red-100">
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-950 mb-6 font-display flex items-center gap-3">
                                <AlertCircle className="text-red-600" /> Attention ⚠️ : l&apos;erreur que font 80% des entrepreneurs
                            </h2>
                            <p className="text-red-900 leading-relaxed mb-8">
                                Je vois souvent cette erreur fatale : mixer un site gratuit avec une fiche Google Business Profile, puis essayer de forcer le passage avec du &quot;keyword stuffing&quot; (remplir le site de mots-clés sans sens).
                            </p>
                            <p className="text-red-900 leading-relaxed mb-8">
                                Résultat ? Google finit par ignorer purement et simplement le site. Pire, il peut nuker votre visibilité locale parce qu&apos;il juge votre présence digitale comme étant de &quot;basse qualité&quot;.
                            </p>
                            <div className="font-bold text-red-950 m-0">
                                Gardez votre calme, mais soyez fermes : si vous voulez que Google vous respecte, respectez ses règles de qualité.
                            </div>
                        </section>

                        <section id="cas-acceptables" className="mb-16">
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-950 mb-6 font-display">Quand un site gratuit peut être acceptable (cas rares)</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Je ne suis pas un intégriste. Parfois, le gratuit suffit :
                            </p>
                            <ul className="list-disc pl-6 space-y-3 text-gray-700">
                                <li><strong>Projet personnel :</strong> Votre blog de poésie ou votre collection de timbres.</li>
                                <li><strong>Portfolio temporaire :</strong> Vous êtes étudiant et vous voulez montrer vos travaux à un futur employeur.</li>
                                <li><strong>Phase de test :</strong> Tester un nouveau produit pendant 15 jours avant de passer aux choses sérieuses.</li>
                            </ul>
                        </section>

                        <section id="comparaison" className="mb-16">
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-950 mb-6 font-display">Site gratuit vs site professionnel au Maroc</h2>
                            <p className="text-gray-700 leading-relaxed mb-8">
                                La différence n&apos;est pas seulement esthétique, elle est stratégique.
                            </p>
                            <div className="space-y-6">
                                <div className="p-6 bg-white border border-gray-100 rounded-2xl shadow-sm hover:border-primary-200 transition-colors">
                                    <h3 className="text-xl font-bold mb-3 flex items-center gap-2 text-gray-950">
                                        <div className="w-2 h-2 rounded-full bg-primary-500" /> Visibilité &amp; Confiance
                                    </h3>
                                    <p className="text-gray-600 text-sm m-0">Un site professionnel avec un domaine .ma inspire une confiance immédiate. C&apos;est la différence entre une boutique sur l&apos;Avenue Mohammed V et un vendeur ambulant.</p>
                                </div>
                                <div className="p-6 bg-white border border-gray-100 rounded-2xl shadow-sm hover:border-primary-200 transition-colors">
                                    <h3 className="text-xl font-bold mb-3 flex items-center gap-2 text-gray-950">
                                        <div className="w-2 h-2 rounded-full bg-primary-500" /> SEO &amp; Résultats
                                    </h3>
                                    <p className="text-gray-600 text-sm m-0">
                                        Un site pro est conçu pour la <strong>création site internet Maroc</strong>. Il est structuré pour que Google vous mette en avant, vous apportant des clients sans que vous ayez à courir après eux.
                                    </p>
                                    <Link href="/creation-site-web-maroc" className="inline-flex items-center gap-1 text-primary-600 font-bold text-xs mt-4 hover:underline">
                                        Découvrez nos solutions de création de site web au Maroc &rarr;
                                    </Link>
                                </div>
                            </div>
                        </section>

                        <section id="investissement" className="mb-16">
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-950 mb-6 font-display">Combien faut-il vraiment investir pour quelque chose de sérieux ?</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Arrêtons de parler de prix, parlons d&apos;investissement. Un site qui vous rapporte 10 clients par mois est gratuit, quel que soit son coût initial.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Au Maroc, pour avoir quelque chose de solide, les prix réalistes commencent autour de <strong>2 800 DH</strong> pour un site professionnel vitrine. Si vous voulez dominer votre secteur avec un site totalement optimisé pour le SEO, comptez à partir de <strong>4 000 DH</strong>.
                            </p>
                            <div className="bg-primary-50 p-6 rounded-2xl border border-primary-100 italic text-primary-900 m-0">
                                &quot;C&apos;est moins cher qu&apos;un pack de spots publicitaires à la radio et ça travaille pour vous 24h/24, 7j/7 pendant des années.&quot;
                            </div>
                        </section>

                        <section id="conclusion" className="mb-16 pt-10 border-t border-gray-100">
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-950 mb-6 font-display">Conclusion : Soyez plus malin que le &quot;Gratuit&quot;</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Si vous débutez, je ne vous en veux pas. Mais ne restez pas bloqués dans le piège de la gratuité. Le web marocain est devenu compétitif. Pour gagner, il faut être sérieux.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-10">
                                Pensez à long terme. Votre site est le cœur de votre entreprise digitale. Donnez-lui les moyens de battre fort.
                            </p>

                            <div className="bg-gray-950 rounded-[40px] p-8 md:p-12 text-center text-white relative overflow-hidden">
                                <div className="relative z-10">
                                    <h3 className="text-2xl md:text-3xl font-bold mb-6">Prêt à passer à la vitesse supérieure ?</h3>
                                    <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
                                        Ne laissez pas un outil gratuit limiter vos ambitions. Discutons de votre projet et construisons ensemble une présence qui rapporte.
                                    </p>
                                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                        <a href={`https://wa.me/${phone}`} className="inline-flex items-center justify-center gap-2 bg-primary-500 text-white px-8 py-4 rounded-full font-bold hover:bg-primary-600 transition-all">
                                            Me contacter sur WhatsApp
                                        </a>
                                        <Link href="/contact" className="bg-white/10 text-white border border-white/20 px-8 py-4 rounded-full font-bold hover:bg-white/20 transition-all">
                                            Demander une étude gratuite
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section id="faq" className="mb-16">
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-950 mb-8 font-display">Questions Fréquentes (FAQ)</h2>
                            <div className="space-y-8">
                                <div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-2 flex items-start gap-2">
                                        <HelpCircle className="w-5 h-5 text-primary-600 mt-1 flex-shrink-0" />
                                        Un site gratuit peut-il apparaître sur Google ?
                                    </h3>
                                    <p className="text-gray-600 pl-7 leading-relaxed m-0 text-sm">
                                        Techniquement oui, mais c&apos;est extrêmement difficile. Les sites gratuits manquent d&apos;autorité de domaine et de structure technique optimisée, ce qui les relègue souvent loin dans les résultats de recherche.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-2 flex items-start gap-2">
                                        <HelpCircle className="w-5 h-5 text-primary-600 mt-1 flex-shrink-0" />
                                        Wix est-il bon pour le SEO au Maroc ?
                                    </h3>
                                    <p className="text-gray-600 pl-7 leading-relaxed m-0 text-sm">
                                        Wix s&apos;est amélioré, mais sa version gratuite reste catastrophique pour le SEO local au Maroc : URL non professionnelle, lenteur et impossibilité de configurer certains paramètres avancés de visibilité.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-2 flex items-start gap-2">
                                        <HelpCircle className="w-5 h-5 text-primary-600 mt-1 flex-shrink-0" />
                                        Facebook suffit-il pour un business ?
                                    </h3>
                                    <p className="text-gray-600 pl-7 leading-relaxed m-0 text-sm">
                                        Facebook est un excellent complément, mais il ne remplace pas un site. Sur Facebook, vous louez votre audience. Sur votre site, vous êtes chez vous. De plus, beaucoup de clients cherchent sur Google avant d&apos;acheter.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-2 flex items-start gap-2">
                                        <HelpCircle className="w-5 h-5 text-primary-600 mt-1 flex-shrink-0" />
                                        Combien coûte un vrai site web au Maroc ?
                                    </h3>
                                    <p className="text-gray-600 pl-7 leading-relaxed m-0 text-sm">
                                        Pour un résultat professionnel et sérieux, comptez environ 2 800 DH pour un site vitrine de qualité et à partir de 4 000 DH pour une solution totalement optimisée pour le SEO.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-2 flex items-start gap-2">
                                        <HelpCircle className="w-5 h-5 text-primary-600 mt-1 flex-shrink-0" />
                                        Est-ce que Google pénalise les sites gratuits ?
                                    </h3>
                                    <p className="text-gray-600 pl-7 leading-relaxed m-0 text-sm">
                                        Google ne &quot;pénalise&quot; pas directement, mais il favorise les sites qui offrent une excellente expérience utilisateur, de la crédibilité et une technique irréprochable. Ce que les plateformes gratuites ne permettent pas.
                                    </p>
                                </div>
                            </div>
                        </section>
                    </div>

                    <footer className="mt-20 pt-12 border-t border-gray-100">
                        <div className="flex items-center justify-between mb-8">
                            <h3 className="text-xl font-bold text-gray-950">D&apos;autres articles qui pourraient vous intéresser</h3>
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
                            Passez du &quot;gratuit&quot; au <span className="text-primary-400">professionnel</span>
                        </h2>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                            Ne laissez pas votre image de marque au hasard. Investissez dans un outil de croissance qui vous appartient à 100%.
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
