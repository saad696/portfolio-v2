import type { Metadata } from 'next';
import { Archivo, Archivo_Black, Space_Mono } from 'next/font/google';
import './globals.css';
import SiteHeader from '@/components/SiteHeader';
import MobileNav from '@/components/MobileNav';
import SiteFooter from '@/components/SiteFooter';
import { profile } from '@/utils/data';
import { OG_IMAGE, SITE_NAME, SITE_URL } from '@/utils/site';

const archivo = Archivo({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
    display: 'swap',
    variable: '--font-body',
});

const archivoBlack = Archivo_Black({
    subsets: ['latin'],
    weight: '400',
    display: 'swap',
    variable: '--font-disp',
});

const spaceMono = Space_Mono({
    subsets: ['latin'],
    weight: ['400', '700'],
    display: 'swap',
    variable: '--font-mono',
});

const HOME_TITLE =
    'Saad Shaikh — Full Stack Developer | React, TypeScript, Node.js';
const HOME_DESCRIPTION =
    'Full Stack Developer with 5+ years shipping SaaS, crowdfunding, and Government of India platforms. React, TypeScript, Node.js, PostgreSQL. Based in Mumbai.';

export const metadata: Metadata = {
    metadataBase: new URL(SITE_URL),
    title: {
        default: HOME_TITLE,
        template: '%s',
    },
    description: HOME_DESCRIPTION,
    alternates: { canonical: SITE_URL },
    openGraph: {
        title: HOME_TITLE,
        siteName: SITE_NAME,
        url: SITE_URL,
        type: 'website',
        locale: 'en_IN',
        description: HOME_DESCRIPTION,
        images: [OG_IMAGE],
    },
    twitter: {
        card: 'summary_large_image',
        title: HOME_TITLE,
        description: HOME_DESCRIPTION,
        images: [OG_IMAGE],
    },
};

const personJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: profile.name,
    jobTitle: profile.role,
    url: SITE_URL,
    email: `mailto:${profile.email}`,
    telephone: profile.phone,
    address: {
        '@type': 'PostalAddress',
        addressLocality: 'Mumbai',
        addressCountry: 'IN',
    },
    sameAs: [profile.socials.linkedIn, profile.socials.github],
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html
            lang="en"
            className={`${archivo.variable} ${archivoBlack.variable} ${spaceMono.variable}`}
            suppressHydrationWarning
        >
            <body className="bg-ink font-body text-paper antialiased">
                <script
                    type="application/ld+json"
                    // Static, author-controlled object — no user input reaches this.
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(personJsonLd),
                    }}
                />
                <a
                    href="#main"
                    className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:bg-paper focus:px-4 focus:py-2 focus:font-mono focus:text-xs focus:uppercase focus:text-ink"
                >
                    Skip to content
                </a>
                <SiteHeader />
                {/* Bottom nav is fixed on mobile; pad so it never covers content. */}
                <main id="main" className="pb-[52px] lg:pb-0">
                    {children}
                </main>
                <SiteFooter />
                <MobileNav />
            </body>
        </html>
    );
}
