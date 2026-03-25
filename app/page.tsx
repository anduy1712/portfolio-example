import AboutSkillsBento from "@/components/portfolio/AboutSkillsBento";
import ContactSection from "@/components/portfolio/ContactSection";
import FooterSection from "@/components/portfolio/FooterSection";
import HeroSection from "@/components/portfolio/HeroSection";
import ProjectsSection from "@/components/portfolio/ProjectsSection";
import TopAppBar from "@/components/portfolio/TopAppBar";

export default function Home() {
  return (
    <div className="min-h-screen bg-surface font-body text-on-surface selection:bg-primary-container selection:text-on-primary-container">
      <TopAppBar />

      <main>
        <HeroSection />
        <AboutSkillsBento />
        <ProjectsSection />
        <ContactSection />
      </main>

      <FooterSection />
    </div>
  );
}
