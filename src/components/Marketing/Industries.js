"use client";
import { useState, useEffect, useRef } from "react";
import styles from "./Industries.module.css";

const Industries = () => {
  const [activeIndustry, setActiveIndustry] = useState(0);
  const sectionRef = useRef(null);

  const industries = [
    {
      name: "Dental",
      desc: "We help dental brands build trust, boost patient appointments, and strengthen market presence. By optimising communication, targeting, and experience funnels — we turn digital demand into real patient visits and stronger clinic growth.",
      image: "/industry_pharmacy_1764314726665.png",
    },
    {
      name: "eCommerce / Technology (eSIM / Digital Brands)",
      desc: "We specialise in scaling emerging tech and digital commerce brands globally. Through performance-focused strategy, market understanding, and continual optimisation — we turn online traffic into loyal, high-value customers.",
      image: "/industry_furnishing_1764314743864.png",
    },
    {
      name: "Home Furnishing & Furniture",
      desc: "We assist furnishing and home decor businesses in reaching the right buyers at the right moment. Our approach blends lifestyle storytelling with conversion strategy — helping brands capture intent, accelerate purchase decisions, and enhance brand affinity.",
      image: "/industry_dental_1764314758912.png",
    },
    {
      name: "Fashion / Apparel (D2C)",
      desc: "We help fashion brands elevate their identity, strengthen recall, and build repeat demand. From brand positioning to performance-led acquisition, our frameworks ensure better engagement, seamless shopping journeys, and measurable brand growth.",
      image: "/industry_real_estate_1764314776635.png",
    },
  ];

  // Simple auto-rotate or scroll spy could be added here
  // For now, we'll implement click-to-select and a visual transition

  return (
    <section className={styles.industries} ref={sectionRef}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.heading}>Industry Agnostic</h2>
          <p className={styles.subheading}>Deep expertise across verticals.</p>
        </div>

        <div className={styles.contentWrapper}>
          <div className={styles.menu}>
            {industries.map((ind, index) => (
              <div
                key={index}
                className={`${styles.menuItem} ${
                  activeIndustry === index ? styles.active : ""
                }`}
                onClick={() => setActiveIndustry(index)}
              >
                <h3>{ind.name}</h3>
                <div className={styles.indicator}></div>
              </div>
            ))}
          </div>

          <div className={styles.display}>
            {industries.map((ind, index) => (
              <div
                key={index}
                className={`${styles.slide} ${
                  activeIndustry === index ? styles.slideActive : ""
                }`}
              >
                <div className={styles.imageContainer}>
                  <img
                    src={ind.image}
                    alt={ind.name}
                    className={styles.image}
                  />
                  <div className={styles.overlay}>
                    <h3>{ind.name}</h3>
                    <p>{ind.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Industries;
