import { useMemo, useState } from "react";
import { AboutPage } from "./pages/AboutPage";
import { ContactPage } from "./pages/ContactPage";
import { HomePage } from "./pages/HomePage";
import { ServicesPage } from "./pages/ServicesPage";
import { ThanksPage } from "./pages/ThanksPage";
import type { Page } from "./types";

const pageTitles: Record<Page, string> = {
  home: "Ontario One2One Tutoring",
  about: "About Nicholas Kim",
  services: "Tutoring Services",
  contact: "Book a Free Consultation",
  thanks: "Thank You",
};

const navItems: Array<{ page: Page; label: string }> = [
  { page: "home", label: "Home" },
  { page: "about", label: "About" },
  { page: "services", label: "Services" },
];

export default function App() {
  const [page, setPage] = useState<Page>("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const year = useMemo(() => new Date().getFullYear(), []);

  const navigate = (nextPage: Page) => {
    setPage(nextPage);
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
    document.title = pageTitles[nextPage];
  };

  return (
    <div className="app">
      <header className="site-header">
        <div className="container nav-shell">
          <button className="brand" onClick={() => navigate("home")} type="button">
            <img src="/images/logo.png" alt="" />
            <span>
              <strong>Ontario One2One</strong>
              <small>Tutoring</small>
            </span>
          </button>

          <nav className="desktop-nav" aria-label="Primary navigation">
            {navItems.map((item) => (
              <button
                key={item.page}
                className={page === item.page ? "active" : ""}
                onClick={() => navigate(item.page)}
                type="button"
              >
                {item.label}
              </button>
            ))}
            <button className="nav-cta" onClick={() => navigate("contact")} type="button">
              Book Free Consultation
            </button>
          </nav>

          <button
            className="menu-button"
            type="button"
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>

        {menuOpen && (
          <nav className="mobile-nav container" aria-label="Mobile navigation">
            {[...navItems, { page: "contact" as const, label: "Book Free Consultation" }].map(
              (item) => (
                <button key={item.page} onClick={() => navigate(item.page)} type="button">
                  {item.label}
                </button>
              ),
            )}
          </nav>
        )}
      </header>

      <main>
        {page === "home" && <HomePage navigate={navigate} />}
        {page === "about" && <AboutPage />}
        {page === "services" && <ServicesPage navigate={navigate} />}
        {page === "contact" && <ContactPage navigate={navigate} />}
        {page === "thanks" && <ThanksPage navigate={navigate} />}
      </main>

      <footer className="site-footer">
        <div className="container footer-grid">
          <div>
            <div className="footer-brand">
              <img src="/images/logo.png" alt="" />
              <span>Ontario One2One Tutoring</span>
            </div>
            <p>One-on-one math tutoring for Grades 6-12 across Ontario.</p>
          </div>
          <div>
            <h2>Pages</h2>
            <button onClick={() => navigate("home")} type="button">Home</button>
            <button onClick={() => navigate("about")} type="button">About</button>
            <button onClick={() => navigate("services")} type="button">Services</button>
            <button onClick={() => navigate("contact")} type="button">Contact</button>
          </div>
          <div>
            <h2>Contact</h2>
            <a href="mailto:nicholaskim.tutoring@gmail.com">nicholaskim.tutoring@gmail.com</a>
            <a href="tel:+16476124140">+1 (647) 612-4140</a>
            <p>Etobicoke. Online across Ontario.</p>
            <p className="copyright">Copyright {year} Ontario One2One Tutoring</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
