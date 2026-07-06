import { motion } from "framer-motion";
import "./Hero.css";

export default function Hero() {
  const handleScrollToWork = (e) => {
    e.preventDefault();
    document.querySelector("#highlights")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="czar-hero">
      <div className="czar-hero__content container">
        {/* Typographic intro statement */}
        <motion.div
          className="czar-hero__text-wrapper"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1 className="czar-hero__headline">
            <span style={{ display: "block" }}>Aman Rajbhar is</span>
            Data Analyst &amp; Computer Engineering Student
          </h1>
          <p className="czar-hero__subheadline">
            B.Tech 2023–2027. Specialising in Cloud Tech, Database Management &amp; Data Analytics.
          </p>
        </motion.div>

        {/* B&W Portrait Cutout */}
        <motion.div
          className="czar-hero__portrait-container"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <img
            src="/images/avatar.png"
            alt="Aman Rajbhar Portrait"
            className="czar-hero__portrait"
          />
        </motion.div>
      </div>

      {/* Floating indicators / bottom blur */}
      <div className="czar-hero__bottom-gradient" />
    </section>
  );
}
