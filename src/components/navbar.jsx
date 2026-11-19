
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

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
} from "lucide-react";

import "./navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [loansOpen, setLoansOpen] = useState(false);
  const [digitalOpen, setDigitalOpen] = useState(false);
  const [membershipOpen, setMembershipOpen] = useState(false);

  // CLOSE ALL MENUS
  const closeMenu = () => {
    setMenuOpen(false);
    setLoansOpen(false);
    setDigitalOpen(false);
    setMembershipOpen(false);
  };

  // MAIN NAVIGATION
  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Our Team", path: "/team" },
    { name: "Savings", path: "/savings" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contact" },
    { name: "Insurance", path: "/insurance" },
    { name: "App Self Registration", path: "/AppSelfRegistration" },
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

  // REUSABLE DROPDOWN ITEM
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
        <Link
          key={item.name}
          to={item.path}
          onClick={closeMenu}
          className="muki-dropdown-item"
        >
          {content}
        </Link>
      );
    });

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
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? (
              <X size={25} />
            ) : (
              <Menu size={25} />
            )}
          </button>

          {/* NAVIGATION LINKS */}
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
                  `muki-nav-link ${isActive ? "active" : ""}`
                }
              >
                {item.name}
              </NavLink>
            ))}

            {/* =================================
                LOANS DROPDOWN
            ================================= */}
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
                  setMembershipOpen(false);
                }}
              >
                Loans
                <ChevronDown size={15} />
              </button>

              <div className="muki-dropdown-menu">
                {renderDropdownItems(loanLinks)}
              </div>
            </div>

            {/* =================================
                MEMBERSHIP DROPDOWN
            ================================= */}
            <div
              className={`muki-nav-dropdown ${
                membershipOpen ? "dropdown-open" : ""
              }`}
            >
              <button
                type="button"
                className="muki-nav-link muki-dropdown-trigger"
                aria-expanded={membershipOpen}
                onClick={() => {
                  setMembershipOpen(!membershipOpen);
                  setLoansOpen(false);
                  setDigitalOpen(false);
                }}
              >
                Membership
                <ChevronDown size={15} />
              </button>

              <div className="muki-dropdown-menu">
                {renderDropdownItems(membershipLinks)}
              </div>
            </div>

            {/* =================================
                DIGITAL BANKING DROPDOWN
            ================================= */}
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
                  setMembershipOpen(false);
                }}
              >
                Digital Banking
                <ChevronDown size={15} />
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
              href="#"
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
