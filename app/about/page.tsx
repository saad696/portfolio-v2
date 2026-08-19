import type { Metadata } from 'next';
import ExperienceRow from '@/components/ExperienceRow';
import SkillTable from '@/components/SkillTable';
import CTABand from '@/components/CTABand';
import { Label, SectionHeading } from '@/components/Primitives';
import { education, experience, profile } from '@/utils/data';
import { buildPageMetadata } from '@/utils/site';

export const metadata: Metadata = buildPageMetadata({
    path: '/about',
    title: 'About — Saad Shaikh | Full Stack Developer',
    description:
        '5+ years across Brandlock, Impactguru, and Trigyn (Digital India, WHO NVBDCP) — migrations, auth systems, and measurable product impact.',
});

const FACTS = [
    { key: 'Based in', value: profile.location },
    { key: 'Experience', value: '5+ years' },
    { key: 'Email', value: profile.email },
    { key: 'Phone', value: profile.phone },
];

const Page = () => {
    return (
        <>
            {/* --------------------------------------- title + summary -- */}
            <section className="grid grid-cols-1 border-b-[3px] border-paper lg:grid-cols-2">
                <div className="px-5 py-9 md:px-8 md:py-12 lg:border-r-[3px] lg:border-paper">
                    <h1 className="m-0 font-disp text-[62px] uppercase leading-[0.84] tracking-[-0.05em] sm:text-[88px] md:text-[124px]">
                        About
                        <br />
                        <span className="text-flood">Saad</span>
                    </h1>
                </div>

                <div className="flex flex-col justify-center px-5 py-9 md:px-8 md:py-12">
                    {profile.summary.map((paragraph) => (
                        <p
                            key={paragraph.slice(0, 24)}
                            className="m-0 mb-5 text-base leading-relaxed text-[#D4D4D4] md:mb-6 md:text-[19px]"
                        >
                            {paragraph}
                        </p>
                    ))}

                    <dl className="m-0 grid grid-cols-1 gap-px border border-rule bg-rule sm:grid-cols-2">
                        {FACTS.map((fact) => (
                            <div key={fact.key} className="bg-ink px-4 py-4">
                                <dt className="font-mono text-[10px] uppercase tracking-label text-dim">
                                    {fact.key}
                                </dt>
                                <dd className="m-0 mt-1.5 break-words font-mono text-[13px]">
                                    {fact.value}
                                </dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </section>

            {/* ------------------------------------------------- skills -- */}
            <SectionHeading>Technical skills</SectionHeading>
            <SkillTable />

            {/* --------------------------------------------- experience -- */}
            <SectionHeading
                aside={`${experience.length} roles / 2021 — present`}
            >
                Experience
            </SectionHeading>

            <div className="border-t-[3px] border-paper">
                {experience.map((role) => (
                    <ExperienceRow
                        key={`${role.company}-${role.period}`}
                        role={role}
                    />
                ))}
            </div>

            {/* ---------------------------------------------- education -- */}
            <SectionHeading>Education</SectionHeading>

            <div className="grid grid-cols-1 border-y-[3px] border-paper md:grid-cols-2">
                {education.map((item, index) => (
                    <div
                        key={item.degree}
                        className={`px-5 py-7 md:px-8 md:py-8 ${
                            index === 0
                                ? 'border-b border-rule md:border-b-0 md:border-r'
                                : ''
                        }`}
                    >
                        <Label className="mb-3 text-flood">{item.period}</Label>
                        <h3 className="m-0 font-disp text-[22px] uppercase leading-[1.1] tracking-[-0.03em] md:text-[28px]">
                            {item.degree}
                        </h3>
                        <p className="m-0 mt-3 font-mono text-[13px] text-muted">
                            {item.institution}
                        </p>
                    </div>
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
