import { RESUME_FILENAME, RESUME_PATH } from '@/utils/site';
import { ActionLink, ArrowRight, DownloadIcon } from './Primitives';

interface CTABandProps {
    heading: React.ReactNode;
    sub?: string;
    action: 'resume' | 'contact';
}

const CTABand = ({ heading, sub, action }: CTABandProps) => (
    <section className="flex flex-col gap-6 border-t-[3px] border-paper bg-flood px-5 py-9 md:flex-row md:items-center md:justify-between md:gap-10 md:px-8 md:py-14">
        <div>
            <h2 className="m-0 font-disp text-[32px] uppercase leading-[0.95] tracking-[-0.05em] md:text-[60px]">
                {heading}
            </h2>
            {sub ? (
                <p className="m-0 mt-3 font-mono text-[11px] uppercase tracking-[0.12em] md:mt-4 md:text-xs">
                    {sub}
                </p>
            ) : null}
        </div>

        {action === 'resume' ? (
            <ActionLink
                href={RESUME_PATH}
                download={RESUME_FILENAME}
                variant="ink"
                className="w-full md:w-auto md:min-h-[60px]"
            >
                Download resume
                <DownloadIcon size={16} />
            </ActionLink>
        ) : (
            <ActionLink
                href="/contact"
                variant="ink"
                className="w-full md:w-auto md:min-h-[60px]"
            >
                Get in touch
                <ArrowRight size={16} />
            </ActionLink>
        )}
    </section>
);

export default CTABand;
