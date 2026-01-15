import React from "react";
import "./home-appliance.css";
import Image from "next/image";
import Header from "@/components/Header/page";
import Footer from "@/components/footer/page";

const HomeApplianceMarketingSection = () => {
  const rows = [
    {
      label: "Custom Label Creation",
      desc: "Labels were tailored to match inventory specifics, ensuring accurate ad representation.",
    },
    {
      label: "Automatic Updates",
      desc: "As inventory levels changed, the custom labels were automatically updated to maintain consistency.",
    },
    {
      label: "Conversion-Focused Campaigns",
      desc: "The integration of custom labels allowed for more targeted campaign, driving conversions.",
    },
  ];

  const metrics = [
    {
      value: "86%",
      title: "Increased Revenue",
      desc: "Revenue increased from the cities where we are targeting. Instock products reflected in cities targeted now.",
    },
    {
      value: "44%",
      title: "Increased Conversion Rate",
      desc: "Increase in conversion rate drastically—reason being products reflected.",
    },
    {
      value: "91%",
      title: "Increased in Orders",
      desc: "Orders increased that helped supported organically and for the ads purpose as well.",
    },
  ];

  return (
    <div>
      <Header />
      <section
        className="dentistry-section"
        aria-labelledby="dentistry-heading"
      >
        <div className="dentistry-text">
          <h2 id="dentistry-heading" className="dentistry-title">
            India Largest Home-Appliance Brand
          </h2>

          <p className="dentistry-paragraph">
            Mission to dominate the digital advertising space through Google
            Ads. The journey began with scaling efforts, but the initial
            performance did not meet expectations. A deep dive into the campaign
            structures and budget management was initiated to pinpoint the
            underlying issues and rectify them for improved results.
          </p>

          <p className="dentistry-paragraph">
            Through meticulous analysis and strategic restructuring, Home
            appliances India advertising campaigns were transformed. This case
            study explores the challenges faced, the innovative solutions
            implemented, and the remarkable outcomes achieved in their quest for
            ecommerce excellence
          </p>
        </div>

        <div className="dentistry-media">
          <Image
            src="/home.png"
            className="dentistry-image"
            alt="Dentist with a smiling patient in a clinic"
            width={0}
            height={0}
            unoptimized
          ></Image>
        </div>
      </section>

      <section className="scaling" aria-labelledby="scaling-title">
        <div className="scaling-container">
          <h2 id="scaling-title" className="scaling-title">
            Initial Scaling Efforts
          </h2>

          <p className="scaling-intro">
            The initial phase of the campaign focused on scaling up the ads.
            However, the performance was not aligning with the set benchmarks,
            leading to a comprehensive review of the campaign strategies.
          </p>

          <ol className="timeline">
            <li className="timeline-item">
              <div className="timeline-left">
                <span className="timeline-badge">1</span>
              </div>
              <div className="timeline-content">
                <h3 className="timeline-heading">Scaling Attempts</h3>
                <p className="timeline-text">
                  Efforts to amplify the reach and impact of the ads were met
                  with subpar performance, necessitating a reevaluation of
                  tactics.
                </p>
              </div>
            </li>

            <li className="timeline-item">
              <div className="timeline-left">
                <span className="timeline-badge">2</span>
              </div>
              <div className="timeline-content">
                <h3 className="timeline-heading">Performance Analysis</h3>
                <p className="timeline-text">
                  An in-depth analysis was conducted to understand the reasons
                  behind the lackluster results, revealing the need for a more
                  targeted approach
                </p>
              </div>
            </li>

            <li className="timeline-item">
              <div className="timeline-left">
                <span className="timeline-badge">3</span>
              </div>
              <div className="timeline-content">
                <h3 className="timeline-heading">Strategy Overhaul</h3>
                <p className="timeline-text">
                  A strategic overhaul was imperative to address the issues and
                  steer the campaigns towards the desired outcomes.
                </p>
              </div>
            </li>
          </ol>
        </div>
      </section>

      <section className="crc-cards" aria-labelledby="crc-cards-title">
        <div className="crc-wrap">
          <h2 id="crc-cards-title" className="crc-cards-title">
            Conversion Rate Challenges
          </h2>

          <p className="crc-cards-intro">
            The team delved into the intricacies of the campaigns to uncover the
            reasons behind the low conversion rates. This investigation was
            critical to identify and address the root causes of the problem.
          </p>

          <div className="crc-grid">
            <article className="crc-card">
              <div className="crc-badge" aria-hidden="true"></div>
              <h3 className="crc-card-heading">Deep Analysis</h3>
              <p className="crc-card-text">
                An exhaustive analysis was conducted to understand the factors
                contributing to the low conversion rates.
              </p>
            </article>

            <article className="crc-card">
              <div className="crc-badge" aria-hidden="true"></div>
              <h3 className="crc-card-heading">Pinpointing Issues</h3>
              <p className="crc-card-text">
                The issue of Pincodes emerged as a significant barrier, with a
                vast product range and limited availability across locations.
              </p>
            </article>

            <article className="crc-card">
              <div className="crc-badge" aria-hidden="true"></div>
              <h3 className="crc-card-heading">Complexity of Delivery</h3>
              <p className="crc-card-text">
                The complexity of managing deliveries for over 2,000 products
                across various Pincodes was a daunting task that required a
                strategic solution.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="mid-banner">
        <Image
          src="/home-2.jpg"
          width={0}
          height={0}
          alt="dentist-img"
          unoptimized
        ></Image>
      </section>

      <section className="rc" aria-labelledby="rc-title">
        <div className="rc-wrap">
          <h2 id="rc-title" className="rc-title">
            Restructuring Campaigns
          </h2>

          <p className="rc-intro">
            With a determination to optimize performance, multiple campaign
            structures were tested. The goal was to find the sweet spot that
            would prevent budget leakages and maximize returns.
          </p>

          <div className="rc-grid">
            <article className="rc-card">
              <span className="rc-badge" aria-hidden="true"></span>
              <h3 className="rc-heading">Experimentation</h3>
              <p className="rc-text">
                Various campaign structures were trialed, searching for the most
                effective way to reach potential customers without overspending.
              </p>
            </article>

            <article className="rc-card">
              <span className="rc-badge" aria-hidden="true"></span>
              <h3 className="rc-heading">Budget Management</h3>
              <p className="rc-text">
                Close attention was paid to budget allocation, ensuring that
                funds were directed towards the most promising campaigns.
              </p>
            </article>

            <article className="rc-card">
              <span className="rc-badge" aria-hidden="true"></span>
              <h3 className="rc-heading">Performance Tracking</h3>
              <p className="rc-text">
                Continuous tracking of campaign performance allowed for quick
                adjustments and fine-tuning to avoid any wastage of resources.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="rdm rdm--chevrons" aria-labelledby="rdm-title">
        <div className="rdm-wrap">
          <h2 id="rdm-title" className="rdm-title">
            Revamping Delivery Methods
          </h2>

          <p className="rdm-intro">
            The internal delivery method was dissected and restructured to align
            with the advertising strategy. With nine warehouses across India, a
            tailored approach was necessary to ensure efficient product
            delivery.
          </p>

          <div className="rdm-steps">
            {/* 1 */}
            <article className="rdm-step">
              <div class="execution-badge">
                <span>1</span>
              </div>
              <div className="rdm-body">
                <h3 className="rdm-heading">Delivery Breakdown</h3>
                <p className="rdm-text">
                  The existing delivery method was broken down to its core to
                  understand the logistics and streamline the process.
                </p>
              </div>
            </article>

            {/* 2 */}
            <article className="rdm-step">
              <div class="execution-badge">
                <span>2</span>
              </div>
              <div className="rdm-body">
                <h3 className="rdm-heading">Warehouse Integration</h3>
                <p className="rdm-text">
                  Each of the nine warehouses was integrated into the ad
                  strategy, allowing for specific product delivery from the
                  nearest location.
                </p>
              </div>
            </article>

            {/* 3 */}
            <article className="rdm-step">
              <div class="execution-badge">
                <span>3</span>
              </div>
              <div className="rdm-body">
                <h3 className="rdm-heading">Efficiency Boost</h3>
                <p className="rdm-text">
                  This restructuring led to a more efficient delivery system,
                  directly impacting the customer experience and conversion
                  rates.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="autotag" aria-labelledby="autotag-title">
        <div className="autotag-wrap">
          <h2 id="autotag-title" className="autotag-title">
            Implementing Autotag Technology
          </h2>

          <p className="autotag-intro">
            Autotag technology was identified as a tool to bridge the gap
            between ad interactions and product availability. The development
            team played a crucial role in integrating this solution.
          </p>

          <div className="autotag-steps">
            {/* Step 1 */}
            <article className="autotag-step">
              <div className="autotag-badge">1</div>
              <div className="autotag-body">
                <h3 className="autotag-heading">Autotag Integration</h3>
                <p className="autotag-text">
                  The Autotag tool was seamlessly integrated, prompting users
                  for their Pincode upon website interaction.
                </p>
              </div>
            </article>

            {/* Step 2 */}
            <article className="autotag-step">
              <div className="autotag-badge">2</div>
              <div className="autotag-body">
                <h3 className="autotag-heading">Pincode Specific Display</h3>
                <p className="autotag-text">
                  Products available in the user&apos;s location were
                  dynamically displayed, enhancing the relevance of the
                  website&apos;s offerings.
                </p>
              </div>
            </article>

            {/* Step 3 */}
            <article className="autotag-step">
              <div className="autotag-badge">3</div>
              <div className="autotag-body">
                <h3 className="autotag-heading">Conversion Uplift</h3>
                <p className="autotag-text">
                  This targeted approach led to a significant increase in
                  conversion rates, as users were presented with deliverable
                  products.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="cli" aria-labelledby="cli-title">
        <div className="cli-wrap">
          <h2 id="cli-title" className="cli-title">
            Custom Labels and Inventory Management
          </h2>

          <p className="cli-intro">
            Custom labels were created to sync with the inventory updates,
            allowing for a dynamic and responsive ad campaign that reflected
            real-time product availability.
          </p>

          <div
            className="cli-table"
            role="table"
            aria-label="Labels & inventory behaviors"
          >
            {rows.map((r, i) => (
              <div className="cli-row" role="row" key={i}>
                <div className="cli-cell cli-label" role="cell">
                  <span className="cli-accent" aria-hidden="true" />
                  <span className="cli-label-text">{r.label}</span>
                </div>
                <div className="cli-cell cli-desc" role="cell">
                  {r.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="outcome" aria-labelledby="outcome-title">
        <div className="outcome-wrap">
          <h2 id="outcome-title" className="outcome-title">
            Outcome: Enhanced Ad Delivery
          </h2>

          <p className="outcome-intro">
            The culmination of these efforts resulted in ads being displayed
            only in locations where delivery was available, ensuring maximum
            relevance and efficiency.
          </p>

          <div className="outcome-grid" role="list">
            {metrics.map((m, i) => (
              <article className="outcome-item" role="listitem" key={i}>
                <div className="outcome-figure" aria-hidden="true">
                  <span className="outcome-value">{m.value}</span>
                </div>
                <h3 className="outcome-subtitle">{m.title}</h3>
                <p className="outcome-text">{m.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default HomeApplianceMarketingSection;
