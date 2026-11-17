import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  Menu,
  X,
} from "lucide-react";
import "./ConnectStreamNavbar.css";

const navItems = [
  { label: "Platform", href: "/#platform" },
  { label: "Solutions", href: "/#industries" },
  { label: "About", href: "/#about" },
];

function ConnectStreamNavbar({ logo }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="cs-navbar-wrapper">
      <motion.nav
        className="cs-navbar"
        initial={{ opacity: 0, y: -25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <Link
          to="/"
          className="cs-navbar-brand"
          aria-label="ConnectStream home"
          onClick={() => setMenuOpen(false)}
        >
          {logo || (
            <span className="cs-navbar-wordmark">
              Connect<span>Stream</span>
            </span>
          )}
        </Link>

        <div className="cs-navbar-links">
          {navItems.map((item) => (
            <a key={item.label} href={item.href}>
              {item.label}
            </a>
          ))}
        </div>

        <div className="cs-navbar-actions">
          <a
            href="/#contact"
            className="cs-nav-cta"
          >
            Let's talk
            <ArrowUpRight size={16} />
          </a>
        </div>

        <button
          className="cs-mobile-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </motion.nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="cs-mobile-menu"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
          >
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
                <ArrowUpRight size={17} />
              </a>
            ))}

            <a
              href="/#contact"
              className="cs-mobile-cta"
              onClick={() => setMenuOpen(false)}
            >
              Book a demo
              <ArrowUpRight size={17} />
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default ConnectStreamNavbar;