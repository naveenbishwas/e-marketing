"use client";

import Image from "next/image";
import "./page.css";
import Header from "@/components/Header/page";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Footer from "@/components/footer/page";

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
    title: "Case Study of Dentist",
    description:
      "Welcome to a comprehensive overview of transforming a large dentistry chain's digital marketing strategy....",
    image: "/step-1.avif",
  },
  {
    number: "02",
    title: "Case Study of Home Appliances",
    description:
      "Mission to dominate the digital advertising space through Google Ads. The journey began with scaling efforts....",
    image: "/step-2.avif",
  },
  {
    number: "03",
    title: "Case Study of E-Sim",
    description:
      "Brand E-Travelsim's journey with Google Ads is a testament to strategic scaling and optimization...",
    image: "/step-3.avif",
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
    name: "Sarah Mitchell",
    role: "UI/UX Designer",
    companyLogo: "/logo-optimal.svg",
    feedback:
      "Their data-driven approach helped us improve profitability and reduce unnecessary expenditures by 20%. They're the real deal!",
  },
  {
    image: "/testimonial-2.avif",
    name: "Alex Johnson",
    role: "Sales Director",
    companyLogo: "/logo-enterprise.svg",
    feedback:
      "We've streamlined our processes, cut costs, and significantly improved customer satisfaction. It’s been a game-changer for our business!",
  },

  {
    image: "/testimonial-3.avif",
    name: "Alex Johnson",
    role: "Sales Director",
    companyLogo: "/logo-enterprise.svg",
    feedback:
      "We've streamlined our processes, cut costs, and significantly improved customer satisfaction. It’s been a game-changer for our business!",
  },
  {
    image: "/testimonial-4.avif",
    name: "Alex Johnson",
    role: "Sales Director",
    companyLogo: "/logo-enterprise.svg",
    feedback:
      "We've streamlined our processes, cut costs, and significantly improved customer satisfaction. It’s been a game-changer for our business!",
  },
];

export default function Home() {
  const containerRef = useRef(null);
  const [startIndex, setStartIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(2);

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
        <span className="step-heading">
          <h1>Client Success Through Smart Digital Strategy</h1>
        </span>
        <div className="step-section-df">
          <Link href="#">
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
                  <Image
                    src={step.image}
                    alt={step.title}
                    className="step-image"
                    width={0}
                    height={0}
                    unoptimized
                  />
                </div>
              </div>
            ))}
          </Link>
          <span className="cs-btn">
            <Link href="/case-studies">
              <button>View All</button>
            </Link>
          </span>
        </div>
      </section>

      <section className="integration">
        <div className="integration-df">
          <div className="integration-left">
            {["up", "down", "up"].map((direction, index) => (
              <div
                key={index}
                className={`integration-list-marquee ${direction}`}
              >
                <div className="integration-marquee-inner">
                  {integrations.map((item, idx) => (
                    <div key={idx} className="integration-item">
                      <Link
                        href={item.href}
                        className="integration-link"
                        aria-label={item.title}
                      >
                        <div className="integration-icon">
                          <Image
                            src={item.icon}
                            alt={item.title}
                            width={40}
                            height={40}
                            loading="eager"
                          />
                        </div>
                        <div>
                          <h2 className="integration-title">{item.title}</h2>
                          <p className="integration-description">
                            {item.description}
                          </p>
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="integration-right">
            <h1>Effortless integration, maximum impact</h1>
            <p>
              Whether it’s eCommerce, CRM, or social media, we’ve made it easy
              to connect your tools and streamline your marketing efforts.
            </p>
            <Link href="#">
              <button className="cta-button" id="integration-btn">
                Explore all integrations
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

      {/* <section className="testimonial-section">
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
                />
              </svg>
            </button>
            <button onClick={handleNext} className="nav-btn">
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
                ></path>
              </svg>
            </button>
          </div>
        </div>

        <div className="testimonial-wrapper">
          {visibleTestimonials.map((testimonial, idx) => (
            <div className="testimonial-card" key={idx}>
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="testimonial-image"
              />
              <div className="testimonial-content">
                <p className="testimonial-feedback">"{testimonial.feedback}"</p>
                <div className="testimonial-meta">
                  <div>
                    <strong className="testimonial-name">
                      {testimonial.name}
                    </strong>
                    <div className="testimonial-role">{testimonial.role}</div>
                  </div>
                  <img
                    src={testimonial.companyLogo}
                    alt="Company logo"
                    className="company-logo"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section> */}
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

        <div className="testimonial-wrapper">
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
                  <Image
                    src={t.companyLogo}
                    alt="Company logo"
                    className="company-logo"
                    width={0}
                    height={0}
                    unoptimized
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
