

import React from 'react';
import Link from 'next/link';
import { Lock, ArrowLeft, ShieldCheck } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Privacy Policy | Sitepro.ma',
    description: 'Learn how Sitepro.ma protects your personal data in compliance with Moroccan law 09-08 (CNDP).',
    alternates: {
        canonical: 'https://sitepro.ma/en/privacy-policy',
        languages: {
            'fr-MA': 'https://sitepro.ma/politique-de-confidentialite',
        },
    },
};

export default function EnPrivacyPolicyPage() {
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
                            <Lock size={28} />
                        </div>
                        <h1 className="text-3xl md:text-4xl font-black text-[#022545]">
                            Privacy Policy
                        </h1>
                    </div>

                    <div className="prose prose-blue max-w-none text-gray-600 space-y-6">
                        <p>
                            Protecting your personal data is a priority for <strong>Sitepro.ma</strong>. This policy details how we collect, use, and protect your information.
                        </p>

                        <section>
                            <h2 className="text-xl font-bold text-[#022545] mb-3">1. Data Collection</h2>
                            <p>We collect information when:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>You fill out a contact form on our site.</li>
                                <li>You contact us by phone or WhatsApp.</li>
                                <li>You browse our site (anonymous browsing data).</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-[#022545] mb-3">2. Use of Data</h2>
                            <p>The data collected is used to:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Respond to your requests for quotes or information.</li>
                                <li>Improve the user experience on our site.</li>
                                <li>Monitor the commercial follow-up of our prospects and clients.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-[#022545] mb-3">3. Compliance with Law 09-08 (Morocco)</h2>
                            <p>
                                In accordance with <strong>Law No. 09-08</strong> relating to the protection of individuals with regard to the processing of personal data, you have a right of access, rectification, and opposition to the processing of your personal data.
                            </p>
                            <p>
                                To exercise these rights, you can contact us at: <a href="mailto:contact@sitepro.ma" className="text-primary-600 underline">contact@sitepro.ma</a>.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-[#022545] mb-3">4. Security</h2>
                            <p>
                                We implement a variety of security measures to maintain the safety of your personal information. We use state-of-the-art encryption (SSL) to protect sensitive information transmitted online.
                            </p>
                        </section>

                        <section className="bg-green-50 p-6 rounded-2xl border border-green-100 flex gap-4 items-start">
                            <ShieldCheck className="text-green-600 flex-shrink-0" size={24} />
                            <div>
                                <h3 className="font-bold text-[#022545] mb-1">CNDP Commitment</h3>
                                <p className="text-sm">
                                    Sitepro is committed to respecting the deliberations of the National Commission for the Control of Personal Data Protection (CNDP).
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
