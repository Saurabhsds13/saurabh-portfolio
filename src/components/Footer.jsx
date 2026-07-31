export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-glass-border">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-text-muted font-mono">
          <span className="text-accent">0x</span>SS{" "}
          <span className="text-text-muted/50">|</span>{" "}
          Built by <span className="text-text-secondary">Saurabh Sonawane</span>
        </p>
        <div className="flex items-center gap-4">
          <kbd className="text-[10px] font-mono text-text-muted border border-glass-border rounded px-2 py-1 hover:border-accent/40 hover:text-accent transition-colors cursor-help" title="Open command palette">
            Ctrl + K
          </kbd>
          <p className="text-xs text-text-muted font-mono tracking-wider">
            Java • Spring Boot • Kafka • React
          </p>
        </div>
      </div>
    </footer>
  );
}
