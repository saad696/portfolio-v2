import type { Config } from 'tailwindcss';

/**
 * Brutalist system. Radius 0 and no shadows are enforced by simply not
 * defining any — the utilities exist in core, but nothing here encourages
 * them and `borderRadius`/`boxShadow` are pinned to none.
 */
const config: Config = {
    content: [
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                ink: '#0A0A0A',
                paper: '#FFFFFF',
                flood: '#7C3AED',
                'flood-soft': '#C4B5FD',
                rule: '#2E2E2E',
                muted: '#A3A3A3',
                dim: '#6B6B6B',
                signal: '#16A34A',
                surface: '#141414',
                hatch: '#1A1A1A',
            },
            fontFamily: {
                disp: ['var(--font-disp)', 'Arial Black', 'sans-serif'],
                body: ['var(--font-body)', 'system-ui', 'sans-serif'],
                mono: ['var(--font-mono)', 'ui-monospace', 'monospace'],
            },
            letterSpacing: {
                label: '0.14em',
                'label-sm': '0.1em',
                'label-lg': '0.16em',
            },
            maxWidth: {
                measure: '65ch',
            },
        },
    },
    plugins: [],
};

export default config;
