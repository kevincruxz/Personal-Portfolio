import React, { useState, useEffect } from "react";
import { useLanguage } from "../../context/LanguageContext";
import "./sidebar.css";

const navItems = ["about", "experience", "projects", "skills", "contact"];

export function Sidebar() {
  const { lang, toggleLang, t } = useLanguage();
  const [activeSection, setActiveSection] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -40% 0px", threshold: 0 }
    );

    navItems.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleNavClick = (id) => {
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <aside className="sidebar" role="banner">
      <div className="sidebar__top">
        <h1 className="sidebar__name">Kevin Cruz</h1>
        <h2 className="sidebar__title">Fullstack Software Engineer</h2>
        <p className="sidebar__tagline">
          {lang === "en"
            ? "I build robust web apps and scalable systems."
            : "Construyo apps web robustas y sistemas escalables."}
        </p>

        <nav className="sidebar__nav" role="navigation" aria-label="Main navigation">
          <button
            className="sidebar__mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            <span className={`hamburger ${mobileMenuOpen ? "open" : ""}`}>
              <span></span>
              <span></span>
              <span></span>
            </span>
          </button>
          <ul className={`sidebar__nav-list ${mobileMenuOpen ? "sidebar__nav-list--open" : ""}`}>
            {navItems.map((item) => (
              <li key={item}>
                <button
                  className={`sidebar__nav-link ${activeSection === item ? "sidebar__nav-link--active" : ""}`}
                  onClick={() => handleNavClick(item)}
                >
                  <span className="sidebar__nav-indicator"></span>
                  <span className="sidebar__nav-text">{t.nav[item]}</span>
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="sidebar__bottom">
        <div className="sidebar__socials">
          <a
            href="https://github.com/kevincruxz"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/kevincruxz/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
              <rect x="2" y="9" width="4" height="12"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
          </a>
          <a
            href="mailto:kevin_cruzz@outlook.es"
            aria-label="Email"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
          </a>
        </div>

        <button
          className="sidebar__lang-toggle"
          onClick={toggleLang}
          aria-label={`Switch to ${lang === "en" ? "Spanish" : "English"}`}
        >
          {lang === "en" ? "ES" : "EN"}
        </button>
      </div>
    </aside>
  );
}
