"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import "./creative-project.css";
import GridMotion from "@/components/reactBits/GridMotion";
import Header from "@/components/Header/page";
import creativeData from "../../data/creativeData.json";
import specializedData from "../../data/specializedData.json";
import spotlightData from "../../data/spotlightData.json";
import { Playfair_Display } from "next/font/google";
import Footer from "@/components/footer/page";
import SpecializedSection from "./Specializedsection";

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
  const loopData = [...filtredData, ...filtredData];

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let animationId;
    const speed = 1;

    let firstSetWidth = 0;

    const measure = () => {
      const firstCard = container.firstElementChild;
      if (!firstCard) return;

      const cardCount = filtredData.length;
      const cardWidth = firstCard.getBoundingClientRect().width;
      const marginRight = parseFloat(
        getComputedStyle(firstCard).marginRight || "0",
      );
      firstSetWidth = (cardWidth + marginRight) * cardCount;
    };

    const rafId = requestAnimationFrame(() => {
      measure();
      container.scrollLeft = 0;
      animationId = requestAnimationFrame(autoScroll);
    });

    const autoScroll = () => {
      if (!isPaused) {
        container.scrollLeft += speed;

        if (firstSetWidth <= 0) measure();

        if (firstSetWidth > 0 && container.scrollLeft >= firstSetWidth) {
          container.scrollLeft -= firstSetWidth;
        }
      }
      animationId = requestAnimationFrame(autoScroll);
    };

    return () => {
      cancelAnimationFrame(rafId);
      cancelAnimationFrame(animationId);
    };
  }, [activeTab, isPaused, filtredData.length]);

  return (
    <section>
      <Header />

      {/* HERO */}
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

      {/* TAB GALLERY */}
      <section>
        <div className="explore-wrraper">
          <div className="main-heading">
            {/* <p className="sub-heading">CREATIVE PORTFOLIO</p> */}
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
            onTouchStart={() => setIsPaused(true)}
            onTouchEnd={() => setIsPaused(false)}
          >
            {loopData.map((item, index) => (
              <div key={`${item.title}-${index}`} className="creatives-image">
                <img src={item.image} alt={item.title} loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SPECIALIZED — replaced with new component */}
      <SpecializedSection specializedData={specializedData} />

      {/* PERFORMANCE SPOTLIGHT */}
      <section className="performance-spotlight">
        <div className="explore-wrraper">
          <div className="main-heading">
            {/* <p className="sub-heading">OUR EXPERTISE</p> */}
            <h1>In the Spotlight</h1>
          </div>

          <div className="spotlight-wrraper">
            {spotlightData.map((item) => (
              <div key={item.id} className="spotlight-card">
                <img src={item.image} alt={item.title} loading="lazy" />
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
                      {item.sale}
                      <br />
                      <span>SALE</span>
                    </p>
                    <p>
                      {item.ROAS}
                      <br />
                      <span>ROAS</span>
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
