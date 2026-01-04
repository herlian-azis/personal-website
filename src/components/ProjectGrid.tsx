// components/ProjectGrid.tsx
"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { ProjectCard } from "@/components/ProjectCard";
import { getFeaturedProjects } from "@/lib/projects";

export function ProjectGrid() {
    const projects = getFeaturedProjects();

    return (
        <section id="projects" className="py-24">
            <Container>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Featured Projects
                    </h2>
                    <p className="text-text-secondary max-w-2xl mx-auto">
                        A selection of projects that showcase my expertise in building
                        modern, performant web applications.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, index) => (
                        <ProjectCard key={project.slug} project={project} index={index} />
                    ))}
                </div>
            </Container>
        </section>
    );
}
