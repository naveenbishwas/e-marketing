import Head from "next/head";
import "./privacy.css"; // Basic import of external CSS
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header/page";
import Footer from "@/components/footer/page";

export default function PrivacyPolicy() {
  return (
    <>
      <Header />

      <div className="privacy-container">
        <h1>Privacy Policy – Unnity</h1>
        <p>
          <strong>Effective Date:</strong> 1st January 2024
        </p>
        <p>
          At <strong>Unnity</strong>, we are committed to protecting your
          privacy. This Privacy Policy outlines how we collect, use, and manage
          your personal information when you visit or use our website.
        </p>

        <hr />

        <h2>THIRD-PARTY SERVICES</h2>
        <p>
          For certain services, we engage third-party providers. We encourage
          you to review their privacy policies to understand how they manage
          your personal information.
        </p>
        <p>
          Please be aware that some of these providers may be located in, or
          have facilities in, jurisdictions different from yours or ours. If you
          choose to proceed with a transaction involving a third-party service
          provider, your information may become subject to the laws of the
          jurisdiction(s) where the provider or its data centers are located.
        </p>
        <p>
          Once you leave our website or are redirected to a third-party
          platform, this Privacy Policy and our Terms of Service no longer
          apply.
        </p>

        <h2>COLLECTION OF PERSONAL INFORMATION</h2>
        <p>
          When you interact with our website or services, we may collect
          personal information such as your name, email address, phone number,
          and any other information you voluntarily provide. This data is used
          solely for providing services, communication, and improving user
          experience.
        </p>

        <h2>CONSENT</h2>
        <p>
          When you provide us with personal information to complete a
          transaction, verify your identity, or engage our services, you imply
          your consent for us to collect and use that information for those
          specific purposes.
        </p>
        <p>
          If we ask for your information for a secondary reason (like
          marketing), we will either ask for your explicit consent or provide
          you with an option to decline.
        </p>

        <h2>DISCLOSURE</h2>
        <p>
          We may disclose your personal information if required by law or if you
          violate our Terms of Service.
        </p>

        <h2>PAYMENT</h2>
        <p>
          We use <strong>PayPal</strong> as our primary payment gateway.
          Payments made through PayPal are encrypted and processed securely. We
          do not store your credit card details on our servers. Please review{" "}
          <a
            href="https://www.paypal.com/privacy"
            target="_blank"
            rel="noopener noreferrer"
          >
            PayPal’s privacy policy
          </a>
          for further information on how they handle your data.
        </p>

        <h2>LINKS</h2>
        <p>
          Our website may contain links that redirect you to other sites. We are
          not responsible for the privacy practices of these third-party
          websites and encourage you to read their respective privacy policies
          before sharing any personal information.
        </p>

        <h2>SECURITY</h2>
        <p>
          We implement reasonable security measures and follow industry best
          practices to ensure your personal information is not improperly
          accessed, disclosed, altered, or destroyed.
        </p>
        <p>
          However, no method of transmission over the internet or electronic
          storage is 100% secure, so we cannot guarantee absolute security.
        </p>

        <h2>COOKIES</h2>
        <p>
          We use cookies to maintain your session and enhance your experience on
          our site. These cookies do not personally identify you on other
          websites and are used purely for functionality and analytics within
          our platform.
        </p>

        <h2>AGE OF CONSENT</h2>
        <p>
          By using our website, you confirm that you are at least the age of
          majority in your state or province of residence, or that you are the
          age of majority and have given consent for any minor dependents to use
          our site.
        </p>

        <h2>CHANGES TO THIS PRIVACY POLICY</h2>
        <p>
          We reserve the right to update this Privacy Policy at any time.
          Changes take effect immediately upon being posted on our site. If we
          make significant updates, we will notify you here so that you are
          aware of the changes.
        </p>
        <p>
          In the event that our business is acquired or merged with another
          company, your information may be transferred to the new entity in
          order to continue providing services to you.
        </p>

        <h2>QUESTIONS AND CONTACT INFORMATION</h2>
        <p>
          For questions, access to your data, or to request a correction or
          deletion of your personal information, please contact us:
        </p>
        <ul>
          <li>
            <strong>Email:</strong>{" "}
            <a href="mailto:sayam@unnity.in">sayam@unnity.in</a>
          </li>
          <li>
            <strong>Phone:</strong> +91 93150 03754
          </li>
          <li>
            <strong>Address:</strong>
            &nbsp; Unnity &nbsp; SF-40, 2nd Floor, Pearl Omaxe
            <br />
            Netaji Subhash Place, Pitampura
            <br />
            New Delhi – 110034
            <br />
            India
          </li>
        </ul>
      </div>

      <Footer />
    </>
  );
}
