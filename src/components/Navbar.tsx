import { useState } from "react";

export default function Navbar() {
    const [isHover, setIsHover] = useState(false);

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
                <div>
                    <a href="/#about"> About </a>
                    <a href="/#services"> Services </a>
                    <a href="/study-materials"> Study Materials </a>
                    <a href="/#contact"> Contact </a>
                </div>
            </div>
        </nav>
    );
}
