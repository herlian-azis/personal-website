// components/Navbar.tsx
"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon, Menu, X } from "lucide-react";
import { navItems, siteConfig } from "@/lib/config";
import { useTheme } from "./ThemeProvider";
import { cn } from "@/lib/utils";

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { theme, toggleTheme } = useTheme();

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            // Show/hide based on scroll direction
            if (currentScrollY > lastScrollY && currentScrollY > 100) {
                setIsVisible(false);
            } else {
                setIsVisible(true);
            }

            // Add background when scrolled
            setIsScrolled(currentScrollY > 20);
            setLastScrollY(currentScrollY);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    return (
        <motion.header
            initial={{ y: 0 }}
            animate={{ y: isVisible ? 0 : -100 }}
            transition={{ duration: 0.3 }}
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
                isScrolled
                    ? "bg-(--background)/80 backdrop-blur-lg border-surface"
                    : "bg-transparent border-transparent"
            )}
        >
            <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
                {/* Logo */}
                <a
                    href="#home"
                    className="text-xl font-bold tracking-tight hover:text-accent transition-colors"
                >
                    {siteConfig.name}
                    <span className="text-accent">.</span>
                </a>

                {/* Desktop Navigation */}
                <ul className="hidden md:flex items-center gap-8">
                    {navItems.map((item) => (
                        <li key={item.label}>
                            <a
                                href={item.href}
                                className="text-sm font-medium text-text-secondary hover:text-foreground transition-colors"
                            >
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Actions */}
                <div className="flex items-center gap-4">
                    {/* Theme Toggle */}
                    <button
                        onClick={toggleTheme}
                        className="relative p-2 rounded-full hover:bg-surface transition-colors"
                        aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
                    >
                        <motion.div
                            initial={false}
                            animate={{ rotate: theme === "dark" ? 0 : 180 }}
                            transition={{ duration: 0.3 }}
                        >
                            {theme === "dark" ? (
                                <Sun className="h-5 w-5" />
                            ) : (
                                <Moon className="h-5 w-5" />
                            )}
                        </motion.div>
                    </button>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="md:hidden p-2 rounded-full hover:bg-surface transition-colors"
                        aria-label="Toggle menu"
                    >
                        {isMobileMenuOpen ? (
                            <X className="h-5 w-5" />
                        ) : (
                            <Menu className="h-5 w-5" />
                        )}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden border-t border-surface bg-background"
                    >
                        <ul className="flex flex-col px-4 py-4 gap-4">
                            {navItems.map((item) => (
                                <li key={item.label}>
                                    <a
                                        href={item.href}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className="block text-lg font-medium text-text-secondary hover:text-foreground transition-colors"
                                    >
                                        {item.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
}
