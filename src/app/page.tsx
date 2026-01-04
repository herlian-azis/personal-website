import { Hero } from "@/components/Hero";
import { ProjectGrid } from "@/components/ProjectGrid";
import { TechStack } from "@/components/TechStack";
import { ContactForm } from "@/components/ContactForm";

export default function Home() {
  return (
    <>
      <Hero />
      <ProjectGrid />
      <TechStack />
      <ContactForm />
    </>
  );
}
