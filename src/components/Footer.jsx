import { contact } from "../data/portfolio";

export default function Footer() {
  return (
    <footer className="footer">
      <h2>Get In Touch</h2>
      <div className="footer-links">
        <a href={`mailto:${contact.email}`}>📧 {contact.email}</a>
        <a href={contact.github} target="_blank" rel="noopener noreferrer">
          💻 GitHub
        </a>
        <a href={contact.linkedin} target="_blank" rel="noopener noreferrer">
          🔗 LinkedIn
        </a>
      </div>
    </footer>
  );
}
