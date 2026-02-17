"use client";

import React, { useState, useEffect } from "react";
import "./header.css";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropOpen, setDropOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  /* ----------- CHECK MOBILE ----------- */
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (!menuOpen) setDropOpen(false);
  }, [menuOpen]);

  useEffect(() => {
    const closeOnOutside = (e) => {
      if (isMobile && !e.target.closest(".drop-down-menu")) {
        setDropOpen(false);
      }
    };

    document.addEventListener("click", closeOnOutside);
    return () => document.removeEventListener("click", closeOnOutside);
  }, [isMobile]);

  /* ----------- DESKTOP HOVER ----------- */
  const handleMouseEnter = () => {
    if (!isMobile) setDropOpen(true);
  };

  const handleMouseLeave = () => {
    if (!isMobile) setDropOpen(false);
  };

  /* ----------- MOBILE TAP ----------- */
  const handleClick = () => {
    if (isMobile) setDropOpen((prev) => !prev);
  };

  return (
    <header className="header">
      {/* LEFT */}
      <div className="header-left">
        <Link href="/">
          <Image
            src="/logo.png"
            alt="Logo"
            className="logo"
            width={100}
            height={40}
            unoptimized
          />
        </Link>
      </div>

      {/* HAMBURGER */}
      <button
        className={`hamburger ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span className="hamburger-bar"></span>
        <span className="hamburger-bar"></span>
        <span className="hamburger-bar"></span>
      </button>

      {/* NAV */}
      <nav className={`nav-menu ${menuOpen ? "open" : ""}`}>
        <ul className="ul-item">
          <Link href="/">
            <li>Home</li>
          </Link>
          <Link href="/case-studies">
            <li>Case Studies</li>
          </Link>

          {/* DROPDOWN */}
          <li
            className="drop-down-menu"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className="drop-trigger" onClick={handleClick}>
              See Our Work
              <span className={`dropdown-arrow ${dropOpen ? "rotate" : ""}`}>
                ▾
              </span>
            </div>

            {/* DESKTOP */}
            {!isMobile && (
              <ul
                className={`drop-down desktop-dropdown ${dropOpen ? "show" : ""}`}
              >
                <li>
                  <Link href="/creative">Creative</Link>
                </li>
                <li>
                  <Link href="/marketing">Marketing</Link>
                </li>
                <li>
                  <Link href="/advertisement">Advertisement</Link>
                </li>
              </ul>
            )}

            {/* MOBILE */}
            {isMobile && (
              <ul className={`mobile-dropdown ${dropOpen ? "show" : ""}`}>
                <li>
                  <Link href="/creative">Creative</Link>
                </li>
                <li>
                  <Link href="/marketing">Marketing</Link>
                </li>
                <li>
                  <Link href="/advertisement">Advertisement</Link>
                </li>
              </ul>
            )}
          </li>
        </ul>
      </nav>

      {/* RIGHT */}
      <div className="header-right">
        <Link href="tel:+919315003754">
          <div className="phone">
            <span className="phone-text">+91 931 500 3754</span>
          </div>
        </Link>

        {/* CTA BUTTON WITH ARROW */}
        <Link href="https://calendly.com/sayam-unnity/30min">
          <button className="cta-button">
            Start now
            <span className="arrow-wrapper">
              <span className="arrow first-arrow">
                <svg viewBox="0 0 24 24" strokeWidth="1.5" fill="none">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                  />
                </svg>
              </span>

              <span className="arrow second-arrow">
                <svg viewBox="0 0 24 24" strokeWidth="1.5" fill="none">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                  />
                </svg>
              </span>
            </span>
          </button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
