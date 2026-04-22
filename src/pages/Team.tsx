import Navbar from "@/components/Navbar";
import TeamSection from "@/components/TeamSection";
import Footer from "@/components/Footer";

import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const TeamPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-16 px-6 md:px-12">
        <TeamSection />
      </div>
      <Footer />
    </div>
  );
};

export default TeamPage;
