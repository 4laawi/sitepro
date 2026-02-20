

import React from 'react';
import Link from 'next/link';
import { FileText, ArrowLeft, HelpCircle } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Terms of Service | Sitepro.ma',
    description: 'Consult the general terms of service for website creation and digital marketing by Sitepro in Morocco.',
    alternates: {
        canonical: 'https://sitepro.ma/en/terms-of-service',
        languages: {
            'fr-MA': 'https://sitepro.ma/cgv',
        },
    },
};

export default function EnTermsOfServicePage() {
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
                            <FileText size={28} />
                        </div>
                        <h1 className="text-3xl md:text-4xl font-black text-[#022545]">
                            Terms of Service
                        </h1>
                    </div>

                    <div className="prose prose-blue max-w-none text-gray-600 space-y-6">
                        <p>
                            These General Terms of Sale (GTOS) apply to all services provided by <strong>Sitepro</strong>.
                        </p>

                        <section>
                            <h2 className="text-xl font-bold text-[#022545] mb-3">1. Objective</h2>
                            <p>
                                Sitepro offers website creation, digital marketing, SEO, and technical maintenance services. The client accepts these GTOS without reservation upon signing a quote.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-[#022545] mb-3">2. Quotations and Orders</h2>
                            <p>
                                All services are subject to a prior quotation. An order is considered firm and final upon receipt of the signed quote accompanied by the agreed deposit (generally 50%).
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-[#022545] mb-3">3. Pricing and Payment</h2>
                            <p>
                                Prices are indicated in Dirhams (MAD). Payment is made by bank transfer or check. In case of late payment, penalties may apply.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-[#022545] mb-3">4. Delivery Times</h2>
                            <p>
                                Delivery times are given as an indication in the quote. Sitepro cannot be held responsible for delays due to the non-transmission of elements by the client (texts, images, access).
                            </p>
                        </section>

                        <section className="bg-blue-50 p-6 rounded-2xl border border-blue-100 flex gap-4 items-start">
                            <HelpCircle className="text-blue-600 flex-shrink-0" size={24} />
                            <div>
                                <h3 className="font-bold text-[#022545] mb-1">Need more information?</h3>
                                <p className="text-sm">
                                    For any questions regarding our terms of sale, please do not hesitate to contact us directly.
                                </p>
                            </div>
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
