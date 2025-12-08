"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./ImageAccordion.module.css";

const items = [
  {
    id: 1,
    title: "Understanding Your Real Need",
    description:
      "Before launching anything, we analyze whether your brand needs lead volume or lead quality. This clarity ensures your campaigns attract the right audience instead of wasting budget.",
    image: "/images/marketing_team_banner.png", // Placeholder, ideally different images
  },
  {
    id: 2,
    title: "Smart Form Strategy",
    description:
      "Based on your requirement, we design conversion forms:\n• Short forms for scale and faster conversions\n• Long forms for high-intent, filtered leads\nThis improves efficiency and ensures better qualification.",
    image: "/industry_furnishing_1764314743864.png",
  },
  {
    id: 3,
    title: " Lead Generation Goes Beyond Ads",
    description:
      "Running campaigns is just a fraction of lead generation.The biggest difference lies in how fast you follow up.  A strong follow-up process drives more conversions than ad spend.",
    image: "/industry_pharmacy_1764314726665.png",
  },
];

const itemsTwo = [
  {
    id: 1,
    title: "Lead Tracking and Categorization",
    description:
      "We help brands maintain a structured lead sheet where every lead is tagged as:  Cold, Warm, Hot, Did Not Pick, Call Back, or Follow-Up Required. This organization improves clarity and sales efficiency.",
    image: "/images/marketing_team_banner.png", // Placeholder, ideally different images
  },
  {
    id: 2,
    title: "Aggressive Lead Follow-Up Support",
    description:
      "We push teams to respond faster because shorter response times result in higher conversion rates. Quicker replies make ad budgets more effective.",
    image: "/industry_furnishing_1764314743864.png",
  },
  {
    id: 3,
    title: "Continuous Lead Quality Monitoring",
    description:
      "We do not disappear after campaign setup. We continuously review lead quality with you, adjust targeting, improve landing forms, and refine audiences — making performance stronger week after week.",
    image: "/industry_pharmacy_1764314726665.png",
  },
];

const ImageAccordion = () => {
  const [activeId, setActiveId] = useState(1);
  const [activeId2, setActiveId2] = useState(1);

  return (
    <section className={styles.section}>
      {/* First Section: Image Left, Accordion Right */}
      <div className={styles.container}>
        {/* Left Side - Image */}
        <div className={styles.imageSide}>
          <div className={styles.imageWrapper}>
            <img
              src="/images/marketing_team_banner.png"
              alt="Our Approach"
              className={styles.image}
            />
          </div>
        </div>

        {/* Right Side - Accordion */}
        <div className={styles.accordionSide}>
          <div className={styles.header}>
            <h2 className={styles.title}>Our Lead Generation</h2>
            <p className={styles.subtitle}>
              A holistic methodology designed to deliver exceptional results at
              every stage of the digital journey.
            </p>
          </div>

          <div className={styles.list}>
            {items.map((item) => (
              <div
                key={item.id}
                className={`${styles.accordionItem} ${
                  activeId === item.id ? styles.active : ""
                }`}
              >
                <div
                  className={styles.accordionHeader}
                  onClick={() => setActiveId(item.id)}
                >
                  <h3 className={styles.itemTitle}>{item.title}</h3>
                  <span className={styles.icon}>+</span>
                </div>
                <AnimatePresence>
                  {activeId === item.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className={styles.accordionContent}
                    >
                      <p className={styles.description}>{item.description}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Second Section: Accordion Left, Image Right */}
      <div className={`${styles.container} ${styles.reverse}`}>
        {/* Left Side - Image (visually right due to reverse) */}
        <div className={styles.imageSide}>
          <div className={styles.imageWrapper}>
            <img
              src="/industry_furnishing_1764314743864.png"
              alt="Our Process"
              className={styles.image}
            />
          </div>
        </div>

        {/* Right Side - Accordion (visually left due to reverse) */}
        <div className={styles.accordionSide}>
          <div className={styles.header}>
            <h2 className={styles.title}>Our eCommerce Approach</h2>
            <p className={styles.subtitle}>
              Precision execution ensuring timely delivery and highest quality
              standards.
            </p>
          </div>

          <div className={styles.list}>
            {itemsTwo.map((item) => (
              <div
                key={item.id}
                className={`${styles.accordionItem} ${
                  activeId2 === item.id ? styles.active : ""
                }`}
              >
                <div
                  className={styles.accordionHeader}
                  onClick={() => setActiveId2(item.id)}
                >
                  <h3 className={styles.itemTitle}>{item.title}</h3>
                  <span className={styles.icon}>+</span>
                </div>
                <AnimatePresence>
                  {activeId2 === item.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className={styles.accordionContent}
                    >
                      <p className={styles.description}>{item.description}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageAccordion;
