import { useState, useEffect, useRef, useCallback } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Phone, Menu, X } from "lucide-react";
import { navigation } from "../../data/navigation";
import logo from "../../assets/logo/logo.png";
import CallModal from "../CallModal/CallModal";
import "./Navbar.css";

const SCROLL_THRESHOLD = 70;

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [callOpen, setCallOpen] = useState(false);

  const navRef = useRef(null);
  const location = useLocation();

  const darkNavbar =
    location.pathname === "/products" ||
    location.pathname === "/catalogue" ||
    location.pathname === "/about";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > SCROLL_THRESHOLD);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        isMobileMenuOpen &&
        navRef.current &&
        !navRef.current.contains(event.target)
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen((prev) => !prev);
  }, []);

  const handleLinkClick = useCallback(() => {
    setIsMobileMenuOpen(false);
  }, []);

  return (
    <header
      ref={navRef}
      className={`navbar
      ${isScrolled ? "navbar--scrolled" : ""}
      ${darkNavbar ? "navbar--dark" : ""}
      ${isMobileMenuOpen ? "navbar--menu-open" : ""}
    `}
    >
      <div className="navbar__container">

        {/* Logo */}

        <NavLink
          to="/"
          className="navbar__brand"
          onClick={handleLinkClick}
        >
          <div className="navbar__logo">
            <img
              src={logo}
              alt="Himanshu International Logo"
            />
          </div>

          <h1 className="navbar__brand-name">
            Himanshu International Plywood
          </h1>
        </NavLink>

        {/* Desktop Navigation */}

        <nav
          className="navbar__nav navbar__nav--desktop"
          aria-label="Primary Navigation"
        >
          <ul className="navbar__links">
            {navigation.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    isActive
                      ? "navbar__link navbar__link--active"
                      : "navbar__link"
                  }
                  onClick={handleLinkClick}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* Right Side */}

        <div className="navbar__actions">

          <button
            className="navbar__cta"
            onClick={() => setCallOpen(true)}
          >
            <Phone
              size={18}
              className="navbar__cta-icon"
            />
            <span>Call Now</span>
          </button>

          <button
            className="navbar__hamburger"
            onClick={toggleMobileMenu}
            aria-label="Toggle Navigation"
          >
            {isMobileMenuOpen ? (
              <X size={28} />
            ) : (
              <Menu size={28} />
            )}
          </button>

        </div>
      </div>

      {/* Mobile Menu */}

      <nav
        className={`navbar__nav navbar__nav--mobile ${
          isMobileMenuOpen
            ? "navbar__nav--mobile-open"
            : ""
        }`}
      >
        <ul className="navbar__links navbar__links--mobile">
          {navigation.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  isActive
                    ? "navbar__link navbar__link--mobile navbar__link--active"
                    : "navbar__link navbar__link--mobile"
                }
                onClick={handleLinkClick}
              >
                {item.label}
              </NavLink>
            </li>
          ))}

          <li>
            <button
              className="navbar__cta navbar__cta--mobile"
              onClick={() => {
                handleLinkClick();
                setCallOpen(true);
              }}
            >
              <Phone size={18} />
              <span>Call Now</span>
            </button>
          </li>
        </ul>
      </nav>

      {/* CALL MODAL */}

      <CallModal
        open={callOpen}
        onClose={() => setCallOpen(false)}
      />

    </header>
  );
};

export default Navbar;