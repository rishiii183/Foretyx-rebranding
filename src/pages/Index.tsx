import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import MarqueeTicker from "@/components/MarqueeTicker";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import ApproachSection from "@/components/ApproachSection";
import CapabilitiesSection from "@/components/CapabilitiesSection";
import TerminalSection from "@/components/TerminalSection";
import FaqSection from "@/components/FaqSection";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <MarqueeTicker />
      <ProblemSection />
      <SolutionSection />
      <ApproachSection />
      <CapabilitiesSection />
      <TerminalSection />
      <FaqSection />
      <CtaSection />
      <Footer />
    </div>
  );
};

export default Index;
