
import {
  ShieldCheck,
  HeartPulse,
  CarFront,
  Sprout,
  GraduationCap,
  Building2,
  Users,
  BriefcaseBusiness,
  ArrowRight,
  CheckCircle2,
  Phone,
  ChevronRight,
} from "lucide-react";

import "./insurance.css";

/* =====================================================
   INSURANCE PRODUCTS
===================================================== */

const lifeProducts = [
  "Group life",
  "Group last expense",
  "Pension plans",
  "Investment policies",
  "Education policies",
];

const generalProducts = [
  "Domestic Package",
  "Motor Insurance",
  "Personal Accident",
  "Professional Indemnity",
  "Workmen’s Compensation Act Policy",
  "WIBA (Employees)",
  "Livestock Insurance",
  "Money Policy",
  "Fire Insurance",
  "Medical Insurance",
  "Burglary and Theft",
  "Fidelity Guarantee",
];

const insuranceCategories = [
  {
    title: "Motor Insurance",
    description:
      "Cover options for private, commercial and institutional vehicles.",
    icon: CarFront,
    src: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1000&q=85",
    href: "#motor-insurance",
  },
  {
    title: "Livestock & Crop",
    description:
      "Insurance solutions for livestock risks and agricultural needs.",
    icon: Sprout,
    src: "https://images.unsplash.com/photo-1516467508483-a7212febe31a?auto=format&fit=crop&w=1000&q=85",
    href: "#livestock-insurance",
  },
  {
    title: "Medical Insurance",
    description:
      "Medical cover options for individuals, families, groups and institutions.",
    icon: HeartPulse,
    src: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1000&q=85",
    href: "#medical-insurance",
  },
  {
    title: "School & Institutional",
    description:
      "Protection options for schools, vehicles, buildings and students.",
    icon: GraduationCap,
    src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1000&q=85",
    href: "#school-insurance",
  },
];

const heroServices = [
  {
    title: "Motor Insurance",
    description: "Protection for your vehicles.",
    icon: CarFront,
  },
  {
    title: "Medical Insurance",
    description: "Cover options for health needs.",
    icon: HeartPulse,
  },
  {
    title: "Livestock & Crop",
    description: "Protection for agricultural livelihoods.",
    icon: Sprout,
  },
  {
    title: "School Insurance",
    description: "Options for schools and institutions.",
    icon: GraduationCap,
  },
];

/* =====================================================
   REUSABLE COMPONENTS
===================================================== */

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="insurance-section-heading">
      <span className="insurance-eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}

function BulletList({ items }) {
  return (
    <ul className="insurance-list">
      {items.map((item) => (
        <li key={item}>
          <CheckCircle2 size={17} />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function InsuranceCategoryCard({ category }) {
  const Icon = category.icon;

  return (
    <a href={category.href} className="insurance-category-card">
      <div className="insurance-category-image">
        <img
          src={category.src}
          alt={category.title}
          loading="lazy"
        />

        <span className="insurance-category-image-icon">
          <Icon size={22} />
        </span>
      </div>

      <div className="insurance-category-card-content">
        <h3>{category.title}</h3>
        <p>{category.description}</p>

        <span className="insurance-card-link">
          Explore cover <ArrowRight size={16} />
        </span>
      </div>
    </a>
  );
}

function ProductGrid({ products }) {
  return (
    <div className="insurance-product-grid">
      {products.map((product) => (
        <div className="insurance-product" key={product}>
          <CheckCircle2 size={17} />
          <span>{product}</span>
        </div>
      ))}
    </div>
  );
}

function InsuranceImage({ src, alt }) {
  return (
    <div className="insurance-image-wrap">
      <img src={src} alt={alt} loading="lazy" />
    </div>
  );
}

/* =====================================================
   MAIN INSURANCE PAGE
===================================================== */

export default function Insurance() {
  return (
    <main className="insurance-page">

      {/* =================================================
          HERO — THREE COLUMN LAYOUT
      ================================================= */}

      <section className="insurance-hero">
        <div className="insurance-hero-decoration" />

        <div className="insurance-container insurance-hero-grid">

          {/* COLUMN 1 — INTRODUCTION */}

          <div className="insurance-hero-content">
            <span className="insurance-hero-label">
              <ShieldCheck size={17} />
              INSURANCE SERVICES
            </span>

            <h1>
              Protect What
              <span> Matters Most.</span>
            </h1>

            <p>
              Financial wellbeing goes beyond saving and borrowing.
              We provide convenient access to insurance solutions
              designed to protect you, your family, your property
              and your business.
            </p>

            <p className="insurance-hero-secondary">
              From motor vehicle and medical insurance to property,
              personal accident, livestock, business, school and
              institutional insurance, our team is ready to guide
              you towards cover that suits your needs.
            </p>

            <div className="insurance-hero-actions">
              <a
                href="#insurance-contact"
                className="insurance-btn-primary"
              >
                Enquire About Insurance
                <ArrowRight size={18} />
              </a>

              <a
                href="#insurance-products"
                className="insurance-btn-outline"
              >
                Explore Our Products
              </a>
            </div>

            <div className="insurance-hero-trust">
              <ShieldCheck size={20} />
              <span>
                Professional guidance. Convenient service. Protection.
              </span>
            </div>
          </div>

          {/* COLUMN 2 — PEACE OF MIND */}

          <div className="insurance-hero-visual">
            <div className="insurance-hero-card">

              <div className="insurance-hero-card-icon">
                <ShieldCheck size={34} />
              </div>

              <span className="insurance-hero-card-label">
                YOUR PEACE OF MIND
              </span>

              <h2>
                Protection for every stage of life.
              </h2>

              <p>
                Explore insurance solutions for your family,
                assets, business and future.
              </p>

              <div className="insurance-hero-card-footer">
                <span>INSURANCE</span>
                <span>PROTECTION SERVICES</span>
              </div>

            </div>

            <div className="insurance-floating-icon insurance-float-one">
              <HeartPulse size={23} />
            </div>

            <div className="insurance-floating-icon insurance-float-two">
              <CarFront size={23} />
            </div>
          </div>

          {/* COLUMN 3 — INSURANCE PROTECTION SERVICES */}

          <div className="insurance-hero-services">

            <span className="insurance-hero-services-label">
              WHAT WE PROTECT
            </span>

            <h2>Insurance Protection Services</h2>

            <div className="insurance-hero-service-list">
              {heroServices.map((service) => {
                const Icon = service.icon;

                return (
                  <div
                    className="insurance-hero-service"
                    key={service.title}
                  >
                    <span className="insurance-hero-service-icon">
                      <Icon size={22} />
                    </span>

                    <div className="insurance-hero-service-content">
                      <h3>{service.title}</h3>
                      <p>{service.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <a
              href="#insurance-products"
              className="insurance-hero-services-link"
            >
              View all insurance products
              <ArrowRight size={16} />
            </a>

          </div>

        </div>
      </section>

      {/* =================================================
          WHY CHOOSE US
      ================================================= */}

      <section className="insurance-why">
        <div className="insurance-container">

          <SectionHeading
            eyebrow="WHY CHOOSE US?"
            title="Insurance support you can rely on"
            description="Your future deserves protection. Let our team help you explore the right insurance options for your needs."
          />

          <div className="insurance-benefits-grid">

            <article className="insurance-benefit">
              <div className="insurance-benefit-icon">
                <ShieldCheck size={25} />
              </div>

              <h3>Convenient & Accessible</h3>

              <p>
                Access insurance services conveniently.
              </p>
            </article>

            <article className="insurance-benefit">
              <div className="insurance-benefit-icon">
                <Users size={25} />
              </div>

              <h3>Professional Guidance</h3>

              <p>
                Get guidance when exploring insurance options and requirements.
              </p>
            </article>

            <article className="insurance-benefit">
              <div className="insurance-benefit-icon">
                <BriefcaseBusiness size={25} />
              </div>

              <h3>A Range of Solutions</h3>

              <p>
                Explore life assurance and general insurance products.
              </p>
            </article>

            <article className="insurance-benefit">
              <div className="insurance-benefit-icon">
                <Building2 size={25} />
              </div>

              <h3>For Individuals & Businesses</h3>

              <p>
                Find options for families, businesses, schools and institutions.
              </p>
            </article>

          </div>
        </div>
      </section>

      {/* =================================================
          INSURANCE CATEGORIES
      ================================================= */}

      <section
        className="insurance-categories"
        id="insurance-products"
      >
        <div className="insurance-container">

          <SectionHeading
            eyebrow="OUR INSURANCE SERVICES"
            title="Find the protection you need"
            description="Choose an insurance category to explore available products, benefits and requirements."
          />

          <div className="insurance-category-grid">
            {insuranceCategories.map((category) => (
              <InsuranceCategoryCard
                key={category.title}
                category={category}
              />
            ))}
          </div>

        </div>
      </section>

      {/* =================================================
          LIFE ASSURANCE
      ================================================= */}

      <section className="insurance-life">
        <div className="insurance-container insurance-life-layout">

          <div className="insurance-life-intro">
            <span className="insurance-eyebrow">
              PLAN FOR TOMORROW
            </span>

            <h2>Life Assurance Products</h2>

            <p>
              Explore life assurance solutions designed around
              protection, long-term planning and future financial needs.
            </p>

            <a
              href="#insurance-contact"
              className="insurance-text-link"
            >
              Enquire about life assurance
              <ArrowRight size={17} />
            </a>
          </div>

          <div className="insurance-life-products">
            {lifeProducts.map((product, index) => (
              <div className="insurance-life-product" key={product}>
                <span className="insurance-product-number">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span>{product}</span>

                <ChevronRight size={19} />
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =================================================
          GENERAL INSURANCE
      ================================================= */}

      <section className="insurance-general">
        <div className="insurance-container">

          <SectionHeading
            eyebrow="GENERAL INSURANCE"
            title="Cover for the things that matter"
            description="Explore the general insurance products available."
          />

          <ProductGrid products={generalProducts} />

          <p className="insurance-disclaimer">
            Product availability, eligibility, premiums and policy
            conditions should be confirmed with the insurance agency.
          </p>

        </div>
      </section>

      {/* =================================================
          MOTOR INSURANCE
      ================================================= */}

      <section
        className="insurance-detail"
        id="motor-insurance"
      >
        <div className="insurance-container insurance-detail-grid">

          <div className="insurance-detail-content">
            <span className="insurance-eyebrow">
              INSURE WITH US
            </span>

            <h2>Motor Vehicle Insurance</h2>

            <p>
              Explore vehicle insurance for private motor vehicles,
              commercial vehicles and institutional motor vehicles.
            </p>

            <h3>Types of cover</h3>

            <div className="insurance-cover-pills">
              <span>Comprehensive Insurance</span>
              <span>Third Party Insurance</span>
            </div>

            <h3>Application requirements</h3>

            <BulletList
              items={[
                "Duly completed proposal form",
                "Copy of National ID",
                "Copy of KRA PIN certificate",
                "Copy of logbook",
                "Certificate of incorporation if the vehicle is registered under a company or institution",
              ]}
            />

            <h3>What to do in case of an accident</h3>

            <BulletList
              items={[
                "Notify the police immediately.",
                "Do not accept liability at the scene.",
                "Do not leave the scene unless it is safe to do so.",
                "Notify your insurance agent immediately.",
              ]}
            />

            <h3>Claim documentation</h3>

            <BulletList
              items={[
                "Duly completed motor insurance claim form",
                "Copy of the logbook in the insured's name",
                "Police abstract report",
                "Copy of driving licence",
              ]}
            />

            <a
              href="#insurance-contact"
              className="insurance-btn-primary"
            >
              Enquire About Motor Cover
              <ArrowRight size={18} />
            </a>
          </div>

          <InsuranceImage
            src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1000&q=85"
            alt="Motor vehicle insurance"
          />

        </div>
      </section>

      {/* =================================================
          LIVESTOCK INSURANCE
      ================================================= */}

      <section
        className="insurance-detail insurance-detail-tinted"
        id="livestock-insurance"
      >
        <div className="insurance-container insurance-detail-grid insurance-detail-reverse">

          <div className="insurance-detail-content">
            <span className="insurance-eyebrow">
              PROTECT YOUR LIVELIHOOD
            </span>

            <h2>Livestock & Crop Insurance</h2>

            <p>
              Agriculture is an important livelihood. Explore livestock
              protection options for agricultural risks.
            </p>

            <h3>Livestock risks listed</h3>

            <BulletList
              items={[
                "Terminal diseases",
                "Accidents",
                "Fire",
                "Theft",
                "Calving complications",
                "Snake bites",
                "Epidemics",
                "Emergency slaughter, subject to policy terms",
              ]}
            />

            <p className="insurance-small-note">
              Covered events, exclusions and claim conditions depend on
              the actual policy. Confirm the terms with the agency.
            </p>

            <a
              href="#insurance-contact"
              className="insurance-btn-primary"
            >
              Enquire About Agricultural Cover
              <ArrowRight size={18} />
            </a>
          </div>

          <InsuranceImage
            src="https://images.unsplash.com/photo-1516467508483-a7212febe31a?auto=format&fit=crop&w=1000&q=85"
            alt="Livestock and agricultural insurance"
          />

        </div>
      </section>

      {/* =================================================
          MEDICAL INSURANCE
      ================================================= */}

      <section
        className="insurance-detail"
        id="medical-insurance"
      >
        <div className="insurance-container insurance-detail-grid">

          <div className="insurance-detail-content">
            <span className="insurance-eyebrow">
              CARE FOR YOUR FAMILY
            </span>

            <h2>Medical Insurance</h2>

            <p>
              Explore medical cover options for individuals, families,
              groups, institutions and companies. Confirm age limits
              and eligibility before applying.
            </p>

            <h3>Listed benefits</h3>

            <BulletList
              items={[
                "Inpatient",
                "Outpatient",
                "Maternity",
                "Dental",
                "Optical",
                "Last expense",
              ]}
            />

            <h3>Eligibility</h3>

            <p>
              Individuals, families, groups, institutions and companies.
            </p>

            <h3>Application requirements</h3>

            <BulletList
              items={[
                "National Identity Card",
                "KRA PIN certificate",
                "Certificate of registration for companies and institutions",
                "Birth certificates for dependants",
                "Applicable premium",
                "Completed proposal form",
              ]}
            />

            <a
              href="#insurance-contact"
              className="insurance-btn-primary"
            >
              Enquire About Medical Cover
              <ArrowRight size={18} />
            </a>
          </div>

          <InsuranceImage
            src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1000&q=85"
            alt="Medical insurance and healthcare"
          />

        </div>
      </section>

      {/* =================================================
          SCHOOL AND INSTITUTIONS
      ================================================= */}

      <section
        className="insurance-detail insurance-detail-tinted"
        id="school-insurance"
      >
        <div className="insurance-container insurance-detail-grid insurance-detail-reverse">

          <div className="insurance-detail-content">
            <span className="insurance-eyebrow">
              PROTECT YOUR INSTITUTION
            </span>

            <h2>School & Institutional Insurance</h2>

            <p>
              Insurance options for schools and institutions, including
              buildings, vehicles and student personal accident cover.
            </p>

            <h3>Building insurance</h3>

            <p>
              Protection against the following perils, subject to
              policy terms and availability:
            </p>

            <BulletList
              items={[
                "Fire and arson",
                "Floods",
                "Storms",
                "Earthquakes",
                "Political violence and terrorism, at an additional cost",
              ]}
            />

            <h3>School buses, vans and staff vehicles</h3>

            <BulletList
              items={[
                "Windscreen cover",
                "Free valuation, where available",
                "Entertainment unit cover",
                "Political violence and terrorism cover",
                "Excess protector",
                "Negotiated private motor rates for staff",
                "Separate cover for alternator and starter",
                "Motor trader use cover, where applicable",
              ]}
            />

            <h3>Students' personal accident cover</h3>

            <p>
              A policy intended to provide monetary benefits for bodily
              injuries sustained by students while at school,
              subject to the policy wording.
            </p>

            <BulletList
              items={[
                "Death benefit",
                "Medical expense reimbursement",
                "Artificial appliances benefit",
                "Accident-related dental expense reimbursement",
                "Funeral expenses",
              ]}
            />

            <h3>Application requirements</h3>

            <BulletList
              items={[
                "Duly completed proposal form",
                "Copy of certificate of registration",
                "Copy of KRA PIN certificate",
                "Copy of valuation report, where applicable",
              ]}
            />

            <a
              href="#insurance-contact"
              className="insurance-btn-primary"
            >
              Enquire About School Cover
              <ArrowRight size={18} />
            </a>
          </div>

          <InsuranceImage
            src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1000&q=85"
            alt="School and institutional insurance"
          />

        </div>
      </section>

      {/* =================================================
          CONTACT
      ================================================= */}

      <section
        className="insurance-contact"
        id="insurance-contact"
      >
        <div className="insurance-container insurance-contact-inner">

          <div>
            <span className="insurance-eyebrow">
              LET'S TALK
            </span>

            <h2>Your future deserves protection.</h2>

            <p>
              Contact our team to ask about insurance products,
              premiums, eligibility and the application process.
            </p>
          </div>

          <div className="insurance-contact-actions">
            <a
              href="tel:0711794957"
              className="insurance-btn-primary"
            >
              <Phone size={18} />
              Call Us
            </a>
          </div>

        </div>
      </section>

    </main>
  );
}
