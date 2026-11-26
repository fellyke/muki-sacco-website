
import { useState, useEffect, useRef, useCallback } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faFacebookF,
  faInstagram,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";

import {
  Menu,
  X,
  Phone,
  Mail,
  ChevronDown,
  ExternalLink,
  Smartphone,
  CreditCard,
  Wallet,
  Globe,
  ArrowLeftRight,
  Building2,
  GraduationCap,
  BriefcaseBusiness,
  CarFront,
  FileText,
  Users,
  UserPlus,
  Eye,
} from "lucide-react";

import "./navbar.css";

const Navbar = () => {
  const location = useLocation();

  // NAVBAR STATES
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const navbarRef = useRef(null);

  const isTeamPage = location.pathname === "/team";

  // CLOSE ALL MENUS
  const closeMenu = useCallback(() => {
    setMenuOpen(false);
    setActiveDropdown(null);
  }, []);

  // TOGGLE DROPDOWNS
  const toggleDropdown = (name) => {
    setActiveDropdown((current) =>
      current === name ? null : name
    );
  };

  // CLOSE DROPDOWNS WHEN CLICKING OUTSIDE OR PRESSING ESCAPE
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        navbarRef.current &&
        !navbarRef.current.contains(event.target)
      ) {
        closeMenu();
      }
    };

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        closeMenu();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [closeMenu]);

  // MAIN NAVIGATION
  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Our Team", path: "/team" },
    { name: "Savings", path: "/savings" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contact" },
    { name: "Insurance", path: "/insurance" },
    {
      name: "App Self Registration",
      path: "/AppSelfRegistration",
    },
  ];

  // TEAM DROPDOWN LINKS
  const teamLinks = [
    {
      name: "Management",
      description: "Meet the MUKI SACCO management team.",
      path: "/team#management",
      icon: BriefcaseBusiness,
    },
    {
      name: "Board of Directors",
      description: "Meet the elected Board of Directors.",
      path: "/team#directors",
      icon: Building2,
    },
    {
      name: "Supervisory Committee",
      description: "Meet the SACCO supervisory committee.",
      path: "/team#supervisory",
      icon: Eye,
    },
  ];

  // LOANS DROPDOWN LINKS
  const loanLinks = [
    {
      name: "All Loan Products",
      description: "Explore MUKI SACCO loan solutions.",
      icon: Wallet,
      path: "/loans",
    },
    {
      name: "School Fees Loan",
      description: "Financial support for education needs.",
      icon: GraduationCap,
      path: "/loans",
    },
    {
      name: "Business Loans",
      description: "Explore financing for business activities.",
      icon: BriefcaseBusiness,
      path: "/loans",
    },
    {
      name: "Asset Financing",
      description: "Explore financing for asset acquisition.",
      icon: CarFront,
      path: "/loans",
    },
  ];

  // MEMBERSHIP DROPDOWN LINKS
  const membershipLinks = [
    {
      name: "Membership Information",
      description: "Learn about joining MUKI SACCO.",
      icon: Users,
      path: "/membership",
    },
    {
      name: "Membership Application Form",
      description: "Download the membership application form.",
      icon: FileText,
      path: "/forms/muki-membership-form.pdf",
      download: true,
    },
    {
      name: "App Self Registration",
      description: "Learn how to register using the MUKI mobile app.",
      icon: UserPlus,
      path: "/AppSelfRegistration",
    },
  ];

  // DIGITAL BANKING DROPDOWN LINKS
  const digitalLinks = [
    {
      name: "Mobile Banking",
      description: "Access your MUKI account using your mobile phone.",
      icon: Smartphone,
      path: "/digital-banking#mobile-banking",
    },
    {
      name: "ATM & Cards",
      description: "Access your money through supported ATM services.",
      icon: CreditCard,
      path: "/digital-banking#atm-cards",
    },
    {
      name: "*850# USSD Banking",
      description: "Access banking services using a simple USSD code.",
      icon: Phone,
      path: "/digital-banking#ussd-banking",
    },
    {
      name: "Paybill",
      description: "Make payments to MUKI SACCO using Paybill 469988.",
      icon: Wallet,
      path: "/digital-banking#paybill",
    },
    {
      name: "Internet Banking",
      description: "Manage your account through online banking.",
      icon: Globe,
      path: "/digital-banking#internet-banking",
    },
    {
      name: "Fund Transfer (RTGS)",
      description: "Learn about electronic fund transfers.",
      icon: ArrowLeftRight,
      path: "/digital-banking#rtgs-fund-transfer",
    },
    {
      name: "Agency Banking",
      description: "Explore services available through authorised agents.",
      icon: Building2,
      path: "/digital-banking#agency-banking",
    },
  ];

  // REUSABLE DROPDOWN ITEMS
  const renderDropdownItems = (items) =>
    items.map((item) => {
      const Icon = item.icon;

      const content = (
        <>
          <span className="dropdown-icon">
            <Icon size={19} strokeWidth={1.9} />
          </span>

          <span className="dropdown-item-content">
            <span className="dropdown-item-name">
              {item.name}
            </span>

            <small className="dropdown-description">
              {item.description}
            </small>
          </span>
        </>
      );

      if (item.download) {
        return (
          <a
            key={item.name}
            href={item.path}
            download="MUKI-SACCO-Membership-Form.pdf"
            onClick={closeMenu}
            className="muki-dropdown-item"
          >
            {content}
          </a>
        );
      }

      return (
        <NavLink
          key={item.name}
          to={item.path}
          onClick={closeMenu}
          className={({ isActive }) =>
            `muki-dropdown-item ${isActive ? "active" : ""}`
          }
        >
          {content}
        </NavLink>
      );
    });

  return (
    <header className="muki-header" ref={navbarRef}>

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

          {/* SOCIAL MEDIA */}
          <div className="muki-topbar-socials">

            <a
              href="https://www.facebook.com/mukisacco"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="MUKI SACCO Facebook"
              title="Facebook"
            >
              <FontAwesomeIcon icon={faFacebookF} />
            </a>

            <a
              href="https://www.instagram.com/mukisacco"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="MUKI SACCO Instagram"
              title="Instagram"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>

            <a
              href="https://x.com/mukisacco"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="MUKI SACCO X"
              title="X"
            >
              <FontAwesomeIcon icon={faXTwitter} />
            </a>

          </div>

        </div>
      </div>

      {/* MAIN NAVBAR */}
      <div className="muki-navbar">
        <div className="muki-container muki-navbar-inner">

          {/* LOGO */}
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
            onClick={() => {
              setMenuOpen((current) => !current);
              setActiveDropdown(null);
            }}
          >
            {menuOpen ? <X size={25} /> : <Menu size={25} />}
          </button>

          {/* NAVIGATION LINKS */}
          <nav
            className={`muki-nav-links ${
              menuOpen ? "is-open" : ""
            }`}
          >

            {/* HOME AND ABOUT */}
            {navItems.slice(0, 2).map((item) => (
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

            {/* OUR TEAM DROPDOWN */}
            <div
              className={`muki-nav-dropdown ${
                activeDropdown === "team" ? "dropdown-open" : ""
              }`}
            >
              <button
                type="button"
                className={`muki-nav-link muki-dropdown-trigger ${
                  isTeamPage ? "active" : ""
                }`}
                aria-expanded={activeDropdown === "team"}
                onClick={() => toggleDropdown("team")}
              >
                Our Team
                <ChevronDown
                  size={15}
                  className="dropdown-chevron"
                />
              </button>

              <div className="muki-dropdown-menu">
                {renderDropdownItems(teamLinks)}
              </div>
            </div>

            {/* LOANS DROPDOWN */}
            <div
              className={`muki-nav-dropdown ${
                activeDropdown === "loans" ? "dropdown-open" : ""
              }`}
            >
              <button
                type="button"
                className="muki-nav-link muki-dropdown-trigger"
                aria-expanded={activeDropdown === "loans"}
                onClick={() => toggleDropdown("loans")}
              >
                Loans
                <ChevronDown
                  size={15}
                  className="dropdown-chevron"
                />
              </button>

              <div className="muki-dropdown-menu">
                {renderDropdownItems(loanLinks)}
              </div>
            </div>

            {/* MEMBERSHIP DROPDOWN */}
            <div
              className={`muki-nav-dropdown ${
                activeDropdown === "membership" ? "dropdown-open" : ""
              }`}
            >
              <button
                type="button"
                className="muki-nav-link muki-dropdown-trigger"
                aria-expanded={activeDropdown === "membership"}
                onClick={() => toggleDropdown("membership")}
              >
                Membership
                <ChevronDown
                  size={15}
                  className="dropdown-chevron"
                />
              </button>

              <div className="muki-dropdown-menu">
                {renderDropdownItems(membershipLinks)}
              </div>
            </div>

            {/* DIGITAL BANKING DROPDOWN */}
            <div
              className={`muki-nav-dropdown ${
                activeDropdown === "digital" ? "dropdown-open" : ""
              }`}
            >
              <button
                type="button"
                className="muki-nav-link muki-dropdown-trigger"
                aria-expanded={activeDropdown === "digital"}
                onClick={() => toggleDropdown("digital")}
              >
                Digital Banking
                <ChevronDown
                  size={15}
                  className="dropdown-chevron"
                />
              </button>

              <div className="muki-dropdown-menu">
                {renderDropdownItems(digitalLinks)}
              </div>
            </div>

            {/* REMAINING NAVIGATION ITEMS */}
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

            {/* MEMBER LOGIN */}
            <a
              className="muki-login-button"
              href="https://portal.mukisacco.co.ke/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
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
