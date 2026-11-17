
// import { motion } from "framer-motion";
// import {
//   ArrowUpRight,
//   Quote,
//   Sparkles,
//   MessageSquareQuote,
// } from "lucide-react";
// import "./Testimonials.css";

// const testimonials = [
//   {
//     id: "01",
//     quote:
//       "Add an authentic customer quote here describing how ConnectStream improved their communication or workflow.",
//     name: "Customer Name",
//     role: "Customer / Business Role",
//     initials: "CN",
//     featured: true,
//   },
//   {
//     id: "02",
//     quote:
//       "Add a verified customer comment about the experience of working with your team.",
//     name: "Customer Name",
//     role: "Customer / Business Role",
//     initials: "CN",
//   },
//   {
//     id: "03",
//     quote:
//       "Add a real customer story explaining the value your solution delivered to their business.",
//     name: "Customer Name",
//     role: "Customer / Business Role",
//     initials: "CN",
//   },
// ];

// function Testimonials() {
//   return (
//     <section className="testimonials-section" id="testimonials">
//       <div className="testimonials-container">

//         <motion.div
//           className="testimonials-heading"
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.65 }}
//         >
//           <span className="testimonials-eyebrow">
//             <Sparkles size={14} />
//             BUILT AROUND BETTER CONNECTIONS
//           </span>

//           <h2>
//             Every connection
//             <span> has a story.</span>
//           </h2>

//           <p>
//             Great business relationships start with better
//             conversations. Discover the experiences that
//             make meaningful connections matter.
//           </p>
//         </motion.div>

//         <div className="testimonials-layout">
//           <motion.div
//             className="testimonials-side"
//             initial={{ opacity: 0, x: -25 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.65 }}
//           >
//             <div className="testimonials-side-icon">
//               <MessageSquareQuote size={27} />
//             </div>

//             <span className="testimonials-side-label">
//               CUSTOMER VOICES
//             </span>

//             <h3>
//               Real experiences.
//               <span> Meaningful impact.</span>
//             </h3>

//             <p>
//               We believe technology is only part of the
//               story. The real difference is what it helps
//               people and businesses achieve together.
//             </p>

//             <a href="#contact" className="testimonials-cta">
//               Start a conversation
//               <ArrowUpRight size={17} />
//             </a>

//             <div className="testimonials-side-decoration">
//               <Quote size={100} />
//             </div>
//           </motion.div>

//           <div className="testimonials-cards">
//             {testimonials.map((item, index) => (
//               <motion.article
//                 className={`testimonial-card ${
//                   item.featured ? "testimonial-featured" : ""
//                 }`}
//                 key={item.id}
//                 initial={{ opacity: 0, y: 25 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{
//                   duration: 0.55,
//                   delay: index * 0.12,
//                 }}
//                 whileHover={{ y: -5 }}
//               >
//                 <div className="testimonial-card-top">
//                   <span className="testimonial-quote-icon">
//                     <Quote size={20} />
//                   </span>

//                   <span className="testimonial-number">
//                     {item.id}
//                   </span>
//                 </div>

//                 <p className="testimonial-quote">
//                   “{item.quote}”
//                 </p>

//                 <div className="testimonial-author">
//                   <div className="testimonial-avatar">
//                     {item.initials}
//                   </div>

//                   <div className="testimonial-author-info">
//                     <h4>{item.name}</h4>
//                     <span>{item.role}</span>
//                   </div>

//                   <ArrowUpRight
//                     className="testimonial-author-arrow"
//                     size={18}
//                   />
//                 </div>
//               </motion.article>
//             ))}
//           </div>
//         </div>

//         <motion.div
//           className="testimonials-bottom"
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//         >
//           <span>YOUR BUSINESS. YOUR NEXT SUCCESS STORY.</span>

//           <h3>
//             Let's make your next connection count.
//           </h3>

//           <a href="#contact">
//             Connect with us
//             <ArrowUpRight size={18} />
//           </a>
//         </motion.div>

//       </div>
//     </section>
//   );
// }

// export default Testimonials;


import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Quote,
  Sparkles,
  MessageSquareQuote,
} from "lucide-react";
import "./Testimonials.css";

const testimonials = [
  {
    id: "01",
    quote:
      "Add an authentic customer quote here describing how ConnectStream improved their communication or workflow.",
    name: "Customer Name",
    role: "Customer / Business Role",
    initials: "CN",
    featured: true,
  },
  {
    id: "02",
    quote:
      "Add a verified customer comment about the experience of working with your team.",
    name: "Customer Name",
    role: "Customer / Business Role",
    initials: "CN",
  },
  {
    id: "03",
    quote:
      "Add a real customer story explaining the value your solution delivered to their business.",
    name: "Customer Name",
    role: "Customer / Business Role",
    initials: "CN",
  },
];

const otherTestimonials = [
  {
    id: "02",
    name: "Alex Morgan",
    role: "Business Owner",
    initials: "AM",
    quote: "Managing customer conversations has become much easier for our team.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400",
  },
  {
    id: "03",
    name: "Sophia Williams",
    role: "Marketing Director",
    initials: "SW",
    quote: "ConnectStream helps us communicate with customers more efficiently.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400",
  },
];

const reveal = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

function Testimonials() {
  const featured = testimonials.find((item) => item.featured);
  const otherTestimonials = testimonials.filter(
    (item) => !item.featured
  );

  return (
    <section className="cs-stories-section" id="testimonials">
      <div className="cs-stories-glow cs-stories-glow-one" />
      <div className="cs-stories-glow cs-stories-glow-two" />

      <div className="cs-stories-container">

        {/* SECTION HEADING */}
        <motion.div
          className="cs-stories-heading"
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          <div className="cs-stories-eyebrow">
            <Sparkles size={15} />
            <span>THE CONNECTSTREAM EXPERIENCE</span>
          </div>

          <div className="cs-stories-heading-content">
            <h2>
              Connections that
              <span> create impact.</span>
            </h2>

            <p>
              Behind every great business is a conversation
              worth having. We believe better communication
              creates better possibilities.
            </p>
          </div>
        </motion.div>

        {/* TESTIMONIAL GRID */}
        <div className="cs-stories-grid">

          {/* FEATURED TESTIMONIAL */}
          {featured && (
            <motion.article
              className="cs-story-featured"
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.7 }}
              whileHover={{ y: -5 }}
            >
              <div className="cs-story-featured-top">
                <div className="cs-story-featured-label">
                  <span className="cs-story-status-dot" />
                  FEATURED CUSTOMER STORY
                </div>

                <span className="cs-story-index">
                  {featured.id} / 03
                </span>
              </div>

              <div className="cs-story-featured-quote-icon">
                <Quote size={34} strokeWidth={1.5} />
              </div>

              <p className="cs-story-featured-quote">
                “{featured.quote}”
              </p>

              <div className="cs-story-featured-footer">
                <div className="cs-story-author">
                  <div className="cs-story-avatar cs-story-avatar-featured">
                    {featured.initials}
                  </div>

                  <div>
                    <h4>{featured.name}</h4>
                    <span>{featured.role}</span>
                  </div>
                </div>

                <div className="cs-story-featured-mark">
                  <MessageSquareQuote size={25} />
                </div>
              </div>

              <div className="cs-story-featured-decoration">
                <Quote size={210} />
              </div>
            </motion.article>
          )}

          {/* SECONDARY TESTIMONIALS */}
          <div className="cs-story-secondary">

            {otherTestimonials.map((item, index) => (
              <motion.article
                className="cs-story-card"
                key={item.id}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                }}
                whileHover={{ y: -5 }}
              >
                <div className="cs-story-card-top">
                  <div className="cs-story-card-quote-icon">
                    <Quote size={19} />
                  </div>

                  <span className="cs-story-index">
                    {item.id}
                  </span>
                </div>

                <p className="cs-story-card-quote">
                  “{item.quote}”
                </p>

                <div className="cs-story-card-footer">
                  <div className="cs-story-author">
                    {/* <div className="cs-story-avatar">
                      {item.initials}
                    </div> */}
                    <div className="cs-story-card-image">
                    <img
                      src={item.image}
                      alt={`${item.name} portrait`}
                      loading="lazy"
                    />
                  </div>

                    <div>
                      <h4>{item.name}</h4>
                      <span>{item.role}</span>
                    </div>
                  </div>

                  <ArrowUpRight
                    className="cs-story-card-arrow"
                    size={19}
                  />
                </div>
              </motion.article>
            ))}

          </div>
        </div>

        {/* BOTTOM CALL TO ACTION */}
        <motion.div
          className="cs-stories-cta"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
        >
          <div className="cs-stories-cta-content">
            <span>YOUR NEXT CHAPTER STARTS HERE</span>

            <h3>
              Let's create something
              <span> meaningful together.</span>
            </h3>

            <p>
              Ready to make every customer conversation
              count? Let's explore what's possible.
            </p>
          </div>

          <a href="#contact" className="cs-stories-cta-button">
            Start a conversation
            <ArrowUpRight size={18} />
          </a>

          <div className="cs-stories-cta-decoration" />
        </motion.div>

      </div>
    </section>
  );
}

export default Testimonials;