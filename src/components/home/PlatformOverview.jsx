import { motion } from "framer-motion";
import {
  ArrowUpRight,
  MessageSquare,
  UserRound,
  Send,
  Files,
  Workflow,
  Sparkles,
  Package,
  HeartHandshake,
  CreditCard,
  PhoneCall,
  ContactRound,
  ChartNoAxesCombined,
  Users,
  ShieldCheck,
  Mail,
  Smartphone,
  Radio,
} from "lucide-react";
import "./PlatformOverview.css";

const categories = [
  {
    number: "01",
    name: "Conversations",
    description:
      "Bring every customer interaction into one organized place. Give your team the tools to respond with context and care.",
    className: "conversations",
    features: [
      { name: "Team Inbox", icon: MessageSquare },
      { name: "Personal Assistant", icon: UserRound },
    ],
  },
  {
    number: "02",
    name: "Automation",
    description:
      "Reduce repetitive work and create consistent customer journeys with connected communication workflows.",
    className: "automation",
    features: [
      { name: "Broadcast", icon: Send },
      { name: "Templates", icon: Files },
      { name: "Flows", icon: Workflow },
      { name: "AI Intelligence", icon: Sparkles, badge: "Beta" },
    ],
  },
  {
    number: "03",
    name: "Commerce",
    description:
      "Connect customer conversations with the tools that support product discovery, engagement, and transactions.",
    className: "commerce",
    features: [
      { name: "Products", icon: Package },
      { name: "Loyalty Hub", icon: HeartHandshake, badge: "New" },
      { name: "Payments", icon: CreditCard, badge: "Beta" },
      { name: "Calls Hub", icon: PhoneCall, badge: "Beta" },
    ],
  },
  {
    number: "04",
    name: "Management",
    description:
      "Keep your customer data, team activity, and operational visibility connected in one platform.",
    className: "management",
    features: [
      { name: "Contacts", icon: ContactRound },
      { name: "Analytics", icon: ChartNoAxesCombined },
      { name: "Team", icon: Users },
      { name: "Supervisor", icon: ShieldCheck },
    ],
  },
];

const upcomingChannels = [
  { name: "Instagram", icon: MessageSquare },
  { name: "Facebook Messenger", icon: MessageSquare },
  { name: "RCS", icon: Smartphone },
  { name: "Email", icon: Mail },
];

function PlatformOverview() {
  return (
    <section className="cs-platform-section" id="platform">
      <div className="cs-platform-background-glow" />

      <div className="cs-container cs-platform-container">
        {/* SECTION INTRO */}
        <motion.div
          className="cs-platform-intro"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.65 }}
        >
          <div className="cs-platform-eyebrow">
            <span />
            THE CONNECTSTREAM ECOSYSTEM
          </div>

          <h2>
            Everything works
            <br />
            <span>better together.</span>
          </h2>

          <p>
            From the first hello to lasting customer relationships,
            ConnectStream brings the essential tools for modern
            business communication into one connected platform.
          </p>
        </motion.div>

        {/* CATEGORY CARDS */}
        <div className="cs-platform-grid">
          {categories.map((category, index) => (
            <motion.article
              key={category.name}
              className={`cs-platform-card cs-platform-${category.className}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.55,
                delay: index * 0.1,
              }}
            >
              <div className="cs-platform-card-top">
                <span className="cs-platform-number">
                  {category.number}
                </span>
                <span className="cs-platform-card-mark">
                  <ArrowUpRight size={17} />
                </span>
              </div>

              <h3>{category.name}</h3>
              <p className="cs-platform-card-description">
                {category.description}
              </p>

              <div className="cs-platform-feature-list">
                {category.features.map((feature) => {
                  const FeatureIcon = feature.icon;

                  return (
                    <div
                      className="cs-platform-feature"
                      key={feature.name}
                    >
                      <span className="cs-platform-feature-icon">
                        <FeatureIcon size={16} />
                      </span>

                      <span className="cs-platform-feature-name">
                        {feature.name}
                      </span>

                      {feature.badge && (
                        <span
                          className={`cs-platform-feature-badge cs-badge-${feature.badge.toLowerCase()}`}
                        >
                          {feature.badge}
                        </span>
                      )}
                    </div>
                  );
                })}
              </div>
            </motion.article>
          ))}
        </div>

        {/* UPCOMING CHANNELS */}
        <motion.div
          className="cs-platform-channels"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65 }}
        >
          <div className="cs-platform-channels-copy">
            <span className="cs-platform-channels-label">
              WHAT'S NEXT
            </span>
            <h3>More channels. More ways to connect.</h3>
            <p>
              Our communication ecosystem is growing.
              These channels are coming soon.
            </p>
          </div>

          <div className="cs-platform-channel-list">
            {upcomingChannels.map((channel) => {
              const ChannelIcon = channel.icon;

              return (
                <div
                  className="cs-platform-channel"
                  key={channel.name}
                >
                  <ChannelIcon size={19} />
                  <span>{channel.name}</span>
                  <span className="cs-channel-status">Coming soon</span>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* BOTTOM CTA */}
        <motion.div
          className="cs-platform-bottom"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span>One connected platform for meaningful conversations.</span>
          <a href="#contact">
            Discover what ConnectStream can do
            <ArrowUpRight size={17} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default PlatformOverview;