import React, { useState } from "react";
import { useLanguage } from "../../context/LanguageContext";
import "./experience.css";

export function Experience() {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState(0);
  const jobs = t.experience.jobs;

  return (
    <section id="experience" className="section fade-section">
      <h2 className="section__title" data-number="01.">
        {t.experience.title}
      </h2>

      <div className="experience">
        <div className="experience__tabs" role="tablist" aria-label="Job tabs">
          {jobs.map((job, i) => (
            <button
              key={i}
              className={`experience__tab ${activeTab === i ? "experience__tab--active" : ""}`}
              onClick={() => setActiveTab(i)}
              role="tab"
              aria-selected={activeTab === i}
              aria-controls={`panel-${i}`}
              id={`tab-${i}`}
            >
              {job.company}
            </button>
          ))}
        </div>

        <div
          className="experience__panel"
          role="tabpanel"
          id={`panel-${activeTab}`}
          aria-labelledby={`tab-${activeTab}`}
        >
          <h3 className="experience__role">
            {jobs[activeTab].role}{" "}
            <span className="experience__company">
              @ {jobs[activeTab].company}
            </span>
          </h3>
          <p className="experience__period">
            {jobs[activeTab].period} &middot; {jobs[activeTab].location}
          </p>
          <ul className="experience__bullets">
            {jobs[activeTab].bullets.map((bullet, i) => (
              <li key={i}>{bullet}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
