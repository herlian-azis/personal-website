"use client";

import { motion } from "framer-motion";
import { MapPin, Mail, Calendar, ArrowRight, Download, Github, Linkedin } from "lucide-react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { siteConfig, techStack, socialLinks } from "@/lib/config";

// Experience data
const experiences = [
    {
        role: "Frontend Engineer",
        company: "Freelance",
        period: "2023 - Present",
        description: "Building modern web applications with React, Next.js, and TypeScript for various clients.",
    },
    {
        role: "Web Developer",
        company: "Self-employed",
        period: "2021 - 2023",
        description: "Developed responsive websites and web applications using modern frontend technologies.",
    },
];

// Group tech stack by category
const groupedTechStack = {
    frontend: techStack.filter(t => t.category === "frontend"),
    backend: techStack.filter(t => t.category === "backend"),
    tools: techStack.filter(t => t.category === "tools"),
};

const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
};

export default function AboutPage() {
    // const { showToast } = useToast();

    // const handleDownloadCV = () => {
    //     showToast("CV will be available soon!", "info");
    // };

    return (
        <section className="py-24 min-h-screen">
            <Container>
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-16"
                >
                    <Link
                        href="/"
                        className="inline-flex items-center text-text-secondary hover:text-foreground transition-colors mb-8"
                    >
                        ← Back to Home
                    </Link>
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">
                        About <span className="text-gradient">Me</span>
                    </h1>
                    <p className="text-xl text-text-secondary max-w-3xl">
                        A passionate Frontend Engineer who loves crafting beautiful,
                        functional, and user-centered digital experiences.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-3 gap-12">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-16">
                        {/* Bio Section */}
                        <motion.div
                            {...fadeInUp}
                            transition={{ delay: 0.1 }}
                        >
                            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                                <span className="h-8 w-1 bg-accent rounded-full" />
                                Who I Am
                            </h2>
                            <div className="prose prose-invert max-w-none space-y-4 text-text-secondary">
                                <p className="text-lg leading-relaxed">
                                    Hello! I&apos;m <strong className="text-foreground">{siteConfig.name}</strong>,
                                    a Frontend Engineer based in {siteConfig.location}. I specialize in building
                                    scalable, accessible, and performant web applications that deliver exceptional
                                    user experiences.
                                </p>
                                <p className="leading-relaxed">
                                    My journey in web development started with a curiosity about how websites work,
                                    which quickly evolved into a passion for creating them. Today, I work with modern
                                    technologies like React, Next.js, and TypeScript to bring ideas to life.
                                </p>
                                {/* <p className="leading-relaxed">
                                    When I&apos;m not coding, you can find me exploring new technologies, contributing
                                    to open-source projects, or sharing knowledge with the developer community.
                                </p> */}
                            </div>
                        </motion.div>

                        {/* Experience Section */}
                        {/* <motion.div
                            {...fadeInUp}
                            transition={{ delay: 0.2 }}
                        >
                            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                                <span className="h-8 w-1 bg-accent rounded-full" />
                                Experience
                            </h2>
                            <div className="space-y-6">
                                {experiences.map((exp, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.3 + index * 0.1 }}
                                        className="relative pl-8 pb-8 border-l-2 border-surface last:pb-0"
                                    >
                                        Timeline dot 
                                        <div className="absolute left-0 top-0 -translate-x-1/2 w-4 h-4 rounded-full bg-accent border-4 border-background" />

                                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                                            <h3 className="text-lg font-semibold">{exp.role}</h3>
                                            <span className="flex items-center gap-1 text-sm text-text-secondary">
                                                <Calendar className="h-4 w-4" />
                                                {exp.period}
                                            </span>
                                        </div>
                                        <p className="text-accent font-medium mb-2">{exp.company}</p>
                                        <p className="text-text-secondary">{exp.description}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div> */}

                        {/* Skills Section */}
                        <motion.div
                            {...fadeInUp}
                            transition={{ delay: 0.3 }}
                        >
                            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                                <span className="h-8 w-1 bg-accent rounded-full" />
                                Tech Stack
                            </h2>
                            <div className="space-y-8">
                                {/* Frontend */}
                                <div>
                                    <h3 className="text-sm font-medium text-text-secondary uppercase tracking-wider mb-4">
                                        Frontend
                                    </h3>
                                    <div className="flex flex-wrap gap-3">
                                        {groupedTechStack.frontend.map((tech) => (
                                            <div
                                                key={tech.name}
                                                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-surface border border-surface hover:border-accent/50 transition-all group"
                                            >
                                                <img
                                                    src={tech.icon}
                                                    alt={tech.name}
                                                    className="w-5 h-5 grayscale group-hover:grayscale-0 transition-all"
                                                />
                                                <span className="text-sm font-medium">{tech.name}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Backend */}
                                <div>
                                    <h3 className="text-sm font-medium text-text-secondary uppercase tracking-wider mb-4">
                                        Backend
                                    </h3>
                                    <div className="flex flex-wrap gap-3">
                                        {groupedTechStack.backend.map((tech) => (
                                            <div
                                                key={tech.name}
                                                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-surface border border-surface hover:border-accent/50 transition-all group"
                                            >
                                                <img
                                                    src={tech.icon}
                                                    alt={tech.name}
                                                    className="w-5 h-5 grayscale group-hover:grayscale-0 transition-all"
                                                />
                                                <span className="text-sm font-medium">{tech.name}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Tools */}
                                <div>
                                    <h3 className="text-sm font-medium text-text-secondary uppercase tracking-wider mb-4">
                                        Tools
                                    </h3>
                                    <div className="flex flex-wrap gap-3">
                                        {groupedTechStack.tools.map((tech) => (
                                            <div
                                                key={tech.name}
                                                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-surface border border-surface hover:border-accent/50 transition-all group"
                                            >
                                                <img
                                                    src={tech.icon}
                                                    alt={tech.name}
                                                    className="w-5 h-5 grayscale group-hover:grayscale-0 transition-all"
                                                />
                                                <span className="text-sm font-medium">{tech.name}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Sidebar */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="space-y-8"
                    >
                        {/* Profile Card */}
                        <div className="p-6 rounded-2xl bg-surface border border-surface sticky top-24">
                            {/* Avatar Placeholder */}
                            <div className="w-24 h-24 rounded-full bg-linear-to-br from-accent to-purple-500 mx-auto mb-6 flex items-center justify-center text-3xl font-bold text-white">
                                {siteConfig.name.split(' ').map(n => n[0]).join('')}
                            </div>

                            <h3 className="text-xl font-bold text-center mb-1">{siteConfig.name}</h3>
                            <p className="text-accent text-center mb-6">{siteConfig.title}</p>

                            {/* Info */}
                            <div className="space-y-3 mb-6">
                                <div className="flex items-center gap-3 text-text-secondary">
                                    <MapPin className="h-4 w-4" />
                                    <span className="text-sm">{siteConfig.location}</span>
                                </div>
                                <div className="flex items-center gap-3 text-text-secondary">
                                    <Mail className="h-4 w-4" />
                                    <span className="text-sm">{siteConfig.email}</span>
                                </div>
                            </div>

                            {/* Social Links */}
                            <div className="flex justify-center gap-3 mb-6">
                                {socialLinks.map((link) => {
                                    const Icon = link.icon === "Github" ? Github : link.icon === "Linkedin" ? Linkedin : Mail;
                                    return (
                                        <a
                                            key={link.platform}
                                            href={link.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-3 rounded-xl bg-background hover:bg-accent/10 hover:text-accent transition-all"
                                            aria-label={link.platform}
                                        >
                                            <Icon className="h-5 w-5" />
                                        </a>
                                    );
                                })}
                            </div>

                            {/* CTA Buttons */}
                            <div className="space-y-3">
                                <Link href="/#contact" className="block">
                                    <Button className="w-full">
                                        Get in Touch
                                        <ArrowRight className="ml-2 h-4 w-4" />
                                    </Button>
                                </Link>
                                {/* <Button variant="outline" className="w-full" onClick={handleDownloadCV}>
                                    <Download className="mr-2 h-4 w-4" />
                                    Download CV
                                </Button> */}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </Container>
        </section>
    );
}
