
import { useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
  Search,
  X,
  ChevronRight,
  Phone,
} from "lucide-react";
import { Link } from "react-router-dom";

import "./loans.css";

const loans = [
  {
    id: 1,
    name: "School Fees Loan",
    category: "Personal",
    image:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1000&q=85",
    description:
      "Financial support to help members meet education expenses for their children and dependants.",
    benefits: [
      "Support for education expenses",
      "Plan school fee payments",
      "Subject to SACCO approval",
    ],
  },
  {
    id: 2,
    name: "Boda Boda Loan",
    category: "Business",
    image:
      "https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=1000&q=85",
    description:
      "Financing for eligible members looking to acquire or improve a motorcycle transport business.",
    benefits: [
      "Support motorcycle acquisition",
      "Grow transport income opportunities",
      "Terms subject to assessment",
    ],
  },
  {
    id: 3,
    name: "Ngombe Loan",
    category: "Agriculture",
    image:
  "https://images.unsplash.com/photo-1527153857715-3908f2bae5e8?auto=format&fit=crop&w=1000&q=85",
    description:
      "Financing designed for eligible members with dairy cattle and livestock-related needs.",
    benefits: [
      "Support livestock-related investments",
      "Assist dairy farming activities",
      "Eligibility subject to SACCO terms",
    ],
  },
  {
    id: 4,
    name: "Biashara Loan",
    category: "Business",
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1000&q=85",
    description:
      "Business financing to help eligible members support business operations and growth.",
    benefits: [
      "Support working capital needs",
      "Help expand business operations",
      "Terms subject to approval",
    ],
  },
  {
    id: 5,
    name: "Tatua Loan",
    category: "Personal",
    image:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1000&q=85",
    description:
      "A financing option for eligible members who need support with personal financial needs.",
    benefits: [
      "Support eligible personal needs",
      "Flexible planning around repayments",
      "Confirm eligibility with MUKI SACCO",
    ],
  },
  {
    id: 6,
    name: "FOSA Loan",
    category: "Personal",
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1000&q=85",
    description:
      "Financing associated with the SACCO's Front Office Service Activity, subject to its lending terms.",
    benefits: [
      "For eligible members",
      "Subject to assessment",
      "Repayment terms set by the SACCO",
    ],
  },
  {
    id: 7,
    name: "Self Guaranteed Loan",
    category: "Personal",
    image:
      "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&w=1000&q=85",
    description:
      "A loan option for eligible members using qualifying savings or deposits as security, subject to SACCO rules.",
    benefits: [
      "Security arrangements apply",
      "Subject to savings eligibility",
      "Approval required",
    ],
  },
  {
    id: 8,
    name: "Youth Loan",
    category: "Personal",
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1000&q=85",
    description:
      "Financing for eligible young members working towards personal, educational or business goals.",
    benefits: [
      "Support eligible youth goals",
      "Personal or enterprise needs",
      "Eligibility conditions apply",
    ],
  },
  {
    id: 9,
    name: "Water Tank Loan",
    category: "Agriculture",
    image:
      "https://images.unsplash.com/photo-1548337138-e87d889cc369?auto=format&fit=crop&w=1000&q=85",
    description:
      "Financing support for eligible members investing in water storage and access solutions.",
    benefits: [
      "Support water storage projects",
      "Useful for household or farm needs",
      "Loan terms require confirmation",
    ],
  },
  {
    id: 10,
    name: "Milk Advance",
    category: "Agriculture",
    image:
      "https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&w=1000&q=85",
    description:
      "An advance facility for eligible dairy-related members, subject to MUKI SACCO's conditions.",
    benefits: [
      "Designed around eligible dairy needs",
      "Conditions apply",
      "Confirm repayment arrangements",
    ],
  },
  {
    id: 11,
    name: "Thau Mbau Loan",
    category: "Personal",
    image:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1000&q=85",
    description:
      "A named MUKI SACCO loan product. Contact the SACCO to confirm its purpose and current terms.",
    benefits: [
      "Ask about eligibility",
      "Confirm required documents",
      "Repayment terms require confirmation",
    ],
  },
  {
    id: 12,
    name: "Float Advance",
    category: "Business",
    image:
      "https://images.unsplash.com/photo-1579621970795-87facc2f976d?auto=format&fit=crop&w=1000&q=85",
    description:
      "A short-term financing facility for eligible members, subject to the SACCO's conditions.",
    benefits: [
      "For eligible financing needs",
      "Confirm applicable limits",
      "Repayment conditions apply",
    ],
  },
  {
    id: 13,
    name: "Asset Financing",
    category: "Business",
    image:
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=1000&q=85",
    description:
      "Financing support for eligible members planning to acquire qualifying business or personal assets.",
    benefits: [
      "Support qualifying asset purchases",
      "Assessment of repayment ability",
      "Terms subject to approval",
    ],
  },
  {
    id: 14,
    name: "LPO Financing",
    category: "Business",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1000&q=85",
    description:
      "Financing for eligible businesses fulfilling qualifying Local Purchase Orders or supply contracts.",
    benefits: [
      "Support qualifying supply contracts",
      "Documentation and assessment required",
      "Approval and conditions apply",
    ],
  },
  {
  id: 15,
  name: "E-Loan",
  category: "Digital Banking",
  image:
    "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1000&q=85",
  description:
    "Convenient digital loan financing for eligible MUKI SACCO members, with applications and processing designed to be accessible through digital channels.",
  benefits: [
    "Convenient digital loan application",
    "Access loan services remotely",
    "Eligibility and limits subject to assessment",
  ],
},
];

const categories = [
  "All Loans",
  "Personal",
  "Business",
  "Agriculture",
];

export default function Loans() {
  const [activeCategory, setActiveCategory] = useState("All Loans");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLoan, setSelectedLoan] = useState(null);

  const filteredLoans = loans.filter((loan) => {
    const matchesCategory =
      activeCategory === "All Loans" ||
      loan.category === activeCategory;

    const matchesSearch =
      loan.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      loan.description.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <main className="loans-page">
      <section className="loans-hero">
        <div className="loans-hero-content">
          <span className="loans-eyebrow">
            FINANCIAL SOLUTIONS FOR YOU
          </span>

          <h1>
            Find the right loan
            <br />
            for your next step.
          </h1>

          <p>
            From education and farming to business growth,
            explore financing options available to MUKI SACCO
            members.
          </p>

          <a href="#loan-products" className="loans-hero-btn">
            Explore Loan Products
            <ArrowRight size={18} />
          </a>

          <div className="loans-hero-note">
            <CheckCircle2 size={18} />
            <span>
              All loans are subject to eligibility and approval.
            </span>
          </div>
        </div>

        <div className="loans-hero-image">
          <img
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=85"
            alt="Planning business finances"
          />

          <div className="loans-hero-image-caption">
            <span>YOUR GOALS MATTER</span>
            <strong>Let's grow together.</strong>
          </div>
        </div>
      </section>

      <section className="loans-intro">
        <span className="loans-section-label">
          OUR LOAN PRODUCTS
        </span>

        <h2>Finance your ambitions</h2>

        <p>
          Explore the available product categories and select
          a loan to learn more.
        </p>
      </section>

      <section className="loans-catalog" id="loan-products">
        <div className="loans-toolbar">
          <div className="loans-search">
            <Search size={19} />

            <input
              type="search"
              placeholder="Search loan products..."
              value={searchTerm}
              onChange={(event) =>
                setSearchTerm(event.target.value)
              }
              aria-label="Search loan products"
            />
          </div>

          <div className="loans-filters">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                className={
                  activeCategory === category
                    ? "loans-filter active"
                    : "loans-filter"
                }
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="loans-results-count">
          Showing {filteredLoans.length} loan
          {filteredLoans.length === 1 ? "" : " products"}
        </div>

        {filteredLoans.length > 0 ? (
          <div className="loans-grid">
            {filteredLoans.map((loan) => (
              <article className="loan-card" key={loan.id}>
                <button
                  type="button"
                  className="loan-card-image"
                  onClick={() => setSelectedLoan(loan)}
                  aria-label={`View ${loan.name} details`}
                >
                  <img
                    src={loan.image}
                    alt={loan.name}
                    loading="lazy"
                  />

                  <span className="loan-category-badge">
                    {loan.category}
                  </span>

                  <span className="loan-image-arrow">
                    <ArrowRight size={20} />
                  </span>
                </button>

                <div className="loan-card-body">
                  <span className="loan-number">
                    LOAN {String(loan.id).padStart(2, "0")}
                  </span>

                  <h3>{loan.name}</h3>

                  <p>{loan.description}</p>

                  <button
                    type="button"
                    className="loan-details-btn"
                    onClick={() => setSelectedLoan(loan)}
                  >
                    View loan details
                    <ChevronRight size={18} />
                  </button>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="loans-empty">
            <Search size={35} />
            <h3>No loan products found</h3>
            <p>Try another search term or category.</p>

            <button
              type="button"
              onClick={() => {
                setSearchTerm("");
                setActiveCategory("All Loans");
              }}
            >
              Show all loans
            </button>
          </div>
        )}
      </section>

      <section className="loans-cta">
        <div className="loans-cta-icon">
          <Phone size={27} />
        </div>

        <div className="loans-cta-content">
          <h2>Need help choosing a loan?</h2>
          <p>
            Contact MUKI SACCO to confirm current interest
            rates, requirements, repayment periods and eligibility.
          </p>
        </div>

      <Link to="/contact" className="loans-contact-btn">
  Contact Us
  <ArrowRight size={18} />
</Link>
      </section>

      <div className="loans-back-home">
        <Link to="/">
          <ChevronRight
            size={17}
            style={{ transform: "rotate(180deg)" }}
          />
          Back to Home
        </Link>
      </div>

      {selectedLoan && (
        <div
          className="loan-modal-backdrop"
          role="presentation"
          onClick={() => setSelectedLoan(null)}
        >
          <section
            className="loan-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="loan-modal-title"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="loan-modal-close"
              onClick={() => setSelectedLoan(null)}
              aria-label="Close loan details"
            >
              <X size={23} />
            </button>

            <img
              className="loan-modal-image"
              src={selectedLoan.image}
              alt={selectedLoan.name}
            />

            <div className="loan-modal-content">
              <span className="loan-section-label">
                {selectedLoan.category} LOAN
              </span>

              <h2 id="loan-modal-title">
                {selectedLoan.name}
              </h2>

              <p>{selectedLoan.description}</p>

              <h3>Important information</h3>

              <ul className="loan-modal-benefits">
                {selectedLoan.benefits.map((benefit) => (
                  <li key={benefit}>
                    <CheckCircle2 size={18} />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>

             

              <Link to="./contact" className="loan-modal-cta">
  Contact Us
</Link>
                
            </div>
          </section>
        </div>
      )}
    </main>
  );
}
