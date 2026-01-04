// lib/utils.ts

import { type ClassValue, clsx } from "clsx";

// Simple cn utility (without tailwind-merge for now)
export function cn(...inputs: ClassValue[]) {
    return clsx(inputs);
}

// Copy text to clipboard
export async function copyToClipboard(text: string): Promise<boolean> {
    try {
        await navigator.clipboard.writeText(text);
        return true;
    } catch {
        return false;
    }
}

// Format date to readable string
export function formatDate(dateString: string): string {
    return new Date(dateString).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
    });
}
