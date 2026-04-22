import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import MarqueeTicker from "@/components/MarqueeTicker";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import ApproachSection from "@/components/ApproachSection";
import CapabilitiesSection from "@/components/CapabilitiesSection";
import HowItWorks from "@/components/HowItWorks";
import WhyNow from "@/components/WhyNow";
import TerminalSection from "@/components/TerminalSection";
import FaqSection from "@/components/FaqSection";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";
import ComparisonSection from "@/components/ComparisonSection";
import UseCasesSection from "@/components/UseCasesSection";
import ComplianceSection from "@/components/ComplianceSection";
import TeamButtonSection from "@/components/TeamButtonSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Foretyx | Enterprise AI Security Gateway</title>
        <meta name="description" content="Foretyx intercepts employee AI prompts before they reach any external LLM — scrubbing PII, blocking injections, and enforcing policy entirely on your infrastructure. Built for DPDP, GDPR, and HIPAA." />
        <link rel="canonical" href="https://foretyx.in/" />
      </Helmet>
      <Navbar />
      <HeroSection />
      <MarqueeTicker />
      <HowItWorks />
      <ProblemSection />
      <WhyNow />
      <SolutionSection />
      <ComparisonSection />
      <ApproachSection />
      <CapabilitiesSection />
      <UseCasesSection />
      <ComplianceSection />
      <TeamButtonSection />
      <TerminalSection />
      <FaqSection />
      <CtaSection />
      <Footer />
    </div>
  );
};

export default Index;
