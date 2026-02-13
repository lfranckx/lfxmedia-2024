import React, { useEffect } from 'react';
import '../../styles/Header.scss';
import '../../styles/pages/PrivacyPolicy.scss';
import { Helmet } from 'react-helmet';
import computer from '../../images/computer.png';
import { motion } from 'framer-motion';

export default function PrivacyPolicy(props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { loading } = props;

  return (
    <>
      <Helmet>
        <title>Privacy Policy | LFX Media</title>
        <meta
          name="description"
          content="Read LFX Media’s Privacy Policy, including how we collect and use information and our SMS policy regarding mobile information."
        />
        <meta
          name="keywords"
          content="LFX Media Privacy Policy, privacy policy, data privacy, SMS policy, text message consent"
        />
      </Helmet>

      <motion.div
        id="privacy-policy"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <header className={loading ? '' : 'fade-in-screen'}>
          <h1>Privacy Policy</h1>
          <h2>How we collect, use, and protect your information</h2>
          <div className="image-wrap">
            <img src={computer} alt="desktop workspace" />
          </div>
        </header>

        <main className={loading ? '' : 'fade-in-screen'}>
          <section id="privacy-policy-content">
            <div className="container">
              <p>
                <strong>Effective Date:</strong> {new Date().getFullYear()}
              </p>

              <p>
                This Privacy Policy explains how <strong>LFX Media</strong> ("we," "us," or "our") collects, uses,
                and protects your information when you visit our website, contact us, or use our services.
              </p>

              <h2>Information We Collect</h2>
              <p>We may collect information you provide directly, including:</p>
              <ul>
                <li>Name</li>
                <li>Email address</li>
                <li>Phone number (including mobile number)</li>
                <li>Message content and any details you submit through our forms</li>
              </ul>

              <p>We may also collect limited information automatically, such as:</p>
              <ul>
                <li>Device and browser information</li>
                <li>Pages viewed and time spent on the site</li>
                <li>Referring/exit pages and basic analytics data</li>
              </ul>

              <h2>How We Use Your Information</h2>
              <p>We use the information we collect to:</p>
              <ul>
                <li>Respond to inquiries and provide customer support</li>
                <li>Deliver requested services and communicate about projects</li>
                <li>Improve our website, services, and user experience</li>
                <li>Send transactional or informational updates you request or consent to receive</li>
              </ul>

              <h2>SMS/Text Messaging Policy</h2>
              <p>
                If you opt in to receive text messages from <strong>LFX Media</strong>, we may send
                transactional and informational messages. Message frequency will vary. Msg &amp; data rates may apply.
                Reply HELP for help or STOP to opt out.
              </p>

              <p>
                <strong>
                  Mobile information will not be shared with third parties or affiliates for marketing or promotional purposes.
                </strong>
              </p>

              <h2>Sharing of Information</h2>
              <p>
                We do not sell your personal information. We may share information in limited circumstances, such as:
              </p>
              <ul>
                <li>
                  With service providers who help us operate our business (e.g., email delivery, hosting, analytics),
                  solely to perform services on our behalf
                </li>
                <li>To comply with legal obligations, enforce our policies, or protect rights and safety</li>
              </ul>

              <h2>Data Security</h2>
              <p>
                We take reasonable measures to protect your information. However, no website or internet transmission
                is 100% secure, and we cannot guarantee absolute security.
              </p>

              <h2>Your Choices</h2>
              <ul>
                <li>You can opt out of SMS messages at any time by replying STOP.</li>
                <li>You may request access, updates, or deletion of your information by contacting us.</li>
              </ul>

              <h2>Contact Us</h2>
              <p>
                If you have questions about this Privacy Policy, contact us through our website contact form or email
                us at <strong><a href="mailto:lachlan@lfxmedia.io">lachlan@lfxmedia.io</a></strong>.
              </p>
            </div>
          </section>
        </main>
      </motion.div>
    </>
  );
}
