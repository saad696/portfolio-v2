import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/utils/site';

const ROUTES: { path: string; priority: number }[] = [
    { path: '', priority: 1 },
    { path: '/about', priority: 0.9 },
    { path: '/portfolio', priority: 0.9 },
    { path: '/contact', priority: 0.7 },
];

export default function sitemap(): MetadataRoute.Sitemap {
    return ROUTES.map(({ path, priority }) => ({
        url: `${SITE_URL}${path}`,
        changeFrequency: 'monthly',
        priority,
    }));
}
