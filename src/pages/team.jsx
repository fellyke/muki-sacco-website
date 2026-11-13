import { useMemo, useState } from "react";
import {
  Users,
  BriefcaseBusiness,
  Search,
  ShieldCheck,
  ArrowUpRight,
  UserRound,
  Building2,
  Eye,
  
  Quote,
} from "lucide-react";

import "./team.css";

// --------------------------------------------------
// 1. LEADERSHIP DATA
// --------------------------------------------------

const directors = [
  { name: "John Gichigi", role: "Chairman" },
  { name: "John Migwi", role: "Vice Chairman" },
  { name: "John Wanyeki Theuri", role: "Honorable Secretary" },
  { name: "Elijah Kirogo", role: "Treasurer" },
  { name: "George Matu", role: "Director" },
  { name: "Jane Wandurua", role: "Director" },
  { name: "Monicah Wahu Njonge", role: "Director" },
  { name: "Joseph Maina", role: "Director" },
  { name: "Daniel Wamathai", role: "Director" },
];

const supervisoryMembers = [];

const management = [
  { name: "Violet Ndung'u", role: "Chief Executive Officer" },
  { name: "Zipporah Chege", role: "Credit Manager" },
  { name: "Janet Mutuku", role: "ICT Manager" },
  { name: "Nathan Mbogo", role: "Internal Audit" },
  { name: "Philip Munyoro", role: "Marketing Manager" },
  { name: "Elizabeth Kamau", role: "Operations Manager" },
];

const categories = [
  {
    id: "directors",
    label: "Board of Directors",
    icon: Users,
    people: directors,
    count: "09",
  },
  {
    id: "supervisory",
    label: "Supervisory Committee",
    icon: Eye,
    people: supervisoryMembers,
    count: "03",
  },
  {
    id: "management",
    label: "Management Team",
    icon: BriefcaseBusiness,
    people: management,
    count: "06",
  },
];

// --------------------------------------------------
// 2. REUSABLE PROFILE CARD
// --------------------------------------------------

function ProfileCard({ person }) {
  const initials = person.name
    .split(" ")
    .map((part) => part[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

  return (
    <article className="team-card">
      <div className="team-card-visual">
        {person.image ? (
          <img
            src={person.image}
            alt={person.name}
            loading="lazy"
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

        <div className="team-card-footer">
          <span>MUKI SACCO</span>
          <ArrowUpRight size={18} />
        </div>
      </div>
    </article>
  );
}

// --------------------------------------------------
// 3. CEO SECTION
// --------------------------------------------------

function CEOSection() {
  return (
    <section className="team-ceo-section">
      <div className="team-container">
        <div className="team-ceo-heading">
          <span className="team-section-label">
            OUR LEADERSHIP
          </span>

          <h1>
            Leading with purpose.
            <span> Serving with commitment.</span>
          </h1>
        </div>

        <div className="team-ceo-layout">
          <div className="team-ceo-profile">
            <div className="team-ceo-photo">
              <div className="team-ceo-initials">VN</div>

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
                Thank you for visiting our website to learn more
                about Muki Sacco. We feel honored that you have
                considered us to offer solution to your financial
                service needs. Muki has been serving members and
                families in the larger Nyandarua and Nakuru
                counties for over 33 years. We've become one of
                the fastest growing financial institutions in the
                region now serving over 50,000 members.
              </p>

              <p>
                I appreciate the trust and confidence you have
                placed in us and in return, you have our commitment
                of continuously providing superior service and
                the products that best serve your needs.
              </p>

              <p>
                I encourage you to explore the numerous products
                and services we are currently offering and continue
                to add. No matter what stage of life you find
                yourself in, we are likely to have a product or
                service that you will find beneficial. Muki Sacco
                offers much more than simply ordinary savings
                accounts and Normal Loans.
              </p>

              <p>
                In our efforts to endeavor to become effective in
                our operations to serve our members better, we are
                focusing more on technology-driven products and
                partnerships. For example, in partnership with
                Safaricom, we are currently enrolling our business
                clients and institutions into our Lipa na Mpesa
                platform. Through this solution, our members are
                able to push funds received from their paybill and
                Buy goods numbers to their Muki Sacco Accounts on
                a real-time settlement.
              </p>

              <p>
                We are on Mobile banking, by dialing *850# our
                members are able to: Enquire about their Account
                balances, Transfer Funds from one Muki Sacco
                account to another, M-Pesa transfers i.e Deposits
                and Withdrawals, apply for Mobile loans, buy
                airtime and Pay their bills.
              </p>

              <p>
                We have got ATM Cards whereby our members can
                access their account balances through any Ken
                Switch link-enabled ATM machine.
              </p>

              <p>
                Lastly, we have Personal cheques to facilitate
                our members making payments to third parties.
              </p>

              <p>
                We recognize you have a choice on where you do
                business and we will continue to work to maintain
                your trust as your Sacco of choice with better
                rates on loans and deposits, with lower fees for
                services, and by treating people the way we would
                like to be treated.
              </p>

              <p>
                As always, I welcome your feedback and suggestions
                on how we can continue to best serve you, To our
                members. you are the real owners of this great
                institution, and our only job is to serve you.
              </p>

              <p>
                Next time you're in the market for a new financial
                product or service, give Muki Sacco a call and
                you'll discover why Muki Sacco is your local
                advantage!
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

// --------------------------------------------------
// 4. CHAIRMAN SECTION
// --------------------------------------------------

function ChairmanSection() {
  return (
    <section className="team-chairman-section">
      <div className="team-container">
        <div className="team-chairman-layout">
          <div className="team-chairman-image">
            <img
              src="#"
              alt="John Gichigi"
              loading="lazy"
            />

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
              On behalf of my fellow directors, I welcome you to
              view, interact with us and learn more about our
              products and services.
            </p>

            <p>
              Muki Sacco is purely owned by our members, As the
              Sacco directors, our main role is to act in the
              best interests of the members and the Sacco at
              large. Our main responsibility is to ensure the
              Sacco works for its members, now and long into
              the future.
            </p>

            <p>
              Muki Sacco Board and supervisory Committee Members
              represent a wide array of experience and expertise.
              We have individuals elected to the Board with
              decades of service. They enhance the Sacco with
              skills sets including finance, accounting, HR,
              and business development.
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

// --------------------------------------------------
// 5. GOVERNANCE SECTION
// --------------------------------------------------

function GovernanceSection() {
  return (
    <section className="team-governance-section">
      <div className="team-container">
        <div className="team-governance-heading">
          <span className="team-section-label">
            HOW WE ARE GOVERNED
          </span>

          <h2>Strong governance. Shared responsibility.</h2>

          <p>
            The Board of directors is the top management organ
            of the SACCO with nine officials and three
            supervisory committee members. The day to day
            management of the SACCO is under the Chief Executive
            Officer (CEO) who is an ex-officio member of the board.
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
              Provides leadership and direction, acting in the
              best interests of members and the SACCO.
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
              Provides oversight in line with its supervisory
              responsibilities.
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
              Handles the day-to-day operations and service
              delivery of the SACCO under the CEO.
            </p>

            <strong>Led by the CEO</strong>
          </article>
        </div>
      </div>
    </section>
  );
}

// --------------------------------------------------
// 6. LEADERSHIP DIRECTORY
// --------------------------------------------------

function LeadershipDirectory() {
  const [activeTab, setActiveTab] = useState("directors");
  const [searchTerm, setSearchTerm] = useState("");

  const activeCategory = categories.find(
    (category) => category.id === activeTab
  );

  const filteredPeople = useMemo(() => {
    if (!activeCategory) return [];

    return activeCategory.people.filter((person) =>
      `${person.name} ${person.role}`
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
    );
  }, [activeCategory, searchTerm]);

  return (
    <section className="team-directory-section">
      <div className="team-container">
        <div className="team-directory-heading">
          <div>
            <span className="team-section-label">
              MEET OUR PEOPLE
            </span>

            <h2>The people behind MUKI SACCO</h2>

            <p>
              Meet the individuals entrusted with guiding
              governance, oversight and daily operations.
            </p>
          </div>

          <div className="team-search">
            <Search size={19} />

            <input
              type="search"
              placeholder="Search name or position..."
              value={searchTerm}
              onChange={(event) =>
                setSearchTerm(event.target.value)
              }
              aria-label="Search leadership"
            />
          </div>
        </div>

        <div className="team-tabs" role="tablist">
          {categories.map((category) => {
            const Icon = category.icon;

            return (
              <button
                key={category.id}
                type="button"
                role="tab"
                aria-selected={activeTab === category.id}
                className={
                  activeTab === category.id ? "active" : ""
                }
                onClick={() => {
                  setActiveTab(category.id);
                  setSearchTerm("");
                }}
              >
                <Icon size={18} />

                <span>{category.label}</span>

                <small>{category.count}</small>
              </button>
            );
          })}
        </div>

        <div className="team-results-heading">
          <div>
            <h3>{activeCategory?.label}</h3>
            <p>
              {activeTab === "directors"
                ? "The elected leadership responsible for the SACCO's direction."
                : activeTab === "supervisory"
                ? "Members entrusted with supervisory responsibilities."
                : "Professionals responsible for the SACCO's daily operations."}
            </p>
          </div>

          <span className="team-profile-count">
            {filteredPeople.length} profiles
          </span>
        </div>

        {filteredPeople.length > 0 ? (
          <div className="team-grid">
            {filteredPeople.map((person) => (
              <ProfileCard
                key={person.name}
                person={person}
              />
            ))}
          </div>
        ) : (
          <div className="team-empty">
            <div className="team-empty-icon">
              <Users size={30} />
            </div>

            <h3>
              {activeCategory?.people.length === 0
                ? "Profiles coming soon"
                : "No matching team members"}
            </h3>

            <p>
              {activeCategory?.people.length === 0
                ? "The official member details for this section have not yet been added."
                : "Try searching with another name or position."}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

// --------------------------------------------------
// 7. CLOSING SECTION
// --------------------------------------------------

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
            <h2>Working together for a stronger future.</h2>
            <p>
              Our commitment remains to serve our members
              with professionalism, accountability and care.
            </p>
          </div>

        
        </div>
      </div>
    </section>
  );
}

// --------------------------------------------------
// 8. MAIN TEAM PAGE
// --------------------------------------------------

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