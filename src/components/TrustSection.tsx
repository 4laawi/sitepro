'use client'

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import './TrustSection.css';

interface TrustSectionProps {
    lang?: 'FR' | 'EN';
}

const logos = [
    { src: 'https://image.devnetcorp.com/uploads/2024/10/malex.png', alt: 'Ma-Lex', id: 'd381cc1' },
    { src: 'https://image.devnetcorp.com/uploads/2024/10/kinemotion1.png', alt: 'Kinemotion', id: 'b45c657' },
    { src: 'https://image.devnetcorp.com/uploads/2024/10/drchaimaabadrour.png', alt: 'Dr Chaimaa Badrour', id: 'a6cd775' },
    { src: 'https://image.devnetcorp.com/uploads/2024/10/lexhosting.png', alt: 'Lex Hosting', id: '63ba8eb' },
    { src: 'https://image.devnetcorp.com/uploads/2024/10/trustmod.png', alt: 'Trustmod', id: '9691a68' },
    { src: 'https://image.devnetcorp.com/uploads/2024/10/cri.png', alt: 'CRI', id: '8b79853' },
    { src: 'https://image.devnetcorp.com/uploads/2024/10/almoujtamaa1.png', alt: 'Almoujtamaa', id: '1ada06d', hiddenMobile: true },
];

export default function TrustSection({ lang = 'FR' }: TrustSectionProps) {
    const t = {
        FR: {
            title: 'Ils nous font confiance pour propulser leur visibilité et leur succès.',
        },
        EN: {
            title: 'They trust us to propel their visibility and success.',
        }
    }[lang];

    return (
        <section className="trust-section-wrapper">
            <div className="elementor-section elementor-top-section elementor-element elementor-element-7efdc61 elementor-section-boxed elementor-section-height-default snipcss-aTCCV" data-id="7efdc61" data-element_type="section">
                <div className="elementor-container elementor-column-gap-default">
                    <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-bbfb8e6" data-id="bbfb8e6" data-element_type="column">
                        <div className="elementor-widget-wrap elementor-element-populated">

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                                viewport={{ once: true }}
                                className="elementor-element elementor-element-fd1dd94 elementor-widget elementor-widget-heading"
                                data-id="fd1dd94"
                                data-element_type="widget"
                                data-widget_type="heading.default"
                            >
                                <h3 className="elementor-heading-title elementor-size-default">
                                    {t.title}
                                </h3>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                                viewport={{ once: true }}
                                className="elementor-section elementor-inner-section elementor-element elementor-element-1bc2b3c elementor-section-boxed elementor-section-height-default"
                                data-id="1bc2b3c"
                                data-element_type="section"
                            >
                                <div className="elementor-container elementor-column-gap-default">
                                    {logos.map((logo, index) => (
                                        <div
                                            key={logo.id}
                                            className={`elementor-column elementor-col-14 elementor-inner-column elementor-element ${logo.hiddenMobile ? 'elementor-hidden-mobile' : ''}`}
                                        >
                                            <div className="elementor-widget-wrap elementor-element-populated">
                                                <div className="elementor-element elementor-widget elementor-widget-image">
                                                    <Image
                                                        src={logo.src}
                                                        alt={logo.alt}
                                                        width={378}
                                                        height={148}
                                                        className="h-auto"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
