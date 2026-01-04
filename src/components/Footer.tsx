// components/Footer.tsx
"use client";

import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { siteConfig, socialLinks } from "@/lib/config";

const iconMap = {
    Github,
    Linkedin,
    Twitter,
    Mail,
};

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="border-t border-surface py-12">
            <Container>
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    {/* Copyright */}
                    <p className="text-sm text-text-secondary">
                        © {currentYear} {siteConfig.name}. All rights reserved.
                    </p>

                    {/* Social Links */}
                    <div className="flex items-center gap-4">
                        {socialLinks.map((link) => {
                            const Icon = iconMap[link.icon as keyof typeof iconMap];
                            return (
                                <a
                                    key={link.platform}
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2 rounded-full hover:bg-surface transition-colors text-text-secondary hover:text-foreground"
                                    aria-label={link.platform}
                                >
                                    <Icon className="h-5 w-5" />
                                </a>
                            );
                        })}
                    </div>
                </div>
            </Container>
        </footer>
    );
}
