import { useState, useEffect } from "react";
import { FiGithub, FiStar, FiGitBranch, FiCode } from "react-icons/fi";

export default function GitHubStats() {
  const [stats, setStats] = useState(null);
  const [repos, setRepos] = useState([]);
  const username = "Saurabhsds13";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [userRes, reposRes] = await Promise.all([
          fetch(`https://api.github.com/users/${username}`),
          fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=6`),
        ]);
        const userData = await userRes.json();
        const reposData = await reposRes.json();
        setStats(userData);
        setRepos(Array.isArray(reposData) ? reposData : []);
      } catch (err) {
        // Silently fail — section just won't show stats
      }
    };
    fetchData();
  }, []);

  return (
    <section id="github" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4 relative">
            <span className="font-mono text-sm text-accent">08.</span>
            <h2 className="text-2xl md:text-3xl font-bold text-text-primary">
              GitHub Activity
            </h2>
            <div className="h-px flex-1 bg-glass-border ml-4" />
            <span className="hidden md:block font-mono text-[10px] text-text-muted/30 tracking-widest">0100 0111</span>
          </div>
          <p className="text-text-secondary max-w-2xl">
            Open source contributions and personal projects — always building, always learning.
          </p>
        </div>

        {/* Stats Cards */}
        {stats && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            <div className="glass-card p-5 text-center group hover:border-accent/30 transition-all duration-300">
              <FiGithub size={20} className="mx-auto mb-2 text-accent" />
              <div className="text-2xl font-bold font-mono gradient-text">{stats.public_repos}</div>
              <div className="text-xs text-text-muted font-mono uppercase tracking-wider mt-1">Repositories</div>
            </div>
            <div className="glass-card p-5 text-center group hover:border-accent/30 transition-all duration-300">
              <FiStar size={20} className="mx-auto mb-2 text-accent" />
              <div className="text-2xl font-bold font-mono gradient-text">{stats.followers}</div>
              <div className="text-xs text-text-muted font-mono uppercase tracking-wider mt-1">Followers</div>
            </div>
            <div className="glass-card p-5 text-center group hover:border-accent/30 transition-all duration-300">
              <FiGitBranch size={20} className="mx-auto mb-2 text-accent" />
              <div className="text-2xl font-bold font-mono gradient-text">{stats.following}</div>
              <div className="text-xs text-text-muted font-mono uppercase tracking-wider mt-1">Following</div>
            </div>
            <div className="glass-card p-5 text-center group hover:border-accent/30 transition-all duration-300">
              <FiCode size={20} className="mx-auto mb-2 text-accent" />
              <div className="text-2xl font-bold font-mono gradient-text">{stats.public_gists || 0}</div>
              <div className="text-xs text-text-muted font-mono uppercase tracking-wider mt-1">Gists</div>
            </div>
          </div>
        )}

        {/* Contribution Graph Image */}
        <div className="glass-card p-4 mb-10 overflow-hidden">
          <img
            src={`https://ghchart.rshah.org/6366f1/${username}`}
            alt="GitHub Contribution Graph"
            className="w-full h-auto rounded-lg"
            loading="lazy"
          />
        </div>

        {/* Recent Repos */}
        {repos.length > 0 && (
          <div>
            <h3 className="text-lg font-semibold text-text-primary mb-4 font-mono">
              <span className="text-accent">~/</span>recent-repos
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {repos.map((repo) => (
                <a
                  key={repo.id}
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card p-5 hover:border-accent/30 transition-all duration-300 hover:-translate-y-1 group block"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <FiGithub size={14} className="text-accent" />
                    <h4 className="text-sm font-semibold text-text-primary group-hover:text-accent transition-colors truncate">
                      {repo.name}
                    </h4>
                  </div>
                  <p className="text-xs text-text-secondary leading-relaxed mb-3 line-clamp-2">
                    {repo.description || "No description"}
                  </p>
                  <div className="flex items-center gap-4 text-[10px] font-mono text-text-muted">
                    {repo.language && (
                      <span className="flex items-center gap-1">
                        <span className="w-2 h-2 rounded-full bg-accent" />
                        {repo.language}
                      </span>
                    )}
                    {repo.stargazers_count > 0 && (
                      <span>★ {repo.stargazers_count}</span>
                    )}
                    {repo.forks_count > 0 && (
                      <span>⑂ {repo.forks_count}</span>
                    )}
                  </div>
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
