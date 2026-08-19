'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { profile } from '@/utils/data';

const NAV = [
    { href: '/portfolio', label: 'Work' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
];

const SiteHeader = () => {
    const pathname = usePathname();

    return (
        <header className="sticky top-0 z-50 flex items-stretch justify-between border-b-[3px] border-paper bg-ink">
            <Link
                href="/"
                className="flex items-center border-r-0 px-5 py-3 font-disp text-[15px] uppercase tracking-[-0.03em] md:border-r-[3px] md:border-paper md:px-8 md:py-4 md:text-xl"
            >
                {profile.name}
            </Link>

            {/* Desktop nav — the mobile equivalent is the fixed bottom bar. */}
            <nav aria-label="Primary" className="hidden items-stretch lg:flex">
                {NAV.map((item, index) => {
                    const active = pathname === item.href;
                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            aria-current={active ? 'page' : undefined}
                            className={[
                                'flex items-center px-7 font-mono text-[11px] uppercase tracking-label transition-colors',
                                index > 0 ? 'border-l border-rule' : '',
                                active
                                    ? 'bg-flood text-paper'
                                    : 'text-muted hover:text-paper',
                            ].join(' ')}
                        >
                            {item.label}
                        </Link>
                    );
                })}
                <span className="flex items-center gap-2 border-l-[3px] border-paper bg-paper px-7 font-mono text-[11px] uppercase tracking-label text-ink">
                    <span className="dot h-[7px] w-[7px] bg-signal" />
                    Available
                </span>
            </nav>

            {/* Mobile: availability only — navigation lives in the bottom bar. */}
            <span className="flex items-center gap-2 bg-paper px-5 font-mono text-[10px] uppercase tracking-label-sm text-ink lg:hidden">
                <span className="dot h-[6px] w-[6px] bg-signal" />
                Available
            </span>
        </header>
    );
};

export default SiteHeader;
