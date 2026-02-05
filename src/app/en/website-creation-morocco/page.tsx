import CityLandingTemplate from '@/components/CityLandingTemplate';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Website Creation in Morocco – Professional, SEO & AI Optimized Solutions',
    description: 'Premier website creation agency in Morocco. We design high-end, professional websites optimized for SEO and AI to grow your business.',
    alternates: {
        canonical: 'https://sitepro.ma/en/website-creation-morocco/',
        languages: {
            'fr-FR': 'https://sitepro.ma/creation-site-web-maroc/',
            'en-US': 'https://sitepro.ma/en/website-creation-morocco/',
        },
    },
};

export default function WebsiteCreationMorocco() {
    return (
        <CityLandingTemplate
            city="Morocco"
            isMainMaroc={true}
            lang="EN"
        />
    );
}
