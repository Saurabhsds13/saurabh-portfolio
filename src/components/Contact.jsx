import { contact } from "../data/portfolio";
import { FiMail, FiGithub, FiLinkedin, FiArrowUpRight } from "react-icons/fi";

export default function Contact() {
  return (
    <section id="contact" className="py-16 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <span className="font-mono text-sm text-accent mb-4 block">06. What's Next?</span>
        <h2 className="text-3xl md:text-5xl font-bold text-text-primary mb-6">
          Let's Build Something{" "}
          <span className="gradient-text">Together</span>
        </h2>
        <p className="text-text-secondary text-lg leading-relaxed mb-10 max-w-xl mx-auto">
          I'm always interested in discussing architecture challenges, new opportunities,
          or just geeking out about distributed systems. Drop me a line.
        </p>

        {/* Contact Links */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <a
            href={`mailto:${contact.email}`}
            className="group flex items-center gap-2 px-8 py-4 rounded-full bg-accent hover:bg-accent-light text-white font-medium transition-all duration-300 hover:shadow-lg hover:shadow-accent/25 hover:-translate-y-0.5"
          >
            <FiMail size={18} />
            Say Hello
            <FiArrowUpRight
              size={16}
              className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
            />
          </a>
        </div>

        {/* Social Grid */}
        <div className="flex items-center justify-center gap-6">
          <a
            href={contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card p-4 hover:border-accent/40 transition-all duration-300 hover:-translate-y-1 group"
            aria-label="GitHub Profile"
          >
            <FiGithub size={22} className="text-text-muted group-hover:text-accent transition-colors" />
          </a>
          <a
            href={contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card p-4 hover:border-accent/40 transition-all duration-300 hover:-translate-y-1 group"
            aria-label="LinkedIn Profile"
          >
            <FiLinkedin size={22} className="text-text-muted group-hover:text-accent transition-colors" />
          </a>
          <a
            href={`mailto:${contact.email}`}
            className="glass-card p-4 hover:border-accent/40 transition-all duration-300 hover:-translate-y-1 group"
            aria-label="Email"
          >
            <FiMail size={22} className="text-text-muted group-hover:text-accent transition-colors" />
          </a>
        </div>
      </div>
    </section>
  );
}
