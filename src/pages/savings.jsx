import { Link } from "react-router-dom";
import {
  ArrowRight,
  PiggyBank,
  Crown,
  TrendingUp,
  CalendarDays,
  GraduationCap,
  HeartHandshake,
  UsersRound,
  Sprout,
  Coins,
  Landmark,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";
import "./savings.css";
const savingsProducts = [
  {
    number: "01",
    title: "Ordinary Account",
    subtitle: "Save consistently",
    description:
      "A savings option for members who want to build a saving habit and put money aside for everyday financial goals.",
    icon: PiggyBank,
    features: ["Build a regular saving habit", "Work towards personal goals"],
  },
  {
    number: "02",
    title: "Golden Account",
    subtitle: "Savings for your future",
    description:
      "A savings product for members looking to organise their money and work towards their long-term financial plans.",
    icon: Crown,
    features: ["Plan for future needs", "Grow your savings discipline"],
  },
  {
    number: "03",
    title: "Super Savers",
    subtitle: "Make saving a priority",
    description:
      "A savings option for members who want to make saving part of their financial routine.",
    icon: TrendingUp,
    features: ["Set clear savings targets", "Build financial discipline"],
  },
  {
    number: "04",
    title: "Holiday Account",
    subtitle: "Save for your next getaway",
    description:
      "Plan ahead for holidays, family trips and special occasions by putting money aside before you need it.",
    icon: CalendarDays,
    features: ["Prepare for holiday expenses", "Plan ahead for special occasions"],
  },
  {
    number: "05",
    title: "MUKI Junior Account",
    subtitle: "A brighter financial future",
    description:
      "An account designed around children's savings and helping families introduce financial discipline early.",
    icon: GraduationCap,
    features: ["Encourage saving from an early age", "Plan for children's future needs"],
  },
  {
    number: "06",
    title: "Inua Dada Savings",
    subtitle: "Empowering women",
    description:
      "A savings option presented for women pursuing stronger financial planning and greater economic independence.",
    icon: HeartHandshake,
    features: ["Support personal financial goals", "Encourage a consistent saving habit"],
  },
  {
    number: "07",
    title: "Boresha Mwanaume",
    subtitle: "Plan. Save. Progress.",
    description:
      "A savings product for men looking to strengthen their financial planning and work towards personal goals.",
    icon: UsersRound,
    features: ["Plan for future responsibilities", "Build a stronger saving culture"],
  },
];

const investmentProducts = [
  {
    number: "01",
    title: "Share Capital",
    subtitle: "Invest in your SACCO",
    description:
      "Share capital represents a member's ownership stake in the SACCO. Confirm the share requirements, transfer rules and applicable benefits with MUKI SACCO.",
    icon: Landmark,
    features: ["Understand your ownership stake", "Check the current share capital requirements"],
  },
  {
    number: "02",
    title: "BOSA Deposit Account",
    subtitle: "Build your member deposits",
    description:
      "A Back Office Service Activity (BOSA) deposit product associated with members' SACCO savings and borrowing arrangements. Confirm the applicable terms with MUKI SACCO.",
    icon: Coins,
    features: ["Build your member deposits", "Confirm withdrawal and loan eligibility rules"],
  },
  {
    number: "03",
    title: "Fixed Deposit Account",
    subtitle: "Put your money to work",
    description:
      "An investment option to ask about when you want to place funds for an agreed period under specified terms and returns.",
    icon: TrendingUp,
    features: ["Ask about available investment periods", "Confirm interest rates and maturity terms"],
  },
];

function ProductCard({ product, category }) {
  const Icon = product.icon;

  return (
    <article className="si-card">
      <div className="si-card-top">
        <span className="si-number">{product.number}</span>
        <div className="si-icon">
          <Icon size={25} strokeWidth={1.8} />
        </div>
      </div>

      <p className="si-subtitle">{product.subtitle}</p>
      <h3>{product.title}</h3>
      <p className="si-description">{product.description}</p>

      <ul className="si-features">
        {product.features.map((feature) => (
          <li key={feature}>
            <CheckCircle2 size={17} />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <Link
        className="si-card-link"
        to={`/contact?product=${encodeURIComponent(product.title)}&category=${category}`}
      >
        Enquire about this product <ArrowRight size={17} />
      </Link>
    </article>
  );
}

export default function Savings() {
  return (
    <main className="si-page">
      <section className="si-hero">
        <div className="si-hero-content">
          <span className="si-eyebrow">YOUR MONEY. YOUR FUTURE.</span>
          <h1>
            Save today.
            <br />
            Build tomorrow.
          </h1>

          <p>
            Every financial goal starts somewhere. Explore MUKI SACCO's
            savings and investment products and find an option that fits
            the future you want to build.
          </p>

          <div className="si-hero-actions">
            <a href="#savings-products" className="si-btn-primary">
              Explore Savings <ArrowRight size={18} />
            </a>
            <a href="#investment-products" className="si-btn-outline">
              Explore Investments
            </a>
          </div>

          <div className="si-trust-note">
            <ShieldCheck size={19} />
            <span>Plan wisely. Save consistently. Grow with purpose.</span>
          </div>
        </div>

        <div className="si-hero-visual">
          <div className="si-visual-orbit si-orbit-one" />
          <div className="si-visual-orbit si-orbit-two" />

          <div className="si-visual-main">
            <div className="si-visual-icon">
              <Sprout size={55} strokeWidth={1.5} />
            </div>
            <span>Your goals start here</span>
            <strong>A future worth saving for.</strong>
            <div className="si-growth-line">
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
            </div>
          </div>

          <div className="si-floating-label si-floating-top">
            <PiggyBank size={21} />
            <div>
              <strong>Save</strong>
              <span>Build your habit</span>
            </div>
          </div>

          <div className="si-floating-label si-floating-bottom">
            <TrendingUp size={21} />
            <div>
              <strong>Invest</strong>
              <span>Plan your future</span>
            </div>
          </div>
        </div>
      </section>

      <section className="si-intro">
        <span className="si-eyebrow">FIND YOUR FINANCIAL PATH</span>
        <h2>Two ways to move forward</h2>
        <p>
          Whether you are putting money aside for a personal goal or exploring
          longer-term investments, start by understanding the products
          available to you.
        </p>
      </section>

      <section className="si-product-section" id="savings-products">
        <div className="si-section-heading">
          <div>
            <span className="si-eyebrow">SAVE WITH PURPOSE</span>
            <h2>Savings Accounts</h2>
            <p>Make room for the goals that matter to you.</p>
          </div>
          <span className="si-count">07 PRODUCTS</span>
        </div>

        <div className="si-grid">
          {savingsProducts.map((product) => (
            <ProductCard
              key={product.number}
              product={product}
              category="savings"
            />
          ))}
        </div>
      </section>

      <section className="si-investment-section" id="investment-products">
        <div className="si-section-heading">
          <div>
            <span className="si-eyebrow">THINK LONG TERM</span>
            <h2>Savings & Investment</h2>
            <p>Explore ways to build your financial future through MUKI SACCO.</p>
          </div>
          <span className="si-count">03 PRODUCTS</span>
        </div>

        <div className="si-grid si-investment-grid">
          {investmentProducts.map((product) => (
            <ProductCard
              key={product.number}
              product={product}
              category="investment"
            />
          ))}
        </div>
      </section>

      <section className="si-cta">
        <div className="si-cta-icon">
          <HeartHandshake size={30} />
        </div>
        <div className="si-cta-copy">
          <span className="si-eyebrow">TAKE THE NEXT STEP</span>
          <h2>Not sure which product suits you?</h2>
          <p>
            Contact MUKI SACCO to confirm eligibility, current rates,
            minimum requirements and the terms of each product.
          </p>
        </div>
        <Link to="/contact" className="si-btn-primary">
          Talk to MUKI <ArrowRight size={18} />
        </Link>
      </section>

      <div className="si-back-home">
        <Link to="/">← Back to Home</Link>
      </div>
    </main>
  );
}
