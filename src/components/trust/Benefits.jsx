
import { motion } from "framer-motion";
import {
  Clock3,
  Users,
  TrendingUp,
  ShieldCheck,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";
import "./Benefits.css";

const benefits = [
  {
    number: "01",
    title: "Save Valuable Time",
    description:
      "Reduce repetitive communication tasks and give your team more time to focus on meaningful work.",
    icon: Clock3,
    tag: "MORE PRODUCTIVITY",
  },
  {
    number: "02",
    title: "Improve Team Collaboration",
    description:
      "Bring your team closer with connected communication and smoother workflows across your business.",
    icon: Users,
    tag: "BETTER TEAMWORK",
  },
  {
    number: "03",
    title: "Grow With Confidence",
    description:
      "Build scalable communication processes that support your business as customer needs evolve.",
    icon: TrendingUp,
    tag: "BUSINESS GROWTH",
  },
  {
    number: "04",
    title: "Create Consistent Experiences",
    description:
      "Deliver more organized and reliable customer interactions across your communication channels.",
    icon: ShieldCheck,
    tag: "CUSTOMER TRUST",
  },
];

function Benefits() {
  return (
    <section className="benefits-section" id="benefits">
      <div className="benefits-container">

        <motion.div
          className="benefits-intro"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="benefits-eyebrow">
            <Sparkles size={14} />
            THE VALUE OF CONNECTED BUSINESS
          </span>

          <h2>
            More than communication.
            <span> A better way to work.</span>
          </h2>

          <p>
            The right technology should make business
            simpler. ConnectStream helps bring your
            communication, people and processes together
            to create better everyday experiences.
          </p>

          <a href="#contact" className="benefits-link">
            Let's build something better
            <ArrowUpRight size={17} />
          </a>
        </motion.div>

        <div className="benefits-grid">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;

            return (
              <motion.article
                className="benefit-card"
                key={benefit.number}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.12,
                }}
                whileHover={{ y: -7 }}
              >
                <div className="benefit-card-header">
                  <span className="benefit-number">
                    {benefit.number}
                  </span>

                  <span className="benefit-icon">
                    <Icon size={24} strokeWidth={1.8} />
                  </span>
                </div>

                <span className="benefit-tag">
                  {benefit.tag}
                </span>

                <h3>{benefit.title}</h3>

                <p>{benefit.description}</p>

                <div className="benefit-card-bottom">
                  <span>THE CONNECTSTREAM DIFFERENCE</span>
                  <ArrowUpRight size={17} />
                </div>
              </motion.article>
            );
          })}
        </div>

        <motion.div
          className="benefits-footer"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
        >
          <div className="benefits-footer-mark">
            <Sparkles size={21} />
          </div>

          <div className="benefits-footer-text">
            <h3>Make every connection count.</h3>
            <p>
              Smarter communication starts with the right
              foundation.
            </p>
          </div>

          <a href="#contact" className="benefits-footer-button">
            Talk to our team
            <ArrowUpRight size={18} />
          </a>
        </motion.div>

      </div>
    </section>
  );
}

export default Benefits;