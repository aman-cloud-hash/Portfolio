import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Navbar.css";

const navLinks = [
  { label: "Highlights", href: "#highlights" },
  { label: "Work", href: "#work" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/aman-rajbhar-19a835310/", external: true },
  { label: "Get in touch", href: "#contact" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120;
      
      const highlightsEl = document.querySelector("#highlights");
      const workEl = document.querySelector("#work");
      const contactEl = document.querySelector("#contact");

      if (contactEl && scrollPosition >= contactEl.offsetTop) {
        setActiveSection("#contact");
      } else if (workEl && scrollPosition >= workEl.offsetTop) {
        setActiveSection("#work");
      } else if (highlightsEl && scrollPosition >= highlightsEl.offsetTop) {
        setActiveSection("#highlights");
      } else {
        setActiveSection("");
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e, href, external) => {
    if (external) return;
    e.preventDefault();
    setIsMobileMenuOpen(false); // Close mobile menu if clicked
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.header 
      className="czar-header"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="czar-nav-container">
        <div className="czar-nav-pill">
          {/* Logo */}
          <a 
            href="#home" 
            className={`czar-nav-link logo-link ${activeSection === "" ? "active" : ""}`}
            onClick={(e) => handleNavClick(e, "#home", false)}
          >
            Aman
          </a>

          {/* Desktop Navigation Links */}
          <ul className="czar-nav-links desktop-only">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`czar-nav-link ${activeSection === link.href ? "active" : ""}`}
                  onClick={(e) => handleNavClick(e, link.href, link.external)}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener noreferrer" : undefined}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Hamburger button (Mobile only) */}
          <button 
            className="czar-hamburger"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
          >
            <div className={`czar-hamburger-bar ${isMobileMenuOpen ? "open" : ""}`} />
            <div className={`czar-hamburger-bar ${isMobileMenuOpen ? "open" : ""}`} />
            <div className={`czar-hamburger-bar ${isMobileMenuOpen ? "open" : ""}`} />
          </button>
        </div>

        {/* Mobile Dropdown Menu Drawer */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div 
              className="czar-mobile-dropdown"
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              <ul className="czar-mobile-nav-links">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className={`czar-mobile-nav-link ${activeSection === link.href ? "active" : ""}`}
                      onClick={(e) => handleNavClick(e, link.href, link.external)}
                      target={link.external ? "_blank" : undefined}
                      rel={link.external ? "noopener noreferrer" : undefined}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
