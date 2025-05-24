import type { ResumeData } from "../types";

export const resumeData: ResumeData = {
  summary:
    "Ugur Armagan is a results-driven front-end engineer who blends deep technical expertise with a relentless focus on user experience and performance. He modernized Costco's mission-critical order management system, enhanced Great Clips' online check-in platform for millions of customers, and slashed page load times at Optum by 70%—consistently delivering intuitive, scalable solutions that exceed expectations.",
  experience: [
    {
      company: "Costco",
      title: "Senior Frontend Developer",
      dates: "May 2024–Present",
      location: "Remote",
      description: [
        "Served as the technical lead for an 8-person team, spearheading a greenfield order and item management platform at the core of Costco's retail operations—empowering thousands of warehouse and sales managers to efficiently manage shelf inventory and digital product listings.",
        "Led the design and implementation a performant front-end stack using TypeScript, React, TanStack/Router, and TailwindCSS, improving critical inventory page load times to under 1 second.",
        'Built a unified "save-all" feature consolidating multiple component states into a single, page-level state, reducing manual steps for warehouse managers and enhancing overall efficiency.',
        "Developed a robust chip management system using a type-safe rule engine factory pattern, ensuring consistent validation and error handling, and enabling developers to introduce or update rules in minutes rather than hours.",
        "Established front-end best practices around composable UIs, reusable components, and maintainable code structures, backed by robust testing tools (React Testing Library, Jest, Storybook, Playwright)—reducing regressions and ensuring predictable releases.",
        "Collaborated closely with Product and Project Managers to refine user stories, clarify requirements, and guide implementation, ensuring alignment between technical deliverables and business objectives.",
        "Mentored junior engineers through pair-programming sessions, targeted feedback, and hands-on code reviews, accelerating their growth in modern React patterns, TypeScript, and scalable front-end architectures.",
      ],
      citations: [3, 4, 5, 6, 7, 8, 9], // Corresponds to [cite: N] in RESUME.md
    },
    {
      company: "Livefront",
      title: "Front-End Developer",
      dates: "March 2023 – December 2023",
      location: "Remote",
      description: [
        "Developed an online check-in system for Great Clips in a highly efficient two-person team, utilizing Next.js, React, and TypeScript to enhance user experience and system performance.",
        "Crafted custom, accessible UI components—including a draggable bottom sheet and a responsive dropdown selector—aligning closely with design specifications and adhering to A11y standards.",
        "Developed and maintained a versatile React-based design system and component library, now integral to Great Clips' marketing website's cohesive visual experience.",
        "Closely collaborated with designer to interpret mockups and implement pixel-perfect UI in React and TypeScript.",
        "Implemented a comprehensive suite of unit tests, achieving 95% test coverage, to ensure high-quality code and system integrity.",
      ],
      citations: [10, 11, 12, 13, 14],
    },
    {
      company: "Optum",
      title: "Software Engineer II",
      dates: "November 2021 - March 2023",
      description: [
        "Led development of a large-scale personalized dashboard using React, Redux, and Styled Components.",
        "Mentored junior developers on best practices for component architecture and project documentation.",
        "Reduced build times from 1 minute to 7 seconds by optimizing a Webpack configuration and adding caching.",
        "Developed design patterns and standards for a team of engineers, resulting in increased efficiency and fewer errors.",
        "Organized weekly brown-bag meetings that introduced multiple concepts to the team, such as React Concurrency, React Query, Playwright, etc.",
      ],
      citations: [15, 16, 17],
    },
    {
      company: "Optum",
      title: "Software Engineer",
      dates: "July 2021 - November 2021",
      location: "Chicago",
      description: [
        "Refined the development workflow for how multiple micro-services get spun up, decreasing build times by 20%.",
        "Lead the migration of an Angular application to React, which reduced page load time by 70%.",
        "Built out multiple features on a healthcare dashboard product that is actively used by tens of thousands of customers every single day.",
      ],
      citations: [18, 19, 20],
    },
    {
      company: "Epsilon",
      title: "Software Engineer",
      dates: "July 2019 - July 2021",
      location: "Chicago, IL",
      description: [
        "Earned the leadership of a newly formed team, organized daily stand, and established a team culture that focuses on building applications with SOLID principles in mind.",
        "Increased throughput of PostgreSQL database by 60% through optimizing queries and indexing.",
        "Successfully completed an internal front-end project impacting multiple regional ad servers within 2 months by managing and coordinating development efforts.",
        "Leveraged knowledge in Docker to create scalable microservices that are delivered through a CI/CD pipeline.",
        "Built and maintained multiple backend REST API services with Docker and Kubernetes.",
        "Developed and maintained multiple API services with Node.Js and Typescript that had 99.99% uptime.",
      ],
      citations: [21, 22, 23, 24, 25],
    },
  ],
  projects: [
    {
      name: "Order & Item Management Platform",
      company: "Costco",
      description:
        "Spearheaded the technical leadership for a core retail operations platform, enhancing inventory and product listing management for thousands of users with a modern React/TypeScript front-end.",
      // logo: '/logos/costco.svg' // Example path
    },
    {
      name: "Online Check-in System Enhancement",
      company: "Great Clips (via Livefront)",
      description:
        "Developed key features and accessible custom components for the high-traffic online check-in system, improving user experience and performance using Next.js and TypeScript.",
      // logo: '/logos/great-clips.svg'
    },
    {
      name: "Personalized Member Dashboard",
      company: "Optum",
      description:
        "Led the development of a large-scale dashboard, significantly improving page load times and establishing development standards for the team using React and Redux.",
      // logo: '/logos/optum.svg'
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
