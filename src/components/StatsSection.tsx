'use client'

import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import './StatsSection.css';

interface StatItemProps {
    number: number;
    suffix?: string;
    prefix?: string;
    label: React.ReactNode;
    delay?: number;
}

const StatItem = ({ number, suffix = '', prefix = '', label, delay = 0 }: StatItemProps) => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay }}
            className="stat-item"
        >
            <div className="stat-number">
                {inView ? (
                    <CountUp
                        start={0}
                        end={number}
                        duration={2.5}
                        prefix={prefix}
                        suffix={suffix}
                        useEasing={true}
                    />
                ) : (
                    `${prefix}0${suffix}`
                )}
            </div>
            <div className="stat-label">{label}</div>
        </motion.div>
    );
};

export default function StatsSection() {
    const stats = [
        {
            number: 120,
            prefix: '+',
            label: <>Projets web réalisés<br />pour nos clients</>,
        },
        {
            number: 70,
            prefix: '+',
            label: <>Refontes de sites effectuées<br />sur différents secteurs</>,
        },
        {
            number: 3,
            label: <>ans d'expérience<br />pratique</>,
        },
        {
            number: 90,
            suffix: '%',
            label: <>Taux de satisfaction client<br />NPS sur l'année 2024</>,
        },
    ];

    return (
        <section className="stats-section">
            <div className="stats-container">
                <div className="stats-grid">
                    {stats.map((stat, index) => (
                        <StatItem
                            key={index}
                            number={stat.number}
                            prefix={stat.prefix}
                            suffix={stat.suffix}
                            label={stat.label}
                            delay={index * 0.1}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
