import React from "react";
import Layout from "../components/Layout";
import "./Legal.css";
import PageTop from "../components/PageTop";

const RelatedQuestions = () => (
  <nav className="legal-related" aria-label="Related questions">
    <h3>Related Questions</h3>
    <ul>
      <li>
        <a href="#your-privacy">Your privacy?</a>
      </li>
      <li>
        <a href="#what-info">
          What information do we collect and how we use it?
        </a>
      </li>
      <li>
        <a href="#sharing">Sharing your personal information?</a>
      </li>
      <li>
        <a href="#returns">
          Can I return an item for an exchange instead of a refund?
        </a>
      </li>
      <li>
        <a href="#policy-changes">Policy changes</a>
      </li>
    </ul>
  </nav>
);

const Legal = () => {
  return (
    <Layout>
      <PageTop pageName={"Privacy Policy"} />
      <div className="legal-wrapper">
        <div className="legal-container">
          <aside className="legal-sidebar">
            <RelatedQuestions />
          </aside>

          <main className="legal-content">
            <section id="your-privacy" className="legal-section">
              <h1>Your Privacy</h1>
              <p>
                We take your privacy seriously. This page explains what
                information we collect, why we collect it and how we use it.
                Where applicable, we also describe your choices and rights
                regarding your information.
              </p>
            </section>

            <section id="what-info" className="legal-section">
              <h2>What information do we collect and how do we use it?</h2>
              <p>
                We may collect information you provide directly when you create
                or modify your account, make a purchase, request customer
                support, or otherwise communicate with us. We also collect
                information automatically through cookies and similar
                technologies to provide and improve our services.
              </p>
              <p>
                The information is used to process orders, provide customer
                service, personalise content, and to improve and secure our
                systems. We may also use aggregated or anonymised information
                for analytical purposes.
              </p>
            </section>

            <section id="sharing" className="legal-section">
              <h2>Sharing your personal information</h2>
              <p>
                We do not sell your personal information. We may share
                information with trusted service providers who perform services
                on our behalf (for example, payment processors, hosting
                providers, and shipping partners). These parties are
                contractually required to handle your information in accordance
                with our instructions and applicable law.
              </p>
              <p>
                In exceptional circumstances, we may disclose information if
                required by law, to respond to legal process, to protect our
                rights or to prevent fraud or imminent harm.
              </p>
            </section>

            <section id="returns" className="legal-section">
              <h2>Returns and exchanges</h2>
              <p>
                If you wish to return an item, please consult our Returns Policy
                for timeframe and conditions. In many cases exchanges are
                possible where stock and policy permit. Contact customer support
                for assistance with exchanges.
              </p>
            </section>

            <section id="policy-changes" className="legal-section">
              <h2>Policy changes</h2>
              <p>
                We may update this page from time to time. Significant changes
                will be communicated via the email address associated with your
                account or via prominent notice on our website.
              </p>
            </section>
          </main>
        </div>
      </div>
    </Layout>
  );
};

export default Legal;
