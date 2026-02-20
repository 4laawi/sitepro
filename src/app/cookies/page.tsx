

import React from 'react';
import Link from 'next/link';
import { Shield, Cookie, ArrowLeft } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Politique des Cookies | Sitepro.ma',
    description: 'Informations sur l\'utilisation des cookies sur le site Sitepro.ma. Nous protégeons votre vie privée conformément à la loi marocaine 09-08.',
    alternates: {
        canonical: 'https://sitepro.ma/cookies',
        languages: {
            'en-MA': 'https://sitepro.ma/en/cookies',
        },
    },
};

export default function CookiesPage() {
    return (
        <div className="min-h-screen bg-gray-50 pt-32 pb-20">
            <div className="container mx-auto px-4 max-w-4xl">
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 text-primary-600 font-semibold mb-8 hover:gap-3 transition-all"
                >
                    <ArrowLeft size={20} />
                    Retour à l'accueil
                </Link>

                <div className="bg-white rounded-[2rem] p-8 md:p-12 shadow-sm border border-gray-100">
                    <div className="flex items-center gap-4 mb-8">
                        <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center text-primary-600">
                            <Cookie size={28} />
                        </div>
                        <h1 className="text-3xl md:text-4xl font-black text-[#022545]">
                            Politique des Cookies
                        </h1>
                    </div>

                    <div className="prose prose-blue max-w-none text-gray-600 space-y-6">
                        <p>
                            Cette politique explique comment <strong>Sitepro.ma</strong> utilise les cookies et technologies similaires pour vous reconnaître lorsque vous visitez notre site web.
                        </p>

                        <section>
                            <h2 className="text-xl font-bold text-[#022545] mb-3">Qu'est-ce qu'un cookie ?</h2>
                            <p>
                                Les cookies sont de petits fichiers texte qui sont stockés sur votre ordinateur ou appareil mobile lorsque vous visitez un site web. Ils sont largement utilisés pour faire fonctionner les sites web ou pour les faire fonctionner plus efficacement, ainsi que pour fournir des informations aux propriétaires du site.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-[#022545] mb-3">Pourquoi utilisons-nous des cookies ?</h2>
                            <p>
                                Nous utilisons des cookies pour plusieurs raisons :
                            </p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li><strong>Cookies essentiels :</strong> Nécessaires au fonctionnement technique du site.</li>
                                <li><strong>Cookies de performance :</strong> Pour analyser comment les visiteurs utilisent le site et surveiller les performances du site (via Google Analytics).</li>
                                <li><strong>Cookies de fonctionnalité :</strong> Pour mémoriser vos préférences (comme la langue choisie).</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-[#022545] mb-3">Google Analytics</h2>
                            <p>
                                Notre site utilise Google Analytics, un service d'analyse web fourni par Google. Google Analytics utilise des cookies pour nous aider à analyser l'utilisation du site par les utilisateurs. Les informations générées par le cookie concernant votre utilisation du site seront transmises et stockées par Google.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-[#022545] mb-3">Comment gérer les cookies ?</h2>
                            <p>
                                Vous pouvez configurer votre navigateur pour refuser les cookies ou pour vous avertir lorsqu'un cookie est envoyé. La plupart des navigateurs vous permettent de :
                            </p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Voir quels cookies vous avez et les supprimer individuellement.</li>
                                <li>Bloquer les cookies tiers.</li>
                                <li>Bloquer les cookies de sites spécifiques.</li>
                                <li>Bloquer tous les cookies.</li>
                                <li>Supprimer tous les cookies lorsque vous fermez votre navigateur.</li>
                            </ul>
                        </section>

                        <section className="bg-primary-50 p-6 rounded-2xl border border-primary-100 flex gap-4 items-start">
                            <Shield className="text-primary-600 flex-shrink-0" size={24} />
                            <div>
                                <h3 className="font-bold text-[#022545] mb-1">Votre vie privée est importante</h3>
                                <p className="text-sm">
                                    Conformément à la loi marocaine 09-08, nous nous engageons à protéger vos données personnelles. Pour plus d'informations, consultez notre <Link href="/politique-de-confidentialite" className="text-primary-600 underline">Politique de Confidentialité</Link>.
                                </p>
                            </div>
                        </section>

                        <div className="pt-8 border-t border-gray-100 text-sm text-gray-400">
                            Dernière mise à jour : {new Date().toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
