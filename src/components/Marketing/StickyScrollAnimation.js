"use client";
import React, { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import styles from "./StickyScrollAnimation.module.css";

const StickyScrollAnimation = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const projects = [
    {
      id: "01",
      name: "Lawn Mower",
      desc: "We’ve managed monthly ad spends exceeding $500,000 for one of Australia’s largest lawn mower brands. This category is highly season-driven and requires deep market understanding.",
      points: [
        "Mapping geo-specific demand patterns before scaling campaigns",
        "Aligning ad intensity with seasonality and regional weather cycles",
        "Leveraging Google Shopping feeds as the primary growth lever for search-driven demand",
        "Structuring campaigns to scale during peak demand without hurting efficiency",
      ],
      image: "/brand-img3.png", // Placeholder
      color: "#2d5b88", // Green
      textColor: "#ffffff",
    },
    {
      id: "02",
      name: "Apparel",
      desc: "Apparel advertising isn’t about short-term sales spikes. It’s about building a profitable, repeat-purchase brand.",
      points: [
        "Building long-term, sustainable growth—not just ROAS chasing",
        "Strong emphasis on retention and repeat customers",
        "Adjusting ad strategy based on market demand shifts and seasonality",
        "Real-time inventory availability on landing pages",
      ],
      image: "/brand-img1.png", // Placeholder
      color: "#191a3a", // Blue
      textColor: "#ffffff",
    },
    {
      id: "03",
      name: "Drone Category",
      desc: "With hands-on experience working with an Israel-based drone brand, we understand the complexity and learning curve involved in tech-heavy products.",
      points: [
        "ROAS close to 10 at an ad spend of ₹1,00,000",
        "High-quality leads generated at a ₹100–₹120 CPL",
        "Lead quality improved by focusing on feature-led communication",
        "Drone marketing requires experimentation backed by understanding—not guesswork.",
      ],
     image: "/brand-img2.png",// Placeholder
      color: "#23234d", // Pink
      textColor: "#ffffff",
    },
    {
      id: "04",
      name: "Book Publishing House",
      desc: "We’ve worked with a 360° book publishing house in India, partnered with Penguin Books, supporting both lead generation and operational scalability.",
      points: [
        "Helping scale their business, enabling team growth from 30 to 60 members",
        "Running aggressive creative testing across six different publishing services",
        "Building a structured lead qualification and distribution system",
        "Reduced lead cost from ₹250 to ₹50 while maintaining quality",
      ],
      image: "/brand-img4.png",
      color: "#111827", // Dark
      textColor: "#ffffff",
    },
  ];

  return (
    <section className={styles.section} ref={containerRef}>
      <div className={styles.header}>
        <h2 className={styles.heading}>Industry-Agnostic Performance Marketing Experience</h2>
        <p className={styles.subheading}>
          We don’t believe in one-size-fits-all advertising. Every industry behaves differently—buyer intent, seasonality, sales cycles, and platforms all change. Our strength lies in understanding these nuances and building strategies that scale sustainably.
        </p>
      </div>

      <div className={styles.cardsContainer}>
        {projects.map((project, index) => {
          return (
            <Card key={index} project={project} index={index} total={projects.length} range={[index * 0.25, 1]} targetScale={1 - (projects.length - index) * 0.05} progress={scrollYProgress} />
          )
        })}
      </div>
    </section>
  );
};

const Card = ({ project, index, total, range, targetScale, progress }) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start']
  })

  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div ref={container} className={styles.cardWrapper}>
      <motion.div
        className={styles.card}
        style={{
          backgroundColor: project.color,
          color: project.textColor,
          scale: index === total - 1 ? 1 : scale, // Don't scale the last one
          top: `calc(10vh + ${index * 25}px)` // Offset each card slightly
        }}
      >
        <div className={styles.cardContent}>
          <div className={styles.imageSide}>
            <div className={styles.imageContainer}>
              <img src={project.image} alt={project.name} className={styles.image} />
            </div>
          </div>
          <div className={styles.textSide}>
            <h3 className={styles.projectName}>{project.name}</h3>
            <p className={styles.projectDesc}>{project.desc}</p>
            <ul className={styles.pointsList}>
              {project.points.map((point, i) => (
                <li key={i} className={styles.point}>
                  • {point}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default StickyScrollAnimation;
