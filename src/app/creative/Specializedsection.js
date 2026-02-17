"use client";

import React, { useRef, useEffect } from "react";
import "./specializedSection.css";

function SpecializedCard({ item }) {
  const stripRef = useRef(null);
  const rafRef = useRef(null);
  const posRef = useRef(0);
  const halfRef = useRef(0);

  // 4x repeat — strip always longer than widest card
  const loopImages = [...item.images, ...item.images];

  useEffect(() => {
    const strip = stripRef.current;
    if (!strip) return;

    const measure = () => {
      const slides = strip.querySelectorAll(".sc-slide");
      if (!slides.length) return 0;
      const w = slides[0].getBoundingClientRect().width;
      const gap = parseFloat(getComputedStyle(strip).gap) || 0;
      return (w + gap) * item.images.length; // one set width
    };

    const tick = () => {
      posRef.current += 0.55;
      if (!halfRef.current) halfRef.current = measure();
      if (halfRef.current > 0 && posRef.current >= halfRef.current) {
        posRef.current -= halfRef.current;
      }
      strip.style.transform = `translateX(-${posRef.current}px)`;
      rafRef.current = requestAnimationFrame(tick);
    };

    const t = setTimeout(() => {
      halfRef.current = measure();
      rafRef.current = requestAnimationFrame(tick);
    }, 80);

    return () => {
      clearTimeout(t);
      cancelAnimationFrame(rafRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="sc-card">
      {/* Title */}
      <div className="sc-header">
        <span className="sc-title">{item.title}</span>
        <span className="sc-arrow">↗</span>
      </div>

      {/* Scrolling images — always running, no pause ever */}
      <div className="sc-body">
        <div className="sc-strip" ref={stripRef}>
          {loopImages.map((src, i) => (
            <div key={i} className="sc-slide">
              <img src={src} alt={item.title} loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function SpecializedSection({ specializedData }) {
  return (
    <section className="specialized-section">
      <div className="explore-wrraper">
        <div className="main-heading">
          {/* <p className="sub-heading">OUR EXPERTISE</p> */}
          <h1>OUR EXPERTISE</h1>
        </div>
        <div className="sc-wrapper">
          {specializedData.map((item, i) => (
            <SpecializedCard key={i} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
