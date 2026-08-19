import type { Metadata } from 'next';
import {
    ActionLink,
    ArrowRight,
    DownloadIcon,
    Label,
} from '@/components/Primitives';
import { profile } from '@/utils/data';
import { buildPageMetadata, RESUME_FILENAME, RESUME_PATH } from '@/utils/site';

export const metadata: Metadata = buildPageMetadata({
    path: '/contact',
    title: 'Contact — Saad Shaikh | Full Stack Developer',
    description:
        'Get in touch — Full Stack Developer in Mumbai, open to senior full-stack and frontend roles.',
});

const DETAILS = [
    { key: 'Phone', value: profile.phone, href: `tel:${profile.phoneHref}` },
    {
        key: 'LinkedIn',
        value: profile.socials.linkedInLabel,
        href: profile.socials.linkedIn,
        external: true,
    },
    {
        key: 'GitHub',
        value: profile.socials.githubLabel,
        href: profile.socials.github,
        external: true,
    },
    { key: 'Based in', value: profile.location },
];

const Page = () => {
    return (
        <>
            {/* -------------------------------------------- big statement -- */}
            <section className="border-b-[3px] border-paper px-5 py-10 md:px-8 md:py-16">
                <Label className="mb-7 text-muted md:mb-9">
                    {profile.availability} &nbsp;/&nbsp; {profile.location}{' '}
                    &nbsp;/&nbsp; Remote friendly
                </Label>
                <h1 className="m-0 font-disp text-[64px] uppercase leading-[0.84] tracking-[-0.05em] sm:text-[96px] md:text-[128px] xl:text-[150px] xl:leading-[0.82]">
                    Say
                    <br />
                    <span className="my-1 inline-block bg-flood px-2 md:px-3.5">
                        Hello
                    </span>
                </h1>
            </section>

            {/* --------------------------- email slab: the primary action -- */}
            <a
                href={`mailto:${profile.email}`}
                className="group flex items-center justify-between gap-6 border-b-[3px] border-paper bg-paper px-5 py-8 text-ink transition-colors hover:bg-flood hover:text-paper md:px-8 md:py-11"
            >
                <div className="min-w-0">
                    <Label className="mb-3 text-[#525252] group-hover:text-white/80 md:mb-4">
                        Email — fastest way to reach me
                    </Label>
                    <div className="break-all font-disp text-[26px] leading-none tracking-[-0.045em] sm:text-[38px] md:text-[54px]">
                        {profile.email}
                    </div>
                </div>
                <span className="shrink-0">
                    <ArrowRight size={44} />
                </span>
            </a>

            {/* ------------------------------------------------- details -- */}
            <div className="grid grid-cols-1 border-b-[3px] border-paper sm:grid-cols-2 lg:grid-cols-4">
                {DETAILS.map((detail, index) => {
                    const inner = (
                        <>
                            <Label className="mb-3 text-flood md:mb-3.5">
                                {detail.key}
                            </Label>
                            <div className="break-words font-mono text-sm md:text-[15px]">
                                {detail.value}
                            </div>
                        </>
                    );

                    const cellClass = `px-5 py-7 md:px-8 md:py-8 border-rule ${
                        index < DETAILS.length - 1 ? 'border-b sm:border-b-0' : ''
                    } ${index % 2 === 0 ? 'sm:border-r' : ''} ${
                        index < 2 ? 'sm:border-b lg:border-b-0' : ''
                    } ${index === 2 ? 'lg:border-r' : ''} ${
                        index === 3 ? 'sm:border-r-0' : ''
                    }`;

                    return detail.href ? (
                        <a
                            key={detail.key}
                            href={detail.href}
                            className={`${cellClass} transition-colors hover:bg-surface`}
                            {...(detail.external
                                ? { target: '_blank', rel: 'noopener noreferrer' }
                                : {})}
                        >
                            {inner}
                        </a>
                    ) : (
                        <div key={detail.key} className={cellClass}>
                            {inner}
                        </div>
                    );
                })}
            </div>

            {/* -------------------------------------------- resume band -- */}
            <section className="flex flex-col gap-6 border-b-[3px] border-paper bg-flood px-5 py-9 md:flex-row md:items-center md:justify-between md:gap-10 md:px-8 md:py-12">
                <div>
                    <h2 className="m-0 mb-3 font-disp text-[30px] uppercase leading-none tracking-[-0.04em] md:text-[40px]">
                        The full record
                    </h2>
                    <p className="m-0 font-mono text-[11px] uppercase tracking-[0.1em] md:text-xs">
                        One page · PDF · updated Aug 2026
                    </p>
                </div>
                <ActionLink
                    href={RESUME_PATH}
                    download={RESUME_FILENAME}
                    variant="ink"
                    className="w-full md:w-auto md:min-h-[60px]"
                >
                    Download resume
                    <DownloadIcon size={16} />
                </ActionLink>
            </section>
        </>
    );
};

export default Page;
