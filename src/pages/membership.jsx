
import { useState } from "react";
import emailjs from "@emailjs/browser";

import {
  UserRound,
  Mail,
  Phone,
  BriefcaseBusiness,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Calculator,
  Wallet,
  TrendingUp,
  Download,
  FileText,
  Users,
} from "lucide-react";

import "./membership.css";

// Add your actual EmailJS credentials
const SERVICE_ID = "YOUR_SERVICE_ID";
const TEMPLATE_ID = "YOUR_TEMPLATE_ID";
const PUBLIC_KEY = "YOUR_PUBLIC_KEY";

// Illustrative figures. Confirm official requirements with MUKI SACCO.
const SHARE_VALUE = 100;
const MINIMUM_SHARE_CAPITAL = 15000;

const initialForm = {
  fullName: "",
  phone: "",
  email: "",
  category: "",
  occupation: "",
  consent: false,
};

export default function Membership() {
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");
  const [shareAmount, setShareAmount] = useState("15000");

  const amount = Math.max(0, Number(shareAmount) || 0);
  const numberOfShares = Math.floor(amount / SHARE_VALUE);
  const remainingAmount = amount % SHARE_VALUE;
  const meetsMinimum = amount >= MINIMUM_SHARE_CAPITAL;

  function handleChange(event) {
    const { name, value, checked, type } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  async function handleSubmit(event) {
    event.preventDefault();

    if (sending) return;

    if (
      SERVICE_ID === "YOUR_SERVICE_ID" ||
      TEMPLATE_ID === "YOUR_TEMPLATE_ID" ||
      PUBLIC_KEY === "YOUR_PUBLIC_KEY"
    ) {
      setMessage(
        "The enquiry form is not configured yet. Please contact MUKI SACCO directly."
      );
      setMessageType("error");
      return;
    }

    setSending(true);
    setMessage("");
    setMessageType("");

    const templateParams = {
      from_name: form.fullName,
      from_email: form.email,
      phone: form.phone,
      category: form.category,
      occupation: form.occupation || "Not provided",
      consent: form.consent ? "Yes" : "No",
      to_email: "info@mukisacco.co.ke",
    };

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        templateParams,
        { publicKey: PUBLIC_KEY }
      );

      setSubmitted(true);
      setForm(initialForm);
      setMessage("Your enquiry has been sent successfully!");
      setMessageType("success");
    } catch (error) {
      console.error("EmailJS error:", error);

      setMessage(
        "Unable to send your enquiry. Please try again or contact MUKI SACCO directly."
      );
      setMessageType("error");
    } finally {
      setSending(false);
    }
  }

  function resetForm() {
    setSubmitted(false);
    setMessage("");
    setMessageType("");
  }

  return (
    <main className="membership-page">

      {/* COMPACT HERO */}
      <section className="membership-hero">
        <div className="membership-container membership-hero-content">
          <div className="membership-hero-copy">
            <span className="membership-eyebrow">
              <ShieldCheck size={16} />
              MEMBERSHIP
            </span>

            <h1>
              Become part of <span>MUKI SACCO.</span>
            </h1>

            <p>
              Take the first step towards your financial goals.
              Send us an enquiry and our team will guide you.
            </p>

            <a href="#membership-application" className="membership-hero-button">
              Apply for membership
              <ArrowRight size={17} />
            </a>
          </div>

          <div className="membership-hero-side">
            <div className="hero-side-icon">
              <Users size={30} />
            </div>
            <strong>Pamoja Twajenga</strong>
            <span>Growing stronger together.</span>
          </div>
        </div>
      </section>

      {/* APPLICATION */}
      <section className="membership-content" id="membership-application">
        <div className="membership-container membership-layout">

          <aside className="membership-info">
            <span className="membership-label">GET STARTED</span>
            <h2>Your journey starts here.</h2>

            <p className="membership-intro">
              Tell us a little about yourself. Our team will help
              you understand the membership requirements and next steps.
            </p>

            <div className="membership-info-list">
              <div className="membership-info-item">
                <div className="membership-info-icon">
                  <UserRound size={20} />
                </div>
                <div>
                  <h3>Your information</h3>
                  <p>Share your contact and personal details.</p>
                </div>
              </div>

              <div className="membership-info-item">
                <div className="membership-info-icon">
                  <BriefcaseBusiness size={20} />
                </div>
                <div>
                  <h3>Your category</h3>
                  <p>Choose the membership category that fits you.</p>
                </div>
              </div>

              <div className="membership-info-item">
                <div className="membership-info-icon">
                  <ShieldCheck size={20} />
                </div>
                <div>
                  <h3>Personal assistance</h3>
                  <p>Our team can guide you through the process.</p>
                </div>
              </div>
            </div>

            <div className="membership-contact-note">
              <h3>Need help?</h3>
              <p>Talk to the MUKI SACCO team.</p>

              <a href="tel:0711794957">
                <Phone size={16} />
                0711 794 957
              </a>

              <a href="mailto:info@mukisacco.co.ke">
                <Mail size={16} />
                info@mukisacco.co.ke
              </a>
            </div>
          </aside>

          {/* FORM CARD */}
          <div className="membership-form-card">
            {submitted ? (
              <div className="membership-success">
                <div className="membership-success-icon">
                  <CheckCircle2 size={46} />
                </div>

                <span className="membership-label">ENQUIRY RECEIVED</span>
                <h2>Thank you for reaching out!</h2>

                <p>
                  Your membership enquiry has been sent to MUKI SACCO.
                  Our team can now follow up with you.
                </p>

                <button
                  type="button"
                  className="membership-button"
                  onClick={resetForm}
                >
                  Submit another enquiry
                  <ArrowRight size={17} />
                </button>
              </div>
            ) : (
              <>
                <div className="membership-form-heading">
                  <div>
                    <span className="membership-form-kicker">
                      MUKI SACCO MEMBERSHIP
                    </span>
                    <h2>Membership enquiry</h2>
                    <p>Complete the details below to get started.</p>
                  </div>
                  <div className="form-heading-icon">
                    <FileText size={23} />
                  </div>
                </div>

                <form onSubmit={handleSubmit}>
                  <div className="membership-field">
                    <label htmlFor="fullName">Full name *</label>
                    <div className="membership-input-wrap">
                      <UserRound size={18} />
                      <input
                        id="fullName"
                        name="fullName"
                        type="text"
                        value={form.fullName}
                        onChange={handleChange}
                        placeholder="Enter your full name"
                        autoComplete="name"
                        required
                      />
                    </div>
                  </div>

                  <div className="membership-form-row">
                    <div className="membership-field">
                      <label htmlFor="phone">Phone number *</label>
                      <div className="membership-input-wrap">
                        <Phone size={18} />
                        <input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={form.phone}
                          onChange={handleChange}
                          placeholder="0712 345 678"
                          autoComplete="tel"
                          pattern="(\+254|0)[0-9]{9}"
                          title="Enter a Kenyan phone number, e.g. 0712345678 or +254712345678"
                          required
                        />
                      </div>
                    </div>

                    <div className="membership-field">
                      <label htmlFor="email">Email address *</label>
                      <div className="membership-input-wrap">
                        <Mail size={18} />
                        <input
                          id="email"
                          name="email"
                          type="email"
                          value={form.email}
                          onChange={handleChange}
                          placeholder="you@example.com"
                          autoComplete="email"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div className="membership-field">
                    <label htmlFor="category">Membership category *</label>
                    <select
                      id="category"
                      name="category"
                      value={form.category}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select a category</option>
                      <option value="individual">Individual</option>
                      <option value="business">Business or institution</option>
                      <option value="other">Other / not sure</option>
                    </select>
                  </div>

                  <div className="membership-field">
                    <label htmlFor="occupation">Occupation or business</label>
                    <input
                      id="occupation"
                      name="occupation"
                      type="text"
                      value={form.occupation}
                      onChange={handleChange}
                      placeholder="e.g. Teacher, farmer, business owner"
                    />
                  </div>

                  <label className="membership-consent">
                    <input
                      type="checkbox"
                      name="consent"
                      checked={form.consent}
                      onChange={handleChange}
                      required
                    />
                    <span>
                      I consent to MUKI SACCO using these details to respond
                      to my membership enquiry, subject to its privacy notice. *
                    </span>
                  </label>

                  {message && (
                    <p
                      className={`membership-message ${messageType}`}
                      role="status"
                    >
                      {message}
                    </p>
                  )}

                  <button
                    type="submit"
                    className="membership-button"
                    disabled={sending}
                  >
                    {sending ? "Sending enquiry..." : "Send membership enquiry"}
                    <ArrowRight size={17} />
                  </button>

                  <p className="membership-form-footnote">
                    This is an enquiry, not final SACCO registration.
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      </section>

      {/* SHARE CAPITAL AND CALCULATOR */}
      <section className="membership-shares">
        <div className="membership-container">
          <div className="shares-heading">
            <span className="membership-label">UNDERSTANDING SHARES</span>
            <h2>Know how share capital works.</h2>
            <p>
              Use the calculator to estimate the number of shares
              represented by a contribution amount.
            </p>
          </div>

          <div className="shares-grid">
            <div className="shares-information">
              <div className="shares-item">
                <div className="shares-icon">
                  <Wallet size={22} />
                </div>
                <div>
                  <span>Illustrative value per share</span>
                  <h3>KSh {SHARE_VALUE.toLocaleString("en-KE")}</h3>
                </div>
              </div>

              <div className="shares-item">
                <div className="shares-icon">
                  <TrendingUp size={22} />
                </div>
                <div>
                  <span>Illustrative minimum share capital</span>
                  <h3>
                    KSh {MINIMUM_SHARE_CAPITAL.toLocaleString("en-KE")}
                  </h3>
                </div>
              </div>

              <div className="shares-description">
                <h3>What are shares?</h3>
                <p>
                  Shares represent a member's ownership interest in a
                  cooperative society. They are different from ordinary
                  savings or deposits.
                </p>
                <p>
                  Contact MUKI SACCO to confirm current share capital
                  requirements, payment procedures and membership rules.
                </p>
              </div>
            </div>

            <div className="shares-calculator">
              <div className="calculator-heading">
                <div className="calculator-icon">
                  <Calculator size={23} />
                </div>
                <div>
                  <h3>Share calculator</h3>
                  <p>Estimate your number of shares.</p>
                </div>
              </div>

              <label htmlFor="shareAmount">
                Contribution amount (KSh)
              </label>

              <div className="calculator-input-wrap">
                <span>KSh</span>
                <input
                  id="shareAmount"
                  type="number"
                  min="0"
                  step="100"
                  value={shareAmount}
                  onChange={(event) => setShareAmount(event.target.value)}
                  placeholder="Enter amount"
                />
              </div>

              <div className="calculator-result">
                <span>Estimated number of shares</span>
                <strong>{numberOfShares.toLocaleString("en-KE")}</strong>
                <small>
                  At KSh {SHARE_VALUE.toLocaleString("en-KE")} per share
                </small>
              </div>

              <div className="calculator-summary">
                <div>
                  <span>Amount entered</span>
                  <strong>KSh {amount.toLocaleString("en-KE")}</strong>
                </div>
                <div>
                  <span>Amount remaining</span>
                  <strong>KSh {remainingAmount.toLocaleString("en-KE")}</strong>
                </div>
              </div>

              <p className={`calculator-note ${meetsMinimum ? "qualified" : "not-qualified"}`}>
                {meetsMinimum
                  ? "This amount meets the illustrative minimum shown above."
                  : `Below the illustrative minimum of KSh ${MINIMUM_SHARE_CAPITAL.toLocaleString("en-KE")}.`}
              </p>

              <p className="calculator-disclaimer">
                For illustration only. This is not an official contribution
                quotation or confirmation of membership eligibility.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* DOWNLOAD FORM */}
      <section className="membership-download">
        <div className="membership-container">
          <div className="membership-download-card">
            <div className="membership-download-content">
              <div className="download-icon">
                <FileText size={27} />
              </div>

              <div className="download-text">
                <span className="membership-label">MEMBERSHIP DOCUMENTS</span>
                <h2>Prefer a physical application?</h2>
                <p>
                  Download the MUKI SACCO membership application form,
                  complete it and follow the SACCO's submission instructions.
                </p>
              </div>
            </div>

            <a
              href="/forms/muki-membership-form.pdf"
              className="membership-download-button"
              download="MUKI-SACCO-Membership-Form.pdf"
            >
              <Download size={18} />
              Download form
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
