

import React from 'react';
import Link from 'next/link';
import { Lock, ArrowLeft, ShieldCheck } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Politique de Confidentialité | Sitepro.ma',
    description: 'Découvrez comment Sitepro.ma protège vos données personnelles en conformité avec la loi marocaine 09-08 (CNDP).',
    alternates: {
        canonical: 'https://sitepro.ma/politique-de-confidentialite',
        languages: {
            'en-MA': 'https://sitepro.ma/en/privacy-policy',
        },
    },
};

export default function PrivacyPolicyPage() {
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
                            <Lock size={28} />
                        </div>
                        <h1 className="text-3xl md:text-4xl font-black text-[#022545]">
                            Politique de Confidentialité
                        </h1>
                    </div>

                    <div className="prose prose-blue max-w-none text-gray-600 space-y-6">
                        <p>
                            La protection de vos données personnelles est une priorité pour <strong>Sitepro.ma</strong>. Cette politique détaille comment nous collectons, utilisons et protégeons vos informations.
                        </p>

                        <section>
                            <h2 className="text-xl font-bold text-[#022545] mb-3">1. Collecte des données</h2>
                            <p>Nous collectons des informations lorsque :</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Vous remplissez un formulaire de contact sur notre site.</li>
                                <li>Vous nous contactez par téléphone ou WhatsApp.</li>
                                <li>Vous naviguez sur notre site (données anonymes de navigation).</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-[#022545] mb-3">2. Utilisation des données</h2>
                            <p>Les données collectées sont utilisées pour :</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Répondre à vos demandes de devis ou d'informations.</li>
                                <li>Améliorer l'expérience utilisateur sur notre site.</li>
                                <li>Assurer le suivi commercial de nos prospects et clients.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-[#022545] mb-3">3. Conformité Loi 09-08 (Maroc)</h2>
                            <p>
                                Conformément à la <strong>Loi n° 09-08</strong> relative à la protection des personnes physiques à l'égard du traitement des données à caractère personnel, vous disposez d'un droit d'accès, de rectification et d'opposition au traitement de vos données personnelles.
                            </p>
                            <p>
                                Pour exercer ces droits, vous pouvez nous contacter à : <a href="mailto:contact@sitepro.ma" className="text-primary-600 underline">contact@sitepro.ma</a>.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-[#022545] mb-3">4. Sécurité</h2>
                            <p>
                                Nous mettons en œuvre une variété de mesures de sécurité pour préserver la sécurité de vos informations personnelles. Nous utilisons un cryptage à la pointe de la technologie (SSL) pour protéger les informations sensibles transmises en ligne.
                            </p>
                        </section>

                        <section className="bg-green-50 p-6 rounded-2xl border border-green-100 flex gap-4 items-start">
                            <ShieldCheck className="text-green-600 flex-shrink-0" size={24} />
                            <div>
                                <h3 className="font-bold text-[#022545] mb-1">Engagement CNDP</h3>
                                <p className="text-sm">
                                    Sitepro s'engage à respecter les délibérations de la Commission Nationale de contrôle de la protection des Données à caractère Personnel (CNDP).
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
