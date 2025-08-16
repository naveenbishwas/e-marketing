"use client";
import Image from "next/image";
import "./footer.css";
import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaTimes,
} from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <h2 className="footer-heading">It’s time to elevate your business</h2>
        <Link href="https://calendly.com/sayam-unnity/30min" target="_blank">
          <div className="get-in-touch">Get in touch</div>
        </Link>
      </div>

      <div className="footer-main">
        <div className="footer-left">
          <Image
            src="/check.png"
            width={0}
            height={0}
            unoptimized
            alt="footer-img"
          ></Image>
          <div className="newsletter-formm">
            <p>
              Address : SF-40 2nd Floor, Pearl Omaxe, Netaji Subhash Place,
              Pitampura, New Delhi - 110034
            </p>
          </div>

          {/* <div className="footer-social">
            <a href="#">
              <FaInstagram />
            </a>
            <a href="#">
              <FaFacebookF />
            </a>
            <a href="#">
              <FaLinkedinIn />
            </a>
            <a href="#">
              <FaTimes />
            </a>
          </div> */}
        </div>

        <div className="footer-links">
          <div className="link-column">
            <div className="footer-social">
              <a href="#">
                <FaInstagram />
              </a>
              <a href="#">
                <FaFacebookF />
              </a>
              <a href="#">
                <FaLinkedinIn />
              </a>
              <a href="#">
                <FaTimes />
              </a>
            </div>
          </div>
          <div className="link-column">
            <h4>Services</h4>
            <a href="#">SEO</a>
            <a href="#">Google Ads</a>
            <a href="#">Meta Ads</a>
            <a href="#">UI/UX</a>
            <a href="#">Website Development</a>
            <a href="#">Brand Consultant</a>
          </div>

          <div className="link-column">
            <h4>Pages</h4>
            <a href="#">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
