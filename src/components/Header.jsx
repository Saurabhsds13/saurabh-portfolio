import { contact } from "../data/portfolio";

export default function Header() {
  return (
    <header className="header">
      <h1>Mr. Saurabh</h1>
      <h3>Senior Java Developer | React | SQL | Microservices Enthusiast</h3>
      <nav className="header-links">
        <a href={contact.github} target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        <a href={contact.linkedin} target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
        <a href={`mailto:${contact.email}`}>Email</a>
      </nav>
    </header>
  );
}
