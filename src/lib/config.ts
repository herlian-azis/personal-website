// lib/config.ts

import { NavItem, SocialLink, TechStackItem } from "@/types";

export const siteConfig = {
    name: "Herlian Abdul Aziz",
    title: "Frontend Engineer",
    description: "I build scalable, accessible, and performant web applications.",
    email: "azis6229@gmail.com",
    location: "Indonesia",
};

export const navItems: NavItem[] = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
];

export const socialLinks: SocialLink[] = [
    { platform: "GitHub", url: "https://github.com/herlian-azis", icon: "Github" },
    { platform: "LinkedIn", url: "https://www.linkedin.com/in/herlian-abdul-aziz-30377712a/", icon: "Linkedin" },
    { platform: "Email", url: "mailto:azis6229@gmail.com", icon: "Mail" },
];

export const techStack: TechStackItem[] = [
    // Frontend
    { name: "React", icon: "https://cdn.simpleicons.org/react/61DAFB", category: "frontend" },
    { name: "Next.js", icon: "https://cdn.simpleicons.org/nextdotjs/ffffff", category: "frontend" },
    { name: "TypeScript", icon: "https://cdn.simpleicons.org/typescript/3178C6", category: "frontend" },
    { name: "Tailwind CSS", icon: "https://cdn.simpleicons.org/tailwindcss/06B6D4", category: "frontend" },
    { name: "Framer Motion", icon: "https://cdn.simpleicons.org/framer/0055FF", category: "frontend" },
    // Backend
    { name: "Node.js", icon: "https://cdn.simpleicons.org/nodedotjs/5FA04E", category: "backend" },
    { name: "PostgreSQL", icon: "https://cdn.simpleicons.org/postgresql/4169E1", category: "backend" },
    { name: "Supabase", icon: "https://cdn.simpleicons.org/supabase/3FCF8E", category: "backend" },
    { name: "MongoDB", icon: "https://cdn.simpleicons.org/mongodb/47A248", category: "backend" },
    // Tools
    { name: "Git", icon: "https://cdn.simpleicons.org/git/F05032", category: "tools" },
    { name: "Vercel", icon: "https://cdn.simpleicons.org/vercel/ffffff", category: "tools" },
    { name: "Figma", icon: "https://cdn.simpleicons.org/figma/F24E1E", category: "tools" },
    { name: "Docker", icon: "https://cdn.simpleicons.org/docker/2496ED", category: "tools" },
];
