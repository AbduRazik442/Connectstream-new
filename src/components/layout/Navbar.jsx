import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
    ArrowUpRight,
    ChevronDown,
    Menu,
    X,
} from "lucide-react";
import "./Navbar.css";

const productLinks = [
    { label: "Team Inbox", href: "#features" },
    { label: "Personal Assistant", href: "#features" },
    { label: "Broadcast", href: "#features" },
    { label: "Templates", href: "#features" },
    { label: "Flows", href: "#features" },
    { label: "AI Intelligence", href: "#features" },
    { label: "Products & Payments", href: "#features" },
    { label: "Analytics & Team", href: "#features" },
];

const navLinks = [
    { label: "Platform", href: "#platform" },
    { label: "Solutions", href: "#industries" },
    { label: "About", href: "#about" },
];

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [productsOpen, setProductsOpen] = useState(false);

    const closeMenus = () => {
        setMenuOpen(false);
        setProductsOpen(false);
    };

    return (
        <header className="cs-navbar-wrapper">
            <nav className="cs-navbar">
                {/* BRAND */}
                <a
                    href="#home"
                    className="cs-navbar-brand"
                    onClick={closeMenus}
                    aria-label="ConnectStream home"
                >
                    <svg
                        width="182"
                        height="52"
                        viewBox="0 0 182 52"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        role="img"
                        aria-label="ConnectStream"
                    >
                        {/* Green logo shape */}
                        <path
                            d="M5 5H49V26L0 43L5 5Z"
                            fill="#20D66B"
                        />

                        {/* Dark teal lower shape */}
                        <path
                            d="M29 35L49 26V52L29 35Z"
                            fill="#087D70"
                        />

                        {/* Connect text */}
                        <text
                            x="62"
                            y="24"
                            fill="var(--cs-green)"
                            fontSize="25"
                            fontWeight="800"
                            fontFamily="Arial, sans-serif"
                            letterSpacing="-1"
                        >
                            Connect
                        </text>

                        {/* Stream text */}
                        <text
                            x="62"
                            y="49"
                            fill="var(--cs-teal)"
                            fontSize="25"
                            fontWeight="800"
                            fontFamily="Arial, sans-serif"
                            letterSpacing="-1"
                        >
                            Stream
                        </text>
                    </svg>
                </a>

                {/* DESKTOP NAVIGATION */}
                <div className="cs-navbar-links">
                    <div className="cs-nav-dropdown">
                        <button
                            className={`cs-nav-link cs-nav-dropdown-trigger ${productsOpen ? "active" : ""
                                }`}
                            onClick={() => setProductsOpen(!productsOpen)}
                            aria-expanded={productsOpen}
                        >
                            Products
                            <ChevronDown
                                size={15}
                                className={productsOpen ? "rotate" : ""}
                            />
                        </button>

                        <AnimatePresence>
                            {productsOpen && (
                                <motion.div
                                    className="cs-products-dropdown"
                                    initial={{ opacity: 0, y: 12 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 8 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <div className="cs-dropdown-heading">
                                        <span>EXPLORE THE PLATFORM</span>
                                        <p>Everything to manage customer conversations.</p>
                                    </div>

                                    <div className="cs-dropdown-grid">
                                        {productLinks.map((item) => (
                                            <a
                                                key={item.label}
                                                href={item.href}
                                                className="cs-dropdown-item"
                                                onClick={closeMenus}
                                            >
                                                <span>{item.label}</span>
                                                <ArrowUpRight size={14} />
                                            </a>
                                        ))}
                                    </div>

                                    <a
                                        href="#platform"
                                        className="cs-dropdown-bottom"
                                        onClick={closeMenus}
                                    >
                                        Discover the complete platform
                                        <ArrowUpRight size={15} />
                                    </a>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    {navLinks.map((item) => (
                        <a
                            key={item.label}
                            href={item.href}
                            className="cs-nav-link"
                        >
                            {item.label}
                        </a>
                    ))}
                </div>

                {/* DESKTOP CTA */}
                <a href="#contact" className="cs-navbar-cta">
                    Let's talk
                    <ArrowUpRight size={16} />
                </a>

                {/* MOBILE MENU BUTTON */}
                <button
                    className="cs-mobile-toggle"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label={menuOpen ? "Close menu" : "Open menu"}
                    aria-expanded={menuOpen}
                >
                    {menuOpen ? <X size={23} /> : <Menu size={23} />}
                </button>
            </nav>

            {/* MOBILE MENU */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        className="cs-mobile-menu"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25 }}
                    >
                        <a href="#platform" onClick={closeMenus}>Platform</a>

                        <button
                            className="cs-mobile-products-trigger"
                            onClick={() => setProductsOpen(!productsOpen)}
                            aria-expanded={productsOpen}
                        >
                            Products
                            <ChevronDown
                                size={17}
                                className={productsOpen ? "rotate" : ""}
                            />
                        </button>

                        <AnimatePresence>
                            {productsOpen && (
                                <motion.div
                                    className="cs-mobile-product-list"
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: "auto" }}
                                    exit={{ opacity: 0, height: 0 }}
                                >
                                    {productLinks.map((item) => (
                                        <a
                                            key={item.label}
                                            href={item.href}
                                            onClick={closeMenus}
                                        >
                                            {item.label}
                                        </a>
                                    ))}
                                </motion.div>
                            )}
                        </AnimatePresence>

                        <a href="#industries" onClick={closeMenus}>Solutions</a>
                        <a href="#about" onClick={closeMenus}>About</a>

                        <a
                            href="#contact"
                            className="cs-mobile-cta"
                            onClick={closeMenus}
                        >
                            Let's talk <ArrowUpRight size={17} />
                        </a>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}

export default Navbar;