import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import TeamSection from "@/components/TeamSection";
import Footer from "@/components/Footer";

const TeamPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Meet the Foretyx Team | The Engineers Behind AI Security</title>
        <meta name="description" content="Meet the engineers building Foretyx — the on-device AI security gateway protecting enterprise data from leaks, injections, and compliance violations." />
        <link rel="canonical" href="https://foretyx.in/team" />
        <meta property="og:title" content="Meet the Foretyx Team | The Engineers Behind AI Security" />
        <meta property="og:description" content="Meet the engineers building Foretyx — the on-device AI security gateway protecting enterprise data." />
        <meta property="og:url" content="https://foretyx.in/team" />
      </Helmet>
      <Navbar />
      <div className="pt-16 px-6 md:px-12">
        <TeamSection />
      </div>
      <Footer />
    </div>
  );
};

export default TeamPage;
