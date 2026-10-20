
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import {
  ArrowRight,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  HandCoins,
  PiggyBank,
  Smartphone,
  Users,
  ShieldCheck,
  HeartHandshake,
  GraduationCap,
  Bike,
  Beef,
  Store,
  Wallet,
  Droplets,
  Milk,
  Coins,
  Tractor,
  FileText,
} from "lucide-react";
import "./home.css";

const loans = [
  {
    name: "School Fees Loan",
    description: "Support your family's education plans.",
    icon: GraduationCap,
  },
  {
    name: "Boda Boda Loan",
    description: "Finance your motorcycle and grow your income.",
    icon: Bike,
  },
  {
    name: "Ngombe Loan",
    description: "Support your livestock and dairy farming needs.",
    icon: Beef,
  },
  {
    name: "Biashara Loan",
    description: "Get financing to grow your business.",
    icon: Store,
  },
  {
    name: "Tatua Loan",
    description: "Get financial support for urgent needs.",
    icon: HandCoins,
  },
  {
    name: "FOSA Loan",
    description: "Access financing through FOSA services.",
    icon: Wallet,
  },
  {
    name: "Self Guaranteed Loan",
    description: "Borrow against your eligible savings.",
    icon: ShieldCheck,
  },
  {
    name: "Youth Loan",
    description: "Take the next step in your financial journey.",
    icon: Users,
  },
  {
    name: "Water Tank Loan",
    description: "Invest in reliable water storage.",
    icon: Droplets,
  },
  {
    name: "Milk Advance",
    description: "Access support for dairy-related needs.",
    icon: Milk,
  },
  {
    name: "Thau Mbau Loan",
    description: "Explore financing for your personal needs.",
    icon: Coins,
  },
  {
    name: "Float Advance",
    description: "Support your short-term cash flow.",
    icon: Wallet,
  },
  {
    name: "Asset Financing",
    description: "Finance eligible assets for your goals.",
    icon: Tractor,
  },
  {
    name: "LPO Financing",
    description: "Support eligible local purchase orders.",
    icon: FileText,
  },
];

const savings = [
  {
    name: "Ordinary Account",
    description: "Build a consistent savings habit for everyday goals.",
    icon: PiggyBank,
  },
  {
    name: "Golden Account",
    description: "Save towards your long-term financial plans.",
    icon: Coins,
  },
  {
    name: "Junior Account",
    description: "Help children start their financial journey early.",
    icon: GraduationCap,
  },
  {
    name: "Super Saver",
    description: "Work towards your bigger savings goals.",
    icon: HandCoins,
  },
];

const slides = [
  {
    eyebrow: "YOUR PARTNER IN PROGRESS",
    title: "Empowering Members For Life.",
    description:
      "Save with purpose, access financing and build a stronger financial future with MUKI SACCO.",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1800&q=85",
    button: "Explore Our Loans",
    link: "/loans",
  },
  {
    eyebrow: "SAVE. GROW. PROSPER.",
    title: "Your Goals Deserve A Plan.",
    description:
      "Start building your future with savings options designed to support your ambitions.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1800&q=85",
    button: "Explore Savings",
    link: "/savings",
  },
  {
    eyebrow: "TOGETHER WE GROW",
    title: "A Stronger Future Starts Today.",
    description:
      "Discover member-focused financial services that help you take your next step with confidence.",
    image:
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1800&q=85",
    button: "Become A Member",
    link: "/membership",
  },
];

function SectionHeading({
  eyebrow,
  title,
  description,
  centered = true,
}) {
  return (
    <div className={`section-heading ${centered ? "text-center" : ""}`}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}

function Hero() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((current) => (current + 1) % slides.length);
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  const slide = slides[active];

  return (
    <section
      className="hero"
      id="home"
      style={{
        backgroundImage: `linear-gradient(90deg, rgba(4, 44, 78, .96) 0%, rgba(4, 59, 100, .82) 45%, rgba(4, 59, 100, .18) 100%), url("${slide.image}")`,
      }}
    >
      <div className="container hero-inner">
        <div className="hero-content" key={active}>
          <span className="eyebrow hero-eyebrow">
            {slide.eyebrow}
          </span>

          <h1>{slide.title}</h1>
          <p>{slide.description}</p>

          <div className="hero-actions">
            <Link className="button button-white" to={slide.link}>
              {slide.button}
              <ArrowRight size={17} />
            </Link>

            <Link className="button button-outline" to="/about">
              Discover MUKI
            </Link>
          </div>

          <div className="hero-trust">
            <span>
              <CheckCircle2 size={16} />
              Member-focused services
            </span>
            <span>
              <CheckCircle2 size={16} />
              Your financial partner
            </span>
          </div>
        </div>
      </div>

      <div className="hero-controls">
        <button
          aria-label="Previous slide"
          onClick={() =>
            setActive(
              (current) => (current - 1 + slides.length) % slides.length
            )
          }
        >
          <ChevronLeft size={21} />
        </button>

        <div className="hero-dots">
          {slides.map((item, index) => (
            <button
              key={item.title}
              className={active === index ? "hero-dot active" : "hero-dot"}
              onClick={() => setActive(index)}
              aria-label={`Show slide ${index + 1}`}
            />
          ))}
        </div>

        <button
          aria-label="Next slide"
          onClick={() =>
            setActive((current) => (current + 1) % slides.length)
          }
        >
          <ChevronRight size={21} />
        </button>
      </div>

      <div className="hero-bottom-line" />
    </section>
  );
}

function Highlights() {
  const items = [
    {
      icon: Users,
      title: "Member First",
      text: "Services focused on members' needs.",
    },
    {
      icon: HandCoins,
      title: "Financial Growth",
      text: "Tools to help you plan and grow.",
    },
    {
      icon: ShieldCheck,
      title: "Responsible Saving",
      text: "Build habits for a stronger future.",
    },
    {
      icon: HeartHandshake,
      title: "Shared Progress",
      text: "Grow together through cooperation.",
    },
  ];

  return (
    <section className="highlights">
      <div className="container highlights-grid">
        {items.map(({ icon: Icon, title, text }) => (
          <article className="highlight" key={title}>
            <span className="highlight-icon">
              <Icon size={23} />
            </span>

            <div>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

/* UPDATED STATISTICS SECTION */

function Statistics() {
  const stats = [
    {
      value: "36+",
      label: "Years of Service",
      description:
        "Providing quality service to our loyal members",
    },
    {
      value: "47000+",
      label: "Active Members",
      description:
        "You are in good company as a member of our ever growing Muki Sacco Society",
    },
    {
      value: "26",
      label: "Financial Products",
      description:
        "Pursue your financial goals through our innovative savings and loans products",
    },
    {
      value: "9",
      label: "Network Branches",
      description:
        "Our branches are convenient, comfortable and friendly spread across counties",
    },
  ];

  return (
    <section className="statistics-section">
      <div className="container statistics-grid">
        {stats.map((stat) => (
          <article className="stat-item" key={stat.label}>
            <strong>{stat.value}</strong>

            <span className="stat-label">
              {stat.label}
            </span>

            <span className="stat-divider" />

            <p>{stat.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function Services() {
  const items = [
    {
      icon: HandCoins,
      title: "Flexible Loans",
      text: "Explore financing options for your personal and business goals.",
      link: "/loans",
      label: "Explore loans",
    },
    {
      icon: PiggyBank,
      title: "Savings Accounts",
      text: "Find savings options to help you plan for tomorrow.",
      link: "/savings",
      label: "Explore savings",
    },
    {
      icon: Smartphone,
      title: "Digital Banking",
      text: "Find the available digital channels for your account.",
      link: "/digital-banking",
      label: "Go digital",
    },
  ];

  return (
    <section className="section services-section" id="services">
      <div className="container">
        <SectionHeading
          eyebrow="WHAT WE OFFER"
          title="Financial Services For Your Journey"
          description="Explore services designed to help you save, access financing and move closer to your goals."
        />

        <div className="services-grid">
          {items.map(({ icon: Icon, title, text, link, label }) => (
            <article className="service-card" key={title}>
              <span className="service-icon">
                <Icon size={27} />
              </span>

              <h3>{title}</h3>
              <p>{text}</p>

              <Link className="text-link" to={link}>
                {label}
                <ArrowRight size={16} />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function LoanProducts() {
  return (
    <section className="section loans-section" id="loans">
      <div className="container">
        <div className="section-row">
          <SectionHeading
            centered={false}
            eyebrow="FINANCING OPTIONS"
            title="Find A Loan That Fits Your Goals"
            description="Explore the listed loan categories. Contact MUKI SACCO to confirm current rates, eligibility, limits and repayment terms."
          />
        </div>

        <div className="loans-grid">
          {loans.slice(0, 4).map(({ name, description, icon: Icon }) => (
            <article className="loan-card" key={name}>
              <div className="loan-card-top">
                <span className="loan-icon">
                  <Icon size={24} />
                </span>

                <ArrowRight className="loan-arrow" size={19} />
              </div>

              <h3>{name}</h3>
              <p>{description}</p>

              <Link className="loan-link" to="/contact">
                Enquire now
                <ArrowRight size={15} />
              </Link>
            </article>
          ))}
        </div>

        <div className="center-actions">
          <Link className="button button-light" to="/loans">
            View All Loan Products
            <ArrowRight size={17} />
          </Link>
        </div>
      </div>
    </section>
  );
}

function Savings() {
  return (
    <section className="section savings-section" id="savings">
      <div className="container">
        <SectionHeading
          eyebrow="SAVE WITH PURPOSE"
          title="Make Your Savings Work For You"
          description="Choose a savings option that matches your plans. Ask MUKI SACCO for the current account requirements and terms."
        />

        <div className="savings-grid">
          {savings.map(({ name, description, icon: Icon }, index) => (
            <article
              className={`saving-card saving-card-${index + 1}`}
              key={name}
            >
              <span className="saving-icon">
                <Icon size={26} />
              </span>

              <h3>{name}</h3>
              <p>{description}</p>

              <Link className="text-link" to="/contact">
                Learn more
                <ArrowRight size={16} />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function AboutPreview() {
  return (
    <section className="section about-section" id="about">
      <div className="container about-grid">
        <div className="about-visual">
          <img
            src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1000&q=85"
            alt="Professionals working together"
            loading="lazy"
          />

          <div className="about-stamp">
            <HeartHandshake size={28} />
            <strong>Pamoja Twajenga</strong>
            <span>Together we build</span>
          </div>
        </div>

        <div className="about-copy">
          <SectionHeading
            centered={false}
            eyebrow="ABOUT MUKI SACCO"
            title="Growing Together, Building Tomorrow"
            description="MUKI SACCO is built around the cooperative spirit of saving, access to financial services and shared progress."
          />

          <p className="about-body">
            Whether you are planning a major purchase, supporting your family,
            investing in a business or building a savings habit, explore the
            available services and find out which options suit your needs.
          </p>

          <ul className="check-list">
            <li>
              <CheckCircle2 size={18} />
              A member-focused approach
            </li>

            <li>
              <CheckCircle2 size={18} />
              Savings and financing options
            </li>

            <li>
              <CheckCircle2 size={18} />
              Digital access through official channels
            </li>
          </ul>

          <Link className="button button-primary" to="/about">
            Discover Our History
            <ArrowRight size={17} />
          </Link>
        </div>
      </div>
    </section>
  );
}

function DigitalBankingPreview() {
  return (
    <section className="section digital-section" id="digital-banking">
      <div className="container digital-grid">
        <div className="digital-copy">
          <span className="eyebrow">
            BANKING THAT MOVES WITH YOU
          </span>

          <h2>Stay Connected To Your Finances</h2>

          <p>
            Access the official MUKI SACCO digital channels to find available
            member services. Always use official channels and keep your PINs
            and passwords private.
          </p>

          <div className="digital-features">
            <div>
              <Smartphone size={21} />

              <span>
                <strong>Digital access</strong>
                <small>Explore available member channels</small>
              </span>
            </div>

            <div>
              <ShieldCheck size={21} />

              <span>
                <strong>Use official channels</strong>
                <small>Protect your account information</small>
              </span>
            </div>
          </div>

          <Link className="button button-white" to="/digital-banking">
            Explore Digital Banking
            <ArrowRight size={17} />
          </Link>
        </div>

        <div className="digital-visual">
          <div className="phone-frame">
            <div className="phone-speaker" />

            <div className="phone-screen">
              <img
                className="phone-logo"
                src="/logo.png"
                alt="MUKI SACCO"
              />

              <span className="phone-welcome">
                Welcome to
              </span>

              <h3>Digital Banking</h3>

              <div className="phone-balance">
                <small>Your financial journey</small>
                <strong>Made simpler.</strong>
              </div>

              <div className="phone-actions">
                <span>
                  <Wallet size={21} />
                  Accounts
                </span>

                <span>
                  <HandCoins size={21} />
                  Loans
                </span>

                <span>
                  <PiggyBank size={21} />
                  Savings
                </span>

                <span>
                  <Smartphone size={21} />
                  Support
                </span>
              </div>

              <div className="phone-footer">
                Pamoja Twajenga
              </div>
            </div>
          </div>

          <div className="digital-float-card">
            <CheckCircle2 size={20} />

            <span>
              <strong>Member focused</strong>
              <small>Explore official channels</small>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

function Partners() {
  const partners = [
    "Partner 1",
    "Partner 2",
    "Partner 3",
    "Partner 4",
    "Partner 5",
  ];

  return (
    <section className="section partners-section" id="partners">
      <div className="container">
        <SectionHeading
          eyebrow="OUR PARTNERS"
          title="Growing Through Partnership"
          description="Working together to support members and strengthen our community."
        />

        <div className="partners-grid">
          {partners.map((partner) => (
            <div className="partner-logo-card" key={partner}>
              <span>{partner}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Branches() {
  return (
    <section className="branches-strip" id="branches">
      <div className="container branches-inner">
        <span className="branches-icon">
          <Users size={25} />
        </span>

        <div>
          <h3>Looking For A MUKI SACCO Branch?</h3>

          <p>
            Contact the SACCO to confirm the nearest branch, directions and
            opening hours.
          </p>
        </div>

        <Link to="/contact" className="button button-white">
          Contact Us
          <ArrowRight size={16} />
        </Link>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <main className="home-page">
      <Hero />
      <Highlights />
      <Statistics />
      <Services />
      <LoanProducts />
      <Savings />
      <Partners />
      <AboutPreview />
      <DigitalBankingPreview />
      <Branches />
    </main>
  );
}
