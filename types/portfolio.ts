export interface Profile {
  name: string;
  initials: string;
  roleBadge: string;
  title: string;
  headline: string;
  shortBio: string;
  aboutParagraphs: string[];
  location: string;
  email: string;
  phone: string;
  linkedin: string;
  linkedinDisplay: string;
  github: string;
  githubDisplay: string;
  resumeUrl: string;
  portraitUrl: string;
  metrics: {
    label: string;
    value: string;
    subtext: string;
  }[];
}

export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  tagline: string;
  problem: string;
  approach: string;
  impact: string;
  visualType: "kkbox" | "cyclistic" | "bellabeat";
  featuredMetric: {
    value: string;
    label: string;
  };
  metrics: {
    label: string;
    value: string;
  }[];
  technologies: string[];
  keyInsights: string[];
  githubUrl?: string;
  liveUrl?: string;
  demoUrl?: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  durationBadge: string;
  summary: string;
  achievements: string[];
  technologies: string[];
}

export interface EducationItem {
  id: string;
  degree: string;
  field: string;
  institution: string;
  location: string;
  period: string;
  grade?: string;
  statusBadge?: string;
  focusAreas: string[];
}

export interface SkillCategory {
  id: string;
  title: string;
  subtitle: string;
  iconName: "database" | "chart-bar" | "cpu" | "code" | "briefcase";
  skills: string[];
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  badgeText: string;
  description: string;
  skillsGained: string[];
  link?: string;
}

export interface LeadershipItem {
  id: string;
  title: string;
  description: string;
  points: string[];
}

export interface PortfolioData {
  profile: Profile;
  projects: Project[];
  experience: ExperienceItem[];
  education: EducationItem[];
  skills: SkillCategory[];
  certifications: CertificationItem[];
  leadership: LeadershipItem[];
}
