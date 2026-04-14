const capabilities = [
  { num: "01", title: "Understands your architecture.", desc: "Builds a connected model of modules, dependencies, and relationships across files." },
  { num: "02", title: "Tracks relationships, prevents breakage.", desc: "Edits that respect function contracts, type boundaries, and dependency graphs." },
  { num: "03", title: "Strategizes before acting.", desc: "Explore → Plan → Execute workflows ensure steps are reasoned out before changes occur." },
  { num: "04", title: "Executes complex coding workflows.", desc: "From refactors to test generation — coordinate tools, edits, search, and commands." },
  { num: "05", title: "Isolates agent sandboxes.", desc: "Each agent runs in its own workspace so experiments are safe and changes stay isolated." },
  { num: "06", title: "Runs at full speed.", desc: "Custom Rust inference engine optimized for CUDA and Metal — up to 144 tok/s on consumer hardware." },
];

const stats = [
  { label: "Latency", value: "0ms", sub: "No round-trip required" },
  { label: "Privacy", value: "100%", sub: "Air-gapped by design" },
  { label: "Cost / Token", value: "$0", sub: "Your GPU, your tokens" },
  { label: "Uptime", value: "Local", sub: "No dependency on cloud" },
];

const CapabilitiesSection = () => {
  return (
    <section className="bg-card py-24 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="section-label mb-6 block">Capabilities</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-foreground">
            Your machine, unleashed.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {capabilities.map((c) => (
            <div key={c.num} className="p-6 rounded-lg border border-border bg-background group hover:border-primary/30 transition-colors">
              <span className="font-mono text-xs text-primary mb-4 block">[ {c.num} ]</span>
              <h3 className="text-lg font-bold text-foreground mb-2">{c.title}</h3>
              <p className="text-sm text-muted-foreground font-sans leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-border rounded-xl overflow-hidden">
          {stats.map((s) => (
            <div key={s.label} className="bg-background p-6 text-center">
              <div className="font-mono text-xs text-primary uppercase tracking-wider mb-2">{s.label}</div>
              <div className="text-3xl md:text-4xl font-extrabold text-foreground mb-1">{s.value}</div>
              <div className="text-xs text-muted-foreground font-sans">{s.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CapabilitiesSection;
