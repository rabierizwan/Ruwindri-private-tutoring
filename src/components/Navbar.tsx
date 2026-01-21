import { useEffect, useMemo, useState } from "react";

export default function Navbar() {
    const [isHover, setIsHover] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeId, setActiveId] = useState("home");

    const navItems = useMemo(
        () => [
            { label: "About", href: "/#about", id: "about" },
            { label: "Services", href: "/#services", id: "services" },
            { label: "Study Materials", href: "/study-materials", id: "study-materials" },
            { label: "Contact", href: "/#contact", id: "contact" },
        ],
        []
    );

    useEffect(() => {
        const sectionIds = ["about", "services", "contact"];
        const handleScroll = () => {
            const offset = 140;
            let current = "home";
            for (const id of sectionIds) {
                const el = document.getElementById(id);
                if (el) {
                    const top = el.getBoundingClientRect().top + window.scrollY;
                    if (window.scrollY + offset >= top) {
                        current = id;
                    }
                }
            }
            setActiveId(current);
        };

        handleScroll();
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        if (window.location.pathname === "/study-materials") {
            setActiveId("study-materials");
        }
    }, []);

    return (
        <nav className="navbar">
            <div className="container navbar-content"> 
                <a
                    className="navbar-brand"
                    href="/"
                    aria-label="Ruwindri Private Tutoring home"
                    onMouseEnter={() => setIsHover(true)}
                    onMouseLeave={() => setIsHover(false)}
                    onFocus={() => setIsHover(true)}
                    onBlur={() => setIsHover(false)}
                >
                    <img
                        src={isHover ? "/tutor-website-logo-1.jpeg" : "/tutor-website-logo-2.jpeg"}
                        alt={
                            isHover
                                ? "Ruwindri Private Tutoring logo"
                                : "Ruwindri Private Tutoring logo on navy"
                        }
                    />
                </a>
                <button
                    className="navbar-toggle"
                    type="button"
                    aria-expanded={menuOpen}
                    aria-controls="primary-navigation"
                    onClick={() => setMenuOpen((prev) => !prev)}
                >
                    Menu
                </button>
                <div
                    id="primary-navigation"
                    className={`navbar-links ${menuOpen ? "is-open" : ""}`}
                >
                    {navItems.map((item) => (
                        <a
                            key={item.id}
                            href={item.href}
                            className={activeId === item.id ? "is-active" : ""}
                            onClick={() => setMenuOpen(false)}
                        >
                            {item.label}
                        </a>
                    ))}
                </div>
            </div>
        </nav>
    );
}
