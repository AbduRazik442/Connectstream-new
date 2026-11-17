
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Check } from "lucide-react";
import FeatureDemo from "./FeatureDemo";
import "./ProductExplorer.css";
import { featureGroups } from "./featureData";

function ProductExplorer() {
  const [activeGroup, setActiveGroup] = useState(featureGroups[0]);
  const [activeFeature, setActiveFeature] = useState(
    featureGroups[0].features[0]
  );

  const handleGroupChange = (group) => {
    setActiveGroup(group);
    setActiveFeature(group.features[0]);
  };

  return (
    <section className="product-explorer" id="features">
      <div className="product-explorer-container">

        <motion.div
          className="product-explorer-heading"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-eyebrow">
            THE CONNECTSTREAM ECOSYSTEM
          </span>

          <h2>
            Everything your business needs.
            <span> All in one place.</span>
          </h2>

          <p>
            Discover a smarter way to manage conversations,
            automate operations and build meaningful customer
            relationships.
          </p>
        </motion.div>

        <div className="product-explorer-layout">

          <div className="feature-sidebar">

            <div className="feature-category-list">
              {featureGroups.map((group) => (
                <button
                  key={group.id}
                  className={`feature-category ${
                    activeGroup.id === group.id ? "active" : ""
                  }`}
                  onClick={() => handleGroupChange(group)}
                >
                  <span>{group.title}</span>
                  <ArrowUpRight size={16} />
                </button>
              ))}
            </div>

            <div className="feature-list">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeGroup.id}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 12 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="feature-list-heading">
                    <span>{activeGroup.subtitle}</span>
                  </div>

                  {activeGroup.features.map((feature) => {
                    const Icon = feature.icon;
                    const isActive =
                      activeFeature.id === feature.id;

                    return (
                      <button
                        key={feature.id}
                        className={`feature-item ${
                          isActive ? "active" : ""
                        }`}
                        onClick={() => setActiveFeature(feature)}
                      >
                        <span className="feature-item-icon">
                          <Icon size={19} />
                        </span>

                        <span className="feature-item-name">
                          {feature.name}
                        </span>

                        {feature.status && (
                          <span className={`feature-status ${
                            feature.status.toLowerCase()
                          }`}>
                            {feature.status}
                          </span>
                        )}

                        {isActive && (
                          <Check
                            className="feature-active-check"
                            size={17}
                          />
                        )}
                      </button>
                    );
                  })}
                </motion.div>
              </AnimatePresence>
            </div>

          </div>

          <div className="feature-content">

            <AnimatePresence mode="wait">
              <motion.div
                key={activeFeature.id}
                className="feature-description"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.25 }}
              >
                <span className="feature-content-label">
                  {activeGroup.title}
                </span>

                <h3>{activeFeature.name}</h3>

                <p>{activeFeature.description}</p>

                <a href="#contact" className="feature-learn-more">
                  Explore this feature
                  <ArrowUpRight size={17} />
                </a>
              </motion.div>
            </AnimatePresence>

            <FeatureDemo feature={activeFeature} />

          </div>

        </div>

      </div>
    </section>
  );
}

export default ProductExplorer;