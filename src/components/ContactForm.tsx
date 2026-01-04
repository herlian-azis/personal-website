// components/ContactForm.tsx
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Send, Loader2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { useToast } from "@/components/ui/Toast";

// Zod schema for form validation
const contactSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Please enter a valid email address"),
    subject: z.string().min(3, "Subject must be at least 3 characters"),
    message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export function ContactForm() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const { showToast } = useToast();

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<ContactFormData>({
        resolver: zodResolver(contactSchema),
    });

    const onSubmit = async (data: ContactFormData) => {
        setIsSubmitting(true);

        try {
            // Formspree integration
            const FORMSPREE_ENDPOINT = "https://formspree.io/f/xpqwkjbk";

            const response = await fetch(FORMSPREE_ENDPOINT, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                },
                body: JSON.stringify({
                    name: data.name,
                    email: data.email,
                    subject: data.subject,
                    message: data.message,
                }),
            });

            if (response.ok) {
                showToast("Message sent successfully! I'll get back to you soon.", "success");
                reset();
            } else {
                throw new Error("Failed to send message");
            }
        } catch {
            showToast("Failed to send message. Please try again.", "error");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="py-24">
            <Container>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="max-w-2xl mx-auto text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
                    <p className="text-text-secondary">
                        Have a project in mind or just want to say hello?
                        I&apos;d love to hear from you.
                    </p>
                </motion.div>

                <motion.form
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    onSubmit={handleSubmit(onSubmit)}
                    className="max-w-xl mx-auto space-y-6"
                >
                    {/* Name Field */}
                    <div>
                        <label
                            htmlFor="name"
                            className="block text-sm font-medium mb-2"
                        >
                            Name
                        </label>
                        <input
                            id="name"
                            type="text"
                            {...register("name")}
                            className="w-full px-4 py-3 rounded-lg bg-surface border border-surface focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all"
                            placeholder="John Doe"
                        />
                        {errors.name && (
                            <p className="mt-1 text-sm text-red-400">{errors.name.message}</p>
                        )}
                    </div>

                    {/* Email Field */}
                    <div>
                        <label
                            htmlFor="email"
                            className="block text-sm font-medium mb-2"
                        >
                            Email
                        </label>
                        <input
                            id="email"
                            type="email"
                            {...register("email")}
                            className="w-full px-4 py-3 rounded-lg bg-surface border border-surface focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all"
                            placeholder="john@example.com"
                        />
                        {errors.email && (
                            <p className="mt-1 text-sm text-red-400">{errors.email.message}</p>
                        )}
                    </div>

                    {/* Subject Field */}
                    <div>
                        <label
                            htmlFor="subject"
                            className="block text-sm font-medium mb-2"
                        >
                            Subject
                        </label>
                        <input
                            id="subject"
                            type="text"
                            {...register("subject")}
                            className="w-full px-4 py-3 rounded-lg bg-surface border border-surface focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all"
                            placeholder="Project Inquiry"
                        />
                        {errors.subject && (
                            <p className="mt-1 text-sm text-red-400">{errors.subject.message}</p>
                        )}
                    </div>

                    {/* Message Field */}
                    <div>
                        <label
                            htmlFor="message"
                            className="block text-sm font-medium mb-2"
                        >
                            Message
                        </label>
                        <textarea
                            id="message"
                            {...register("message")}
                            rows={5}
                            className="w-full px-4 py-3 rounded-lg bg-surface border border-surface focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all resize-none"
                            placeholder="Tell me about your project..."
                        />
                        {errors.message && (
                            <p className="mt-1 text-sm text-red-400">{errors.message.message}</p>
                        )}
                    </div>

                    {/* Submit Button */}
                    <Button
                        type="submit"
                        size="lg"
                        disabled={isSubmitting}
                        className="w-full"
                    >
                        {isSubmitting ? (
                            <>
                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                Sending...
                            </>
                        ) : (
                            <>
                                <Send className="mr-2 h-4 w-4" />
                                Send Message
                            </>
                        )}
                    </Button>
                </motion.form>
            </Container>
        </section>
    );
}
