import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";
import "./Projects.css";

const tocItems = [
  { id: 1, label: "Uber Demand Analysis", category: "Case Studies" },
  { id: 2, label: "COVID-19 Tracker", category: "Case Studies" },
  { id: 3, label: "E-Commerce Sales EDA", category: "Case Studies" },
  { id: 4, label: "Interactive Sales Dashboard", category: "Case Studies" },
];

export default function Projects() {
  const [activeId, setActiveId] = useState(1);
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.02 });

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -60% 0px",
      threshold: 0.1,
    };

    const handleIntersect = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = parseInt(entry.target.id.replace("section-", ""), 10);
          if (!isNaN(id)) {
            setActiveId(id);
          }
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    projects.forEach((proj) => {
      const el = document.getElementById(`section-${proj.id}`);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleTocClick = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(`section-${id}`);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <section id="work" className="czar-work section" ref={ref}>
      <div className="container czar-work__layout">
        
        {/* Left Sidebar Table of Contents */}
        <aside className="czar-work__sidebar">
          <div className="czar-work__sidebar-inner">
            <h4 className="czar-work__sidebar-header">Case Studies</h4>
            <ul className="czar-work__toc-list">
              {tocItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#section-${item.id}`}
                    className={`czar-work__toc-link ${activeId === item.id ? "active" : ""}`}
                    onClick={(e) => handleTocClick(e, item.id)}
                  >
                    {activeId === item.id && (
                      <motion.span
                        className="czar-work__toc-dot"
                        layoutId="sidebar-dot"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                    <span className="czar-work__toc-text">{item.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        {/* Right Scrollable Case Study Cards List */}
        <div className="czar-work__content">
          {projects.slice(0, 4).map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

      </div>
    </section>
  );
}
