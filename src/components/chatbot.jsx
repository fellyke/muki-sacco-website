
import { useState, useEffect, useRef } from "react";
import "./chatbot.css";

const quickQuestions = [
  "Loan products",
  "How to become a member",
  "Mobile banking",
  "MUKI SACCO branches",
  "Contact customer care",
  "Paybill",
];

const responses = [
  {
    keywords: ["loan", "borrow", "credit"],
    answer:
      "MUKI SACCO offers several loan products, including School Fees, Boda Boda, Ngombe, Biashara, Tatua, Youth, Water Tank, Asset Financing and E-Loan. Which loan would you like to know more about?",
  },
  {
    keywords: ["member", "membership", "join", "register"],
    answer:
      "To become a MUKI SACCO member, visit one of our branches for membership guidance and registration requirements. Our customer care team can also assist you.",
  },
  {
    keywords: ["mobile banking", "digital banking", "850", "*850"],
    answer:
      "MUKI SACCO provides digital banking services. Members can explore mobile banking and USSD services through *850#. Contact customer care if you need assistance accessing these services.",
  },
  {
    keywords: ["branch", "branches", "location", "where"],
    answer:
      "MUKI SACCO has branches in Ndunyu Njeru (Main Branch), Engineer, Kwa Haraka, Geta, Murungaru, Naivasha, Mlolongo, Miharati, Gilgil and Ol Kalou.",
  },
  {
    keywords: ["contact", "phone", "call", "email", "customer care"],
    answer:
      "You can contact MUKI SACCO through:\nPhone: 0711 794 957\nEmail: info@mukisacco.co.ke\nWorking hours: Monday to Friday, 8:30 AM – 4:00 PM.",
  },
  {
    keywords: ["paybill", "mpesa", "m-pesa", "payment", "deposit"],
    answer:
      "You can make payments to MUKI SACCO conveniently through M-Pesa. Use Paybill Number 469988. Go to M-Pesa, select Lipa na M-Pesa, then Paybill, enter 469988 as the business number, enter your correct MUKI SACCO account number, and follow the prompts to complete your payment. Remember to keep your M-Pesa confirmation message.",
  },
  {
    keywords: ["insurance", "mukcop"],
    answer:
      "MUKI SACCO offers insurance services through MUKCOP. Contact our customer care team for information about available insurance products.",
  },
];

function getResponse(message) {
  const text = message.toLowerCase().trim();

  if (
    ["hi", "hello", "hey", "good morning", "good afternoon"].includes(text)
  ) {
    return "Hello! Welcome to MUKI SACCO. How can I assist you today?";
  }

  const match = responses.find((item) =>
    item.keywords.some((keyword) => text.includes(keyword))
  );

  if (match) return match.answer;

  return "Thank you for contacting MUKI SACCO. I can help with loans, membership, mobile banking, branches, payments and customer support. Please try asking about one of these services.";
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");

  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "Hello! Welcome to MUKI SACCO. I'm your virtual assistant. How can I help you today?",
    },
  ]);

  const messagesEndRef = useRef(null);

  // Automatically scroll to the latest conversation
  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "end",
      });
    }
  }, [messages, isOpen]);

  function sendMessage(text = message) {
    const userMessage = text.trim();

    if (!userMessage) return;

    const botResponse = getResponse(userMessage);

    setMessages((previous) => [
      ...previous,
      { sender: "user", text: userMessage },
      { sender: "bot", text: botResponse },
    ]);

    setMessage("");
  }

  function handleSubmit(event) {
    event.preventDefault();
    sendMessage();
  }

  return (
    <div className="muki-chatbot">
      {isOpen && (
        <section className="chat-window">
          <header className="chat-header">
            <img src="/logo.png" alt="MUKI SACCO logo" />

            <div className="chat-header-info">
              <h3>MUKI SACCO Assistant</h3>
              <span>
                <i className="online-dot"></i> Here to help you
              </span>
            </div>

            <button
              className="close-chat"
              onClick={() => setIsOpen(false)}
              aria-label="Close chatbot"
            >
              ×
            </button>
          </header>

          <div className="chat-messages">
            {/* Display conversation history */}
            {messages.map((item, index) => (
              <div
                key={index}
                className={`message-row ${item.sender}`}
              >
                {item.sender === "bot" && (
                  <img src="/logo.png" alt="" />
                )}

                <div className="message-bubble">
                  {item.text}
                </div>
              </div>
            ))}

            {/* Display questions after the latest answer */}
            <div className="quick-questions">
              <p>What else would you like to know?</p>

              {quickQuestions.map((question) => (
                <button
                  key={question}
                  onClick={() => sendMessage(question)}
                >
                  {question}
                  <span>›</span>
                </button>
              ))}
            </div>

            <div ref={messagesEndRef} />
          </div>

          <form
            className="chat-input-area"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              placeholder="Type your message..."
              value={message}
              onChange={(event) => setMessage(event.target.value)}
            />

            <button type="submit" aria-label="Send message">
              ➤
            </button>
          </form>

          <div className="chat-footer">
            Powered by MUKI SACCO
          </div>
        </section>
      )}

      <button
        className="chat-launcher"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Close chat" : "Open MUKI SACCO chat"}
      >
        {isOpen ? (
          <span className="launcher-close">×</span>
        ) : (
          <img src="/logo.png" alt="Chat with MUKI SACCO" />
        )}
      </button>
    </div>
  );
}
