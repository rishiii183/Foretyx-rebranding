const items = [
  "Zero telemetry",
  "Native inference",
  "100% offline",
  "Your hardware, your rules",
  "No tokens, no limits",
  "Specialized SLM",
  "Unbounded context",
];

const MarqueeTicker = () => {
  const doubled = [...items, ...items];

  return (
    <div className="bg-background border-y border-border py-4 overflow-hidden relative">
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.05] pointer-events-none select-none z-0">
        <span className="font-mono text-6xl font-black tracking-tighter text-foreground uppercase">FORETYX</span>
      </div>
      <div className="relative z-10 animate-marquee flex whitespace-nowrap">
        {doubled.map((item, i) => (
          <span key={i} className="font-mono text-xs uppercase tracking-widest text-muted-foreground mx-8 flex items-center gap-8">
            {item}
            <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block" />
          </span>
        ))}
      </div>
    </div>
  );
};

export default MarqueeTicker;
