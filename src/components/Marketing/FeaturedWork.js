"use client";
import { useEffect, useState, useRef } from "react";
import styles from "./FeaturedWork.module.css";

const FeaturedWork = () => {
  const [activeProject, setActiveProject] = useState(0);
  const sectionRef = useRef(null);
  const projects = [
    {
      id: "01",
      name: "Powermowers – Performance Marketing for Australia’s Leading Lawn Mower Brand",
      desc: "We helped Powermowers unlock scalable eCommerce growth by restructuring campaigns, deep product category focus, and aligning Performance Max + Meta ads.",
      points: [
        "Scaled Shopify revenue by 40% in one month.",
        "Achieved ROAS of 16+ on Meta and 30+ on Google.",
        "Ensured sustained demand in peak seasonal periods.",
        "Transitioned from SKU-heavy inefficiency to profitable category-led scaling.",
      ],
      image: "./images/tiger_patch.png",
    },
    {
      id: "02",
      name: "Cupid Clothing – India’s Plus-Size Dailywear Brand",
      desc: "We grew Cupid Clothing from early-stage sales to a consistently scaling D2C brand.",
      points: [
        "Increased sales by 175% over two years.",
        "Generated Rs 1.72 crore Shopify revenue in the last 12 months.",
        "Monthly return customer rate improved from 25% to 55%.",
        "Expanded product categories like long tops and trackpants while revamping the site for CRO and SEO.",
      ],
      image: "/images/varsity_d_patch.png",
    },
    {
      id: "03",
      name: "Uberlyfe – India’s Space-Saving Sofa Bed Brand",
      desc: "Uberlyfe needed scale beyond price advertising, and we focused on contextual communication and city penetration strategies.",
      points: [
        "71% sales growth compared to the previous period.",
        "Breakthrough performance in Bangalore through fast delivery/next-day messaging.",
        "Repeat demand and seasonal amplification driven through creative positioning.",
      ],
      image: "/images/fist_patch.png",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const sectionTop = rect.top;
      const sectionHeight = rect.height;
      const windowHeight = window.innerHeight;

      // Calculate progress through the section (0 to 1)
      // We want it to start when the section hits the top (or slightly before)
      // and end when the bottom hits the bottom.

      // Actually, simpler: map the scroll distance within the section to the index.
      // Valid scroll range: from when section top is at 0 to when section bottom is at windowHeight.

      const scrollableDistance = sectionHeight - windowHeight;
      const scrolled = -sectionTop;

      if (scrolled < 0) {
        setActiveProject(0);
        return;
      }

      if (scrolled > scrollableDistance) {
        setActiveProject(projects.length - 1);
        return;
      }

      const progress = scrolled / scrollableDistance;
      const index = Math.max(
        0,
        Math.min(Math.floor(progress * projects.length), projects.length - 1)
      );

      setActiveProject(index);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [projects.length]);

  return (
    <section className={styles.featuredWork} ref={sectionRef}>
      <div className={styles.stickyContainer}>
        <div className={styles.container}>
          <div className={styles.header}>
            <h2 className={styles.heading}>Our Work</h2>
            <p className={styles.subheading}>
              Case studies of digital transformation.
            </p>
          </div>

          <div className={styles.contentWrapper}>
            <div className={styles.textColumn}>
              {projects.map((project, index) => (
                <div
                  key={index}
                  className={`${styles.textSection} ${
                    activeProject === index ? styles.activeText : ""
                  }`}
                >
                  <div className={styles.metaWrapper}>
                    <span className={styles.number}>{project.id}</span>
                    <div className={styles.line}></div>
                  </div>

                  <h3 className={styles.projectName}>{project.name}</h3>
                  <p className={styles.projectDesc}>{project.desc}</p>

                  {project.points && (
                    <ul className={styles.pointsList}>
                      {project.points.map((point, i) => (
                        <li key={i}>{point}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>

            <div className={styles.imageColumn}>
              <div className={styles.imageWrapper}>
                {projects.map((project, index) => {
                  let stateClass = styles.future;
                  if (index === activeProject) stateClass = styles.active;
                  else if (index < activeProject) stateClass = styles.past;

                  return (
                    <div
                      key={index}
                      className={`${styles.imageCard} ${stateClass}`}
                    >
                      <img src={project.image} alt={project.name} />
                      <div className={styles.overlay}></div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedWork;
