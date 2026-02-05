import type { Metadata } from 'next';
import MaintenanceContentEn from '@/components/MaintenanceContentEn';

export const metadata: Metadata = {
    title: 'Website Maintenance Morocco | Support, Security & Performance | Sitepro',
    description: 'Entrust your website maintenance to Sitepro in Morocco. 24/7 support, reinforced security, CMS updates, and speed optimization. Free audit. ☎️ 06 63 71 11 64',
    alternates: {
        canonical: 'https://sitepro.ma/en/maintenance-website-morocco/',
        languages: {
            'fr-MA': 'https://sitepro.ma/maintenance-site-web-maroc/',
            'en-MA': 'https://sitepro.ma/en/maintenance-website-morocco/',
        },
    },
    openGraph: {
        title: 'Website Maintenance Morocco | Support, Security & Performance | Sitepro',
        description: 'Entrust your website maintenance to Sitepro in Morocco. 24/7 support, reinforced security, CMS updates, and speed optimization. Free audit. ☎️ 06 63 71 11 64',
        url: 'https://sitepro.ma/en/maintenance-website-morocco/',
        siteName: 'Sitepro.ma',
        images: [{
            url: 'https://sitepro.ma/og-image.jpg',
            width: 1200,
            height: 630,
            alt: 'Website Maintenance Morocco - Sitepro.ma',
        }],
        locale: 'en_MA',
        type: 'website',
    },
};

export default function MaintenancePageEn() {
    return <MaintenanceContentEn />;
}
