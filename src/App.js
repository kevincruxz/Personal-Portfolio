import React, { useEffect } from "react";
import "./App.css";
import { LanguageProvider } from "./context/LanguageContext";
import { Sidebar } from "./Components/Sidebar";
import { Hero } from "./Components/Hero";
import { Experience } from "./Components/Experience";
import { Projects } from "./Components/Projects";
import { Skills } from "./Components/Skills";
import { Contact } from "./Components/Contact";
import { Footer } from "./Components/Footer";

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );

    const elements = document.querySelectorAll(".fade-section");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <LanguageProvider>
      <div className="App">
        <div className="layout">
          <div className="layout__sidebar">
            <Sidebar />
          </div>
          <main className="layout__content">
            <Hero />
            <Experience />
            <Projects />
            <Skills />
            <Contact />
            <Footer />
          </main>
        </div>
      </div>
    </LanguageProvider>
  );
}

export default App;
