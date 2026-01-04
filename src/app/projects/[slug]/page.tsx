"use client";

import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Github, Calendar, CheckCircle } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { getProjectBySlug } from "@/lib/projects";
import { useState } from "react";

export default function ProjectDetailPage() {
    const params = useParams();
    const slug = params.slug as string;
    const project = getProjectBySlug(slug);
    const [selectedImage, setSelectedImage] = useState(0);

    if (!project) {
        return (
            <section className="min-h-screen flex items-center justify-center">
                <Container>
                    <div className="text-center">
                        <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
                        <p className="text-text-secondary mb-8">
                            The project you&apos;re looking for doesn&apos;t exist.
                        </p>
                        <Link href="/#projects">
                            <Button>
                                <ArrowLeft className="mr-2 h-4 w-4" />
                                Back to Projects
                            </Button>
                        </Link>
                    </div>
                </Container>
            </section>
        );
    }

    const gallery = project.gallery || [project.coverImage];

    return (
        <section className="py-24">
            <Container>
                {/* Back Button */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                >
                    <Link
                        href="/#projects"
                        className="inline-flex items-center text-text-secondary hover:text-foreground transition-colors mb-8"
                    >
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Back to Projects
                    </Link>
                </motion.div>

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-12"
                >
                    <div className="flex items-center gap-4 text-text-secondary text-sm mb-4">
                        <span className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            {new Date(project.date).toLocaleDateString("en-US", {
                                year: "numeric",
                                month: "long",
                            })}
                        </span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">{project.title}</h1>
                    <p className="text-xl text-text-secondary max-w-3xl">
                        {project.longDescription || project.description}
                    </p>
                </motion.div>

                {/* Action Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="flex flex-wrap gap-4 mb-12"
                >
                    {project.links.demo && (
                        <a href={project.links.demo} target="_blank" rel="noopener noreferrer">
                            <Button>
                                <ExternalLink className="mr-2 h-4 w-4" />
                                Live Demo
                            </Button>
                        </a>
                    )}
                    {project.links.repo && (
                        <a href={project.links.repo} target="_blank" rel="noopener noreferrer">
                            <Button variant="outline">
                                <Github className="mr-2 h-4 w-4" />
                                View Source
                            </Button>
                        </a>
                    )}
                </motion.div>

                {/* Image Gallery */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="mb-16"
                >
                    {/* Main Image */}
                    <div className="relative aspect-video rounded-2xl overflow-hidden bg-surface mb-4">
                        <Image
                            src={gallery[selectedImage]}
                            alt={`${project.title} screenshot ${selectedImage + 1}`}
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>

                    {/* Thumbnails */}
                    {gallery.length > 1 && (
                        <div className="flex gap-4 overflow-x-auto pb-2">
                            {gallery.map((image, index) => (
                                <button
                                    key={index}
                                    onClick={() => setSelectedImage(index)}
                                    className={`relative shrink-0 w-24 h-16 rounded-lg overflow-hidden border-2 transition-all ${selectedImage === index
                                        ? "border-accent"
                                        : "border-transparent opacity-60 hover:opacity-100"
                                        }`}
                                >
                                    <Image
                                        src={image}
                                        alt={`Thumbnail ${index + 1}`}
                                        fill
                                        className="object-cover"
                                    />
                                </button>
                            ))}
                        </div>
                    )}
                </motion.div>

                <div className="grid lg:grid-cols-3 gap-12">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-12">
                        {/* Features */}
                        {project.features && project.features.length > 0 && (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                            >
                                <h2 className="text-2xl font-bold mb-6">Key Features</h2>
                                <ul className="grid sm:grid-cols-2 gap-4">
                                    {project.features.map((feature, index) => (
                                        <li
                                            key={index}
                                            className="flex items-start gap-3 p-4 rounded-xl bg-surface"
                                        >
                                            <CheckCircle className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        )}

                        {/* Challenges */}
                        {project.challenges && (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.4 }}
                            >
                                <h2 className="text-2xl font-bold mb-6">Challenges & Solutions</h2>
                                <div className="p-6 rounded-xl bg-surface border border-surface space-y-4">
                                    {project.challenges.split('\n\n').map((paragraph, index) => (
                                        <p key={index} className="text-text-secondary leading-relaxed">
                                            {paragraph.split('\n').map((line, lineIndex) => (
                                                <span key={lineIndex}>
                                                    {line.includes(':') ? (
                                                        <>
                                                            <strong className="text-foreground">{line.split(':')[0]}:</strong>
                                                            {line.split(':').slice(1).join(':')}
                                                        </>
                                                    ) : (
                                                        line
                                                    )}
                                                    {lineIndex < paragraph.split('\n').length - 1 && <br />}
                                                </span>
                                            ))}
                                        </p>
                                    ))}
                                </div>
                            </motion.div>
                        )}
                    </div>

                    {/* Sidebar */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="space-y-8"
                    >
                        {/* Tech Stack */}
                        <div>
                            <h3 className="text-lg font-semibold mb-4">Tech Stack</h3>
                            <div className="flex flex-wrap gap-2">
                                {project.technologies.map((tech) => (
                                    <span
                                        key={tech}
                                        className="px-3 py-1.5 text-sm rounded-full bg-accent/10 text-accent font-medium"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Project Links */}
                        <div>
                            <h3 className="text-lg font-semibold mb-4">Links</h3>
                            <div className="space-y-3">
                                {project.links.demo && (
                                    <a
                                        href={project.links.demo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-3 p-3 rounded-lg bg-surface hover:bg-surface/80 transition-colors"
                                    >
                                        <ExternalLink className="h-5 w-5 text-accent" />
                                        <span className="text-sm">Live Demo</span>
                                    </a>
                                )}
                                {project.links.repo && (
                                    <a
                                        href={project.links.repo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-3 p-3 rounded-lg bg-surface hover:bg-surface/80 transition-colors"
                                    >
                                        <Github className="h-5 w-5 text-accent" />
                                        <span className="text-sm">Source Code</span>
                                    </a>
                                )}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </Container>
        </section>
    );
}
