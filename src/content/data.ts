import type { ResumeData, ProjectItem } from "../types";

export const resumeData: ResumeData = {
  summary:
    "Ugur Armagan is a results-driven front-end engineer who blends deep technical expertise with a relentless focus on user experience and performance. He modernized Costco's mission-critical order management system, enhanced Great Clips' online check-in platform for millions of customers, and slashed page load times at Optum by 70%—consistently delivering intuitive, scalable solutions that exceed expectations.",
  experience: [
    {
      company: "Costco",
      title: "Senior Frontend Developer",
      dates: "May 2024–Present",
      location: "Remote",
      description:
        "Leading the charge on a core platform rebuild, focusing on modern architecture, performance, and mentoring a growing team to deliver impactful retail solutions.",
      citations: [3, 4, 5, 6, 7, 8, 9], // Corresponds to [cite: N] in RESUME.md
    },
    {
      company: "Livefront",
      title: "Front-End Developer",
      dates: "March 2023 – December 2023",
      location: "Remote",
      description:
        "Sharpened focus on high-fidelity UI/UX and accessibility, collaborating closely with design to enhance a major client's digital check-in experience.",
      citations: [10, 11, 12, 13, 14],
    },
    {
      company: "Optum",
      title: "Software Engineer II",
      dates: "November 2021 - March 2023",
      description:
        "Stepped into a leadership role, driving development on a large-scale dashboard, optimizing performance, and establishing best practices for the team.",
      citations: [15, 16, 17],
    },
    {
      company: "Optum",
      title: "Software Engineer",
      dates: "July 2021 - November 2021",
      location: "Chicago",
      description:
        "Tackled significant technical challenges, leading a critical migration project and delivering key features for a widely-used healthcare product.",
      citations: [18, 19, 20],
    },
    {
      company: "Epsilon",
      title: "Software Engineer",
      dates: "July 2019 - July 2021",
      location: "Chicago, IL",
      description:
        "Gained early leadership experience building foundational team practices while broadening technical skills across the stack, from database optimization to scalable microservices.",
      citations: [21, 22, 23, 24, 25],
    },
  ],
  projects: [
    {
      name: "Order & Item Management Platform",
      company: "Costco",
      logoUrl: "/logos/costco-logo.svg",
      challenge:
        "Modernize Costco's core retail operations platform used by thousands of managers for inventory and product listings, which suffered from outdated technology and inefficient workflows.",
      solution:
        "Led the technical design and implementation of a new front-end using React, TypeScript, and TanStack Router. Developed a unified 'save-all' feature and a type-safe rule engine for managing product data.",
      impact:
        "Improved critical inventory page load times to under 1 second. Significantly reduced manual steps for warehouse managers and streamlined the process for updating product rules, enhancing overall operational efficiency.",
      technologies: [
        "React",
        "TypeScript",
        "TanStack Router",
        "TailwindCSS",
        "RTL",
        "Playwright",
      ],
    },
    {
      name: "Online Check-in System Enhancement",
      company: "Great Clips (via Livefront)",
      logoUrl: "/logos/great-clips-logo.svg",
      challenge:
        "Enhance the user experience and performance of the high-traffic Great Clips online check-in system while ensuring strict adherence to accessibility standards and design specifications.",
      solution:
        "Developed key features and custom, accessible UI components (like a draggable bottom sheet) using Next.js and TypeScript. Built and maintained a reusable component library integrated into their main marketing site.",
      impact:
        "Improved user satisfaction and system performance for millions of customers. Delivered pixel-perfect, accessible components, ensuring a cohesive brand experience across platforms. Achieved 95% unit test coverage.",
      technologies: [
        "Next.js",
        "React",
        "TypeScript",
        "A11y",
        "React Testing Library",
      ],
    },
    {
      name: "Personalized Member Dashboard",
      company: "Optum",
      logoUrl: "/logos/optum-logo.svg",
      challenge:
        "Address performance bottlenecks and improve the development workflow for a large-scale personalized member dashboard used by tens of thousands of customers daily.",
      solution:
        "Led the development using React and Redux, optimizing Webpack configuration (reducing build times from 1 min to 7s), and migrating parts from Angular. Established team-wide design patterns and standards.",
      impact:
        "Reduced page load times by 70% after migration. Significantly decreased build times, improving developer productivity. Increased code quality and consistency through new standards and mentorship.",
      technologies: [
        "React",
        "Redux",
        "Styled Components",
        "Webpack",
        "Angular Migration",
      ],
    },
  ],
  skills: [
    "React",
    "Typescript",
    "Javascript",
    "Next.js",
    "Node.js",
    "PostgreSQL",
    "Docker",
    "Playwright",
    "React Testing Library",
    "Tanstack/query",
    "React Router",
    "React Native",
    "Hono.js",
  ],
};
