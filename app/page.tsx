import Image from 'next/image';
import type { Metadata } from 'next';
import MetricBand from '@/components/MetricBand';
import CTABand from '@/components/CTABand';
import {
    ActionLink,
    ArrowRight,
    DownloadIcon,
    Label,
    SectionHeading,
    Tag,
} from '@/components/Primitives';
import { profile, projects } from '@/utils/data';
import { buildPageMetadata, RESUME_FILENAME, RESUME_PATH } from '@/utils/site';

export const metadata: Metadata = buildPageMetadata({
    path: '/',
    title: 'Saad Shaikh — Full Stack Developer | React, TypeScript, Node.js',
    description:
        'Full Stack Developer with 5+ years shipping SaaS, crowdfunding, and Government of India platforms. React, TypeScript, Node.js, PostgreSQL. Based in Mumbai.',
});

const featured = projects.slice(0, 4);

export default function Home() {
    return (
        <>
            {/* ---------------------------------------------------- hero -- */}
            <section className="grid grid-cols-1 border-b-[3px] border-paper lg:grid-cols-[1fr_420px]">
                <div className="px-5 py-9 md:px-8 md:py-12 lg:border-r-[3px] lg:border-paper">
                    {/* The h1 below already says the role — don't repeat it here. */}
                    <Label className="mb-7 text-muted md:mb-9">
                        {profile.stack} &nbsp;/&nbsp; 5+ years &nbsp;/&nbsp;{' '}
                        Mumbai, IN
                    </Label>

                    <h1 className="m-0 mb-7 font-disp text-[62px] uppercase leading-[0.84] tracking-[-0.05em] sm:text-[92px] md:mb-10 md:text-[120px] xl:text-[148px] xl:leading-[0.82]">
                        {profile.headline[0]}
                        <br />
                        <span className="my-1 inline-block bg-flood px-2 md:px-3.5">
                            {profile.headline[1]}
                        </span>
                        <br />
                        {profile.headline[2]}
                    </h1>

                    <p className="m-0 mb-7 max-w-[700px] text-base leading-relaxed text-[#D4D4D4] md:mb-9 md:text-xl">
                        {profile.intro}
                    </p>

                    <div className="flex flex-col md:flex-row">
                        <ActionLink
                            href={RESUME_PATH}
                            download={RESUME_FILENAME}
                            variant="primary"
                        >
                            Download resume
                            <DownloadIcon />
                        </ActionLink>
                        <ActionLink
                            href="/portfolio"
                            variant="outline"
                            className="border-t-0 md:border-l-0 md:border-t"
                        >
                            Selected work
                            <ArrowRight />
                        </ActionLink>
                    </div>
                </div>

                {/* Portrait as a hard-edged slab pinned to the grid. */}
                <div className="relative flex min-h-[360px] items-end justify-center overflow-hidden bg-flood lg:min-h-[620px]">
                    <div className="scanlines absolute inset-0" aria-hidden="true" />
                    <Label className="absolute left-5 top-5 text-ink">
                        Est. 2021
                    </Label>
                    <div className="relative h-[88%] w-[84%] bg-ink">
                        <Image
                            src="/saad-img-portfolio.png"
                            alt="Saad Shaikh, Full Stack Developer based in Mumbai"
                            fill
                            sizes="(max-width: 1024px) 84vw, 360px"
                            priority
                            className="object-contain object-bottom"
                        />
                    </div>
                </div>
            </section>

            <MetricBand />

            {/* ----------------------------------------------- statement -- */}
            <section className="border-b-[3px] border-paper bg-paper px-5 py-8 text-ink md:px-8 md:py-14">
                <div className="grid grid-cols-1 gap-5 md:grid-cols-[300px_1fr] md:gap-12">
                    <Label className="md:pt-2.5">Where the work has landed</Label>
                    <p className="m-0 max-w-[940px] font-disp text-[24px] uppercase leading-[1.15] tracking-[-0.035em] md:text-[40px]">
                        {profile.statement}
                    </p>
                </div>
            </section>

            {/* --------------------------------------------------- work -- */}
            <SectionHeading aside={`2021 — 2026 / 04 of ${String(projects.length).padStart(2, '0')}`}>
                Selected work
            </SectionHeading>

            <div className="grid grid-cols-1 border-t-[3px] border-paper md:grid-cols-2">
                {featured.map((project, index) => (
                    <article
                        key={project.slug}
                        className={`border-b border-rule px-5 py-8 md:px-8 md:py-9 ${
                            index % 2 === 0 ? 'md:border-r' : ''
                        }`}
                    >
                        <div className="mb-3.5 flex items-baseline gap-4 md:gap-5">
                            <span className="font-disp text-[34px] leading-none tracking-[-0.05em] text-flood md:text-[52px]">
                                {String(index + 1).padStart(2, '0')}
                            </span>
                            <h3 className="m-0 font-disp text-[24px] uppercase leading-[1.05] tracking-[-0.035em] md:text-[30px]">
                                {project.name}
                            </h3>
                        </div>

                        <div className="mb-3.5 flex flex-wrap gap-1.5">
                            {project.tags.map((tag, tagIndex) => (
                                <Tag key={tag} accent={tagIndex === 0}>
                                    {tag}
                                </Tag>
                            ))}
                        </div>

                        <p className="m-0 mb-4 text-[15px] leading-relaxed text-muted md:text-base">
                            {project.description}
                        </p>

                        <div className="font-mono text-[9px] uppercase leading-loose tracking-label-sm text-dim md:text-[10px]">
                            {project.stack}
                        </div>
                    </article>
                ))}
            </div>

            <div className="px-5 py-8 md:px-8 md:py-10">
                <ActionLink href="/portfolio" variant="outline">
                    All work
                    <ArrowRight />
                </ActionLink>
            </div>

            <CTABand
                heading={
                    <>
                        Let&rsquo;s build
                        <br />
                        something.
                    </>
                }
                sub={`${profile.email} / ${profile.phone}`}
                action="contact"
            />
        </>
    );
}
