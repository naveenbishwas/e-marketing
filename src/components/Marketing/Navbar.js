import styles from './Navbar.module.css';

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <div className={styles.container}>
                <div className={styles.logo}>AGENCY</div>
                <ul className={styles.links}>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#process">Process</a></li>
                    <li><a href="#work">Our Work</a></li>
                    <li><a href="#contact" className={styles.cta}>Get Started</a></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
