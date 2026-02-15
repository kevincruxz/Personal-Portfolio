import React from "react";
import { useLanguage } from "../../context/LanguageContext";
import "./skills.css";

export function Skills() {
  const { t } = useLanguage();

  return (
    <section id="skills" className="section fade-section">
      <h2 className="section__title" data-number="03.">
        {t.skills.title}
      </h2>

      <div className="skills__grid">
        {t.skills.categories.map((category, i) => (
          <div key={i} className="skills__category">
            <h3 className="skills__category-name">{category.name}</h3>
            <div className="skills__tags">
              {category.items.map((item, j) => (
                <span key={j} className="skills__tag">
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
