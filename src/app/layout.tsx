import type { Metadata, Viewport } from 'next'
import Script from 'next/script'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://sitepro.ma'),
  title: 'Sitepro.ma - Agence Web Maroc | Création de Sites Internet Professionnels',
  description: 'Sitepro.ma - Votre partenaire digital au Maroc. Nous créons des sites web modernes et performants pour les entreprises marocaines. Design sur mesure, SEO optimisé, résultats garantis.',
  keywords: 'agence web maroc, création site internet maroc, développement web marrakech, site web professionnel, agence digitale maroc',
  authors: [{ name: 'Sitepro.ma' }],
  creator: 'Sitepro.ma',
  publisher: 'Sitepro.ma',
  alternates: { canonical: '/' },
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
  manifest: '/manifest.webmanifest',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Sitepro.ma - Agence Web Maroc',
    description: 'Création de sites web professionnels pour entreprises marocaines',
    url: 'https://sitepro.ma',
    siteName: 'Sitepro.ma',
    locale: 'fr_MA',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Sitepro.ma - Agence Web Maroc',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sitepro.ma - Agence Web Maroc',
    description: 'Création de sites web professionnels pour entreprises marocaines',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
        <Script id="ld-org" type="application/ld+json" strategy="afterInteractive">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'Sitepro.ma',
            url: 'https://sitepro.ma',
            logo: 'https://sitepro.ma/favicon.png',
            contactPoint: [{
              '@type': 'ContactPoint',
              contactType: 'customer support',
              areaServed: 'MA',
              availableLanguage: ['fr', 'ar'],
              telephone: '+2120663711164'
            }]
          })}
        </Script>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}