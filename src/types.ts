export interface ExperienceItem {
  company: string;
  title: string;
  dates: string;
  location?: string; // Optional as some are remote
  description: string[]; // Array of bullet points
  citations?: number[]; // Optional source citations from RESUME.md
}

export interface ProjectItem {
  name: string; // e.g., "Order Management Platform"
  company: string; // e.g., "Costco"
  description: string; // 1-2 sentence summary of role/impact from resume
  technologies?: string[]; // Optional: Key tech used
  logo?: string; // Optional: Path to company logo (e.g., '/logos/costco.svg')
}

export interface ResumeData {
  summary: string;
  experience: ExperienceItem[];
  projects: ProjectItem[]; // Placeholder for now
  skills: string[];
}
