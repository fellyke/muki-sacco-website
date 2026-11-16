
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
} from "lucide-react";

import "./membership.css";

// Replace these with your EmailJS credentials
const SERVICE_ID = "YOUR_SERVICE_ID";
const TEMPLATE_ID = "YOUR_TEMPLATE_ID";
const PUBLIC_KEY = "YOUR_PUBLIC_KEY";

export default function Membership() {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");

  const [form, setForm] = useState({
    fullName: "",
    phone: "",
    email: "",
    category: "",
    occupation: "",
    consent: false,
  });

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
        {
          publicKey: PUBLIC_KEY,
        }
      );

      setSubmitted(true);

      setForm({
        fullName: "",
        phone: "",
        email: "",
        category: "",
        occupation: "",
        consent: false,
      });

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

  return (
    <main className="membership-page">

      {/* HERO SECTION */}
      <section className="membership-hero">
        <div className="membership-container">

          <span className="membership-eyebrow">
            <ShieldCheck size={17} />
            YOUR FINANCIAL JOURNEY STARTS HERE
          </span>

          <h1>
            Become a MUKI SACCO
            <span> Member</span>
          </h1>

          <p>
            Take the first step towards your financial goals.
            Submit your membership enquiry and let our team
            guide you through the official application process.
          </p>

        </div>
      </section>

      {/* MEMBERSHIP CONTENT */}
      <section className="membership-content">
        <div className="membership-container membership-layout">

          {/* LEFT INFORMATION */}
          <aside className="membership-info">

            <span className="membership-label">
              MEMBERSHIP APPLICATION
            </span>

            <h2>Let's get to know you.</h2>

            <p>
              Complete the form with accurate information.
              MUKI SACCO staff can guide you on eligibility,
              required documents, fees and the next steps.
            </p>

            <div className="membership-info-item">
              <div>
                <UserRound size={21} />
              </div>

              <section>
                <h3>Your details</h3>
                <p>
                  Provide your name and contact information.
                </p>
              </section>
            </div>

            <div className="membership-info-item">
              <div>
                <BriefcaseBusiness size={21} />
              </div>

              <section>
                <h3>Your membership category</h3>
                <p>
                  Select the category that best describes you.
                </p>
              </section>
            </div>

            <div className="membership-info-item">
              <div>
                <ShieldCheck size={21} />
              </div>

              <section>
                <h3>Privacy matters</h3>
                <p>
                  Your information should be handled securely
                  and only for the stated application purpose.
                </p>
              </section>
            </div>

          </aside>

          {/* FORM CARD */}
          <div className="membership-form-card">

            {submitted ? (

              <div className="membership-success">

                <CheckCircle2 size={55} />

                <h2>Enquiry submitted successfully!</h2>

                <p>
                  Thank you for contacting MUKI SACCO.
                  Your membership enquiry has been sent to our
                  team. They can follow up using the contact
                  details you provided.
                </p>

                <button
                  type="button"
                  className="membership-button"
                  onClick={() => {
                    setSubmitted(false);
                    setMessage("");
                    setMessageType("");
                  }}
                >
                  Submit another enquiry
                </button>

              </div>

            ) : (

              <>
                <div className="membership-form-heading">
                  <h2>Membership enquiry</h2>
                  <p>Fields marked * are required.</p>
                </div>

                <form onSubmit={handleSubmit}>

                  {/* FULL NAME */}
                  <div className="membership-field">
                    <label htmlFor="fullName">
                      Full name *
                    </label>

                    <div className="membership-input-wrap">
                      <UserRound size={18} />

                      <input
                        id="fullName"
                        name="fullName"
                        value={form.fullName}
                        onChange={handleChange}
                        placeholder="Enter your full name"
                        autoComplete="name"
                        required
                      />
                    </div>
                  </div>

                  {/* PHONE AND EMAIL */}
                  <div className="membership-form-row">

                    <div className="membership-field">
                      <label htmlFor="phone">
                        Phone number *
                      </label>

                      <div className="membership-input-wrap">
                        <Phone size={18} />

                        <input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={form.phone}
                          onChange={handleChange}
                          placeholder="07XX XXX XXX"
                          autoComplete="tel"
                          pattern="(\+254|0)[0-9]{9}"
                          title="Enter a Kenyan phone number, e.g. 0712345678 or +254712345678"
                          required
                        />
                      </div>
                    </div>

                    <div className="membership-field">
                      <label htmlFor="email">
                        Email address *
                      </label>

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

                  {/* MEMBERSHIP CATEGORY */}
                  <div className="membership-field">
                    <label htmlFor="category">
                      Membership category *
                    </label>

                    <select
                      id="category"
                      name="category"
                      value={form.category}
                      onChange={handleChange}
                      required
                    >
                      <option value="">
                        Select a category
                      </option>

                      <option value="individual">
                        Individual
                      </option>

                      <option value="business">
                        Business or institution
                      </option>

                      <option value="other">
                        Other / not sure
                      </option>
                    </select>
                  </div>

                  {/* OCCUPATION */}
                  <div className="membership-field">
                    <label htmlFor="occupation">
                      Occupation or business
                    </label>

                    <input
                      id="occupation"
                      name="occupation"
                      value={form.occupation}
                      onChange={handleChange}
                      placeholder="e.g. Teacher, farmer, business owner"
                    />
                  </div>

                  {/* CONSENT */}
                  <label className="membership-consent">
                    <input
                      type="checkbox"
                      name="consent"
                      checked={form.consent}
                      onChange={handleChange}
                      required
                    />

                    <span>
                      I consent to MUKI SACCO using these details
                      to respond to my membership enquiry, subject
                      to its privacy notice. *
                    </span>
                  </label>

                  {/* FEEDBACK MESSAGE */}
                  {message && (
                    <p
                      className={`membership-message ${messageType}`}
                      role="status"
                    >
                      {message}
                    </p>
                  )}

                  {/* SUBMIT BUTTON */}
                  <button
                    type="submit"
                    className="membership-button"
                    disabled={sending}
                  >
                    {sending ? "Sending enquiry..." : "Submit enquiry"}

                    <ArrowRight size={18} />
                  </button>

                </form>
              </>

            )}

          </div>

        </div>
      </section>

    </main>
  );
}
