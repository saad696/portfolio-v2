import { ImageResponse } from 'next/og';

export const runtime = 'edge';

const SIZE = { width: 1200, height: 630 };

/**
 * Share card served at a stable `/og` URL and referenced explicitly by every
 * page's metadata. Mirrors the site's brutalist language: flat blocks, hard
 * rules, no gradients.
 */
export function GET() {
    return new ImageResponse(
        (
            <div
                style={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    background: '#0A0A0A',
                    color: '#FFFFFF',
                    fontFamily: 'sans-serif',
                }}
            >
                {/* top rule + eyebrow */}
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        padding: '28px 48px',
                        borderBottom: '6px solid #FFFFFF',
                        fontSize: 22,
                        letterSpacing: '0.18em',
                        textTransform: 'uppercase',
                        color: '#A3A3A3',
                    }}
                >
                    <span>Saad Shaikh</span>
                    <span>Mumbai, IN</span>
                </div>

                {/* headline */}
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        padding: '44px 48px 0 48px',
                        flexGrow: 1,
                    }}
                >
                    <div
                        style={{
                            display: 'flex',
                            fontSize: 92,
                            fontWeight: 900,
                            letterSpacing: '-0.05em',
                            lineHeight: 1,
                            textTransform: 'uppercase',
                        }}
                    >
                        Full Stack
                    </div>
                    <div style={{ display: 'flex', marginTop: 8 }}>
                        <div
                            style={{
                                display: 'flex',
                                fontSize: 92,
                                fontWeight: 900,
                                letterSpacing: '-0.05em',
                                lineHeight: 1,
                                textTransform: 'uppercase',
                                background: '#7C3AED',
                                padding: '0 16px',
                            }}
                        >
                            Developer
                        </div>
                    </div>
                    <div
                        style={{
                            display: 'flex',
                            marginTop: 28,
                            fontSize: 30,
                            color: '#D4D4D4',
                        }}
                    >
                        React · TypeScript · Node.js · PostgreSQL
                    </div>
                </div>

                {/* metric band */}
                <div
                    style={{
                        display: 'flex',
                        borderTop: '6px solid #FFFFFF',
                    }}
                >
                    {[
                        { v: '−35%', l: 'BUNDLE SIZE' },
                        { v: '65%', l: 'KYC COMPLETION' },
                        { v: '80%', l: 'FASTER RENDERS' },
                        { v: '05', l: 'DEVELOPERS LED' },
                    ].map((metric, index) => (
                        <div
                            key={metric.l}
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                width: '25%',
                                padding: '26px 28px',
                                background: index === 0 ? '#7C3AED' : '#0A0A0A',
                                borderRight:
                                    index < 3 ? '2px solid #2E2E2E' : 'none',
                            }}
                        >
                            <div
                                style={{
                                    display: 'flex',
                                    fontSize: 46,
                                    fontWeight: 900,
                                    letterSpacing: '-0.04em',
                                }}
                            >
                                {metric.v}
                            </div>
                            <div
                                style={{
                                    display: 'flex',
                                    marginTop: 10,
                                    fontSize: 17,
                                    letterSpacing: '0.12em',
                                    color: index === 0 ? '#FFFFFF' : '#A3A3A3',
                                }}
                            >
                                {metric.l}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        ),
        SIZE,
    );
}
