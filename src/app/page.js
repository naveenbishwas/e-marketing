"use client";

import Image from "next/image";
import "./page.css";
import Header from "@/components/Header/page";
import { useState, useRef } from "react";
import Link from "next/link";

const features = [
  {
    title: "Email automation",
    description:
      "Choose from a wide range of professionally designed email templates that you can...",
    link: "#",
    image: "/caraousel-1.avif", // Save the first image locally
    alt: "Email automation",
  },
  {
    title: "Customizable templates",
    description:
      "Choose from a wide range of professionally designed email templates that you can...",
    link: "#",
    image: "/caraousel-2.avif", // Save the second image locally
    alt: "Customizable templates",
  },
  {
    title: "A/B Testing",
    description:
      "Choose from a wide range of professionally designed email templates that you can...",
    link: "#",
    image: "/caraousel-3.avif", // Save the third image locally
    alt: "A/B Testing",
  },
  {
    title: "Dummy Part Testing",
    description:
      "Choose from a wide range of professionally designed email templates that you can...",
    link: "#",
    image: "/caraousel-4.avif", // Save the third image locally
    alt: "A/B Testing",
  },
];

const steps = [
  {
    number: "01",
    title: "Sign up and set up your account",
    description:
      "Once inside the dashboard, you can customize your account settings—add your company logo, set up sender details, and import your contact lists from existing platforms. You’ll be ready to launch your first campaign in no time!",
    image: "/step-1.avif",
  },
  {
    number: "02",
    title: "Create and design your campaign",
    description:
      "Personalize your emails with dynamic content, product recommendations, and custom messages. Preview how your emails will look on different devices before sending them.",
    image: "/step-2.avif",
  },
  {
    number: "02",
    title: "Send, track, and optimize",
    description:
      "With just one click, you can send your emails to your targeted audience. Track the performance of your campaign in real-time using detailed analytics—monitor open rates, click-through rates, and conversions..",
    image: "/step-3.avif",
  },
];

export default function Home() {
  const containerRef = useRef(null);

  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: -containerRef.current.offsetWidth,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: containerRef.current.offsetWidth,
        behavior: "smooth",
      });
    }
  };

  return (
    <main className="page-wrapper">
      <Header />

      {/* Hero inside relative wrapper */}
      <div className="hero-wrapper">
        <section className="hero">
          <div className="hero-left">
            <button className="small-btn">
              Elevate your business to the next level
            </button>
            <h1>Reach your audience with precision</h1>
            <p>
              Harness the power of personalized, automated email marketing to
              connect with your audience at the right time.
            </p>

            <a href="https://calendly.com/sayam-unnity/30min?month=2025-08">
              <button className="cta-button" id="banner-btn">
                Start your free trial
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
            </a>
          </div>
          <div className="hero-right">
            <Image
              className="hero-img"
              src="./section1.avif"
              alt="Woman with phone"
              width={0}
              height={0}
              unoptimized
            ></Image>
          </div>
        </section>
      </div>

      <div className="features-carousel">
        <div className="title-nav">
          <span>
            <h2 className="carousel-title">Drive growth with key features</h2>
          </span>
          <span>
            <button className="nav-btn left" onClick={scrollLeft}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
                />
              </svg>
            </button>
            <button className="nav-btn right" onClick={scrollRight}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                />
              </svg>
            </button>
          </span>
        </div>

        <div className="carousel-wrapper">
          <div className="carousel-container" ref={containerRef}>
            {features.map((feature, index) => (
              <div className="feature-card" key={index}>
                <img
                  src={feature.image}
                  alt={feature.alt}
                  className="feature-image"
                />
                <h3 className="feature-label">{feature.title}</h3>
                <p className="feature-desc">{feature.description}</p>

                <span>
                  <Link href={feature.link}>
                    <button>Read more detail</button>
                  </Link>
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <section className="top-choice-section">
        <div className="top-choice-left">
          <h2 className="top-choice-heading">See why we’re the top choice</h2>
          <p className="top-choice-description">
            Join thousands of satisfied customers who trust us for their email
            marketing needs. Our platform offers cutting-edge tools to enhance
            engagement, drive conversions, and simplify marketing efforts.
          </p>
          <button className="top-choice-btn">
            <button className="cta-button" id="on-top">
              More About
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
          </button>
        </div>

        <div className="top-choice-right">
          <div className="stat">
            <span className="stat-number">500,000+</span>
            <p className="stat-description">
              Join a vibrant community of successful marketers
            </p>
          </div>
          <div className="stat">
            <span className="stat-number">95%</span>
            <p className="stat-description">
              Our users love us for our exceptional support.
            </p>
          </div>
          <div className="stat">
            <span className="stat-number">1 Million</span>
            <p className="stat-description">
              We are helping businesses send millions of emails daily.
            </p>
          </div>
          <div className="stat">
            <span className="stat-number">300+</span>
            <p className="stat-description">
              Easily connect with your favorite tools to boost your marketing.
            </p>
          </div>
        </div>
      </section>

      <section className="step-section">
        {steps.map((step, i) => (
          <div className="step-row" key={i}>
            <div className="step-left">
              <div className="sticky-step">
                <div className="step-number">{step.number}</div>
                <h3 className="step-title">{step.title}</h3>
                <p className="step-description">{step.description}</p>
              </div>
            </div>
            <div className="step-right">
              <img src={step.image} alt={step.title} className="step-image" />
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
