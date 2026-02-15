import React from "react";
import { useLanguage } from "../../context/LanguageContext";
import "./contact.css";

export function Contact() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="section fade-section contact">
      <h2 className="contact__overline" data-number="04.">
        {t.contact.title}
      </h2>
      <h3 className="contact__heading">{t.contact.title}</h3>
      <p className="contact__description">{t.contact.description}</p>
      <a
        href="mailto:kevincruzl03@gmail.com"
        className="contact__button"
      >
        {t.contact.emailLabel}
      </a>
    </section>
  );
}
