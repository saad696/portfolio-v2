import Link from 'next/link';
import React from 'react';

/* ---------------------------------------------------------------- icons -- */

export const ArrowRight = ({ size = 15 }: { size?: number }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="square"
        aria-hidden="true"
    >
        <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
);

export const ArrowUpRight = ({ size = 13 }: { size?: number }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="square"
        aria-hidden="true"
    >
        <path d="M7 17L17 7M9 7h8v8" />
    </svg>
);

export const DownloadIcon = ({ size = 14 }: { size?: number }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="square"
        aria-hidden="true"
    >
        <path d="M12 3v13M6 11l6 6 6-6M4 21h16" />
    </svg>
);

/* --------------------------------------------------------------- labels -- */

export const Label = ({
    children,
    className = '',
    as: Tag = 'div',
}: {
    children: React.ReactNode;
    className?: string;
    as?: 'div' | 'span' | 'h2' | 'p';
}) => (
    <Tag
        className={`font-mono text-[10px] uppercase tracking-label-lg md:text-[11px] ${className}`}
    >
        {children}
    </Tag>
);

export const SectionHeading = ({
    children,
    aside,
}: {
    children: React.ReactNode;
    aside?: React.ReactNode;
}) => (
    <div className="flex flex-wrap items-baseline justify-between gap-3 px-5 pb-6 pt-10 md:px-8 md:pb-7 md:pt-11">
        <h2 className="m-0 font-disp text-[34px] uppercase leading-none tracking-[-0.045em] md:text-[56px]">
            {children}
        </h2>
        {aside ? (
            <Label className="text-muted">{aside}</Label>
        ) : null}
    </div>
);

/* -------------------------------------------------------------- buttons -- */

type ButtonVariant = 'primary' | 'outline' | 'ink';

const VARIANTS: Record<ButtonVariant, string> = {
    primary: 'bg-paper text-ink hover:bg-flood hover:text-paper',
    outline: 'border border-paper text-paper hover:bg-paper hover:text-ink',
    ink: 'bg-ink text-paper hover:bg-paper hover:text-ink',
};

export const ActionLink = ({
    href,
    children,
    variant = 'primary',
    external = false,
    download,
    className = '',
}: {
    href: string;
    children: React.ReactNode;
    variant?: ButtonVariant;
    external?: boolean;
    download?: string;
    className?: string;
}) => {
    const classes = `inline-flex min-h-[48px] items-center justify-center gap-2.5 px-6 font-mono text-[11px] uppercase tracking-[0.12em] transition-colors md:px-7 md:text-xs ${VARIANTS[variant]} ${className}`;

    if (external || download) {
        return (
            <a
                href={href}
                className={classes}
                download={download}
                {...(external
                    ? { target: '_blank', rel: 'noopener noreferrer' }
                    : {})}
            >
                {children}
            </a>
        );
    }

    return (
        <Link href={href} className={classes}>
            {children}
        </Link>
    );
};

/* ----------------------------------------------------------------- tags -- */

export const Tag = ({
    children,
    accent = false,
}: {
    children: React.ReactNode;
    accent?: boolean;
}) => (
    <span
        className={`px-2.5 py-1.5 font-mono text-[9px] uppercase tracking-[0.12em] md:text-[10px] ${
            accent ? 'bg-flood text-paper' : 'border border-rule text-muted'
        }`}
    >
        {children}
    </span>
);

/* ----------------------------------------------------- image placeholder -- */

export const HatchSlab = ({ className = '' }: { className?: string }) => (
    <div
        className={`hatch relative flex items-center justify-center bg-surface ${className}`}
    >
        <Label className="text-[#4A4A4A]">Screenshot Not Available</Label>
    </div>
);
