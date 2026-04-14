import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="hero-section relative min-h-screen flex flex-col justify-center px-6 md:px-12 pt-20 pb-8 overflow-hidden">
      {/* Moving background watermark */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none select-none flex items-center">
        <div className="whitespace-nowrap font-mono text-[20vw] font-black text-primary-foreground/[0.03] leading-none animate-[slide_60s_linear_infinite] px-12">
          FORETYX FORETYX FORETYX FORETYX
        </div>
      </div>

      <div className="relative z-10 max-w-4xl">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-[0.95] tracking-[-0.04em] text-primary-foreground mb-10">
          On-device AI coding.
          <br />
          No cloud. No limits.
        </h1>
        <p className="text-lg md:text-xl text-primary-foreground/70 max-w-lg mb-10 font-sans">
          A complete coding agent that executes entirely on your machine. No API calls. No usage caps.
        </p>
        <div className="flex flex-wrap gap-4 mt-6">
          <a
            href="#early-access"
            className="btn-rig"
          >
            Join Waitlist
          </a>
          <a
            href="#approach"
            className="btn-rig-outline !text-primary-foreground before:!border-primary-foreground/30 hover:before:!bg-primary-foreground/10"
          >
            Our Approach
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
