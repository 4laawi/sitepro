'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './FAQSection.css';

const faqData = [
    {
        question: "Pourquoi choisir Sitepro.ma pour mon site ?",
        answer: "Notre force, c'est que nous combinons design, développement technique et expertise marketing. Cela nous permet de créer des sites qui ne sont pas seulement beaux, mais qui performent. Chaque projet est pensé pour être rapide et évolutif afin de répondre à vos objectifs de croissance."
    },
    {
        question: "Est-ce que vous faites des sites vitrine ou e-commerce ?",
        answer: "Les deux. Nous créons des sites vitrines pour renforcer votre image de marque et générer des leads, et des sites e-commerces, pour booster vos ventes. Notre stack couvre Webflow, Shopify et WordPress, ce qui nous permet de vous conseiller la meilleure solution en fonction de vos besoins."
    },
    {
        question: "Quel CMS choisir ?",
        answer: "Il n’y a pas de “meilleure” solution universelle. Shopify, Webflow ou WordPress : chaque CMS a ses forces. Nous vous conseillons selon vos objectifs (vitrine, e-commerce, leadgen), vos besoins en intégrations et votre budget chez Sitepro.ma. L’idée est simple : choisir un outil qui soutient votre croissance, pas qui la freine."
    },
    {
        question: "Combien de temps ça prend ?",
        answer: "Tout dépend de la complexité. Une landing page peut être prête en 1 semaine. Un site e-commerce complet prend plutôt 8 à 10 semaines. Le mieux reste de nous contacter pour que nous puissions estimer la durée de votre projet selon vos besoins spécifiques."
    },
    {
        question: "Quel est le coût d’un site internet ?",
        answer: "Nos projets démarrent généralement à partir de 3-5k€ pour un site vitrine et 4-6k€ pour un e-commerce. Le budget final dépend du périmètre (pages, intégrations, design sur-mesure). On vous donne toujours une estimation précise après notre appel de découverte."
    },
    {
        question: "Vous ne faites que du web ?",
        answer: "Non. Chez Sitepro.ma, nous avons choisi de nous spécialiser avec des experts dédiés sur trois leviers clés : Acquisition, Web et SEO. Chacun peut être activé séparément ou combiné, mais toujours avec une vision globale de votre croissance en ligne."
    }
];

const FAQSection = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const toggleAccordion = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="faq-section">
            <div className="faq-header-wrapper">
                <div className="faq-inner-container">
                    <div className="faq-text-center">
                        <div className="faq-title-wrapper">
                            <span className="faq-sous-titre">FAQ</span>
                            <h2 className="faq-h2">Questions Fréquentes</h2>
                            <h3 className="faq-h3">Les questions qu’on nous pose (vraiment)</h3>
                        </div>
                    </div>
                </div>
            </div>
            <div className="uui-container-large">
                <div className="uui-padding-vertical-xhuge">
                    <div className="uui-faq01_component">
                        <div className="uui-faq01_list">
                            {faqData.map((item, index) => (
                                <div key={index} className="uui-faq01_accordion">
                                    <div
                                        className="uui-faq01_question"
                                        onClick={() => toggleAccordion(index)}
                                    >
                                        <div className="uui-faq01_heading">{item.question}</div>
                                        <div className="uui-faq01_icon-wrapper">
                                            <div className={`accordion-icon_component ${activeIndex === index ? 'active' : ''}`}>
                                                <div className="accordion-icon_horizontal-line"></div>
                                                <div className={`accordion-icon_vertical-line ${activeIndex === index ? 'active' : ''}`}></div>
                                            </div>
                                        </div>
                                    </div>
                                    <AnimatePresence>
                                        {activeIndex === index && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: 'auto', opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.3, ease: 'easeInOut' }}
                                                className="uui-faq01_answer"
                                            >
                                                <div className="uui-text-size-medium">{item.answer}</div>
                                                <div className="uui-space-medium"></div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQSection;
