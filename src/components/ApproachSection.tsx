const steps = [
  {
    num: "01",
    title: "A focused model, trained specifically for coding.",
    desc: "Every parameter is dedicated to coding, planning, tool use, and structured edits. By narrowing the domain, we concentrate intelligence where it matters.",
  },
  {
    num: "02",
    title: "Full intelligence, compressed to fit your machine.",
    desc: "An 8 GB model that fits comfortably in memory on a MacBook. Full reasoning. Local execution. Zero cost per token.",
  },
  {
    num: "03",
    title: "A custom runtime, engineered for Apple Silicon.",
    desc: "A custom inference engine optimized for Apple Silicon. Model, context engine, and tools designed as a single coordinated system.",
  },
];

const ApproachSection = () => {
  return (
    <section id="approach" className="bg-background py-24 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="section-label mb-6 block">Our Approach</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-foreground">
            Purpose beats scale.
          </h2>
          <p className="text-muted-foreground font-sans mt-4 max-w-2xl mx-auto">
            A closed system — model, context, tools, and inference — engineered together for one job: real coding work.
          </p>
        </div>

        <div className="space-y-8">
          {steps.map((s) => (
            <div key={s.num} className="flex gap-6 md:gap-10 items-start p-8 rounded-xl border border-border bg-card">
              <span className="font-mono text-sm text-primary shrink-0">Step {s.num}</span>
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3">{s.title}</h3>
                <p className="text-sm text-muted-foreground font-sans leading-relaxed max-w-2xl">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Comparison bars */}
        <div className="mt-20 grid md:grid-cols-2 gap-12">
          <div>
            <h4 className="font-mono text-xs text-muted-foreground uppercase tracking-wider mb-6">Parameters dedicated to code</h4>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between font-mono text-xs mb-1">
                  <span className="text-foreground">Foretyx</span>
                  <span className="text-primary">100%</span>
                </div>
                <div className="h-3 bg-muted rounded-full overflow-hidden">
                  <div className="h-full bg-primary rounded-full" style={{ width: "100%" }} />
                </div>
              </div>
              <div>
                <div className="flex justify-between font-mono text-xs mb-1">
                  <span className="text-muted-foreground">Most AI models</span>
                  <span className="text-muted-foreground">~15–20%</span>
                </div>
                <div className="h-3 bg-muted rounded-full overflow-hidden">
                  <div className="h-full bg-muted-foreground/30 rounded-full" style={{ width: "18%" }} />
                </div>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-mono text-xs text-muted-foreground uppercase tracking-wider mb-6">Model size (memory required)</h4>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between font-mono text-xs mb-1">
                  <span className="text-muted-foreground">Cloud models</span>
                  <span className="text-muted-foreground">200+ GB</span>
                </div>
                <div className="h-3 bg-muted rounded-full overflow-hidden">
                  <div className="h-full bg-muted-foreground/30 rounded-full" style={{ width: "100%" }} />
                </div>
              </div>
              <div>
                <div className="flex justify-between font-mono text-xs mb-1">
                  <span className="text-muted-foreground">Open source</span>
                  <span className="text-muted-foreground">28–140 GB</span>
                </div>
                <div className="h-3 bg-muted rounded-full overflow-hidden">
                  <div className="h-full bg-muted-foreground/30 rounded-full" style={{ width: "50%" }} />
                </div>
              </div>
              <div>
                <div className="flex justify-between font-mono text-xs mb-1">
                  <span className="text-foreground">Foretyx</span>
                  <span className="text-primary">8 GB</span>
                </div>
                <div className="h-3 bg-muted rounded-full overflow-hidden">
                  <div className="h-full bg-primary rounded-full" style={{ width: "4%" }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApproachSection;
