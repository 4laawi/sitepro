import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import './EcommerceHero.css';

const logoItems = [
    { src: "https://cdn.prod.website-files.com/6634f9cbe380ab2b3b36db44/6721493f2538175c2ba3d141_bxr.svg", alt: "BXR" },
    { src: "https://cdn.prod.website-files.com/6634f9cbe380ab2b3b36db44/6721493fd6d3fa99cea53a4b_quorn%20stone.svg", alt: "Quorn Stone" },
    { src: "https://cdn.prod.website-files.com/6634f9cbe380ab2b3b36db44/672149401b1223c886801298_de.svg", alt: "DE" },
    { src: "https://cdn.prod.website-files.com/6634f9cbe380ab2b3b36db44/6721493f833799ec8c546b7e_miss%20jones.svg", alt: "Miss Jones" },
    { src: "https://cdn.prod.website-files.com/6634f9cbe380ab2b3b36db44/6721493fb66454f9ed008734_pdog.svg", alt: "PDOG" },
    { src: "https://cdn.prod.website-files.com/6634f9cbe380ab2b3b36db44/6721493fbe1c7e933d886d14_sweat.svg", alt: "Sweat" },
    { src: "https://cdn.prod.website-files.com/6634f9cbe380ab2b3b36db44/6721493fd0c23c36f59c57ad_pulco.svg", alt: "Pulco" },
];

const EcommerceHero: React.FC = () => {
    return (
        <div className="ecommerce-hero section light-section snipcss-wXIbE">
            <div className="container left-align-block">
                <div id="w-node-_45c96805-68dd-17c2-c7f5-575738e1ff79-3b36db8d" className="div-block-5">
                    <h4 data-w-id="45c96805-68dd-17c2-c7f5-575738e1ff7c" className="heading-11 dark style-kJtcF" id="style-kJtcF">
                        We collaborate with high performance teams across e-commerce, retail, service, and subscription - applying tailored CRM strategies to unlock long-term growth.
                    </h4>
                    <div className="cta-block">
                        <Link href="/brands" className="primary-cta w-inline-block">
                            <p className="paragraph-2">OUR BRANDS</p>
                        </Link>
                    </div>
                    <div className="carousel">
                        <div className="logo-carousel-wrap style-BTZos" id="style-BTZos">
                            <ul role="list" className="logo-carousel">
                                {logoItems.map((item, index) => (
                                    <li key={index} className="logo-carousel-item">
                                        <a href="#" className="logo-link w-inline-block">
                                            <Image
                                                src={item.src}
                                                alt={item.alt}
                                                className="logo-image"
                                                width={100}
                                                height={50}
                                                style={{ objectFit: 'contain' }}
                                                unoptimized
                                            />
                                        </a>
                                    </li>
                                ))}
                            </ul>
                            <div className="logo-carousel-clone">
                                <ul role="list" className="logo-carousel">
                                    {logoItems.map((item, index) => (
                                        <li key={`clone-${index}`} className="logo-carousel-item">
                                            <a href="#" className="logo-link w-inline-block">
                                                <Image
                                                    src={item.src}
                                                    alt={item.alt}
                                                    className="logo-image"
                                                    width={100}
                                                    height={50}
                                                    style={{ objectFit: 'contain' }}
                                                    unoptimized
                                                />
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <Image
                    src="https://cdn.prod.website-files.com/6634f9cbe380ab2b3b36db44/68601d30f9408a04a4a1503d_mockup%20trio-2.png"
                    id="w-node-_451dbb62-b2ea-6be1-1a99-69e31b38cd6c-3b36db8d"
                    alt="Ecommerce Mockup"
                    className="image-24"
                    width={800}
                    height={600}
                    priority
                />
            </div>
        </div>
    );
};

export default EcommerceHero;
