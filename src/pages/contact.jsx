import { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock3,
  ArrowRight,
  MessageCircle,
} from "lucide-react";
import { Link } from "react-router-dom";
import "./contact.css";
const branches = [
  {
    name: "Ndunyu Njeru",
    phone: "0711-794957",
    email: "info@mukisacco.co.ke",
    main: true,
  },
  {
    name: "Engineer",
    phone: "0711-733938",
    email: "engineerbr@mukisacco.co.ke",
  },
  {
    name: "Kwa Haraka",
    phone: "0704509189",
    email: "harakabr@mukisacco.co.ke",
  },
  {
    name: "Geta Branch",
    phone: "0718-679524",
    email: "getabr@mukisacco.co.ke",
  },
  {
    name: "Murungaru",
    phone: "0114169256",
    email: "murungarubr@mukisacco.co.ke",
  },
  {
    name: "Olkalou",
    phone: "0769057169",
    email: "olkaloubr@mukisacco.co.ke",
  },
  {
    name: "Miharati",
    phone: "0711734171",
    email: "miharatibr@mukisacco.co.ke",
  },
  {
    name: "Shamata",
    phone: "0110096040",
    email: "shamatabr@mukisacco.co.ke",
  },
  {
    name: "Naivasha",
    phone: "0700400478",
  },
  {
    name: "Mlolongo",
    phone: "0713202312",
  },
];

export default function Contact() {
  const [search, setSearch] = useState("");

  const filteredBranches = branches.filter((branch) =>
    branch.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main className="contact-page">
      <section className="contact-hero">
        <div className="contact-hero-content">
          <span className="contact-eyebrow">WE ARE HERE FOR YOU</span>
          <h1>
            Let's talk.
            <br />
            We're listening.
          </h1>
          <p>
            Have a question about membership, savings, loans or our services?
            Reach out to MUKI SACCO or contact your nearest branch.
          </p>

          <a href="#branch-directory" className="contact-primary-btn">
            Find a Branch <ArrowRight size={18} />
          </a>

          <div className="contact-hero-note">
            <MessageCircle size={19} />
            <span>Your financial journey matters to us.</span>
          </div>
        </div>

        <div className="contact-hero-art">
          <div className="contact-art-circle contact-art-circle-one" />
          <div className="contact-art-circle contact-art-circle-two" />

          <div className="contact-art-card">
            <div className="contact-art-icon">
              <Mail size={35} />
            </div>
            <span>Connect with MUKI SACCO</span>
            <strong>We're always happy to help.</strong>
            <div className="contact-art-line" />
            <div className="contact-art-dots">
              <i />
              <i />
              <i />
            </div>
          </div>

          <div className="contact-art-tag">
            <Phone size={18} />
            <span>Let's connect</span>
          </div>
        </div>
      </section>

      <section className="contact-intro">
        <span className="contact-eyebrow">GET IN TOUCH</span>
        <h2>How can we help you?</h2>
        <p>
          Contact our main office or find the phone number and email address
          for the branch that serves you.
        </p>
      </section>

      <section className="contact-featured">
        <div className="contact-featured-icon">
          <MapPin size={28} />
        </div>

        <div className="contact-featured-info">
          <span className="contact-small-label">MAIN CONTACT</span>
          <h2>Ndunyu Njeru</h2>
          <p className="contact-featured-subtitle">Head Office</p>
          <a href="tel:0711794957">
            <Phone size={17} />
            0711-794957
          </a>

          <a href="mailto:info@mukisacco.co.ke">
            <Mail size={17} />
            info@mukisacco.co.ke
          </a>
        </div>

      </section>

      <section className="contact-directory" id="branch-directory">
        <div className="contact-directory-heading">
          <div>
            <span className="contact-eyebrow">OUR NETWORK</span>
            <h2>Find your nearest branch</h2>
            <p>
              Contact details for MUKI SACCO branches.
            </p>
          </div>

          <label className="contact-search">
            <MapPin size={18} />
            <input
              type="search"
              placeholder="Search branches..."
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              aria-label="Search branches"
            />
          </label>
        </div>

        <div className="contact-branch-grid">
          {filteredBranches.map((branch) => (
            <article className="contact-branch-card" key={branch.name}>
              <div className="contact-branch-top">
                <div className="contact-branch-icon">
                  <MapPin size={21} />
                </div>
                {branch.main && (
                  <span className="contact-main-label">Main Contact</span>
                )}
              </div>

              <h3>{branch.name}</h3>

              <a
                className="contact-detail"
                href={`tel:${branch.phone.replace(/[^0-9+]/g, "")}`}
              >
                <Phone size={17} />
                <span>{branch.phone}</span>
              </a>

              {branch.email ? (
                <a className="contact-detail" href={`mailto:${branch.email}`}>
                  <Mail size={17} />
                  <span>{branch.email}</span>
                </a>
              ) : (
                <p className="contact-email-pending">
                  Email contact not provided
                </p>
              )}

              <a
                className="contact-branch-call"
                href={`tel:${branch.phone.replace(/[^0-9+]/g, "")}`}
              >
                Call branch <ArrowRight size={16} />
              </a>
            </article>
          ))}
        </div>

        {filteredBranches.length === 0 && (
          <p className="contact-no-results">
            No branches match "{search}". Try another branch name.
          </p>
        )}
      </section>

      <section className="contact-hours">
        <div className="contact-hours-icon">
          <Clock3 size={25} />
        </div>
        <div>
          <h2>Need more assistance?</h2>
          <p>
            Call the relevant branch or email the main office for assistance
            with your enquiry.
          </p>
        </div>
        <a href="mailto:info@mukisacco.co.ke">
          Email us <ArrowRight size={17} />
        </a>
      </section>

      <div className="contact-back-home">
        <Link to="/">← Back to Home</Link>
      </div>
    </main>
  );
}