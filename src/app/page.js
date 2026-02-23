"use client";

let hasLoaded = false;

import Image from "next/image";
import Header from "@/components/Header/page";
import { useState, useRef, useEffect, useMemo } from "react";
import Link from "next/link";
import Footer from "@/components/footer/page";
import { FaFire } from "react-icons/fa";
import { LuZap } from "react-icons/lu";
import { IoDiamondOutline } from "react-icons/io5";
import Loading from "./loading";
import CountUp from "@/components/reactBits/CountUp";
import dynamic from "next/dynamic";

const FloatingLines = dynamic(
  () => import("@/components/reactBits/FloatingLines"),
  { ssr: false },
);

const LOGO_IMAGES = [
  "/empire1.png",
  "/aqua1.png",
  "/comforto.png",
  "/da1.png",
  "/adpl2.png",
  "/edoofa.png",
  "/hardoll.png",
  "/hub1.png",
  "/nira.png",
  "/orchid-blue.png",
  "/wow-heads.png",
  "/sain.png",
  "/sky.png",
  "/aurave1.png",
  "/uk.png",
  "/cupid1.png",
  "/e-travel.avif",
  "/isu1.png",
  "/kapur1.png",
  "/madve.png",
  "/mireads.avif",
  "/power-mower.webp",
  "/uberlyfe1.png",
  "/hub1.png",
];

const features = [
  {
    title: "Development Solutions",
    description:
      "We build custom solutions using Shopify, Next.js, and robust backend technologies. From eCommerce to web apps, we handle everything from databases to clean, scalable code.",
    image: "/Dev_sol.jpeg",
    alt: "Dev Solutions",
  },
  {
    title: "Meta Ads",
    description:
      "We run high-converting Meta Ads that drive traffic, leads, and sales. From strategy to creatives and optimization, we manage it all for measurable growth.",
    image: "/meta_ads.jpeg",
    alt: "Meta Ads",
  },
  {
    title: "Google Ads",
    description:
      "We create and manage data-driven Google Ads campaigns to boost visibility and conversions. From search to display, we optimize every click for maximum ROI.",
    image: "/google-ads.jpeg",
    alt: "Google Ads",
  },
  {
    title: "Linkedin Ads",
    description:
      "We craft targeted LinkedIn Ads to connect you with decision-makers and drive B2B growth. From audience building to ad optimization, we deliver results that matter.",
    image: "/linkdin-ads.jpeg",
    alt: "LinkedIn Ads",
  },
  {
    title: "Brand Identity",
    description:
      "We build strong brand identities that reflect your vision and resonate with your audience. From logos to visual systems, we create cohesive designs that leave a lasting impression.",
    image: "/brand_id.jpeg",
    alt: "Brand Identity",
  },
];

const steps = [
  {
    number: "01",
    title: "Case Study of Dentist",
    description:
      "Welcome to a comprehensive overview of transforming a large dentistry chain's digital marketing strategy....",
    image: "/step-1.avif",
    href: "/case-study-internals/dentist",
  },
  {
    number: "02",
    title: "Case Study of Home Appliances",
    description:
      "Mission to dominate the digital advertising space through Google Ads. The journey began with scaling efforts....",
    image: "/step-2.avif",
    href: "/case-study-internals/home-appliance",
  },
  {
    number: "03",
    title: "Case Study of E-Sim",
    description:
      "Brand E-Travelsim's journey with Google Ads is a testament to strategic scaling and optimization...",
    image: "/step-3.avif",
    href: "/case-study-internals/travel",
  },
];

const testimonials = [
  {
    name: "— Rishab B. | Founder of BabLouie",
    role: "BabLouie",
    feedback:
      "In the early days of our brand-building journey, one thing that stood out about Unnity was its relentless drive — constantly experimenting, refining, and pushing forward until results were achieved. This grit and unwavering commitment to delivering outcomes truly make Unnity a company that’s in it to win.",
  },
  {
    name: "— Tarun J. | Founder of Tashe and Sain Milks",
    role: "Website Development & Performance Marketing",
    feedback:
      "I hired Unnity for performance marketing of Sain Milks, and they did a fantastic job in delivering the promised goals. The team is highly experienced, meticulous, and gathered valuable insights about the industry and its users to achieve even better results. They also designed the Sain Milks website, which I loved — it’s user-friendly, aesthetically pleasing, and professionally built. I was so impressed that I entrusted them with another website for my other business, Tashe, and they are doing an excellent job on that as well. Wishing Unnity even greater success in the future — highly recommended!",
  },
  {
    name: "— Vandita, Founder-Iyurved",
    role: "Dentistry",
    feedback:
      "I highly recommend Sayam J. for his exceptional capabilities and performance. During his time at 'Unbundl', Sayam efficiently managed our ad accounts, focusing on driving high-quality leads. He consistently showed reliability and responsibility in this role. Sayam's expertise in digital marketing was evident as he contributed significantly to our campaign successes. Based on his proven track record and deep domain knowledge, I wholeheartedly endorse Sayam for any role requiring digital marketing expertise. He's a valuable asset to any team.",
  },
  {
    name: "— Cupidclothings - Tanya",
    role: "Apparel",
    feedback:
      "Cupid started its own website in 2020, and since then our journey with Mr. Sayam and his team at Team Unnity has been closely associated with our growth. They handle both performance marketing and social media for us. We began with a modest daily ad budget of around ₹500+, and over time their team has successfully scaled it to ₹20,000+ per day. Reason for continuity have been their deep involvement with data—they regularly share detailed Excel reports, conduct weekly review meetings, and ensure clear communication at every stage.Compared to other agencies we’ve worked with, the personal touch and",
  },
  {
    name: "— Alex Johnson",
    role: "Sales Director",
    feedback:
      "We've streamlined our processes, cut costs, and significantly improved customer satisfaction. Its been a game-changer for our business!",
  },
];

const members = [
  { name: "Sayam Jain", role: "Founder & CEO", photo: "/sayyam2.png" },
  { name: "Muskan", role: "Social Media", photo: "/muskan-2.jpg" },
  { name: "Anjali", role: "Marketing", photo: "/anjali.jpeg" },
  { name: "Naveen", role: "Web Developer", photo: "/naveen-01.jpeg" },
  { name: "Shubham", role: "Web Developer", photo: "/shubham.jpeg" },
  { name: "Manisha", role: "Creatives", photo: "/manisha-03.jpeg" },
  { name: "Rohit", role: "Head of Marketing", photo: "/rohit2.jpeg" },
  { name: "Muskan", role: "Project Coordinator", photo: "/muskanT.jpg" },
  { name: "Sarthak", role: "Marketing Executive", photo: "/sarthak.jpeg" },
  { name: "Yalka", role: "Video Editor Intern", photo: "/yalka.jpg" },
  { name: "Himanshu", role: "Social Media Intern", photo: "/himanshu.jpg" },
  { name: "Moksh Chauhan", role: "Marketing", photo: "/moksh.jpg" },
];

const gallery = [
  {
    src: "/arch-m.png",
    alt: "Adplusa",
    href: "https://architect-sigma.vercel.app/",
  },
  {
    src: "/cupid-m.png",
    alt: "Cupid Clothings",
    href: "https://cupidclothings.com/",
  },
  { src: "/uber2-m.png", alt: "Uberlyfe", href: "https://uberlyfe.com/" },
  {
    src: "/dev-m.png",
    alt: "Devkinandan Steel",
    href: "https://www.devkinandansteel.com/",
  },
  {
    src: "/kryss-m.png",
    alt: "Kryys Global",
    href: "https://www.kryysglobal.com/",
  },
  {
    src: "/aiva-m.png",
    alt: "Aiva Jewellery",
    href: "https://aivajewellery.com/",
  },
  { src: "/da2-m.png", alt: "Da Urban", href: "https://daurban.com/" },
  { src: "/aurave-m.png", alt: "Aurave", href: "https://www.auravedecor.in/" },
  {
    src: "/hub2-m.png",
    alt: "HubHawks",
    href: "https://sniper-ruddy.vercel.app/",
  },
  { src: "/isu2-m.png", alt: "ISU Fashion", href: "https://isufashion.com/" },
  { src: "/mi-m.png", alt: "MiReads", href: "https://mireads.com/" },
  { src: "/mad-m.png", alt: "Madverse", href: "https://www.madverse.co/" },
];

const columns = [0, 1, 2].map((col) => gallery.filter((_, i) => i % 3 === col));

// --------------------------------------------
// Smooth Testimonial Slider
// --------------------------------------------
function TestimonialSlider({ testimonials }) {
  const [current, setCurrent] = useState(0);
  const [visible, setVisible] = useState(true);
  const [slideDir, setSlideDir] = useState("next");
  const total = testimonials.length;
  const timerRef = useRef(null);

  const goTo = (idx, dir) => {
    setSlideDir(dir);
    setVisible(false);
    setTimeout(() => {
      setCurrent((idx + total) % total);
      setVisible(true);
    }, 350);
  };

  const next = () => goTo(current + 1, "next");
  const prev = () => goTo(current - 1, "prev");

  useEffect(() => {
    timerRef.current = setInterval(next, 5000);
    return () => clearInterval(timerRef.current);
  }, [current]);

  const t = testimonials[current];

  const slideStyle = {
    transition: "opacity 0.35s ease, transform 0.35s ease",
    opacity: visible ? 1 : 0,
    transform: visible
      ? "translateX(0)"
      : slideDir === "next"
        ? "translateX(-40px)"
        : "translateX(40px)",
  };

  return (
    <section className="bg-[#f9f5ec] py-12 px-5">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center gap-4 mb-10 flex-wrap max-md:justify-center">
          <h2 className="text-[clamp(2rem,4vw,3rem)] font-bold text-[#111] leading-tight tracking-tight capitalize max-md:text-center">
            What our customers are saying
          </h2>
        </div>

        <div
          style={slideStyle}
          className="bg-white border border-[#e6e0d3] rounded-2xl p-10 shadow-[0_10px_40px_rgba(17,24,39,0.08)] max-sm:p-6 min-h-72"
        >
          <div className="text-[#d1c6ad] mb-6">
            <svg width="44" height="44" viewBox="0 0 24 24">
              <path
                d="M9.5 7C7.6 7 6 8.6 6 10.5S7.6 14 9.5 14c.3 0 .5 0 .8-.1-.3 1.3-1.1 2.6-2.6 3.9-.3.3-.3.8 0 1.1.3.3.8.3 1.1 0 2.2-1.9 3.2-4 3.2-6.1V10.5C12 8.6 10.4 7 8.5 7h1zM18.5 7c-1.9 0-3.5 1.6-3.5 3.5S16.6 14 18.5 14c.3 0 .5 0 .8-.1-.3 1.3-1.1 2.6-2.6 3.9-.3.3-.3.8 0 1.1.3.3.8.3 1.1 0 2.2-1.9 3.2-4 3.2-6.1V10.5C21 8.6 19.4 7 17.5 7h1z"
                fill="currentColor"
              />
            </svg>
          </div>
          <p className="text-xl leading-relaxed text-[#2b2b2b] mb-8 max-sm:text-base">
            {t.feedback}
          </p>
          <div className="flex items-center justify-between flex-wrap gap-4 border-t border-[#e6e0d3] pt-6">
            <div>
              <strong className="text-base font-bold text-[#111] block">
                {t.name}
              </strong>
              <span className="text-sm text-[#666] mt-0.5 block">{t.role}</span>
            </div>
            <div className="flex gap-2 items-center">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    clearInterval(timerRef.current);
                    goTo(i, i > current ? "next" : "prev");
                  }}
                  className={`rounded-full transition-all duration-300 ${i === current ? "w-6 h-2.5 bg-[#0f032b]" : "w-2.5 h-2.5 bg-[#ccc] hover:bg-[#999]"}`}
                  aria-label={`Go to ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        <p className="text-center text-sm text-[#aaa] mt-4 tracking-wide">
          {current + 1} / {total}
        </p>

        <div className="max-w-full w-full flex gap-2.5 justify-center mt-4">
          {[prev, next].map((fn, i) => (
            <button
              key={i}
              onClick={() => {
                clearInterval(timerRef.current);
                fn();
              }}
              className="bg-[#0f032b] hover:bg-[#1a0550] text-white p-3 rounded-xl transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
              aria-label={i === 0 ? "Previous" : "Next"}
            >
              <svg
                viewBox="0 0 24 24"
                width="20"
                height="20"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path
                  d={
                    i === 0
                      ? "M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
                      : "M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                  }
                />
              </svg>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

// --------------------------------------------
// Main Page
// --------------------------------------------
export default function Home() {
  const formRef = useRef(null);
  const [loading, setLoading] = useState(!hasLoaded);
  const [q, setQ] = useState("");
  const [role, setRole] = useState("All");
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

  const roles = useMemo(
    () => ["All", ...Array.from(new Set(members.map((m) => m.role)))],
    [],
  );
  const shown = useMemo(
    () =>
      members.filter((m) => {
        const matchesRole = role === "All" || m.role === role;
        const matchesQ =
          !q ||
          m.name.toLowerCase().includes(q.toLowerCase()) ||
          m.role.toLowerCase().includes(q.toLowerCase());
        return matchesRole && matchesQ;
      }),
    [q, role],
  );

  useEffect(() => {
    if (hasLoaded) return;
    const timer = setTimeout(() => {
      hasLoaded = true;
      setLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loading />;

  const handlePhoneChange = (e) => {
    setFormData((s) => ({
      ...s,
      phone: e.target.value.replace(/\D/g, "").slice(0, 10),
    }));
  };

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

  return (
    <>
      <main>
        <Header />

        {/* =============================
        Hero with floating lines(react-bits)
        ================================= */}
        <section className="relative w-full bg-linear-to-b from-[#030614] to-[#0b1221] text-white overflow-hidden px-8 pt-16 pb-20 max-md:px-5">
          <div className="absolute inset-0 z-10">
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

          {/* Dark overlay */}
          <div className="absolute inset-0 z-10 bg-linear-to-b from-[rgba(2,4,16,0.67)] to-[rgba(11,18,33,0.69)]" />

          {/* Hero content */}
          <div className="relative top-10 sm:top-0 z-20 flex flex-row justify-between items-center gap-8 pb-10 max-md:flex-col max-md:items-start">
            {/* LEFT */}
            <div className="max-w-3xl w-full pl-10 pr-5 max-md:w-full max-md:pl-0 max-sm:text-center">
              <button className="bg-white text-black px-4 py-2 text-sm font-bold rounded-md shadow mb-8 mt-[10%] max-sm:mt-5">
                Elevate your business to the next level
              </button>
              <h1 className="lg:text-6xl font-semibold md:leading-10 lg:leading-18 capitalize mt-5 md:text-4xl sm:text-3xl text-3xl">
                Crafting Digital <br /> Brands That Stand Out
              </h1>
              <p className="text-xl my-5 pb-10 text-[#c1bdbd] max-md:text-lg max-sm:text-base font-satoshi">
                At Unnity, we help brands grow in the digital world. Our
                tailored marketing solutions boost your online presence, engage
                your audience, and drive real results. Let Unnity unlock your
                brand's full potential.
              </p>
              <div className="flex gap-5 items-center flex-wrap max-sm:justify-center">
                {[
                  {
                    href: "https://calendly.com/sayam-unnity/30min",
                    label: "Start Your Free Trial",
                  },
                  { href: "/case-studies", label: "View Portfolio" },
                ].map(({ href, label }) => (
                  <Link key={label} href={href}>
                    <button className="group flex items-center gap-3 bg-white text-[#0f032b] hover:bg-[#0f032b] hover:text-white hover:border hover:border-white px-6 py-2.5 rounded-full text-base font-medium overflow-hidden cursor-pointer transition-all duration-200 max-sm:w-full max-sm:justify-center">
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
            </div>

            {/* RIGHT — All Purple, Staggered Depth */}
            <div className="w-1/2 flex items-center justify-center max-md:w-full md:mt-16">
              <div className="relative flex flex-col gap-8 md:gap-20 w-full max-w-[400px] max-md:flex-row max-md:flex-wrap max-md:justify-center max-sm:flex-col">
                {/* Ambient background glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-[#7c3aed]/10 rounded-full blur-3xl pointer-events-none" />

                {/* ── Badge 1  */}
                <div className="relative self-end max-w-full w-full group">
                  {/* outer glow ring */}
                  <div className="absolute -inset-px rounded-lg bg-gradient-to-br from-[#a78bfa]/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative flex items-center gap-4 px-5 py-4 rounded-lg border border-[#a78bfa]/20 bg-gradient-to-br from-[#13103a]/90 to-[#0c0e1f]/95 backdrop-blur-md shadow-[0_8px_32px_rgba(124,58,237,0.15)] group-hover:shadow-[0_8px_40px_rgba(167,139,250,0.25)] group-hover:-translate-y-1 transition-all duration-400 overflow-hidden">
                    {/* shimmer top */}
                    <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-[#a78bfa]/50 to-transparent" />
                    {/* left accent bar */}
                    <div className="absolute left-0 top-4 bottom-4 w-[3px] rounded-full bg-gradient-to-b from-[#a78bfa] to-[#7c3aed]" />
                    {/* glow corner */}
                    <div className="absolute -top-4 -right-4 w-16 h-16 bg-[#a78bfa]/15 rounded-full blur-xl group-hover:bg-[#a78bfa]/25 transition-all duration-500" />

                    {/* Recycle circle */}
                    <div className="relative flex-shrink-0 w-12 h-12">
                      <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-[#a78bfa] border-r-[#a78bfa]/35 animate-spin [animation-duration:3s]" />
                      <div className="absolute inset-[4px] rounded-full border border-transparent border-b-[#7c3aed]/50 border-l-[#7c3aed]/25 animate-spin [animation-duration:2s] [animation-direction:reverse]" />
                      <div className="absolute inset-[9px] rounded-full bg-[#a78bfa]/15 animate-pulse" />
                      <div className="absolute inset-[8px] rounded-full bg-[#09061a] border border-[#a78bfa]/25 flex items-center justify-center">
                        <LuZap className="text-xs text-[#a78bfa]" />
                      </div>
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-0.5">
                        <span className="text-sm font-bold text-white">
                          Graphic Design
                        </span>
                        <span className="text-[9px] px-1.5 py-0.5 rounded-full bg-[#a78bfa]/15 text-[#a78bfa] font-semibold border border-[#a78bfa]/30">
                          CREATIVE
                        </span>
                      </div>
                      <p className="text-[11px] text-white/40">
                        Designs that demand attention
                      </p>
                      <div className="flex items-center gap-1.5 mt-2">
                        {[1, 2, 3].map((i) => (
                          <div
                            key={i}
                            className="rounded-full bg-[#a78bfa]/50 animate-pulse"
                            style={{
                              width: i * 5 + 3,
                              height: i * 5 + 3,
                              animationDelay: `${i * 0.3}s`,
                            }}
                          />
                        ))}
                        <span className="text-[9px] text-white/20 ml-1 tracking-widest">
                          Design That Converts
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* ── Badge 2 — Performance Marketing (middle, pushed left, slightly bigger) ── */}
                <div className="relative self-start max-w-full w-full group md:-ml-18">
                  <div className="absolute -inset-px rounded-lg bg-gradient-to-bl from-[#a78bfa]/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative flex items-center gap-4 px-5 py-5 rounded-lg border border-[#a78bfa]/25 bg-gradient-to-br from-[#16123f]/95 to-[#0c0e1f]/95 backdrop-blur-md shadow-[0_8px_40px_rgba(124,58,237,0.2)] group-hover:shadow-[0_8px_48px_rgba(167,139,250,0.3)] group-hover:-translate-y-1 transition-all duration-400 overflow-hidden">
                    <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-[#a78bfa]/60 to-transparent" />
                    <div className="absolute left-0 top-4 bottom-4 w-[3px] rounded-full bg-gradient-to-b from-[#c4b5fd] to-[#a78bfa]" />
                    <div className="absolute -top-6 -left-6 w-20 h-20 bg-[#7c3aed]/20 rounded-full blur-2xl group-hover:bg-[#7c3aed]/30 transition-all duration-500" />

                    <div className="relative flex-shrink-0 w-13 h-13">
                      <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-[#c4b5fd] border-r-[#c4b5fd]/35 animate-spin [animation-duration:2.5s] [animation-direction:reverse]" />
                      <div className="absolute inset-[4px] rounded-full border border-transparent border-b-[#a78bfa]/50 border-l-[#a78bfa]/25 animate-spin [animation-duration:1.8s]" />
                      <div className="absolute inset-[9px] rounded-full bg-[#c4b5fd]/15 animate-pulse [animation-delay:0.3s]" />
                      <div className="absolute inset-[8px] rounded-full bg-[#09061a] border border-[#c4b5fd]/25 flex items-center justify-center">
                        <FaFire className="text-xs text-[#c4b5fd]" />
                      </div>
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-0.5">
                        <span className="text-sm font-bold text-white">
                          Performance Marketing
                        </span>
                        <span className="text-[9px] px-1.5 py-0.5 rounded-full bg-[#a78bfa]/15 text-[#c4b5fd] font-semibold border border-[#c4b5fd]/30">
                          ROI
                        </span>
                      </div>
                      <p className="text-[11px] text-white/40">
                        Clicks to customers
                      </p>
                      <div className="flex items-center gap-1.5 mt-2">
                        {[1, 2, 3].map((i) => (
                          <div
                            key={i}
                            className="rounded-full bg-[#a78bfa]/50 animate-pulse"
                            style={{
                              width: i * 5 + 3,
                              height: i * 5 + 3,
                              animationDelay: `${i * 0.3}s`,
                            }}
                          />
                        ))}
                        <span className="text-[9px] text-white/20 ml-1 tracking-widest">
                          ROAS optimization
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* ── Badge 3 — Website Design (bottom, pushed right, smallest) ── */}
                <div className="relative self-end max-w-full w-full group">
                  <div className="absolute -inset-px rounded-lg bg-gradient-to-br from-[#a78bfa]/25 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative flex items-center gap-4 px-5 py-4 rounded-lg border border-[#a78bfa]/15 bg-gradient-to-br from-[#110e30]/90 to-[#0c0e1f]/90 backdrop-blur-md shadow-[0_4px_24px_rgba(124,58,237,0.12)] group-hover:shadow-[0_8px_36px_rgba(167,139,250,0.22)] group-hover:-translate-y-1 transition-all duration-400 overflow-hidden">
                    <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-[#a78bfa]/40 to-transparent" />
                    <div className="absolute left-0 top-4 bottom-4 w-[3px] rounded-full bg-gradient-to-b from-[#a78bfa]/60 to-[#7c3aed]/40" />
                    <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-[#a78bfa]/12 rounded-full blur-xl group-hover:bg-[#a78bfa]/22 transition-all duration-500" />

                    <div className="relative flex-shrink-0 w-12 h-12">
                      <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-[#a78bfa]/80 border-r-[#a78bfa]/25 animate-spin [animation-duration:4s]" />
                      <div className="absolute inset-[4px] rounded-full border border-transparent border-b-[#7c3aed]/40 border-l-[#7c3aed]/20 animate-spin [animation-duration:2.8s] [animation-direction:reverse]" />
                      <div className="absolute inset-[9px] rounded-full bg-[#a78bfa]/12 animate-pulse [animation-delay:0.6s]" />
                      <div className="absolute inset-[8px] rounded-full bg-[#09061a] border border-[#a78bfa]/20 flex items-center justify-center">
                        <IoDiamondOutline className="text-xs text-[#a78bfa]/80" />
                      </div>
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-0.5">
                        <span className="text-sm font-bold text-white/90">
                          Website Design
                        </span>
                        <span className="text-[9px] px-1.5 py-0.5 rounded-full bg-[#a78bfa]/12 text-[#a78bfa]/80 font-semibold border border-[#a78bfa]/20">
                          UI/UX
                        </span>
                      </div>
                      <p className="text-[11px] text-white/35">
                        Built to impress and perform
                      </p>
                      <div className="flex items-center gap-1.5 mt-2">
                        {[1, 2, 3].map((i) => (
                          <div
                            key={i}
                            className="rounded-full bg-[#a78bfa]/50 animate-pulse"
                            style={{
                              width: i * 5 + 3,
                              height: i * 5 + 3,
                              animationDelay: `${i * 0.3}s`,
                            }}
                          />
                        ))}
                        <span className="text-[9px] text-white/20 ml-1 tracking-widest">
                          pixel perfect
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* HERO END */}

        {/* ===========================
            PARTNERS
      =================================== */}
        <div className="flex flex-col items-center justify-center py-12 mx-auto bg-white">
          <h2 className="text-base font-bold mb-8 tracking-widest">
            OFFICIAL MARKETING PARTNERS
          </h2>
          <div className="flex justify-center items-center gap-10 px-5 max-sm:gap-6">
            {[
              {
                src: "/Meta-bg.png",
                label: "Business Partners",
                alt: "Meta Business Partner",
              },
              {
                src: "/Google-bg.png",
                label: "Google Partners",
                alt: "Google Partner",
              },
            ].map(({ src, label, alt }) => (
              <div key={label} className="flex flex-col items-center gap-4">
                <img src={src} alt={alt} className="w-28 h-16 object-contain" />
                <span className="text-lg font-medium text-[#5f6368] text-center">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* ═══════════════════════════════
            FEATURES CAROUSEL
        ═══════════════════════════════ */}
        <div className="px-5 text-center py-12 overflow-hidden bg-white">
          <h1 className="text-[clamp(1.5rem,5vw,3rem)] font-bold text-center mb-10">
            Elevate Your Brand with Our Marketing Expertise
          </h1>
          <div className="relative w-full">
            <div className="absolute left-0 top-0 bottom-0 w-24 bg-linear-to-r from-white/10 to-transparent pointer-events-none z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-24 bg-linear-to-l from-white/10 to-transparent pointer-events-none z-10" />
            <div
              className="flex justify-center gap-5 overflow-x-auto scroll-smooth snap-x snap-mandatory max-sm:flex-col max-sm:items-center max-sm:overflow-x-visible"
              style={{
                scrollbarWidth: "thin",
                scrollbarColor: "rgba(0,0,0,0.2) rgba(0,0,0,0.05)",
              }}
            >
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="relative snap-start rounded-[18px] overflow-hidden flex-shrink-0 w-60 h-96 transition-all duration-500 cursor-pointer hover:w-80 group max-sm:w-full max-sm:max-w-sm max-sm:h-36 max-sm:hover:h-96 max-sm:hover:w-full"
                >
                  <img
                    src={feature.image}
                    alt={feature.alt}
                    className="w-full h-full object-cover transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-[rgba(14,14,24,0.75)] transition-opacity duration-400 group-hover:opacity-0" />
                  <div className="absolute bottom-0 left-0 right-0 p-5 bg-linear-to-t from-black/90 via-black/70 to-transparent text-white transition-all duration-700 group-hover:p-8">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-2xl transition-all duration-500">
                      {feature.title}
                    </h3>
                    <p className="text-sm opacity-0 max-h-0 overflow-hidden group-hover:opacity-100 group-hover:max-h-28 transition-all duration-700 delay-200 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ═══════════════════════════════
            LOGO SLIDER
        ═══════════════════════════════ */}
        <div className="overflow-hidden bg-white py-12 border-t border-black/5">
          <h1 className="text-center text-[clamp(1.8rem,3vw,3rem)] font-bold text-[#111] mb-12 tracking-tight">
            Trusted by Leading Brands
          </h1>
          <div className="flex w-max gap-16 items-center animate-[scroll_40s_linear_infinite]">
            {[...LOGO_IMAGES, ...LOGO_IMAGES].map((src, index) => (
              <Image
                key={index}
                src={src}
                width={0}
                height={0}
                sizes="200px"
                alt="Brand Logo"
                className="h-14 w-auto object-contain py-1.5 transition-all duration-300 hover:scale-105"
              />
            ))}
          </div>
        </div>

        {/*----------------------------
            LEAD FORM
        ------------------------------- */}
        <section className="bg-[#fafbff] py-12 px-4">
          <div className="max-w-6xl mx-auto grid grid-cols-2 gap-10 items-center max-lg:grid-cols-1">
            <div className="relative">
              <div className="relative rounded-full bg-[radial-gradient(120%_120%_at_30%_20%,#fff_0%,#f3f5fb_45%,#efeefe_100%)] border-2 border-[#ececf6] aspect-square grid place-items-center overflow-hidden max-lg:max-w-lg max-lg:mx-auto">
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
              <p className="my-4 mb-6 text-[#5f6577] max-w-lg">
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
                      <label htmlFor={id} className="text-xs text-[#5f6577]">
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
                    <label htmlFor="email" className="text-xs text-[#5f6577]">
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
                      className="border border-[#e6e8f0] bg-white px-3 py-3.5 rounded-lg text-sm text-[#757575] outline-none transition-all focus:border-[#242448] focus:shadow-[0_0_0_3px_rgba(36,36,72,0.12)]"
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
                      <label htmlFor={id} className="text-xs text-[#5f6577]">
                        {label}
                      </label>
                      <select
                        id={id}
                        name={id}
                        value={formData[id]}
                        onChange={(e) =>
                          setFormData((s) => ({ ...s, [id]: e.target.value }))
                        }
                        className="border border-[#e6e8f0] bg-white px-3 py-3.5 rounded-lg text-sm text-[#757575] outline-none transition-all focus:border-[#242448] appearance-none"
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
                    className={`mt-2 p-3 rounded-lg text-sm ${status.type === "error" ? "bg-[#fff1f1] text-[#a21d1d] border border-[#ffd6d6]" : "bg-[#e9f9ef] text-[#176a3a] border border-[#c6efcf]"}`}
                  >
                    {status.message}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={sending}
                  className="mt-4 w-full bg-[#0f032b] hover:bg-[#0d0325] text-white font-bold py-3.5 px-5 border-0 rounded-xl cursor-pointer transition-all active:translate-y-px disabled:opacity-65 disabled:cursor-not-allowed"
                >
                  {sending ? "Sending..." : "Send Enquiry"}
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* ----------------------------
            TOP CHOICE
        ---------------------------- */}
        <section className="py-12 px-5 bg-[#0f032b] text-white text-center max-md:px-8 max-sm:px-5">
          <div className="max-w-3xl mx-auto mb-16 max-md:mb-10">
            <h1 className="text-5xl font-bold leading-tight mb-5 max-md:text-4xl max-sm:text-3xl">
              Why brands choose Unnity
            </h1>
            <p className="text-lg text-white/80 leading-relaxed max-w-2xl mx-auto max-sm:text-base">
              Unnity helps thousands of brands grow through smart data, proven
              strategies, and tools designed to simplify marketing while driving
              real conversions.
            </p>
          </div>
          <div className="grid grid-cols-4 gap-10 max-w-5xl mx-auto max-md:grid-cols-2 max-md:gap-8 max-sm:gap-5 max-[400px]:grid-cols-1">
            {[
              {
                prefix: "$",
                to: 600,
                suffix: "+",
                label: "Monthly Ad Revenue",
              },
              {
                prefix: "$",
                to: 300,
                suffix: "+",
                label: "Max Monthly Budget",
              },
              {
                prefix: "",
                to: 70,
                suffix: "+",
                label: "Global Brands Scaled",
              },
              { prefix: "", to: 15, suffix: "+", label: "Specialist Team" },
            ].map(({ prefix, to, suffix, label }, i) => (
              <div
                key={i}
                className="py-10 px-4 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white/8 hover:border-white/20 hover:shadow-[0_12px_40px_rgba(0,0,0,0.3)]"
              >
                <div className="text-4xl md:text-5xl font-semibold md:font-bold text-white mb-4 flex items-center justify-center gap-1">
                  {prefix}
                  <CountUp
                    from={0}
                    to={to}
                    separator=""
                    direction="up"
                    duration={2}
                    startCounting
                  />
                  {suffix}
                </div>
                <p className="text-white/70 font-medium tracking-wide text-sm">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ----------------------------
            CASE STUDIES
        ----------------------------*/}
        <section className="bg-[#f9fafb] py-12 md:py-20">
          <h1 className="text-center text-[clamp(1.8rem,3vw,3rem)] font-bold text-[#111] mb-12 tracking-tight">
            Client Success Through Smart Digital Strategy
          </h1>
          <div className="px-5 pb-10">
            <div className="max-w-5xl mx-auto grid grid-cols-3 gap-7 mb-7 max-[1100px]:grid-cols-2 max-[680px]:grid-cols-1">
              {steps.map((step, i) => (
                <Link
                  key={i}
                  href={step.href || "#"}
                  className="block no-underline text-inherit"
                >
                  <article className="bg-white rounded-2xl p-7 shadow-[0_12px_36px_rgba(0,0,0,0.06)] flex flex-col gap-3 h-full transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_18px_46px_rgba(0,0,0,0.1)] hover:border hover:border-[#0f032b] max-md:gap-1">
                    <div className="w-14 h-14 rounded-full bg-[#0f032b] text-white font-bold text-lg flex items-center justify-center max-md:w-12 max-md:h-12">
                      {step.number}
                    </div>
                    <h3 className="text-xl font-extrabold text-[#0f172a] mt-1">
                      {step.title}
                    </h3>
                    <p className="text-[#4b5563] text-base leading-relaxed">
                      {step.description}
                    </p>
                    <div className="mt-1.5 rounded-2xl overflow-hidden shadow-[0_10px_26px_rgba(0,0,0,0.08)]">
                      <Image
                        src={step.image}
                        alt={step.title}
                        width={0}
                        height={0}
                        sizes="(max-width: 680px) 100vw, 50vw"
                        className="w-full h-auto block object-cover transition-transform duration-300 hover:scale-[1.02]"
                      />
                    </div>
                  </article>
                </Link>
              ))}
            </div>
            <div className="flex justify-center">
              <Link href="/case-studies">
                <button className="bg-[#0f032b] hover:bg-[#0b021f] text-white px-9 py-3.5 text-base font-semibold border-0 rounded-full cursor-pointer transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(0,0,0,0.12)]">
                  View All
                </button>
              </Link>
            </div>
          </div>
        </section>

        {/* ----------------------------
            INTEGRATION / PORTFOLIO
        ---------------------------- */}
        <section className="flex justify-center pb-12 md:pb-20 bg-white">
          <div className="w-[95%] flex justify-center gap-10 px-16 py-16 bg-[#0f032b] overflow-hidden rounded-[21px] max-md:px-5 max-md:rounded-2xl">
            {/* Marquee columns */}
            <div className="relative flex max-md:hidden">
              <div className="absolute left-0 top-0 w-full h-10 bg-linear-to-b from-[#070c1a] to-transparent z-20 pointer-events-none" />
              <div className="absolute left-0 bottom-0 w-full h-10 bg-linear-to-t from-[#070c1a] to-transparent z-20 pointer-events-none" />
              {["up", "down", "up"].map((direction, colIdx) => (
                <div
                  key={colIdx}
                  className="w-56 h-[500px] overflow-hidden relative"
                >
                  <div
                    className={`w-[185px] flex flex-col gap-12 ${direction === "up" ? "animate-[scroll-up_20s_linear_infinite]" : "animate-[scroll-down_20s_linear_infinite]"}`}
                  >
                    {[...columns[colIdx], ...columns[colIdx]].map(
                      (item, idx) => (
                        <div
                          key={idx}
                          className="bg-white rounded-2xl overflow-hidden shadow flex flex-col items-center pb-2.5"
                        >
                          <Link
                            href={item.href}
                            target="_blank"
                            className="flex flex-col items-center no-underline text-inherit"
                          >
                            <div className="relative w-46.25 h-60 overflow-hidden rounded-t-2xl">
                              <Image
                                src={item.src}
                                alt={item.alt}
                                width={185}
                                height={240}
                                className="object-cover w-46.25 h-60 block"
                                sizes="185px"
                              />
                            </div>
                            <h3 className="text-base font-semibold text-[#333] text-center px-2.5 pt-2">
                              {item.alt}
                            </h3>
                          </Link>
                        </div>
                      ),
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Right text */}
            <div className="max-w-md flex flex-col justify-center">
              <h1 className="text-5xl text-white leading-tight mb-5 max-md:text-3xl">
                Real projects shipped, measurable results
              </h1>
              <p className="text-lg leading-relaxed text-[#c2c2c2] mb-8">
                A snapshot of the work we've delivered — websites, funnels, and
                performance campaigns that moved the needle for our clients.
              </p>
              <Link href="/snapshot-project">
                <button className="group flex items-center gap-3 bg-white text-black px-6 py-3 rounded-full font-semibold cursor-pointer transition-all duration-300 w-fit">
                  Explore our work
                  <span className="relative w-7 h-7 overflow-hidden flex-shrink-0">
                    <span className="absolute inset-0 bg-white rounded-full flex items-center justify-center transition-all duration-300 group-hover:translate-x-10 group-hover:opacity-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="#0f032b"
                        className="w-4 h-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                        />
                      </svg>
                    </span>
                    <span className="absolute inset-0 bg-black rounded-full flex items-center justify-center transition-all duration-300 -translate-x-10 opacity-0 group-hover:translate-x-0 group-hover:opacity-100">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="white"
                        className="w-4 h-4"
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
          </div>
        </section>

        {/* ═══════════════════════════════
            TESTIMONIALS SLIDER
        ═══════════════════════════════ */}
        <TestimonialSlider testimonials={testimonials} />

        {/* ═══════════════════════════════
            TEAM
        ═══════════════════════════════ */}
        <section className="py-12 px-4">
          <div className="max-w-6xl mx-auto">
            <header className="flex justify-between items-end gap-5 mb-7 flex-wrap">
              <div>
                <h2 className="text-[clamp(28px,3.2vw,42px)] leading-tight text-[#111] font-bold mb-2">
                  Meet The Team
                </h2>
                <p className="text-[#555] text-base">
                  The people behind your performance wins.
                </p>
              </div>
              <div className="flex gap-3 items-center flex-wrap">
                <input
                  type="text"
                  placeholder="Search by name or role"
                  value={q}
                  onChange={(e) => setQ(e.target.value)}
                  className="h-10 min-w-60 px-3 rounded-xl border border-[#b9b9b9] bg-white text-[#111] outline-none transition-all focus:border-blue-700 focus:shadow-[0_0_0_3px_rgba(30,64,175,0.12)]"
                />
                <select
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  className="h-10 border border-[#b9b9b9] rounded-xl bg-white text-[#111] px-3 outline-none cursor-pointer"
                >
                  {roles.map((r) => (
                    <option key={r} value={r}>
                      {r}
                    </option>
                  ))}
                </select>
              </div>
            </header>

            <div className="grid grid-cols-6 gap-5 max-[1100px]:grid-cols-4 max-[820px]:grid-cols-3 max-[520px]:grid-cols-2">
              {shown.map((m, i) => (
                <article
                  key={i}
                  className="group relative flex flex-col bg-white rounded-2xl overflow-hidden border border-black/5 shadow-[0_2px_8px_rgba(0,0,0,0.06)] cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_12px_24px_rgba(0,0,0,0.15)]"
                >
                  <div className="relative aspect-[3/4] w-full overflow-hidden">
                    <Image
                      src={m.photo}
                      width={0}
                      height={0}
                      sizes="100vw"
                      alt={m.name}
                      loading="lazy"
                      className="w-full h-full object-cover block transition-transform duration-500 group-hover:scale-[1.08]"
                    />
                    <div className="absolute inset-0 z-10 bg-linear-to-b from-transparent via-black/40 to-black/80 pointer-events-none" />
                    <div className="absolute bottom-0 left-0 right-0 p-5 z-10 transition-transform duration-300 translate-y-1 group-hover:-translate-y-2 max-sm:p-4">
                      <h3 className="text-xl text-white font-extrabold tracking-wide mb-1.5 max-sm:text-base">
                        {m.name}
                      </h3>
                      <div className="text-white/90 font-semibold text-sm tracking-wide opacity-0 transition-all duration-300 group-hover:opacity-100 max-sm:text-xs">
                        {m.role}
                      </div>
                    </div>
                    <div className="absolute inset-0 z-0 bg-black/0 group-hover:bg-black/40">
                      {" "}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </main>

      <style jsx global>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        @keyframes scroll-up {
          0% {
            transform: translateY(0%);
          }
          100% {
            transform: translateY(-50%);
          }
        }
        @keyframes scroll-down {
          0% {
            transform: translateY(-50%);
          }
          100% {
            transform: translateY(0%);
          }
        }
        h1,
        h2 {
          font-family: "Urbanist", sans-serif;
        }
      `}</style>
    </>
  );
}
