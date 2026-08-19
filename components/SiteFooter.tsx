import { profile } from '@/utils/data';
import { SITE_URL } from '@/utils/site';

const SiteFooter = () => (
    <footer className="flex flex-col gap-2 border-t border-rule px-5 py-6 font-mono text-[10px] uppercase tracking-[0.12em] text-dim md:flex-row md:items-center md:justify-between md:px-8 md:text-[11px]">
        <span>
            &copy; {new Date().getFullYear()} {profile.name} — Built with Next.js
        </span>
        <span>{SITE_URL.replace('https://', '')}</span>
    </footer>
);

export default SiteFooter;
