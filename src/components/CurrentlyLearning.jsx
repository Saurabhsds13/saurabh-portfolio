import { FiBookOpen, FiTarget, FiTrendingUp, FiCpu } from "react-icons/fi";

const learningItems = [
  {
    icon: <FiCpu size={18} />,
    title: "Kubernetes & Container Orchestration",
    description: "Deploying and managing microservices at scale with K8s, Helm charts, and service meshes.",
    progress: 60,
  },
  {
    icon: <FiTarget size={18} />,
    title: "System Design Interviews",
    description: "Mastering large-scale system design — load balancers, CDNs, sharding, consensus algorithms.",
    progress: 75,
  },
  {
    icon: <FiTrendingUp size={18} />,
    title: "Cloud Architecture (AWS)",
    description: "AWS Solutions Architect path — ECS, Lambda, DynamoDB, SQS, and infrastructure as code.",
    progress: 45,
  },
  {
    icon: <FiBookOpen size={18} />,
    title: "Open Source Contributions",
    description: "Contributing to Spring ecosystem and building educational Java projects for the community.",
    progress: 50,
  },
];

export default function CurrentlyLearning() {
  return (
    <section id="learning" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4 relative">
            <span className="font-mono text-sm text-accent">09.</span>
            <h2 className="text-2xl md:text-3xl font-bold text-text-primary">
              Currently Learning
            </h2>
            <div className="h-px flex-1 bg-glass-border ml-4" />
            <span className="hidden md:block font-mono text-[10px] text-text-muted/30 tracking-widest">0100 1100</span>
          </div>
          <p className="text-text-secondary max-w-2xl">
            Always evolving. Here's what I'm investing my learning time into right now.
          </p>
        </div>

        {/* Learning Cards */}
        <div className="grid md:grid-cols-2 gap-5">
          {learningItems.map((item) => (
            <div
              key={item.title}
              className="glass-card p-6 group hover:border-accent/30 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-lg bg-accent/10 text-accent mt-0.5 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-base font-semibold text-text-primary mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs text-text-secondary leading-relaxed mb-3">
                    {item.description}
                  </p>
                  {/* Progress Bar */}
                  <div className="flex items-center gap-3">
                    <div className="flex-1 h-1.5 bg-dark-800 rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-accent to-cyan transition-all duration-700"
                        style={{ width: `${item.progress}%` }}
                      />
                    </div>
                    <span className="text-[10px] font-mono text-text-muted">
                      {item.progress}%
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
