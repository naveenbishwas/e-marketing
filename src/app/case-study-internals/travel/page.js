import Footer from "@/components/footer/page";
import Header from "@/components/Header/page";
import Image from "next/image";
import React from "react";
import "./travel.css";

const Travel = () => {
  return (
    <div>
      <Header />

      {/* GOOGLE STORY */}
      <section
        className="dentistry-section"
        aria-labelledby="dentistry-heading"
      >
        <div className="dentistry-text">
          <h2 id="dentistry-heading" className="dentistry-title">
            E-sim: A Google Ads Success Story
          </h2>

          <p className="dentistry-paragraph">
            Brand E-sim&apos;s journey with Google Ads is a testament to
            strategic scaling and optimization. From a modest beginning to
            achieving record-breaking sales and conversion rates, this case
            study showcases the power of targeted advertising and the effective
            use of Google&apos;s algorithms. Let&apos;s dive into the details of
            how E-sim leveraged Google Ads to maximize their ecommerce potential
            and outperform the competition.
          </p>
        </div>

        <div className="dentistry-media">
          <Image
            src="/travel.jpg"
            className="dentistry-image"
            alt="travel"
            width={0}
            height={0}
            unoptimized
          />
        </div>
      </section>

      {/* INITIAL ONBOARDING */}
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
            <article className="io-step">
              <div className="io-badge">1</div>
              <h3 className="io-step-title">Starting Point</h3>
              <p className="io-step-text">
                The journey began with a solid base of $3000 in daily sales,
                setting the stage for growth.
              </p>
            </article>

            <article className="io-step">
              <div className="io-badge">2</div>
              <h3 className="io-step-title">Strategic Scaling</h3>
              <p className="io-step-text">
                The focus was on strategic scaling to tap into the
                account&apos;s full potential and increase revenue.
              </p>
            </article>

            <article className="io-step">
              <div className="io-badge">3</div>
              <h3 className="io-step-title">Market Analysis</h3>
              <p className="io-step-text">
                Market potential was assessed to inform the direction of the
                Google Ads campaigns.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* INITIAL SCALING */}
      <section
        className="se-section"
        style={{ ["--se-bg"]: "url('/images/lagoon-bg.jpg')" }}
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

          <div className="se-timeline">
            <article className="se-item">
              <div className="se-badge">1</div>
              <div className="se-content">
                <h3 className="se-item-title">Scaling Attempts</h3>
                <p className="se-item-text">
                  Efforts to amplify the reach and impact of the ads were met
                  with subpar performance, necessitating a reevaluation of
                  tactics.
                </p>
              </div>
            </article>

            <article className="se-item">
              <div className="se-badge">2</div>
              <div className="se-content">
                <h3 className="se-item-title">Performance Analysis</h3>
                <p className="se-item-text">
                  An in-depth analysis was conducted to understand the reasons
                  behind the lackluster results, revealing the need for a more
                  targeted approach.
                </p>
              </div>
            </article>

            <article className="se-item">
              <div className="se-badge">3</div>
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

      {/* MID BANNER */}
      <section className="mid-banner">
        <Image
          src="/travel8.png"
          width={0}
          height={0}
          alt="Travel-image"
          unoptimized
        />
      </section>

      {/* SCALING TO NEW HEIGHTS */}
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
              client&apos;s investment yielded substantial returns.
            </p>
          </header>

          <div className="ss-amounts">
            <div className="ss-value">$3000</div>
            <div className="ss-dots">·······················</div>
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

      {/* OPTIMIZATION */}
      <section className="oc-section" aria-labelledby="oc-title">
        <div className="oc-wrap">
          <header className="oc-header">
            <h2 id="oc-title" className="oc-title">
              Optimization and Conversion Performance
            </h2>
            <p className="oc-lead">
              E-Travelsim&apos;s campaigns were optimized to maximize
              conversions, resulting in a staggering 6600 conversions at a cost
              per registration (CPR) of $12. This optimization was crucial in
              ensuring that the increase in budget did not negatively impact the
              cost/conversion ratio.
            </p>
          </header>

          <div className="oc-grid">
            <article className="oc-card">
              <h3 className="oc-card-title">Conversions Achieved</h3>
              <p className="oc-card-text">
                6600 conversions were generated, showcasing the campaign&apos;s
                effectiveness.
              </p>
            </article>

            <article className="oc-card">
              <h3 className="oc-card-title">Cost Efficiency</h3>
              <p className="oc-card-text">
                Maintained an efficient CPR of $12 amidst scaling efforts.
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

      {/* GEOGRAPHIC TARGETING */}
      <section className="gp-section" aria-labelledby="gp-title">
        <div className="gp-wrap">
          <header className="gp-header">
            <h2 id="gp-title" className="gp-title">
              Geographic and Product Targeting
            </h2>
            <p className="gp-lead">
              Running search campaigns with multiple products and ad groups
              under a single search campaign, E-Travelsim&apos;s ads were
              optimized for conversions in regions with the highest purchase
              potential. The campaigns were broken down by continents for
              granular analysis, with each campaign targeting specific countries
              and products.
            </p>
          </header>

          <div className="gp-grid">
            <article className="gp-card">
              <h3 className="gp-card-title">Global Reach</h3>
              <p className="gp-card-text">
                Ads were tailored for multiple countries, optimizing for regions
                with high purchase intent.
              </p>
            </article>

            <article className="gp-card">
              <h3 className="gp-card-title">Algorithmic Precision</h3>
              <p className="gp-card-text">
                Google&apos;s algorithm was leveraged to optimize campaigns
                based on target countries and products.
              </p>
            </article>

            <article className="gp-card">
              <h3 className="gp-card-title">Continental Breakdown</h3>
              <p className="gp-card-text">
                Campaigns were segmented by continents for better analysis and
                performance tracking.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* ALGORITHMIC COLLABORATION */}
      <section className="ac-section" aria-labelledby="ac-title">
        <div className="ac-wrap">
          <header className="ac-header">
            <h2 id="ac-title" className="ac-title">
              Algorithmic Collaboration
            </h2>
            <p className="ac-lead">
              Working in tandem with Google&apos;s algorithm, slight adjustments
              were made to the campaigns for enhanced impact. These strategic
              tweaks resulted in positive outcomes across the board,
              demonstrating the effectiveness of a nuanced approach to
              algorithmic advertising.
            </p>
          </header>

          <div className="ac-grid">
            <article className="ac-card">
              <h3 className="ac-card-title">Algorithmic Assistance</h3>
              <p className="ac-card-text">
                Google&apos;s algorithm played a pivotal role in optimizing ad
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
                The collaboration with the algorithm led to widespread campaign
                success.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* COMPETITIVE STRATEGY */}
      <section className="cs-section" aria-labelledby="cs-title">
        <div className="cs-wrap">
          <header className="cs-header">
            <h2 id="cs-title" className="cs-title">
              Competitive Strategy and Brand Communication
            </h2>
            <p className="cs-lead">
              E-Travelsim identified and implemented strategies that were
              effective for competitors, adapting them to communicate the
              brand&apos;s unique value proposition. This approach resulted in a
              positive response across the campaigns, distinguishing E-Travelsim
              in a competitive market.
            </p>
          </header>

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
                Communicated E-Travelsim&apos;s unique selling points
                effectively.
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
