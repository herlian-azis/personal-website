"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { techStack } from "@/lib/config";

export function TechStack() {
    return (
        <section className="py-24 overflow-hidden">
            <Container>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Tech Stack</h2>
                    <p className="text-text-secondary max-w-2xl mx-auto">
                        Technologies I use to bring ideas to life.
                    </p>
                </motion.div>
            </Container>

            {/* Infinite Marquee */}
            <div className="relative overflow-hidden">
                <div className="flex">
                    {/* First set - animates from 0 to -100% */}
                    <motion.div
                        className="flex shrink-0"
                        animate={{
                            x: ["0%", "-100%"],
                        }}
                        transition={{
                            x: {
                                duration: 30,
                                repeat: Infinity,
                                ease: "linear",
                            },
                        }}
                    >
                        {techStack.map((tech, index) => (
                            <div
                                key={`first-${tech.name}-${index}`}
                                className="shrink-0 mx-4 group"
                            >
                                <div className="flex items-center gap-3 px-6 py-4 rounded-xl bg-surface border border-surface hover:border-accent/50 transition-all duration-300">
                                    <img
                                        src={tech.icon}
                                        alt={tech.name}
                                        className="w-6 h-6 grayscale group-hover:grayscale-0 transition-all duration-300"
                                    />
                                    <span className="font-medium text-text-secondary group-hover:text-foreground transition-colors">
                                        {tech.name}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </motion.div>

                    {/* Second set - follows the first one */}
                    <motion.div
                        className="flex shrink-0"
                        animate={{
                            x: ["0%", "-100%"],
                        }}
                        transition={{
                            x: {
                                duration: 30,
                                repeat: Infinity,
                                ease: "linear",
                            },
                        }}
                    >
                        {techStack.map((tech, index) => (
                            <div
                                key={`second-${tech.name}-${index}`}
                                className="shrink-0 mx-4 group"
                            >
                                <div className="flex items-center gap-3 px-6 py-4 rounded-xl bg-surface border border-surface hover:border-accent/50 transition-all duration-300">
                                    <img
                                        src={tech.icon}
                                        alt={tech.name}
                                        className="w-6 h-6 grayscale group-hover:grayscale-0 transition-all duration-300"
                                    />
                                    <span className="font-medium text-text-secondary group-hover:text-foreground transition-colors">
                                        {tech.name}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>

                {/* Gradient overlays for fade effect */}
                <div className="absolute left-0 top-0 bottom-0 w-32 bg-linear-to-r from-background to-transparent pointer-events-none z-10" />
                <div className="absolute right-0 top-0 bottom-0 w-32 bg-linear-to-l from-background to-transparent pointer-events-none z-10" />
            </div>
        </section>
    );
}
