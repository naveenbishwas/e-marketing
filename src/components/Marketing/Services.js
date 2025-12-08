import styles from './Services.module.css';

const Services = () => {
    return (
        <section className={styles.services} id="services">
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.heading}>Our Expertise</h2>
                    <p className={styles.subheading}>Comprehensive solutions for digital growth.</p>
                </div>

                <div className={styles.grid}>
                    {/* Lead Generation Block - Large */}
                    <div className={`${styles.card} ${styles.cardLarge} ${styles.leadGen}`}>
                        <div className={styles.cardContent}>
                            <div className={styles.icon}>🚀</div>
                            <h3>Lead Generation</h3>
                            <p>High-quality leads that convert. We use targeted strategies to fill your pipeline.</p>
                            <ul className={styles.tags}>
                                <li>PPC</li>
                                <li>Social Ads</li>
                                <li>Funnels</li>
                            </ul>
                        </div>
                        <div className={styles.cardVisual}>
                            <div className={styles.graphLine}></div>
                            <div className={styles.graphLine}></div>
                            <div className={styles.floatingStat}>+145%</div>
                        </div>
                    </div>

                    {/* E-commerce Block - Large */}
                    <div className={`${styles.card} ${styles.cardLarge} ${styles.ecom}`}>
                        <div className={styles.cardContent}>
                            <div className={styles.icon}>🛍️</div>
                            <h3>E-commerce</h3>
                            <p>Scale your online store with data-driven SEO and shopping campaigns.</p>
                            <ul className={styles.tags}>
                                <li>Shopify</li>
                                <li>Google Shopping</li>
                                <li>CRO</li>
                            </ul>
                        </div>
                        <div className={styles.cardVisual}>
                            <div className={styles.productCard}></div>
                            <div className={styles.productCard}></div>
                        </div>
                    </div>

                    {/* Smaller Blocks */}
                    <div className={styles.card}>
                        <div className={styles.icon}>✍️</div>
                        <h3>Content Strategy</h3>
                        <p>Engaging storytelling that builds brand authority.</p>
                    </div>

                    <div className={styles.card}>
                        <div className={styles.icon}>🔍</div>
                        <h3>SEO</h3>
                        <p>Dominate search results and drive organic traffic.</p>
                    </div>

                    <div className={styles.card}>
                        <div className={styles.icon}>📧</div>
                        <h3>Email Marketing</h3>
                        <p>Nurture leads into loyal customers.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
