import styles from './Footer.module.css';

const Footer = () => {
    const keywords = ["Digital Marketing", "SEO Services", "PPC Management", "Content Strategy", "Social Media Marketing", "Web Design", "Lead Generation", "E-commerce Growth", "Local SEO", "Email Marketing", "CRO", "Branding"];

    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.top}>
                    <div className={styles.brand}>
                        <h3>AGENCY</h3>
                        <p>Transforming brands with data-driven strategies and creative excellence.</p>
                        <div className={styles.address}>
                            <p>123 Innovation Drive</p>
                            <p>Tech Valley, CA 94043</p>
                            <p>+1 (555) 123-4567</p>
                        </div>
                    </div>

                    <div className={styles.links}>
                        <h4>Company</h4>
                        <ul>
                            <li>About Us</li>
                            <li>Our Team</li>
                            <li>Careers</li>
                            <li>Case Studies</li>
                            <li>Blog</li>
                        </ul>
                    </div>

                    <div className={styles.links}>
                        <h4>Services</h4>
                        <ul>
                            <li>SEO & Content</li>
                            <li>Paid Advertising</li>
                            <li>Social Media</li>
                            <li>Web Development</li>
                            <li>Consulting</li>
                        </ul>
                    </div>

                    <div className={styles.newsletter}>
                        <h4>Stay Updated</h4>
                        <p>Subscribe to our newsletter for the latest marketing trends.</p>
                        <form className={styles.newsletterForm}>
                            <input type="email" placeholder="Enter your email" />
                            <button type="submit">→</button>
                        </form>
                    </div>
                </div>

                <div className={styles.keywords}>
                    <h4>Popular Services</h4>
                    <div className={styles.keywordList}>
                        {keywords.map((kw, i) => (
                            <span key={i}>{kw}</span>
                        ))}
                    </div>
                </div>

                <div className={styles.bottom}>
                    <p>&copy; 2024 Agency Inc. All rights reserved.</p>
                    <div className={styles.legalLinks}>
                        <span>Privacy Policy</span>
                        <span>Terms of Service</span>
                        <span>Cookie Policy</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
