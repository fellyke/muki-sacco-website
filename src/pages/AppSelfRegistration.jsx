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
} from "lucide-react";
import "./AppSelfRegistration.css";

const MUKI_APP_URL =
  "https://play.google.com/store/apps/details?id=com.cloudpesa.muki_sacco";

const requirements = [
  {
    icon: Phone,
    title: "Your phone number",
    description:
      "Keep your phone with you. A one-time password (OTP) may be sent to your number for verification.",
  },
  {
    icon: CreditCard,
    title: "Your National ID",
    description:
      "Have your National ID ready. You may need to enter your ID number and capture a clear photo of the card.",
  },
  {
    icon: Mail,
    title: "An email address",
    description:
      "Use an email address you check regularly so MUKI SACCO can contact you about your registration.",
  },
  {
    icon: Camera,
    title: "A device with a camera",
    description:
      "Use a device with a working camera if the app requests ID, facial image, or signature capture.",
  },
];

const steps = [
  {
    number: "01",
    title: "Initiate Registration",
    description:
      "Select Self-Registration in the app. Enter your phone number, National ID number, and email address, then submit.",
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=900&q=80",
    alt: "Smartphone representing the start of mobile registration",
  },
  {
    number: "02",
    title: "OTP Verification",
    description:
      "Check your phone for the one-time password (OTP). Enter the code in the app and validate it to proceed.",
    image:
      "https://images.unsplash.com/photo-1556656793-08538906a9f8?auto=format&fit=crop&w=900&q=80",
    alt: "Mobile phone used for verification",
  },
  {
    number: "03",
    title: "Identity Verification",
    description:
      "Follow the app's instructions to capture your National ID, facial image, and signature if requested.",
    image:
      "https://images.unsplash.com/photo-1582005450386-52b25f82d9bb?auto=format&fit=crop&w=900&q=80",
    alt: "Identity document being reviewed",
  },
  {
    number: "04",
    title: "Additional Details",
    description:
      "Provide the requested title, occupation, address, city, next of kin, introducer's name, and preferred branch.",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=900&q=80",
    alt: "Person reviewing information and paperwork",
  },
  {
    number: "05",
    title: "Biometric Capture",
    description:
      "Follow the app's instructions for any required biometric information and signature capture.",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80",
    alt: "Person using a digital device",
  },
  {
    number: "06",
    title: "Confirmation and Submission",
    description:
      "Review your information carefully, confirm that the details are correct, and submit your registration request.",
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=900&q=80",
    alt: "Financial paperwork being reviewed",
  },
  {
    number: "07",
    title: "Account Validation",
    description:
      "After submission, your request proceeds to MUKI SACCO's account validation process. Approval is not automatic.",
    image:
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=900&q=80",
    alt: "Digital security concept",
  },
];

function RegistrationImage({ src, alt }) {
  return (
    <div className="registration-step-image">
      <img src={src} alt={alt} loading="lazy" />
    </div>
  );
}

export default function AppSelfRegistration() {
  return (
    <main className="self-registration">
      <section className="registration-hero">
        <div className="registration-container hero-content">
          <span className="registration-eyebrow">
            <Smartphone size={16} />
            MUKI SACCO DIGITAL SERVICES
          </span>

          <h1>App Self-Registration</h1>

          <p>
            Follow this guide to learn about registering for
            digital access to MUKI SACCO services.
          </p>

          <a
            className="registration-primary-btn"
            href={MUKI_APP_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Download size={19} />
            View MUKI SACCO App
            <ArrowRight size={18} />
          </a>

          <span className="hero-note">
            Have your phone, National ID, and email address ready.
          </span>
        </div>
      </section>

      <section className="registration-section">
        <div className="registration-container">
          <div className="registration-heading">
            <span className="section-label">BEFORE YOU BEGIN</span>
            <h2>What You Need</h2>
            <p>
              Prepare these four things before starting your registration.
            </p>
          </div>

          <div className="requirements-grid">
            {requirements.map(({ icon: Icon, title, description }) => (
              <article className="requirement-card" key={title}>
                <div className="requirement-icon">
                  <Icon size={25} />
                </div>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="registration-video-section">
        <div className="registration-container">
          <div className="registration-heading">
            <span className="section-label">REGISTRATION OVERVIEW</span>
            <h2>See What to Expect</h2>
            <p>
              Explore the illustrated steps below. These images are
              illustrative and are not screenshots of the actual MUKI app.
            </p>
          </div>
        </div>
      </section>

      <section className="registration-section steps-section">
        <div className="registration-container">
          <div className="registration-heading">
            <span className="section-label">YOUR REGISTRATION JOURNEY</span>
            <h2>How to Register</h2>
            <p>
              Follow the instructions provided in the official app.
              The exact screens may vary.
            </p>
          </div>

          <div className="registration-steps">
            {steps.map((step) => (
              <article className="registration-step" key={step.number}>
                <div className="step-number">{step.number}</div>

                <div className="step-content">
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                  <RegistrationImage src={step.image} alt={step.alt} />
                </div>

                <CheckCircle2 className="step-check" size={22} />
              </article>
            ))}
          </div>

          <div className="registration-notice">
            <ShieldCheck size={27} />
            <div>
              <h3>Keep Your Information Safe</h3>
              <p>
                Never share your OTP or confidential verification details.
                Only submit personal information through an official
                MUKI SACCO channel.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="registration-cta">
        <div className="registration-container cta-content">
          <div className="cta-icon">
            <Smartphone size={30} />
          </div>

          <h2>Ready to Get Started?</h2>

          <p>
            Visit the MUKI SACCO app listing and confirm the official
            registration process before proceeding.
          </p>

          <a
            className="registration-primary-btn"
            href={MUKI_APP_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Download size={19} />
            View MUKI SACCO App
            <ArrowRight size={18} />
          </a>

          <p className="cta-small">
            Registration is subject to MUKI SACCO's account validation
            process.
          </p>
        </div>
      </section>
    </main>
  );
}