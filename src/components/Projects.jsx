import { projects } from "../data/portfolio";

export default function Projects() {
  return (
    <section>
      <h2>Featured Projects</h2>
      {projects.map((project) => (
        <article key={project.title} className="project-card">
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <div className="project-tags">
            {project.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
          {project.link && project.link !== "#" && (
            <a
              href={project.link}
              className="project-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project →
            </a>
          )}
        </article>
      ))}
    </section>
  );
}
