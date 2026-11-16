
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
  FileCheck,
  Fingerprint,
  ClipboardCheck,
  LockKeyhole,
  BadgeCheck,
} from "lucide-react";

import "./AppSelfRegistration.css";

const MUKI_APP_URL =
  "https://play.google.com/store/apps/details?id=com.cloudpesa.muki_sacco";

const requirements = [
  {
    icon: Phone,
    number: "01",
    title: "Registered Phone Number",
    description:
      "Have access to the mobile number registered with MUKI SACCO for verification during app registration.",
  },
  {
    icon: CreditCard,
    number: "02",
    title: "National ID",
    description:
      "Keep your National Identity Card nearby to provide the identity details requested by the application.",
  },
  {
    icon: Mail,
    number: "03",
    title: "Email Address",
    description:
      "Have access to a valid email address if requested during the registration process.",
  },
  {
    icon: Camera,
    number: "04",
    title: "Camera-enabled Smartphone",
    description:
      "Use a smartphone with a working camera for the required photo or biometric verification steps.",
  },
];

const registrationSteps = [
  {
    number: "01",
    icon: Download,
    title: "Download the MUKI App",
    description:
      "Visit Google Play Store, download the official MUKI SACCO mobile application and install it on your smartphone.",
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9?auto=format&fit=crop&w=900&q=85",
    alt: "Smartphone displaying a mobile application",
    note: "Install the official MUKI app",
  },
  {
    number: "02",
    icon: Smartphone,
    title: "Open Self Registration",
    description:
      "Open the application and select the self-registration option. Follow the instructions displayed on your screen.",
    image:
      "https://images.unsplash.com/photo-1556656793-08538906a9f8?auto=format&fit=crop&w=900&q=85",
    alt: "Mobile phone used for digital registration",
    note: "Select self registration",
  },
  {
    number: "03",
    icon: Phone,
    title: "Verify Your Phone Number",
    description:
      "Enter the phone number registered with MUKI SACCO and follow the instructions to verify it using the OTP sent to you.",
    image:
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=900&q=85",
    alt: "Person using a smartphone",
    note: "Complete OTP verification",
  },
  {
    number: "04",
    icon: CreditCard,
    title: "Confirm Your Identity",
    description:
      "Provide the requested National ID details. Ensure that the information you enter matches your official identification documents.",
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=900&q=85",
    alt: "Documents and paperwork on a desk",
    note: "Provide accurate ID details",
  },
  {
    number: "05",
    icon: Fingerprint,
    title: "Complete Verification",
    description:
      "Follow the application's instructions for any required photograph, biometric capture or additional verification.",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=85",
    alt: "Person using a digital device",
    note: "Follow verification instructions",
  },
  {
    number: "06",
    icon: FileCheck,
    title: "Review and Submit",
    description:
      "Carefully review the information provided in the application. Confirm that the details are correct before submitting.",
    image:
      "https://images.unsplash.com/photo-1554774853-b414d2a2f4e4?auto=format&fit=crop&w=900&q=85",
    alt: "Person reviewing information on a computer",
    note: "Check details before submission",
  },
  {
    number: "07",
    icon: ClipboardCheck,
    title: "Account Validation",
    description:
      "Your registration details may be reviewed by MUKI SACCO. Follow any further instructions or communication provided to complete the process.",
    image:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=900&q=85",
    alt: "Documents being reviewed on a desk",
    note: "Await registration confirmation",
  },
];

function AppSelfRegistration() {
  return (
    <main className="self-registration">

      {/* COMPACT HERO */}
      <section className="registration-hero">
        <div className="registration-container registration-hero-grid">

          <div className="registration-hero-content">
            <span className="registration-eyebrow">
              <span className="eyebrow-dot"></span>
              MUKI SACCO DIGITAL BANKING
            </span>

            <h1>
              Activate your
              <span> MUKI Mobile Banking.</span>
            </h1>

            <p>
              Register on the MUKI SACCO mobile application and
              follow the guided verification process to access
              digital banking services conveniently from your phone.
            </p>

            <div className="registration-hero-actions">
              <a
                href={MUKI_APP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="registration-primary-btn"
              >
                <Download size={18} />
                Download MUKI App
                <ArrowRight size={17} />
              </a>
            </div>

            <div className="registration-hero-trust">
              <span>
                <ShieldCheck size={17} />
                Guided registration
              </span>

              <span>
                <CheckCircle2 size={17} />
                Convenient digital access
              </span>
            </div>
          </div>

          {/* PHONE MOCKUP */}
          <div className="registration-hero-visual">
            <div className="hero-visual-glow"></div>

            <div className="registration-phone">
              <div className="registration-phone-speaker"></div>

              <div className="registration-phone-screen">

                <div className="phone-brand">
                  <img src="/logo.png" alt="MUKI SACCO logo" />
                  <span>MUKI SACCO</span>
                </div>

                <div className="phone-welcome">
                  <span>DIGITAL BANKING</span>
                  <h3>App Registration</h3>
                  <p>Set up your mobile access</p>
                </div>

                <div className="phone-progress">
                  <span className="phone-progress-active"></span>
                  <span></span>
                  <span></span>
                </div>

                <div className="phone-input">
                  <Phone size={15} />
                  <div>
                    <small>Registered phone number</small>
                    <strong>Enter phone number</strong>
                  </div>
                </div>

                <div className="phone-input">
                  <CreditCard size={15} />
                  <div>
                    <small>National ID</small>
                    <strong>Enter ID number</strong>
                  </div>
                </div>

                <div className="phone-input">
                  <Mail size={15} />
                  <div>
                    <small>Email address</small>
                    <strong>Enter email address</strong>
                  </div>
                </div>

                <div className="phone-continue">
                  Continue
                  <ArrowRight size={14} />
                </div>

                <div className="phone-secure">
                  <LockKeyhole size={12} />
                  Secure registration process
                </div>
              </div>
            </div>

            <div className="hero-floating-card">
              <div className="hero-floating-icon">
                <BadgeCheck size={22} />
              </div>

              <div>
                <strong>Easy app setup</strong>
                <span>Follow the registration steps</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* REQUIREMENTS */}
      <section className="registration-section requirements-section">
        <div className="registration-container">

          <div className="registration-heading">
            <span className="section-label">BEFORE YOU BEGIN</span>
            <h2>What you need for registration</h2>
            <p>
              Prepare the following details and items before
              registering on the MUKI SACCO mobile application.
            </p>
          </div>

          <div className="requirements-grid">
            {requirements.map((item) => {
              const Icon = item.icon;

              return (
                <article className="requirement-card" key={item.number}>
                  <div className="requirement-card-top">
                    <div className="requirement-icon">
                      <Icon size={24} />
                    </div>

                    <span className="requirement-index">
                      {item.number}
                    </span>
                  </div>

                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              );
            })}
          </div>

        </div>
      </section>

      {/* REGISTRATION STEPS */}
      <section className="registration-section steps-section">
        <div className="registration-container">

          <div className="registration-heading">
            <span className="section-label">STEP-BY-STEP GUIDE</span>
            <h2>How to register on the MUKI App</h2>
            <p>
              Follow these instructions to complete your MUKI SACCO
              mobile application registration.
            </p>
          </div>

          <div className="registration-steps-grid">
            {registrationSteps.map((step) => {
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
                        <Icon size={20} />
                      </div>

                      <span className="step-label">
                        STEP {step.number}
                      </span>
                    </div>

                    <h3>{step.title}</h3>
                    <p>{step.description}</p>

                    <div className="step-card-footer">
                      <CheckCircle2 size={15} />
                      <span>{step.note}</span>
                    </div>

                  </div>
                </article>
              );
            })}
          </div>

          {/* SECURITY NOTICE */}
          <div className="registration-notice">

            <div className="notice-icon">
              <ShieldCheck size={27} />
            </div>

            <div className="notice-content">
              <h3>Keep your account information secure</h3>

              <p>
                Only download the official MUKI SACCO mobile
                application. Never share your OTP, PIN, password
                or other confidential banking information with
                anyone. MUKI SACCO will not ask you to disclose
                your secret verification codes.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* FINAL CALL TO ACTION */}
      <section className="registration-cta">
        <div className="registration-container">

          <div className="cta-content">

            <div className="cta-icon">
              <Smartphone size={30} />
            </div>

            <span className="section-label">
              MUKI DIGITAL BANKING
            </span>

            <h2>Access MUKI SACCO on your phone.</h2>

            <p>
              Download the official MUKI SACCO mobile application
              and follow the self-registration instructions to
              activate your mobile banking access.
            </p>

            <a
              href={MUKI_APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="registration-primary-btn"
            >
              <Download size={18} />
              Download MUKI App
              <ArrowRight size={17} />
            </a>

            <p className="cta-small">
              Pamoja Twajenga
            </p>

          </div>
        </div>
      </section>

    </main>
  );
}

export default AppSelfRegistration;
