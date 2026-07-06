import { socialLinks } from "../data/projects";
import "./Footer.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="czar-footer">
      <div className="container czar-footer__inner">
        <div className="czar-footer__left">
          <span className="czar-footer__logo">Aman</span>
          <p className="czar-footer__copy">&copy; {currentYear} Aman Rajbhar. All rights reserved.</p>
        </div>

        <div className="czar-footer__right">
          <ul className="czar-footer__social-links">
            <li>
              <a href={socialLinks.github} target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </li>
            <li>
              <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </li>
            <li>
              <a href={`mailto:${socialLinks.email}`}>
                Email
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
