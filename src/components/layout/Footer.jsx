
import {
  ArrowUpRight,
  MessageCircle,
} from "lucide-react";
import "./Footer.css";

const footerGroups = [
  {
    title: "Platform",
    links: [
      ["Team Inbox", "#features"],
      ["Personal Assistant", "#features"],
      ["Broadcast", "#features"],
      ["Templates", "#features"],
      ["Automation Flows", "#features"],
      ["AI Intelligence", "#features"],
    ],
  },
  {
    title: "Solutions",
    links: [
      ["E-commerce", "#industries"],
      ["Education", "#industries"],
      ["Healthcare", "#industries"],
      ["Real Estate", "#industries"],
      ["Financial Services", "#industries"],
    ],
  },
  {
    title: "Company",
    links: [
      ["About us", "#about"],
      ["Contact", "#contact"],
      ["Product guide", "#platform"],
    ],
  },
];

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="cs-footer">
      <div className="cs-container">
        {/* FOOTER TOP */}
        <div className="cs-footer-top">
          <div className="cs-footer-brand">
            <a href="#home" className="cs-footer-logo">
              <span className="cs-footer-logo-symbol">C</span>
              <span>
                Connect<span className="cs-footer-logo-highlight">Stream</span>
              </span>
            </a>

            <p>
              Better conversations.
              <br />
              Stronger connections.
              <br />
              Smarter business.
            </p>

            <div className="cs-footer-socials">
              <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <span className="cs-social-letter">in</span>
              </a>
              <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" aria-label="Instagram">
                <span className="cs-social-letter">ig</span>
              </a>
              <a href="https://www.facebook.com/" target="_blank" rel="noreferrer" aria-label="Facebook">
                <span style={{ fontWeight: 800, fontSize: "18px" }}>f</span>
              </a>
              <a href="https://www.whatsapp.com/" target="_blank" rel="noreferrer" aria-label="WhatsApp">
                <MessageCircle size={18} />
              </a>
            </div>
          </div>

          {/* FOOTER LINK GROUPS */}
          <div className="cs-footer-groups">
            {footerGroups.map((group) => (
              <div className="cs-footer-group" key={group.title}>
                <h3>{group.title}</h3>

                {group.links.map(([label, href]) => (
                  <a href={href} key={label}>
                    {label}
                  </a>
                ))}
              </div>
            ))}
          </div>

          {/* FOOTER CTA */}
          <div className="cs-footer-cta">
            <span className="cs-footer-eyebrow">
              LET'S BUILD BETTER CONNECTIONS
            </span>

            <h3>
              Ready to make
              <span> every conversation count?</span>
            </h3>

            <a href="#contact" className="cs-footer-button">
              Talk to our team
              <ArrowUpRight size={17} />
            </a>
          </div>
        </div>

        {/* FOOTER BOTTOM */}
        <div className="cs-footer-bottom">
          <p>© {year} ConnectStream. All rights reserved.</p>

          <div className="cs-footer-legal">
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms of Service</a>
          </div>

          <span className="cs-footer-made">
            Made for better conversations <span>♥</span>
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;