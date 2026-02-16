import React from "react";
import { useLanguage } from "../../context/LanguageContext";
import "./hero.css";

export function Hero() {
  const { t } = useLanguage();

  const renderDescription = (text) => {
    const parts = text.split(/<highlight>(.*?)<\/highlight>/);
    return parts.map((part, i) =>
      i % 2 === 1 ? (
        <span key={i} className="hero__highlight">
          {part}
        </span>
      ) : (
        <React.Fragment key={i}>{part}</React.Fragment>
      )
    );
  };

  return (
    <section id="about" className="hero fade-section">
      <p className="hero__greeting">{t.hero.greeting} {t.hero.name}</p>
      <h3 className="hero__headline">{t.hero.headline}</h3>
      <p className="hero__description">{renderDescription(t.hero.description)}</p>
    </section>
  );
}
