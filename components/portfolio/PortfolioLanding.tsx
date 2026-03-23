import HeroSection from "./HeroSection";
import AboutSkillsBento from "./AboutSkillsBento";
import ProjectsSection from "./ProjectsSection";
import ContactSection from "./ContactSection";
import FooterSection from "./FooterSection";
import dynamic from "next/dynamic";

const TopAppBar = dynamic(() => import("./TopAppBar"), { ssr: false });

export default function PortfolioLanding() {
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
