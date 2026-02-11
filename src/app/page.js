"use client";

import Image from "next/image";
import "./page.css";
import Header from "@/components/Header/page";
import { useState, useRef, useEffect, useMemo } from "react";
import Link from "next/link";
import Footer from "@/components/footer/page";
import {
  FaFire,
  FaGithub,
  FaLinkedin,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
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
  "/poco.png",
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

const INITIAL = {
  companyName: "",
  budget: "",
  name: "",
  phone: "",
  email: "",
  service: "",
  designation: "",
};

const features = [
  {
    title: "Development Solutions",
    description:
      "We build custom solutions using Shopify, Next.js, and robust backend technologies. From eCommerce to web apps, we handle everything from databases to clean, scalable code.",
    link: "#",
    image: "/Dev_sol.jpeg", // Save the first image locally
    alt: "Email automation",
  },
  {
    title: "Meta Ads",
    description:
      "We run high-converting Meta Ads that drive traffic, leads, and sales. From strategy to creatives and optimization, we manage it all for measurable growth.",
    link: "#",
    image: "/meta_ads.jpeg", // Save the second image locally
    alt: "Customizable templates",
  },
  {
    title: "Google Ads",
    description:
      "We create and manage data-driven Google Ads campaigns to boost visibility and conversions. From search to display, we optimize every click for maximum ROI.",
    link: "#",
    image: "/google-ads.jpeg", // Save the third image locally
    alt: "A/B Testing",
  },
  {
    title: "Linkedin Ads",
    description:
      "We craft targeted LinkedIn Ads to connect you with decision-makers and drive B2B growth. From audience building to ad optimization, we deliver results that matter.",
    link: "#",
    image: "/linkdin-ads.jpeg",
    alt: "A/B Testing",
  },
  {
    title: "Brand Identity",
    description:
      "We build strong brand identities that reflect your vision and resonate with your audience. From logos to visual systems, we create cohesive designs that leave a lasting impression.",
    link: "#",
    image: "/brand_id.jpeg",
    alt: "A/B Testing",
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

const integrations = [
  {
    href: "/integration/syncpro",
    title: "Sync pro",
    description: "Sync products and customers.",
    icon: "/init-1.svg",
  },
  {
    href: "/integration/syncmaster",
    title: "Sync master",
    description: "Automate sales emails.",
    icon: "/init-2.svg",
  },
  {
    href: "/integration/syncedge",
    title: "Sync edge",
    description: "Integrate with your CRM.",
    icon: "/init-3.svg",
  },
  {
    href: "/integration/linksync",
    title: "Link sync",
    description: "Automate tasks easily.",
    icon: "/init-4.svg",
  },
  {
    href: "/integration/linkhub",
    title: "Link hub",
    description: "Grow your email list.",
    icon: "/init-1.svg",
  },
  {
    href: "/integration/fusionsync",
    title: "Fusion sync",
    description: "Sync products and customers.",
    icon: "/init-2.svg",
  },
  {
    href: "/integration/fusionlink",
    title: "Fusion link",
    description: "Boost eCommerce sales.",
    icon: "/init-3.svg",
  },
  {
    href: "/integration/datasyncpro",
    title: "Data sync pro",
    description: "Track campaign data.",
    icon: "/init-4.svg",
  },
  {
    href: "/integration/datalinker",
    title: "Data linker",
    description: "Use email lists to create targeted ad campaigns.",
    icon: "/init-1.svg",
  },
  {
    href: "/integration/datahub",
    title: "Data hub",
    description: "The more tailored your messaging can be",
    icon: "/init-2.svg",
  },
];

const testimonials = [
  {
    image: "/testimonial-1.avif",
    name: "— Rishab B. | Founder of BabLouie",
    role: "BabLouie",
    companyLogo: "/logo-optimal.svg",
    feedback:
      "In the early days of our brand-building journey, one thing that stood out about Unnity was its relentless drive — constantly experimenting, refining, and pushing forward until results were achieved. This grit and unwavering commitment to delivering outcomes truly make Unnity a company that’s in it to win",
  },
  {
    image: "/testimonial-1.avif",
    name: "- Tarun J. | Founder of Tashe and Sain Milks",
    role: "Website Development and Performance Marketing",
    companyLogo: "/logo-enterprise.svg",
    feedback:
      "I hired Unnity for performance marketing of Sain Milks, and they did a fantastic job in delivering the promised goals. The team is highly experienced, meticulous, and gathered valuable insights about the industry and its users to achieve even better results. They also designed the Sain Milks website, which I loved — it’s user-friendly, aesthetically pleasing, and professionally built. I was so impressed that I entrusted them with another website for my other business, Tashe, and they are doing an excellent job on that as well. Wishing Unnity even greater success in the future — highly recommended!",
  },

  {
    image: "/testimonial-1.avif",
    name: "— Vandita, Founder-Iyurved",
    role: "Dentistry",
    companyLogo: "/logo-enterprise.svg",
    feedback:
      "I highly recommend Sayam J. for his exceptional capabilities and performance. During his time at 'Unbundl', Sayam efficiently managed our ad accounts, focusing on driving high-quality leads. He consistently showed reliability and responsibility in this role. Sayam's expertise in digital marketing was evident as he contributed significantly to our campaign successes. Based on his proven track record and deep domain knowledge, I wholeheartedly endorse Sayam for any role requiring digital marketing expertise. He's a valuable asset to any team.",
  },
  {
    image: "/testimonial-1.avif",
    name: "— Cupidclothings- Tanya",
    role: "Apparel",
    companyLogo: "/logo-enterprise.svg",
    feedback:
      "Cupid started its own website in 2020, and since then our journey with Mr. Sayam and his team at Team Unnity has been closely associated with our growth. They handle both performance marketing and social media for us. We began with a modest daily ad budget of around ₹500+, and over time their team has successfully scaled it to ₹20,000+ per day. Reason for continuity have been their deep involvement with data—they regularly share detailed Excel reports, conduct weekly review meetings, and ensure clear communication at every stage.Compared to other agencies we’ve worked with, the personal touch and strong understanding of our brand make a real difference. Their team continuously brings in updated strategies, tools, and industry knowledge, which helps keep our ads aligned with both performance goals and long-term brand growth.Overall, the consistency, transparency, and commitment from Team Unnity have been a strong support in scaling our business.",
  },
  {
    image: "/testimonial-4.avif",
    name: "Alex Johnson",
    role: "Sales Director",
    companyLogo: "/logo-enterprise.svg",
    feedback:
      "We've streamlined our processes, cut costs, and significantly improved customer satisfaction. Its been a game-changer for our business!",
  },
];

const members = [
  {
    name: "Sayyam Jain",
    role: "Founder & CEO",
    photo: "/sayyam2.png",
  },
  {
    name: "Muskan",
    role: "Social Media",
    photo: "/muskan-2.jpg",
  },

  {
    name: "Anjali",
    role: "Marketing",
    photo: "/anjali.jpeg",
  },
  {
    name: "Naveen",
    role: "Web Developer",
    photo: "/naveen-01.jpeg",
  },
  {
    name: "Shubham",
    role: "Web Developer",
    photo: "/shubham.jpeg",
  },
  {
    name: "Manisha",
    role: "Creatives",
    photo: "/manisha.jpg",
  },

  {
    name: "Rohit",
    role: "Head of Marketing",
    photo: "/rohit2.jpeg",
  },
  {
    name: "Muskan",
    role: "Project Coordinator",
    photo: "/muskanT.jpg",
  },
  {
    name: "Sarthak",
    role: "Marketing Executive",
    photo: "/sarthak.jpeg",
  },
  {
    name: "Yalka",
    role: "Video Editor Intern",
    photo: "/yalka.jpg",
  },
  {
    name: "Himanshu",
    role: "Social Media Intern",
    photo: "/himanshu.jpg",
  },
  {
    name: "Moksh Chauhan",
    role: "Marketing",
    photo: "/moksh.jpg",
  },
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

export default function Home() {
  const containerRef = useRef(null);
  const [startIndex, setStartIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(2);
  const scrollerRef = useRef(null);
  const [q, setQ] = useState("");
  const [role, setRole] = useState("All");
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });
  const formRef = useRef(null);
  const [hoverCard, setHoverCard] = useState(null);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    companyName: "",
    budget: "",
    name: "",
    phone: "",
    email: "",
    service: "",
    designation: "",
  });

  const handleNameChange = (e) => {
    const value = e.target.value.replace(/[^a-zA-Z\s]/g, "");
    setFormData((s) => ({ ...s, name: value }));
  };

  const handlePhoneChange = (e) => {
    const value = e.target.value.replace(/\D/g, "").slice(0, 10);
    setFormData((s) => ({ ...s, phone: value }));
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    setSending(true);

    try {
      const res = await fetch("/api/send-mail", {
        method: "POST",
        headers: { "Content-Type": "application/json" }, // FIXED
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.error || "Failed to send email");

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
    } catch (err) {
      console.error("Error sending mail:", err);
      alert("Something went wrong. Please try again.");
    } finally {
      setSending(false);
    }
  };

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

  useEffect(() => {
    const updateView = () => {
      if (window.innerWidth <= 768) {
        setCardsPerView(1);
      } else {
        setCardsPerView(2);
      }
    };

    updateView(); // Initial check
    window.addEventListener("resize", updateView);
    return () => window.removeEventListener("resize", updateView);
  }, []);

  const visibleTestimonials = testimonials.slice(
    startIndex,
    startIndex + cardsPerView,
  );

  const handleNext = () => {
    if (startIndex + cardsPerView < testimonials.length) {
      setStartIndex(startIndex + cardsPerView);
    }
  };

  const handlePrev = () => {
    if (startIndex - cardsPerView >= 0) {
      setStartIndex(startIndex - cardsPerView);
    }
  };

  const scrollOne = (dir = 1) => {
    const el = scrollerRef.current;
    if (!el) return;
    const step = el.clientWidth; // width of the visible area
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  const roles = useMemo(
    () => ["All", ...Array.from(new Set(members.map((m) => m.role)))],
    [],
  );

  const shown = useMemo(() => {
    return members.filter((m) => {
      const matchesRole = role === "All" || m.role === role;
      const matchesQ =
        !q ||
        m.name.toLowerCase().includes(q.toLowerCase()) ||
        m.role.toLowerCase().includes(q.toLowerCase());
      return matchesRole && matchesQ;
    });
  }, [q, role]);

  // Loading state....//

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);
  if (loading) return <Loading />;

  return (
    <>
      <main className="page-wrapper">
        <Header />
        {/* Hero inside relative wrapper */}
        <div className="hero-wrapper">
          <section className="hero">
            {/* Floating Lines Background */}
            <div className="hero-floatingLines">
              <FloatingLines
                enabledWaves={["top", "middle", "bottom"]}
                lineCount={5}
                lineDistance={5}
                bendRadius={11.5}
                bendStrength={-0.5}
                interactive={true}
                parallax={true}
              />
            </div>

            {/* Dark Overlay Effect */}
            <div className="hero-overlay" />

            {/* Main Hero Content */}
            <div className="hero-alignment">
              {/* Left Section - Text Content */}
              <div className="hero-left">
                <button className="small-btn">
                  Elevate your business to the next level
                </button>

                <h1>
                  Crafting Digital <br /> Brands That Stand Out
                </h1>

                <p>
                  At Unnity, we help brands grow in the digital world. Our
                  tailored marketing solutions boost your online presence,
                  engage your audience, and drive real results. Let Unnity
                  unlock your brand's full potential.
                </p>

                {/* CTA Buttons */}
                <div className="cta-btn-wrapper">
                  <a
                    href="https://calendly.com/sayam-unnity/30min?month=2025-08"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
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

                  <a
                    href="https://calendly.com/sayam-unnity/30min?month=2025-08"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="cta-button" id="banner-btn">
                      View Portfolio
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
              </div>

              {/* Right Section - Flying Badges */}
              <div className="hero-right">
                <div className="flying-badge-wrapper">
                  {/* Badge 1 - Graphic Design */}
                  <div className="flying-badge">
                    <LuZap className="badge-icon fire" />
                    <div>
                      <h4 className="badge-text">Graphic Design</h4>
                      <p>Designs that demand attention</p>
                    </div>
                  </div>

                  {/* Badge 2 - Performance Marketing */}
                  <div className="flying-badge second">
                    <FaFire className="badge-icon fire" />
                    <div>
                      <h4 className="badge-text">Performance Marketing</h4>
                      <p>Clicks to customers</p>
                    </div>
                  </div>

                  {/* Badge 3 - Website Design */}
                  <div className="flying-badge third">
                    <IoDiamondOutline className="badge-icon fire" />
                    <div>
                      <h4 className="badge-text">Website Design</h4>
                      <p>Built to impress and perform</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Partners Section */}
        <div className="partners-section">
          <h2 className="heading-patners">OFFICIAL MARKETING PARTNERS</h2>
          <div className="google-meta-partners">
            <div className="partner">
              <img src="/Meta-bg.png" alt="Meta Business Partner" />
              <span>Business Partners</span>
            </div>
            <div className="partner">
              <img src="/Google-bg.png" alt="Google Partner" />
              <span>Google Partners</span>
            </div>
          </div>
        </div>
        {/* features-cards with smooth animation expand */}
        <div className="carousel-wrapper">
          {/* Carousel section */}
          <div className="carousel-base">
            <h1 className="carousel-title">
              Elevate Your Brand with Our Marketing Expertise
            </h1>

            <div className="carousel-container">
              {features.map((feature, index) => (
                <div className="feature-card" key={index}>
                  <img
                    src={feature.image}
                    alt={feature.alt}
                    className="feature-image"
                  />
                  {/* Dark overlay */}
                  <div className={`feature-overlay`}> </div>
                  <div className={`feature-content `}>
                    <h3 className="feature-title">{feature.title}</h3>
                    <p className="feature-description">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Trusted */}
        <div className="logo-slider">
          <h1>Trusted by Leading Brands</h1>
          <div className="logo-track">
            {[...LOGO_IMAGES, ...LOGO_IMAGES].map((src, index) => (
              <Image
                key={index}
                src={src}
                width={0}
                height={0}
                sizes="200px"
                alt="Brand Logo"
                style={{ width: "auto", height: "60px" }}
              />
            ))}
          </div>
        </div>
        <section className="unnity-lead">
          <div className="ul-wrap">
            {/* Left: Visual + marketing points */}
            <div className="ul-visual">
              <div className="ul-portrait">
                <Image
                  src="/sayyam2.png"
                  width={0}
                  height={0}
                  sizes="(max-width: 768px) 100vw, 520px"
                  alt="Sayam jain , Unnity"
                ></Image>
                <div className="ul-kpis">
                  <span className="ul-chip ul-chip-blue" aria-label="CPM">
                    CPM
                  </span>
                  <span className="ul-chip ul-chip-yellow" aria-label="CTR">
                    CTR
                  </span>
                  <span className="ul-chip ul-chip-teal" aria-label="CPR">
                    CPR
                  </span>
                </div>
              </div>

              <ul className="ul-points" aria-label="What we improve">
                <li>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      d="M4 12l4 4L20 4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                  </svg>
                  Channel mix that actually converts (Meta + Google)
                </li>
                <li>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      d="M3 12h18M3 6h18M3 18h18"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                  </svg>
                  Clear metrics: ROAS, CAC, AOV — not vanity numbers
                </li>
                <li>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      d="M12 3v18M3 12h18"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                  </svg>
                  Custom strategies per brand, no templates
                </li>
              </ul>
            </div>

            {/* Right: Form */}
            <div className="ul-form">
              <h2>
                Empower Your Brand With{" "}
                <span>UNNITY DIGITAL MARKETING SOLUTIONS</span>
              </h2>
              <p className="ul-sub">
                Amplify visibility, engage your audience, and drive meaningful
                conversions. Unleash your brand’s full potential with Unnity.
              </p>

              <form onSubmit={submitHandler} ref={formRef}>
                <div className="ul-grid">
                  <div className="ul-field">
                    <label htmlFor="companyName">Company Name</label>
                    <input
                      id="companyName"
                      name="companyName"
                      type="text"
                      placeholder="Company Name"
                      value={formData.companyName}
                      onChange={(e) =>
                        setFormData((s) => ({
                          ...s,
                          companyName: e.target.value,
                        }))
                      }
                      required
                    />
                  </div>

                  <div className="ul-field">
                    <label htmlFor="budget">Monthly Marketing Budget</label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={(e) =>
                        setFormData((s) => ({ ...s, budget: e.target.value }))
                      }
                    >
                      <option value="">Monthly Marketing Budget</option>
                      <option value="Less Than Rs 2L Budget">
                        Less Than Rs 2L Budget
                      </option>
                      <option value="Rs 2L to Rs 5L">Rs 2L to Rs 5L</option>
                      <option value="Rs 5L to Rs 25L">Rs 5L to Rs 25L</option>
                      <option value="More Than 50L">More Than 50L</option>
                      <option value="I am Looking For Organic Services">
                        I am Looking For Organic Services
                      </option>
                    </select>
                  </div>

                  <div className="ul-field">
                    <label htmlFor="name">Name</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Name"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData((s) => ({ ...s, name: e.target.value }))
                      }
                      required
                    />
                  </div>

                  <div className="ul-field">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="Phone Number"
                      value={formData.phone}
                      onChange={handlePhoneChange}
                    />
                  </div>

                  <div className="ul-field ul-span-2">
                    <label htmlFor="email">Email Address</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData((s) => ({ ...s, email: e.target.value }))
                      }
                      required
                    />
                  </div>

                  <div className="ul-field">
                    <label htmlFor="service">Choose A Service</label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={(e) =>
                        setFormData((s) => ({ ...s, service: e.target.value }))
                      }
                    >
                      <option value="">Choose A Service</option>
                      <option value="SEO">SEO</option>
                      <option value="Paid Marketing (Google, Facebook & Amazon ads)">
                        Paid Marketing (Google, Facebook & Amazon ads)
                      </option>
                      <option value="UI/UX">UI/UX</option>
                      <option value="Website Development">
                        Website Development
                      </option>
                      <option value="Website Maintenance">
                        Website Maintenance
                      </option>
                      <option value="Shopify Migration">
                        Shopify Migration
                      </option>
                    </select>
                  </div>

                  <div className="ul-field">
                    <label htmlFor="designation">Designation</label>
                    <input
                      id="designation"
                      name="designation"
                      type="text"
                      placeholder="Designation"
                      value={formData.designation}
                      onChange={(e) =>
                        setFormData((s) => ({
                          ...s,
                          designation: e.target.value,
                        }))
                      }
                    />
                  </div>
                </div>

                {status.message && (
                  <div
                    className={`ul-status ${
                      status.type === "error" ? "ul-error" : "ul-success"
                    }`}
                  >
                    {status.message}
                  </div>
                )}

                <button
                  className="ul-submit"
                  type="submit"
                  disabled={sending}
                  id="submit-btn"
                >
                  {sending ? "sending..." : "Send Enquiry"}
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* start top choise section (Shubham) */}

        <section className="top-choice-section">
          <div className="title">
            <h1>Why brands choose Unnity</h1>
            <p>
              Unnity helps thousands of brands grow through smart data, proven
              strategies, and tools designed to simplify marketing while driving
              real conversions.
            </p>
          </div>
          <div className="top-choice-grid">
            <div className="choice-card">
              <div className="count-number">
                $
                <CountUp
                  from={0}
                  to={600}
                  separator=""
                  direction="up"
                  duration={2}
                  className="count-up-text"
                  startCounting
                />
                +
              </div>
              <p className="count-label">Monthly Ad Revenue</p>
            </div>

            <div className="choice-card">
              <div className="count-number">
                $
                <CountUp
                  from={0}
                  to={300}
                  separator=""
                  direction="up"
                  duration={2}
                  className="count-up-text"
                  startCounting
                />
                +
              </div>
              <p className="count-label">Max Monthly Budget</p>
            </div>

            <div className="choice-card">
              <div className="count-number">
                <CountUp
                  from={0}
                  to={70}
                  separator=""
                  direction="up"
                  duration={2}
                  className="count-up-text"
                  startCounting
                />
                +
              </div>
              <p className="count-label">Global Brands Scaled</p>
            </div>

            <div className="choice-card">
              <div className="count-number">
                <CountUp
                  from={0}
                  to={15}
                  separator=""
                  direction="up"
                  duration={2}
                  className="count-up-text"
                  startCounting
                />
                +
              </div>
              <p className="count-label">Specialist Team</p>
            </div>
          </div>
        </section>
        {/* end top-choice */}
        <section className="step-section">
          <span className="step-heading">
            <h1>Client Success Through Smart Digital Strategy</h1>
          </span>
          <div className="step-section-df">
            <div className="step-grid">
              {steps.map((step, i) => (
                <Link
                  key={i}
                  href={step.href || "#"}
                  className="step-card-link"
                  aria-label={step.title}
                >
                  <article className="step-card">
                    <div className="step-badge">{step.number}</div>

                    <h3 className="step-title">{step.title}</h3>
                    <p className="step-description">{step.description}</p>

                    <div className="step-image-wrap">
                      <Image
                        src={step.image}
                        alt={step.title}
                        className="step-image"
                        width={0}
                        height={0}
                        sizes="(max-width: 680px) 100vw, 50vw"
                      />
                    </div>
                  </article>
                </Link>
              ))}
            </div>

            <div className="cs-btn">
              <Link href="/case-studies">
                <button>View All</button>
              </Link>
            </div>
          </div>
        </section>
        <section className="integration">
          <div className="integration-df">
            <div className="integration-left">
              {["up", "down", "up"].map((direction, colIdx) => (
                <div
                  key={colIdx}
                  className={`integration-list-marquee ${direction}`}
                >
                  <div className="integration-marquee-inner">
                    {[...columns[colIdx], ...columns[colIdx]].map(
                      (item, idx) => (
                        <div key={idx} className="integration-card">
                          {item.href ? (
                            <Link
                              href={item.href}
                              aria-label={item.alt}
                              className="integration-card-link"
                              target="_blank"
                            >
                              <div className="integration-img-wrapper">
                                <Image
                                  src={item.src}
                                  alt={item.alt}
                                  width={185}
                                  height={240}
                                  className="integration-img"
                                  sizes="(max-width: 768px) 150px, 185px"
                                />
                              </div>
                              <h3 className="integration-title">{item.alt}</h3>
                            </Link>
                          ) : (
                            <>
                              <div className="integration-img-wrapper">
                                <Image
                                  src={item.src}
                                  alt={item.alt}
                                  width={185}
                                  height={240}
                                  className="integration-img"
                                  sizes="(max-width: 768px) 150px, 185px"
                                />
                              </div>
                              <h3 className="integration-title">{item.alt}</h3>
                            </>
                          )}
                        </div>
                      ),
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="integration-right">
              <h1>Real projects shipped, measurable results</h1>
              <p>
                A snapshot of the work we’ve delivered — websites, funnels, and
                performance campaigns that moved the needle for our clients.
              </p>
              <Link href="/snapshot-project">
                <button className="cta-button" id="integration-btn">
                  Explore our work
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
          </div>
        </section>
        <section className="testimonial-section">
          <div className="testimonial-header">
            <h2>What our customers are saying</h2>
            <div className="testimonial-nav">
              <button
                onClick={handlePrev}
                className="nav-btn"
                aria-label="Previous testimonials"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="22"
                  height="22"
                  aria-hidden="true"
                >
                  <path
                    d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <button
                onClick={handleNext}
                className="nav-btn"
                aria-label="Next testimonials"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="22"
                  height="22"
                  aria-hidden="true"
                >
                  <path
                    d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div className="testimonial-wrapper" ref={scrollerRef}>
            {visibleTestimonials.map((t, idx) => (
              <div className="testimonial-card" key={idx}>
                <div className="quote-badge" aria-hidden="true">
                  <svg viewBox="0 0 24 24" width="24" height="24">
                    <path
                      d="M9.5 7C7.6 7 6 8.6 6 10.5S7.6 14 9.5 14c.3 0 .5 0 .8-.1-.3 1.3-1.1 2.6-2.6 3.9-.3.3-.3.8 0 1.1.3.3.8.3 1.1 0 2.2-1.9 3.2-4 3.2-6.1V10.5C12 8.6 10.4 7 8.5 7h1zM18.5 7c-1.9 0-3.5 1.6-3.5 3.5S16.6 14 18.5 14c.3 0 .5 0 .8-.1-.3 1.3-1.1 2.6-2.6 3.9-.3.3-.3.8 0 1.1.3.3.8.3 1.1 0 2.2-1.9 3.2-4 3.2-6.1V10.5C21 8.6 19.4 7 17.5 7h1z"
                      fill="currentColor"
                    />
                  </svg>
                </div>

                {/* optional stars (remove if you don’t need ratings) */}
                {t.rating && (
                  <div className="stars" aria-label={`${t.rating} out of 5`}>
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        viewBox="0 0 24 24"
                        width="18"
                        height="18"
                        className={i < t.rating ? "star filled" : "star"}
                      >
                        <path d="M12 17.3l-5.4 3 1-5.9-4.3-4.2 6-0.9L12 4l2.7 5.4 6 0.9-4.3 4.2 1 5.9z" />
                      </svg>
                    ))}
                  </div>
                )}

                <div className="testimonial-content">
                  <p className="testimonial-feedback">{t.feedback}</p>
                  <div className="testimonial-meta">
                    <div>
                      <strong className="testimonial-name">{t.name}</strong>
                      <div className="testimonial-role">{t.role}</div>
                    </div>
                    {t.company && (
                      <span className="testimonial-chip">{t.company}</span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
        <section className="team-section">
          <div className="team-container">
            <header className="team-header">
              <div>
                <h2>Meet The Team</h2>
                <p className="team-sub">
                  The people behind your performance wins.
                </p>
              </div>

              <div className="team-controls">
                <div className="search">
                  <input
                    type="text"
                    placeholder="Search by name or role"
                    value={q}
                    onChange={(e) => setQ(e.target.value)}
                    aria-label="Search team"
                  />
                </div>

                <div className="filters">
                  <select
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    aria-label="Filter by role"
                  >
                    {roles.map((r) => (
                      <option key={r} value={r}>
                        {r}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </header>

            <div className="team-grid">
              {shown.map((m, i) => (
                <article className="member-card" key={i}>
                  <div className="avatar-wrap">
                    <Image
                      src={m.photo}
                      width={0}
                      height={0}
                      sizes="100vw"
                      alt={m.name}
                      loading="lazy"
                    />
                    {/* Dark overlay on hover */}
                    <div className="member-overlay"></div>
                  </div>

                  <div className="member-info">
                    <h3 className="member-name">{m.name}</h3>
                    <div className="member-role">{m.role}</div>
                    {/* 
                    {!!m.socials && (
                      <div className="member-socials">
                        {m.socials.linkedin && (
                          <Link
                            href={m.socials.linkedin}
                            aria-label={`${m.name} on LinkedIn`}
                          >
                            <FaLinkedinIn />
                          </Link>
                        )}
                        {m.socials.twitter && (
                          <Link
                            href={m.socials.twitter}
                            aria-label={`${m.name} on Twitter`}
                          >
                            <FaTwitter />
                          </Link>
                        )}
                        {m.socials.instagram && (
                          <Link
                            href={m.socials.instagram}
                            aria-label={`${m.name} on instagram`}
                          >
                            <FaGithub />
                          </Link>
                        )}
                        {m.socials.github && (
                          <Link
                            href={m.socials.github}
                            aria-label={`${m.name} on GitHub`}
                          >
                            <FaGithub />
                          </Link>
                        )}
                      </div>
                    )} */}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
}
