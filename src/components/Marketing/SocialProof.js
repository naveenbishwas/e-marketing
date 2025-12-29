"use client";
import { useState } from "react";
import styles from "./SocialProof.module.css";
import Image from "next/image";

const SocialProof = () => {
  const [activeReview, setActiveReview] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const reviews = [
    {
      text: "In the early days of our brand-building journey, one thing that stood out about Unnity was its relentless drive — constantly experimenting, refining, and pushing forward until results were achieved. This grit and unwavering commitment to delivering outcomes truly make Unnity a company that’s in it to win",
      author: "Rishab B. | Founder of BabLouie",
      role: "BabLouie",
      image: "/avatar_ceo_1764326367308.png",
    },
    {
      text: "I hired Unnity for performance marketing of Sain Milks, and they did a fantastic job in delivering the promised goals. The team is highly experienced, meticulous, and gathered valuable insights about the industry and its users to achieve even better results. They also designed the Sain Milks website, which I loved — it’s user-friendly, aesthetically pleasing, and professionally built. I was so impressed that I entrusted them with another website for my other business, Tashe, and they are doing an excellent job on that as well. Wishing Unnity even greater success in the future — highly recommended!",
      author: "- Tarun J. | Founder of Tashe and Sain Milks",
      role: "Website Development and Performance Marketing",
      image: null,
    },
    {
      text: "I highly recommend Sayam J. for his exceptional capabilities and performance. During his time at 'Unbundl', Sayam efficiently managed our ad accounts, focusing on driving high-quality leads. He consistently showed reliability and responsibility in this role. Sayam's expertise in digital marketing was evident as he contributed significantly to our campaign successes. Based on his proven track record and deep domain knowledge, I wholeheartedly endorse Sayam for any role requiring digital marketing expertise. He's a valuable asset to any team.",
      author: "— Vandita, Founder-Iyurved",
      role: "Dentistry",
      image: null,
    },
       {
      text: "Cupid started its own website in 2020, and since then our journey with Mr. Sayam and his team at Team Unnity has been closely associated with our growth. They handle both performance marketing and social media for us. We began with a modest daily ad budget of around ₹500+, and over time their team has successfully scaled it to ₹20,000+ per day. Reason for continuity have been their deep involvement with data—they regularly share detailed Excel reports, conduct weekly review meetings, and ensure clear communication at every stage.Compared to other agencies we’ve worked with, the personal touch and strong understanding of our brand make a real difference. Their team continuously brings in updated strategies, tools, and industry knowledge, which helps keep our ads aligned with both performance goals and long-term brand growth.Overall, the consistency, transparency, and commitment from Team Unnity have been a strong support in scaling our business.",
      author: "— Cupidclothings- Tanya",
      role: "Apparel",
      image: null,
    },
    {
      text: "We've streamlined our processes, cut costs, and significantly improved customer satisfaction. Its been a game-changer for our business!",
      author: "— Alex Johnson",
      role: "Sales Director",
      image: null,
    },
  ];

  const logos = [
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
  ];

  const changeReview = (direction) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      if (direction === "next") {
        setActiveReview((prev) => (prev + 1) % reviews.length);
      } else {
        setActiveReview((prev) => (prev - 1 + reviews.length) % reviews.length);
      }
      setIsAnimating(false);
    }, 300);
  };

  // Realistic Text Logos

  return (
    <section className={styles.socialProof}>
      <div className={styles.container}>
        <div className={styles.logoSection}>
          <h1 className={styles.heading}>Trusted by Leading Brands</h1>

          {/* Row 1 – Left to Right */}
          <div className={styles.marqueeWrapper}>
            <div className={`${styles.marquee} ${styles.leftToRight}`}>
              {logos.map((logo, i) => (
                <Image
                  key={`row1-${i}`}
                  src={logo}
                  width={0}
                  height={0}
                  alt=""
                  unoptimized
                />
              ))}
              {logos.map((logo, i) => (
                <Image
                  key={`row1-dup-${i}`}
                  src={logo}
                  width={0}
                  height={0}
                  alt=""
                  unoptimized
                />
              ))}
            </div>
          </div>

          {/* Row 2 – Right to Left */}
          <div className={styles.marqueeWrapper}>
            <div className={`${styles.marquee} ${styles.rightToLeft}`}>
              {logos.map((logo, i) => (
                <Image
                  width={0}
                  height={0}
                  key={`row2-${i}`}
                  src={logo}
                  alt=""
                  unoptimized
                />
              ))}
              {logos.map((logo, i) => (
                <Image
                  width={0}
                  height={0}
                  key={`row2-dup-${i}`}
                  src={logo}
                  alt=""
                  unoptimized
                />
              ))}
            </div>
          </div>
        </div>

        <div className={styles.testimonialSection}>
          <div className={styles.controls}>
            <h3>Success Stories</h3>
            <p>See what our partners have to say about our collaboration.</p>
            <div className={styles.arrows}>
              <button
                onClick={() => changeReview("prev")}
                className={styles.arrowBtn}
              >
                ←
              </button>
              <button
                onClick={() => changeReview("next")}
                className={styles.arrowBtn}
              >
                →
              </button>
            </div>
          </div>

          <div className={styles.reviewDisplay}>
            <div
              className={`${styles.reviewCard} ${
                isAnimating ? styles.exit : styles.enter
              }`}
            >
              <div className={styles.stars}>★★★★★</div>
              <p className={styles.reviewText}>{reviews[activeReview].text}</p>
              <div className={styles.author}>
                {/* <div className={styles.avatar}>
                  {reviews[activeReview].image ? (
                    <img
                      src={reviews[activeReview].image}
                      alt={reviews[activeReview].author}
                    />
                  ) : (
                    reviews[activeReview].author.charAt(0)
                  )}
                </div> */}
                <div>
                  <h4>{reviews[activeReview].author}</h4>
                  <span>{reviews[activeReview].role}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
