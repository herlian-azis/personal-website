import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import { ToastProvider } from "@/components/ui/Toast";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Herlian | Frontend Engineer",
    template: "%s | Herlian",
  },
  description:
    "Frontend Engineer focused on building scalable, accessible, and performant web applications.",
  keywords: [
    "Frontend Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Web Development",
    "UI/UX",
  ],
  authors: [{ name: "Herlian Abdul Aziz" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://herlian-aziz.vercel.app",
    siteName: "Herlian Portfolio",
    title: "Herlian | Frontend Engineer",
    description: "Building scalable, accessible, and performant web applications.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Herlian Abdul Aziz - Frontend Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Herlian | Frontend Engineer",
    description: "Building scalable, accessible, and performant web applications.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          <ToastProvider>
            <Navbar />
            <main>{children}</main>
            <Footer />
          </ToastProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
