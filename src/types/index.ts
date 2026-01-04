// types/index.ts

export interface Project {
  slug: string;
  title: string;
  description: string;
  longDescription?: string; // Detailed description for project page
  coverImage: string;
  gallery?: string[]; // Array of image URLs for gallery
  technologies: string[];
  features?: string[]; // Key features list
  challenges?: string; // Challenges faced during development
  links: {
    demo?: string;
    repo?: string;
  };
  featured: boolean;
  date: string;
}

export interface SocialLink {
  platform: 'GitHub' | 'LinkedIn' | 'Twitter' | 'Email';
  url: string;
  icon: string; // Lucide icon name
}

export interface NavItem {
  label: string;
  href: string;
}

export interface TechStackItem {
  name: string;
  icon: string;
  category: 'frontend' | 'backend' | 'tools';
}
