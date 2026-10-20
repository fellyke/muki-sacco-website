
import { useState } from "react";
import {
  Users,
  BriefcaseBusiness,
  Search,
  ShieldCheck,
  ArrowUpRight,
  UserRound,
} from "lucide-react";
import "./team.css";

const directors = [
  {
    name: "John Gichigi",
    role: "Chairman",
    image:
      "https://mukisacco.co.ke/wp-content/uploads/2022/09/JOHN-GICHIGI-VICE-CHAIR.jpg",
  },
  {
    name: "John Migwi",
    role: "Vice Chairman",
    image:
      "https://mukisacco.co.ke/wp-content/uploads/2022/09/JOHN-MIGWI-DIRECTOR.jpg",
  },
  {
    name: "John Wanyeki Theuri",
    role: "Honorable Secretary",
    image:
      "https://mukisacco.co.ke/wp-content/uploads/2022/09/JOHN-WANYEKI-THEURI-HONARABLE-SECRATARY.jpg",
  },
  {
    name: "Elijah Kirogo",
    role: "Treasurer",
    image:
      "https://mukisacco.co.ke/wp-content/uploads/2023/12/kirogo.jpg",
  },
  {
    name: "George Matu",
    role: "Director",
    image:
      "https://mukisacco.co.ke/wp-content/uploads/2023/12/matu.jpg",
  },
  {
    name: "Jane Wandurua",
    role: "Director",
    image:
      "https://mukisacco.co.ke/wp-content/uploads/2023/12/JANE-1.jpg",
  },
  {
    name: "Monicah Wahu Njonge",
    role: "Director",
    image:
      "https://mukisacco.co.ke/wp-content/uploads/2022/09/MONICAH-WAHU-NJONGE-TREASURER.jpg",
  },
  {
    name: "Joseph Maina",
    role: "Director",
    image:
      "https://mukisacco.co.ke/wp-content/uploads/2022/09/JOSEPH-MAINA-NGURE-DIRECTOR.jpg",
  },
  {
    name: "Daniel Wamathai",
    role: "Director",
    image:
      "https://mukisacco.co.ke/wp-content/uploads/2022/09/Mr.-DANIEL-WAMATHAI-CHAIRMAN.jpg",
  },
];

const management = [
  {
    name: "Violet Ndungú",
    role: "Chief Executive Officer",
    image:
      "https://mukisacco.co.ke/wp-content/uploads/2022/09/VIOLET-NDUNGU-CEO.jpg",
  },
  {
    name: "Zipporah Chege",
    role: "Credit Manager",
  },
  {
    name: "Janet Mutuku",
    role: "ICT Manager",
  },
  {
    name: "Nathan Mbogo",
    role: "Internal Audit",
  },
  {
    name: "Philip Munyoro",
    role: "Marketing Manager",
  },
  {
    name: "Elizabeth Kamau",
    role: "Operations Manager",
  },
];

function ProfileCard({ person }) {
  const [imageFailed, setImageFailed] = useState(false);

  return (
    <article className="team-card">
      <div className="team-card-image">
        {person.image && !imageFailed ? (
          <img
            src={person.image}
            alt={person.name}
            loading="lazy"
            onError={() => setImageFailed(true)}
          />
        ) : (
          <div className="team-image-placeholder">
            <UserRound size={54} strokeWidth={1.2} />
            <span>Photo unavailable</span>
          </div>
        )}

        <span className="team-photo-badge">
          <ShieldCheck size={15} />
          {person.role}
        </span>
      </div>

      <div className="team-card-info">
        <h3>{person.name}</h3>
        <p>{person.role}</p>
        <div className="team-card-bottom">
          <span>MUKI SACCO</span>
          <ArrowUpRight size={19} />
        </div>
      </div>
    </article>
  );
}

function TeamSection({ people, searchTerm }) {
  const filteredPeople = people.filter((person) =>
    `${person.name} ${person.role}`
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  if (filteredPeople.length === 0) {
    return (
      <p className="team-empty">
        No team members match your search.
      </p>
    );
  }

  return (
    <div className="team-grid">
      {filteredPeople.map((person) => (
        <ProfileCard key={person.name} person={person} />
      ))}
    </div>
  );
}

export default function Team() {
  const [activeTab, setActiveTab] = useState("directors");
  const [searchTerm, setSearchTerm] = useState("");

  const people =
    activeTab === "directors" ? directors : management;

  return (
    <main className="team-page">
      <section className="team-hero">
        <div className="team-hero-pattern" />

        <div className="team-container team-hero-content">
          <span className="team-eyebrow">
            <Users size={16} />
            THE PEOPLE BEHIND OUR PROGRESS
          </span>

          <h1>
            Leadership built on
            <span> trust and service.</span>
          </h1>

          <p>
            Meet the leaders and professionals working together
            to empower our members and build a stronger future.
          </p>

          <div className="team-hero-stats">
            <div>
              <strong>09</strong>
              <span>Board positions</span>
            </div>
            <div>
              <strong>06</strong>
              <span>Published management profiles</span>
            </div>
          </div>
        </div>
      </section>

      <section className="team-directory">
        <div className="team-container">
          <div className="team-intro">
            <div>
              <span className="team-section-label">
                MEET OUR PEOPLE
              </span>
              <h2>Our leadership team</h2>
              <p>
                Discover the people guiding MUKI SACCO's
                governance and day-to-day operations.
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
                aria-label="Search team members"
              />
            </div>
          </div>

          <div className="team-tabs">
            <button
              className={
                activeTab === "directors" ? "active" : ""
              }
              onClick={() => {
                setActiveTab("directors");
                setSearchTerm("");
              }}
            >
              <Users size={18} />
              Board of Directors
              <span>09</span>
            </button>

            <button
              className={
                activeTab === "management" ? "active" : ""
              }
              onClick={() => {
                setActiveTab("management");
                setSearchTerm("");
              }}
            >
              <BriefcaseBusiness size={18} />
              Management
              <span>06</span>
            </button>
          </div>

          <div className="team-results-heading">
            <h3>
              {activeTab === "directors"
                ? "Board of Directors"
                : "Management Team"}
            </h3>
            <span>
              {people.filter((person) =>
                `${person.name} ${person.role}`
                  .toLowerCase()
                  .includes(searchTerm.toLowerCase())
              ).length}{" "}
              profiles
            </span>
          </div>

          <TeamSection
            people={people}
            searchTerm={searchTerm}
          />

          <div className="team-note">
            <ShieldCheck size={22} />
            <div>
              <strong>Committed to our members</strong>
              <p>
                Our leadership works to uphold accountability,
                professionalism and service excellence.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
