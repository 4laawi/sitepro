

import React from 'react';
import Link from 'next/link';
import { Info, ArrowLeft, Landmark } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Legal Notice | Sitepro.ma',
    description: 'Legal information about the publisher of the Sitepro.ma website and hosting details.',
    alternates: {
        canonical: 'https://sitepro.ma/en/legal-notice',
        languages: {
            'fr-MA': 'https://sitepro.ma/mentions-legales',
        },
    },
};

export default function EnLegalNoticePage() {
    return (
        <div className="min-h-screen bg-gray-50 pt-32 pb-20">
            <div className="container mx-auto px-4 max-w-4xl">
                <Link
                    href="/en"
                    className="inline-flex items-center gap-2 text-primary-600 font-semibold mb-8 hover:gap-3 transition-all"
                >
                    <ArrowLeft size={20} />
                    Back to Home
                </Link>

                <div className="bg-white rounded-[2rem] p-8 md:p-12 shadow-sm border border-gray-100">
                    <div className="flex items-center gap-4 mb-8">
                        <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center text-primary-600">
                            <Info size={28} />
                        </div>
                        <h1 className="text-3xl md:text-4xl font-black text-[#022545]">
                            Legal Notice
                        </h1>
                    </div>

                    <div className="prose prose-blue max-w-none text-gray-600 space-y-6">
                        <section className="grid md:grid-cols-2 gap-8 not-prose">
                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                                <h3 className="font-bold text-[#022545] mb-4 flex items-center gap-2">
                                    <Landmark size={18} className="text-primary-600" />
                                    Site Publisher
                                </h3>
                                <div className="space-y-2 text-sm">
                                    <p><strong>Name:</strong> Sitepro</p>
                                    <p><strong>Legal Form:</strong> SARL</p>
                                    <p><strong>Headquarters:</strong> Mohammed VI Avenue, Marrakech, Morocco</p>
                                    <p><strong>Contact:</strong> contact@sitepro.ma</p>
                                    <p><strong>Phone:</strong> +212 6 63 71 11 64</p>
                                </div>
                            </div>

                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                                <h3 className="font-bold text-[#022545] mb-4 flex items-center gap-2">
                                    <Landmark size={18} className="text-primary-600" />
                                    Hosting
                                </h3>
                                <div className="space-y-2 text-sm">
                                    <p><strong>Host:</strong> Hostinger</p>
                                    <p><strong>Website:</strong> www.hostinger.com</p>
                                </div>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-[#022545] mb-3">Intellectual Property</h2>
                            <p>
                                The entire contents of this site are subject to international legislation on copyright and intellectual property. All reproduction rights are reserved, including for downloadable documents and iconographic and photographic representations.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-[#022545] mb-3">Limitation of Liability</h2>
                            <p>
                                Sitepro strives to ensure to the best of its abilities the accuracy and updating of the information disseminated on this site. However, we cannot guarantee the accuracy, precision, or completeness of the information made available on this site.
                            </p>
                        </section>

                        <div className="pt-8 border-t border-gray-100 text-sm text-gray-400">
                            Last updated: {new Date().toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
