
import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Mail,
  Phone,
  MapPin,
  MessageCircle,
  Clock3,
  CheckCircle2,
  AlertCircle,
  Sparkles,
} from "lucide-react";
import "./ContactSection.css";

const initialForm = {
  fullName: "",
  companyName: "",
  email: "",
  phone: "",
  website: "",
  industry: "",
  service: "",
  message: "",
};

const services = [
  "Team Inbox",
  "Personal Assistant",
  "Broadcast Messaging",
  "Workflow Automation",
  "Customer Communication",
  "Other",
];

const industries = [
  "Information Technology",
  "Healthcare",
  "Education",
  "Retail & E-commerce",
  "Finance",
  "Real Estate",
  "Professional Services",
  "Other",
];

function ContactSection() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState("idle");
  const [feedback, setFeedback] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));

    if (status !== "idle") {
      setStatus("idle");
      setFeedback("");
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setStatus("loading");
    setFeedback("");

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const result = await response.json().catch(() => ({}));

      if (!response.ok || result.success === false) {
        throw new Error(
          result.message || "Unable to submit your enquiry. Please try again."
        );
      }

      setStatus("success");
      setFeedback(
        result.message || "Thank you! Your enquiry has been submitted successfully."
      );
      setForm(initialForm);
    } catch (error) {
      setStatus("error");
      setFeedback(
        error.message ||
          "Something went wrong. Please try again in a moment."
      );
    }
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">

        {/* SECTION HEADING */}

        <motion.div
          className="contact-heading"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
        >
          <span className="contact-eyebrow">
            <Sparkles size={14} />
            LET'S START A CONVERSATION
          </span>

          <h2>
            Have a project in mind?
            <span> Let's make it happen.</span>
          </h2>

          <p>
            Tell us what your business needs. Our team
            will help you explore smarter communication,
            automation and customer engagement solutions.
          </p>
        </motion.div>

        {/* CONTACT LAYOUT */}

        <div className="contact-layout">

          {/* LEFT INFORMATION PANEL */}

          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
          >
            <div className="contact-info-content">
              <span className="contact-info-eyebrow">
                CONNECT WITH CONNECTSTREAM
              </span>

              <h3>
                Better conversations.
                <span> Better possibilities.</span>
              </h3>

              <p>
                Whether you're exploring a new solution
                or improving your existing processes,
                we're ready to understand your goals
                and help you move forward.
              </p>

              <div className="contact-details">

                <a
                  href="mailto:hello@connectstream.in"
                  className="contact-detail"
                >
                  <span className="contact-detail-icon">
                    <Mail size={19} />
                  </span>

                  <span>
                    <small>Email us</small>
                    <strong>hello@connectstream.in</strong>
                  </span>
                </a>

                <a
                  href="tel:+910000000000"
                  className="contact-detail"
                >
                  <span className="contact-detail-icon">
                    <Phone size={19} />
                  </span>

                  <span>
                    <small>Call our team</small>
                    <strong>+91 0987654321</strong>
                  </span>
                </a>

                <div className="contact-detail">
                  <span className="contact-detail-icon">
                    <MapPin size={19} />
                  </span>

                  <span>
                    <small>Location</small>
                    <strong>India</strong>
                  </span>
                </div>

                <div className="contact-detail">
                  <span className="contact-detail-icon">
                    <Clock3 size={19} />
                  </span>

                  <span>
                    <small>Working hours</small>
                    <strong>Monday – Saturday</strong>
                  </span>
                </div>

              </div>
            </div>

            <div className="contact-info-footer">
              <MessageCircle size={19} />
              <span>
                Let's build something meaningful together.
              </span>
            </div>

            <div className="contact-info-decoration" />
          </motion.div>

          {/* CONTACT FORM */}

          <motion.div
            className="contact-form-wrapper"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
          >
            <div className="contact-form-heading">
              <span>GET IN TOUCH</span>
              <h3>Tell us about your project</h3>
              <p>
                Fill in the details below and we'll
                get back to you.
              </p>
            </div>

            <form
              className="contact-form"
              onSubmit={handleSubmit}
            >

              <div className="contact-form-grid">

                <div className="contact-field">
                  <label htmlFor="contact-fullName">
                    Full name *
                  </label>

                  <input
                    id="contact-fullName"
                    type="text"
                    name="fullName"
                    placeholder="Enter your full name"
                    value={form.fullName}
                    onChange={handleChange}
                    autoComplete="name"
                    required
                  />
                </div>

                <div className="contact-field">
                  <label htmlFor="contact-companyName">
                    Company name *
                  </label>

                  <input
                    id="contact-companyName"
                    type="text"
                    name="companyName"
                    placeholder="Your company name"
                    value={form.companyName}
                    onChange={handleChange}
                    autoComplete="organization"
                    required
                  />
                </div>

                <div className="contact-field">
                  <label htmlFor="contact-email">
                    Business email *
                  </label>

                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    placeholder="you@company.com"
                    value={form.email}
                    onChange={handleChange}
                    autoComplete="email"
                    required
                  />
                </div>

                <div className="contact-field">
                  <label htmlFor="contact-phone">
                    Phone number *
                  </label>

                  <input
                    id="contact-phone"
                    type="tel"
                    name="phone"
                    placeholder="Enter phone number"
                    value={form.phone}
                    onChange={handleChange}
                    autoComplete="tel"
                    pattern="[0-9+\s()-]{7,20}"
                    title="Enter a valid phone number."
                    required
                  />
                </div>

                <div className="contact-field">
                  <label htmlFor="contact-website">
                    Website
                  </label>

                  <input
                    id="contact-website"
                    type="url"
                    name="website"
                    placeholder="https://yourwebsite.com"
                    value={form.website}
                    onChange={handleChange}
                  />
                </div>

                <div className="contact-field">
                  <label htmlFor="contact-industry">
                    Industry *
                  </label>

                  <select
                    id="contact-industry"
                    name="industry"
                    value={form.industry}
                    onChange={handleChange}
                    required
                  >
                    <option value="">
                      Select your industry
                    </option>

                    {industries.map((industry) => (
                      <option key={industry} value={industry}>
                        {industry}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="contact-field contact-field-full">
                  <label htmlFor="contact-service">
                    What are you interested in? *
                  </label>

                  <select
                    id="contact-service"
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    required
                  >
                    <option value="">
                      Select a service
                    </option>

                    {services.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="contact-field contact-field-full">
                  <label htmlFor="contact-message">
                    Tell us about your requirements
                  </label>

                  <textarea
                    id="contact-message"
                    name="message"
                    rows="4"
                    placeholder="Describe your project or business requirements..."
                    value={form.message}
                    onChange={handleChange}
                  />
                </div>

              </div>

              {/* FORM FEEDBACK */}

              {status === "success" && (
                <div
                  className="contact-feedback contact-feedback-success"
                  role="status"
                >
                  <CheckCircle2 size={19} />
                  <span>{feedback}</span>
                </div>
              )}

              {status === "error" && (
                <div
                  className="contact-feedback contact-feedback-error"
                  role="alert"
                >
                  <AlertCircle size={19} />
                  <span>{feedback}</span>
                </div>
              )}

              <div className="contact-form-bottom">
                <p>
                  By submitting, you agree to be contacted
                  about your enquiry.
                </p>

                <button
                  type="submit"
                  className="contact-submit-button"
                  disabled={status === "loading"}
                >
                  {status === "loading"
                    ? "Submitting..."
                    : "Send your enquiry"}

                  {status !== "loading" && (
                    <ArrowUpRight size={18} />
                  )}
                </button>
              </div>

            </form>
          </motion.div>
        </div>

      </div>
    </section>
  );
}

export default ContactSection;