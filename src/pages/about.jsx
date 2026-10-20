import { Link } from "react-router-dom";
import {
  ArrowRight,
  Landmark,
  Sprout,
  Users,
  Target,
  Compass,
  ShieldCheck,
  BriefcaseBusiness,
  LockKeyhole,
  Eye,
  Award,
  Handshake,
} from "lucide-react";
import "./about.css";

const milestones = [
  {
    year: "29 June 1989",
    title: "The idea was born",
    description:
      "Approximately 29 farmers gathered at Kimwatu Farm and agreed to form a SACCO to address the financial challenges facing dairy farmers.",
    icon: Users,
  },
  {
    year: "1990",
    title: "Official registration",
    description:
      "MUKI SACCO was registered to give the North Kinangop community an opportunity to save and access credit.",
    icon: Landmark,
  },
  {
    year: "2000",
    title: "FOSA introduced",
    description:
      "The society expanded its services to include Front Office Savings Activity (FOSA), in addition to BOSA.",
    icon: Sprout,
  },
];

export default function About() {
  return (
    <main className="about-page">
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">DISCOVER MUKI SACCO</span>
          <h1>Our History, Our Community, Our Future</h1>
          <p>
            A cooperative journey that began with farmers working
            together to build a stronger financial future.
          </p>
          <Link className="button button-white" to="./membership">
            Become a Member <ArrowRight size={17} />
          </Link>
        </div>
      </section>
      <section className="section about-purpose">
  <div className="container">
    <div className="section-heading text-center">
      <span className="eyebrow">WHAT DEFINES US</span>
      <h2>Our Vision, Mission & Values</h2>
      <p>
        The principles and purpose that guide our commitment
        to our members and community.
      </p>
    </div>

    <div className="purpose-grid">
      <article className="purpose-card">
        <span className="purpose-icon">
          <Target size={27} />
        </span>
        <h3>Our Vision</h3>
        <p>
          To be the leading SACCO in addressing members'
          financial and social needs.
        </p>
      </article>

      <article className="purpose-card">
        <span className="purpose-icon">
          <Compass size={27} />
        </span>
        <h3>Our Mission</h3>
        <p>
          To empower our members socio-economically through
          mobilization of savings and provision of market-driven
          financial solutions.
        </p>
      </article>
    </div>

    <div className="section-heading text-center values-heading">
      <span className="eyebrow">OUR GUIDING PRINCIPLES</span>
      <h2>Our Core Values</h2>
    </div>

    <div className="core-values-grid">
      <article className="core-value-card">
        <ShieldCheck size={28} />
        <h3>Integrity</h3>
      </article>

      <article className="core-value-card">
        <BriefcaseBusiness size={28} />
        <h3>Professionalism</h3>
      </article>

      <article className="core-value-card">
        <Users size={28} />
        <h3>Teamwork</h3>
      </article>

      <article className="core-value-card">
        <LockKeyhole size={28} />
        <h3>Confidentiality</h3>
      </article>

      <article className="core-value-card">
        <Eye size={28} />
        <h3>Transparency & Accountability</h3>
      </article>

      <article className="core-value-card">
        <Award size={28} />
        <h3>Service Excellence</h3>
      </article>
    </div>

    <div className="about-motto">
      <Handshake size={35} />
      <div>
        <span>OUR MOTTO</span>
        <h2>Pamoja Twajenga</h2>
      </div>
    </div>
  </div>
</section>

      <section className="section">
        <div className="container about-history-grid">
          <div className="about-history-image">
            <img
              src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1000&q=85"
              alt="Agricultural land representing the farming community"
              loading="lazy"
            />
          </div>

          <div className="about-history-copy">
            <span className="eyebrow">WHERE IT ALL BEGAN</span>
            <h2>A Story of Cooperation and Determination</h2>

            <p>
              Before MUKI SACCO was formed, dairy farmers in Kinangop
              faced serious challenges. They struggled to find reliable
              markets for their milk, access credit to educate their
              children and develop their farms, and receive their milk
              payments safely.
            </p>

            <p>
              On 29 June 1989, approximately 29 farmers met at Kimwatu
              Farm and agreed to form a SACCO. An interim committee was
              established to work on the constitution and by-laws.
            </p>

            <p>
              The first leadership included Mr. L. N. Waithaka as
              chairman, Mr. Nyaga Ndonga as vice chairman, and
              Mr. John Macharia as honorary secretary.
            </p>

            <p>
              The society was registered in 1990. It initially operated
              through BOSA and later expanded to include FOSA in 2000.
            </p>
          </div>
        </div>
      </section>

      <section className="section history-milestones">
        <div className="container">
          <div className="section-heading text-center">
            <span className="eyebrow">OUR JOURNEY</span>
            <h2>Important Milestones</h2>
            <p>
              Key moments in the history shared by MUKI SACCO.
            </p>
          </div>

          <div className="milestones-grid">
            {milestones.map(({ year, title, description, icon: Icon }) => (
              <article className="milestone-card" key={year}>
                <span className="milestone-icon">
                  <Icon size={25} />
                </span>
                <span className="milestone-year">{year}</span>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="membership-section">
        <div className="container membership-inner">
          <div>
            <span className="eyebrow eyebrow-light">
              PAMOJA TWAJENGA
            </span>
            <h2>Be Part of the MUKI SACCO Journey</h2>
            <p>
              Explore membership options and contact the SACCO to
              confirm eligibility and registration requirements.
            </p>
          </div>
          <Link className="button button-white" to="/membership">
            Explore Membership <ArrowRight size={17} />
          </Link>
        </div>
      </section>
    </main>
  );
}
