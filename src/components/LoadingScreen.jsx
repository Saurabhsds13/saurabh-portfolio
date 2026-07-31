import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";

const SESSION_KEY = "intro-played";

const steps = [
  { at: 10, label: "Loading modules..." },
  { at: 30, label: "Initializing components..." },
  { at: 60, label: "Connecting services..." },
  { at: 90, label: "System ready." },
];

/**
 * Terminal-style intro. Deliberately skipped when:
 *  - the visitor has already seen it this session (avoids blocking repeat views)
 *  - the visitor prefers reduced motion
 */
function shouldSkipIntro() {
  if (typeof window === "undefined") return true;
  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;
  return prefersReducedMotion || sessionStorage.getItem(SESSION_KEY) === "1";
}

export default function LoadingScreen() {
  const [loading, setLoading] = useState(() => !shouldSkipIntro());
  const [progress, setProgress] = useState(0);
  const timeoutRef = useRef(null);

  useEffect(() => {
    if (!loading) return;

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 100;
        return Math.min(prev + Math.random() * 15 + 5, 100);
      });
    }, 100);

    return () => clearInterval(interval);
  }, [loading]);

  // Dismissal is kept out of the state updater so React's double-invoked
  // updaters in development cannot schedule the timer twice.
  useEffect(() => {
    if (!loading || progress < 100 || timeoutRef.current) return;

    timeoutRef.current = setTimeout(() => {
      sessionStorage.setItem(SESSION_KEY, "1");
      setLoading(false);
    }, 300);

    return () => {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    };
  }, [loading, progress]);

  const shown = Math.min(Math.floor(progress), 100);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-dark-900"
          role="status"
          aria-live="polite"
          aria-label="Loading portfolio"
        >
          {/* Logo */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="mb-8"
          >
            <span className="font-mono text-3xl font-bold text-accent">
              <span className="text-text-muted text-lg">0x</span>SS
            </span>
          </motion.div>

          {/* Terminal Loading */}
          <div className="w-72 font-mono text-xs">
            <div className="space-y-1 mb-4 text-text-muted">
              {steps.map((step) => {
                const done = shown > step.at;
                return (
                  <p key={step.label} className={done ? "text-text-secondary" : ""}>
                    <span className="text-emerald">{done ? "✓" : "○"}</span> {step.label}
                  </p>
                );
              })}
            </div>

            {/* Progress Bar */}
            <div className="h-1 bg-dark-700 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-accent to-cyan rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${shown}%` }}
                transition={{ ease: "easeOut" }}
              />
            </div>
            <p className="text-[10px] text-text-muted mt-2 text-right">{shown}%</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
