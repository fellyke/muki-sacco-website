
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  Menu,
  X,
  Phone,
  Mail,
  ChevronDown,
  ExternalLink,
} from "lucide-react";
import "./navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [loansOpen, setLoansOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
    setLoansOpen(false);
  };

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Our Team", path: "/team" },
    { name: "Savings", path: "/savings" },
    { name: "Membership", path: "/membership" },
    { name: "Digital Banking", path: "/digital-banking" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contact" },
    { name: "Insurance", path: "/insurance" },
    {
      name: "App Self Registration",
      path: "/AppSelfRegistration",
    },
  ];

  return (
    <header className="muki-header">
      <div className="muki-topbar">
        <div className="muki-container muki-topbar-inner">
          <div className="muki-topbar-contact">
            <a href="tel:0711794957">
              <Phone size={14} />
              <span>0711 794 957</span>
            </a>

            <a href="mailto:info@mukisacco.co.ke">
              <Mail size={14} />
              <span>info@mukisacco.co.ke</span>
            </a>
          </div>

          <span className="muki-topbar-message">
            Pamoja Twajenga
          </span>
        </div>
      </div>

      <div className="muki-navbar">
        <div className="muki-container muki-navbar-inner">
          <Link to="/" className="muki-brand" onClick={closeMenu}>
            <img
              src="/logo.png"
              alt="MUKI SACCO Society"
              className="muki-brand-logo"
            />
          </Link>

          <button
            type="button"
            className="muki-menu-toggle"
            aria-label={
              menuOpen
                ? "Close navigation menu"
                : "Open navigation menu"
            }
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={25} /> : <Menu size={25} />}
          </button>

          <nav
            className={`muki-nav-links ${menuOpen ? "is-open" : ""}`}
          >
            {navItems.slice(0, 3).map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === "/"}
                onClick={closeMenu}
                className={({ isActive }) =>
                  `muki-nav-link ${isActive ? "active" : ""}`
                }
              >
                {item.name}
              </NavLink>
            ))}

            <div
              className={`muki-nav-dropdown ${
                loansOpen ? "dropdown-open" : ""
              }`}
            >
              <button
                type="button"
                className="muki-nav-link muki-dropdown-trigger"
                aria-expanded={loansOpen}
                onClick={() => setLoansOpen(!loansOpen)}
              >
                Loans <ChevronDown size={15} />
              </button>

              <div className="muki-dropdown-menu">
                <Link to="/loans" onClick={closeMenu}>
                  All Loan Products
                </Link>
                <Link to="/loans" onClick={closeMenu}>
                  School Fees Loan
                </Link>
                <Link to="/loans" onClick={closeMenu}>
                  Business Loans
                </Link>
                <Link to="/loans" onClick={closeMenu}>
                  Asset Financing
                </Link>
              </div>
            </div>

            {navItems.slice(3).map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={closeMenu}
                className={({ isActive }) =>
                  `muki-nav-link ${isActive ? "active" : ""}`
                }
              >
                {item.name}
              </NavLink>
            ))}

            <a
              className="muki-login-button"
              href="https://mukisacco.co.ke/channels/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Member Login <ExternalLink size={14} />
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
