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
    <div className="bg-background border-y border-border py-4 overflow-hidden">
      <div className="animate-marquee flex whitespace-nowrap">
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
