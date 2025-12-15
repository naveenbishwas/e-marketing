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
      text: "This is just a token to show we’ll be working together — the amount doesn’t reflect your sincerity, which I deeply value. I’m confident I can help bring you more clients; if you share a short blurb, I can circulate it in my founder groups to generate strong leads. Please don’t treat this as a retainer, but as a way to keep our collaboration active for now.",
      author: "— Sagar K. | Sr. Manager - Performance Marketing",
      role: "Dentistry",
      image: null,
    },
    {
      text: "We've streamlined our processes, cut costs, and significantly improved customer satisfaction. Its been a game-changer for our business!",
      author: "— Alex Johnson",
      role: "Sales Director",
      image: null,
    },
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
        <div className={styles.logoSlider}>
          <h1 className={styles.heading}>Trusted by Leading Brands</h1>

          <div className={styles.logoTrack}>
            <Image src="/empire1.png" width={0} height={0} alt="" unoptimized />
            <Image src="/aqua1.png" width={0} height={0} alt="" unoptimized />
            <Image
              src="/comforto.png"
              width={0}
              height={0}
              alt=""
              unoptimized
            />
            <Image src="/da1.png" width={0} height={0} alt="" unoptimized />
            <Image src="/adpl2.png" width={0} height={0} alt="" unoptimized />
            <Image src="/edoofa.png" width={0} height={0} alt="" unoptimized />
            <Image src="/hardoll.png" width={0} height={0} alt="" unoptimized />
            <Image src="/hub1.png" width={0} height={0} alt="" unoptimized />
            <Image src="/nira.png" width={0} height={0} alt="" unoptimized />
            <Image
              src="/orchid-blue.png"
              width={0}
              height={0}
              alt=""
              unoptimized
            />
            <Image src="/poco.png" width={0} height={0} alt="" unoptimized />
            <Image src="/sain.png" width={0} height={0} alt="" unoptimized />
            <Image src="/sky.png" width={0} height={0} alt="" unoptimized />
            <Image src="/aurave1.png" width={0} height={0} alt="" unoptimized />
            <Image src="/uk.png" width={0} height={0} alt="" unoptimized />
            <Image src="/cupid1.png" width={0} height={0} alt="" unoptimized />
            <Image
              src="/e-travel.avif"
              width={0}
              height={0}
              alt=""
              unoptimized
            />
            <Image src="/isu1.png" width={0} height={0} alt="" unoptimized />
            <Image src="/kapur1.png" width={0} height={0} alt="" unoptimized />
            <Image src="/madve.png" width={0} height={0} alt="" unoptimized />
            <Image
              src="/mireads.avif"
              width={0}
              height={0}
              alt=""
              unoptimized
            />
            <Image
              src="/power-mower.webp"
              width={0}
              height={0}
              alt=""
              unoptimized
            />
            <Image
              src="/uberlyfe1.png"
              width={0}
              height={0}
              alt=""
              unoptimized
            />
            <Image src="/hub1.png" width={0} height={0} alt="" unoptimized />

            {/* duplicate logos for seamless loop */}
            <Image src="/empire1.png" width={0} height={0} alt="" unoptimized />
            <Image src="/aqua1.png" width={0} height={0} alt="" unoptimized />
            <Image
              src="/comforto.png"
              width={0}
              height={0}
              alt=""
              unoptimized
            />
            <Image src="/da1.png" width={0} height={0} alt="" unoptimized />
            <Image src="/edoofa.png" width={0} height={0} alt="" unoptimized />
            <Image src="/hardoll.png" width={0} height={0} alt="" unoptimized />
            <Image src="/hub1.png" width={0} height={0} alt="" unoptimized />
            <Image src="/nira.png" width={0} height={0} alt="" unoptimized />
            <Image
              src="/orchid-blue.png"
              width={0}
              height={0}
              alt=""
              unoptimized
            />
            <Image src="/poco.png" width={0} height={0} alt="" unoptimized />
            <Image src="/sain.png" width={0} height={0} alt="" unoptimized />
            <Image src="/sky.png" width={0} height={0} alt="" unoptimized />
            <Image src="/aurave1.png" width={0} height={0} alt="" unoptimized />
            <Image src="/uk.png" width={0} height={0} alt="" unoptimized />
            <Image src="/cupid1.png" width={0} height={0} alt="" unoptimized />
            <Image
              src="/e-travel.avif"
              width={0}
              height={0}
              alt=""
              unoptimized
            />
            <Image src="/isu1.png" width={0} height={0} alt="" unoptimized />
            <Image src="/kapur1.png" width={0} height={0} alt="" unoptimized />
            <Image src="/madve.png" width={0} height={0} alt="" unoptimized />
            <Image
              src="/mireads.avif"
              width={0}
              height={0}
              alt=""
              unoptimized
            />
            <Image
              src="/power-mower.webp"
              width={0}
              height={0}
              alt=""
              unoptimized
            />
            <Image
              src="/uberlyfe1.png"
              width={0}
              height={0}
              alt=""
              unoptimized
            />
            <Image src="/hub1.png" width={0} height={0} alt="" unoptimized />
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
