import React, { useState } from "react";
import { useLanguage } from "../../context/LanguageContext";
import "./projects.css";

export function Projects() {
  const { t } = useLanguage();
  const projects = t.projects.items;
  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);
  const [flippedCards, setFlippedCards] = useState({});

  const toggleFlip = (index) => {
    setFlippedCards((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <section id="projects" className="section fade-section">
      <h2 className="section__title" data-number="02.">
        {t.projects.title}
      </h2>

      {/* Featured projects */}
      <div className="projects__featured">
        {featuredProjects.map((project, i) => (
          <div key={i} className="project-featured">
            <div className="project-featured__label">
              {t.projects.featured}
            </div>
            <h3 className="project-featured__title">{project.title}</h3>
            <div className="project-featured__desc">
              <p>{project.description}</p>
            </div>
            <ul className="project-featured__tech">
              {project.tech.map((tech, j) => (
                <li key={j}>{tech}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Other projects grid — flip cards */}
      <div className="projects__grid">
        {otherProjects.map((project, i) => {
          const isFlipped = !!flippedCards[i];
          return (
            <div
              key={i}
              className={`project-flip${isFlipped ? " project-flip--flipped" : ""}`}
              onClick={() => project.image && toggleFlip(i)}
              role={project.image ? "button" : undefined}
              tabIndex={project.image ? 0 : undefined}
              onKeyDown={(e) => {
                if (project.image && (e.key === "Enter" || e.key === " ")) {
                  e.preventDefault();
                  toggleFlip(i);
                }
              }}
              aria-label={
                project.image
                  ? isFlipped
                    ? `Click to see details of ${project.title}`
                    : `Click to see preview of ${project.title}`
                  : undefined
              }
            >
              <div className="project-flip__inner">
                {/* Front face */}
                <div className="project-flip__face project-flip__front">
                  <div className="project-card__top">
                    <svg className="project-card__folder" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" width="40" height="40">
                      <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                    </svg>
                    <div className="project-card__links">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`GitHub repository for ${project.title}`}
                          onClick={(e) => e.stopPropagation()}
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
                            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                          </svg>
                        </a>
                      )}
                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Live demo for ${project.title}`}
                          onClick={(e) => e.stopPropagation()}
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                            <polyline points="15 3 21 3 21 9"></polyline>
                            <line x1="10" y1="14" x2="21" y2="3"></line>
                          </svg>
                        </a>
                      )}
                    </div>
                  </div>
                  <h3 className="project-card__title">{project.title}</h3>
                  <p className="project-card__desc">{project.description}</p>
                  <ul className="project-card__tech">
                    {project.tech.map((tech, j) => (
                      <li key={j}>{tech}</li>
                    ))}
                  </ul>
                  {project.image && (
                    <span className="project-flip__hint">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="14" height="14">
                        <polyline points="23 4 23 10 17 10"></polyline>
                        <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"></path>
                      </svg>
                      Click to preview
                    </span>
                  )}
                </div>

                {/* Back face — image */}
                {project.image && (
                  <div className="project-flip__face project-flip__back">
                    <img
                      src={project.image}
                      alt={`Preview of ${project.title}`}
                      className="project-flip__image"
                      loading="lazy"
                    />
                    <span className="project-flip__back-label">{project.title}</span>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
