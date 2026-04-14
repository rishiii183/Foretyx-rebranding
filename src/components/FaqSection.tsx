import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "What is Foretyx?",
    a: "Foretyx is a local-first AI coding assistant that runs entirely on your machine using a custom model and Rust inference engine optimized for Apple Silicon. Zero telemetry, no API calls, no usage caps.",
  },
  {
    q: "What model does Foretyx use?",
    a: "A custom-trained model based on an open-source foundation, extensively post-trained to work with Foretyx's agent harness, context engine, and tools.",
  },
  {
    q: "What are the hardware requirements?",
    a: "Apple Silicon M2 or later with at least 16GB RAM. Windows and Linux support coming soon.",
  },
  {
    q: "How does it compare to cloud models?",
    a: "Early tests indicate Foretyx will be on par with state-of-the-art models thanks to its specialized context engine and focused training pipeline.",
  },
  {
    q: "How will Foretyx be priced?",
    a: "Flat monthly or annual subscription — completely unlimited, completely offline.",
  },
  {
    q: "When will Foretyx be available?",
    a: "Rolling out to the waitlist in Q2 2026 with a broader release later this year.",
  },
];

const FaqSection = () => {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="bg-card py-24 px-6 md:px-12">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <span className="section-label mb-6 block">FAQ</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground">
            Frequently asked questions.
          </h2>
        </div>

        <div className="divide-y divide-border">
          {faqs.map((f, i) => (
            <button
              key={i}
              className="w-full text-left py-6 group"
              onClick={() => setOpen(open === i ? null : i)}
            >
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <span className="font-mono text-xs text-primary">{String(i + 1).padStart(2, "0")}</span>
                  <span className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">{f.q}</span>
                </div>
                <ChevronDown
                  className={`w-5 h-5 text-muted-foreground shrink-0 transition-transform ${open === i ? "rotate-180" : ""}`}
                />
              </div>
              {open === i && (
                <p className="mt-4 pl-10 text-sm text-muted-foreground font-sans leading-relaxed">{f.a}</p>
              )}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
