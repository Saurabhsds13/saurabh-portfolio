import { useState } from "react";
import { FiGithub, FiStar, FiGitBranch, FiCode, FiExternalLink } from "react-icons/fi";

export default function GitHubStats() {
  const username = "Saurabhsds13";
  // The heatmap is rendered by a third-party service, so degrade gracefully
  // instead of showing a broken image if it is unreachable.
  const [chartFailed, setChartFailed] = useState(false);

  return (
    <section id="github" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="reveal mb-12">
          <div className="flex items-center gap-3 mb-4 relative">
            <span className="font-mono text-sm text-accent">08.</span>
            <h2 className="text-2xl md:text-3xl font-bold text-text-primary">
              GitHub Activity
            </h2>
            <div className="h-px flex-1 bg-glass-border ml-4" />
            <span className="hidden md:block font-mono text-[10px] text-text-muted/30 tracking-widest">0100 0111</span>
          </div>
          <p className="text-text-secondary max-w-2xl">
            My open-source contributions and coding activity.
          </p>
        </div>

        {/* GitHub Contribution Graph */}
        <div className="reveal glass-card p-6 md:p-8 mb-6">
          <div className="flex items-center gap-3 mb-6">
            <FiGithub size={20} className="text-accent" />
            <a
              href={`https://github.com/${username}`}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-sm text-text-primary hover:text-accent transition-colors"
            >
              @{username}
            </a>
          </div>

          {/* Contribution heatmap using GitHub's public image */}
          {chartFailed ? (
            <a
              href={`https://github.com/${username}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-10 rounded-lg border border-dashed border-glass-border text-sm text-text-muted hover:text-accent hover:border-accent/40 transition-colors"
            >
              Contribution chart unavailable — view on GitHub
              <FiExternalLink size={14} />
            </a>
          ) : (
            <div className="overflow-x-auto pb-2">
              <img
                src={`https://ghchart.rshah.org/6366f1/${username}`}
                alt={`GitHub contribution chart for ${username}`}
                className="w-full min-w-[700px] rounded-lg opacity-90 hover:opacity-100 transition-opacity"
                loading="lazy"
                onError={() => setChartFailed(true)}
              />
            </div>
          )}
        </div>

        {/* GitHub Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 stagger">
          <div className="glass-card p-5 flex items-center gap-4 group hover:border-accent/30 transition-all duration-300">
            <div className="p-3 rounded-lg bg-accent/10 text-accent group-hover:scale-110 transition-transform">
              <FiCode size={20} />
            </div>
            <div>
              <p className="text-xs text-text-muted font-mono uppercase tracking-wider">Top Language</p>
              <p className="text-lg font-semibold text-text-primary">Java</p>
            </div>
          </div>

          <div className="glass-card p-5 flex items-center gap-4 group hover:border-accent/30 transition-all duration-300">
            <div className="p-3 rounded-lg bg-cyan/10 text-cyan group-hover:scale-110 transition-transform">
              <FiGitBranch size={20} />
            </div>
            <div>
              <p className="text-xs text-text-muted font-mono uppercase tracking-wider">Public Repos</p>
              <p className="text-lg font-semibold text-text-primary">10+</p>
            </div>
          </div>

          <div className="glass-card p-5 flex items-center gap-4 group hover:border-accent/30 transition-all duration-300">
            <div className="p-3 rounded-lg bg-emerald/10 text-emerald group-hover:scale-110 transition-transform">
              <FiStar size={20} />
            </div>
            <div>
              <p className="text-xs text-text-muted font-mono uppercase tracking-wider">Focus Areas</p>
              <p className="text-lg font-semibold text-text-primary">Backend & Systems</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
