import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setLoading(false), 300);
          return 100;
        }
        return prev + Math.random() * 15 + 5;
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-dark-900"
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
              <p className={progress > 10 ? "text-text-secondary" : ""}>
                <span className="text-emerald">✓</span> Loading modules...
              </p>
              <p className={progress > 30 ? "text-text-secondary" : ""}>
                <span className="text-emerald">{progress > 30 ? "✓" : "○"}</span> Initializing components...
              </p>
              <p className={progress > 60 ? "text-text-secondary" : ""}>
                <span className="text-emerald">{progress > 60 ? "✓" : "○"}</span> Connecting services...
              </p>
              <p className={progress > 90 ? "text-text-secondary" : ""}>
                <span className="text-emerald">{progress > 90 ? "✓" : "○"}</span> System ready.
              </p>
            </div>

            {/* Progress Bar */}
            <div className="h-1 bg-dark-700 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-accent to-cyan rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${Math.min(progress, 100)}%` }}
                transition={{ ease: "easeOut" }}
              />
            </div>
            <p className="text-[10px] text-text-muted mt-2 text-right">
              {Math.min(Math.floor(progress), 100)}%
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
