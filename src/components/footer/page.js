"use client";
import Link from "next/link";
import styles from "./footer.module.css";
import {
  FaInstagram,
  FaLinkedinIn,
  FaFacebookF,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";
import Image from "next/image";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      {/* Watermark Background */}
      <div className={styles.watermark}>UNNITY</div>

      <div className={styles.container}>
        {/* Headline */}
        <h2 className={styles.headline}>Its Time To Elevate Your Business</h2>

        <div className={styles.columns}>
          {/* Column 1: Brand & Contact */}
          <div className={styles.brandColumn}>
            <div className={styles.logo}>
              <Link href="/">
                <Image
                  src="/logo.png"
                  alt="eMarketing Logo"
                  className="logo"
                  width={0}
                  height={0}
                  unoptimized
                />
              </Link>
            </div>
            <p className={styles.description}>
              We empower brands with innovative marketing strategies to amplify
              growth and impact.
            </p>

            {/* Contact Details (Moved here) */}
            <div className={styles.contactInfo}>
              <div className={styles.contactItem}>
                <FaMapMarkerAlt className={styles.contactIcon} />
                <span>
                  SF-40, 2nd Floor, Pearl Omaxe, Netaji Subhash Place,
                  Pitampura, New Delhi – 110034
                </span>
              </div>

              <div className={styles.contactItem}>
                <FaPhoneAlt className={styles.contactIcon} />
                <span>+91 931 500 3754</span>
              </div>
            </div>

            {/* Social Icons */}
            <div className={styles.socialRow}>
              <Link href="https://www.instagram.com/_unnity/" target="_blank">
                <div className={styles.socialIcon}>
                  <FaInstagram />
                </div>
              </Link>
              <Link
                href="https://www.linkedin.com/company/unnityglobal/"
                target="_blank"
              >
                <div className={styles.socialIcon}>
                  <FaLinkedinIn />
                </div>
              </Link>
              <Link
                href="https://www.facebook.com/sayam.jain.719988?rdid=18DGFgUcBHUdIeVR&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1BD8Xgy8zM%2F#"
                target="_blank"
              >
                <div className={styles.socialIcon}>
                  <FaFacebookF />
                </div>
              </Link>
              <Link
                href="https://x.com/SayamJa92667175?t=DGzv7ROM6TDa81K7HYlu3g&s=08"
                target="_blank"
              >
                <div className={styles.socialIcon}>
                  <FaXTwitter />
                </div>
              </Link>
            </div>
          </div>

          {/* Column 2: Services */}
          <div className={styles.linkColumn}>
            <h4>Services</h4>
            <ul className={styles.linkList}>
              <li>UI/UX</li>
              <li>Google Ads</li>
              <li>Meta Ads</li>
              <li>Website Development</li>
              <li>SEO</li>
              <li>Brand Consultation</li>
            </ul>
          </div>

          {/* Column 3: Company */}
          <div className={styles.linkColumn}>
            <h4>Company</h4>
            <ul className={styles.linkList}>
              <Link href="/privacy">
                <li>Privacy Policy</li>
              </Link>
            </ul>
          </div>
        </div>

        {/* Floating Action Button */}
        <div className={styles.floatingButtonWrapper}>
          <Link href="https://calendly.com/sayam-unnity/30min?month=2025-12">
            <button className={styles.floatingButton}>Get in touch</button>
          </Link>
        </div>
      </div>

      {/* Wavy Bottom Decoration */}
      <div className={styles.waveDecoration}>
        <svg
          viewBox="0 0 1440 320"
          className={styles.waveSvg}
          preserveAspectRatio="none"
        >
          <path
            fill="#283758"
            fillOpacity="0.3"
            d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
          <path
            fill="#283758"
            fillOpacity="0.8"
            d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,261.3C960,256,1056,224,1152,213.3C1248,203,1344,213,1392,218.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>

      {/* Star Element */}
      <div className={styles.starDecoration}>
        <svg
          width="60"
          height="60"
          viewBox="0 0 60 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M30 0L33 20L53 23L33 26L30 46L27 26L7 23L27 20L30 0Z"
            fill="#fff"
            fillOpacity="0.8"
          />
        </svg>
      </div>
    </footer>
  );
};

export default Footer;
