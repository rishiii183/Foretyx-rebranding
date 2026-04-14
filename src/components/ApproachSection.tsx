const steps = [
  {
    num: "01",
    label: "POLICY ENGINE",
    title: "A local guardrail, engineered for compliance.",
    desc: "Every interaction is governed by your custom security policies. Scrub PII and detect injections locally to ensure safety on your network.",
  },
  {
    num: "02",
    label: "THE DATA PLANE",
    title: "Full inspection, compressed to run anywhere.",
    desc: "A high-performance security layer that fits into your stack. Local execution. Zero data leakage. Total visibility.",
  },
  {
    num: "03",
    label: "AUDIT CONTROL",
    title: "A custom vault, designed for sovereignty.",
    desc: "A secure, encrypted audit trail engineered for enterprise. Logs and forensic data designed as a single, tamper-proof system.",
  },
];

const ApproachSection = () => {
  return (
    <section id="approach" className="bg-[#0a0a0a] py-32 px-6 md:px-12 border-t border-white/5 relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        <div className="mb-24">
          <span className="font-mono text-[10px] tracking-[0.3em] text-[#ADE1ED] uppercase mb-4 block">Our Approach</span>
          <h2 className="text-5xl md:text-7xl lg:text-[100px] font-black leading-[0.95] tracking-[-0.04em] text-white">
            Safety beats scale.
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-px bg-white/10 border border-white/10">
          {steps.map((s) => (
            <div key={s.num} className="p-10 md:p-14 bg-[#0a0a0a] hover:bg-white/[0.02] transition-colors group">
              <span className="font-mono text-[9px] text-[#ADE1ED] uppercase tracking-[0.4em] font-bold block mb-10">{s.label}</span>
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 leading-tight tracking-tight group-hover:text-[#ADE1ED] transition-colors">{s.title}</h3>
                <p className="text-sm text-white/40 font-sans leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Comparison section */}
        <div className="mt-32 grid lg:grid-cols-2 gap-20">
          <div>
            <div className="flex items-center gap-4 mb-10">
                <div className="w-10 h-[1px] bg-[#ADE1ED]" />
                <h4 className="font-mono text-[10px] text-white uppercase tracking-[0.3em]">DATA SOVEREIGNTY</h4>
            </div>
            <div className="space-y-12">
              <div>
                <div className="flex justify-between font-mono text-[10px] mb-4">
                  <span className="text-white uppercase tracking-widest">FORETYX DATA PLANE</span>
                  <span className="text-[#ADE1ED]">100% PRIVATE</span>
                </div>
                <div className="h-2 bg-white/5 relative">
                  <div className="h-full bg-[#ADE1ED]" style={{ width: "100%" }} />
                  {/* Tick marks */}
                  <div className="absolute inset-0 flex justify-between pointer-events-none">
                    {[...Array(11)].map((_, i) => (
                        <div key={i} className="w-px h-full bg-[#0a0a0a]/50" />
                    ))}
                  </div>
                </div>
              </div>
              <div>
                <div className="flex justify-between font-mono text-[10px] mb-4">
                  <span className="text-white/40 uppercase tracking-widest">UNSECURED CLOUD ACCESS</span>
                  <span className="text-white/20">~0% CONTROL</span>
                </div>
                <div className="h-2 bg-white/5">
                  <div className="h-full bg-white/10" style={{ width: "5%" }} />
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="flex items-center gap-4 mb-10">
                <div className="w-10 h-[1px] bg-[#ADE1ED]" />
                <h4 className="font-mono text-[10px] text-white uppercase tracking-[0.3em]">SECURITY OVERHEAD</h4>
            </div>
            <div className="space-y-12">
              <div>
                <div className="flex justify-between font-mono text-[10px] mb-4">
                  <span className="text-white uppercase tracking-widest">LOCAL POLICY ENGINE</span>
                  <span className="text-[#ADE1ED]">&lt;10ms (REAL-TIME)</span>
                </div>
                <div className="h-2 bg-white/5">
                  <div className="h-full bg-[#ADE1ED]" style={{ width: "5%" }} />
                </div>
              </div>
              <div>
                <div className="flex justify-between font-mono text-[10px] mb-4">
                  <span className="text-white/40 uppercase tracking-widest">TRADITIONAL CLOUD FIREWALL</span>
                  <span className="text-white/20">500ms+ (LATENT)</span>
                </div>
                <div className="h-2 bg-white/5">
                  <div className="h-full bg-white/10" style={{ width: "90%" }} />
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
