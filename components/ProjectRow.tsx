import Image from 'next/image';
import type { Project } from '@/utils/data';
import { ActionLink, ArrowUpRight, HatchSlab, Tag } from './Primitives';

interface ProjectRowProps {
    project: Project;
    index: number;
    /** Odd rows put the screenshot on the left at desktop widths. */
    flipped?: boolean;
    priority?: boolean;
}

const ProjectRow = ({
    project,
    index,
    flipped = false,
    priority = false,
}: ProjectRowProps) => {
    const media = project.image ? (
        <div className="relative min-h-[220px] bg-surface md:min-h-[380px]">
            <Image
                src={project.image}
                alt={`${project.name} — product screenshot`}
                fill
                sizes="(max-width: 768px) 100vw, 560px"
                priority={priority}
                className="object-contain"
            />
        </div>
    ) : (
        <HatchSlab className="min-h-[220px] md:min-h-[380px]" />
    );

    const body = (
        <div className="px-5 py-8 md:px-8 md:py-9">
            <div className="mb-4 flex items-baseline gap-4 md:gap-5">
                <span className="font-disp text-[34px] leading-none tracking-[-0.05em] text-flood md:text-[60px]">
                    {String(index).padStart(2, '0')}
                </span>
                <h2 className="m-0 font-disp text-[26px] uppercase leading-[1.05] tracking-[-0.04em] md:text-[40px]">
                    {project.name}
                </h2>
            </div>

            <div className="mb-4 flex flex-wrap gap-1.5 md:mb-5 md:gap-2">
                {project.tags.map((tag, tagIndex) => (
                    <Tag key={tag} accent={tagIndex === 0}>
                        {tag}
                    </Tag>
                ))}
            </div>

            <p className="m-0 mb-4 max-w-measure text-[15px] leading-relaxed text-[#D4D4D4] md:mb-5 md:text-[17px]">
                {project.description}
            </p>

            <div className="font-mono text-[9px] uppercase leading-loose tracking-label-sm text-dim md:text-[11px]">
                {project.stack}
            </div>

            {project.liveUrl ? (
                <div className="mt-5 md:mt-6">
                    <ActionLink href={project.liveUrl} external variant="primary">
                        {project.liveLabel}
                        <ArrowUpRight />
                    </ActionLink>
                </div>
            ) : null}
        </div>
    );

    return (
        <article className="border-b border-rule">
            <div
                className={`grid grid-cols-1 ${
                    flipped
                        ? 'md:grid-cols-[560px_1fr]'
                        : 'md:grid-cols-[1fr_560px]'
                }`}
            >
                {flipped ? (
                    <>
                        <div className="order-1 border-b border-rule md:border-b-0 md:border-r">
                            {media}
                        </div>
                        <div className="order-2">{body}</div>
                    </>
                ) : (
                    <>
                        <div className="order-2 md:order-1 md:border-r md:border-rule">
                            {body}
                        </div>
                        <div className="order-1 border-b border-rule md:order-2 md:border-b-0">
                            {media}
                        </div>
                    </>
                )}
            </div>
        </article>
    );
};

export default ProjectRow;
