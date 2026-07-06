import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./Highlights.css";

const subHighlights = [
  {
    icon: "🐍",
    title: "Python & SQL/MySQL",
    description: "Proficient in writing SQL queries, database management, and developing data pipelines using Python, Pandas, and NumPy.",
    link: "View projects ↗",
    url: "https://github.com/aman-cloudhash/project"
  },
  {
    icon: "📊",
    title: "Tableau & Power BI",
    description: "Highly skilled in converting raw tabular data into executive-ready dashboards, interactive charts, and business intelligence models.",
    link: "View projects ↗",
    url: "https://github.com/aman-cloudhash/project"
  },
  {
    icon: "🚗",
    title: "Uber Demand Analysis",
    description: "Analysed 50,000+ records to identify ride demand patterns, peak booking hours, and city-wise fare and revenue trends.",
    link: "View source ↗",
    url: "https://github.com/aman-cloudhash/project"
  },
  {
    icon: "🦠",
    title: "COVID-19 Tracker & Analysis",
    description: "Performed time-series modeling and calculated 7-day moving averages to track spread trends across India, US, and Brazil.",
    link: "View source ↗",
    url: "https://github.com/aman-cloudhash/project"
  },
  {
    icon: "🛒",
    title: "E-Commerce Sales EDA",
    description: "Conducted retail data cleaning and sales trend analysis to identify high-value customer segments and top-selling product categories.",
    link: "View source ↗",
    url: "https://github.com/aman-cloudhash/project"
  },
  {
    icon: "⚙️",
    title: "Core Competencies",
    description: "Expertise in database management, exploratory data analysis (EDA), data cleaning, statistical modeling, and analytical problem-solving.",
    link: "View source ↗",
    url: "https://github.com/aman-cloudhash/project"
  }
];

export default function Highlights() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="highlights" className="czar-highlights section" ref={ref}>
      <div className="container czar-highlights__grid">
        {/* Left Column: Big Highlight */}
        <motion.div
          className="czar-highlights__main"
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="czar-highlights__main-title">
            Data-Driven Decision Making
          </h2>
          <p className="czar-highlights__main-desc">
            Motivated Computer Engineering student specialising in Cloud Technology, Information Security, and Data Science. Passionate about uncovering insights from complex datasets.
          </p>
          <a
            href="https://github.com/aman-cloudhash/project"
            target="_blank"
            rel="noopener noreferrer"
            className="czar-highlights__link"
          >
            Explore My GitHub ↗
          </a>
        </motion.div>

        {/* Right Column: Grid of sub highlights */}
        <div className="czar-highlights__list">
          {subHighlights.map((item, index) => (
            <motion.div
              key={index}
              className="czar-highlight-item"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="czar-highlight-item__icon">{item.icon}</div>
              <h3 className="czar-highlight-item__title">{item.title}</h3>
              <p className="czar-highlight-item__desc">{item.description}</p>
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="czar-highlight-item__link"
              >
                {item.link}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
