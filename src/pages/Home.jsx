import Navigation from "../components/Navigation";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import ExperienceTimeline from "../components/ExperienceTimeline";
import SkillsGrid from "../components/SkillsGrid";
import PhotoGallery from "../components/PhotoGallery";
import CertificationsSection from "../components/CertificationsSection";
import ContactFooter from "../components/ContactFooter";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ExperienceTimeline />
      <SkillsGrid />
      <PhotoGallery />
      <CertificationsSection />
      <ContactFooter />
    </div>
  );
}