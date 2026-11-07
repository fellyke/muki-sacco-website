
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
  const [digitalOpen, setDigitalOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
    setLoansOpen(false);
    setDigitalOpen(false);
  };

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Our Team", path: "/team" },
    { name: "Savings", path: "/savings" },
    { name: "Membership", path: "/membership" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contact" },
    { name: "Insurance", path: "/insurance" },
    {
      name: "App Self Registration",
      path: "/AppSelfRegistration",
    },
  ];

  const digitalLinks = [
    {
      name: "Mobile Banking",
      path: "/digital-banking#mobile-banking",
    },
    {
      name: "ATM & Cards",
      path: "/digital-banking#atm-cards",
    },
    {
      name: "*850#",
      path: "/digital-banking#ussd-banking",
    },
    {
      name: "Paybill",
      path: "/digital-banking#paybill",
    },
  ];

  return (
    <header className="muki-header">

      {/* TOP BAR */}

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

      {/* MAIN NAVBAR */}

      <div className="muki-navbar">
        <div className="muki-container muki-navbar-inner">

          <Link
            to="/"
            className="muki-brand"
            onClick={closeMenu}
          >
            <img
              src="/logo.png"
              alt="MUKI SACCO Society"
              className="muki-brand-logo"
            />
          </Link>

          {/* MOBILE MENU BUTTON */}

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
            {menuOpen ? (
              <X size={25} />
            ) : (
              <Menu size={25} />
            )}
          </button>

          <nav
            className={`muki-nav-links ${
              menuOpen ? "is-open" : ""
            }`}
          >

            {/* FIRST NAVIGATION ITEMS */}

            {navItems.slice(0, 3).map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === "/"}
                onClick={closeMenu}
                className={({ isActive }) =>
                  `muki-nav-link ${
                    isActive ? "active" : ""
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}

            {/* LOANS DROPDOWN */}

            <div
              className={`muki-nav-dropdown ${
                loansOpen ? "dropdown-open" : ""
              }`}
            >
              <button
                type="button"
                className="muki-nav-link muki-dropdown-trigger"
                aria-expanded={loansOpen}
                onClick={() => {
                  setLoansOpen(!loansOpen);
                  setDigitalOpen(false);
                }}
              >
                Loans
                <ChevronDown size={15} />
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

            {/* DIGITAL BANKING DROPDOWN */}

            <div
              className={`muki-nav-dropdown ${
                digitalOpen ? "dropdown-open" : ""
              }`}
            >
              <button
                type="button"
                className="muki-nav-link muki-dropdown-trigger"
                aria-expanded={digitalOpen}
                onClick={() => {
                  setDigitalOpen(!digitalOpen);
                  setLoansOpen(false);
                }}
              >
                Digital Banking
                <ChevronDown size={15} />
              </button>

              <div className="muki-dropdown-menu">
                {digitalLinks.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    onClick={closeMenu}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* REMAINING NAVIGATION ITEMS */}

            {navItems.slice(3).map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={closeMenu}
                className={({ isActive }) =>
                  `muki-nav-link ${
                    isActive ? "active" : ""
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}

            {/* MEMBER LOGIN */}

            <a
              className="muki-login-button"
              href="https://mukisacco.co.ke/channels/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Member Login
              <ExternalLink size={14} />
            </a>

          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
