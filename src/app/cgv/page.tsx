

import React from 'react';
import Link from 'next/link';
import { FileText, ArrowLeft, HelpCircle } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Conditions Générales de Vente (CGV) | Sitepro.ma',
    description: 'Consultez les conditions générales de vente des services de création de sites web et marketing digital par Sitepro au Maroc.',
    alternates: {
        canonical: 'https://sitepro.ma/cgv',
        languages: {
            'en-MA': 'https://sitepro.ma/en/terms-of-service',
        },
    },
};

export default function CGVPage() {
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
                            <FileText size={28} />
                        </div>
                        <h1 className="text-3xl md:text-4xl font-black text-[#022545]">
                            Conditions Générales de Vente
                        </h1>
                    </div>

                    <div className="prose prose-blue max-w-none text-gray-600 space-y-6">
                        <p>
                            Les présentes conditions générales de vente (CGV) s'appliquent à toutes les prestations de services fournies par <strong>Sitepro</strong>.
                        </p>

                        <section>
                            <h2 className="text-xl font-bold text-[#022545] mb-3">1. Objet</h2>
                            <p>
                                Sitepro propose des services de création de sites web, de marketing digital, de référencement SEO et de maintenance technique. Le client accepte sans réserve les présentes CGV dès la signature d'un devis.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-[#022545] mb-3">2. Devis et Commandes</h2>
                            <p>
                                Toute prestation fait l'objet d'un devis préalable. La commande est considérée comme ferme et définitive après réception du devis signé accompagné de l'acompte convenu (généralement 50%).
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-[#022545] mb-3">3. Tarifs et Paiement</h2>
                            <p>
                                Les prix sont indiqués en Dirhams (MAD). Le règlement s'effectue par virement bancaire ou chèque. En cas de retard de paiement, des pénalités pourront être appliquées.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-[#022545] mb-3">4. Délais de livraison</h2>
                            <p>
                                Les délais de livraison sont donnés à titre indicatif dans le devis. Sitepro ne pourra être tenu responsable des retards dus à la non-transmission des éléments par le client (textes, images, accès).
                            </p>
                        </section>

                        <section className="bg-blue-50 p-6 rounded-2xl border border-blue-100 flex gap-4 items-start">
                            <HelpCircle className="text-blue-600 flex-shrink-0" size={24} />
                            <div>
                                <h3 className="font-bold text-[#022545] mb-1">Besoin de plus amples informations ?</h3>
                                <p className="text-sm">
                                    Pour toute question concernant nos conditions de vente, n'hésitez pas à nous contacter directement.
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
