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
    TrendingUp
} from 'lucide-react';
import ClientMotionWrapper from '@/components/ClientMotionWrapper';
import FAQSection from '@/components/FAQSection';

const maintenanceFaq = [
    {
        question: "Why entrust my maintenance to Sitepro in Morocco?",
        answer: "By entrusting your maintenance to Sitepro, you benefit from responsive local expertise. We understand the challenges of Moroccan businesses and offer support in English, French and Arabic, with ultra-fast interventions to minimize any downtime."
    },
    {
        question: "My site was created by another agency, can you maintain it?",
        answer: "Absolutely. We perform an initial technical audit to understand your site's architecture, then we take over to ensure its security, updates, and continuous optimization."
    },
    {
        question: "What are the guarantees regarding data security?",
        answer: "We implement the strictest security protocols, including advanced firewalls, SSL certificates, and daily backups. We also ensure compliance with Moroccan law 09-08 (CNDP) on personal data protection."
    },
    {
        question: "How does technical support work?",
        answer: "We have a priority ticket system. For any emergency, our technicians intervene within the hour. You also receive a detailed monthly report on the health and performance of your platform."
    }
];

export default function MaintenanceContentEn() {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: ''
    });

    const handleWhatsAppSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const phoneNumber = "212663711164";
        const message = `Hello Sitepro, I would like information about maintaining my website.\nName: ${formData.name}\nPhone: ${formData.phone}\nEmail: ${formData.email}`;
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
                                    Web Maintenance & Support Morocco
                                </span>
                            </div>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#022545] leading-[1.1]">
                                Website Maintenance in <span className="text-primary-600">Morocco</span>: Performance & Serenity
                            </h1>
                            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                                Don't let a technical flaw slow down your growth. Sitepro agency ensures <strong>monitoring</strong>, <strong>security</strong>, and <strong>continuous optimization</strong> of your web platforms for total peace of mind.
                            </p>
                            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start pt-4">
                                <Link href="/en/contact/" className="w-full sm:w-auto px-10 py-5 bg-[#022545] text-white rounded-2xl font-bold hover:bg-gray-800 transition-all shadow-xl shadow-gray-200 flex items-center justify-center gap-2 group">
                                    Request Free Audit
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
                                alt="Web Maintenance Service in Morocco - Sitepro"
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
                            Web Maintenance: an advisor <span className="text-primary-400">calls you back!</span>
                        </h2>
                        <p className="text-white/70 text-lg mb-12 max-w-2xl mx-auto">
                            Leave your contact details and a technical support expert will contact you within 15 minutes.
                        </p>

                        <form onSubmit={handleWhatsAppSubmit} className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                            <input
                                type="text"
                                placeholder="Full Name"
                                required
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                className="w-full bg-white/5 border border-primary-500/30 rounded-2xl px-6 py-4 text-white placeholder-gray-400 focus:outline-none focus:border-primary-400 focus:bg-white/10 transition-all"
                            />
                            <input
                                type="tel"
                                placeholder="Phone"
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
                                    Send my request
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
                            Why is <span className="text-primary-600">Web Maintenance</span> crucial?
                        </h2>
                        <p className="text-xl text-gray-500 max-w-3xl mx-auto">
                            An unmaintained site is a direct threat to your reputation and turnover in Morocco. Here are the 4 pillars of our intervention.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            {
                                icon: ShieldCheck,
                                title: "Total Security",
                                desc: "We protect your data and your clients' against hacks and daily intrusion attempts.",
                                color: "bg-green-50 text-green-600"
                            },
                            {
                                icon: Zap,
                                title: "Max Speed",
                                desc: "No more frustrating delays. We optimize loading time to boost your conversion rate.",
                                color: "bg-amber-50 text-amber-600"
                            },
                            {
                                icon: TrendingUp,
                                title: "SEO Maintained",
                                desc: "Google loves stable sites. We avoid technical errors that could harm your ranking.",
                                color: "bg-blue-50 text-blue-600"
                            },
                            {
                                icon: Lock,
                                title: "Legal Compliance",
                                desc: "Strict adherence to Moroccan legislation (CNDP 09-08) and GDPR for cookie management.",
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
                                Our <span className="text-primary-600">Custom</span> Maintenance Solutions in Morocco
                            </h2>
                            <ul className="space-y-6">
                                {[
                                    { title: "Corrective Maintenance", desc: "Immediate fix for display bugs, 500 errors, and broken links." },
                                    { title: "Preventive Maintenance", desc: "Regular updates for WordPress, Shopify, plugins, and security themes." },
                                    { title: "Evolutionary Maintenance", desc: "Adding new features and improving user journey." },
                                    { title: "24/7 Monitoring", desc: "Proactive monitoring to intervene before failure occurs." }
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
                                <Link href="/en/contact/" className="inline-flex items-center gap-3 px-8 py-4 bg-gray-100 text-[#022545] rounded-xl font-bold hover:bg-gray-200 transition-all">
                                    Consult our experts
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
                                alt="Sitepro Maintenance Services"
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
                            Support for <span className="text-primary-400">Any Platform Type</span>
                        </h2>
                        <p className="text-white/60 text-lg max-w-2xl mx-auto">
                            Whatever tool your site was built with, our technicians have the expertise to keep it running at its best.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                        {[
                            { title: "E-commerce & Stores", desc: "WordPress (WooCommerce), Prestashop, Shopify and custom solutions to guarantee your sales.", icon: Cpu },
                            { title: "Showcase Sites & Portals", desc: "Corporate sites, media blogs, and news portals requiring high availability.", icon: Activity },
                            { title: "Complex Web Apps", desc: "Specific developments under React, Next.js or Laravel with database management.", icon: Lock }
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
                                alt="Sidepro Maintenance Methodology"
                                width={600}
                                height={600}
                                className="w-full h-auto"
                            />
                        </div>
                        <div className="order-1 lg:order-2">
                            <h2 className="text-3xl md:text-5xl font-black text-[#022545] mb-8">
                                Our <span className="text-primary-600">4-Step Workflow</span>
                            </h2>
                            <div className="space-y-12">
                                {[
                                    { num: "01", title: "Audit & Diagnostics", desc: "Complete analysis of your code, server security, and current performance." },
                                    { num: "02", title: "Security Implementation", desc: "Installation of firewalls, SSL certificates, and configuration of remote automatic backups." },
                                    { num: "03", title: "Daily Support", desc: "Proactive updates and ticket interventions with guaranteed processing times." },
                                    { num: "04", title: "Performance Reporting", desc: "Quarterly detailed health report (speed, SEO, blocked attacks)." }
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
                        Uncompromising <span className="text-primary-600">Quality Commitment</span>
                    </h2>
                    <p className="text-xl text-gray-500 mb-12">
                        Our maintenance contracts (SLAs) guarantee record intervention times and total pricing transparency.
                    </p>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                            <div className="text-4xl font-black text-[#022545] mb-2">&lt; 1h</div>
                            <div className="text-sm font-bold text-primary-600 uppercase tracking-widest">Critical Intervention</div>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                            <div className="text-4xl font-black text-[#022545] mb-2">100%</div>
                            <div className="text-sm font-bold text-primary-600 uppercase tracking-widest">Client Satisfaction</div>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                            <div className="text-4xl font-black text-[#022545] mb-2">Zero</div>
                            <div className="text-sm font-bold text-primary-600 uppercase tracking-widest">Hidden Fees</div>
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
                            WEB DESIGN AGENCY IN MOROCCO
                        </span>
                        <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
                            Need a high-performance website in <span className="text-primary-400">Morocco</span>?
                        </h2>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                            We don't just do maintenance. We create SEO and AI optimized growth tools to dominate your market.
                        </p>
                        <div className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-6">
                            <Link href="/en/website-creation-morocco/" className="bg-primary-500 hover:bg-primary-600 text-white px-10 py-5 rounded-xl font-bold text-xl transition-all shadow-xl shadow-primary-900/40 flex items-center gap-3 group">
                                Website Creation Morocco
                                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <div className="flex flex-col items-center sm:items-start text-left">
                                <p className="text-sm text-gray-400 font-medium italic">Free technical audit</p>
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
