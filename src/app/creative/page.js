"use client";

import React, { useState } from "react";
import "./creative-project.css";
import GridMotion from "@/components/reactBits/GridMotion";
import Header from "@/components/Header/page";

const items = Array.from(
  { length: 28 },
  (_, i) => `/creative/img${i + 1}.webp`,
);

export default function Creative() {
  const [activeTab, setActiveTab] = useState("CUPID CLOTHING");
  const tabs = [
    "CUPID CLOTHING",
    "UBERLYFE",
    "COZYCABZ",
    "WOWHEADS",
    "DRONACHARYA",
  ];

  return (
    <section>
      <Header />
      <div className="creative-hero-wrapper">
        <div className="hero-overlay-creative"></div>
        <GridMotion items={items} gradientColor="black" />

        <div className="creative-hero-content">
          <span className="creative-subHeading">EXCELLENCE IN DESIGN</span>
          <h1 className="creative-main-heading ">
            Designed <br />{" "}
            <span className="creative-heading">to be looked at</span>
          </h1>
          <span>
            We craft visual stories that command attention and define brand
            legacies.
          </span>
          <button className="creative-cta-button">
            Start now
            <span className="arrow-wrapper">
              <span className="arrow first-arrow">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                  />
                </svg>
              </span>

              <span className="arrow second-arrow">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                  />
                </svg>
              </span>
            </span>
          </button>
        </div>
      </div>

      {/* Explore Our Brands Section */}
      <section>
        <div className="explore-wrraper">
          <div className="explore-heading">
            <p className="sub-heading">CREATIVE PORTFOLIO</p>
            <h1>Explore Our Brand Ecosystem</h1>
          </div>
          <div className="explore-tab-wrraper">
            {tabs.map((tab, index) => (
              <div
                key={index}
                className={`tab ${activeTab === tab ? "active" : ""}`}
                onClick={() => setActiveTab(tab)}
              >
                <h5>{tab}</h5>
                {activeTab === tab && <span></span>}
              </div>
            ))}
          </div>
        </div>
      </section>
    </section>
  );
}
