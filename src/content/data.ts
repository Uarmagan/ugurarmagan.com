import type { ResumeData, ProjectItem } from '../types';

export const resumeData: ResumeData = {
  summary:
    "Ugur Armagan is a results-driven front-end engineer who blends deep technical expertise with a relentless focus on user experience and performance. He modernized Costco's mission-critical order management system, enhanced Great Clips' online check-in platform for millions of customers, and slashed page load times at United Healthcare by 70%—consistently delivering intuitive, scalable solutions that exceed expectations.",
  experience: [
    {
      company: 'Costco',
      title: 'Senior Frontend Developer',
      dates: 'May 2024–Present',
      location: 'Remote',
      logoUrl: '/costco-logo.png',
      description:
        'Leading the charge on a core platform rebuild, focusing on modern architecture, performance, and mentoring a growing team to deliver impactful retail solutions.',
      citations: [3, 4, 5, 6, 7, 8, 9], // Corresponds to [cite: N] in RESUME.md
    },
    {
      company: 'Livefront',
      title: 'Front-End Developer',
      dates: 'March 2023 – December 2023',
      location: 'Remote',
      logoUrl: '/livefront-logo.png',
      description:
        "Sharpened focus on high-fidelity UI/UX and accessibility, collaborating closely with design to enhance a major client's digital check-in experience.",
      citations: [10, 11, 12, 13, 14],
    },
    {
      company: 'United Healthcare',
      title: 'Software Engineer II',
      dates: 'November 2021 - March 2023',
      logoUrl: '/UHC.png',
      description:
        'Stepped into a leadership role, driving development on a large-scale dashboard, optimizing performance, and establishing best practices for the team.',
      citations: [15, 16, 17],
    },
    {
      company: 'United Healthcare',
      title: 'Software Engineer',
      dates: 'July 2021 - November 2021',
      location: 'Chicago',
      logoUrl: '/UHC.png',
      description:
        'Tackled significant technical challenges, leading a critical migration project and delivering key features for a widely-used healthcare product.',
      citations: [18, 19, 20],
    },
    {
      company: 'Epsilon',
      title: 'Software Engineer',
      dates: 'July 2019 - July 2021',
      location: 'Chicago, IL',
      logoUrl: '/Epsilon.png',
      description:
        'Gained early leadership experience building foundational team practices while broadening technical skills across the stack, from database optimization to scalable microservices.',
      citations: [21, 22, 23, 24, 25],
    },
  ],
  projects: [
    {
      name: 'Order & Item Management Platform',
      company: 'Costco',
      logoUrl: '/logos/costco-logo.svg',
      challenge:
        'Costco needed a complete replacement for their order management system. The legacy platform was a command line application that required warehouse managers to be technical and navigate through multiple screens for simple tasks. The system was also slow and not scalable.',
      solution:
        "As technical lead for an 8-person team, designed the architecture for a greenfield platform. Built a unified 'save-all' feature that consolidated component states and developed a type-safe rule engine for managing product data.",
      impact:
        'Reduced inventory page load times to under 1 second. The new platform streamlines warehouse operations with single-step workflows and serves thousands of managers daily.',
      technologies: [
        'React',
        'TypeScript',
        'TanStack Router',
        'TailwindCSS',
        'RTL',
        'Playwright',
      ],
    },
    {
      name: 'Online Check-in System',
      company: 'Great Clips (via Livefront)',
      logoUrl: '/logos/great-clips-logo.svg',
      challenge:
        "Great Clips needed a modern check-in system for 4,500 salons across North America. The existing system lacked mobile support and didn't meet accessibility standards for millions of users.",
      solution:
        'Co-developed a new check-in platform from scratch using Next.js and React. Created custom accessible UI components including a draggable bottom sheet for mobile. Built and maintained a design system integrated with their marketing site.',
      impact:
        'The system now serves millions of users with full accessibility compliance. Achieved 95% test coverage and delivered pixel-perfect UI that works seamlessly across all devices.',
      technologies: [
        'Next.js',
        'React',
        'TypeScript',
        'A11y',
        'React Testing Library',
      ],
    },
    {
      name: 'UnitedHealthcare Portal Dashboard',
      company: 'United Healthcare',
      logoUrl: '/logos/optum-logo.svg',
      challenge:
        "UnitedHealthcare's main portal dashboard served hundreds of thousands of users but suffered from slow performance and hour-long build times that killed developer productivity.",
      solution:
        'Led the Angular to React migration and optimized the entire build pipeline. Introduced modern development practices including proper testing, documentation, and ran weekly knowledge-sharing sessions for the team.',
      impact:
        'Reduced page load time by 70% and build times from 60 seconds to 7 seconds. The dashboard now reliably serves hundreds of thousands of members daily with improved performance.',
      technologies: [
        'React',
        'Redux',
        'Styled Components',
        'Webpack',
        'Angular Migration',
      ],
    },
  ],
  skills: [
    'React',
    'Typescript',
    'Javascript',
    'Next.js',
    'Node.js',
    'PostgreSQL',
    'Docker',
    'Playwright',
    'React Testing Library',
    'Tanstack/query',
    'React Router',
    'React Native',
    'Hono.js',
  ],
};
