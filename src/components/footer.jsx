import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, ArrowRight, Clock3 } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import "./footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="muki-footer">
      <div className="muki-footer-main">
        <div className="muki-container muki-footer-grid">
          <div className="muki-footer-about">
           
<Link to="/" className="muki-footer-brand">
  <img
    src="/logo.png"
    alt="MUKI SACCO Society"
    className="muki-footer-logo"
  />
</Link>


            <p>
              Empowering members through accessible financial services,
              a culture of saving, and opportunities for sustainable growth.
            </p>

            <p className="muki-footer-motto">Pamoja Twajenga.</p>
           <p>Get in Touch </p>
           <div className="muki-footer-socials">
           
  <a href="https://www.facebook.com/" target="_blank" rel="noreferrer" aria-label="Facebook">
    <FontAwesomeIcon icon={faFacebookF} />
  </a>

  <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" aria-label="Instagram">
    <FontAwesomeIcon icon={faInstagram} />
  </a>

  <a href="https://x.com/" target="_blank" rel="noreferrer" aria-label="X (Twitter)">
    <FontAwesomeIcon icon={faXTwitter} />
  </a>
</div>
          </div>

          <div className="muki-footer-column">
            <h3>Quick Links</h3>
            <Link to="/about">About Us</Link>
            <Link to="/team">Our Team</Link>
            <Link to="/membership">Become a Member</Link>
            <Link to="/gallery">Gallery</Link>
            <Link to="/contact">Contact Us</Link>
          </div>

          <div className="muki-footer-column">
            <h3>Our Services</h3>
            <Link to="/loans">Loan Products</Link>
            <Link to="/savings">Savings Products</Link>
            <Link to="/digital-banking">Digital Banking</Link>
            <Link to="/insurance">Insurance</Link>
            <a
              href="https://mukisacco.co.ke/channels/"
              target="_blank"
              rel="noreferrer"
            >
              Member Login <ArrowRight size={14} />
            </a>
          </div>

          <div className="muki-footer-column muki-footer-contact">
            <h3>Get In Touch</h3>
            <p>
              <MapPin size={17} />
              <span>Kenya</span>
            </p>
            <a href="tel:0711794957">
              <Phone size={17} />
              <span>0711 794 957</span>
            </a>
            <a href="mailto:info@mukisacco.co.ke">
              <Mail size={17} />
              <span>info@mukisacco.co.ke</span>
            </a>
            <p>
              <Clock3 size={17} />
              <span>Monday-Friday, 8:30 AM-4:00 PM</span>
            </p>
          </div>
        </div>
      </div>

      <div className="muki-footer-bottom">
        <div className="muki-container muki-footer-bottom-inner">
          <p>© {currentYear} MUKI SACCO Society. All rights reserved.</p>
          <div>
            <Link to="./contact">Contact</Link>
           
            
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;