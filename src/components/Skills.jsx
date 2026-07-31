import { skills } from "../data/portfolio";
import {
  FiServer,
  FiCode,
  FiMonitor,
  FiDatabase,
  FiCloud,
  FiBookOpen,
} from "react-icons/fi";

const iconMap = {
  architecture: <FiServer size={22} />,
  backend: <FiCode size={22} />,
  frontend: <FiMonitor size={22} />,
  database: <FiDatabase size={22} />,
  devops: <FiCloud size={22} />,
  practices: <FiBookOpen size={22} />,
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4 relative">
            <span className="font-mono text-sm text-accent">02.</span>
            <h2 className="text-2xl md:text-3xl font-bold text-text-primary">
              Technical Arsenal
            </h2>
            <div className="h-px flex-1 bg-glass-border ml-4" />
            <span className="hidden md:block font-mono text-[10px] text-text-muted/30 tracking-widest">0101 0100</span>
          </div>
          <p className="text-text-secondary max-w-2xl">
            A comprehensive toolkit refined over years of building production systems at scale.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {Object.entries(skills).map(([category, { icon, items }], i) => (
            <div
              key={category}
              className={`glass-card p-6 group hover:border-accent/30 transition-all duration-300 hover:-translate-y-1 ${
                i === 0 ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-5">
                <div className="text-accent group-hover:scale-110 transition-transform duration-300">
                  {iconMap[icon]}
                </div>
                <h3 className="text-sm font-semibold text-text-primary uppercase tracking-wider">
                  {category}
                </h3>
              </div>

              {/* Skills */}
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-xs font-medium text-text-secondary bg-dark-800/80 border border-glass-border rounded-lg hover:border-accent/40 hover:text-accent transition-all duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
