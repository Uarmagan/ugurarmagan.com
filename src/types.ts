export interface ExperienceItem {
  company: string;
  title: string;
  dates: string;
  location?: string; // Optional as some are remote
  description: string; // Changed from string[] to string
  logoUrl?: string; // Path to company logo
  citations?: number[]; // Optional source citations from RESUME.md
}

export interface ProjectItem {
  name: string; // e.g., "Order Management Platform"
  company: string; // e.g., "Costco"
  logoUrl?: string; // Path to company logo
  challenge: string; // The problem or goal
  solution: string; // What you did
  impact: string; // The results/outcome
  technologies?: string[]; // Optional: Key tech used
}

export interface ResumeData {
  summary: string;
  experience: ExperienceItem[];
  projects: ProjectItem[]; // Placeholder for now
  skills: string[];
}
