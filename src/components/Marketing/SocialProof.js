'use client';
import { useState } from 'react';
import styles from './SocialProof.module.css';

const SocialProof = () => {
    const [activeReview, setActiveReview] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    const reviews = [
        {
            text: "The ROI we've seen is incredible. They completely transformed our digital presence and helped us scale to 7 figures.",
            author: "John Doe",
            role: "CEO, TechStart",
            image: "/avatar_ceo_1764326367308.png"
        },
        {
            text: "Professional, data-driven, and creative. The perfect partner for scaling our e-commerce operations globally.",
            author: "Alice Smith",
            role: "CMO, RetailCo",
            image: null
        },
        {
            text: "Their SEO strategy is unmatched. We saw a 300% increase in organic traffic within just 6 months.",
            author: "Michael Brown",
            role: "Founder, GrowthLabs",
            image: null
        }
    ];

    const changeReview = (direction) => {
        if (isAnimating) return;
        setIsAnimating(true);
        setTimeout(() => {
            if (direction === 'next') {
                setActiveReview((prev) => (prev + 1) % reviews.length);
            } else {
                setActiveReview((prev) => (prev - 1 + reviews.length) % reviews.length);
            }
            setIsAnimating(false);
        }, 300);
    };

    // Realistic Text Logos
    const logos = [
        { name: "Acme Corp", font: "serif", weight: "bold" },
        { name: "GlobalTech", font: "sans-serif", weight: "800" },
        { name: "Nebula", font: "monospace", weight: "normal" },
        { name: "Vortex", font: "sans-serif", weight: "300" },
        { name: "Apex", font: "serif", weight: "900" },
        { name: "Horizon", font: "sans-serif", weight: "600" },
        { name: "Quantum", font: "monospace", weight: "bold" },
        { name: "Zenith", font: "serif", weight: "normal" }
    ];

    return (
        <section className={styles.socialProof}>
            <div className={styles.container}>
                <div className={styles.logoSection}>
                    <h3 className={styles.heading}>Trusted by industry leaders</h3>
                    <div className={styles.marqueeWrapper}>
                        <div className={styles.marquee}>
                            {[...logos, ...logos, ...logos].map((logo, index) => (
                                <div key={index} className={styles.brandItem} style={{
                                    fontFamily: logo.font,
                                    fontWeight: logo.weight
                                }}>
                                    {logo.name}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className={styles.testimonialSection}>
                    <div className={styles.controls}>
                        <h3>Success Stories</h3>
                        <p>See what our partners have to say about our collaboration.</p>
                        <div className={styles.arrows}>
                            <button onClick={() => changeReview('prev')} className={styles.arrowBtn}>←</button>
                            <button onClick={() => changeReview('next')} className={styles.arrowBtn}>→</button>
                        </div>
                    </div>

                    <div className={styles.reviewDisplay}>
                        <div className={`${styles.reviewCard} ${isAnimating ? styles.exit : styles.enter}`}>
                            <div className={styles.stars}>★★★★★</div>
                            <p className={styles.reviewText}>"{reviews[activeReview].text}"</p>
                            <div className={styles.author}>
                                <div className={styles.avatar}>
                                    {reviews[activeReview].image ? (
                                        <img src={reviews[activeReview].image} alt={reviews[activeReview].author} />
                                    ) : (
                                        reviews[activeReview].author.charAt(0)
                                    )}
                                </div>
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
