import { useState, useEffect, useRef } from "react";
import { FiSearch, FiArrowRight, FiX } from "react-icons/fi";

const commands = [
  { label: "About Me", section: "#about", hint: "whoami" },
  { label: "Technical Skills", section: "#skills", hint: "cat skills.json" },
  { label: "Architecture Philosophy", section: "#architecture", hint: "cat principles.md" },
  { label: "Experience", section: "#experience", hint: "history --work" },
  { label: "Projects", section: "#projects", hint: "ls ~/projects" },
  { label: "System Design", section: "#system-design", hint: "draw --diagram" },
  { label: "GitHub Activity", section: "#github", hint: "git log --oneline" },
  { label: "Currently Learning", section: "#learning", hint: "apt list --upgradable" },
  { label: "Contact", section: "#contact", hint: "mail --compose" },
  { label: "Download Resume", section: "resume", hint: "wget resume.pdf" },
  { label: "Toggle Theme", section: "theme", hint: "toggle --theme" },
  { label: "Go to Top", section: "top", hint: "cd ~" },
];

export default function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState(0);
  const inputRef = useRef(null);

  const filtered = commands.filter(
    (cmd) =>
      cmd.label.toLowerCase().includes(query.toLowerCase()) ||
      cmd.hint.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "k") {
        e.preventDefault();
        setOpen((prev) => !prev);
        setQuery("");
        setSelected(0);
      }
      if (e.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    if (open && inputRef.current) {
      inputRef.current.focus();
    }
  }, [open]);

  useEffect(() => {
    setSelected(0);
  }, [query]);

  const execute = (cmd) => {
    setOpen(false);
    setQuery("");

    if (cmd.section === "resume") {
      window.open("/saurabh-portfolio/resume.pdf", "_blank");
    } else if (cmd.section === "theme") {
      document.documentElement.classList.toggle("light");
      localStorage.setItem(
        "theme",
        document.documentElement.classList.contains("light") ? "light" : "dark"
      );
    } else if (cmd.section === "top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      document.querySelector(cmd.section)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelected((prev) => (prev + 1) % filtered.length);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelected((prev) => (prev - 1 + filtered.length) % filtered.length);
    } else if (e.key === "Enter" && filtered[selected]) {
      execute(filtered[selected]);
    }
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-start justify-center pt-[20vh]">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-dark-900/80 backdrop-blur-sm"
        onClick={() => setOpen(false)}
      />

      {/* Palette */}
      <div className="relative w-full max-w-lg mx-4 bg-dark-800 border border-glass-border rounded-xl shadow-2xl shadow-accent/10 overflow-hidden">
        {/* Input */}
        <div className="flex items-center gap-3 px-4 py-3 border-b border-glass-border">
          <FiSearch size={16} className="text-text-muted" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type a command or search..."
            className="flex-1 bg-transparent text-text-primary text-sm font-mono outline-none placeholder:text-text-muted"
          />
          <kbd className="hidden sm:block text-[10px] font-mono text-text-muted border border-glass-border rounded px-1.5 py-0.5">
            ESC
          </kbd>
        </div>

        {/* Results */}
        <div className="max-h-72 overflow-y-auto py-2">
          {filtered.length === 0 && (
            <p className="px-4 py-3 text-sm text-text-muted font-mono">
              No commands found.
            </p>
          )}
          {filtered.map((cmd, i) => (
            <button
              key={cmd.label}
              onClick={() => execute(cmd)}
              className={`w-full flex items-center justify-between px-4 py-2.5 text-left transition-colors ${
                i === selected
                  ? "bg-accent/10 text-accent"
                  : "text-text-secondary hover:bg-dark-700"
              }`}
            >
              <div className="flex items-center gap-3">
                <FiArrowRight size={12} className={i === selected ? "text-accent" : "text-text-muted"} />
                <span className="text-sm font-medium">{cmd.label}</span>
              </div>
              <span className="text-[10px] font-mono text-text-muted">{cmd.hint}</span>
            </button>
          ))}
        </div>

        {/* Footer hint */}
        <div className="px-4 py-2 border-t border-glass-border flex items-center gap-4 text-[10px] text-text-muted font-mono">
          <span>↑↓ navigate</span>
          <span>↵ select</span>
          <span>esc close</span>
        </div>
      </div>
    </div>
  );
}
