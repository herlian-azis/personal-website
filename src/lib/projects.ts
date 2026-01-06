// lib/projects.ts

import { Project } from "@/types";

// projects data
export const projects: Project[] = [
    {
        slug: "culina-market",
        title: "Culina Market",
        description:
            "Culina Market: AI-Powered Smart Grocery Platform",
        longDescription:
            "Culina Market is a modern grocery shopping platform that bridges the gap between local markets and tech-savvy customers. The platform features real-time inventory tracking, an AI-powered recipe suggestion system that recommends dishes based on available ingredients, and a seamless checkout experience. Built with performance and accessibility in mind, it delivers a smooth shopping experience across all devices.",
        coverImage: "/images/projects/culina2.png",
        gallery: [
            "https://lyunstahvtccahmuydob.supabase.co/storage/v1/object/public/product-images/personalCulina/culina.png",
            "https://lyunstahvtccahmuydob.supabase.co/storage/v1/object/public/product-images/personalCulina/product.png",
            "https://lyunstahvtccahmuydob.supabase.co/storage/v1/object/public/product-images/personalCulina/recipe.png",
            "https://lyunstahvtccahmuydob.supabase.co/storage/v1/object/public/product-images/personalCulina/ai.png",
            "https://lyunstahvtccahmuydob.supabase.co/storage/v1/object/public/product-images/personalCulina/dashboard.png",
        ],
        technologies: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS", "Framer Motion", "Vercel"],
        features: [
            "Real-time inventory tracking",
            "AI-powered recipe suggestions",
            "Responsive design for all devices",
            "CMS admin",
            "Fast checkout with cart management",
            "Product search and filtering",
        ],
        challenges: `AI-to-Cart Integration: Engineered a structured prompt system using OpenRouter to convert natural language recipes into queryable database keywords, enabling a seamless "Shop this Recipe" feature.

Zero-Latency UX: Leveraged Next.js 16 Streaming to render AI responses progressively, preventing UI blocking and keeping user engagement high.

Type-Safe Architecture: Utilized TypeScript and Server Actions to eliminate separate API layers, ensuring robust data handling between the React frontend and Supabase database.`,
        links: {
            demo: "https://culina-market.vercel.app/",
            repo: "https://github.com/herlian-azis/culinaMarket",
        },
        featured: true,
        date: "2025-12-01",
    },
    {
        slug: "urloxis",
        title: "Urloxis",
        description:
            "Urloxis is a modern, fast, and secure URL shortener with tracking analytics.",
        longDescription:
            "Urloxis is a comprehensive URL shortening solution built for modern web users. Beyond simple link shortening, it offers detailed analytics tracking, custom alias creation, QR code generation, and link expiration settings. The platform is designed with security in mind, featuring rate limiting and spam protection.",
        coverImage: "/images/projects/mockup-urloxis.png",
        gallery: [
            "/images/projects/urloxis.png",
            "/images/projects/stream.png",
            "/images/projects/track.png",
            "/images/projects/recent.png",
        ],
        technologies: ["Next.js", "Node.js", "TypeScript", "MongoDB", "Framer Motion", "Tailwind CSS", "Vercel"],
        features: [
            "Custom branding URL",
            "No auth required",
            "QR code generation",
            "Click analytics and tracking",
            "Rate limiting for security",
            "Responsive dashboard",
        ],
        challenges: `High-Performance ID Generation: Replaced database-heavy validation with Nanoid to ensure collision-resistant, non-blocking ID generation suitable for Node.js architecture.

Scalable Lookups: Optimized MongoDB read operations by implementing unique indexes on shortCode via Mongoose, ensuring sub-100ms query times even with large datasets.

Automated Lifecycle Management: Utilized Moment.js for precise date manipulation and MongoDB TTL indexes to auto-purge expired links, keeping the database optimized and storage costs low.`,
        links: {
            demo: "https://urloxis.vercel.app/",
            repo: "https://github.com/herlian-azis/app-url-shortener",
        },
        featured: true,
        date: "2025-07-15",
    },
    {
        slug: "neo-sync",
        title: "NeoSync",
        description:
            `The NeoSync Website is a modern showcase for a premium tech product.`,

        longDescription:
            `This single-page storefront transforms technical specs into engaging visuals with a premium dark mode aesthetic. Built for speed and scalability on Vercel, it delivers a high-performance user experience echoing top tech brands.`,
        coverImage: "/images/projects/neoWebLow.png",
        gallery: [
            "/images/projects/neo-1.png",
            "/images/projects/neo-feature.png",
            "/images/projects/neo-review.png",
        ],
        technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Vercel"],
        features: [
            "Fully responsive design",
            "Scroll-triggered reveal",
            "Custom preloader",
            "Clean typography & hierarchy",
        ],
        challenges: `Performance: Balanced high-quality visuals with speed using optimized image compression.

Responsiveness: Solved mobile layout clutter by applying strict responsive breakpoints for a seamless UI.

Engagement: Boosted user retention by converting dense text into interactive Bento grids and visual metrics.

Navigation: Enhanced usability on long pages with a sticky navbar and smooth scroll anchors.`,
        links: {
            demo: "https://neo-sync.vercel.app/",
            repo: "https://github.com/herlian-azis/neo-sync",
        },
        featured: true,
        date: "2026-01-01",
    },
];

export function getProjects(): Project[] {
    return projects;
}

export function getFeaturedProjects(): Project[] {
    return projects.filter((p) => p.featured);
}

export function getProjectBySlug(slug: string): Project | undefined {
    return projects.find((p) => p.slug === slug);
}

export function getAllProjectSlugs(): string[] {
    return projects.map((p) => p.slug);
}
