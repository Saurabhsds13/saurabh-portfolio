export default function ArchitectureDiagram() {
  return (
    <section id="system-design" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4 relative">
            <span className="font-mono text-sm text-accent">07.</span>
            <h2 className="text-2xl md:text-3xl font-bold text-text-primary">
              System Design — Inventory Executor
            </h2>
            <div className="h-px flex-1 bg-glass-border ml-4" />
            <span className="hidden md:block font-mono text-[10px] text-text-muted/30 tracking-widest">0100 1001</span>
          </div>
          <p className="text-text-secondary max-w-3xl">
            A real-time inventory automation framework processing stock events across 50+ fulfillment centers.
            Here's how the system flows from event ingestion to execution.
          </p>
        </div>

        {/* Architecture Diagram */}
        <div className="glass-card p-6 md:p-10 overflow-x-auto">
          <svg
            viewBox="0 0 900 520"
            className="w-full h-auto min-w-[700px]"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Background grid dots */}
            {Array.from({ length: 20 }).map((_, row) =>
              Array.from({ length: 30 }).map((_, col) => (
                <circle
                  key={`${row}-${col}`}
                  cx={col * 30 + 15}
                  cy={row * 26 + 10}
                  r="0.5"
                  fill="rgba(99, 102, 241, 0.15)"
                />
              ))
            )}

            {/* === NODES === */}

            {/* Event Sources */}
            <g>
              <rect x="20" y="60" width="130" height="50" rx="8" fill="rgba(99, 102, 241, 0.1)" stroke="rgba(99, 102, 241, 0.4)" strokeWidth="1.5" />
              <text x="85" y="82" textAnchor="middle" fill="#818cf8" fontSize="9" fontFamily="monospace">SAP / RTAM / MRP</text>
              <text x="85" y="97" textAnchor="middle" fill="#94a3b8" fontSize="8" fontFamily="monospace">Event Sources</text>
            </g>

            {/* Kafka */}
            <g>
              <rect x="220" y="45" width="150" height="70" rx="10" fill="rgba(34, 211, 238, 0.08)" stroke="rgba(34, 211, 238, 0.5)" strokeWidth="1.5" />
              <text x="295" y="72" textAnchor="middle" fill="#22d3ee" fontSize="11" fontWeight="600" fontFamily="monospace">Apache Kafka</text>
              <text x="295" y="90" textAnchor="middle" fill="#64748b" fontSize="8" fontFamily="monospace">Topics: inventory.events</text>
              <text x="295" y="103" textAnchor="middle" fill="#64748b" fontSize="8" fontFamily="monospace">stock.updates | price.sync</text>
            </g>

            {/* Arrow: Sources → Kafka */}
            <path d="M150 85 L220 80" stroke="rgba(99, 102, 241, 0.5)" strokeWidth="1.5" markerEnd="url(#arrowhead)" />

            {/* Consumer Service */}
            <g>
              <rect x="440" y="40" width="180" height="80" rx="10" fill="rgba(99, 102, 241, 0.06)" stroke="rgba(99, 102, 241, 0.4)" strokeWidth="1.5" />
              <text x="530" y="65" textAnchor="middle" fill="#818cf8" fontSize="11" fontWeight="600" fontFamily="monospace">Inventory Executor</text>
              <text x="530" y="82" textAnchor="middle" fill="#94a3b8" fontSize="8" fontFamily="monospace">Spring Boot Consumer</text>
              <text x="530" y="96" textAnchor="middle" fill="#64748b" fontSize="7" fontFamily="monospace">ThreadPoolTaskExecutor</text>
              <text x="530" y="108" textAnchor="middle" fill="#64748b" fontSize="7" fontFamily="monospace">Async Event Processing</text>
            </g>

            {/* Arrow: Kafka → Consumer */}
            <path d="M370 80 L440 75" stroke="rgba(34, 211, 238, 0.5)" strokeWidth="1.5" markerEnd="url(#arrowhead)" />

            {/* Redis - Distributed Lock */}
            <g>
              <rect x="690" y="30" width="160" height="55" rx="8" fill="rgba(239, 68, 68, 0.06)" stroke="rgba(239, 68, 68, 0.4)" strokeWidth="1.5" />
              <text x="770" y="52" textAnchor="middle" fill="#f87171" fontSize="10" fontWeight="600" fontFamily="monospace">Redis (Redisson)</text>
              <text x="770" y="68" textAnchor="middle" fill="#94a3b8" fontSize="8" fontFamily="monospace">Distributed Locks</text>
              <text x="770" y="80" textAnchor="middle" fill="#64748b" fontSize="7" fontFamily="monospace">Exactly-once execution</text>
            </g>

            {/* Arrow: Consumer → Redis */}
            <path d="M620 60 L690 55" stroke="rgba(239, 68, 68, 0.4)" strokeWidth="1.5" markerEnd="url(#arrowhead)" />

            {/* Scheduler */}
            <g>
              <rect x="690" y="110" width="160" height="50" rx="8" fill="rgba(52, 211, 153, 0.06)" stroke="rgba(52, 211, 153, 0.4)" strokeWidth="1.5" />
              <text x="770" y="132" textAnchor="middle" fill="#34d399" fontSize="10" fontWeight="600" fontFamily="monospace">Distributed Scheduler</text>
              <text x="770" y="148" textAnchor="middle" fill="#94a3b8" fontSize="8" fontFamily="monospace">Cron + Redis Lock</text>
            </g>

            {/* Arrow: Consumer → Scheduler */}
            <path d="M620 95 L690 125" stroke="rgba(52, 211, 153, 0.4)" strokeWidth="1.5" markerEnd="url(#arrowhead)" />

            {/* MongoDB */}
            <g>
              <rect x="350" y="200" width="160" height="60" rx="10" fill="rgba(52, 211, 153, 0.06)" stroke="rgba(52, 211, 153, 0.4)" strokeWidth="1.5" />
              <text x="430" y="225" textAnchor="middle" fill="#34d399" fontSize="11" fontWeight="600" fontFamily="monospace">MongoDB</text>
              <text x="430" y="242" textAnchor="middle" fill="#94a3b8" fontSize="8" fontFamily="monospace">Multi-instance Architecture</text>
              <text x="430" y="254" textAnchor="middle" fill="#64748b" fontSize="7" fontFamily="monospace">Inventory State & Configs</text>
            </g>

            {/* Arrow: Consumer → MongoDB */}
            <path d="M530 120 L450 200" stroke="rgba(52, 211, 153, 0.4)" strokeWidth="1.5" markerEnd="url(#arrowhead)" />

            {/* IBM MQ */}
            <g>
              <rect x="80" y="190" width="140" height="55" rx="8" fill="rgba(251, 191, 36, 0.06)" stroke="rgba(251, 191, 36, 0.4)" strokeWidth="1.5" />
              <text x="150" y="213" textAnchor="middle" fill="#fbbf24" fontSize="10" fontWeight="600" fontFamily="monospace">IBM MQ (JMS)</text>
              <text x="150" y="230" textAnchor="middle" fill="#94a3b8" fontSize="8" fontFamily="monospace">Legacy Integration</text>
              <text x="150" y="242" textAnchor="middle" fill="#64748b" fontSize="7" fontFamily="monospace">SAP Messages</text>
            </g>

            {/* Arrow: IBM MQ → Consumer */}
            <path d="M220 215 L440 100" stroke="rgba(251, 191, 36, 0.3)" strokeWidth="1.5" strokeDasharray="4 3" markerEnd="url(#arrowhead)" />

            {/* Dead Letter Queue */}
            <g>
              <rect x="600" y="210" width="150" height="50" rx="8" fill="rgba(239, 68, 68, 0.04)" stroke="rgba(239, 68, 68, 0.3)" strokeWidth="1" strokeDasharray="4 2" />
              <text x="675" y="232" textAnchor="middle" fill="#f87171" fontSize="9" fontFamily="monospace">Dead Letter Queue</text>
              <text x="675" y="248" textAnchor="middle" fill="#64748b" fontSize="7" fontFamily="monospace">Failed Events + Retry</text>
            </g>

            {/* Arrow: Consumer → DLQ */}
            <path d="M570 120 L650 210" stroke="rgba(239, 68, 68, 0.3)" strokeWidth="1" strokeDasharray="4 3" markerEnd="url(#arrowhead)" />

            {/* Fulfillment Centers */}
            <g>
              <rect x="310" y="320" width="220" height="60" rx="10" fill="rgba(99, 102, 241, 0.05)" stroke="rgba(99, 102, 241, 0.3)" strokeWidth="1.5" />
              <text x="420" y="345" textAnchor="middle" fill="#818cf8" fontSize="11" fontWeight="600" fontFamily="monospace">50+ Fulfillment Centers</text>
              <text x="420" y="362" textAnchor="middle" fill="#94a3b8" fontSize="8" fontFamily="monospace">Stock Updates | Price Sync | Article Onboarding</text>
              <text x="420" y="374" textAnchor="middle" fill="#64748b" fontSize="7" fontFamily="monospace">Real-time inventory execution</text>
            </g>

            {/* Arrow: MongoDB → Fulfillment */}
            <path d="M430 260 L420 320" stroke="rgba(99, 102, 241, 0.4)" strokeWidth="1.5" markerEnd="url(#arrowhead)" />

            {/* REST APIs */}
            <g>
              <rect x="80" y="320" width="140" height="50" rx="8" fill="rgba(99, 102, 241, 0.05)" stroke="rgba(99, 102, 241, 0.25)" strokeWidth="1" />
              <text x="150" y="342" textAnchor="middle" fill="#818cf8" fontSize="9" fontFamily="monospace">REST APIs</text>
              <text x="150" y="357" textAnchor="middle" fill="#64748b" fontSize="7" fontFamily="monospace">OpenFeign + Resilience4j</text>
              <text x="150" y="369" textAnchor="middle" fill="#64748b" fontSize="7" fontFamily="monospace">Circuit Breaker Pattern</text>
            </g>

            {/* Arrow: Consumer → REST APIs */}
            <path d="M470 120 L200 320" stroke="rgba(99, 102, 241, 0.25)" strokeWidth="1" strokeDasharray="4 3" markerEnd="url(#arrowhead)" />

            {/* Resilience4j */}
            <g>
              <rect x="620" y="320" width="150" height="50" rx="8" fill="rgba(129, 140, 248, 0.05)" stroke="rgba(129, 140, 248, 0.3)" strokeWidth="1" />
              <text x="695" y="342" textAnchor="middle" fill="#818cf8" fontSize="9" fontFamily="monospace">Resilience4j</text>
              <text x="695" y="357" textAnchor="middle" fill="#64748b" fontSize="7" fontFamily="monospace">Retry | Circuit Breaker</text>
              <text x="695" y="369" textAnchor="middle" fill="#64748b" fontSize="7" fontFamily="monospace">Rate Limiter | Bulkhead</text>
            </g>

            {/* Arrow: Consumer → Resilience */}
            <path d="M580 120 L670 320" stroke="rgba(129, 140, 248, 0.25)" strokeWidth="1" strokeDasharray="4 3" markerEnd="url(#arrowhead)" />

            {/* Flow Labels */}
            <text x="175" y="72" fill="#64748b" fontSize="7" fontFamily="monospace">produce</text>
            <text x="390" y="68" fill="#64748b" fontSize="7" fontFamily="monospace">consume</text>
            <text x="635" y="48" fill="#64748b" fontSize="7" fontFamily="monospace">acquire lock</text>
            <text x="475" y="170" fill="#64748b" fontSize="7" fontFamily="monospace">persist</text>
            <text x="600" y="175" fill="#64748b" fontSize="7" fontFamily="monospace">on failure</text>
            <text x="410" y="300" fill="#64748b" fontSize="7" fontFamily="monospace">execute</text>

            {/* Legend */}
            <g transform="translate(30, 430)">
              <text x="0" y="0" fill="#94a3b8" fontSize="9" fontWeight="600" fontFamily="monospace">LEGEND:</text>
              <line x1="0" y1="15" x2="30" y2="15" stroke="rgba(99, 102, 241, 0.5)" strokeWidth="1.5" />
              <text x="35" y="19" fill="#64748b" fontSize="8" fontFamily="monospace">Data Flow</text>
              <line x1="120" y1="15" x2="150" y2="15" stroke="rgba(99, 102, 241, 0.3)" strokeWidth="1" strokeDasharray="4 3" />
              <text x="155" y="19" fill="#64748b" fontSize="8" fontFamily="monospace">Async / Fallback</text>
              <rect x="280" y="8" width="14" height="14" rx="3" fill="rgba(34, 211, 238, 0.08)" stroke="rgba(34, 211, 238, 0.5)" strokeWidth="1" />
              <text x="300" y="19" fill="#64748b" fontSize="8" fontFamily="monospace">Messaging</text>
              <rect x="380" y="8" width="14" height="14" rx="3" fill="rgba(239, 68, 68, 0.06)" stroke="rgba(239, 68, 68, 0.4)" strokeWidth="1" />
              <text x="400" y="19" fill="#64748b" fontSize="8" fontFamily="monospace">Caching / Locks</text>
              <rect x="500" y="8" width="14" height="14" rx="3" fill="rgba(52, 211, 153, 0.06)" stroke="rgba(52, 211, 153, 0.4)" strokeWidth="1" />
              <text x="520" y="19" fill="#64748b" fontSize="8" fontFamily="monospace">Storage / Scheduling</text>
            </g>

            {/* Arrow marker definition */}
            <defs>
              <marker id="arrowhead" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
                <polygon points="0 0, 8 3, 0 6" fill="rgba(148, 163, 184, 0.6)" />
              </marker>
            </defs>
          </svg>
        </div>

        {/* Key Design Decisions */}
        <div className="grid md:grid-cols-3 gap-4 mt-8">
          <div className="glass-card p-5">
            <h4 className="text-sm font-semibold text-accent font-mono mb-2">Why Kafka?</h4>
            <p className="text-xs text-text-secondary leading-relaxed">
              High-throughput event streaming with partition-based parallelism. Handles burst loads from SAP/RTAM without backpressure on producers.
            </p>
          </div>
          <div className="glass-card p-5">
            <h4 className="text-sm font-semibold text-accent font-mono mb-2">Why Redis Locks?</h4>
            <p className="text-xs text-text-secondary leading-relaxed">
              Multiple app instances run identical schedulers. Redisson distributed locks ensure exactly-once execution without duplicate processing.
            </p>
          </div>
          <div className="glass-card p-5">
            <h4 className="text-sm font-semibold text-accent font-mono mb-2">Why DLQ?</h4>
            <p className="text-xs text-text-secondary leading-relaxed">
              Failed events go to dead-letter topics with configurable retry policies. No data loss, full audit trail, and manual reprocessing capability.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
