"use client";

import Image from "next/image";
import "./page.css";
import Header from "@/components/Header/page";
import { useState, useRef, useEffect, useMemo } from "react";
import Link from "next/link";
import Footer from "@/components/footer/page";

const features = [
  {
    title: "Development Solutions",
    description:
      "We build custom solutions using Shopify, Next.js, and robust backend technologies. From eCommerce to web apps, we handle everything from databases to clean, scalable code.",
    link: "#",
    image: "/shopify.png", // Save the first image locally
    alt: "Email automation",
  },
  {
    title: "Meta Ads",
    description:
      "We run high-converting Meta Ads that drive traffic, leads, and sales. From strategy to creatives and optimization, we manage it all for measurable growth.",
    link: "#",
    image: "/meta-ads.png", // Save the second image locally
    alt: "Customizable templates",
  },
  {
    title: "Google Ads",
    description:
      "We create and manage data-driven Google Ads campaigns to boost visibility and conversions. From search to display, we optimize every click for maximum ROI.",
    link: "#",
    image: "/google-ads3.png", // Save the third image locally
    alt: "A/B Testing",
  },
  {
    title: "Linkedin Ads",
    description:
      "We craft targeted LinkedIn Ads to connect you with decision-makers and drive B2B growth. From audience building to ad optimization, we deliver results that matter.",
    link: "#",
    image: "/linkedin-ads.png",
    alt: "A/B Testing",
  },
  {
    title: "Brand Identity",
    description:
      "We build strong brand identities that reflect your vision and resonate with your audience. From logos to visual systems, we create cohesive designs that leave a lasting impression.",
    link: "#",
    image: "/brand-identity.png",
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
    name: "— Sagar K. | Sr. Manager - Performance Marketing",
    role: "Dentistry",
    companyLogo: "/logo-enterprise.svg",
    feedback:
      "This is just a token to show we’ll be working together — the amount doesn’t reflect your sincerity, which I deeply value. I’m confident I can help bring you more clients; if you share a short blurb, I can circulate it in my founder groups to generate strong leads. Please don’t treat this as a retainer, but as a way to keep our collaboration active for now.",
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
    bio: "Leads strategy and growth. 10+ yrs in performance marketing.",
    socials: { linkedin: "#", twitter: "#" },
  },
  {
    name: "Muskan",
    role: "Social Media",
    photo: "/muskan.jpeg",
    bio: "Owns content, community and creator partnerships.",
    socials: { linkedin: "#", instagram: "#" },
  },

  {
    name: "Anjali",
    role: "Marketing",
    photo: "/anjali.jpeg",
    bio: "Transforms market insights into powerful campaigns that deliver results.",
    socials: { linkedin: "#", github: "#" },
  },
  {
    name: "Naveen",
    role: "Frontend & Shopify Dev & Next.js",
    photo: "/naveen.jpeg",
    bio: "Builds lightning-fast React apps with Next.js and SSR..",
    socials: { linkedin: "#", github: "#" },
  },
  {
    name: "Dheeraj",
    role: "Frontend & Shopify Dev & Backend-DB",
    photo: "/dheeraj.jpeg",
    bio: "Creates fast, customized eCommerce experiences on Shopify.",
    socials: { linkedin: "#", github: "#" },
  },
  {
    name: "Manisha",
    role: "Creatives",
    photo: "/manisha.jpeg",
    bio: "Blends design thinking with brand vision to craft impactful creative campaigns.",
    socials: { linkedin: "#", github: "#" },
  },

  {
    name: "Rohit",
    role: "Head of Marketing",
    photo: "/rohit2.jpeg",
    bio: "Drives brand growth through strategic campaigns, data insights, and creative leadership.",
    socials: { linkedin: "#", github: "#" },
  },

  {
    name: "Rishabh",
    role: "Head of Tech Leads",
    photo: "/rishabh.jpeg",
    bio: "Leads development with a focus on code quality, scalability, and team mentorship.",
    socials: { linkedin: "#", github: "#" },
  },

  {
    name: "Keshav",
    role: "SEO",
    photo: "/keshav.jpeg",
    bio: "Crafts data-driven SEO strategies to improve visibility and search performance.",
    socials: { linkedin: "#", github: "#" },
  },

  {
    name: "Sarthak",
    role: "Marketing",
    photo: "/Marketing.jpeg",
    bio: "Blends creativity and strategy to connect brands with the right audience.",
    socials: { linkedin: "#", github: "#" },
  },
];

const gallery = [
  {
    src: "/adpl1.png",
    alt: "Adplusa",
    href: "https://architect-sigma.vercel.app/",
  },
  {
    src: "/cupid.png",
    alt: "Cupid Clothings",
    href: "https://cupidclothings.com/",
  },
  { src: "/uber.png", alt: "Uberlyfe", href: "https://uberlyfe.com/" },
  {
    src: "/dev.png",
    alt: "Devkinandan Steel",
    href: "https://www.devkinandansteel.com/",
  },
  {
    src: "/kryss.png",
    alt: "Kryys Global",
    href: "https://www.kryysglobal.com/",
  },
  {
    src: "/aiva.png",
    alt: "Aiva Jewellery",
    href: "https://aivajewellery.com/",
  },
  { src: "/da.png", alt: "Da Urban", href: "https://daurban.com/" },
  { src: "/aurave.png", alt: "Aurave", href: "https://www.auravedecor.in/" },
  {
    src: "/hub.png",
    alt: "HubHawks",
    href: "https://sniper-ruddy.vercel.app/",
  },
  { src: "/isu.png", alt: "ISU Fashion", href: "https://isufashion.com/" },
  { src: "/mi.png", alt: "MiReads", href: "https://mireads.com/" },
  { src: "/mir.png", alt: "Madverse", href: "https://www.madverse.co/" },
];

const columns = [0, 1, 2].map((col) => gallery.filter((_, i) => i % 3 === col));

export default function Home() {
  const containerRef = useRef(null);
  const [startIndex, setStartIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(2);
  const scrollerRef = useRef(null);
  const [q, setQ] = useState("");
  const [role, setRole] = useState("All");

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
    startIndex + cardsPerView
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
    []
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
            <h1>Empower Your Brand With UNNITY </h1>
            <p>
              At Unnity, we help brands grow in the digital world. Our tailored
              marketing solutions boost your online presence, engage your
              audience, and drive real results. Let Unnity unlock your brand’s
              full potential.
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
            <h2 className="carousel-title">
              Elevate Your Brand with Our Marketing Expertise
            </h2>
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
                <Image
                  src={feature.image}
                  alt={feature.alt}
                  className="feature-image"
                  unoptimized
                  width={0}
                  height={0}
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

      <div className="logo-slider">
        <h1>Trusted by Leading Brands</h1>
        <div className="logo-track">
          <Image
            src="/adpl.png"
            width={0}
            height={0}
            alt=""
            unoptimized
          ></Image>
          <Image
            src="/aurave.avif"
            width={0}
            height={0}
            alt=""
            unoptimized
          ></Image>
          <Image
            src="/clove.jpg"
            width={0}
            height={0}
            alt=""
            unoptimized
          ></Image>
          <Image
            src="/cupid.webp"
            width={0}
            height={0}
            alt=""
            unoptimized
          ></Image>
          <Image
            src="/e-travel.avif"
            width={0}
            height={0}
            alt=""
            unoptimized
          ></Image>

          <Image
            src="/faber.webp"
            width={0}
            height={0}
            alt=""
            unoptimized
          ></Image>
          <Image
            src="/isu-fashion.webp"
            width={0}
            height={0}
            alt=""
            unoptimized
          ></Image>

          <Image
            src="/kapurthala.png"
            width={0}
            height={0}
            alt=""
            unoptimized
          ></Image>
          <Image
            src="/madverse.svg"
            width={0}
            height={0}
            alt=""
            unoptimized
          ></Image>
          <Image
            src="/mireads.avif"
            width={0}
            height={0}
            alt=""
            unoptimized
          ></Image>
          <Image
            src="/penguine.png"
            width={0}
            height={0}
            alt=""
            unoptimized
          ></Image>
          <Image
            src="/power-mower.webp"
            width={0}
            height={0}
            alt=""
            unoptimized
          ></Image>

          <Image
            src="/shipway.webp"
            width={0}
            height={0}
            alt=""
            unoptimized
          ></Image>
          <Image
            src="/uberlyfe.webp"
            width={0}
            height={0}
            alt=""
            unoptimized
          ></Image>
          <Image
            src="/hubhawks.webp"
            width={0}
            height={0}
            alt=""
            unoptimized
          ></Image>

          {/* Repeat the same logos to make the loop seamless */}

          <Image
            src="/adpl.png"
            width={0}
            height={0}
            alt=""
            unoptimized
          ></Image>
          <Image
            src="/aurave.avif"
            width={0}
            height={0}
            alt=""
            unoptimized
          ></Image>
          <Image
            src="/clove.jpg"
            width={0}
            height={0}
            alt=""
            unoptimized
          ></Image>
          <Image
            src="/cupid.webp"
            width={0}
            height={0}
            alt=""
            unoptimized
          ></Image>
          <Image
            src="/e-travel.avif"
            width={0}
            height={0}
            alt=""
            unoptimized
          ></Image>

          <Image
            src="/faber.webp"
            width={0}
            height={0}
            alt=""
            unoptimized
          ></Image>
          <Image
            src="/isu-fashion.webp"
            width={0}
            height={0}
            alt=""
            unoptimized
          ></Image>
          <Image
            src="/kapurthala.png"
            width={0}
            height={0}
            alt=""
            unoptimized
          ></Image>
          <Image
            src="/madverse.svg"
            width={0}
            height={0}
            alt=""
            unoptimized
          ></Image>
          <Image
            src="/mireads.avif"
            width={0}
            height={0}
            alt=""
            unoptimized
          ></Image>
          <Image
            src="/penguine.png"
            width={0}
            height={0}
            alt=""
            unoptimized
          ></Image>
          <Image
            src="/power-mower.webp"
            width={0}
            height={0}
            alt=""
            unoptimized
          ></Image>

          <Image
            src="/shipway.webp"
            width={0}
            height={0}
            alt=""
            unoptimized
          ></Image>
          <Image
            src="/uberlyfe.webp"
            width={0}
            height={0}
            alt=""
            unoptimized
          ></Image>
          <Image
            src="/hubhawks.webp"
            width={0}
            height={0}
            alt=""
            unoptimized
          ></Image>
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
            <span className="cta-button" id="on-top">
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
            </span>
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
                      unoptimized
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

      {/* <section className="integration">
        <div className="integration-df">
          <div className="integration-left">
            {["up", "down", "up"].map((direction, colIdx) => (
              <div
                key={colIdx}
                className={`integration-list-marquee ${direction}`}
              >
                <div className="integration-marquee-inner">
                  {[...columns[colIdx], ...columns[colIdx]].map((item, idx) => {
                    const Img = (
                      <Image
                        src={item.src}
                        alt={item.alt}
                        width={185}
                        height={240}
                        className="integration-img"
                        loading="eager"
                      />
                    );
                    return (
                      <div key={idx} className="integration-item">
                        <div className="card">
                          <span>
                            {item.href ? (
                              <Link
                                href={item.href}
                                aria-label={item.alt}
                                className="integration-img-link"
                              >
                                {Img}
                              </Link>
                            ) : (
                              Img
                            )}
                          </span>
                          <span>
                            <h2>{item.title}</h2>
                          </span>
                        </div>
                      </div>
                    );
                  })}
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
            <Link href="/case-studies">
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
      </section> */}
      <section className="integration">
        <div className="integration-df">
          <div className="integration-left">
            {["up", "down", "up"].map((direction, colIdx) => (
              <div
                key={colIdx}
                className={`integration-list-marquee ${direction}`}
              >
                <div className="integration-marquee-inner">
                  {[...columns[colIdx], ...columns[colIdx]].map((item, idx) => (
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
                              loading="eager"
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
                              loading="eager"
                            />
                          </div>
                          <h3 className="integration-title">{item.alt}</h3>
                        </>
                      )}
                    </div>
                  ))}
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
            <Link href="/case-studies">
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
            <button onClick={handlePrev} className="nav-btn">
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
                ></path>
              </svg>
            </button>
            <button onClick={handleNext} className="nav-btn">
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
                ></path>
              </svg>
            </button>
          </div>
        </div>

        <div className="testimonial-wrapper" ref={scrollerRef}>
          {visibleTestimonials.map((t, idx) => (
            <div className="testimonial-card" key={idx}>
              <Image
                src={t.image}
                alt={t.name}
                className="testimonial-image"
                width={0}
                height={0}
                unoptimized
              />
              <div className="testimonial-content">
                <p className="testimonial-feedback">{t.feedback}</p>
                <div className="testimonial-meta">
                  <div>
                    <strong className="testimonial-name">{t.name}</strong>
                    <div className="testimonial-role">{t.role}</div>
                  </div>
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
                  {/* <img src={m.photo} alt={m.name} loading="lazy" /> */}
                  <Image
                    src={m.photo}
                    width={0}
                    height={0}
                    alt={m.name}
                    loading="lazy"
                    unoptimized
                  ></Image>
                </div>

                <div className="member-info">
                  <h3 className="member-name">{m.name}</h3>
                  <div className="member-role">{m.role}</div>
                  <p className="member-bio">{m.bio}</p>

                  {!!m.socials && (
                    <div className="member-socials">
                      {m.socials.linkedin && (
                        <Link
                          href={m.socials.linkedin}
                          aria-label={`${m.name} on LinkedIn`}
                        >
                          in
                        </Link>
                      )}
                      {m.socials.twitter && (
                        <Link
                          href={m.socials.twitter}
                          aria-label={`${m.name} on Twitter`}
                        >
                          x
                        </Link>
                      )}
                      {m.socials.instagram && (
                        <Link
                          href={m.socials.instagram}
                          aria-label={`${m.name} on Instagram`}
                        >
                          ig
                        </Link>
                      )}
                      {m.socials.github && (
                        <Link
                          href={m.socials.github}
                          aria-label={`${m.name} on GitHub`}
                        >
                          gh
                        </Link>
                      )}
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
