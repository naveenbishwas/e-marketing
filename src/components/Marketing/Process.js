"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./Process.module.css";

const steps = [
  {
    id: 1,
    heading: "You share your vision with us",
    paragraph:
      "We conduct deep business discovery, audience research, and gap analysis to uncover what truly drives performance. This phase sets the foundation for smarter targeting, messaging, and conversion planning.",
  },
  {
    id: 2,
    heading: "Build Strategy That Wins",
    paragraph:
      "We create a measurable roadmap with positioning, channel strategy, targeting frameworks, and KPI alignment. Every move is engineered for growth, lead generation, campaign success, and long-term ROI.",
  },
  {
    id: 3,
    heading: "Execute With Precision",
    paragraph:
      "We launch performance-focused campaigns, creatives, funnels, and automation built for engagement and conversion.  Implementation is agile — informed by data and designed for impact.",
  },
  {
    id: 4,
    heading: "Optimize For Compoundings ROI",
    paragraph:
      "We analyze performance, test hypotheses, refine creatives and audiences, and scale winning elements. This ongoing optimization drives continuous improvement, higher ROAS, and business growth.",
  },
  {
    id: 5,
    heading: "We launch, and grow together",
    paragraph:
      "Once approved, we go live and support you as you scale. Our team remains available to help optimize and improve as your business evolves.",
  },
  {
    id: 6,
    heading: "We launch, and grow together",
    paragraph:
      "Once approved, we go live and support you as you scale. Our team remains available to help optimize and improve as your business evolves.",
  },
];

const Process = () => {
  const [activeStep, setActiveStep] = useState(null);

  return (
    <section className={styles.processSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Our Proven Growth Lifecycle</h2>
          {/* <p className={styles.description}>
                        Use this animation to give more information about your services, process, features, benefits and more, without crowding your webpage with text while keeping it engaging and interactive for visitors.
                    </p> */}
        </div>

        <div className={styles.stepsContainer}>
          {steps.map((step) => (
            <div
              key={step.id}
              className={`${styles.stepItem} ${
                activeStep === step.id ? styles.active : ""
              }`}
              onClick={() =>
                setActiveStep(activeStep === step.id ? null : step.id)
              }
            >
              <div className={styles.numberWrapper}>
                <span className={styles.number}>{step.id}</span>
                <div className={styles.dotWrapper}>
                  <motion.div
                    className={styles.dot}
                    animate={
                      activeStep === step.id
                        ? {}
                        : {
                            boxShadow: [
                              "0 0 0 0px rgba(35, 35, 77, 0.7)",
                              "0 0 0 10px rgba(35, 35, 77, 0)",
                            ],
                          }
                    }
                    transition={
                      activeStep === step.id
                        ? {}
                        : {
                            duration: 1.5,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }
                    }
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.contentArea}>
          <AnimatePresence mode="wait">
            {activeStep && (
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className={styles.contentWrapper}
              >
                <h3 className={styles.contentHeading}>
                  {steps.find((s) => s.id === activeStep)?.heading}
                </h3>
                <p className={styles.contentParagraph}>
                  {steps.find((s) => s.id === activeStep)?.paragraph}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Process;
