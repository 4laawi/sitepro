'use client';

import React, { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import './ToolsSection.css';

const tools = [
    { name: 'Wordpress', logo: 'https://www.datocms-assets.com/22695/1735402637-wordpress-logo.svg' },
    { name: 'Webflow', logo: 'https://www.datocms-assets.com/22695/1735402664-webflow-logo.svg' },
    { name: 'NextJS', logo: 'https://www.datocms-assets.com/22695/1735415680-nextjs-original-logo.svg' },
    { name: 'Gatsby', logo: 'https://www.datocms-assets.com/22695/1735415705-gatsby-logo.svg' },
    { name: 'DatoCMS', logo: 'https://www.datocms-assets.com/22695/1735415742-datocms-icon-logo.svg' },
    { name: 'Web Components', logo: 'https://www.datocms-assets.com/22695/1735415771-webcomponents-logo.svg' },
    { name: 'Tailwind CSS', logo: 'https://www.datocms-assets.com/22695/1735415805-tailwindcss-original-logo.svg' },
    { name: 'Figma', logo: 'https://www.datocms-assets.com/22695/1735402538-figma-logo.svg' },
    { name: 'Canva', logo: 'https://www.datocms-assets.com/22695/1735402561-canva-logo.svg' },
    { name: 'Adobe', logo: 'https://www.datocms-assets.com/22695/1735402578-adobe-logo.svg' },
    { name: 'Bootstrap', logo: 'https://www.datocms-assets.com/22695/1735402602-bootstrap-logo.svg' },
    { name: 'Hubspot', logo: 'https://www.datocms-assets.com/22695/1735402620-hubspot-logo.svg' },
    { name: 'InVision', logo: 'https://www.datocms-assets.com/22695/1735402685-invision-logo.svg' },
];

const ToolsSection = () => {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);

    const checkScroll = () => {
        if (scrollRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
            setCanScrollLeft(scrollLeft > 0);
            setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 5); // 5px tolerance
        }
    };

    useEffect(() => {
        const currentRef = scrollRef.current;
        if (currentRef) {
            currentRef.addEventListener('scroll', checkScroll);
            checkScroll();
            window.addEventListener('resize', checkScroll);
        }
        return () => {
            if (currentRef) {
                currentRef.removeEventListener('scroll', checkScroll);
            }
            window.removeEventListener('resize', checkScroll);
        };
    }, []);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollRef.current) {
            const scrollAmount = 350; // Roughly the width of a card + gap
            scrollRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth',
            });
        }
    };

    return (
        <section className="tools-section">
            <div className="tools-container">
                <div className="tabs-btns">
                    <h2 className="tab-btn">Tools we use</h2>
                </div>

                <div className="tabs-content">
                    <div className="tab-content">
                        <div className="tab-cards-wrapper card_list_type2" ref={scrollRef}>
                            {tools.map((tool, index) => (
                                <div key={index} className="tab-card">
                                    <span className="logo">
                                        <Image
                                            src={tool.logo}
                                            alt={tool.name}
                                            width={48}
                                            height={48}
                                            loading="lazy"
                                        />
                                    </span>
                                    <h4 className="title">{tool.name}</h4>
                                </div>
                            ))}
                        </div>

                        <div className="scroll-nav">
                            <button
                                className="scroll-button prev"
                                onClick={() => scroll('left')}
                                disabled={!canScrollLeft}
                                aria-label="Previous tools"
                            >
                                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M19.8764 24.7533L23.5498 28.4355L22.4878 29.5L17.0008 24L22.4878 18.5L23.5498 19.5645L19.8752 23.2479L31 23.2479L31 24.7533L19.8764 24.7533Z" />
                                </svg>
                            </button>
                            <button
                                className="scroll-button next"
                                onClick={() => scroll('right')}
                                disabled={!canScrollRight}
                                aria-label="Next tools"
                            >
                                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M28.1236 23.2467L24.4502 19.5645L25.5122 18.5L30.9992 24L25.5122 29.5L24.4502 28.4355L28.1248 24.7521L17 24.7521L17 23.2467L28.1236 23.2467Z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ToolsSection;
