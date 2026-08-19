import type { Role } from '@/utils/data';
import { renderEmphasis } from '@/utils/emphasis';

/**
 * Replaces the old vertical-timeline library entirely: a fixed left rail for
 * company/role/dates, bullets at a readable size on the right. The current
 * role floods purple so it reads first.
 */
const ExperienceRow = ({ role }: { role: Role }) => (
    <article
        className={`grid grid-cols-1 border-b border-rule md:grid-cols-[300px_1fr] ${
            role.current ? 'bg-flood' : ''
        }`}
    >
        <div
            className={`px-5 pb-4 pt-7 md:border-r md:px-8 md:py-8 md:pb-8 ${
                role.current ? 'border-black/35' : 'border-rule'
            }`}
        >
            <h3 className="m-0 font-disp text-[22px] uppercase leading-[1.05] tracking-[-0.03em] md:text-[26px]">
                {role.company}
            </h3>
            <div
                className={`mt-3 font-mono text-[10px] uppercase leading-relaxed tracking-label-sm md:text-[11px] ${
                    role.current ? 'text-paper' : 'text-flood'
                }`}
            >
                {role.title}
            </div>
            <div
                className={`mt-3 font-mono text-[10px] uppercase tracking-label-sm md:text-[11px] ${
                    role.current ? 'text-white/75' : 'text-dim'
                }`}
            >
                {role.period}
            </div>
        </div>

        <div className="px-5 pb-8 pt-2 md:px-8 md:py-8">
            <ul
                className={`m-0 flex list-disc flex-col gap-3 pl-5 ${
                    role.current ? 'text-paper' : 'text-[#D4D4D4]'
                }`}
            >
                {role.bullets.map((bullet, index) => (
                    <li
                        key={index}
                        className="text-[15px] leading-relaxed md:text-base"
                    >
                        {renderEmphasis(bullet)}
                    </li>
                ))}
            </ul>
        </div>
    </article>
);

export default ExperienceRow;
