export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-glass-border">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-text-muted font-mono">
          <span className="text-accent">0x</span>SS{" "}
          <span className="text-text-muted/50">|</span>{" "}
          Built by <span className="text-text-secondary">Saurabh Sonawane</span>
        </p>
        <p className="text-xs text-text-muted font-mono tracking-wider">
          Java • Spring Boot • Kafka • React • 01100010 01110101 01101001 01101100 01110100
        </p>
      </div>
    </footer>
  );
}
