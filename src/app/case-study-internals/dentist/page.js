import React from "react";
import "./dentist.css";
import Header from "@/components/Header/page";
import Footer from "@/components/footer/page";
import Image from "next/image";

const DentistryMarketingSection = () => {
  return (
    <>
      <Header />
      <section
        className="dentistry-section"
        aria-labelledby="dentistry-heading"
      >
        <div className="dentistry-text">
          <h2 id="dentistry-heading" className="dentistry-title">
            Dentistry Digital Marketing Overhaul
          </h2>

          <p className="dentistry-paragraph">
            Welcome to a comprehensive overview of transforming a large
            dentistry chain&apos;s digital marketing strategy. Through
            meticulous analysis, strategic restructuring, and skillful
            execution, we confronted the challenges head-on and leveraged
            opportunities to enhance campaign performance and brand presence in
            the dental industry.
          </p>

          <p className="dentistry-paragraph">
            Join us as we delve into the challenges faced, strategies
            formulated, and impressive results achieved in this marketing
            success story. Our journey maps the meticulous processes required in
            campaign management, landing page optimization, and cost-efficient
            customer acquisition in the competitive space of dentistry services.
          </p>
        </div>

        <div className="dentistry-media">
          <Image
            src="/dentist-1.png"
            className="dentistry-image"
            alt="Dentist with a smiling patient in a clinic"
            width={0}
            height={0}
            unoptimized
          ></Image>
        </div>
      </section>

      <section
        className="challenges-section"
        aria-labelledby="challenges-title"
      >
        <div className="challenges-container">
          <h2 id="challenges-title" className="challenges-title">
            Initial Challenges Faced
          </h2>

          <div className="challenges-grid">
            {/* 1 */}
            <article className="challenge">
              <div className="challenge-badge" aria-hidden="true">
                1
              </div>
              <div className="challenge-body">
                <h3 className="challenge-heading">Complex Campaigns</h3>
                <p className="challenge-text">
                  Managing over 200 individual campaigns under a single ad
                  account presented a significant challenge due to its
                  complexity and the requirement for a refined approach to
                  campaign structuring
                </p>
              </div>
            </article>

            {/* 2 */}
            <article className="challenge">
              <div className="challenge-badge" aria-hidden="true">
                2
              </div>
              <div className="challenge-body">
                <h3 className="challenge-heading">Account Hygiene</h3>
                <p className="challenge-text">
                  Lack of proper account hygiene, reflected in stagnant ad
                  copies and an accumulation of irrelevant and high CPC
                  keywords, was crippling the campaign&apos;s cost-efficiency.
                </p>
              </div>
            </article>

            {/* 3 */}
            <article className="challenge">
              <div className="challenge-badge" aria-hidden="true">
                3
              </div>
              <div className="challenge-body">
                <h3 className="challenge-heading">Inconsistent Events</h3>
                <p className="challenge-text">
                  The campaign suffered from multiple conversion events being
                  created with irregular event triggers, leading to unreliable
                  conversion tracking.
                </p>
              </div>
            </article>

            {/* 4 */}
            <article className="challenge">
              <div className="challenge-badge" aria-hidden="true">
                4
              </div>
              <div className="challenge-body">
                <h3 className="challenge-heading">
                  Multiple Landing Pages to manage
                </h3>
                <p className="challenge-text">
                  The enormity of managing over 200+ promotion-tied landing
                  pages added to the complexity and reduced overall campaign
                  effectiveness.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section
        className="marketing-goals-clean"
        aria-labelledby="marketing-goals-title"
      >
        <div className="goals-wrapper">
          <div className="goals-header">
            <h2 id="marketing-goals-title" className="goals-title">
              Cataloging the Marketing Goals
            </h2>
          </div>

          <div className="goals-list">
            {/* Goal 1 */}
            <article className="goal-item">
              <div className="goal-badge">1</div>
              <div className="goal-text">
                <h3 className="goal-heading">Data-Driven Decisions</h3>
                <p className="goal-description">
                  Better data clarity took precedence to enable optimized
                  campaign performance based on concrete analytics. Enhancing
                  account hygiene was the foundational goal.
                </p>
              </div>
            </article>

            {/* Goal 2 */}
            <article className="goal-item">
              <div className="goal-badge">2</div>
              <div className="goal-text">
                <h3 className="goal-heading">Nomenclature Precision</h3>
                <p className="goal-description">
                  Improving the campaign nomenclature to enable refined analysis
                  and filters was fundamental for achieving a streamlined
                  workflow.
                </p>
              </div>
            </article>

            {/* Goal 3 */}
            <article className="goal-item">
              <div className="goal-badge">3</div>
              <div className="goal-text">
                <h3 className="goal-heading">Correct Landing Pages</h3>
                <p className="goal-description">
                  Ensuring accurate alignment of landing pages to their
                  corresponding city campaigns to avoid visitor misdirection and
                  enhance user experience.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="mid-banner">
        <Image
          src="/dentist-2.jpg"
          width={0}
          height={0}
          alt="dentist-img"
          unoptimized
        ></Image>
      </section>

      <section className="split-campaigns" aria-labelledby="split-title">
        <div className="split-container">
          <h2 id="split-title" className="split-title">
            Strategic Splitting of Campaigns
          </h2>

          <div className="split-grid">
            <article className="split-card">
              <h3 className="split-heading">Category Specification</h3>
              <p className="split-text">
                Campaigns were strategically segregated into three main
                categories: General Dentistry, Implants, and Ortho (Aligners
                &amp; Braces), leading to more targeted advertising and clearer
                performance metrics.
              </p>
            </article>

            <article className="split-card">
              <h3 className="split-heading">Lead Segmentation</h3>
              <p className="split-text">
                By initiating separate lead recordings for each campaign
                category, we were able to precisely track and analyze the lead
                flow and customer interest in each dental service.
              </p>
            </article>

            <article className="split-card">
              <h3 className="split-heading">UTM Tracking</h3>
              <p className="split-text">
                The implementation of uniform UTM parameters across campaigns
                enabled accurate traffic sourcing, facilitating in-depth
                campaign analysis and optimizing strategies.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="execution-section" aria-labelledby="execution-title">
        <div className="execution-container">
          <h2 id="execution-title" className="execution-title">
            Efficient Execution & Monitoring
          </h2>

          <div className="execution-grid">
            {/* Step 1 */}
            <article className="execution-item">
              <div className="execution-item-df">
                <div className="execution-badge">
                  <span>1</span>
                </div>
                <h3 className="execution-heading">Strategic Planning</h3>
              </div>
              <p className="execution-text">
                Significant efforts were invested in strategizing before
                implementation, ensuring that any modifications to the expansive
                array of campaigns did not adversely affect performance.
              </p>
            </article>

            {/* Step 2 */}
            <article className="execution-item">
              <div className="execution-item-df">
                <div className="execution-badge">
                  <span>2</span>
                </div>
                <h3 className="execution-heading">Page Management</h3>
              </div>
              <p className="execution-text">
                Our collaborative team approach resulted in the consolidation of
                landing pages – from 200 to 6 – dynamically updated based on UTM
                parameters, significantly simplifying page management.
              </p>
            </article>

            {/* Step 3 */}
            <article className="execution-item">
              <div className="execution-item-df">
                <div className="execution-badge">
                  <span>3</span>
                </div>
                <h3 className="execution-heading">Zone-Based Approach</h3>
              </div>
              <p className="execution-text">
                The division of campaigns into North and South zones based on
                clinic locations provided essential insights for regional
                performance management and decision-making.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="approach" aria-labelledby="approach-title">
        <div className="approach-split">
          <h2 id="approach-title" className="card-band-title">
            Optimizing Landing Pages
          </h2>
          <div className="approach-split-inner">
            <div className="card-grid">
              <article className="card">
                <h3 className="card-heading">Collective Improvements</h3>
                <p className="card-text">
                  Fostering team collaboration led to a considerable enhancement
                  in landing page experiences, focusing on user-oriented UI/UX
                  design informed by marketing expertise.
                </p>
              </article>

              <article className="card">
                <h3 className="card-heading">Keyword Refinement</h3>
                <p className="card-text">
                  Removing overlapping and cannibalizing keywords streamlined
                  campaigns, preventing internal competition and waste of ad
                  spend.
                </p>
              </article>

              <article className="card">
                <h3 className="card-heading">Placement Precision</h3>
                <p className="card-text">
                  Negative placements were meticulously curated to reduce
                  irrelevant traffic and focus budget on reaching the intended
                  audience more effectively.
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="outcomes" aria-labelledby="outcomes-title">
        <div className="outcomes-container">
          <h2 id="outcomes-title" className="outcomes-title">
            Impressive Campaign Outcomes
          </h2>

          <div className="outcomes-grid">
            {/* Metric 1 */}
            <article className="metric">
              <div className="metric-value">25%</div>
              <h3 className="metric-heading">CTR Boost</h3>
              <p className="metric-text">
                Click-through rates surged by a notable 25%, demonstrating
                enhanced ad relevancy and audience engagement.
              </p>
            </article>

            {/* Metric 2 */}
            <article className="metric">
              <div className="metric-value">60%</div>
              <h3 className="metric-heading">Conversions</h3>
              <p className="metric-text">
                Lead conversions experienced a remarkable 60% increase,
                signaling effective campaign targeting and improved lead
                quality.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="cpv-section" aria-labelledby="cpv-title">
        <div className="cpv-container">
          <h2 id="cpv-title" className="cpv-title">
            Cost Per Clinic Visit
          </h2>

          <div
            className="cpv-rows"
            role="table"
            aria-label="Key performance metrics"
          >
            {/* Row 1 */}
            <div className="cpv-row" role="row">
              <div className="cpv-label" role="cell">
                Cost Per Clinic Visit
              </div>
              <div className="cpv-value" role="cell">
                Rs 600–800
              </div>
            </div>

            {/* Row 2 */}
            <div className="cpv-row cpv-row-spacious" role="row">
              <div className="cpv-label cpv-label-lg" role="cell">
                Lead Calls Increase
              </div>
              <div className="cpv-value cpv-value-lg" role="cell">
                68%
              </div>
            </div>

            {/* Row 3 */}
            <div className="cpv-row" role="row">
              <div className="cpv-label" role="cell">
                Quality Leads Tracking
              </div>
              <div className="cpv-value" role="cell">
                93%
              </div>
            </div>
          </div>

          <p className="cpv-note">
            The strategic overhaul not only heightened the marketing
            performances but also drastically diminished the cost of acquiring
            new clients — achieving a cost-effective footfall to the clinics
            ranging between Rs 600–800. This judicious approach to client
            acquisition marked a significant milestone in the campaign&apos;s
            success narrative.
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default DentistryMarketingSection;
