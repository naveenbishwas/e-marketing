import Footer from "@/components/footer/page";
import Header from "@/components/Header/page";
import Image from "next/image";
import React from "react";
import "./travel.css";

const Travel = () => {
  return (
    <div>
      <Header />
      <section
        className="dentistry-section"
        aria-labelledby="dentistry-heading"
      >
        <div className="dentistry-text">
          <h2 id="dentistry-heading" className="dentistry-title">
            E-sim: A Google Ads Success Story
          </h2>

          <p className="dentistry-paragraph">
            Brand E-sim's journey with Google Ads is a testament to strategic
            scaling and optimization. From a modest beginning to achieving
            record-breaking sales and conversion rates, this case study
            showcases the power of targeted advertising and the effective use of
            Google's algorithms. Let's dive into the details of how E-sim
            leveraged Google Ads to maximize their ecommerce potential and
            outperform the competition
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
      <section className="io-section" aria-labelledby="io-title">
        <div className="io-wrap">
          <header className="io-header">
            <h2 id="io-title" className="io-title">
              Initial Onboarding and Potential
            </h2>
            <p className="io-lead">
              Upon the initial onboarding of E-Travelsim, the sales were at a
              steady $3000 per day. The potential for growth was evident, and
              the client sought to strategically scale their presence across
              Google Ads to boost revenue. Identifying market potential and
              crafting a strategic approach to sales increment was the
              cornerstone of this successful partnership.
            </p>
          </header>

          <div className="io-steps" role="list">
            <article className="io-step" role="listitem">
              <div className="io-badge" aria-hidden="true">
                1
              </div>
              <h3 className="io-step-title">Starting Point</h3>
              <p className="io-step-text">
                The journey began with a solid base of <strong>$3000</strong> in
                daily sales, setting the stage for growth.
              </p>
            </article>

            <article className="io-step" role="listitem">
              <div className="io-badge" aria-hidden="true">
                2
              </div>
              <h3 className="io-step-title">Strategic Scaling</h3>
              <p className="io-step-text">
                The focus was on strategic scaling to tap into the account’s
                full potential and increase revenue.
              </p>
            </article>

            <article className="io-step" role="listitem">
              <div className="io-badge" aria-hidden="true">
                3
              </div>
              <h3 className="io-step-title">Market Analysis</h3>
              <p className="io-step-text">
                Market potential was assessed to inform the direction of the
                Google Ads campaigns.
              </p>
            </article>
          </div>
        </div>
      </section>
      <section
        className="se-section"
        style={{
          // replace with your own image path or a remote URL
          ["--se-bg"]: "url('/images/lagoon-bg.jpg')",
        }}
        aria-labelledby="se-title"
      >
        <div className="se-wrap">
          <header className="se-header">
            <h2 id="se-title" className="se-title">
              Initial Scaling Efforts
            </h2>
            <p className="se-lead">
              The initial phase of the campaign focused on scaling up the ads.
              However, the performance was not aligning with the set benchmarks,
              leading to a comprehensive review of the campaign strategies.
            </p>
          </header>

          {/* Timeline */}
          <div className="se-timeline" role="list">
            <article className="se-item" role="listitem">
              <div className="se-badge" aria-hidden="true">
                1
              </div>
              <div className="se-content">
                <h3 className="se-item-title">Scaling Attempts</h3>
                <p className="se-item-text">
                  Efforts to amplify the reach and impact of the ads were met
                  with subpar performance, necessitating a reevaluation of
                  tactics.
                </p>
              </div>
            </article>

            <article className="se-item" role="listitem">
              <div className="se-badge" aria-hidden="true">
                2
              </div>
              <div className="se-content">
                <h3 className="se-item-title">Performance Analysis</h3>
                <p className="se-item-text">
                  An in-depth analysis was conducted to understand the reasons
                  behind the lackluster results, revealing the need for a more
                  targeted approach.
                </p>
              </div>
            </article>

            <article className="se-item" role="listitem">
              <div className="se-badge" aria-hidden="true">
                3
              </div>
              <div className="se-content">
                <h3 className="se-item-title">Strategy Overhaul</h3>
                <p className="se-item-text">
                  A strategic overhaul was imperative to address the issues and
                  steer the campaigns towards the desired outcomes.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="mid-banner">
        <Image
          src="/travel.png"
          width={0}
          height={0}
          alt="dentist-img"
          unoptimized
        ></Image>
      </section>

      <section className="ss-section" aria-labelledby="ss-title">
        <div className="ss-wrap">
          <header className="ss-header">
            <h2 id="ss-title" className="ss-title">
              Scaling to New Heights
            </h2>
            <p className="ss-lead">
              The ad account experienced a significant scale, jumping from $3000
              to an impressive $10,000 per day. This remarkable increase was a
              result of meticulous planning and execution, ensuring that the
              client's investment yielded substantial returns.
            </p>
          </header>

          <div
            className="ss-amounts"
            role="group"
            aria-label="Before and after sales"
          >
            <div className="ss-value">$3000</div>
            <div className="ss-dots" aria-hidden="true">
              ·························
            </div>
            <div className="ss-value">$10000</div>
          </div>

          <div className="ss-cards">
            <article className="ss-card">
              <h3 className="ss-card-title">Initial Sales</h3>
              <p className="ss-card-sub">Starting daily sales before scaling</p>
            </article>

            <article className="ss-card">
              <h3 className="ss-card-title">Scaled Sales</h3>
              <p className="ss-card-sub">Daily sales after strategic scaling</p>
            </article>
          </div>
        </div>
      </section>

      <section className="oc-section" aria-labelledby="oc-title">
        <div className="oc-wrap">
          <header className="oc-header">
            <h2 id="oc-title" className="oc-title">
              Optimization and Conversion Performance
            </h2>
            <p className="oc-lead">
              E-Travelsim's campaigns were optimized to maximize conversions,
              resulting in a staggering
              <strong> 6600 conversions</strong> at a cost per registration
              (CPR) of <strong>$12</strong>. This optimization ensured that
              budget increases did not hurt the cost/conversion ratio.
            </p>
          </header>

          {/* Decorative chevrons */}
          <div className="oc-chevrons" aria-hidden="true">
            <span className="oc-chevron">1</span>
            <span className="oc-chevron">2</span>
            <span className="oc-chevron">3</span>
          </div>

          {/* Three points */}
          <div className="oc-grid">
            <article className="oc-card">
              <h3 className="oc-card-title">Conversions Achieved</h3>
              <p className="oc-card-text">
                <strong>6600</strong> conversions were generated, showcasing the
                campaign’s effectiveness.
              </p>
            </article>

            <article className="oc-card">
              <h3 className="oc-card-title">Cost Efficiency</h3>
              <p className="oc-card-text">
                Maintained an efficient <strong>CPR of $12</strong> even as we
                scaled.
              </p>
            </article>

            <article className="oc-card">
              <h3 className="oc-card-title">Budget Management</h3>
              <p className="oc-card-text">
                Systematic budget increases ensured sustained performance.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="gp-section" aria-labelledby="gp-title">
        <div className="gp-wrap">
          <header className="gp-header">
            <h2 id="gp-title" className="gp-title">
              Geographic and Product Targeting
            </h2>
            <p className="gp-lead">
              Running search campaigns with multiple products and ad groups
              under a single search campaign, E-Travelsim’s ads were optimized
              for conversions in regions with the highest purchase potential.
              The campaigns were broken down by continents for granular
              analysis, with each campaign targeting specific countries and
              products.
            </p>
          </header>

          <div className="gp-grid">
            <article className="gp-card">
              <div className="gp-icon" aria-hidden="true">
                {/* Globe icon */}
                <svg viewBox="0 0 24 24" className="gp-svg">
                  <circle
                    cx="12"
                    cy="12"
                    r="9.5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  />
                  <path
                    d="M2.5 12h19"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.4"
                  />
                  <path
                    d="M12 2.5c-3.5 3-3.5 14.9 0 19 3.5-4.1 3.5-16 0-19z"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.4"
                  />
                </svg>
              </div>
              <h3 className="gp-card-title">Global Reach</h3>
              <p className="gp-card-text">
                Ads were tailored for multiple countries, optimizing for regions
                with high purchase intent.
              </p>
            </article>

            <article className="gp-card">
              <div className="gp-icon" aria-hidden="true">
                {/* Target/algorithm icon */}
                <svg viewBox="0 0 24 24" className="gp-svg">
                  <circle
                    cx="12"
                    cy="12"
                    r="8.5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                  />
                  <circle
                    cx="12"
                    cy="12"
                    r="4.5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                  />
                  <circle cx="12" cy="12" r="1.8" fill="currentColor" />
                </svg>
              </div>
              <h3 className="gp-card-title">Algorithmic Precision</h3>
              <p className="gp-card-text">
                Google’s algorithm was leveraged to optimize campaigns based on
                target countries and products.
              </p>
            </article>

            <article className="gp-card">
              <div className="gp-icon" aria-hidden="true">
                {/* Layers/segments icon */}
                <svg viewBox="0 0 24 24" className="gp-svg">
                  <path
                    d="M12 3L3 8l9 5 9-5-9-5z"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                  />
                  <path
                    d="M3 12l9 5 9-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                  />
                  <path
                    d="M3 16l9 5 9-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                  />
                </svg>
              </div>
              <h3 className="gp-card-title">Continental Breakdown</h3>
              <p className="gp-card-text">
                Campaigns were segmented by continents for better analysis and
                performance tracking.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="ac-section" aria-labelledby="ac-title">
        <div className="ac-wrap">
          <header className="ac-header">
            <h2 id="ac-title" className="ac-title">
              Algorithmic Collaboration
            </h2>
            <p className="ac-lead">
              Working in tandem with Google’s algorithm, slight adjustments were
              made to the campaigns for enhanced impact. These strategic tweaks
              drove positive outcomes across the board, proving the
              effectiveness of a nuanced approach to algorithmic advertising.
            </p>
          </header>

          <div className="ac-grid">
            <article className="ac-card">
              <h3 className="ac-card-title">Algorithmic Assistance</h3>
              <p className="ac-card-text">
                Google’s algorithm played a pivotal role in optimizing ad
                delivery.
              </p>
            </article>

            <article className="ac-card">
              <h3 className="ac-card-title">Strategic Adjustments</h3>
              <p className="ac-card-text">
                Slight but impactful changes were made to improve campaign
                performance.
              </p>
            </article>

            <article className="ac-card">
              <h3 className="ac-card-title">Positive Outcomes</h3>
              <p className="ac-card-text">
                Collaboration with the algorithm led to widespread campaign
                success.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="cs-section" aria-labelledby="cs-title">
        <div className="cs-wrap">
          <header className="cs-header">
            <h2 id="cs-title" className="cs-title">
              Competitive Strategy and Brand Communication
            </h2>
            <p className="cs-lead">
              E-Travelsim identified and implemented strategies that were
              effective for competitors, adapting them to communicate the
              brand’s unique value proposition. This approach led to a positive
              response across the campaigns, distinguishing E-Travelsim in a
              competitive market.
            </p>
          </header>

          {/* two-column paired rows */}
          <div className="cs-grid">
            <div className="cs-card">
              <h3 className="cs-card-title">Competitor Analysis</h3>
            </div>
            <div className="cs-card">
              <p className="cs-card-text">
                Leveraged insights from successful competitor strategies.
              </p>
            </div>

            <div className="cs-card">
              <h3 className="cs-card-title">Brand Differentiation</h3>
            </div>
            <div className="cs-card">
              <p className="cs-card-text">
                Communicated E-Travelsim’s unique selling points effectively.
              </p>
            </div>

            <div className="cs-card">
              <h3 className="cs-card-title">Market Response</h3>
            </div>
            <div className="cs-card">
              <p className="cs-card-text">
                Adapted strategies led to a positive market response and
                campaign success.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Travel;
