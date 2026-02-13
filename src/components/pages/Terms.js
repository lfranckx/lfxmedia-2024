import React, { useEffect } from 'react';
import '../../styles/Header.scss';
import '../../styles/pages/Terms.scss';
import { Helmet } from 'react-helmet';
import computer from '../../images/computer.png';
import { motion } from 'framer-motion';

export default function Terms(props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { loading } = props;

  return (
    <>
      <Helmet>
        <title>Terms &amp; Conditions | LFX Media</title>
        <meta
          name="description"
          content="Read LFX Media’s Terms & Conditions for using our website and services."
        />
        <meta
          name="keywords"
          content="LFX Media Terms and Conditions, Terms of Use, website terms"
        />
      </Helmet>

      <motion.div
        id="terms-page"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <header className={loading ? '' : 'fade-in-screen'}>
          <h1>Terms &amp; Conditions</h1>
          <h2>Rules and guidelines for using our website</h2>
          <div className="image-wrap">
            <img src={computer} alt="desktop workspace" />
          </div>
        </header>

        <main className={loading ? '' : 'fade-in-screen'}>
          <section id="terms-content">
            <div className="container">
              <p>
                <strong>Effective Date:</strong> {new Date().getFullYear()}
              </p>

              <p>
                These Terms &amp; Conditions ("Terms") govern your access to and use of the LFX Media website
                (the "Site"). By accessing or using this Site, you agree to these Terms. If you do not agree,
                please do not use the Site.
              </p>

              <h2>Use of the Website</h2>
              <p>
                You may use this Site for lawful purposes only. You agree not to misuse the Site, attempt to
                gain unauthorized access, interfere with the Site’s operation, or use the Site in a way that
                violates any applicable laws or regulations.
              </p>

              <h2>Information &amp; Content</h2>
              <p>
                The content on this Site is provided for general informational purposes only and may change
                at any time without notice. We do our best to keep information accurate, but we do not
                guarantee completeness, accuracy, or reliability.
              </p>

              <h2>Intellectual Property</h2>
              <p>
                All content on this Site — including text, graphics, logos, and design elements — is owned by
                LFX Media or used with permission, and is protected by applicable intellectual property laws.
                You may not copy, reproduce, distribute, or create derivative works without written permission.
              </p>

              <h2>Third-Party Links</h2>
              <p>
                This Site may include links to third-party websites. We are not responsible for the content,
                policies, or practices of third-party sites. Accessing third-party sites is at your own risk.
              </p>

              <h2>Contact Forms &amp; Communications</h2>
              <p>
                If you submit information through our contact forms, you agree that the information you provide
                is accurate and that you have the right to provide it. We may use your information to respond
                to your inquiry and provide requested services.
              </p>

              <h2>Disclaimer of Warranties</h2>
              <p>
                The Site is provided on an "as is" and "as available" basis without warranties of any kind,
                either express or implied. We do not warrant that the Site will be uninterrupted, secure,
                or error-free.
              </p>

              <h2>Limitation of Liability</h2>
              <p>
                To the fullest extent permitted by law, LFX Media will not be liable for any indirect,
                incidental, special, consequential, or punitive damages arising out of or related to your
                use of the Site.
              </p>

              <h2>Changes to These Terms</h2>
              <p>
                We may update these Terms from time to time. Changes will be posted on this page with an updated
                effective date. Your continued use of the Site after changes are posted constitutes acceptance
                of the updated Terms.
              </p>

              <h2>Governing Law</h2>
              <p>
                These Terms are governed by the laws of the United States and the State of Texas, without regard
                to conflict of law principles.
              </p>

              <h2>Contact Us</h2>
              <p>
                If you have questions about these Terms, contact us through our website contact form or email us
                at <strong>lachlan@lfxmedia.io</strong>.
              </p>
            </div>
          </section>
        </main>
      </motion.div>
    </>
  );
}
