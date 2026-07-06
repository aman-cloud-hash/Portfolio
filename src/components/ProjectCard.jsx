import { motion } from "framer-motion";
import "./ProjectCard.css";

export default function ProjectCard({ project }) {
  // Determine card style based on project config
  const getCardStyle = (id) => {
    switch (id) {
      case 1:
        return {
          backgroundColor: "var(--bg-secondary)",
          color: "var(--text-primary)",
          theme: "light-gray"
        };
      case 2:
        return {
          backgroundColor: "#0F3EE6",
          color: "#FFFFFF",
          theme: "deep-blue"
        };
      case 3:
        return {
          backgroundColor: "#E2D9C5",
          color: "#2C200B",
          theme: "warm-beige"
        };
      case 4:
        return {
          backgroundColor: "#161616",
          color: "#FFFFFF",
          theme: "dark-charcoal"
        };
      default:
        return {
          backgroundColor: "var(--bg-secondary)",
          color: "var(--text-primary)",
          theme: "default"
        };
    }
  };

  const cardStyle = getCardStyle(project.id);

  // Custom metrics based on project
  const getMetrics = (id) => {
    switch (id) {
      case 1:
        return [
          { text: "N26 API", bold: true },
          { text: "★★★★★ 4.5" },
          { text: "+8M Customers" }
        ];
      case 2:
        return [
          { text: "BERT NLP", bold: true },
          { text: "94.3% Accuracy" },
          { text: "Real-time" }
        ];
      case 3:
        return [
          { text: "ResNet-50", bold: true },
          { text: "97.2% Precision" },
          { text: "AWS Cloud" }
        ];
      case 4:
        return [
          { text: "XGBoost", bold: true },
          { text: "91.0% Recall" },
          { text: "SHAP Explainable" }
        ];
      default:
        return [];
    }
  };

  const metrics = getMetrics(project.id);

  // Custom Mockup Images path
  const getMockupImage = (id) => {
    switch (id) {
      case 1:
        return "/images/n26.png";
      case 2:
        return "/images/heatmap.png";
      case 3:
        return "/images/bookify.png";
      case 4:
        return "/images/churn.png";
      default:
        return "";
    }
  };

  return (
    <article
      id={`section-${project.id}`}
      className={`czar-project-card ${cardStyle.theme}`}
      style={{
        backgroundColor: cardStyle.backgroundColor,
        color: cardStyle.color,
      }}
    >
      <div className="czar-project-card__header">
        <span className="czar-project-card__category">{project.category.toUpperCase()}</span>
        <h3 className="czar-project-card__title">{project.title}</h3>
        <p className="czar-project-card__desc">{project.description}</p>
      </div>

      {/* Product visual mockup */}
      <div className="czar-project-card__visual">
        <img
          src={getMockupImage(project.id)}
          alt={`${project.title} Interface Mockup`}
          className="czar-project-card__mockup"
        />
      </div>

      {/* Info bottom row */}
      <div className="czar-project-card__footer">
        <div className="czar-project-card__metrics">
          {metrics.map((metric, index) => (
            <div key={index} className="czar-project-card__metric-pill">
              <span className={metric.bold ? "font-bold" : ""}>{metric.text}</span>
            </div>
          ))}
        </div>

        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="czar-project-card__cta"
        >
          <span>Case Study →</span>
        </a>
      </div>
    </article>
  );
}
