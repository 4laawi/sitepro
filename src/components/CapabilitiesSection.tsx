'use client';

import React from 'react';
import Link from 'next/link';
import './CapabilitiesSection.css';

const services = [
    {
        id: 'web-design',
        title: 'Design Web',
        description: 'Planifiez, concevez et développez un site web dont vous serez fier, avec lequel vos clients aimeront interagir et qui transformera les visiteurs en clients fidèles.',
        link: 'https://mojo-agency.com/web-design/',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 39.94 36.83">
                <path d="M38.1,0H1.84A1.85,1.85,0,0,0,0,1.84V35a1.85,1.85,0,0,0,1.84,1.85H38.1A1.84,1.84,0,0,0,39.94,35V1.84A1.84,1.84,0,0,0,38.1,0ZM1.84,1.42H38.1a.42.42,0,0,1,.43.42V6.12H1.42V1.84A.42.42,0,0,1,1.84,1.42Zm36.26,34H1.84A.42.42,0,0,1,1.42,35V7.54H38.53V35A.43.43,0,0,1,38.1,35.41Z" fill="currentColor" />
                <path d="M4.73,4.44h1A.71.71,0,0,0,5.75,3h-1a.71.71,0,1,0,0,1.42Z" fill="currentColor" />
                <path d="M9.93,4.44h1A.71.71,0,0,0,11,3h-1a.71.71,0,1,0,0,1.42Z" fill="currentColor" />
                <path d="M20.93,18.54V18.4s0,0,0,0v0s0,0,0,0l0,0,0,0v0l0,0h0l0-.05h0l0,0,0,0,0,0h0l0,0h0l0,0h0a.67.67,0,0,0-.19-.05H4.62l-.14,0H4.43l0,0h0a.69.69,0,0,0-.13.11h0l0,0,0,0h0l0,0s0,0,0,0l0,0s0,0,0,0v0l0,0v13l0,0v0l0,0,0,0s0,0,0,0l0,0h0l.05.06,0,0,0,0,0,0,0,0,0,0,0,0h0l0,0h0l0,0H20.39l.06,0h0l.05,0h0l0,0,0,0,0,0,0,0,0,0,0,0,.05-.06h0v0l0,0v0l0,0,0,0v-.07l0,0v-.07s0,0,0,0V18.54ZM5.44,20.08l5.91,4.77L5.44,29.61Zm1.3-.77H18.22l-5.74,4.62Zm5.74,6.45,5.74,4.62H6.74Zm1.13-.91,5.91-4.77v9.53Z" fill="currentColor" />
                <path d="M34.51,18.39H23.83a.71.71,0,0,0,0,1.42H34.51a.71.71,0,0,0,0-1.42Z" fill="currentColor" />
                <path d="M34.51,22.16H23.83a.71.71,0,0,0,0,1.42H34.51a.71.71,0,0,0,0-1.42Z" fill="currentColor" />
                <path d="M30.45,25.94H23.83a.71.71,0,1,0,0,1.41h6.62a.71.71,0,0,0,0-1.41Z" fill="currentColor" />
                <path d="M35.54,10.25H4.73A.71.71,0,0,0,4,11v3.47a.71.71,0,0,0,.71.71H35.54a.71.71,0,0,0,.71-.71V11A.71.71,0,0,0,35.54,10.25Zm-.71,3.47H5.44V11.66H34.83Z" fill="currentColor" />
            </svg>
        )
    },
    {
        id: 'logo-design',
        title: 'Design de Logo',
        description: 'Créez un symbole captivant qui incarne l’essence de votre marque, résonne auprès de votre public et laisse une impression durable.',
        link: 'https://mojo-agency.com/logo-design/',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400">
                <path d="M233.2,283.7l43-93.4c2.7-5.9,1.6-12.7-2.6-17.5C236.9,130.6,219,59.9,219,59.9h-38.2c0,0-17.9,70.6-54.5,112.8c-4.2,4.9-5.3,11.7-2.6,17.5l43,93.4" fill="none" stroke="currentColor" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round" />
                <line x1="199.9" y1="62.2" x2="199.9" y2="161.5" fill="none" stroke="currentColor" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="199.9" cy="183" r="21.5" fill="none" stroke="currentColor" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M240.4,369.2h-80.9c-5.4,0-9.9-4.4-9.9-9.9v-66.8c0-5.5,4.4-9.9,9.9-9.9h80.9c5.4,0,9.9,4.4,9.9,9.9v66.8   C250.2,364.8,245.8,369.2,240.4,369.2z" fill="none" stroke="currentColor" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round" />
                <rect x="44.1" y="30.8" width="36.2" height="36.2" fill="none" stroke="currentColor" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round" />
                <rect x="335" y="30.8" width="36.2" height="36.2" fill="none" stroke="currentColor" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round" />
                <line x1="335" y1="48.9" x2="80.3" y2="48.9" fill="none" stroke="currentColor" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M13.2,241.1C13.2,138,96.8,54.3,200,54.3S386.8,138,386.8,241.1" fill="none" stroke="currentColor" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        )
    },
    {
        id: 'website-maintenance',
        title: 'Maintenance de Site Web',
        description: 'Nos forfaits de support continu vous offrent une tranquillité d’esprit en maintenant votre site web à un niveau de performance optimal, 24h/24, 7j/7 et 365 jours par an.',
        link: 'https://mojo-agency.com/website-maintenance/',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 39.94 36.83">
                <path d="M36.08,22.59H34.89a8.1,8.1,0,0,0-.55-1.33l.84-.84a.7.7,0,0,0,0-1l-2.3-2.3a.7.7,0,0,0-1,0L31,18a9.08,9.08,0,0,0-1.33-.55V16.22a.71.71,0,0,0-.71-.71H25.75a.71.71,0,0,0-.71.71v1.19a9.08,9.08,0,0,0-1.33.55l-.84-.84a.7.7,0,0,0-1,0l-2.3,2.3a.7.7,0,0,0,0,1l.84.84a9.08,9.08,0,0,0-.55,1.33H18.67a.71.71,0,0,0-.71.71v3.25a.71.71,0,0,0,.71.71h1.19a9.08,9.08,0,0,0,.55,1.33l-.84.84a.7.7,0,0,0,0,1l2.3,2.3a.7.7,0,0,0,1,0l.84-.84a8.1,8.1,0,0,0,1.33.55v1.19a.71.71,0,0,0,.71.71H29a.71.71,0,0,0,.71-.71V32.44A8.1,8.1,0,0,0,31,31.89l.84.84a.7.7,0,0,0,1,0l2.3-2.3a.7.7,0,0,0,0-1l-.84-.84a8.1,8.1,0,0,0,.55-1.33h1.19a.71.71,0,0,0,.71-.71V23.3A.71.71,0,0,0,36.08,22.59Zm-.71,3.25h-1a.73.73,0,0,0-.7.55,6.47,6.47,0,0,1-.8,1.94.73.73,0,0,0,.1.88l.73.72-1.3,1.3-.72-.73a.73.73,0,0,0-.88-.1,6.49,6.49,0,0,1-1.94.81.71.71,0,0,0-.55.69v1H26.46v-1a.71.71,0,0,0-.55-.69A6.24,6.24,0,0,1,24,30.4a.73.73,0,0,0-.88.1l-.72.73-1.3-1.3.73-.72a.73.73,0,0,0,.1-.88,6.47,6.47,0,0,1-.8-1.94.72.72,0,0,0-.69-.55h-1V24h1a.72.72,0,0,0,.69-.55,6.47,6.47,0,0,1,.8-1.94.73.73,0,0,0-.1-.88l-.73-.72,1.3-1.29.72.72a.73.73,0,0,0,.88.1,6.47,6.47,0,0,1,1.94-.8.72.72,0,0,0,.55-.69v-1h1.83v1a.72.72,0,0,0,.55.69,6.47,6.47,0,0,1,1.94.8.73.73,0,0,0,.88-.1l.72-.72,1.3,1.29-.73.72a.73.73,0,0,0-.1.88,6.47,6.47,0,0,1,.8,1.94.73.73,0,0,0,.7.55h1Z" fill="currentColor" />
                <path d="M27.38,20.47a4.46,4.46,0,1,0,4.46,4.46A4.46,4.46,0,0,0,27.38,20.47Zm0,7.5a3,3,0,1,1,3-3A3.05,3.05,0,0,1,27.38,28Z" fill="currentColor" />
                <path d="M18,19.6,17.38,19a7.81,7.81,0,0,0,.35-.84h.8a.71.71,0,0,0,.71-.71V15a.7.7,0,0,0-.71-.7h-.8a7.81,7.81,0,0,0-.35-.84l.57-.57a.71.71,0,0,0,0-1l-1.78-1.77a.7.7,0,0,0-1,0l-.57.57a5.14,5.14,0,0,0-.84-.35V9.48a.71.71,0,0,0-.71-.71H10.53a.7.7,0,0,0-.7.71v.81a5.14,5.14,0,0,0-.84.35l-.57-.57a.69.69,0,0,0-.5-.21h0a.67.67,0,0,0-.5.21L5.64,11.84a.71.71,0,0,0,0,1l.57.57a5.14,5.14,0,0,0-.35.84H5.05a.71.71,0,0,0-.71.7v2.52a.71.71,0,0,0,.71.71h.81a5.14,5.14,0,0,0,.35.84l-.57.57a.7.7,0,0,0,0,1l1.78,1.78a.71.71,0,0,0,.5.21.75.75,0,0,0,.5-.21L9,21.81a7.81,7.81,0,0,0,.84.35V23a.7.7,0,0,0,.7.71h2.52a.71.71,0,0,0,.71-.71v-.8a7.81,7.81,0,0,0,.84-.35l.57.57a.7.7,0,0,0,1,0L18,20.6A.7.7,0,0,0,18,19.6ZM16.5,17.32a4.73,4.73,0,0,1-.6,1.45.7.7,0,0,0,.1.88l.44.45-.77.77-.45-.44a.7.7,0,0,0-.88-.1,4.73,4.73,0,0,1-1.45.6.71.71,0,0,0-.55.69v.63h-1.1v-.63a.7.7,0,0,0-.55-.69,4.84,4.84,0,0,1-1.45-.6.7.7,0,0,0-.88.1l-.44.44-.78-.77.45-.45a.72.72,0,0,0,.1-.88,4.63,4.63,0,0,1-.6-1.45.72.72,0,0,0-.69-.55H5.76v-1.1H6.4a.71.71,0,0,0,.69-.55,4.84,4.84,0,0,1,.6-1.45.73.73,0,0,0-.1-.88l-.45-.44.78-.78.44.45a.73.73,0,0,0,.88.1,4.84,4.84,0,0,1,1.45-.6.7.7,0,0,0,.55-.69v-.64h1.1v.64a.72.72,0,0,0,.55.69,4.63,4.63,0,0,1,1.45.6.72.72,0,0,0,.88-.1l.45-.45.77.78-.44.44a.7.7,0,0,0-.1.88,4.84,4.84,0,0,1,.6,1.45.7.7,0,0,0,.69.55h.63v1.1h-.63A.71.71,0,0,0,16.5,17.32Z" fill="currentColor" />
                <path d="M11.79,12.61a3.62,3.62,0,1,0,3.62,3.61A3.61,3.61,0,0,0,11.79,12.61Zm0,5.81a2.2,2.2,0,1,1,2.2-2.2A2.2,2.2,0,0,1,11.79,18.42Z" fill="currentColor" />
                <path d="M38.1,0H1.84A1.85,1.85,0,0,0,0,1.84V35a1.85,1.85,0,0,0,1.84,1.85H38.1A1.84,1.84,0,0,0,39.94,35V1.84A1.84,1.84,0,0,0,38.1,0ZM1.84,1.42H38.1a.42.42,0,0,1,.43.42V6.12H1.42V1.84A.42.42,0,0,1,1.84,1.42Zm36.26,34H1.84A.42.42,0,0,1,1.42,35V7.54H38.53V35A.43.43,0,0,1,38.1,35.41Z" fill="currentColor" />
            </svg>
        )
    },
    {
        id: 'hosting',
        title: 'Hébergement',
        description: 'Des serveurs ultra-rapides, une sécurité robuste et une solution de maintenance et de sauvegarde qui garantit que votre site web continue de servir votre entreprise à tout moment.',
        link: 'https://mojo-agency.com/hosting-domain/',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 39.77 37.14">
                <path d="M38,26.79,32.67,24.6a.72.72,0,0,0-.54,0l-1.07.45a2.74,2.74,0,0,0,.11-.76v-.23h1.12a7.47,7.47,0,0,0,2.5-14.52A5.53,5.53,0,0,0,27.3,5.36a12,12,0,0,0-21.74,4,7.47,7.47,0,0,0,1.91,14.7H8.6v.23a2.57,2.57,0,0,0,.81,1.88,2.59,2.59,0,0,0-.81,1.88v2.72a2.6,2.6,0,0,0,2.59,2.59H27.87a8.94,8.94,0,0,0,4.25,3.73.71.71,0,0,0,.28.06.67.67,0,0,0,.28-.06,9.13,9.13,0,0,0,5.2-5.85,11.82,11.82,0,0,0,.54-3.83A.71.71,0,0,0,38,26.79ZM7.47,22.64a6.06,6.06,0,0,1-1.17-12,.69.69,0,0,0,.56-.56A10.62,10.62,0,0,1,26.43,6.62a.7.7,0,0,0,.94.27,4.09,4.09,0,0,1,2-.5,4.14,4.14,0,0,1,4.1,3.75.7.7,0,0,0,.52.62,6.06,6.06,0,0,1-1.67,11.88H31.17V21.58a2.61,2.61,0,0,0-.81-1.88,2.61,2.61,0,0,0,.81-1.88V15.11a2.59,2.59,0,0,0-2.59-2.59H11.19A2.59,2.59,0,0,0,8.6,15.11v2.71a2.57,2.57,0,0,0,.81,1.88,2.57,2.57,0,0,0-.81,1.88v1.06ZM10,17.82V15.11a1.17,1.17,0,0,1,1.17-1.17H28.58a1.17,1.17,0,0,1,1.17,1.17v2.71A1.17,1.17,0,0,1,28.58,19H11.19A1.17,1.17,0,0,1,10,17.82Zm0,6.47V21.58a1.17,1.17,0,0,1,1.17-1.17H28.58a1.18,1.18,0,0,1,1.17,1.17v2.71a1.17,1.17,0,0,1-1.17,1.17H11.19A1.17,1.17,0,0,1,10,24.29Zm1.17,7.65A1.17,1.17,0,0,1,10,30.77V28.05a1.17,1.17,0,0,1,1.17-1.17H26.67a.72.72,0,0,0-.28.52,11.82,11.82,0,0,0,.54,3.83c.08.24.16.48.25.71Zm25.32-1.09a7.63,7.63,0,0,1-4.11,4.8,7.65,7.65,0,0,1-4.1-4.8,10.8,10.8,0,0,1-.5-2.93L32.4,26l4.6,1.9A10.64,10.64,0,0,1,36.51,30.85Z" fill="currentColor" />
                <path d="M14.08,15.76H12.76a.71.71,0,1,0,0,1.41h1.32a.71.71,0,1,0,0-1.41Z" fill="currentColor" />
                <path d="M26.7,15.76H17a.71.71,0,1,0,0,1.41H26.7a.71.71,0,1,0,0-1.41Z" fill="currentColor" />
                <path d="M14.08,22.23H12.76a.71.71,0,0,0,0,1.42h1.32a.71.71,0,0,0,0-1.42Z" fill="currentColor" />
                <path d="M26.7,22.23H17a.71.71,0,1,0,0,1.42H26.7a.71.71,0,0,0,0-1.42Z" fill="currentColor" />
                <path d="M14.08,28.7H12.76a.71.71,0,1,0,0,1.42h1.32a.71.71,0,0,0,0-1.42Z" fill="currentColor" />
                <path d="M25,28.7H17a.71.71,0,0,0,0,1.42H25a.71.71,0,0,0,0-1.42Z" fill="currentColor" />
            </svg>
        )
    },
    {
        id: 'copywriting',
        title: 'Rédaction Web (Copywriting)',
        description: 'Tirez parti de notre expérience en rédaction pour communiquer votre message de manière claire et percutante. Boostez vos ventes avec un contenu qui incite à l’action.',
        link: 'https://mojo-agency.com/content-writing/',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 39.93 36.83">
                <path d="M39.93,18.4a1.72,1.72,0,0,0-.5-1.22L38,15.75V1.84A1.85,1.85,0,0,0,36.16,0H1.84A1.85,1.85,0,0,0,0,1.84V35a1.85,1.85,0,0,0,1.84,1.85H36.16A1.85,1.85,0,0,0,38,35V21l1.43-1.42A1.74,1.74,0,0,0,39.93,18.4ZM1.84,1.42H36.16a.42.42,0,0,1,.42.42V6.12H1.42V1.84A.42.42,0,0,1,1.84,1.42ZM36.58,35a.42.42,0,0,1-.42.43H1.84A.42.42,0,0,1,1.42,35V7.54H36.58v7.33l-.19,0a1.69,1.69,0,0,0-1.22.51L33.7,16.82h0l-9.5,9.5a.75.75,0,0,0-.2.37l-.74,4a.72.72,0,0,0,.7.84l.13,0,4-.74a.68.68,0,0,0,.37-.2l8.12-8.12ZM34.2,18.33l2.26,2.25-8.85,8.85-2.77.51.52-2.77Zm4.22.28-1,1-2.25-2.25,1-1a.3.3,0,0,1,.22-.09.28.28,0,0,1,.21.09l1.82,1.82a.3.3,0,0,1,.09.22A.28.28,0,0,1,38.42,18.61Z" fill="currentColor" />
                <path d="M5.05,13.18H17.86a.71.71,0,0,0,0-1.42H5.05a.71.71,0,0,0,0,1.42Z" fill="currentColor" />
                <path d="M5.05,18H25.46a.71.71,0,1,0,0-1.41H5.05a.71.71,0,1,0,0,1.41Z" fill="currentColor" />
                <path d="M20.93,23.37H5.05a.71.71,0,1,0,0,1.42H20.93a.71.71,0,0,0,0-1.42Z" fill="currentColor" />
                <path d="M20.58,30.12H5.05a.71.71,0,1,0,0,1.42H20.58a.71.71,0,0,0,0-1.42Z" fill="currentColor" />
            </svg>
        )
    }
];

const CapabilitiesSection = () => {
    return (
        <section id="capabilities" className="capabilities-section relative overflow-hidden z-10">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5 pointer-events-none">
                <div className="absolute inset-0" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231e40af' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }} />
            </div>
            <div className="capabilities-container relative z-10">
                <div className="section-header">
                    <span className="badge-gradient">Nos Capacités</span>
                    <h2 className="section-title-premium">En quoi pouvons-nous vous aider ?</h2>
                    <p className="section-subtitle-premium">
                        Nous sommes une agence digitale créative, passionnée par le développement de marques et la création de sites web au Maroc.
                    </p>
                </div>

                <div className="capabilities-grid">
                    {services.map((service) => (
                        <div key={service.id} className="capability-card grid-item animate-up">
                            <div className="card-icon">
                                {service.icon}
                            </div>
                            <h4 className="card-title">{service.title}</h4>
                            <p className="card-text">{service.description}</p>
                            <Link href={service.link} className="learn-more">
                                En savoir plus <i className="icon-trianglearrowright-dir"></i>
                            </Link>
                        </div>
                    ))}

                    <div className="capability-card consultation-card grid-item animate-up">
                        <h4 className="card-title">Consultations Gratuites</h4>
                        <p className="card-text">
                            Parlez-nous de votre projet de site web et découvrez pourquoi nous sommes
                            les meilleurs designers web au Maroc.
                        </p>
                        <Link href="https://mojo-agency.com/contact-us/" className="cta-button">
                            Discutons ensemble
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CapabilitiesSection;
