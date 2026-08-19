'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NAV = [
    { href: '/', label: 'Home' },
    { href: '/portfolio', label: 'Work' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
];

/**
 * Thumb-reachable bottom bar for small screens. Every target clears 44px.
 * No fake OS chrome — the real status bar renders above the page.
 */
const MobileNav = () => {
    const pathname = usePathname();

    return (
        <nav
            aria-label="Primary"
            className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-4 border-t-[3px] border-paper bg-ink lg:hidden"
        >
            {NAV.map((item, index) => {
                const active = pathname === item.href;
                return (
                    <Link
                        key={item.href}
                        href={item.href}
                        aria-current={active ? 'page' : undefined}
                        className={[
                            'flex min-h-[48px] items-center justify-center px-1 font-mono text-[9px] uppercase tracking-label-sm',
                            index > 0 ? 'border-l border-rule' : '',
                            active ? 'bg-flood text-paper' : 'text-muted',
                        ].join(' ')}
                    >
                        {item.label}
                    </Link>
                );
            })}
        </nav>
    );
};

export default MobileNav;
