"use client";
import React, { useRef, useState } from "react";
import Header from "@/components/Header/page";
import FloatingLines from "@/components/reactBits/FloatingLines";
import LightRays from "@/components/reactBits/LightRays";
import Link from "next/link";
import Image from "next/image";
import { desc } from "framer-motion/client";

const page = () => {
  const formRef = useRef(null);
  const sectionRef = useRef(null);
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });
  const [formData, setFormData] = useState({
    companyName: "",
    budget: "",
    name: "",
    phone: "",
    email: "",
    service: "",
    designation: "",
  });
  const submitHandler = async (e) => {
    e.preventDefault();
    setSending(true);
    try {
      const res = await fetch("/api/send-mail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed");
      alert("Thanks! Your enquiry has been sent.");
      setFormData({
        companyName: "",
        budget: "",
        name: "",
        phone: "",
        email: "",
        service: "",
        designation: "",
      });
    } catch {
      alert("Something went wrong. Please try again.");
    } finally {
      setSending(false);
    }
  };
  const handleMouseMove = (e) => {
    const section = sectionRef.current;

    if (!section) return;
    const rect = section.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    section.style.setProperty("--mx", `${x}px`);
    section.style.setProperty("--my", `${y}px`);
  };
  const handlePhoneChange = (e) => {
    setFormData((s) => ({
      ...s,
      phone: e.target.value.replace(/\D/g, "").slice(0, 10),
    }));
  };

  // Hero Stats
  const stats = [
    {
      id: 1,
      label: "Average ROAS across all campaigns",
      value: "4.2x",
      shortLabel: "Avg ROAS",
    },
    {
      id: 2,
      label: "Ad Spend Managed",
      value: "₹50Cr+",
      shortLabel: "Ad Spend",
    },
    {
      id: 3,
      label: "Clients Served",
      value: "80+",
      shortLabel: "Clients",
    },
    {
      id: 4,
      label: "Years of Expertise",
      value: "6+",
      shortLabel: "Yrs Exp.",
    },
    {
      id: 5,
      label: "Client Retention",
      value: "98%",
      shortLabel: "Retention",
    },
  ];
  const SEODECRIP = [
    {
      id: 1,
      title: "Meta Ads Management",
      description: `Full-funnel Facebook and Instagram ad campaigns - audience research, creative testing, and continuous optimisation across every stage, from first impression to purchase.`,
    },
    {
      id: 2,
      title: "Google Ads Management",
      description: `Search, Shopping, Display, and Performance Max campaigns built to maximise ROAS and eliminate wasted spend - structured Google Ads management for [COUNTRY] businesses.`,
    },
    {
      id: 3,
      title: "Lead Generation Campaigns",
      description: `End-to-end lead generation through paid ads - targeting strategy, ad creative, landing page alignment, and CRM integration - built to deliver qualified leads at a sustainable cost.`,
    },
    {
      id: 4,
      title: "E-commerce Advertising",
      description: `Catalogue ads, dynamic remarketing, and Google Shopping campaigns for D2C and Shopify brands - built to grow purchase volume, improve ROAS, and scale profitably.`,
    },
    {
      id: 5,
      title: "Ad Creative & Copy",
      description: `Performance-led creatives and ad copy built inside a structured testing framework - designed to improve click-through rates, lower cost-per-result, and keep audiences from tuning out.`,
    },
    {
      id: 6,
      title: "Campaign Reporting & Analytics",
      description: `Real-time digital marketing analytics dashboards that show exactly where your budget is going and what it is returning - honest numbers, clear attribution, no vanity metrics.`,
    },
  ];

  return (
    <>
      <Header />
      <section
        ref={sectionRef}
        onMouseMove={handleMouseMove}
        className="relative w-full bg-[#0c0322] min-h-screen text-white overflow-hidden flex flex-col pb-6"
        style={{ "--mx": "50%", "--my": "50%" }}
      >
        {" "}
        <div
          className="absolute inset-0 z-0 pointer-events-none"
          style={{
            backgroundImage: `
                linear-gradient(rgba(167,139,250,0.07) 1px, transparent 1px),
                linear-gradient(90deg, rgba(167,139,250,0.07) 1px, transparent 1px)
              `,
            backgroundSize: "48px 48px",
          }}
        />
        <div
          className="absolute inset-0 z-10 pointer-events-none transition-opacity duration-300"
          style={{
            background: `radial-gradient(
                600px circle at var(--mx) var(--my),
                rgba(124,58,237,0.13) 0%,
                rgba(79,31,191,0.07) 40%,
                transparent 70%
              )`,
          }}
        />
        {/*  GRID CURSOR HIGHLIGHT*/}
        <div
          className="absolute inset-0 z-[1] pointer-events-none"
          style={{
            background: `radial-gradient(
                200px circle at var(--mx) var(--my),
                rgba(167,139,250,0.06) 0%,
                transparent 100%
              )`,
            backgroundImage: `
                linear-gradient(rgba(167,139,250,0.12) 1px, transparent 1px),
                linear-gradient(90deg, rgba(167,139,250,0.12) 1px, transparent 1px)
              `,
            backgroundSize: "48px 48px",
            maskImage: `radial-gradient(280px circle at var(--mx) var(--my), black 0%, transparent 100%)`,
            WebkitMaskImage: `radial-gradient(280px circle at var(--mx) var(--my), black 0%, transparent 100%)`,
          }}
        />
        {/* ── Dark gradient overlay on top of grid ── */}
        <div className="absolute inset-0 z-2 bg-linear-to-b from-[#0F032B]/80 via-[#0F032B]/40 to-[#0F032B]/90 pointer-events-none" />
        <div className="w-full h-[850px] absolute -bottom-2 z-10 hidden md:block">
          <LightRays
            raysOrigin="bottom-center"
            raysColor="#ffffff"
            raysSpeed={1}
            lightSpread={0.5}
            rayLength={3}
            followMouse={true}
            mouseInfluence={0.1}
            noiseAmount={0}
            distortion={0}
            className="custom-rays"
            pulsating={false}
            fadeDistance={1}
            saturation={1}
          />
        </div>
        <div className="md:hidden absolute inset-0 z-0">
          <FloatingLines
            enabledWaves={["top", "middle", "bottom"]}
            lineCount={5}
            lineDistance={5}
            bendRadius={11.5}
            bendStrength={-0.5}
            interactive
            parallax
            topDirection={-1.0}
            middleDirection={1.0}
            bottomDirection={-1.0}
          />
        </div>
        {/* Soft purple glow top */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-175 h-112.5 rounded-full bg-[#6d28d9]/8 blur-[140px] z-2 pointer-events-none" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-175 h-75 rounded-full bg-[#4c1d95]/5 blur-[110px] z-2 pointer-events-none" />
        {/* left sidebar */}
        <div className="absolute left-0 top-0 bottom-0 w-14 z-3 hidden lg:flex flex-col items-center justify-between py-10 pointer-events-none select-none">
          <div
            className="flex flex-col items-center gap-3"
            style={{
              writingMode: "vertical-rl",
              transform: "rotate(180deg)",
            }}
          >
            <span className="w-px h-10 bg-linear-to-t from-white/15 to-transparent" />
            <span
              className="text-[10px] font-semibold tracking-[0.25em] uppercase text-white/20"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Digital Agency
            </span>
          </div>
          <span
            style={{
              writingMode: "vertical-rl",
              transform: "rotate(180deg)",
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(2rem, 3.5vw, 3.2rem)",
              letterSpacing: "0.3em",
              color: "transparent",
              WebkitTextStroke: "1px rgba(167,139,250,0.12)",
            }}
          >
            UNNITY
          </span>
          <div
            className="flex flex-col items-center gap-3"
            style={{
              writingMode: "vertical-rl",
              transform: "rotate(180deg)",
            }}
          >
            <span
              className="text-[10px] font-semibold tracking-[0.25em] uppercase text-white/20"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Est. 2024
            </span>
            <span className="w-px h-10 bg-linear-to-b from-white/15 to-transparent" />
          </div>
          <div className="absolute right-0 top-0 bottom-0 w-px bg-linear-to-b from-transparent via-white/[0.06] to-transparent" />
        </div>
        {/* Right Side */}
        <div className="absolute right-0 top-0 bottom-0 w-14 z-3 hidden lg:flex flex-col items-center justify-between py-10 pointer-events-none select-none">
          <div
            className="flex flex-col items-center gap-3"
            style={{ writingMode: "vertical-rl" }}
          >
            <span className="w-px h-10 bg-linear-to-t from-white/15 to-transparent" />
            <span
              className="text-[10px] font-semibold tracking-[0.25em] uppercase text-white/20"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              50+ Brands
            </span>
          </div>
          <span
            style={{
              writingMode: "vertical-rl",
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(2rem, 3.5vw, 3.2rem)",
              letterSpacing: "0.3em",
              color: "transparent",
              WebkitTextStroke: "1px rgba(167,139,250,0.12)",
            }}
          >
            UNNITY
          </span>
          <div
            className="flex flex-col items-center gap-3"
            style={{ writingMode: "vertical-rl" }}
          >
            <span
              className="text-[10px] font-semibold tracking-[0.25em] uppercase text-white/20"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Scroll Down
            </span>
            <span className="w-px h-10 bg-linear-to-b from-white/15 to-transparent" />
          </div>
          <div className="absolute left-0 top-0 bottom-0 w-px bg-linear-to-b from-transparent via-white/[0.06] to-transparent" />
        </div>
        {/* main content */}
        <div className="relative top-8 z-10 flex-1 flex flex-col items-center sm:justify-center text-center px-6 lg:px-20 pt-24 pb-8">
          {/* Pill label */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/[0.04] mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#a78bfa] animate-pulse shrink-0" />
            <span
              className="text-[11px] font-medium text-white/50 tracking-[0.2em] uppercase"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Elevate your business to the next level
            </span>
          </div>

          {/* Headline */}
          <h1
            className="max-w-300 w-full"
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 700,
              fontSize: "clamp(2.4rem, 5vw, 4.8rem)",
              lineHeight: "1.08",
              letterSpacing: "-0.03em",
            }}
          >
            <h1 className="block text-white">Performance Marketing Built to</h1>
            <span className="block mt-1 bg-linear-to-r from-[#e0d7ff] via-[#a78bfa] to-[#7c3aed] bg-clip-text text-transparent">
              Scale D2C Brands
            </span>
          </h1>

          {/* Divider */}
          <div className="w-12 h-px bg-[#a78bfa]/40 my-5" />

          {/* Body */}
          <p
            className="text-balance leading-[1.85] text-white/45 max-w-200"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              // textAlign: "justify",
            }}
          >
            <strong>Unnity</strong> is a performance marketing agency running
            Meta Ads and Google Ads for D2C brands and businesses across{" "}
            <strong>Country</strong> - precision targeting, data-driven
            creative, and full transparency from day one.
          </p>

          {/* CTA Buttons */}
          <div className="flex items-center gap-4 flex-wrap justify-center mt-8">
            {[
              {
                href: "https://calendly.com/sayam-unnity/30min",
                label: "Start Your Free Trial",
                primary: false,
              },
              {
                href: "/case-studies",
                label: "View Portfolio",
                primary: true,
              },
            ].map(({ href, label, primary }) => (
              <Link key={label} href={href}>
                <button
                  className={`group flex items-center gap-3 text-[#0f032b] ${primary ? "bg-[#0f032b] text-white border border-white/20" : "bg-white"} hover:bg-[#0f032b] hover:text-white hover:border hover:border-white px-6 py-2.5 rounded-full text-base font-medium overflow-hidden cursor-pointer transition-all duration-200 max-sm:w-full max-sm:justify-center`}
                >
                  {label}
                  <span className="relative w-7 h-7 overflow-hidden rounded-full bg-[#0f032b] text-white flex-shrink-0">
                    <span className="absolute inset-0 flex items-center justify-center transition-transform duration-300 group-hover:translate-x-8">
                      <svg
                        viewBox="0 0 24 24"
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                      </svg>
                    </span>
                    <span className="absolute inset-0 flex items-center justify-center -translate-x-8 transition-transform duration-300 group-hover:translate-x-0 group-hover:bg-white group-hover:text-[#0f032b]">
                      <svg
                        viewBox="0 0 24 24"
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                      </svg>
                    </span>
                  </span>
                </button>
              </Link>
            ))}
          </div>

          {/* Stats */}
          <div className="relative z-10 w-full max-w-full mx-auto mt-12 lg:px-0">
            <div className="hidden md:flex items-stretch rounded-md overflow-hidden border border-[#a78bfa]/13 bg-[#a78bfa]/[0.04]">
              {stats.map((stat, index) => (
                <div
                  key={stat.id}
                  className="flex-1 flex flex-col items-center justify-center text-center px-4 py-3 bg-[#0c0322] relative"
                >
                  {index !== 0 && (
                    <span className="absolute left-0 top-[20%] h-[60%] w-px bg-linear-to-b from-transparent via-[#a78bfa]/25 to-transparent" />
                  )}
                  <span className="block w-1.25 h-1.25 rounded-full bg-[#a78bfa]/40 mb-3" />
                  <span
                    className="text-[2.4rem] font-extrabold leading-none tracking-tight bg-linear-to-br from-[#e0d7ff] via-[#a78bfa] to-[#7c3aed] bg-clip-text text-transparent"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                  >
                    {stat.value}
                  </span>
                  <span
                    className="text-[11.5px] font-normal text-white/38 leading-snug max-w-27.5 mt-2"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>

            {/* ── Mobile: 2-col grid ── */}

            <div className="flex md:hidden items-stretch rounded-md overflow-hidden border border-[#a78bfa]/13">
              {stats.map((stat, index) => (
                <div
                  key={stat.id}
                  className="flex-1 flex flex-col items-center justify-center text-center py-3.5 px-1 bg-[#0c0322] relative gap-1"
                >
                  {index !== 0 && (
                    <span className="absolute left-0 top-[15%] h-[70%] w-px bg-gradient-to-b from-transparent via-[#a78bfa]/22 to-transparent" />
                  )}
                  <span
                    className="text-[1.05rem] font-extrabold leading-none tracking-tight bg-gradient-to-br from-[#e0d7ff] via-[#a78bfa] to-[#7c3aed] bg-clip-text text-transparent"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                  >
                    {stat.value}
                  </span>
                  <span
                    className="text-[9px] font-normal text-white/35 leading-tight"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    {stat.shortLabel}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* Lead Form Section */}
      <section className="bg-[#fafbff] py-12 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-2 gap-10 items-center max-lg:grid-cols-1">
          <div className="relative">
            <div className="relative rounded-full bg-[radial-linear(120%_120%_at_30%_20%,#fff_0%,#f3f5fb_45%,#efeefe_100%)] border-2 border-[#ececf6] aspect-square grid place-items-center overflow-hidden max-lg:max-w-lg max-lg:mx-auto">
              <Image
                src="/sayyam2.png"
                width={0}
                height={0}
                sizes="(max-width: 768px) 100vw, 520px"
                alt="Sayam Jain"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>

          <div>
            <span className="text-[#070c1a] text-3xl font-bold">
              Your Growth Partner in the Digital Era
            </span>
            <p className="my-4 mb-6 text-[#5f6577] text-base">
              Let's create impact — fill in the form and we'll take it from
              there.
            </p>

            <form onSubmit={submitHandler} ref={formRef}>
              <div className="grid grid-cols-2 gap-4 max-sm:grid-cols-1">
                {[
                  {
                    id: "companyName",
                    label: "Company Name",
                    type: "text",
                    placeholder: "Company Name",
                    required: true,
                  },
                  {
                    id: "name",
                    label: "Name",
                    type: "text",
                    placeholder: "Name",
                    required: true,
                  },
                  {
                    id: "phone",
                    label: "Phone Number",
                    type: "tel",
                    placeholder: "Phone Number",
                  },
                  {
                    id: "designation",
                    label: "Designation",
                    type: "text",
                    placeholder: "Designation",
                  },
                ].map(({ id, label, type, placeholder, required }) => (
                  <div key={id} className="flex flex-col gap-2">
                    <label htmlFor={id} className="text-base text-[#5f6577]">
                      {label}
                    </label>
                    <input
                      id={id}
                      name={id}
                      type={type}
                      placeholder={placeholder}
                      required={required}
                      value={formData[id]}
                      onChange={
                        id === "phone"
                          ? handlePhoneChange
                          : (e) =>
                              setFormData((s) => ({
                                ...s,
                                [id]: e.target.value,
                              }))
                      }
                      className="border border-[#e6e8f0] bg-white px-3 py-3.5 rounded-lg text-sm text-[#757575] outline-none transition-all focus:border-[#242448] focus:shadow-[0_0_0_3px_rgba(36,36,72,0.12)]"
                    />
                  </div>
                ))}

                <div className="flex flex-col gap-2 col-span-2 max-sm:col-span-1">
                  <label htmlFor="email" className="text-base text-[#5f6577]">
                    Email Address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Email Address"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData((s) => ({ ...s, email: e.target.value }))
                    }
                    className="border border-[#e6e8f0] bg-white px-3 py-3.5 rounded-lg text-base text-[#757575] outline-none transition-all focus:border-[#242448] focus:shadow-[0_0_0_3px_rgba(36,36,72,0.12)]"
                  />
                </div>

                {[
                  {
                    id: "budget",
                    label: "Monthly Marketing Budget",
                    options: [
                      "Monthly Marketing Budget",
                      "Less Than Rs 2L Budget",
                      "Rs 2L to Rs 5L",
                      "Rs 5L to Rs 25L",
                      "More Than 50L",
                      "I am Looking For Organic Services",
                    ],
                  },
                  {
                    id: "service",
                    label: "Choose A Service",
                    options: [
                      "Choose A Service",
                      "SEO",
                      "Paid Marketing (Google, Facebook & Amazon ads)",
                      "UI/UX",
                      "Website Development",
                      "Website Maintenance",
                      "Shopify Migration",
                    ],
                  },
                ].map(({ id, label, options }) => (
                  <div key={id} className="flex flex-col gap-2">
                    <label htmlFor={id} className="text-base text-[#5f6577]">
                      {label}
                    </label>
                    <select
                      id={id}
                      name={id}
                      value={formData[id]}
                      onChange={(e) =>
                        setFormData((s) => ({ ...s, [id]: e.target.value }))
                      }
                      className="border border-[#e6e8f0] bg-white px-3 py-3.5 rounded-lg text-base text-[#757575] outline-none transition-all focus:border-[#242448] appearance-none"
                    >
                      {options.map((o) => (
                        <option key={o}>{o}</option>
                      ))}
                    </select>
                  </div>
                ))}
              </div>

              {status.message && (
                <div
                  className={`mt-2 p-3 rounded-lg text-base ${status.type === "error" ? "bg-[#fff1f1] text-[#a21d1d] border border-[#ffd6d6]" : "bg-[#e9f9ef] text-[#176a3a] border border-[#c6efcf]"}`}
                >
                  {status.message}
                </div>
              )}

              <button
                type="submit"
                disabled={sending}
                className="mt-4 w-full bg-[#130435] hover:bg-[#0d0325] text-white font-bold py-3.5 px-5 border-0 rounded-xl cursor-pointer transition-all active:translate-y-px disabled:opacity-65 disabled:cursor-not-allowed"
              >
                {sending ? "Sending..." : "Send Enquiry"}
              </button>
            </form>
          </div>
        </div>
      </section>
      {/* Measurable Growth Section */}
      <section className="py-16 bg-[#F9FAFB] px-4">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center px-4 mb-10">
          <h2
            className="text-[clamp(1.45rem,2.6vw,2.1rem)] font-bold tracking-tight leading-tight text-[#0c0322] mb-3"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            Performance Marketing Services That Drive Measurable Growth
          </h2>
          <p
            className="text-[13.5px] leading-[1.75] text-[#5f6577]"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Full-funnel Meta Ads and Google Ads management for Indian brands -
            every campaign built on data, every rupee accountable to a result.
          </p>
        </div>

        {/* Cards grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-350 mx-auto lg:mx-auto rounded-lg overflow-hidden border border-[#0F032B]/20"
          style={{ gap: "1px", background: "rgba(124,58,237,0.1)" }}
        >
          {SEODECRIP.map((card) => (
            <div
              key={card.id}
              className="bg-white flex flex-col px-6 py-6 border border-gray-100 hover:border-[#0F032B]/40 transition-all duration-400 ease-in-out"
            >
              <span
                className="text-[2.4rem] font-extrabold leading-none tracking-tighter text-[#0c0322]/07 mb-4 select-none"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                {String(card.id).padStart(2, "0")}
              </span>

              <span className="block w-7 h-0.5 rounded-full bg-linear-to-r from-[#0F032B] to-[#a78bfa] mb-3" />

              <h1 className="text-base font-bold text-[#0c0322] leading-snug mb-2">
                {card.title}
              </h1>
              <p
                className="text-[12.5px] leading-[1.72] text-[#5f6577]"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default page;
