// components/ProjectCard.tsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { Project } from "@/types";

interface ProjectCardProps {
    project: Project;
    index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
    return (
        <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative overflow-hidden rounded-2xl bg-surface border border-surface hover:border-accent/50 transition-all duration-300"
        >
            {/* Clickable Area */}
            <Link href={`/projects/${project.slug}`} className="block">
                {/* Image Container */}
                <div className="relative aspect-video overflow-hidden">
                    <Image
                        src={project.coverImage}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.src = `https://placehold.co/800x450/171717/ededed?text=${encodeURIComponent(project.title)}`;
                        }}
                    />
                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-linear-to-t from-surface via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Content */}
                <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-accent transition-colors flex items-center gap-2">
                        {project.title}
                        <ArrowRight className="h-4 w-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    </h3>
                    <p className="text-text-secondary text-sm mb-4 line-clamp-2">
                        {project.description}
                    </p>

                    {/* Tech Stack Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.slice(0, 4).map((tech) => (
                            <span
                                key={tech}
                                className="px-2 py-1 text-xs rounded-full bg-accent/10 text-accent font-medium"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            </Link>

            {/* External Links (separate from main link) */}
            <div className="absolute top-4 right-4 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                {project.links.repo && (
                    <a
                        href={project.links.repo}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="p-2 rounded-full bg-background/80 backdrop-blur-sm hover:bg-accent/20 transition-colors"
                        aria-label={`View ${project.title} source code on GitHub`}
                    >
                        <Github className="h-4 w-4" />
                    </a>
                )}
                {project.links.demo && (
                    <a
                        href={project.links.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="p-2 rounded-full bg-background/80 backdrop-blur-sm hover:bg-accent/20 transition-colors"
                        aria-label={`View ${project.title} live demo`}
                    >
                        <ExternalLink className="h-4 w-4" />
                    </a>
                )}
            </div>
        </motion.article>
    );
}
