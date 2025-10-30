// export default Header;
"use client";

import React, { useState } from "react";
import "./header.css";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="header">
        <div className="header-left">
          <Link href="/">
            <Image
              src="/logo.png"
              alt="eMarketing Logo"
              className="logo"
              width={0}
              height={0}
              unoptimized
            />
          </Link>
        </div>

        <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <span className="hamburger-icon">☰</span>
        </button>

        <nav className={`nav-menu ${menuOpen ? "open" : ""}`}>
          <ul>
            <Link href="tel:+919315003754" id="phone-no-desk">
              <div className="phone">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="phone-icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                  />
                </svg>
                <span className="phone-text">+91 931 500 3754</span>
              </div>
            </Link>
            <Link href="/">
              <li>Home</li>
            </Link>
            <Link href="case-studies">
              <li>Case Studies</li>
            </Link>
            <Link href="snapshot-project">
              <li>See Our Work</li>
            </Link>
          </ul>
        </nav>

        <div className="header-right">
          <Link href="tel:+919315003754">
            <div className="phone">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="phone-icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                />
              </svg>
              <span className="phone-text">+91 931 500 3754</span>
            </div>
          </Link>

          <Link href="https://calendly.com/sayam-unnity/30min">
            <button className="cta-button">
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
          </Link>
        </div>
      </header>
    </>
  );
};

export default Header;
