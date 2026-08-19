import { skills } from '@/utils/data';

/**
 * Server-rendered so every skill is in the HTML and crawlable — no tabs,
 * no client JavaScript. Categories mirror the resume.
 */
const SkillTable = () => (
    <div className="border-y-[3px] border-paper">
        {skills.map((group, index) => (
            <div
                key={group.category}
                className={`grid grid-cols-1 md:grid-cols-[260px_1fr] ${
                    index < skills.length - 1 ? 'border-b border-rule' : ''
                }`}
            >
                <h3 className="m-0 px-5 pb-2 pt-6 font-mono text-[10px] uppercase tracking-label text-flood md:border-r md:border-rule md:px-8 md:py-7 md:text-[11px]">
                    {group.category}
                </h3>
                <ul className="flex list-none flex-wrap gap-2 p-5 md:px-8 md:py-6">
                    {group.items.map((item) => (
                        <li
                            key={item}
                            className="border border-rule px-3 py-1.5 font-mono text-[11px] md:text-xs"
                        >
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
        ))}
    </div>
);

export default SkillTable;
