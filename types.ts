import { LucideIcon } from 'lucide-react';

export interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  image: string;
  link?: string;
  github?: string;
}

export interface Skill {
  name: string;
  icon: LucideIcon;
  category: 'Languages' | 'Technologies' | 'Tools';
}

export interface Stat {
  label: string;
  value: string | number;
  icon: LucideIcon;
}

export interface ExperienceItem {
  id: number;
  role: string;
  company: string;
  location: string;
  period: string;
  description: string[];
}

export interface Certificate {
  id: number;
  title: string;
  issuer: string;
  date: string;
  image: string;
  link?: string;
}