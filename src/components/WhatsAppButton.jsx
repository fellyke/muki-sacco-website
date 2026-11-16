
import { MessageCircle, Phone } from "lucide-react";
import "./WhatsAppButton.css";

// Confirm that this MUKI contact number is WhatsApp-enabled.
const WHATSAPP_NUMBER = "254711794957";

function WhatsAppButton() {
  const message = encodeURIComponent(
    "Hello MUKI SACCO, I would like to make an enquiry."
  );

  return (
    <a
      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`}
      className="muki-whatsapp-button"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with MUKI SACCO on WhatsApp"
    >
      <MessageCircle size={29} strokeWidth={2.2} />
      <Phone className="whatsapp-phone-icon" size={13} />

      <span className="whatsapp-tooltip">
        Chat with us on WhatsApp
      </span>
    </a>
  );
}

export default WhatsAppButton;
