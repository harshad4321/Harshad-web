export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  liveUrl?: string;
  githubUrl?: string;
  image?: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  duration: string;
  points: string[];
}

export interface SkillCategory {
  title: string;
  skills: string[];
}
