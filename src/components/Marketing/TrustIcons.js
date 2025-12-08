'use client';
import styles from './TrustIcons.module.css';

const TrustIcons = () => {
    const brands = [
        "NEXUS",
        "VORTEX",
        "ELEVATE",
        "HORIZON",
        "QUANTUM",
        "SYNTHESIS"
    ];

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <p className={styles.title}>Trusted by industry leaders</p>
                <div className={styles.grid}>
                    {brands.map((brand, index) => (
                        <div key={index} className={styles.logoItem}>
                            {brand}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TrustIcons;
