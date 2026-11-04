
import {
  Smartphone,
  Phone,
  CreditCard,
  Mail,
  Camera,
  CheckCircle2,
  ShieldCheck,
  ArrowRight,
  Download,
  UserRound,
  FileCheck,
  Fingerprint,
  ClipboardCheck,
} from "lucide-react";

import "./AppSelfRegistration.css";

const MUKI_APP_URL =
  "https://play.google.com/store/apps/details?id=com.cloudpesa.muki_sacco";

const requirements = [
  {
    icon: Phone,
    title: "Active Phone Number",
    description:
      "Keep your phone nearby. An OTP may be sent to your number to verify your identity.",
  },
  {
    icon: CreditCard,
    title: "National ID",
    description:
      "Have your original National ID ready. You may need to enter the ID number and upload a clear photo.",
  },
  {
    icon: Mail,
    title: "Email Address",
    description:
      "Provide a valid email address that you regularly access for registration updates and communication.",
  },
  {
    icon: Camera,
    title: "Camera-enabled Device",
    description:
      "Use a device with a working camera for any requested ID, facial image or signature capture.",
  },
];

const steps = [
  {
    number: "01",
    icon: Smartphone,
    title: "Initiate Registration",
    description:
      "Open the MUKI SACCO app and select Self-Registration. Enter your phone number, National ID number and email address, then submit.",
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=900&q=80",
    alt: "Smartphone representing mobile registration",
  },
  {
    number: "02",
    icon: Phone,
    title: "OTP Verification",
    description:
      "Check your phone for the one-time password (OTP). Enter the verification code in the app to confirm your phone number.",
    image:
      "https://images.unsplash.com/photo-1556656793-08538906a9f8?auto=format&fit=crop&w=900&q=80",
    alt: "Mobile phone used for OTP verification",
  },
  {
    number: "03",
    icon: CreditCard,
    title: "Identity Verification",
    description:
      "Follow the app's instructions to enter your National ID details and capture a clear image of your ID card if requested.",
    image:
      "https://images.unsplash.com/photo-1582005450386-52b25f82d9bb?auto=format&fit=crop&w=900&q=80",
    alt: "Identity document verification",
  },
  {
    number: "04",
    icon: UserRound,
    title: "Additional Personal Details",
    description:
      "Fill in the requested information, including your title, occupation, address, city, next of kin, introducer's name and preferred branch.",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=900&q=80",
    alt: "Reviewing registration information",
  },
  {
    number: "05",
    icon: Fingerprint,
    title: "Biometric Capture",
    description:
      "Follow the on-screen instructions for any required facial verification, biometric information and signature capture.",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80",
    alt: "Digital device used for biometric verification",
  },
  {
    number: "06",
    icon: ClipboardCheck,
    title: "Confirmation and Submission",
    description:
      "Review all the information you have provided. Confirm that your details are correct and submit your registration request.",
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=900&q=80",
    alt: "Reviewing financial paperwork",
  },
  {
    number: "07",
    icon: FileCheck,
    title: "Account Validation",
    description:
      "Your registration request proceeds to MUKI SACCO's account validation process. Wait for confirmation through the appropriate SACCO communication channel.",
    image:
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=900&q=80",
    alt: "Digital security and account validation",
  },
];

export default function AppSelfRegistration() {
  return (
    <main className="self-registration">

      {/* HERO */}
      <section className="registration-hero">
        <div className="registration-container registration-hero-grid">

          <div className="registration-hero-content">
            <span className="registration-eyebrow">
              <Smartphone size={16} />
              MUKI SACCO DIGITAL BANKING
            </span>

            <h1>
              Register for
              <span> Digital Banking</span>
              with Ease.
            </h1>

            <p>
              Get started with MUKI SACCO digital services.
              Follow our simple registration guide and learn
              what you need to access your account through
              the mobile application.
            </p>

            <div className="registration-hero-actions">
              <a
                href={MUKI_APP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="registration-primary-btn"
              >
                <Download size={19} />
                View MUKI SACCO App
                <ArrowRight size={18} />
              </a>
            </div>

            <div className="registration-hero-note">
              <ShieldCheck size={18} />
              <span>Simple, convenient and secure digital access.</span>
            </div>
          </div>

          <div className="registration-hero-visual">
            <div className="hero-image-frame">
              <img
                src="https://images.unsplash.com/photo-1512499617640-c74ae3a79d37?auto=format&fit=crop&w=1000&q=85"
                alt="Mobile phone representing digital banking"
              />

              <div className="hero-floating-card">
                <div className="hero-floating-icon">
                  <CheckCircle2 size={23} />
                </div>
                <div>
                  <strong>Digital Banking</strong>
                  <span>Access services conveniently</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* REQUIREMENTS */}
      <section className="registration-section requirements-section">
        <div className="registration-container">

          <div className="registration-heading">
            <span className="section-label">GET PREPARED</span>
            <h2>What You Need Before Registering</h2>
            <p>
              Make sure you have these essentials ready before
              beginning your MUKI SACCO app registration.
            </p>
          </div>

          <div className="requirements-grid">
            {requirements.map(({ icon: Icon, title, description }, index) => (
              <article className="requirement-card" key={title}>
                <div className="requirement-card-top">
                  <div className="requirement-icon">
                    <Icon size={25} />
                  </div>
                  <span className="requirement-index">
                    0{index + 1}
                  </span>
                </div>

                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>

        </div>
      </section>

      {/* REGISTRATION STEPS */}
      <section className="registration-section steps-section">
        <div className="registration-container">

          <div className="registration-heading">
            <span className="section-label">STEP-BY-STEP GUIDE</span>
            <h2>How to Register on the MUKI App</h2>
            <p>
              Follow these instructions to complete your
              self-registration process.
            </p>
          </div>

          <div className="registration-steps-grid">
            {steps.map((step) => {
              const Icon = step.icon;

              return (
                <article className="registration-step-card" key={step.number}>

                  <div className="step-image-wrapper">
                    <img
                      src={step.image}
                      alt={step.alt}
                      loading="lazy"
                    />

                    <span className="step-number">
                      {step.number}
                    </span>
                  </div>

                  <div className="step-card-content">

                    <div className="step-title-row">
                      <div className="step-icon">
                        <Icon size={21} />
                      </div>
                      <span className="step-label">STEP {step.number}</span>
                    </div>

                    <h3>{step.title}</h3>

                    <p>{step.description}</p>

                    <div className="step-card-footer">
                      <CheckCircle2 size={17} />
                      <span>Follow the app instructions</span>
                    </div>

                  </div>
                </article>
              );
            })}
          </div>

          {/* SECURITY NOTICE */}
          <div className="registration-notice">
            <div className="notice-icon">
              <ShieldCheck size={30} />
            </div>

            <div className="notice-content">
              <h3>Your Security Matters</h3>
              <p>
                Never share your OTP, passwords or confidential
                verification details with anyone. Only submit
                personal information through official MUKI SACCO
                channels.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* FINAL CTA */}
      <section className="registration-cta">
        <div className="registration-container cta-content">

          <div className="cta-icon">
            <Smartphone size={30} />
          </div>

          <span className="section-label">START YOUR DIGITAL JOURNEY</span>

          <h2>Ready to Get Started?</h2>

          <p>
            Access the MUKI SACCO mobile application and follow
            the self-registration instructions to get started.
          </p>

          <a
            href={MUKI_APP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="registration-primary-btn"
          >
            <Download size={19} />
            View MUKI SACCO App
            <ArrowRight size={18} />
          </a>

          <span className="cta-small">
            Registration is subject to MUKI SACCO account validation.
          </span>

        </div>
      </section>

    </main>
  );
}
