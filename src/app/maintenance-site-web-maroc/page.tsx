import type { Metadata } from 'next';
import MaintenanceContent from './MaintenanceContent';

export const metadata: Metadata = {
    title: 'Maintenance site web Maroc | Support, Sécurité & Performance | Sitepro',
    description: 'Confiez la maintenance de votre site web à Sitepro au Maroc. Support 24/7, sécurité renforcée, mises à jour CMS et optimisation de vitesse. Audit gratuit. ☎️ 06 63 71 11 64',
    alternates: { canonical: 'https://sitepro.ma/maintenance-site-web-maroc/' },
    openGraph: {
        title: 'Maintenance site web Maroc | Support, Sécurité & Performance | Sitepro',
        description: 'Confiez la maintenance de votre site web à Sitepro au Maroc. Support 24/7, sécurité renforcée, mises à jour CMS et optimisation de vitesse. Audit gratuit. ☎️ 06 63 71 11 64',
        url: 'https://sitepro.ma/maintenance-site-web-maroc/',
        siteName: 'Sitepro.ma',
        images: [{
            url: 'https://sitepro.ma/og-image.jpg',
            width: 1200,
            height: 630,
            alt: 'Maintenance site web Maroc - Sitepro.ma',
        }],
        locale: 'fr_MA',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Maintenance site web Maroc | Support, Sécurité & Performance | Sitepro',
        description: 'Confiez la maintenance de votre site web à Sitepro au Maroc. Support 24/7, sécurité renforcée, mises à jour CMS et optimisation de vitesse. Audit gratuit. ☎️ 06 63 71 11 64',
        images: ['https://sitepro.ma/og-image.jpg'],
    },
};

export default function MaintenancePage() {
    return <MaintenanceContent />;
}
