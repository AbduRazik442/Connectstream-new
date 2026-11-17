import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCheck,
  MessageCircle,
  Sparkles,
  Zap,
} from "lucide-react";
import "./ConnectStreamHero.css";

const conversations = [
  {
    name: "Anita",
    avatar: "A",
    time: "9:41 AM",
    customer: "Hi! Is the blue product available?",
    reply:
      "Hey Anita! Yes, it's available. Would you like to place an order?",
    followUp: "Yes, please!",
    status: "Conversation assigned to Sales",
  },
  {
    name: "Meera",
    avatar: "M",
    time: "10:15 AM",
    customer: "Can I book an appointment for tomorrow?",
    reply:
      "Absolutely! We have a few slots available. Would 11 AM work for you?",
    followUp: "That works perfectly.",
    status: "Appointment confirmed",
  },
  {
    name: "Rahul",
    avatar: "R",
    time: "11:20 AM",
    customer: "I need an update on my order.",
    reply:
      "Of course! Your order is on its way. Here's your latest update.",
    followUp: "Thank you!",
    status: "Order update delivered",
  },
];

const floatingMessages = [
  {
    text: "New customer message",
    className: "cs-float-one",
    icon: MessageCircle,
  },
  {
    text: "Automation activated",
    className: "cs-float-two",
    icon: Zap,
  },
  {
    text: "Team connected",
    className: "cs-float-three",
    icon: Sparkles,
  },
];

function ConnectStreamHero() {
  const [activeChat, setActiveChat] = useState(0);
  const [showTyping, setShowTyping] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowTyping(true);

      setTimeout(() => {
        setActiveChat((previous) =>
          (previous + 1) % conversations.length
        );
        setShowTyping(false);
      }, 1300);
    }, 6500);

    return () => clearInterval(interval);
  }, []);

  const chat = conversations[activeChat];

  return (
    <section className="cs-hero">
      {/* Animated background */}
      <div className="cs-hero-background">
        <div className="cs-hero-orb cs-orb-one" />
        <div className="cs-hero-orb cs-orb-two" />
        <div className="cs-hero-grid" />
        <div className="cs-hero-noise" />
      </div>

      <div className="cs-hero-container">

        {/* Left content */}
        <motion.div
          className="cs-hero-content"
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="cs-hero-eyebrow">
            <span className="cs-live-dot" />
            <span>THE FUTURE OF BUSINESS CONVERSATIONS</span>
            <ArrowUpRight size={14} />
          </div>

          <h1>
            Business
            <br />
            conversations.
            <br />
            <span className="cs-hero-highlight">
              Made better.
            </span>
          </h1>

          <p className="cs-hero-description">
            Bring your customer conversations, automation,
            campaigns and team collaboration together
            with the power of WhatsApp Business API.
          </p>

          <div className="cs-hero-buttons">
            <a href="/#contact" className="cs-button cs-button-primary">
              Let's talk
              <ArrowRight size={17} />
            </a>

            <a href="/#platform" className="cs-button cs-button-outline">
              Explore the platform
              <ArrowUpRight size={17} />
            </a>
          </div>

          <div className="cs-hero-trust">
            <div className="cs-trust-icon">
              <MessageCircle size={17} />
            </div>

            <div>
              <strong>One platform. Better conversations.</strong>
              <span>Built around the way people already communicate.</span>
            </div>
          </div>
        </motion.div>

        {/* Right interactive experience */}
        <motion.div
          className="cs-hero-visual"
          initial={{ opacity: 0, scale: 0.88, x: 40 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1.2, delay: 0.2 }}
        >

          {/* Decorative communication rings */}
          <div className="cs-visual-ring cs-ring-one" />
          <div className="cs-visual-ring cs-ring-two" />

          {/* Floating messages */}
          {floatingMessages.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.text}
                className={`cs-floating-message ${item.className}`}
                animate={{
                  y: [0, -12, 0],
                  rotate: [0, 1.5, 0],
                }}
                transition={{
                  duration: 4 + index,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.5,
                }}
              >
                <Icon size={15} />
                {item.text}
              </motion.div>
            );
          })}

          {/* Main chat card */}
          <motion.div
            className="cs-chat-window"
            animate={{ y: [0, -7, 0] }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <div className="cs-chat-header">
              <div className="cs-chat-profile">
                <div className="cs-chat-avatar">C</div>

                <div>
                  <strong>ConnectStream</strong>
                  <span>
                    <i /> Business account
                  </span>
                </div>
              </div>

              <div className="cs-chat-header-icon">
                <MessageCircle size={19} />
              </div>
            </div>

            <div className="cs-chat-body">
              <div className="cs-chat-date">
                TODAY
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeChat}
                  className="cs-chat-messages"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.35 }}
                >
                  <div className="cs-chat-customer">
                    <div className="cs-message-avatar">
                      {chat.avatar}
                    </div>

                    <div className="cs-message-bubble customer-bubble">
                      <span>{chat.customer}</span>
                      <small>{chat.time}</small>
                    </div>
                  </div>

                  <div className="cs-chat-reply">
                    <div className="cs-message-bubble reply-bubble">
                      <span>{chat.reply}</span>
                      <small>
                        {chat.time}
                        <CheckCheck size={13} />
                      </small>
                    </div>
                  </div>

                  <div className="cs-chat-customer">
                    <div className="cs-message-avatar">
                      {chat.avatar}
                    </div>

                    <div className="cs-message-bubble customer-bubble">
                      <span>{chat.followUp}</span>
                      <small>{chat.time}</small>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              <AnimatePresence>
                {showTyping && (
                  <motion.div
                    className="cs-typing"
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                  >
                    <span />
                    <span />
                    <span />
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="cs-chat-status">
                <span className="cs-status-check">
                  <CheckCheck size={14} />
                </span>
                {chat.status}
              </div>
            </div>

            <div className="cs-chat-footer">
              <div className="cs-chat-input">
                Type a message...
              </div>

              <div className="cs-chat-send">
                <ArrowRight size={16} />
              </div>
            </div>
          </motion.div>

          {/* Bottom floating status */}
          <motion.div
            className="cs-floating-status"
            animate={{ y: [0, 6, 0] }}
            transition={{
              duration: 5,
              repeat: Infinity,
            }}
          >
            <span className="cs-live-dot" />
            Conversations in motion
          </motion.div>

        </motion.div>
      </div>

      {/* Bottom scroll indicator */}
      <a href="/#platform" className="cs-scroll-indicator">
        <span>SCROLL TO EXPLORE</span>
        <div className="cs-scroll-line" />
      </a>

    </section>
  );
}

export default ConnectStreamHero;