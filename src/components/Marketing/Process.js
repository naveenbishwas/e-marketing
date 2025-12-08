"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./Process.module.css";

const steps = [
  {
    id: 1,
    heading: "Discovery & Understanding",
    paragraph:
      "We begin by understanding your business goals, audience, positioning, and challenges to align expectations and create a strategic direction.",
  },
  {
    id: 2,
    heading: "Market & Competitive Intelligence",
    paragraph:
      "We research your industry, study competitors, and analyse customer behaviour to uncover opportunities and guide positioning.",
  },
  {
    id: 3,
    heading: "Strategy & Offer Development",
    paragraph:
      "We build a conversion-focused strategy, refine your offer, define messaging pillars, and map customer journeys for maximum impact.",
  },
  {
    id: 4,
    heading: "Creative & Content Production",
    paragraph:
      "Our team crafts compelling creatives, ads, videos, landing page content, and brand messaging aligned with growth objectives.",
  },
  {
    id: 5,
    heading: "Technical Setup & Campaign Foundation",
    paragraph:
      "We implement analytics, tracking, CRM flows, landing pages, automation, and attribution systems for seamless performance measurement.",
  },
  {
    id: 6,
    heading: "Launch & Activation",
    paragraph:
      "We execute campaigns across chosen platforms, allocate budgets strategically, and initiate testing to gather performance insights.",
  },
  {
    id: 7,
    heading: "Optimization, Testing & Scaling",
    paragraph:
      "We continuously monitor data, run A/B tests, improve funnels and targeting, and scale campaigns once profitability and efficiency are validated.",
  },
  {
    id: 8,
    heading: "Reporting, Innovation & Long-Term Growth",
    paragraph:
      "We provide clear reporting, share insights, and evolve strategy, creatives, and automation to drive compounding growth over time.",
  },
];

const Process = () => {
  const [activeStep, setActiveStep] = useState(null);

  return (
    <section className={styles.processSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Our Proven Growth Lifecycle</h2>
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
