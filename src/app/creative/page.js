"use client";

import React, { useEffect, useRef, useState } from "react";
import "./creative-project.css";
import GridMotion from "@/components/reactBits/GridMotion";
import Header from "@/components/Header/page";
import creativeData from "../../data/creativeData.json";
import specializedData from "../../data/specializedData.json";
import spotlightData from "../../data/spotlightData.json";
import { Playfair_Display } from "next/font/google";
import Footer from "@/components/footer/page";

const font = Playfair_Display({ subsets: ["latin"], style: "italic" });

const items = Array.from(
  { length: 28 },
  (_, i) => `/creative/img${i + 1}.webp`,
);

export default function Creative() {
  const [activeTab, setActiveTab] = useState("CUPID CLOTHING");
  const [isPaused, setIsPaused] = useState(false);

  const tabs = [
    "CUPID CLOTHING",
    "UBERLYFE",
    "EDUWORLD",
    "HUBHAWAKS",
    "DRONACHARYA",
  ];

  const filtredData = creativeData.filter((item) => item.title === activeTab);

  const scrollRef = useRef(null);
  const loopData = [...filtredData, ...filtredData, ...filtredData];

  // ================= AUTO SCROLL (TOP GALLERY) =================
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let animationId;
    const speed = 1;

    const autoScroll = () => {
      if (!isPaused) {
        container.scrollLeft += speed;

        const maxScroll = container.scrollWidth / 3;
        if (container.scrollLeft >= maxScroll) {
          container.scrollLeft = 0;
        }
      }

      animationId = requestAnimationFrame(autoScroll);
    };

    container.scrollLeft = 0;
    animationId = requestAnimationFrame(autoScroll);

    return () => cancelAnimationFrame(animationId);
  }, [activeTab, isPaused]);

  // ================= HOVER SCROLL (SPECIALIZED) =================
  const scrollRefs = useRef([]);
  const animationRefs = useRef([]);
  const runningRefs = useRef([]);
  const startScroll = (i) => {
    const container = scrollRefs.current[i];
    if (!container) return;
    if (runningRefs.current[i]) return;

    runningRefs.current[i] = true;

    const speed = 2;

    const animate = () => {
      if (!runningRefs.current[i]) return;

      container.scrollLeft += speed;

      if (container.scrollLeft >= container.scrollWidth / 2) {
        container.scrollLeft = 0;
      }

      animationRefs.current[i] = requestAnimationFrame(animate);
    };

    animationRefs.current[i] = requestAnimationFrame(animate);
  };

  const stopScroll = (i) => {
    runningRefs.current[i] = false;

    if (animationRefs.current[i]) {
      cancelAnimationFrame(animationRefs.current[i]);
    }
  };

  return (
    <section>
      <Header />

      {/* ================= HERO ================= */}
      <div className="creative-hero-wrapper">
        <div className="hero-overlay-creative"></div>
        <GridMotion items={items} gradientColor="black" />

        <div className="creative-hero-content">
          <span className="creative-subHeading">EXCELLENCE IN DESIGN</span>

          <h1 className="creative-main-heading">
            Designed <br />
            <span className="creative-heading">
              to be{" "}
              <span className={`${font.className} creative-italic`}>
                looked at
              </span>
            </span>
          </h1>

          <span>
            We craft visual stories that command attention and define brand
            legacies.
          </span>

          <button className="creative-cta-button">
            Start now
            <span className="arrow-wrapper">
              <span className="arrow first-arrow">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </span>
              <span className="arrow second-arrow">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </span>
            </span>
          </button>
        </div>
      </div>

      {/* ================= TAB GALLERY ================= */}
      <section>
        <div className="explore-wrraper">
          <div className="main-heading">
            <p className="sub-heading">CREATIVE PORTFOLIO</p>
            <h1>Meet the Brands We've Scaled</h1>
          </div>

          <div className="explore-tab-wrraper">
            {tabs.map((tab, index) => (
              <div
                key={index}
                className={`tab ${activeTab === tab ? "active" : ""}`}
                onClick={() => setActiveTab(tab)}
              >
                <h5>{tab}</h5>
                {activeTab === tab && <span />}
              </div>
            ))}
          </div>

          <div
            ref={scrollRef}
            className="creatives-images"
            // onMouseEnter={() => setIsPaused(true)}
            // onMouseLeave={() => setIsPaused(false)}
            onTouchStart={() => setIsPaused(true)}
            onTouchEnd={() => setIsPaused(false)}
          >
            {loopData.map((item, index) => (
              <div key={`${item.title}-${index}`} className="creatives-image">
                <img src={item.image} alt={item.title} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SPECIALIZED ================= */}
      <section className="specialized-section">
        <div className="explore-wrraper">
          <div className="main-heading">
            <p className="sub-heading">OUR EXPERTISE</p>
            <h1>OUR EXPERTISE</h1>
          </div>

          <div className="specialized-wrraper">
            {specializedData.map((item, index) => (
              <div key={index} className="specialized-card">
                <p>{item.title}</p>

                <div
                  ref={(el) => (scrollRefs.current[index] = el)}
                  className="images-wrraper"
                  onMouseEnter={() => startScroll(index)}
                  onMouseLeave={() => stopScroll(index)}
                >
                  {[...item.images, ...item.images].map((image, idx) => (
                    <div key={`${image}-${idx}`} className="specialized-image">
                      <img src={image} alt={item.title} />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Performance Spotlight */}
      <section className="performance-spotlight">
        <div className="explore-wrraper">
          <div className="main-heading">
            <p className="sub-heading">OUR EXPERTISE</p>
            <h1>In the Spotlight</h1>
          </div>
          {/* <PerformanceSpotlight showcase /> */}
          <div className="spotlight-wrraper">
            {spotlightData.map((item) => (
              <div key={item.id} className="spotlight-card">
                <img src={item.image} alt={item.title} />
                <div className="spotlight-info-wrraper">
                  <h4>{item.title}</h4>
                  <div className="spotlight-info">
                    <p>
                      {item.purchase}
                      <br />
                      <span>PURCHASE</span>
                    </p>
                    <p>
                      {item.CAC}
                      <br />
                      <span>CAC</span>
                    </p>
                    <p>
                      {item.sale} <br /> <span>SALE</span>
                    </p>
                    <p>
                      {item.ROAS} <br /> <span>ROAS</span>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </section>
  );
}
