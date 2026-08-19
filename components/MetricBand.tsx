import { metrics } from '@/utils/data';

/**
 * The four numbers a hiring manager should leave with. Sits directly under
 * the fold on the home page — 2x2 on mobile, 4-across from md up, with the
 * first cell flooded so it anchors the row.
 */
const MetricBand = () => (
    <section
        aria-label="Impact at a glance"
        className="grid grid-cols-2 border-b-[3px] border-paper md:grid-cols-4"
    >
        {metrics.map((metric, index) => (
            <div
                key={metric.label}
                className={[
                    'px-5 py-6 md:px-7 md:py-9',
                    index === 0 ? 'bg-flood' : '',
                    // Hairlines between cells; the flood cell darkens its own.
                    index % 2 === 0 ? 'border-r md:border-r' : '',
                    index < 2 ? 'border-b md:border-b-0' : '',
                    index === 0
                        ? 'border-black/35'
                        : 'border-rule',
                    index === 3 ? 'md:border-r-0' : '',
                ].join(' ')}
            >
                <div className="font-disp text-[40px] leading-[0.9] tracking-[-0.05em] md:text-[64px]">
                    {metric.value}
                </div>
                <div
                    className={`mt-3 font-mono text-[9px] uppercase leading-relaxed tracking-[0.12em] md:mt-4 md:text-[11px] ${
                        index === 0 ? 'text-paper' : 'text-muted'
                    }`}
                >
                    {metric.label}
                    <br />
                    {metric.detail}
                </div>
            </div>
        ))}
    </section>
);

export default MetricBand;
