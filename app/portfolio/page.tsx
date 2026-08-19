import type { Metadata } from 'next';
import ProjectRow from '@/components/ProjectRow';
import CTABand from '@/components/CTABand';
import { ArrowUpRight, Label } from '@/components/Primitives';
import { earlierProjects, projects } from '@/utils/data';
import { buildPageMetadata } from '@/utils/site';

export const metadata: Metadata = buildPageMetadata({
    path: '/portfolio',
    title: 'Projects — Saad Shaikh | Full Stack Developer',
    description:
        'Selected work: VikinX (founder), Brandlock platform modernization, Impactguru KYC overhaul, MeitY scholarship portal, and more.',
});

const Page = () => {
    return (
        <>
            {/* -------------------------------------------------- title -- */}
            <section className="flex flex-col gap-6 border-b-[3px] border-paper px-5 py-9 md:flex-row md:items-end md:justify-between md:px-8 md:py-12">
                <h1 className="m-0 font-disp text-[56px] uppercase leading-[0.84] tracking-[-0.05em] sm:text-[88px] md:text-[124px]">
                    Selected
                    <br />
                    <span className="text-flood">Work</span>
                </h1>
                <Label className="leading-loose text-muted md:text-right">
                    {String(projects.length).padStart(2, '0')} featured
                    <br />
                    {String(earlierProjects.length).padStart(2, '0')} earlier
                    <br />
                    2021 — 2026
                </Label>
            </section>

            {/* ------------------------------------------------- featured -- */}
            {projects.map((project, index) => (
                <ProjectRow
                    key={project.slug}
                    project={project}
                    index={index + 1}
                    flipped={index % 2 === 1}
                    priority={index === 0}
                />
            ))}

            {/* -------------------------------------------------- earlier -- */}
            <section className="flex flex-wrap items-baseline justify-between gap-3 px-5 pb-6 pt-10 md:px-8 md:pt-11">
                <h2 className="m-0 font-disp text-[28px] uppercase leading-none tracking-[-0.045em] md:text-[44px]">
                    Earlier work
                </h2>
                <Label className="text-dim">
                    Early-career builds, kept for the full picture
                </Label>
            </section>

            <div className="border-t border-rule">
                {earlierProjects.map((project, index) => (
                    <a
                        key={project.slug}
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="grid grid-cols-1 items-center gap-3 border-b border-rule px-5 py-5 transition-colors hover:bg-surface md:grid-cols-[60px_1fr_1.4fr_260px] md:gap-6 md:px-8"
                    >
                        <span className="font-mono text-xs text-dim">
                            {String(projects.length + index + 1).padStart(2, '0')}
                        </span>
                        <span className="flex items-center gap-2 font-disp text-lg uppercase tracking-[-0.03em] md:text-xl">
                            {project.name}
                            <ArrowUpRight size={12} />
                        </span>
                        <span className="text-[15px] leading-snug text-muted">
                            {project.description}
                        </span>
                        <span className="font-mono text-[10px] uppercase tracking-label-sm text-dim md:text-right md:text-[11px]">
                            {project.stack}
                        </span>
                    </a>
                ))}
            </div>

            <CTABand
                heading={
                    <>
                        Want the
                        <br />
                        full detail?
                    </>
                }
                sub="One page · PDF · updated Aug 2026"
                action="resume"
            />
        </>
    );
};

export default Page;
