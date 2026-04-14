const techPills = [
  { label: "Custom Model", desc: "Optimized for consumer hardware" },
  { label: "Inference", desc: "Cross-OS using Rust" },
  { label: "Context Graph", desc: "Repo-wide code understanding" },
  { label: "Terminal UI", desc: "Built in Rust and blazing fast" },
  { label: "Heavily Tuned", desc: "Consistent tool calls and plan use" },
  { label: "Opinionated", desc: "Focused on code correctness" },
];

const TerminalSection = () => {
  return (
    <section className="bg-background py-24 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="section-label mb-6 block">Engineered intelligence</span>
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight text-foreground">
            Built for control freaks
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Terminal mock */}
          <div className="rounded-xl border border-border bg-card overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-border">
              <div className="w-3 h-3 rounded-full bg-destructive/60" />
              <div className="w-3 h-3 rounded-full bg-warning/60" />
              <div className="w-3 h-3 rounded-full bg-success/60" />
              <span className="font-mono text-[10px] text-muted-foreground ml-2">foretyx://localhost · offline</span>
            </div>
            <div className="p-6 font-mono text-sm space-y-2">
              <p className="text-primary">λ foretyx init</p>
              <pre className="text-foreground/80 text-[10px] sm:text-xs leading-[0.9] mb-4">
{`███████╗ ██████╗ ██████╗ ███████╗████████╗██╗   ██╗██╗  ██╗
██╔════╝██╔═══██╗██╔══██╗██╔════╝╚══██╔══╝╚██╗ ██╔╝╚██╗██╔╝
█████╗  ██║   ██║██████╔╝█████╗     ██║    ╚████╔╝  ╚███╔╝ 
██╔══╝  ██║   ██║██╔══██╗██╔══╝     ██║     ╚██╔╝   ██╔██╗ 
██║     ╚██████╔╝██║  ██║███████╗   ██║      ██║   ██╔╝ ██╗
╚═╝      ╚═════╝ ╚═╝  ╚═╝╚══════╝   ╚═╝      ╚═╝   ╚═╝  ╚═╝`}
              </pre>
              <p className="text-muted-foreground">&gt; Scanning hardware...</p>
              <p className="text-muted-foreground">&gt; Found M4 · 16GB RAM</p>
              <p className="text-muted-foreground">&gt; Loading FORETYX Model <span className="text-success">OK</span></p>
              <p className="text-muted-foreground">&gt; Indexing 2,418 files · 87,102 symbols</p>
              <p className="text-success mt-4">✓ Ready. Network: OFF · Telemetry: OFF</p>
              <p className="text-primary mt-2">λ <span className="animate-pulse-glow">_</span></p>
            </div>
          </div>

          {/* Tech pills */}
          <div className="grid grid-cols-2 gap-4">
            {techPills.map((t) => (
              <div key={t.label} className="p-4 rounded-lg border border-border bg-card hover:border-primary/30 transition-colors">
                <h4 className="font-mono text-sm font-bold text-foreground mb-1">{t.label}</h4>
                <p className="text-xs text-muted-foreground font-sans">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TerminalSection;
