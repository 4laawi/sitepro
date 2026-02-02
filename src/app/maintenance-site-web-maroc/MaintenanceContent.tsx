'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
    ShieldCheck,
    Activity,
    CheckCircle2,
    ArrowRight,
    Zap,
    Lock,
    Cpu,
    TrendingUp,
    Phone,
    Mail
} from 'lucide-react';
import ClientMotionWrapper from '@/components/ClientMotionWrapper';
import FAQSection from '@/components/FAQSection';

const maintenanceFaq = [
    {
        question: "Pourquoi confier ma maintenance à Sitepro au Maroc ?",
        answer: "En confiant votre maintenance à Sitepro, vous bénéficiez d'une expertise locale réactive. Nous comprenons les enjeux des entreprises marocaines et offrons un support en français et en arabe, avec des interventions ultra-rapides pour minimiser tout temps d'arrêt."
    },
    {
        question: "Mon site a été créé par une autre agence, pouvez-vous assurer sa maintenance ?",
        answer: "Absolument. Nous effectuons un audit technique initial pour comprendre l'architecture de votre site, puis nous prenons le relais pour assurer sa sécurité, ses mises à jour et son optimisation continue."
    },
    {
        question: "Quelles sont les garanties en matière de sécurité des données ?",
        answer: "Nous mettons en œuvre les protocoles de sécurité les plus stricts, incluant des pare-feux avancés, des certificats SSL et des sauvegardes quotidiennes. De plus, nous veillons à la conformité avec la loi marocaine 09-08 (CNDP) sur la protection des données personnelles."
    },
    {
        question: "Comment se déroule le support technique ?",
        answer: "Nous disposons d'un système de tickets prioritaire. Pour toute urgence, nos techniciens interviennent dans l'heure. Vous recevez également un rapport mensuel détaillé sur l'état de santé et les performances de votre plateforme."
    }
];

export default function MaintenanceContent() {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: ''
    });

    const handleWhatsAppSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const phoneNumber = "212663711164";
        const message = `Bonjour Sitepro, je souhaite obtenir des informations sur la maintenance de mon site web.\nNom: ${formData.name}\nTél: ${formData.phone}\nEmail: ${formData.email}`;
        const encodedMessage = encodeURIComponent(message);
        window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
    };

    return (
        <div className="bg-white selection:bg-primary-100">
            {/* Hero Section */}
            <section className="relative overflow-hidden bg-white pt-16 pb-24 md:pt-24 md:pb-32">
                <div className="container px-4 mx-auto max-w-7xl relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <ClientMotionWrapper
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="space-y-8 text-center lg:text-left"
                        >
                            <div className="flex justify-center lg:justify-start">
                                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-50 text-primary-600 text-sm font-bold tracking-wide border border-primary-100 shadow-sm">
                                    <span className="flex h-2 w-2 rounded-full bg-primary-500 animate-pulse"></span>
                                    Maintenance & Support Web Maroc
                                </span>
                            </div>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#022545] leading-[1.1]">
                                Maintenance de <span className="text-primary-600">sites web au Maroc</span> : Performance & Sérénité
                            </h1>
                            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                                Ne laissez pas une faille technique freiner votre croissance. L&apos;agence Sitepro assure la <strong>surveillance</strong>, la <strong>sécurisation</strong> et l&apos;<strong>optimisation continue</strong> de vos plateformes web pour une tranquillité d&apos;esprit totale.
                            </p>
                            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start pt-4">
                                <Link href="/contact/" className="w-full sm:w-auto px-10 py-5 bg-[#022545] text-white rounded-2xl font-bold hover:bg-gray-800 transition-all shadow-xl shadow-gray-200 flex items-center justify-center gap-2 group">
                                    Demander un audit gratuit
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </Link>
                                <a href="mailto:contact@sitepro.ma" className="text-gray-500 font-bold hover:text-primary-600 transition-colors">
                                    contact@sitepro.ma
                                </a>
                            </div>
                        </ClientMotionWrapper>

                        <ClientMotionWrapper
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2 }}
                            className="relative"
                        >
                            <Image
                                src="/Purple and White Minimalist Your Business Needs a Website Instagram Post (12).webp"
                                alt="Service de maintenance web au Maroc - Sitepro"
                                width={1080}
                                height={1080}
                                className="w-full h-auto"
                                priority
                            />
                        </ClientMotionWrapper>
                    </div>
                </div>
            </section>

            {/* Callback Section */}
            <section className="bg-[#022545] py-20 relative overflow-hidden">
                <div className="absolute right-0 top-0 w-1/3 h-full bg-gradient-to-l from-primary-500/10 to-transparent"></div>
                <div className="container px-4 mx-auto max-w-5xl text-center relative z-10">
                    <ClientMotionWrapper
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-5xl font-black text-white mb-6">
                            Maintenance web : un conseiller <span className="text-primary-400">vous rappelle !</span>
                        </h2>
                        <p className="text-white/70 text-lg mb-12 max-w-2xl mx-auto">
                            Laissez vos coordonnées et un expert en support technique vous recontactera sous 15 minutes.
                        </p>

                        <form onSubmit={handleWhatsAppSubmit} className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                            <input
                                type="text"
                                placeholder="Nom complet"
                                required
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                className="w-full bg-white/5 border border-primary-500/30 rounded-2xl px-6 py-4 text-white placeholder-gray-400 focus:outline-none focus:border-primary-400 focus:bg-white/10 transition-all"
                            />
                            <input
                                type="tel"
                                placeholder="Téléphone"
                                required
                                value={formData.phone}
                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                className="w-full bg-white/5 border border-primary-500/30 rounded-2xl px-6 py-4 text-white placeholder-gray-400 focus:outline-none focus:border-primary-400 focus:bg-white/10 transition-all"
                            />
                            <input
                                type="email"
                                placeholder="Email"
                                required
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                className="w-full bg-white/5 border border-primary-500/30 rounded-2xl px-6 py-4 text-white placeholder-gray-400 focus:outline-none focus:border-primary-400 focus:bg-white/10 transition-all"
                            />
                            <div className="md:col-span-3">
                                <button type="submit" className="w-full md:w-auto px-16 py-5 bg-primary-500 hover:bg-primary-600 text-white font-bold rounded-2xl transition-all shadow-xl shadow-primary-900/40">
                                    Envoyer ma demande
                                </button>
                            </div>
                        </form>
                    </ClientMotionWrapper>
                </div>
            </section>

            {/* Why Maintenance Section */}
            <section className="py-24 bg-gray-50">
                <div className="container px-4 mx-auto max-w-7xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-black text-[#022545] mb-6">
                            Pourquoi la <span className="text-primary-600">maintenance web</span> est-elle capitale ?
                        </h2>
                        <p className="text-xl text-gray-500 max-w-3xl mx-auto">
                            Un site non entretenu est une menace directe pour votre réputation et votre chiffre d&apos;affaires au Maroc. Voici les 4 piliers de notre intervention.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            {
                                icon: ShieldCheck,
                                title: "Sécurité Totale",
                                desc: "Nous protégeons vos données et celles de vos clients contre les piratages et les tentatives d'intrusion quotidiennes.",
                                color: "bg-green-50 text-green-600"
                            },
                            {
                                icon: Zap,
                                title: "Vitesse Maximale",
                                desc: "Plus de lenteurs frustrantes. Nous optimisons le temps de chargement pour booster votre taux de conversion.",
                                color: "bg-amber-50 text-amber-600"
                            },
                            {
                                icon: TrendingUp,
                                title: "SEO Maintenu",
                                desc: "Google adore les sites stables. Nous évitons les erreurs techniques qui pourraient nuire à votre positionnement.",
                                color: "bg-blue-50 text-blue-600"
                            },
                            {
                                icon: Lock,
                                title: "Conformité Légale",
                                desc: "Respect strict de la législation marocaine (CNDP 09-08) et du RGPD européen pour la gestion des cookies.",
                                color: "bg-purple-50 text-purple-600"
                            }
                        ].map((feature, idx) => (
                            <ClientMotionWrapper
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-xl transition-all group"
                            >
                                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform ${feature.color}`}>
                                    <feature.icon className="w-8 h-8" />
                                </div>
                                <h3 className="text-xl font-bold text-[#022545] mb-4">{feature.title}</h3>
                                <p className="text-gray-500 leading-relaxed text-sm">{feature.desc}</p>
                            </ClientMotionWrapper>
                        ))}
                    </div>
                </div>
            </section>

            {/* Services List Section */}
            <section className="py-24 bg-white">
                <div className="container px-4 mx-auto max-w-7xl">
                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        <div>
                            <h2 className="text-3xl md:text-5xl font-black text-[#022545] mb-8 leading-tight">
                                Nos Solutions de Maintenance <br />
                                <span className="text-primary-600">Sur-Mesure</span> au Maroc
                            </h2>
                            <ul className="space-y-6">
                                {[
                                    { title: "Maintenance Corrective", desc: "Correction immédiate des bugs d'affichage, erreurs 500 et liens cassés." },
                                    { title: "Maintenance Préventive", desc: "Mises à jour régulières de WordPress, Shopify, plugins et thèmes de sécurité." },
                                    { title: "Maintenance Évolutive", desc: "Ajout de nouvelles fonctionnalités et amélioration du parcours utilisateur." },
                                    { title: "Monitoring & Monitoring 24/7", desc: "Surveillance proactive pour intervenir avant même que la panne ne survienne." }
                                ].map((item, i) => (
                                    <li key={i} className="flex gap-4 items-start group">
                                        <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center transition-colors group-hover:bg-primary-600 group-hover:text-white">
                                            <CheckCircle2 className="w-4 h-4" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-[#022545] text-lg mb-1">{item.title}</h4>
                                            <p className="text-gray-500">{item.desc}</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                            <div className="mt-12">
                                <Link href="/contact/" className="inline-flex items-center gap-3 px-8 py-4 bg-gray-100 text-[#022545] rounded-xl font-bold hover:bg-gray-200 transition-all">
                                    Consulter nos experts
                                    <ArrowRight className="w-5 h-5" />
                                </Link>
                            </div>
                        </div>
                        <ClientMotionWrapper
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <Image
                                src="/Purple and White Minimalist Your Business Needs a Website Instagram Post (13).webp"
                                alt="Services de maintenance Sitepro"
                                width={600}
                                height={600}
                                className="w-full h-auto"
                            />
                        </ClientMotionWrapper>
                    </div>
                </div>
            </section>

            {/* Types of sites Section */}
            <section className="py-24 bg-[#022545] text-white">
                <div className="container px-4 mx-auto max-w-7xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-black mb-6">
                            Un Support pour <span className="text-primary-400">Tout Type de Plateforme</span>
                        </h2>
                        <p className="text-white/60 text-lg max-w-2xl mx-auto">
                            Quel que soit l&apos;outil avec lequel votre site a été conçu, nos techniciens possèdent l&apos;expertise pour le maintenir à son meilleur niveau.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                        {[
                            { title: "E-commerce & Boutiques", desc: "WordPress (WooCommerce), Prestashop, Shopify et solutions sur mesure pour garantir vos ventes.", icon: Cpu },
                            { title: "Sites Vitrines & Portails", desc: "Sites institutionnels, blogs média et portails d'actualités nécessitant une haute disponibilité.", icon: Activity },
                            { title: "Applications Web complexes", desc: "Développements spécifiques sous React, Next.js ou Laravel avec gestion de base de données.", icon: Lock }
                        ].map((item, i) => (
                            <div key={i} className="p-10 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all">
                                <div className="w-16 h-16 bg-primary-500/20 text-primary-400 rounded-2xl flex items-center justify-center mx-auto mb-6">
                                    <item.icon className="w-8 h-8" />
                                </div>
                                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                                <p className="text-white/50 text-balance leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Working Process Section */}
            <section className="py-24 bg-white relative">
                <div className="container px-4 mx-auto max-w-7xl">
                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        <div className="order-2 lg:order-1">
                            <Image
                                src="/Purple and White Minimalist Your Business Needs a Website Instagram Post (14).webp"
                                alt="Méthodologie Sidepro maintenance"
                                width={600}
                                height={600}
                                className="w-full h-auto"
                            />
                        </div>
                        <div className="order-1 lg:order-2">
                            <h2 className="text-3xl md:text-5xl font-black text-[#022545] mb-8">
                                Notre Processus de <br />
                                <span className="text-primary-600">Travail en 4 Étapes</span>
                            </h2>
                            <div className="space-y-12">
                                {[
                                    { num: "01", title: "Audit & Diagnostic", desc: "Analyse complète de votre code, de la sécurité serveur et des performances actuelles." },
                                    { num: "02", title: "Mise sous Sécurité", desc: "Installation de pare-feux, certificats SSL et configuration des sauvegardes automatiques déportées." },
                                    { num: "03", title: "Support au Quotidien", desc: "Mises à jour proactives et interventions sur ticket avec des délais de traitement garantis." },
                                    { num: "04", title: "Reporting de Performance", desc: "Envoi trimestriel d'un rapport de santé détaillé (vitesse, SEO, attaques bloquées)." }
                                ].map((step, i) => (
                                    <div key={i} className="flex gap-8 relative">
                                        <div className="flex-shrink-0 text-5xl font-black text-gray-100 select-none">{step.num}</div>
                                        <div>
                                            <h4 className="text-xl font-bold text-[#022545] mb-2">{step.title}</h4>
                                            <p className="text-gray-500">{step.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Quality Commitment Section */}
            <section className="py-24 bg-gray-50 border-y border-gray-100">
                <div className="container px-4 mx-auto max-w-5xl text-center">
                    <h2 className="text-3xl md:text-4xl font-black text-[#022545] mb-6">
                        Un Engagement Qualité <span className="text-primary-600">Sans Compromis</span>
                    </h2>
                    <p className="text-xl text-gray-500 mb-12">
                        Nos contrats de maintenance (SLA) vous garantissent des délais d&apos;intervention records et une transparence totale sur les tarifs.
                    </p>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                            <div className="text-4xl font-black text-[#022545] mb-2">&lt; 1h</div>
                            <div className="text-sm font-bold text-primary-600 uppercase tracking-widest">Intervention Critique</div>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                            <div className="text-4xl font-black text-[#022545] mb-2">100%</div>
                            <div className="text-sm font-bold text-primary-600 uppercase tracking-widest">Satisfaction Client</div>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                            <div className="text-4xl font-black text-[#022545] mb-2">Zéro</div>
                            <div className="text-sm font-bold text-primary-600 uppercase tracking-widest">Frais Cachés</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <FAQSection data={maintenanceFaq} />

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
                            Besoin d&apos;un site web ultra-performant au <span className="text-primary-400">Maroc</span> ?
                        </h2>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                            Nous ne faisons pas que de la maintenance. Nous créons des outils de croissance optimisés pour le SEO et l&apos;IA pour dominer votre marché.
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
        </div>
    );
}
