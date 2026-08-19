/**
 * Single source of truth for every fact on the site.
 * Mirrors Saad_Shaikh_Resume_Latest.pdf — keep the two in sync.
 *
 * Bullet strings use `**bold**` for emphasis; `renderEmphasis` in
 * `utils/emphasis.tsx` turns it into <strong>. No markdown dependency.
 */

export const profile = {
    name: 'Saad Shaikh',
    role: 'Full Stack Developer',
    stack: 'React · TypeScript · Node.js',
    location: 'Mumbai, India',
    email: 'sde.saadshaikh@gmail.com',
    phone: '+91 70396 92252',
    phoneHref: '+917039692252',
    availability: 'Open to senior full-stack & frontend roles',
    headline: ['Ships', 'Hard', 'Things'],
    statement:
        'I take production systems nobody wants to touch — and rebuild them without breaking what already works.',
    intro:
        '5+ years designing, building and scaling production web applications across SaaS, crowdfunding and government platforms. Legacy-to-modern migrations, authentication systems, and features that move real numbers.',
    summary: [
        'Full Stack Developer with 5+ years designing, building and scaling production web applications in React, TypeScript, Node.js and PostgreSQL across SaaS, crowdfunding and government platforms.',
        'Tech lead experienced in mentoring, 5-developer team leadership and direct client management. Off-keyboard: gym, motorcycles, and good coffee.',
    ],
    socials: {
        linkedIn: 'https://in.linkedin.com/in/saad-shaikh-278452193',
        linkedInLabel: 'saad-shaikh-278452193',
        github: 'https://github.com/saad696',
        githubLabel: 'github.com/saad696',
    },
};

export const metrics = [
    { value: '−35%', label: 'Bundle size', detail: 'React 16 → 18' },
    { value: '65%', label: 'KYC completion', detail: 'up from 6%' },
    { value: '80%', label: 'Faster renders', detail: 'dynamic dashboards' },
    { value: '05', label: 'Developers led', detail: 'Govt. of India portal' },
];

export const skills = [
    {
        category: 'Frontend',
        items: [
            'React',
            'Next.js',
            'TypeScript',
            'JavaScript (ES6+)',
            'Redux',
            'React Query',
            'Zustand',
            'Angular',
            'HTML5',
            'CSS3',
            'SCSS',
            'Tailwind CSS',
            'Material UI',
            'Ant Design',
            'Framer Motion',
        ],
    },
    {
        category: 'Backend & databases',
        items: [
            'Node.js',
            'Express.js',
            'Koa.js',
            'LoopBack 4',
            'Strapi',
            'REST APIs',
            'OAuth 2.0 / OIDC',
            'RBAC',
            'PostgreSQL',
            'MongoDB',
            'Redis',
            'Firebase',
            'BullMQ',
        ],
    },
    {
        category: 'Cloud & DevOps',
        items: [
            'AWS S3',
            'CloudFront',
            'Docker',
            'CI/CD',
            'GitHub Actions',
            'Vite',
            'New Relic (APM)',
            'Git',
        ],
    },
    {
        category: 'Testing & practices',
        items: [
            'Jest',
            'Playwright',
            'TDD',
            'Agile / Scrum',
            'Code Review',
            'System Design',
            'Mentoring',
        ],
    },
];

export interface Role {
    company: string;
    title: string;
    period: string;
    /** The current role, rendered as a purple flood block. */
    current?: boolean;
    bullets: string[];
}

export const experience: Role[] = [
    {
        company: 'Brandlock',
        title: 'Software Engineering Consultant',
        period: 'Aug 2024 — Present',
        current: true,
        bullets: [
            'Own full-stack delivery across 5 repos (React/TypeScript, Node.js/Express, PostgreSQL) — **~1,000 commits, top-2 contributor on four**.',
            'Migrated the client dashboard from React 16 to React 18 + TypeScript on Vite (React Query, Zustand, Tailwind), **cutting bundle size 35%**; rebuilt the Express backend in TypeScript with strict layering that **eliminated the SQL injection surface platform-wide**.',
            'Unified 3 duplicate auth implementations into a **contract-first npm package family (v2.10.x) serving 3 production apps** — OAuth2/OIDC SSO, MFA, magic links, RBAC and full security hardening, shipped flag-gated.',
            'Built the Coupon Template Builder from zero as a shared React/TS library (drag-and-drop canvas, 7-state publish workflow) driving an **18% engagement lift**; also shipped dynamic dashboards (**80% faster renders**) and self-serve onboarding (**+15% conversion**).',
            'Strengthened platform reliability with BullMQ queues, Redis caching, S3/CloudFront pipelines, New Relic APM and CI/CD; fixed stale-chunk deploy failures via a deployment-registry system while mentoring across data, QA and design.',
        ],
    },
    {
        company: 'Trigyn Technologies',
        title: 'Software Engineer',
        period: 'Oct 2023 — Jul 2024',
        bullets: [
            '**Recalled by the company** to deliver critical functionality for the Visvesvaraya PhD Scheme portal (Ministry of Electronics & IT, Govt. of India) under tight deadlines.',
            '**Selected for the WHO NVBDCP** (National Vector Borne Disease Control Programme) project, building modules for national health data management and disease surveillance.',
        ],
    },
    {
        company: 'Impactguru',
        title: 'Software Engineer II',
        period: 'May 2023 — Oct 2023',
        bullets: [
            'Increased KYC document-upload completion **from 6% to 65%** by re-architecting the KYC module with improved UX flow and error handling.',
            'Cut fundraiser listing and performance page load times by **8%** and reduced fundraiser-creation failures by **10%** through frontend optimization and API improvements.',
            'Built end-to-end fundraiser creation flows for NGOs, personal causes and creative projects, and integrated the **Sendbird SDK** for in-app user–admin chat; delivered in 2-week Agile sprints.',
        ],
    },
    {
        company: 'Trigyn Technologies',
        title: 'Software Engineer',
        period: 'Dec 2021 — Apr 2023',
        bullets: [
            '**Led a 5-developer team** building Digital India Corporation’s nationwide scholarship platform; architected National Single Sign-On (NSSO / Meri Pehchaan) authentication, proposal workflows, payment gateway and student portal.',
            'Managed direct client communications for requirements gathering, technical guidance and iterative releases; **promoted from Associate to Full Stack Software Engineer** based on project leadership.',
        ],
    },
    {
        company: 'Lirctek',
        title: 'Frontend Engineer',
        period: 'Jul 2021 — Dec 2021',
        bullets: [
            'Rebuilt the **Electronic Logging Device (ELD) module — 9 submodules** spanning live map tracking, data visualization, time management and compliance reporting — for a fleet-management platform serving trucking companies.',
            'Led responsive-design implementation across the platform and supported technical hiring through candidate interviews and evaluations.',
        ],
    },
];

export interface Project {
    slug: string;
    name: string;
    /** Rendered on two lines when it contains a newline. */
    tags: string[];
    description: string;
    stack: string;
    /** Landscape screenshot. Null renders the hatched placeholder slab. */
    image: string | null;
    liveUrl?: string;
    liveLabel?: string;
}

export const projects: Project[] = [
    {
        slug: 'vikinx',
        name: 'VikinX',
        tags: ['Founder', 'Full stack'],
        description:
            'Motorcycle community platform built with Next.js 14 — separate client and admin portals for riders to connect, track rides and manage communities, with integrated safety features and route management. Founded it, built it, shipped it.',
        stack: 'Next.js 14 · React 18 · TypeScript · Node · Express · Firebase · Cloudinary',
        image: '/projects-ss/vx1.png',
        liveUrl: 'https://vikinx.in',
        liveLabel: 'vikinx.in',
    },
    {
        slug: 'brandlock',
        name: 'Brandlock',
        tags: ['Consultant', 'Full stack'],
        description:
            'Full-stack delivery across 5 repos. Migrated the client dashboard React 16 → 18 on Vite (−35% bundle), rebuilt the Express backend in TypeScript eliminating the SQL injection surface, and unified 3 duplicate auth implementations into one contract-first package family serving 3 production apps.',
        stack: 'React · TypeScript · Express · PostgreSQL · Redis · BullMQ · AWS · Docker',
        image: '/projects-ss/bl-1.png',
    },
    {
        slug: 'visvesvaraya-phd',
        name: 'Visvesvaraya PhD Scheme',
        tags: ['Govt. of India', 'Team lead — 5 devs'],
        description:
            'Digital India Corporation’s nationwide PhD scholarship platform for the Ministry of Electronics & IT. Architected National Single Sign-On (NSSO / Meri Pehchaan), proposal workflows, payment gateway and the student portal — and managed the client relationship directly.',
        stack: 'Angular · TypeScript · Angular Material · Ionic · Strapi',
        image: '/projects-ss/ps1.png',
        liveUrl: 'http://phd.digitalindiacorporation.in',
        liveLabel: 'phd.digitalindiacorporation.in',
    },
    {
        slug: 'impactguru',
        name: 'Impactguru',
        tags: ['Engineer II', 'Frontend'],
        description:
            'India-wide crowdfunding platform for NGOs, medical fundraisers and personal causes. Re-architected the KYC module — document completion 6% → 65% — built end-to-end fundraiser creation flows, and integrated Sendbird for in-app user–admin chat.',
        stack: 'React · SCSS · Bootstrap · Sendbird · PHP · MySQL · Redis',
        image: '/projects-ss/ig-1.png',
        liveUrl: 'https://impactguru.com',
        liveLabel: 'impactguru.com',
    },
    {
        slug: 'e-trucking-soft',
        name: 'E-Trucking Soft',
        tags: ['Frontend'],
        description:
            'Fleet-management platform for trucking companies. Rebuilt the Electronic Logging Device module — 9 submodules spanning live map tracking, data visualization, time management and compliance reporting — and led responsive-design implementation across the platform.',
        stack: 'React · TypeScript · Ant Design · React Leaflet · Moment',
        image: null,
        liveUrl: 'https://ets.etruckingsoft.com',
        liveLabel: 'ets.etruckingsoft.com',
    },
    {
        slug: 'graphyl-solutions',
        name: 'Graphyl Solutions',
        tags: ['Client work', 'Full stack'],
        description:
            'Marketing and lead-generation site for a web development studio — ten routes covering services, portfolio, pricing and consultation booking. Built on Next.js with Tailwind and shadcn/ui: a monthly/yearly pricing toggle, collapsible FAQ, a five-step process walkthrough, testimonials, contact and newsletter capture, and a light/dark theme.',
        stack: 'Next.js · TypeScript · Tailwind CSS · shadcn/ui · Radix · Vercel',
        image: '/projects-ss/gs-1.png',
        liveUrl: 'https://graphylsolutions.com',
        liveLabel: 'graphylsolutions.com',
    },
    {
        slug: 'genconnect',
        name: 'Genconnect',
        tags: ['Freelance', 'Full stack'],
        description:
            'Digital marketing agency site built solo, end-to-end — React frontend, Strapi CMS, MySQL — with a fully dynamic blog the client manages themselves through the CMS.',
        stack: 'React · TypeScript · Ant Design · Strapi · MySQL',
        image: '/projects-ss/gc1.png',
        liveUrl: 'http://genconnectdigital.com',
        liveLabel: 'genconnectdigital.com',
    },
];

export const earlierProjects = [
    {
        slug: 'khooobsooorat',
        name: 'Khooobsooorat',
        description:
            'Beauty-product review site — influencer reviews, launches and partner-brand offers.',
        stack: 'HTML · SCSS · jQuery',
        liveUrl: 'https://khooobsooorat.com',
    },
    {
        slug: 'al-nizami-darbar',
        name: 'Al Nizami Darbar',
        description:
            'Four-page static restaurant site with Maps, YouTube and Instagram feed integrations.',
        stack: 'HTML · CSS · Bootstrap',
        liveUrl: 'https://alnizamidarbar.com',
    },
];

export const education = [
    {
        degree: 'B.Sc. Information Technology',
        institution: 'Mumbai University',
        period: '2019 — 2021',
    },
    {
        degree: 'Diploma, Computer Engineering',
        institution: 'Maharashtra State Board of Technical Education',
        period: '2016 — 2019',
    },
];
