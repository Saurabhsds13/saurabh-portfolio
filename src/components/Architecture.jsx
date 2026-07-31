import { architecturePhilosophy } from "../data/portfolio";
import { FiShield, FiRefreshCw, FiEye, FiGrid } from "react-icons/fi";

const icons = [
  <FiShield size={20} />,
  <FiRefreshCw size={20} />,
  <FiEye size={20} />,
  <FiGrid size={20} />,
];

export default function Architecture() {
  return (
    <section id="architecture" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4 relative">
            <span className="font-mono text-sm text-accent">03.</span>
            <h2 className="text-2xl md:text-3xl font-bold text-text-primary">
              Architecture Philosophy
            </h2>
            <div className="h-px flex-1 bg-glass-border ml-4" />
            <span className="hidden md:block font-mono text-[10px] text-text-muted/30 tracking-widest">0100 0011</span>
          </div>
          <p className="text-text-secondary max-w-2xl">
            Principles that guide every system I design. These aren't rules — they're battle-tested convictions.
          </p>
        </div>

        {/* Philosophy Cards */}
        <div className="grid md:grid-cols-2 gap-5">
          {architecturePhilosophy.map((item, i) => (
            <div
              key={item.principle}
              className="glass-card p-6 group hover:border-accent/30 transition-all duration-300 relative overflow-hidden"
            >
              {/* Background Number */}
              <span className="absolute top-4 right-6 text-6xl font-bold text-white/[0.02] select-none">
                0{i + 1}
              </span>

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-accent">{icons[i]}</span>
                  <h3 className="text-lg font-semibold text-text-primary">
                    {item.principle}
                  </h3>
                </div>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
