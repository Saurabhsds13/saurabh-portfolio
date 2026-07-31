import { personalInfo } from "../data/portfolio";
import { FiCode, FiLayers, FiZap } from "react-icons/fi";

const highlights = [
  {
    icon: <FiLayers size={24} />,
    title: "System Design",
    text: "Designing scalable architectures with microservices, CQRS, and event-driven patterns.",
  },
  {
    icon: <FiCode size={24} />,
    title: "Clean Code",
    text: "Writing maintainable, testable code following SOLID principles and DDD practices.",
  },
  {
    icon: <FiZap size={24} />,
    title: "Performance",
    text: "Optimizing systems for high throughput, low latency, and efficient resource utilization.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Label */}
        <div className="flex items-center gap-3 mb-4 relative">
          <span className="font-mono text-sm text-accent">01.</span>
          <h2 className="text-2xl md:text-3xl font-bold text-text-primary">About Me</h2>
          <div className="h-px flex-1 bg-glass-border ml-4" />
          <span className="hidden md:block font-mono text-[10px] text-text-muted/30 tracking-widest">0100 0001</span>
        </div>

        {/* Description */}
        <p className="text-lg text-text-secondary max-w-3xl leading-relaxed mb-12">
          {personalInfo.description}
        </p>

        {/* Highlight Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {highlights.map((item) => (
            <div
              key={item.title}
              className="glass-card p-6 group hover:border-accent/30 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="text-accent mb-4 group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <h3 className="text-lg font-semibold text-text-primary mb-2">{item.title}</h3>
              <p className="text-sm text-text-secondary leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
