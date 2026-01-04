// components/Hero.tsx
"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/lib/config";
import { copyToClipboard } from "@/lib/utils";
import { useToast } from "@/components/ui/Toast";

const keywords = ["Scalable UI", "Web Apps", "User Experiences", "Clean Code"];

export function Hero() {
    const [currentKeywordIndex, setCurrentKeywordIndex] = useState(0);
    const [displayText, setDisplayText] = useState("");
    const [isTyping, setIsTyping] = useState(true);
    const [copied, setCopied] = useState(false);
    const { showToast } = useToast();

    // Typewriter effect
    useEffect(() => {
        const currentWord = keywords[currentKeywordIndex];
        let timeout: NodeJS.Timeout;

        if (isTyping) {
            if (displayText.length < currentWord.length) {
                timeout = setTimeout(() => {
                    setDisplayText(currentWord.slice(0, displayText.length + 1));
                }, 100);
            } else {
                timeout = setTimeout(() => setIsTyping(false), 2000);
            }
        } else {
            if (displayText.length > 0) {
                timeout = setTimeout(() => {
                    setDisplayText(displayText.slice(0, -1));
                }, 50);
            } else {
                setCurrentKeywordIndex((prev) => (prev + 1) % keywords.length);
                setIsTyping(true);
            }
        }

        return () => clearTimeout(timeout);
    }, [displayText, isTyping, currentKeywordIndex]);

    const handleCopyEmail = async () => {
        const success = await copyToClipboard(siteConfig.email);
        if (success) {
            setCopied(true);
            showToast("Email copied to clipboard!", "success");
            setTimeout(() => setCopied(false), 2000);
        } else {
            showToast("Failed to copy email", "error");
        }
    };

    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center justify-center pt-20"
        >
            <Container className="text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    {/* Greeting */}
                    <p className="text-text-secondary text-lg mb-4">
                        Hi, I&apos;m {siteConfig.name} 👋
                    </p>

                    {/* Main Headline */}
                    <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight mb-6">
                        I build{" "}
                        <span className="text-gradient">
                            {displayText}
                            <span className="cursor-blink text-accent">|</span>
                        </span>
                    </h1>

                    {/* Subtitle */}
                    <p className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto mb-10">
                        {siteConfig.title} focused on creating high-performance, accessible,
                        and beautiful web applications.
                    </p>

                    {/* CTAs */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Button
                            size="lg"
                            onClick={() => {
                                document.getElementById("projects")?.scrollIntoView({
                                    behavior: "smooth",
                                });
                            }}
                        >
                            View My Work
                            <ArrowDown className="ml-2 h-4 w-4" />
                        </Button>

                        <Button
                            variant="outline"
                            size="lg"
                            onClick={handleCopyEmail}
                        >
                            {copied ? (
                                <>
                                    <Check className="mr-2 h-4 w-4" />
                                    Copied!
                                </>
                            ) : (
                                <>
                                    <Copy className="mr-2 h-4 w-4" />
                                    Copy Email
                                </>
                            )}
                        </Button>
                    </div>
                </motion.div>
            </Container>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2"
            >
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                >
                    <ArrowDown className="h-6 w-6 text-text-secondary" />
                </motion.div>
            </motion.div>
        </section>
    );
}
