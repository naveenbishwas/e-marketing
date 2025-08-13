"use client";
import React from "react";
import Link from "next/link";
import "./case-studies.css";
import Header from "@/components/Header/page";
import Footer from "@/components/footer/page";

const caseStudies = [
  {
    id: "dentist",
    number: "01",
    title: "Case Study of Dentist",
    excerpt:
      "Welcome to a comprehensive overview of transforming a large dentistry chain's digital marketing strategy....",
    image: "/step-1.avif",
    href: "/case-study-internals/dentist",
  },
  {
    id: "home-appliances",
    number: "02",
    title: "Case Study of Home Appliances",
    excerpt:
      "Mission to dominate the digital advertising space through Google Ads. The journey began with scaling efforts....",
    image: "/step-2.avif",
    href: "/case-studies/home-appliances",
  },
  {
    id: "e-sim",
    number: "03",
    title: "Case Study of E-Sim",
    excerpt:
      "Brand E-Travelsim's journey with Google Ads is a testament to strategic scaling and optimization...",
    image: "/step-3.avif",
    href: "/case-studies/e-sim",
  },
  // ➜ Add more items here as needed
];

export default function CaseStudiesPage() {
  return (
    <>
      <Header />
      <section className="cs-page">
        <div className="cs-container">
          <header className="cs-header">
            <h1>All Case Studies</h1>
            <p className="cs-sub">
              Deep dives across industries—growth stories, channel mixes, and
              learnings.
            </p>
          </header>

          <div className="cs-grid">
            {caseStudies.map((item) => (
              <article className="cs-card" key={item.id}>
                <div className="cs-badge">{item.number}</div>

                <h3 className="cs-title">{item.title}</h3>
                <p className="cs-excerpt">{item.excerpt}</p>

                <div className="cs-media">
                  <img src={item.image} alt={item.title} loading="lazy" />
                </div>

                <div className="cs-actions">
                  <Link href={item.href} className="cs-link">
                    Read Case Study →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
