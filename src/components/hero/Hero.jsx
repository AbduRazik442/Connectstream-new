import { motion } from "framer-motion";
import {
  ArrowUpRight,
  CheckCheck,
  MessageCircle,
  Sparkles,
  Zap,
} from "lucide-react";
import "./Hero.css";

const messages = [
  {
    type: "received",
    text: "Hi! I'm interested in your services. Can you help?",
    time: "10:42 AM",
  },
  {
    type: "sent",
    text: "Absolutely! Welcome to ConnectStream. How can we help you today?",
    time: "10:42 AM",
  },
  {
    type: "received",
    text: "I'd like to know more about your WhatsApp automation.",
    time: "10:43 AM",
  },
];

const floatingItems = [
  {
    className: "cs-float-notification",
    icon: <MessageCircle size={17} />,
    title: "New conversation",
    detail: "Customer message received",
  },
  {
    className: "cs-float-automation",
    icon: <Zap size={17} />,
    title: "Automation active",
    detail: "Workflow completed",
  },
];

function Hero() {
  return (
    <section className="cs-hero" id="home">
      <div className="cs-hero-glow cs-hero-glow-one" />
      <div className="cs-hero-glow cs-hero-glow-two" />

      <div className="cs-container cs-hero-container">
        {/* LEFT CONTENT */}
        <motion.div
          className="cs-hero-content"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: "easeOut" }}
        >
          <div className="cs-hero-eyebrow">
            <span className="cs-hero-eyebrow-dot" />
            ONE PLATFORM. EVERY CONVERSATION.
          </div>

          <h1>
            Every conversation
            <br />
            is an opportunity
            <br />
            <span className="cs-hero-highlight">
              to connect.
            </span>
          </h1>

          <p className="cs-hero-description">
            Bring customer conversations, smart automation, and
            meaningful engagement together with one powerful
            communication platform.
          </p>

          <div className="cs-hero-actions">
            <a href="#contact" className="cs-button cs-button-primary">
              Let's talk
              <ArrowUpRight size={18} />
            </a>

            <a href="#platform" className="cs-hero-secondary-link">
              Explore the platform
              <ArrowUpRight size={17} />
            </a>
          </div>

          <div className="cs-hero-trust">
            <div className="cs-hero-trust-icon">
              <Sparkles size={17} />
            </div>
            <p>
              Conversations made simpler.
              <span> Connections made stronger.</span>
            </p>
          </div>
        </motion.div>

        {/* RIGHT INTERACTIVE VISUAL */}
        <motion.div
          className="cs-hero-visual"
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
        >
          <div className="cs-hero-orbit cs-hero-orbit-one" />
          <div className="cs-hero-orbit cs-hero-orbit-two" />

          {/* FLOATING NOTIFICATIONS */}
          {floatingItems.map((item, index) => (
            <motion.div
              key={item.className}
              className={`cs-floating-card ${item.className}`}
              animate={{ y: [0, -9, 0] }}
              transition={{
                duration: 4 + index,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <div className="cs-floating-icon">{item.icon}</div>
              <div>
                <strong>{item.title}</strong>
                <span>{item.detail}</span>
              </div>
            </motion.div>
          ))}

          {/* CHAT WINDOW */}
          <motion.div
            className="cs-chat-window"
            animate={{ y: [0, -5, 0] }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <div className="cs-chat-header">
              <div className="cs-chat-brand">
                <div className="cs-chat-avatar">C</div>
                <div>
                  <strong>ConnectStream</strong>
                  <span>
                    <i /> Online
                  </span>
                </div>
              </div>

              <div className="cs-chat-header-action">
                <MessageCircle size={19} />
              </div>
            </div>

            <div className="cs-chat-body">
              <div className="cs-chat-date">TODAY</div>

              {messages.map((message, index) => (
                <motion.div
                  key={index}
                  className={`cs-chat-message ${message.type}`}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.65 + index * 0.45,
                  }}
                >
                  <p>{message.text}</p>
                  <div className="cs-chat-message-meta">
                    <span>{message.time}</span>
                    {message.type === "sent" && (
                      <CheckCheck size={14} />
                    )}
                  </div>
                </motion.div>
              ))}

              <motion.div
                className="cs-chat-typing"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.3 }}
              >
                <span />
                <span />
                <span />
              </motion.div>
            </div>

            <div className="cs-chat-input">
              <span>Type your message...</span>
              <div className="cs-chat-send">
                <ArrowUpRight size={17} />
              </div>
            </div>
          </motion.div>

          <div className="cs-hero-visual-caption">
            <span className="cs-caption-line" />
            <span>ONE CONNECTED CUSTOMER EXPERIENCE</span>
          </div>
        </motion.div>
      </div>

      {/* BOTTOM SCROLL INDICATOR */}
      <div className="cs-hero-scroll">
        <span>SCROLL TO EXPLORE</span>
        <div className="cs-scroll-line" />
      </div>
    </section>
  );
}

export default Hero;