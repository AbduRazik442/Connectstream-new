
// import { motion } from "framer-motion";
// import {
//   Layers3,
//   Workflow,
//   HeartHandshake,
//   ChartNoAxesCombined,
//   ArrowUpRight,
//   CheckCircle2,
// } from "lucide-react";
// import "./WhyConnectStream.css";

// const advantages = [
//   {
//     id: 1,
//     number: "01",
//     title: "Unified Communication",
//     description:
//       "Bring your customer conversations, team collaboration and business communication together in one connected workspace.",
//     icon: Layers3,
//     points: [
//       "Centralized conversations",
//       "Seamless team collaboration",
//       "Connected customer experiences",
//     ],
//   },
//   {
//     id: 2,
//     number: "02",
//     title: "Intelligent Automation",
//     description:
//       "Simplify repetitive processes with intelligent automation and workflows that help your team work more efficiently.",
//     icon: Workflow,
//     points: [
//       "Automated workflows",
//       "Smarter customer journeys",
//       "Less repetitive work",
//     ],
//   },
//   {
//     id: 3,
//     number: "03",
//     title: "Meaningful Engagement",
//     description:
//       "Create more personalized customer experiences and build lasting relationships through connected communication.",
//     icon: HeartHandshake,
//     points: [
//       "Personalized interactions",
//       "Consistent customer experiences",
//       "Stronger relationships",
//     ],
//   },
//   {
//     id: 4,
//     number: "04",
//     title: "Actionable Insights",
//     description:
//       "Get a clearer view of your business communication and customer engagement through centralized insights.",
//     icon: ChartNoAxesCombined,
//     points: [
//       "Performance visibility",
//       "Engagement insights",
//       "Better-informed decisions",
//     ],
//   },
// ];

// function WhyConnectStream() {
//   return (
//     <section className="why-connectstream" id="why-connectstream">
//       <div className="why-connectstream-container">

//         <motion.div
//           className="why-connectstream-heading"
//           initial={{ opacity: 0, y: 25 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//         >
//           <span className="trust-eyebrow">
//             WHY CONNECTSTREAM
//           </span>

//           <h2>
//             More than communication.
//             <span> A smarter way to grow.</span>
//           </h2>

//           <p>
//             ConnectStream brings communication, automation
//             and customer engagement together to help businesses
//             create better customer experiences.
//           </p>
//         </motion.div>

//         <div className="why-connectstream-grid">
//           {advantages.map((item, index) => {
//             const Icon = item.icon;

//             return (
//               <motion.article
//                 className="advantage-card"
//                 key={item.id}
//                 initial={{ opacity: 0, y: 35 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{
//                   duration: 0.5,
//                   delay: index * 0.12,
//                 }}
//               >
//                 <div className="advantage-card-top">
//                   <span className="advantage-number">
//                     {item.number}
//                   </span>

//                   <span className="advantage-icon">
//                     <Icon size={25} strokeWidth={1.8} />
//                   </span>
//                 </div>

//                 <h3>{item.title}</h3>

//                 <p>{item.description}</p>

//                 <div className="advantage-points">
//                   {item.points.map((point) => (
//                     <div
//                       className="advantage-point"
//                       key={point}
//                     >
//                       <CheckCircle2 size={15} />
//                       <span>{point}</span>
//                     </div>
//                   ))}
//                 </div>

//                 <div className="advantage-card-footer">
//                   <span>Connected possibilities</span>
//                   <ArrowUpRight size={19} />
//                 </div>
//               </motion.article>
//             );
//           })}
//         </div>

//         <motion.div
//           className="why-connectstream-bottom"
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//         >
//           <div>
//             <span>ONE CONNECTED ECOSYSTEM</span>
//             <h3>
//               Bring every customer interaction
//               closer together.
//             </h3>
//           </div>

//           <a href="#contact">
//             Let's connect
//             <ArrowUpRight size={18} />
//           </a>
//         </motion.div>

//       </div>
//     </section>
//   );
// }

// export default WhyConnectStream;


import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Layers3,
  Workflow,
  HeartHandshake,
  ChartNoAxesCombined,
  ArrowUpRight,
  Check,
  Sparkles,
} from "lucide-react";
import "./WhyConnectStream.css";

const advantages = [
  {
    id: 1,
    number: "01",
    title: "Unified Communication",
    shortTitle: "Everything connected.",
    description:
      "Bring conversations, collaboration and customer communication together in one intelligent workspace.",
    icon: Layers3,
    points: [
      "One centralized communication hub",
      "Seamless team collaboration",
      "Connected customer experiences",
    ],
    label: "ONE CONNECTED WORKSPACE",
    featured: true,
  },
  {
    id: 2,
    number: "02",
    title: "Intelligent Automation",
    shortTitle: "Less manual work.",
    description:
      "Simplify repetitive processes and create smarter customer journeys with automation.",
    icon: Workflow,
    points: [
      "Automated workflows",
      "Smarter customer journeys",
      "Reduced repetitive tasks",
    ],
    label: "WORK SMARTER",
  },
  {
    id: 3,
    number: "03",
    title: "Meaningful Engagement",
    shortTitle: "Relationships that last.",
    description:
      "Create personalized customer experiences that make every interaction more meaningful.",
    icon: HeartHandshake,
    points: [
      "Personalized interactions",
      "Consistent customer experiences",
      "Stronger relationships",
    ],
    label: "CUSTOMER FIRST",
  },
  {
    id: 4,
    number: "04",
    title: "Actionable Insights",
    shortTitle: "Clarity for every decision.",
    description:
      "Get a clearer understanding of customer engagement and business communication.",
    icon: ChartNoAxesCombined,
    points: [
      "Performance visibility",
      "Engagement insights",
      "Better-informed decisions",
    ],
    label: "INSIGHTS THAT MATTER",
  },
];

function WhyConnectStream() {
  const [activeCard, setActiveCard] = useState(1);

  return (
    <section
      className="why-connectstream"
      id="why-connectstream"
    >
      <div className="why-connectstream-container">

        {/* SECTION INTRO */}

        <motion.div
          className="why-connectstream-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="trust-eyebrow">
            <Sparkles size={14} />
            THE CONNECTSTREAM ADVANTAGE
          </span>

          <h2>
            Built to simplify.
            <span> Designed to connect.</span>
          </h2>

          <p>
            Everything your business needs to create
            better conversations, smarter workflows
            and stronger customer relationships.
          </p>
        </motion.div>

        {/* INTERACTIVE BENTO GRID */}

        <div className="why-connectstream-grid">

          {advantages.map((item, index) => {
            const Icon = item.icon;
            const isActive = activeCard === item.id;

            return (
              <motion.button
                type="button"
                key={item.id}
                className={`advantage-card ${
                  item.featured ? "advantage-featured" : ""
                } ${isActive ? "advantage-active" : ""}`}
                onClick={() =>
                  setActiveCard(isActive ? null : item.id)
                }
                aria-expanded={isActive}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.1,
                }}
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.99 }}
              >
                <div className="advantage-card-top">
                  <span className="advantage-number">
                    {item.number}
                  </span>

                  <span className="advantage-icon">
                    <Icon size={25} strokeWidth={1.8} />
                  </span>
                </div>

                <span className="advantage-label">
                  {item.label}
                </span>

                <h3>{item.title}</h3>

                <span className="advantage-short-title">
                  {item.shortTitle}
                </span>

                <p>{item.description}</p>

                <AnimatePresence initial={false}>
                  {isActive && (
                    <motion.div
                      className="advantage-expanded"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {item.points.map((point) => (
                        <div
                          className="advantage-point"
                          key={point}
                        >
                          <Check size={15} />
                          <span>{point}</span>
                        </div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="advantage-card-footer">
                  <span>
                    {isActive
                      ? "Showing highlights"
                      : "Discover the advantage"}
                  </span>

                  <span className="advantage-arrow">
                    <ArrowUpRight size={18} />
                  </span>
                </div>
              </motion.button>
            );
          })}

        </div>

        {/* BOTTOM CTA */}

        <motion.div
          className="why-connectstream-bottom"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="bottom-cta-content">
            <span>ONE PLATFORM. CONNECTED POSSIBILITIES.</span>

            <h3>
              Your next chapter of smarter
              business communication starts here.
            </h3>
          </div>

          <a href="#contact" className="bottom-cta-button">
            Let's connect
            <ArrowUpRight size={18} />
          </a>
        </motion.div>

      </div>
    </section>
  );
}

export default WhyConnectStream;