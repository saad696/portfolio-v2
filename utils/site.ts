import type { Metadata } from 'next';

/** Canonical production domain. Everything (og:url, canonical, sitemap) uses this. */
export const SITE_URL = 'https://saadshaikh.vercel.app';

export const SITE_NAME = 'Saad Shaikh';

/** Single source of truth for the resume file served everywhere on the site. */
export const RESUME_PATH = '/resume/Saad_Shaikh_Resume.pdf';
export const RESUME_FILENAME = 'Saad_Shaikh_Resume.pdf';

export const OG_IMAGE_ALT =
    'Saad Shaikh — Full Stack Developer (React, TypeScript, Node.js)';

/** Generated share card, served by `app/og/route.tsx`. */
export const OG_IMAGE = {
    url: `${SITE_URL}/og`,
    width: 1200,
    height: 630,
    alt: OG_IMAGE_ALT,
};

type PageMetaInput = {
    /** Route path, e.g. "/about". Use "/" for the homepage. */
    path: string;
    title: string;
    description: string;
};

/**
 * Builds per-page metadata with a canonical URL and matching Open Graph /
 * Twitter tags on the canonical domain. The image is referenced explicitly
 * rather than via the file convention, because a page-level `openGraph`
 * object replaces the parent's and would otherwise drop the image.
 */
export function buildPageMetadata({
    path,
    title,
    description,
}: PageMetaInput): Metadata {
    const url = path === '/' ? SITE_URL : `${SITE_URL}${path}`;

    return {
        title,
        description,
        alternates: {
            canonical: url,
        },
        openGraph: {
            title,
            description,
            url,
            siteName: SITE_NAME,
            type: 'website',
            locale: 'en_IN',
            images: [OG_IMAGE],
        },
        twitter: {
            card: 'summary_large_image',
            title,
            description,
            images: [OG_IMAGE],
        },
    };
}
