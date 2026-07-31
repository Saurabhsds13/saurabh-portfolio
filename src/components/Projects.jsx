import { projects } from "../data/portfolio";
import { FiExternalLink, FiBox } from "react-icons/fi";

export default function Projects() {
  const featured = projects.filter((p) => p.featured);
  const other = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="reveal mb-12">
          <div className="flex items-center gap-3 mb-4 relative">
            <span className="font-mono text-sm text-accent">05.</span>
            <h2 className="text-2xl md:text-3xl font-bold text-text-primary">
              Featured Projects
            </h2>
            <div className="h-px flex-1 bg-glass-border ml-4" />
            <span className="hidden md:block font-mono text-[10px] text-text-muted/30 tracking-widest">0101 0000</span>
          </div>
          <p className="text-text-secondary max-w-2xl">
            Systems I've architected and built — each solving real problems at scale.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="space-y-6 mb-12">
          {featured.map((project) => (
            <article
              key={project.title}
              className="reveal glass-card p-6 md:p-8 group hover:border-accent/30 transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-accent/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-3">
                  <FiBox size={14} className="text-cyan" />
                  <span className="text-xs font-mono text-cyan uppercase tracking-wider">
                    {project.architecture}
                  </span>
                </div>

                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-semibold text-text-primary group-hover:text-accent transition-colors duration-300">
                    {project.title}
                  </h3>
                  {project.link && project.link !== "#" && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-text-muted hover:text-accent transition-colors"
                      aria-label={`View ${project.title}`}
                    >
                      <FiExternalLink size={18} />
                    </a>
                  )}
                </div>

                <p className="text-sm text-text-secondary leading-relaxed mb-4 max-w-3xl">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-mono text-accent/80 bg-accent/[0.06] border border-accent/10 rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Other Projects */}
        {other.length > 0 && (
          <div>
            <h3 className="reveal text-lg font-semibold text-text-primary mb-4">
              Other Notable Projects
            </h3>
            <div className="grid md:grid-cols-2 gap-4 stagger">
              {other.map((project) => (
                <article
                  key={project.title}
                  className="reveal-scale glass-card p-5 hover:border-accent/30 transition-all duration-300"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <FiBox size={14} className="text-cyan" />
                    <span className="text-xs font-mono text-cyan">
                      {project.architecture}
                    </span>
                  </div>
                  <h4 className="text-base font-semibold text-text-primary mb-2">
                    {project.title}
                  </h4>
                  <p className="text-xs text-text-secondary leading-relaxed mb-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 text-[10px] font-mono text-text-muted bg-dark-800 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  {project.link && project.link !== "#" && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 mt-3 text-xs text-accent hover:underline"
                    >
                      View on GitHub <FiExternalLink size={12} />
                    </a>
                  )}
                </article>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
