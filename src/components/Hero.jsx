import { motion } from "framer-motion";
import { personalInfo, stats } from "../data/portfolio";
import { FiGithub, FiLinkedin, FiMail, FiDownload } from "react-icons/fi";
import { contact } from "../data/portfolio";
import { assetUrl } from "../utils/assetUrl";
import { useState, useEffect } from "react";

function TypeWriter({ text, delay = 0 }) {
  const [displayed, setDisplayed] = useState("");
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(timeout);
  }, [delay]);

  useEffect(() => {
    if (!started) return;
    let i = 0;
    const interval = setInterval(() => {
      if (i <= text.length) {
        setDisplayed(text.slice(0, i));
        i++;
      } else {
        clearInterval(interval);
      }
    }, 40);
    return () => clearInterval(interval);
  }, [started, text]);

  return (
    <span>
      {displayed}
      {displayed.length < text.length && started && (
        <span className="cursor-blink text-accent">▊</span>
      )}
    </span>
  );
}

export default function Hero() {
  const resumeHref = assetUrl(personalInfo.resumeFile);

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-20">
      {/* Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-[128px]" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-cyan/5 rounded-full blur-[100px]" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* System Status */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-glass-border bg-glass mb-8 font-mono text-xs"
        >
          <span className="w-2 h-2 bg-emerald rounded-full animate-pulse" />
          <span className="text-text-muted">system.status:</span>
          <span className="text-emerald">ONLINE</span>
          <span className="text-text-muted">|</span>
          <span className="text-text-muted">uptime:</span>
          <span className="text-text-secondary">3.1 yrs</span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6"
        >
          <span className="text-text-primary">Hi, I'm </span>
          <span className="gradient-text">{personalInfo.name.split(" ")[0]}</span>
        </motion.h1>

        {/* Title */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl md:text-2xl text-text-secondary font-light mb-6"
        >
          {personalInfo.title}
        </motion.p>

        {/* Terminal Block */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="inline-block w-full max-w-xl mx-auto text-left px-5 py-4 rounded-lg bg-dark-800/90 border border-glass-border font-mono text-sm mb-10"
        >
          <div className="flex items-center gap-2 mb-3 pb-2 border-b border-glass-border">
            <span className="w-3 h-3 rounded-full bg-red-500/70" />
            <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
            <span className="w-3 h-3 rounded-full bg-green-500/70" />
            <span className="ml-2 text-xs text-text-muted">saurabh@arch ~ </span>
          </div>
          <div className="space-y-1">
            <p className="text-text-muted">
              <span className="text-emerald">❯</span>{" "}
              <span className="text-accent">cat</span> mission.txt
            </p>
            <p className="text-text-secondary">
              <TypeWriter text={personalInfo.tagline} delay={800} />
            </p>
            <p className="text-text-muted mt-2">
              <span className="text-emerald">❯</span>{" "}
              <span className="text-accent">echo</span> $STACK
            </p>
            <p className="text-cyan text-xs">
              <TypeWriter text="Java · Spring Boot · Kafka · Redis · MongoDB · Microservices" delay={2500} />
            </p>
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-16"
        >
          <a
            href="#projects"
            className="px-8 py-3 rounded-full bg-accent hover:bg-accent-light text-white font-medium transition-all duration-300 hover:shadow-lg hover:shadow-accent/25 hover:-translate-y-0.5"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-8 py-3 rounded-full border border-glass-border hover:border-accent text-text-secondary hover:text-accent font-medium transition-all duration-300 hover:-translate-y-0.5 font-mono text-sm"
          >
            ./contact --me
          </a>
          {resumeHref && (
            <a
              href={resumeHref}
              download
              className="flex items-center gap-2 px-8 py-3 rounded-full border border-glass-border hover:border-emerald text-text-secondary hover:text-emerald font-medium transition-all duration-300 hover:-translate-y-0.5 font-mono text-sm"
            >
              <FiDownload size={16} />
              Resume
            </a>
          )}
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex items-center justify-center gap-6 mb-16"
        >
          <a
            href={contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-muted hover:text-accent transition-colors duration-200"
            aria-label="GitHub"
          >
            <FiGithub size={22} />
          </a>
          <a
            href={contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-muted hover:text-accent transition-colors duration-200"
            aria-label="LinkedIn"
          >
            <FiLinkedin size={22} />
          </a>
          <a
            href={`mailto:${contact.email}`}
            className="text-text-muted hover:text-accent transition-colors duration-200"
            aria-label="Email"
          >
            <FiMail size={22} />
          </a>
        </motion.div>

        {/* Stats — styled as system metrics */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="glass-card p-4 md:p-5 text-center hover:border-accent/30 transition-all duration-300 group"
            >
              <div className="text-2xl md:text-3xl font-bold font-mono gradient-text mb-1 group-hover:scale-105 transition-transform">
                {stat.value}
              </div>
              <div className="text-[10px] md:text-xs text-text-muted uppercase tracking-wider font-mono">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2"
        >
          <span className="font-mono text-[10px] text-text-muted">scroll</span>
          <div className="w-4 h-7 border border-text-muted/40 rounded-full flex justify-center pt-1">
            <div className="w-1 h-1.5 bg-accent rounded-full" />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
