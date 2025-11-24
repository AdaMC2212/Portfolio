export interface ContactInfo {
  phone: string;
  email: string;
  location: string;
  linkedin: string;
  github: string;
}

export interface EducationItem {
  school: string;
  degree: string;
  duration: string;
  details: string[];
}

export interface ExperienceItem {
  company: string;
  role: string;
  duration: string;
  description: string[];
}

export interface ProjectItem {
  title: string;
  tech: string;
  date: string;
  description: string[];
}

export interface SkillCategory {
  name: string;
  skills: string[];
  level: number; // 0-100 for visualization
}

export interface ResumeData {
  name: string;
  title: string;
  summary: string;
  contact: ContactInfo;
  education: EducationItem[];
  experience: ExperienceItem[];
  projects: ProjectItem[];
  activities: string[];
  skills: SkillCategory[];
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}