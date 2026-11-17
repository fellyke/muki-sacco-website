
import { useState } from "react";

import {
  ArrowRight,
  Smartphone,
  CreditCard,
  Wallet,
  ShieldCheck,
  Copy,
  CheckCircle2,
  Globe,
  ArrowLeftRight,
} from "lucide-react";

import "./digitalbanking.css";

const services = [
  {
    number: "01",
    title: "M-Pesa Paybill",
    category: "Paybill",
    subtitle: "Deposit money with ease",
    image:
      "https://mukisacco.co.ke/wp-content/uploads/2022/08/Paybill-469988.jpg",
    description:
      "Deposit money into your MUKI SACCO account directly from M-Pesa without visiting a branch.",
    features: [
      "Open M-Pesa",
      "Select Lipa na M-Pesa, then Paybill",
      "Enter business number 469988",
      "Use your national ID number as the account number",
    ],
    icon: Wallet,
  },

  {
    number: "02",
    title: "MUKI SACCO Mobile App",
    category: "Mobile Banking",
    subtitle: "Your SACCO in your pocket",
    image:
      "https://play-lh.googleusercontent.com/KHxcJ3B3mZIwv_9NjaUOyfOxm7q7t0cRKwytUGzhxjuOLprcsyJf7yA_iLPTvQ2GFa-Vy1rRd4_FuhWPyJF2YgE%3Dw526-h296",
    description:
      "Manage your SACCO finances from your smartphone using the official MUKI SACCO app.",
    features: [
      "Check account balances and statements",
      "Apply for loans",
      "Transfer money between SACCO accounts",
      "View loan repayment information",
    ],
    action: "Get the MUKI SACCO app",
    link: "https://play.google.com/store/apps/details?id=com.cloudpesa.muki_sacco",
    icon: Smartphone,
  },

  {
    number: "03",
    title: "MCo-op Cash",
    category: "Mobile Banking",
    subtitle: "Mobile banking by Co-operative Bank",
    image:
      "https://images.unsplash.com/photo-1512499617640-c74ae3a79d37?auto=format&fit=crop&w=1000&q=85",
    description:
      "MCo-op Cash is a Co-operative Bank mobile banking service. Confirm whether it supports your intended transactions.",
    features: [
      "Access supported mobile banking services",
      "Make supported transfers and payments",
      "Use the available mobile banking options",
      "Confirm eligibility with the relevant institution",
    ],
    icon: Wallet,
  },

  {
    number: "04",
    title: "ATM Services",
    category: "ATM & Cards",
    subtitle: "Access your money conveniently",
    image:
      "https://images.unsplash.com/photo-1601597111158-2fceff292cdc?auto=format&fit=crop&w=1000&q=85",
    description:
      "Learn about ATM access and supported card services available to MUKI SACCO members.",
    features: [
      "Access supported ATM transactions",
      "Check supported ATM locations",
      "Confirm card eligibility and activation requirements",
      "Ask about applicable charges and transaction limits",
    ],
    icon: CreditCard,
  },

  {
    number: "05",
    title: "USSD Mobile Banking",
    category: "*850#",
    subtitle: "Banking at your fingertips",
    image: "/images/ussd-mobile-banking.jpg",
    description:
      "Access mobile banking services directly from your phone using the USSD code *850#.",
    features: [
      "Open the phone dialer",
      "Dial *850#",
      "Follow the on-screen menu",
      "Select the service you need",
      "Follow the prompts to complete your transaction",
    ],
    action: "Dial *850#",
    link: "tel:*850%23",
    icon: Smartphone,
  },

  {
    number: "06",
    title: "Internet Banking",
    category: "Online Banking",
    subtitle: "Bank conveniently, securely and from wherever you are",
    image: "/images/internet-banking.jpg",
    description:
      "MUKI SACCO Internet Banking gives you easy access to your account and allows you to carry out banking transactions online without having to visit our branches.",
    features: [
      "Check Account Balance",
      "Send to M-Pesa",
      "Buy Airtime",
      "Paybill / Till",
      "Buy M-Pesa Float",
      "Fund Transfer",
      "PesaLink",
      "Withdraw Cash",
      "Utility Payments",
    ],
    icon: Globe,
  },
  {
  number: "07",
  title: "Fund Transfer (RTGS)",
  category: "Online Banking",
  subtitle: "Fast and secure high-value transfers",
  image: "/images/rtgs-fund-transfer.jpg",
  description:
    "Members can transfer money electronically from other banks to their MUKI SACCO accounts through Real Time Gross Settlement (RTGS).",

  features: [
    "Ideal for transferring large amounts and high-value transactions",
    "Safe and secure method of funds transfer",
    "Fast transactions carried out on a real-time basis",
    "Transfer funds across geographical boundaries",
    "Convenient transfers from wherever you are",
  ],

  icon: ArrowLeftRight,
},
];

const categories = [
  {
    name: "All Services",
    icon: Wallet,
  },
  {
    name: "Mobile Banking",
    icon: Smartphone,
  },
  {
    name: "ATM & Cards",
    icon: CreditCard,
  },
  {
    name: "*850#",
    icon: Smartphone,
  },
  {
    name: "Paybill",
    icon: Wallet,
  },
  {
    name: "Online Banking",
    icon: Globe,
  },
];

export default function DigitalBanking() {
  const [copied, setCopied] = useState(false);

  const [activeCategory, setActiveCategory] =
    useState("All Services");

  async function copyPaybill() {
    try {
      await navigator.clipboard.writeText("469988");

      setCopied(true);

      window.setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch {
      window.prompt(
        "Copy the MUKI SACCO Paybill number:",
        "469988"
      );
    }
  }

  const filteredServices =
    activeCategory === "All Services"
      ? services
      : services.filter(
          (service) => service.category === activeCategory
        );

  return (
    <main className="db-page">

      {/* HERO SECTION */}

      <section className="db-hero">

        <div className="db-hero-content">

          <span className="db-eyebrow">
            BANKING WITHOUT BOUNDARIES
          </span>

          <h1>
            Bank smarter.
            <br />
            Live better.
          </h1>

          <p>
            Discover convenient ways to access your MUKI SACCO
            services, make deposits and manage your finances.
          </p>

          <a
            href="#digital-services"
            className="db-primary-btn"
          >
            Explore Digital Services
            <ArrowRight size={18} />
          </a>

          <div className="db-hero-note">

            <ShieldCheck size={18} />

            <span>
              Always use official banking channels.
            </span>

          </div>

        </div>

        <div className="db-hero-image">

          <img
            src="https://mukisacco.co.ke/wp-content/uploads/2022/08/Mobile-Banking.jpg"
            alt="Mobile banking"
            onError={(event) => {
              event.currentTarget.style.display = "none";
            }}
          />

          <div className="db-floating-card">

            <Smartphone size={24} />

            <div>
              <strong>Bank on the go</strong>

              <span>
                Convenience at your fingertips
              </span>
            </div>

          </div>

        </div>

      </section>

      {/* INTRO SECTION */}

      <section
        className="db-intro"
        id="digital-services"
      >

        <span className="db-eyebrow">
          OUR DIGITAL CHANNELS
        </span>

        <h2>Banking that moves with you</h2>

        <p>
          Explore convenient ways to access your MUKI SACCO
          services through mobile banking, ATM services,
          USSD and M-Pesa.
        </p>

      </section>

      {/* CATEGORY FILTERS */}

      <section className="db-categories">

        <div className="db-category-heading">

          <span className="db-eyebrow">
            FIND YOUR SERVICE
          </span>

          <h2>Explore by category</h2>

          <p>
            Select your preferred banking channel
            to explore available services.
          </p>

        </div>

        <div className="db-category-buttons">

          {categories.map((category) => {
            const Icon = category.icon;

            return (
              <button
                key={category.name}
                type="button"
                className={
                  activeCategory === category.name
                    ? "db-category-btn active"
                    : "db-category-btn"
                }
                onClick={() =>
                  setActiveCategory(category.name)
                }
              >

                <Icon size={18} />

                <span>{category.name}</span>

              </button>
            );
          })}

        </div>

        <div className="db-results-count">

          Showing {filteredServices.length}{" "}

          {filteredServices.length === 1
            ? "service"
            : "services"}

        </div>

      </section>

      {/* DIGITAL BANKING SERVICES */}

      <section className="db-services">

        {filteredServices.map((service) => {
          const Icon = service.icon;

          return (
            <article
              className="db-service-card"
              key={service.number}
            >

              <div className="db-image-wrap">

                <img
                  src={service.image}
                  alt={service.title}
                  loading="lazy"
                  onError={(event) => {
                    event.currentTarget.style.display = "none";
                  }}
                />

                <span className="db-number">
                  {service.number}
                </span>

              </div>

              <div className="db-card-content">

                <div className="db-card-icon">
                  <Icon size={23} />
                </div>

                <p className="db-subtitle">
                  {service.subtitle}
                </p>

                <h3>{service.title}</h3>

                <p className="db-description">
                  {service.description}
                </p>

                {/* PAYBILL NUMBER */}

                {service.number === "01" && (

                  <div className="db-paybill">

                    <div>
                      <span>Business number</span>
                      <strong>469988</strong>
                    </div>

                    <button
                      type="button"
                      onClick={copyPaybill}
                      aria-label="Copy Paybill number"
                    >

                      {copied ? (
                        <CheckCircle2 size={18} />
                      ) : (
                        <Copy size={18} />
                      )}

                      {copied ? "Copied" : "Copy"}

                    </button>

                  </div>

                )}

                {/* SERVICE FEATURES */}

                <ul className="db-feature-list">

                  {service.features.map((feature) => (

                    <li key={feature}>

                      <CheckCircle2 size={17} />

                      <span>{feature}</span>

                    </li>

                  ))}

                </ul>

                {/* MCO-OP DISCLAIMER */}

                {service.number === "03" && (

                  <p className="db-disclaimer">

                    MCo-op Cash is a Co-operative Bank service.
                    Confirm with MUKI SACCO whether it is
                    available for your account.

                  </p>

                )}

                {/* SERVICE ACTIONS */}

                {service.action && service.link && (

                  <a
                    className="db-card-link"
                    href={service.link}
                    target={
                      service.number === "05"
                        ? undefined
                        : "_blank"
                    }
                    rel={
                      service.number === "05"
                        ? undefined
                        : "noopener noreferrer"
                    }
                  >

                    {service.action}

                    <ArrowRight size={17} />

                  </a>

                )}

              </div>

            </article>
          );
        })}

      </section>

      {/* SECURITY SECTION */}

      <section className="db-security">

        <div className="db-security-icon">
          <ShieldCheck size={30} />
        </div>

        <div className="db-security-content">

          <h2>Your security matters</h2>

          <p>
            Never share your M-Pesa PIN, banking PIN or
            password. Verify account details before sending
            money and contact MUKI SACCO if a transaction
            looks suspicious.
          </p>

        </div>

      </section>

    </main>
  );
}
