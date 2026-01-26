import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, Share2, Calendar, Clock, ChevronRight, CheckCircle2, AlertCircle, HelpCircle } from 'lucide-react'
import ClientMotionWrapper from '@/components/ClientMotionWrapper'

export const metadata: Metadata = {
    title: 'Combien coûte un site web au Maroc en 2026 ? Prix réels et conseils d\'expert',
    description: 'Guide transparent sur le coût de création d\'un site web au Maroc. Découvrez les tarifs réels, évitez les pièges et apprenez à investir intelligemment.',
    alternates: { canonical: '/blog/combien-coute-site-web-maroc' },
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
                    <span className="text-gray-900 font-medium line-clamp-1">Prix site web Maroc 2026</span>
                </nav>

                <article className="max-w-4xl mx-auto">
                    {/* Header */}
                    <header className="mb-12">
                        <Link href="/blog" className="inline-flex items-center gap-2 text-primary-600 font-bold text-sm mb-8 hover:gap-3 transition-all">
                            <ArrowLeft className="w-4 h-4" /> Retour au blog
                        </Link>
                        <div className="flex gap-3 mb-6">
                            <span className="px-3 py-1 bg-primary-100 text-primary-600 text-[10px] font-bold rounded-full uppercase tracking-wider">Expertise Web</span>
                            <span className="px-3 py-1 bg-gray-100 text-gray-600 text-[10px] font-bold rounded-full uppercase tracking-wider">Conseils Business</span>
                        </div>
                        <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-gray-950 mb-8 leading-tight">
                            Combien coûte un site web professionnel au Maroc en 2026 ? Prix réels, pièges et conseils
                        </h1>

                        <div className="flex flex-wrap items-center gap-6 py-8 border-y border-gray-100">
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 rounded-full bg-primary-500 relative overflow-hidden">
                                    <Image src="/Untitled design (3).webp" alt="Ali Taghi" fill className="object-cover" />
                                </div>
                                <div>
                                    <span className="block text-gray-950 font-bold text-sm">Ali Taghi</span>
                                    <span className="block text-gray-500 text-xs uppercase tracking-wider">Consultant Web Senior</span>
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
                            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2000"
                            alt="Prix création site web Maroc"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>

                    {/* Content */}
                    <div className="prose prose-lg prose-primary max-w-none">

                        <section id="introduction" className="mb-16">
                            <p className="text-xl text-gray-700 leading-relaxed mb-6 font-medium">
                                Si vous lisez ces lignes, c'est probablement que vous avez déjà reçu trois devis différents pour votre projet, et que vous êtes plus confus qu'au départ. L'un vous propose un site à 800 DH, l'autre à 5 000 DH, et une agence de Casablanca vous demande 40 000 DH.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Dans mon métier de consultant, j'ai vu passer des centaines de projets à travers tout le Maroc. Des cafés de quartier aux cabinets d'avocats, le problème est toujours le même : comment savoir ce qu'un site web vaut vraiment ? On ne parle pas d'un simple achat, mais de l'image de votre business.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Au Maroc, le marché du web est une jungle. Entre les freelancers qui disparaissent après le premier acompte et les agences qui facturent des options inutiles, il est facile de se tromper. Mon but aujourd'hui est d'être totalement transparent avec vous. On va parler de prix réels, de ce que vous payez vraiment et surtout, de comment éviter de jeter votre argent par la fenêtre.
                            </p>
                        </section>

                        <section id="pourquoi-les-prix-varient" className="mb-16">
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-950 mb-6 font-display">Pourquoi les prix des sites web varient autant au Maroc</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                C'est la question que me posent tous les entrepreneurs. "Ali, c'est du code, non ? Pourquoi un tel écart ?"
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                La vérité, c'est qu'un site web à 1 000 DH et un site à 5 000 DH ne sont pas les mêmes produits. Voici pourquoi :
                            </p>
                            <ul className="list-disc pl-6 space-y-4 text-gray-700 mb-6">
                                <li>
                                    <strong>Freelancer vs Agence :</strong> Un freelancer qui travaille de chez lui a moins de charges qu'une agence avec des bureaux et une équipe. Mais l'agence offre une garantie de suivi que le freelancer, souvent seul, ne peut pas toujours assurer sur le long terme.
                                </li>
                                <li>
                                    <strong>Template vs Sur-mesure :</strong> Utiliser un modèle (template) tout prêt prend 2 jours. Créer une structure pensée pour vos clients et votre secteur prend 2 semaines. Le résultat sur vos ventes ne sera pas le même.
                                </li>
                                <li>
                                    <strong>Site vitrine vs Site "Aimant à clients" :</strong> Un site joli qui reste aux oubliettes de Google ne sert à rien. Un site optimisé pour le SEO (référencement) demande un travail de fond technique et rédactionnel qui justifie un prix plus élevé.
                                </li>
                                <li>
                                    <strong>Coûts cachés :</strong> Hébergement, nom de domaine, maintenance, certificats SSL de sécurité... Certains ne mentionnent pas ces frais dans le devis initial pour paraître moins chers.
                                </li>
                            </ul>
                        </section>

                        <section id="prix-reels" className="mb-16 bg-gray-50 p-8 md:p-12 rounded-[40px] border border-gray-100">
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-950 mb-8 font-display text-center">Les tarifs réels du marché en 2026</h2>

                            <div className="grid gap-8">
                                <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
                                    <div className="flex justify-between items-start mb-4">
                                        <h3 className="text-xl font-bold text-gray-950">Site Vitrine Professionnel</h3>
                                        <span className="text-primary-600 font-black text-xl">~ 2 800 DH</span>
                                    </div>
                                    <p className="text-gray-600 text-sm mb-4 italic">Le choix de la crédibilité immédiate.</p>
                                    <ul className="space-y-2 text-gray-700 text-sm">
                                        <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> Design propre et responsive</li>
                                        <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> Vitesse de chargement optimisée</li>
                                        <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> Page services et contact</li>
                                    </ul>
                                </div>

                                <div className="bg-white p-6 rounded-3xl shadow-md border-2 border-primary-500 relative overflow-hidden">
                                    <div className="absolute top-0 right-0 bg-primary-500 text-white px-4 py-1 text-[10px] font-bold uppercase tracking-widest">Recommandé</div>
                                    <div className="flex justify-between items-start mb-4">
                                        <h3 className="text-xl font-bold text-gray-950">Site Complet + SEO Optimisé</h3>
                                        <span className="text-primary-600 font-black text-xl">~ 4 000 DH</span>
                                    </div>
                                    <p className="text-gray-600 text-sm mb-4 italic">L'outil de croissance pour dominer votre secteur.</p>
                                    <ul className="space-y-2 text-gray-700 text-sm">
                                        <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> Structure pensée pour Google</li>
                                        <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> Plusieurs pages de services détaillées</li>
                                        <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> Multilingue (Français/Arabe)</li>
                                        <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> Prêt pour le SEO local</li>
                                    </ul>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="bg-white/50 p-6 rounded-3xl border border-gray-200">
                                        <h3 className="font-bold text-gray-950 mb-2">Site E-commerce</h3>
                                        <p className="text-primary-600 font-bold mb-2">6 000 DH à 15 000 DH+</p>
                                        <p className="text-xs text-gray-600">Selon le nombre de produits et les fonctionnalités (paiement CMI, gestion de stock).</p>
                                    </div>
                                    <div className="bg-white/50 p-6 rounded-3xl border border-gray-200">
                                        <h3 className="font-bold text-gray-950 mb-2">Landing Page Simple</h3>
                                        <p className="text-primary-600 font-bold mb-2">~ 1 500 DH</p>
                                        <p className="text-xs text-gray-600">Parfait pour une campagne publicitaire spécifique ou un lancement de produit.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8 pt-8 border-t border-gray-200 text-center">
                                <p className="text-gray-600 text-sm">
                                    <strong>Maintenance mensuelle :</strong> Comptez environ 200 à 500 DH/mois pour les mises à jour de sécurité et les petites modifications.
                                </p>
                            </div>
                        </section>

                        <section id="checklist-exigences" className="mb-16">
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-950 mb-6 font-display">Ce que vous devez ABSOLUMENT exiger</h2>
                            <p className="text-gray-700 mb-8">
                                Ne signez aucun devis sans vous assurer que ces points sont inclus. C’est votre assurance de ne pas être bloqué demain.
                            </p>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="flex gap-4 p-4 border border-gray-100 rounded-2xl">
                                    <CheckCircle2 className="text-primary-600 flex-shrink-0" />
                                    <div>
                                        <span className="font-bold block text-gray-900">Propriété totale</span>
                                        <span className="text-sm text-gray-600">Le nom de domaine et l'hébergement doivent être à votre nom, pas celui de l'agence.</span>
                                    </div>
                                </div>
                                <div className="flex gap-4 p-4 border border-gray-100 rounded-2xl">
                                    <CheckCircle2 className="text-primary-600 flex-shrink-0" />
                                    <div>
                                        <span className="font-bold block text-gray-900">Accès administrateur</span>
                                        <span className="text-sm text-gray-600">Vous devez avoir les codes WordPress ou du CMS utilisé. C'est votre maison.</span>
                                    </div>
                                </div>
                                <div className="flex gap-4 p-4 border border-gray-100 rounded-2xl">
                                    <CheckCircle2 className="text-primary-600 flex-shrink-0" />
                                    <div>
                                        <span className="font-bold block text-gray-900">Vitesse et Performance</span>
                                        <span className="text-sm text-gray-600">Un site qui met plus de 3 secondes à charger fait fuir 50% de vos clients.</span>
                                    </div>
                                </div>
                                <div className="flex gap-4 p-4 border border-gray-100 rounded-2xl">
                                    <CheckCircle2 className="text-primary-600 flex-shrink-0" />
                                    <div>
                                        <span className="font-bold block text-gray-900">SEO de base inclus</span>
                                        <span className="text-sm text-gray-600">Les balises titres et descriptions doivent être configurées proprement dès le départ.</span>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section id="pieges-courants" className="mb-16">
                            <div className="bg-red-50 p-8 md:p-12 rounded-[40px] border border-red-100">
                                <h2 className="text-2xl md:text-3xl font-bold text-red-950 mb-6 font-display flex items-center gap-3">
                                    <AlertCircle className="text-red-600" /> Attention : Les pièges classiques au Maroc
                                </h2>
                                <div className="space-y-6">
                                    <p className="text-red-900 leading-relaxed">
                                        Soyons directs. J'ai vu trop d'entrepreneurs marocains se faire avoir par des promesses trop belles pour être vraies.
                                    </p>
                                    <ul className="space-y-4">
                                        <li className="flex gap-4">
                                            <span className="font-black text-red-600 text-xl">01</span>
                                            <div>
                                                <span className="font-bold block text-red-950">Le site à 500 DH</span>
                                                <span className="text-sm text-red-800">C'est souvent un étudiant ou un amateur. Il fera le travail, mais si le site tombe en panne dans 2 mois ou si vous avez besoin d'une modif urgente... bon courage pour le retrouver.</span>
                                            </div>
                                        </li>
                                        <li className="flex gap-4">
                                            <span className="font-black text-red-600 text-xl">02</span>
                                            <div>
                                                <span className="font-bold block text-red-950">Le "SEO Magique"</span>
                                                <span className="text-sm text-red-800">Celui qui vous promet d'être premier sur Google en une semaine ment. Le SEO au Maroc demande du temps, du bon contenu et de la technique.</span>
                                            </div>
                                        </li>
                                        <li className="flex gap-4">
                                            <span className="font-black text-red-600 text-xl">03</span>
                                            <div>
                                                <span className="font-bold block text-red-950">Beau mais inutile</span>
                                                <span className="text-sm text-red-800">Des sites avec des animations partout, des vidéos lourdes, mais aucun bouton d'appel clair. Ça flatte l'ego, mais ça ne remplit pas le carnet de commandes.</span>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        <section id="site-vs-seo" className="mb-16">
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-950 mb-6 font-display">Site web seul vs Site web + SEO : la vraie différence</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Imaginez que vous ouvrez un showroom magnifique, mais que vous l'installez au milieu du désert, sans aucune route pour y accéder. C'est exactement ce qu'est un site web sans SEO. Vous savez qu'il existe, mais vos futurs clients ne le voient jamais.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Au Maroc, le <strong>SEO local</strong> est devenu vital. Quand quelqu'un cherche "médecin à Tanger" ou "expert-comptable Casablanca", il ne regarde que les 3 premiers résultats. Si vous n'y êtes pas, vous n'existez pas pour lui.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-8 italic border-l-4 border-primary-500 pl-6 py-2">
                                Un site web professionnel est une vitrine. Un site web avec SEO est un commercial qui travaille pour vous jour et nuit.
                            </p>
                            <div className="bg-primary-50 p-6 rounded-3xl border border-primary-100 flex flex-col md:flex-row items-center justify-between gap-6">
                                <p className="text-gray-900 font-bold mb-0">Besoin d'une solution qui vous ramène vraiment des clients ?</p>
                                <Link href="/creation-site-web-maroc" className="bg-primary-600 text-white px-6 py-3 rounded-full font-bold hover:bg-primary-700 transition-colors whitespace-nowrap">
                                    Découvrir notre approche experte
                                </Link>
                            </div>
                        </section>

                        <section id="choisir-prestataire" className="mb-16">
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-950 mb-6 font-display">Comment choisir le bon prestataire web au Maroc</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Ne choisissez pas un prix, choisissez un partenaire. Voici mes conseils après 40 ans de métier :
                            </p>
                            <ul className="space-y-6">
                                <li className="flex gap-4">
                                    <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0 text-gray-950 font-bold">1</div>
                                    <p className="text-gray-700"><strong className="text-gray-950">Regardez ses références :</strong> Ne vous saturez pas de logos. Appelez un de ses clients réels et demandez-lui si le site a été livré à temps et s'il est content du suivi.</p>
                                </li>
                                <li className="flex gap-4">
                                    <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0 text-gray-950 font-bold">2</div>
                                    <p className="text-gray-700"><strong className="text-gray-950">Posez des questions business :</strong> S'il ne parle que de "PHP", "React" ou "Hébergement", fuyez. Il doit vous parler de vos clients, de vos objectifs et de comment le site va vous aider à augmenter votre chiffre d'affaires.</p>
                                </li>
                                <li className="flex gap-4">
                                    <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0 text-gray-950 font-bold">3</div>
                                    <p className="text-gray-700"><strong className="text-gray-950">Le "Red Flag" ultime :</strong> Un prestataire qui accepte tout ce que vous dites sans jamais vous conseiller ou vous contredire. Un expert doit savoir vous dire "Non, cette idée va ralentir votre site" ou "Ce menu est trop compliqué pour vos utilisateurs".</p>
                                </li>
                            </ul>
                        </section>

                        <section id="conclusion" className="mb-16 pt-12 border-t border-gray-100">
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-950 mb-6 font-display text-center">En résumé : Ne sacrifiez pas votre futur pour une économie dérisoire</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Un site web est un investissement. Si vous payez 3 000 DH et que cela vous ramène un seul contrat à 10 000 DH par mois, votre site est gratuit dès les premiers jours. Si vous payez 500 DH pour un outil qui ne fonctionne pas, vous avez perdu 500 DH et beaucoup d'énergie.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-10">
                                Prenez le temps de réfléchir. Le Maroc digital de 2026 ne pardonne plus l'amateurisme. Vos clients comparent tout sur leur smartphone en quelques secondes. Soyez celui qui les rassure par votre professionnalisme.
                            </p>
                            <div className="bg-gray-950 rounded-[40px] p-8 md:p-12 text-center text-white">
                                <h3 className="text-2xl md:text-3xl font-bold mb-6">Un doute ? Un projet à Tanger, Casa ou Marrakech ?</h3>
                                <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
                                    On ne va pas vous vendre un site "magique". On va construire ensemble un outil solide pour votre réussite.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <a href={`https://wa.me/${phone}`} className="inline-flex items-center justify-center gap-2 bg-primary-500 text-white px-8 py-4 rounded-full font-bold hover:bg-primary-600 transition-all">
                                        Discuter sur WhatsApp
                                    </a>
                                    <Link href="/contact" className="bg-white/10 text-white border border-white/20 px-8 py-4 rounded-full font-bold hover:bg-white/20 transition-all">
                                        Demander un audit gratuit
                                    </Link>
                                </div>
                            </div>
                        </section>

                        <section id="faq" className="mb-16 pt-16 border-t border-gray-100">
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-950 mb-8 font-display flex items-center gap-3">
                                <HelpCircle className="text-primary-600" /> Foire aux questions (FAQ)
                            </h2>
                            <div className="space-y-6">
                                <div className="p-6 bg-gray-50 rounded-2xl">
                                    <h3 className="font-bold text-gray-950 mb-2">Combien coûte vraiment un site web au Maroc ?</h3>
                                    <p className="text-gray-700 text-sm">Pour un travail sérieux et professionnel incluant hébergement et domaine, comptez entre 2 500 et 4 500 DH pour une vitrine de qualité. Les sites e-commerce commencent généralement à 6 000 DH.</p>
                                </div>
                                <div className="p-6 bg-gray-50 rounded-2xl">
                                    <h3 className="font-bold text-gray-950 mb-2">Un site à 1 000 DH est-il suffisant ?</h3>
                                    <p className="text-gray-700 text-sm">C'est risqué. À ce prix, le prestataire ne peut pas passer plus de 3 ou 4 heures sur votre projet s'il veut être rentable. C'est l'assurance d'avoir un site générique, lent et sans aucun suivi.</p>
                                </div>
                                <div className="p-6 bg-gray-50 rounded-2xl">
                                    <h3 className="font-bold text-gray-950 mb-2">Le SEO est-il obligatoire pour mon site ?</h3>
                                    <p className="text-gray-700 text-sm">Obligatoire non, mais vital oui. Sans SEO, votre site est invisible. C'est comme imprimer des cartes de visite et les laisser dans un tiroir.</p>
                                </div>
                                <div className="p-6 bg-gray-50 rounded-2xl">
                                    <h3 className="font-bold text-gray-950 mb-2">Combien de temps pour apparaître sur Google ?</h3>
                                    <p className="text-gray-700 text-sm">Pour un site neuf, il faut compter entre 3 et 6 mois de travail constant en SEO local pour commencer à apparaître en première page sur les mots-clés de votre ville.</p>
                                </div>
                            </div>
                        </section>
                    </div>

                    <footer className="mt-20 pt-12 border-t border-gray-100">
                        <div className="flex items-center justify-between mb-8">
                            <h3 className="text-xl font-bold text-gray-950">D'autres lectures pour votre business</h3>
                            <Link href="/blog" className="text-primary-600 font-bold text-sm hover:underline">Voir tout le blog</Link>
                        </div>
                    </footer>
                </article>
            </div>
        </main>
    )
}
