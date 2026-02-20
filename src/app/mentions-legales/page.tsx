

import React from 'react';
import Link from 'next/link';
import { Info, ArrowLeft, Landmark } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Mentions Légales | Sitepro.ma',
    description: 'Informations légales sur l\'éditeur du site Sitepro.ma et les conditions d\'hébergement.',
    alternates: {
        canonical: 'https://sitepro.ma/mentions-legales',
        languages: {
            'en-MA': 'https://sitepro.ma/en/legal-notice',
        },
    },
};

export default function MentionsLegalesPage() {
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
                            <Info size={28} />
                        </div>
                        <h1 className="text-3xl md:text-4xl font-black text-[#022545]">
                            Mentions Légales
                        </h1>
                    </div>

                    <div className="prose prose-blue max-w-none text-gray-600 space-y-6">
                        <section className="grid md:grid-cols-2 gap-8 not-prose">
                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                                <h3 className="font-bold text-[#022545] mb-4 flex items-center gap-2">
                                    <Landmark size={18} className="text-primary-600" />
                                    Éditeur du site
                                </h3>
                                <div className="space-y-2 text-sm">
                                    <p><strong>Dénomination :</strong> Sitepro</p>
                                    <p><strong>Forme juridique :</strong> SARL</p>
                                    <p><strong>Siège social :</strong> Avenue Mohammed VI, Marrakech, Maroc</p>
                                    <p><strong>Contact :</strong> contact@sitepro.ma</p>
                                    <p><strong>Téléphone :</strong> +212 6 63 71 11 64</p>
                                </div>
                            </div>

                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                                <h3 className="font-bold text-[#022545] mb-4 flex items-center gap-2">
                                    <Landmark size={18} className="text-primary-600" />
                                    Hébergement
                                </h3>
                                <div className="space-y-2 text-sm">
                                    <p><strong>Hébergeur :</strong> Hostinger</p>
                                    <p><strong>Site web :</strong> www.hostinger.com</p>
                                </div>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-[#022545] mb-3">Propriété intellectuelle</h2>
                            <p>
                                L'ensemble de ce site relève de la législation internationale sur le droit d'auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-[#022545] mb-3">Limitation de responsabilité</h2>
                            <p>
                                Sitepro s'efforce d'assurer au mieux de ses possibilités, l'exactitude et la mise à jour des informations diffusées sur ce site. Toutefois, nous ne pouvons garantir l'exactitude, la précision ou l'exhaustivité des informations mises à la disposition sur ce site.
                            </p>
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
