
import { useState } from "react";
import { useLocation } from "react-router-dom";

import {
  Users,
  BriefcaseBusiness,
  Search,
  ShieldCheck,
  UserRound,
  Building2,
  Eye,
  Quote,
} from "lucide-react";

import "./team.css";

// ==========================================
// 1. BOARD OF DIRECTORS
// ==========================================

const directors = [
  { name: "John Gichigi", role: "Chairman", image: "/leadership/chairman.png" },
  { name: "John Migwi", role: "Vice Chairman", image: "/leadership/vice chair.png" },
  { name: "John Wanyeki Theuri", role: "Honorable Secretary", image: "/leadership/honorable secretary.png" },
  { name: "Elijah Kirogo", role: "Treasurer", image: "/leadership/treasurer.png" },
  { name: "George Matu", role: "Director", image: "/leadership/matu.png" },
  { name: "Jane Wandurua", role: "Director", image: "/leadership/jane.png" },
  { name: "Monicah Wahu Njonge", role: "Director", image: "/leadership/monica.png" },
  { name: "Joseph Maina", role: "Director", image: "/leadership/joseph.png" },
  { name: "Daniel Wamathai", role: "Director", image: "/leadership/daniel.png" },
];

// ==========================================
// 2. SUPERVISORY COMMITTEE
// ==========================================

const supervisoryMembers = [];

// ==========================================
// 3. MANAGEMENT TEAM
// ==========================================

const management = [
  { name: "Violet Ndung'u", role: "Chief Executive Officer", image: "/leadership/management/CEO.png" },
  { name: "Zipporah Chege", role: "Credit Manager", image: "/leadership/management/zipporah.png" },
  { name: "Janet Mutuku", role: "ICT Manager", image: "/leadership/management/janet.png" },
  { name: "Nathan Mbogo", role: "Internal Audit", image: "/leadership/management/nathan.png" },
  { name: "Philip Munyoro", role: "Marketing Manager", image: "/leadership/management/philip.png" },
  { name: "Elizabeth Kamau", role: "Operations Manager", image: "/leadership/management/elizabeth.png" },
];

// ==========================================
// 4. REUSABLE PROFILE CARD
// ==========================================

function ProfileCard({ person }) {
  const [imageError, setImageError] = useState(false);

  const initials = person.name
    .split(" ")
    .map((part) => part[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

  return (
    <article className="team-card">
      <div className="team-card-visual">
        {person.image && !imageError ? (
          <img
            src={person.image}
            alt={`${person.name} - ${person.role}`}
            loading="lazy"
            onError={() => setImageError(true)}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center top",
            }}
          />
        ) : (
          <div className="team-avatar">
            <span>{initials}</span>
          </div>
        )}

        <span className="team-card-icon">
          <UserRound size={18} />
        </span>
      </div>

      <div className="team-card-info">
        <span className="team-card-role">{person.role}</span>
        <h3>{person.name}</h3>
      </div>
    </article>
  );
}

// ==========================================
// 5. CEO SECTION
// ==========================================

function CEOSection() {
  const [imageError, setImageError] = useState(false);

  return (
    <section className="team-ceo-section" id="ceo-message">
      <div className="team-container">
        <div className="team-ceo-heading">
          <span className="team-section-label">OUR LEADERSHIP</span>

          <h1>
            Leading with purpose.
            <span> Serving with commitment.</span>
          </h1>
        </div>

        <div className="team-ceo-layout">
          <div className="team-ceo-profile">
            <div className="team-ceo-photo">
              {!imageError ? (
                <img
                  src="/leadership/management/CEO.png"
                  alt="Violet Ndung'u - Chief Executive Officer"
                  className="team-ceo-image"
                  onError={() => setImageError(true)}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "center top",
                  }}
                />
              ) : (
                <div className="team-ceo-initials">VN</div>
              )}

              <div className="team-ceo-photo-caption">
                <span>CHIEF EXECUTIVE OFFICER</span>
                <strong>Violet Ndung'u</strong>
              </div>
            </div>

            <div className="team-ceo-profile-bottom">
              <ShieldCheck size={19} />
              <span>Day-to-day SACCO management</span>
            </div>
          </div>

          <div className="team-ceo-message">
            <div className="team-message-heading">
              <span className="team-section-label">
                MESSAGE FROM THE CEO
              </span>
              <Quote size={34} />
            </div>

            <h2>Welcome to MUKI SACCO.</h2>

            <div className="team-message-content">
              <p>
                Thank you for visiting our website to learn more about Muki Sacco.
                We feel honored that you have considered us to offer solution to
                your financial service needs. Muki has been serving members and
                families in the larger Nyandarua and Nakuru counties for over
                33 years. We've become one of the fastest growing financial
                institutions in the region now serving over 50,000 members.
              </p>

              <p>
                I appreciate the trust and confidence you have placed in us and
                in return, you have our commitment of continuously providing
                superior service and the products that best serve your needs.
              </p>

              <p>
                I encourage you to explore the numerous products and services
                we are currently offering and continue to add. No matter what
                stage of life you find yourself in, we are likely to have a
                product or service that you will find beneficial. Muki Sacco
                offers much more than simply ordinary savings accounts and
                Normal Loans.
              </p>

              <p>
                In our efforts to endeavor to become effective in our operations
                to serve our members better, we are focusing more on
                technology-driven products and partnerships. For example, in
                partnership with Safaricom, we are currently enrolling our
                business clients and institutions into our Lipa na Mpesa
                platform. Through this solution, our members are able to push
                funds received from their paybill and Buy goods numbers to
                their Muki Sacco Accounts on a real-time settlement.
              </p>

              <p>
                We are on Mobile banking, by dialing *850# our members are able
                to: Enquire about their Account balances, Transfer Funds from
                one Muki Sacco account to another, M-Pesa transfers i.e Deposits
                and Withdrawals, apply for Mobile loans, buy airtime and Pay
                their bills.
              </p>

              <p>
                We have got ATM Cards whereby our members can access their
                account balances through any Ken Switch link-enabled ATM machine.
              </p>

              <p>
                We have personal cheques to facilitate our members making
                payments to third parties.
              </p>

              <p>
                We recognize you have a choice on where you do business and we
                will continue to work to maintain your trust as your Sacco of
                choice with better rates on loans and deposits, with lower fees
                for services, and by treating people the way we would like
                to be treated.
              </p>

              <p>
                As always, I welcome your feedback and suggestions on how we can
                continue to best serve you. To our members, you are the real
                owners of this great institution, and our only job is to serve you.
              </p>

              <p>
                Next time you're in the market for a new financial product or
                service, give Muki Sacco a call and you'll discover why Muki
                Sacco is your local advantage!
              </p>

              <p>
                Thanks for visiting. We hope to serve you soon.
              </p>
            </div>

            <div className="team-message-signature">
              <span>Sincerely,</span>
              <strong>Violet Ndung'u</strong>
              <small>Chief Executive Officer</small>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ==========================================
// 6. CHAIRMAN SECTION
// ==========================================

function ChairmanSection() {
  const [imageError, setImageError] = useState(false);

  return (
    <section className="team-chairman-section" id="chairman-message">
      <div className="team-container">
        <div className="team-chairman-layout">
          <div className="team-chairman-image">
            {!imageError ? (
              <img
                src="/leadership/chairman.png"
                alt="John Gichigi - SACCO Chairman"
                loading="lazy"
                onError={() => setImageError(true)}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center top",
                }}
              />
            ) : (
              <div className="team-avatar">
                <span>JG</span>
              </div>
            )}

            <div className="team-chairman-image-caption">
              <span>BOARD OF DIRECTORS</span>
              <strong>John Gichigi</strong>
              <small>SACCO Chairman</small>
            </div>
          </div>

          <div className="team-chairman-message">
            <span className="team-section-label">
              MESSAGE FROM THE CHAIRMAN
            </span>

            <Quote size={34} className="team-chairman-quote" />

            <h2>Working together for our members.</h2>

            <p>
              On behalf of my fellow directors, I welcome you to view, interact
              with us and learn more about our products and services.
            </p>

            <p>
              Muki Sacco is purely owned by our members. As the Sacco directors,
              our main role is to act in the best interests of the members and
              the Sacco at large. Our main responsibility is to ensure the
              Sacco works for its members, now and long into the future.
            </p>

            <p>
              Muki Sacco Board and supervisory Committee Members represent a
              wide array of experience and expertise. We have individuals
              elected to the Board with decades of service. They enhance the
              Sacco with skills sets including finance, accounting, HR, and
              business development.
            </p>

            <div className="team-message-signature">
              <span>Yours faithfully,</span>
              <strong>John Gichigi</strong>
              <small>SACCO Chairman</small>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ==========================================
// 7. GOVERNANCE SECTION
// ==========================================

function GovernanceSection() {
  return (
    <section className="team-governance-section" id="board">
      <div className="team-container">
        <div className="team-governance-heading">
          <span className="team-section-label">
            HOW WE ARE GOVERNED
          </span>

          <h2>Strong governance. Shared responsibility.</h2>

          <p>
            The Board of directors is the top management organ of the SACCO
            with nine officials and three supervisory committee members.
            The day to day management of the SACCO is under the Chief
            Executive Officer (CEO) who is an ex-officio member of the board.
          </p>
        </div>

        <div className="team-governance-grid">
          <article className="team-governance-card">
            <div className="team-governance-icon">
              <Users size={25} />
            </div>

            <span>GOVERNANCE</span>
            <h3>Board of Directors</h3>

            <p>
              Provides leadership and direction, acting in the best interests
              of members and the SACCO.
            </p>

            <strong>09 elected officials</strong>
          </article>

          <article className="team-governance-card">
            <div className="team-governance-icon">
              <Eye size={25} />
            </div>

            <span>OVERSIGHT</span>
            <h3>Supervisory Committee</h3>

            <p>
              Provides oversight in line with its supervisory responsibilities.
            </p>

            <strong>03 committee members</strong>
          </article>

          <article className="team-governance-card">
            <div className="team-governance-icon">
              <BriefcaseBusiness size={25} />
            </div>

            <span>OPERATIONS</span>
            <h3>Management Team</h3>

            <p>
              Handles the day-to-day operations and service delivery of the
              SACCO under the CEO.
            </p>

            <strong>Led by the CEO</strong>
          </article>
        </div>
      </div>
    </section>
  );
}

// ==========================================
// 8. LEADERSHIP DIRECTORY
// ==========================================

function LeadershipDirectory() {
  const location = useLocation();
  const [searchTerm, setSearchTerm] = useState("");

  const filteredDirectors = directors.filter((person) =>
    `${person.name} ${person.role}`
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  const filteredManagement = management.filter((person) =>
    `${person.name} ${person.role}`
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  const filteredSupervisory = supervisoryMembers.filter((person) =>
    `${person.name} ${person.role}`
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  const handleNavigation = (sectionId) => {
    const target = document.getElementById(sectionId);

    target?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    window.history.replaceState(null, "", `${location.pathname}#${sectionId}`);
  };

  return (
    <section className="team-directory-section" id="leadership-directory">
      <div className="team-container">
        <div className="team-directory-heading">
          <div>
            <span className="team-section-label">
              MEET OUR PEOPLE
            </span>

            <h2>The people behind MUKI SACCO</h2>

            <p>
              Meet the individuals entrusted with guiding governance,
              oversight and daily operations.
            </p>
          </div>

          <div className="team-search">
            <Search size={19} />

            <input
              type="search"
              placeholder="Search name or position..."
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
              aria-label="Search leadership"
            />
          </div>
        </div>

        {/* SIMPLE NAVIGATION LINKS */}

        <nav className="team-navigation-links" aria-label="Leadership sections">
          <a
            href="#directors"
            onClick={(event) => {
              event.preventDefault();
              handleNavigation("directors");
            }}
          >
            <Users size={18} />
            Board of Directors
          </a>

          <a
            href="#supervisory"
            onClick={(event) => {
              event.preventDefault();
              handleNavigation("supervisory");
            }}
          >
            <Eye size={18} />
            Supervisory Committee
          </a>

          <a
            href="#management"
            onClick={(event) => {
              event.preventDefault();
              handleNavigation("management");
            }}
          >
            <BriefcaseBusiness size={18} />
            Management Team
          </a>
        </nav>

        {/* BOARD OF DIRECTORS */}

        <section className="team-directory-group" id="directors">
          <div className="team-results-heading">
            <div>
              <h3>Board of Directors</h3>
              <p>
                The elected leadership responsible for the SACCO's direction.
              </p>
            </div>

            <span className="team-profile-count">
              {filteredDirectors.length} profiles
            </span>
          </div>

          {filteredDirectors.length > 0 ? (
            <div className="team-grid">
              {filteredDirectors.map((person) => (
                <ProfileCard key={person.name} person={person} />
              ))}
            </div>
          ) : (
            <div className="team-empty">
              <Users size={30} />
              <h3>No matching directors</h3>
              <p>Try searching with another name or position.</p>
            </div>
          )}
        </section>

        {/* SUPERVISORY COMMITTEE */}

        <section className="team-directory-group" id="supervisory">
          <div className="team-results-heading">
            <div>
              <h3>Supervisory Committee</h3>
              <p>
                Members entrusted with supervisory responsibilities.
              </p>
            </div>

            <span className="team-profile-count">
              {filteredSupervisory.length} profiles
            </span>
          </div>

          {filteredSupervisory.length > 0 ? (
            <div className="team-grid">
              {filteredSupervisory.map((person) => (
                <ProfileCard key={person.name} person={person} />
              ))}
            </div>
          ) : (
            <div className="team-empty">
              <Eye size={30} />
              <h3>Profiles coming soon</h3>
              <p>
                The official member details for this section have not yet
                been added.
              </p>
            </div>
          )}
        </section>

        {/* MANAGEMENT TEAM */}

        <section className="team-directory-group" id="management">
          <div className="team-results-heading">
            <div>
              <h3>Management Team</h3>
              <p>
                Professionals responsible for the SACCO's daily operations.
              </p>
            </div>

            <span className="team-profile-count">
              {filteredManagement.length} profiles
            </span>
          </div>

          {filteredManagement.length > 0 ? (
            <div className="team-grid">
              {filteredManagement.map((person) => (
                <ProfileCard key={person.name} person={person} />
              ))}
            </div>
          ) : (
            <div className="team-empty">
              <BriefcaseBusiness size={30} />
              <h3>No matching management members</h3>
              <p>Try searching with another name or position.</p>
            </div>
          )}
        </section>
      </div>
    </section>
  );
}

// ==========================================
// 9. CLOSING SECTION
// ==========================================

function TeamClosingSection() {
  return (
    <section className="team-closing-section">
      <div className="team-container">
        <div className="team-closing-content">
          <div className="team-closing-icon">
            <Building2 size={27} />
          </div>

          <div>
            <span>MEMBER OWNED. MEMBER FOCUSED.</span>

            <h2>
              Working together for a stronger future.
            </h2>

            <p>
              Our commitment remains to serve our members with
              professionalism, accountability and care.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// ==========================================
// 10. MAIN TEAM PAGE
// ==========================================

export default function Team() {
  return (
    <main className="team-page">
      <CEOSection />
      <ChairmanSection />
      <GovernanceSection />
      <LeadershipDirectory />
      <TeamClosingSection />
    </main>
  );
}
