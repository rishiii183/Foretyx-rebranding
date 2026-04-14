import { Wifi, WifiOff, Infinity, Shield, Zap } from "lucide-react";

const features = [
  { icon: WifiOff, label: "Offline", title: "Work offline", desc: "Flights. Spotty Wi-Fi. Network outages. Nothing stops your flow." },
  { icon: Infinity, label: "Unlimited", title: "Remove the meter", desc: "Refactor the whole codebase. Riff on an idea all day. Run agent loops without cost." },
  { icon: Shield, label: "Privacy", title: "Sever the connection", desc: "Your code, keystrokes, and files never leave your machine. Not anonymized. Not sent." },
  { icon: Zap, label: "Latency", title: "Stop waiting", desc: "No round-trip to a data center. Inference happens on your machine in milliseconds." },
];

const SolutionSection = () => {
  return (
    <section className="bg-card py-24 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="section-label mb-6 block">Introducing Foretyx</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-foreground">
            Everything local.
            <br />
            Own your AI.
          </h2>
          <p className="text-muted-foreground font-sans mt-4 max-w-xl mx-auto">
            A complete AI coding agent running entirely on your own hardware. No usage limits. No cloud dependency.
          </p>
        </div>

        {/* Diagram placeholder */}
        <div className="rounded-xl border border-border bg-background p-8 mb-16">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <div className="text-center p-6 rounded-lg border border-border bg-card flex-1">
              <div className="font-mono text-xs text-primary mb-2 uppercase tracking-wider">Your Machine</div>
              <div className="font-mono text-sm text-foreground">✓ Foretyx model active</div>
              <div className="font-mono text-xs text-muted-foreground mt-1">GPU · Index · Model</div>
              <div className="text-xs text-primary mt-2">Response &lt;300ms</div>
            </div>
            <div className="flex flex-col items-center gap-1">
              <div className="w-16 h-px bg-destructive" />
              <span className="font-mono text-[10px] text-destructive uppercase">Severed</span>
              <div className="w-16 h-px bg-destructive" />
            </div>
            <div className="text-center p-6 rounded-lg border border-border bg-muted/50 flex-1 opacity-40">
              <div className="font-mono text-xs text-muted-foreground mb-2 uppercase tracking-wider">Cloud Servers</div>
              <div className="font-mono text-sm text-muted-foreground line-through">Telemetry</div>
              <div className="font-mono text-xs text-muted-foreground mt-1">Blocked</div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => (
            <div key={f.label} className="p-6 rounded-lg border border-border bg-background">
              <f.icon className="w-5 h-5 text-primary mb-4" />
              <span className="font-mono text-xs text-primary uppercase tracking-wider block mb-2">{f.label}</span>
              <h3 className="text-lg font-bold text-foreground mb-2">{f.title}</h3>
              <p className="text-sm text-muted-foreground font-sans leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
