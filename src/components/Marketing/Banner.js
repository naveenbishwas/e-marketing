'use client';
import { useState, useEffect, useRef } from 'react';
import styles from './Banner.module.css';

const Banner = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    const videoRef = useRef(null);
    const [terms, setTerms] = useState([]);

    useEffect(() => {
        // Generate random positions for terms
        const marketingTerms = ['CPC', 'CPR', 'SEO', 'ROI', 'ADS', 'LEADS', 'CTR', 'B2B'];
        const newTerms = marketingTerms.map((term, i) => ({
            id: i,
            text: term,
            top: `${Math.random() * 80 + 10}%`, // 10% to 90%
            left: `${Math.random() * 80 + 10}%`, // 10% to 90%
            delay: `${Math.random() * 5}s`,
            duration: `${Math.random() * 3 + 2}s`
        }));
        setTerms(newTerms);

        const handleMouseMove = (e) => {
            const { clientX, clientY } = e;
            const x = (clientX / window.innerWidth - 0.5) * 20; // -10 to 10
            const y = (clientY / window.innerHeight - 0.5) * 20; // -10 to 10
            setMousePosition({ x, y });
        };

        // Ensure video plays
        if (videoRef.current) {
            videoRef.current.defaultMuted = true;
            videoRef.current.muted = true;
            videoRef.current.play().catch(e => console.log("Autoplay blocked:", e));
        }

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <section className={styles.banner} style={{ '--mouse-x': `${mousePosition.x}deg`, '--mouse-y': `${mousePosition.y}deg` }}>
            {/* Image Background */}
            <div className={styles.videoWrapper}>
                <img
                    src="/images/marketing_team_banner.png"
                    alt="Marketing Team"
                    className={styles.video} // Reusing the same class for object-fit styles
                />
                <div className={styles.overlay}></div>

                {/* Floating Marketing Terms */}
                <div className={styles.floatingTermsContainer}>
                    {terms.map(term => (
                        <div
                            key={term.id}
                            className={styles.floatingTerm}
                            style={{
                                top: term.top,
                                left: term.left,
                                animationDelay: term.delay,
                                animationDuration: term.duration
                            }}
                        >
                            {term.text}
                        </div>
                    ))}
                </div>
            </div>

            <div className={styles.container}>
                {/* Main Content */}
                <div className={styles.content}>
                    <h1 className={styles.heading}>
                        AGENCY OF<br />
                        THE FUTURE
                    </h1>
                </div>
            </div>

            {/* Marquee Strip */}
            <div className={styles.marqueeStrip}>
                <div className={styles.marqueeContent}>
                    <span>STRATEGY • DESIGN • DEVELOPMENT • MARKETING</span>
                    <span className={styles.separator}>•</span>
                    <span>STRATEGY • DESIGN • DEVELOPMENT • MARKETING</span>
                    <span className={styles.separator}>•</span>
                    <span>STRATEGY • DESIGN • DEVELOPMENT • MARKETING</span>
                    <span className={styles.separator}>•</span>
                    <span>STRATEGY • DESIGN • DEVELOPMENT • MARKETING</span>
                    <span className={styles.separator}>•</span>
                </div>
                <div className={styles.marqueeContent} aria-hidden="true">
                    <span>STRATEGY • DESIGN • DEVELOPMENT • MARKETING</span>
                    <span className={styles.separator}>•</span>
                    <span>STRATEGY • DESIGN • DEVELOPMENT • MARKETING</span>
                    <span className={styles.separator}>•</span>
                    <span>STRATEGY • DESIGN • DEVELOPMENT • MARKETING</span>
                    <span className={styles.separator}>•</span>
                    <span>STRATEGY • DESIGN • DEVELOPMENT • MARKETING</span>
                    <span className={styles.separator}>•</span>
                </div>
            </div>
        </section>
    );
};

export default Banner;
