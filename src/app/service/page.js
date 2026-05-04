"use client";
import Header from "@/components/Header/page";
import React, { useState } from "react";

const slides = [
  {
    badge: "SLIDE 01",
    heading1: "SEO Excellence",
    heading2: "Social Impact",
    description:
      "Leading with Exceptional SEO Strategies & Tangible Social Impact.",
    cta: "RANK HIGHER",
    image: "/social.webp",
  },
  {
    badge: "SLIDE 02",
    heading1: "Organic Growth",
    heading2: "Higher Conversions",
    description:
      "Fostering organic growth to achieve higher conversions and enduring success.",
    cta: "GROW ORGANICALLY",
    image: "/social.webp",
  },
  {
    badge: "SLIDE 03",
    heading1: "Performance",
    heading2: "Ads Mastery",
    description:
      "Unnity is a performance marketing agency running Meta Ads and Google Ads for D2C brands and businesses across [COUNTRY] — precision targeting, data-driven creative, and full transparency from day one.",
    cta: "START SCALING",
    image: "/social.webp",
  },
];

const stats = [
  { value: "4.2x", label: "Average ROAS across all campaigns" },
  { value: "98%", label: "Client Retention" },
];

const PanOverService = () => {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((p) => (p === 0 ? slides.length - 1 : p - 1));
  const next = () => setCurrent((p) => (p === slides.length - 1 ? 0 : p + 1));

  const slide = slides[current];

  return (
    <section className="font-sans">
      <Header />

      <div className="relative w-full h-screen  bg-[#0A0A0F] overflow-hidden flex flex-col pt-10">
        {/* Ambient Glows */}
        <div className="pointer-events-none absolute inset-0">
          <div
            style={{
              position: "absolute",
              top: "10%",
              left: "-8%",
              width: "38%",
              height: "65%",
              borderRadius: "50%",
              background:
                "radial-gradient(ellipse at center, #4106c9 0%, #2f0491 45%, transparent 75%)",
              filter: "blur(90px)",
              opacity: 0.5,
              animation: "pulseLeft 7s ease-in-out infinite",
            }}
          />
          <div
            style={{
              position: "absolute",
              top: "55%",
              left: "-4%",
              width: "28%",
              height: "45%",
              borderRadius: "50%",
              background:
                "radial-gradient(ellipse at center, #4106c9 0%, #2f0491 55%, transparent 80%)",
              filter: "blur(70px)",
              opacity: 0.35,
              animation: "pulseLeft 9s ease-in-out infinite reverse",
            }}
          />
        </div>

        {/* Right orange orb */}
        <div className="pointer-events-none absolute inset-0">
          <div
            style={{
              position: "absolute",
              top: "8%",
              right: "-10%",
              width: "40%",
              height: "70%",
              borderRadius: "50%",
              background:
                "radial-gradient(ellipse at center, #0e6ae8 0%, #143a6e 45%, transparent 75%)",
              filter: "blur(90px)",
              opacity: 0.5,
              animation: "pulseRight 7s ease-in-out infinite",
            }}
          />
          <div
            style={{
              position: "absolute",
              top: "50%",
              right: "-5%",
              width: "30%",
              height: "50%",
              borderRadius: "50%",
              background:
                "radial-gradient(ellipse at center, #0e6ae8 0%, #143a6e 55%, transparent 80%)",
              filter: "blur(65px)",
              opacity: 0.35,
              animation: "pulseRight 9s ease-in-out infinite reverse",
            }}
          />
        </div>

        {/* Heading Block */}
        <div className="relative z-10 text-center pt-14 sm:pt-16 px-4">
          <h1
            className=" text-[clamp(1.7rem,4.5vw,4rem)] font-black leading-tight tracking-tight text-white/90"
            style={{
              letterSpacing: "0.02em",
            }}
          >
            {slide.heading1}
          </h1>
          <h2
            className="text-[clamp(1.3rem,4vw,3rem)] font-black leading-tight"
            style={{
              letterSpacing: "0.02em",
              background:
                "linear-gradient(90deg, #F97316 0%, #EC4899 50%, #F97316 100%)",
              backgroundSize: "200% auto",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              animation: "shimmer 4s linear infinite",
            }}
          >
            {slide.heading2}
          </h2>
        </div>

        {/*Main 3-Column Body*/}
        <div className="relative z-10 flex-1 flex items-center">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-6 md:gap-4 items-center pb-10 md:pb-0">
            {/* LEFT — Stats Cards */}
            <div className="flex flex-row md:flex-col gap-3 justify-center md:justify-start order-2 md:order-1">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="rounded-lg px-6 py-5 flex-1 md:flex-none md:max-w-55"
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    backdropFilter: "blur(12px)",
                  }}
                >
                  <p
                    className="text-[clamp(1.8rem,4vw,2.8rem)] font-black text-white"
                    style={{ fontFamily: "'Syne', sans-serif" }}
                  >
                    {s.value}
                  </p>
                  <p className="text-sm text-white/50 mt-1 font-medium">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>

            {/* CENTER — Hero Image */}
            <div className="flex justify-center items-end order-1 md:order-2">
              <div className="relative w-[220px] sm:w-[280px] md:w-[320px] lg:w-[340px]">
                {/* Glow behind image */}
                <div
                  style={{
                    position: "absolute",
                    bottom: "-10%",
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: "80%",
                    height: "40%",
                    borderRadius: "50%",
                    background:
                      "radial-gradient(ellipse, rgba(249,115,22,0.35) 0%, transparent 70%)",
                    filter: "blur(30px)",
                  }}
                />
                <img
                  src={slide.image}
                  alt="Hero visual"
                  className="w-full h-auto object-contain drop-shadow-2xl"
                  style={{ animation: "floatImage 5s ease-in-out infinite" }}
                />
              </div>
            </div>

            {/* RIGHT — Description + CTA */}
            <div className="flex flex-col items-center md:items-end text-center md:text-right gap-5 order-3">
              <p
                className="text-white/50 text-sm sm:text-base max-w-[460px] leading-relaxed"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                {slide.description}
              </p>
              <button
                className="px-7 py-3 rounded-full text-white text-xs sm:text-sm font-bold tracking-widest transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(249,115,22,0.4)]"
                style={{
                  border: "1.5px solid rgba(255,255,255,0.3)",
                  background: "rgba(255,255,255,0.06)",
                  backdropFilter: "blur(10px)",
                  fontFamily: "'Syne', sans-serif",
                }}
              >
                {slide.cta}
              </button>
            </div>
          </div>
        </div>

        {/* Prev+next btns */}
        <button
          onClick={prev}
          className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 cursor-pointer"
          style={{
            background: "rgba(255,255,255,0.07)",
            border: "1px solid rgba(255,255,255,0.15)",
            backdropFilter: "blur(10px)",
          }}
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>

        <button
          onClick={next}
          className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 cursor-pointer"
          style={{
            background: "rgba(255,255,255,0.07)",
            border: "1px solid rgba(255,255,255,0.15)",
            backdropFilter: "blur(10px)",
          }}
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>

        {/* slider dotss */}
        <div className="relative z-10 flex justify-center gap-2 pb-6 sm:pb-8">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className="transition-all duration-300"
              style={{
                width: i === current ? "28px" : "8px",
                height: "8px",
                borderRadius: "99px",
                background:
                  i === current
                    ? "linear-gradient(90deg,#2f0491,#143a6e)"
                    : "rgba(255,255,255,0.2)",
              }}
            />
          ))}
        </div>

        {/* keyFrames */}
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800;900&family=DM+Sans:wght@400;500&display=swap');

          @keyframes pulseLeft {
            0%,100% { transform: scale(1) translateY(0);    opacity: 0.5; }
            50%      { transform: scale(1.1) translateY(-18px); opacity: 0.7; }
          }
          @keyframes pulseRight {
            0%,100% { transform: scale(1) translateY(0);   opacity: 0.5; }
            50%      { transform: scale(1.08) translateY(18px); opacity: 0.65; }
          }
          @keyframes floatImage {
            0%,100% { transform: translateY(0); }
            50%      { transform: translateY(-14px); }
          }
          @keyframes shimmer {
            0%   { background-position: 0% center; }
            100% { background-position: 200% center; }
          }
        `}</style>
      </div>
    </section>
  );
};

export default PanOverService;
