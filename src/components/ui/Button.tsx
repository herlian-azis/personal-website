// components/ui/Button.tsx
"use client";

import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, forwardRef } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "ghost" | "outline";
    size?: "sm" | "md" | "lg";
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "primary", size = "md", ...props }, ref) => {
        return (
            <button
                ref={ref}
                className={cn(
                    // Base styles
                    "inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background disabled:opacity-50 disabled:pointer-events-none",
                    // Variants
                    {
                        "bg-accent text-white hover:bg-accent-hover":
                            variant === "primary",
                        "bg-surface text-foreground hover:bg-text-secondary/20":
                            variant === "secondary",
                        "text-foreground hover:bg-surface":
                            variant === "ghost",
                        "border border-surface text-foreground hover:bg-surface":
                            variant === "outline",
                    },
                    // Sizes
                    {
                        "px-3 py-1.5 text-sm": size === "sm",
                        "px-4 py-2 text-base": size === "md",
                        "px-6 py-3 text-lg": size === "lg",
                    },
                    className
                )}
                {...props}
            />
        );
    }
);

Button.displayName = "Button";
