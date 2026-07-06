import { useState, useEffect } from "react";
import { HelmetProvider, Helmet } from "react-helmet-async";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Highlights from "./components/Highlights";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("portfolio-theme", "light");
  }, []);

  return (
    <HelmetProvider>
      <Helmet>
        <title>Aman Rajbhar — Data Analyst Portfolio</title>
        <meta
          name="description"
          content="Portfolio of Aman Rajbhar, a Data Analyst and Computer Engineering student specialising in Cloud Technology, Database Management, and Data Analytics."
        />
        <meta
          property="og:title"
          content="Aman Rajbhar — Data Analyst Portfolio"
        />
        <meta
          property="og:description"
          content="Explore my work in exploratory data analysis (EDA), database management, SQL, Python, Tableau, and Power BI."
        />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </Helmet>

      <Navbar />

      <main>
        <Hero />
        <Highlights />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </HelmetProvider>
  );
}

export default App;
