import { Navigation } from '@/components/Navigation';
import { HeroSection } from '@/components/HeroSection';
import { ServicesSection } from '@/components/ServicesSection';
import { ProjectsSection } from '@/components/ProjectsSection';
import { ContactSection } from '@/components/ContactSection';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <ServicesSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
