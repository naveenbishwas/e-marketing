"use client";
import Image from "next/image";
import "./footer.css";
import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaTimes,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <h2 className="footer-heading">It’s time to elevate your business</h2>
        <div className="get-in-touch">Get in touch</div>
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

        <div className="footer-links">
          <div className="link-column">
            <h4>Page link</h4>
            <a href="#" className="active">
              Home
            </a>
            <a href="#">Home 2</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
            <a href="#">Blog</a>
          </div>
          <div className="link-column">
            <h4>Page link</h4>

            <a href="#">Feature</a>
            <a href="#">Careers</a>
            <a href="#">Pricing</a>
            <a href="#">Integrations</a>
          </div>
          <div className="link-column">
            <h4>Utility Pages</h4>
            <a href="#">Style Guide</a>
            <a href="#">Instructions</a>
            <a href="#">Licenses</a>
            <a href="#">Changelog</a>
            <a href="#">Link in Bio</a>
            <a href="#">Coming Soon</a>
            <a href="#">Error 404</a>
            <a href="#">Password Protected</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
