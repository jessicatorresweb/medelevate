import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => (
  <>
    <Navbar />
    <main className="min-h-screen bg-white pt-24 pb-12 px-4">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
        <p className="mb-2 text-gray-600">Effective Date: April 20, 2025</p>
        <ol className="list-decimal list-inside space-y-4 text-gray-700">
          <li>
            <strong>Introduction</strong>
            <p>
              MedElevate Solutions (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) is committed to protecting your privacy. This Privacy Policy outlines how we collect, use, and safeguard your personal information when you visit our website, <a href="https://medelevatesolutions.com" className="text-medelevate-primary underline" target="_blank" rel="noopener noreferrer">https://medelevatesolutions.com</a> (&quot;Site&quot;).
            </p>
          </li>
          <li>
            <strong>Information We Collect</strong>
            <ul className="list-disc list-inside ml-4">
              <li>
                <strong>Personal Information:</strong> Name, email address, phone number, and any other information you voluntarily provide through our contact forms or other interactions.
              </li>
              <li>
                <strong>Non-Personal Information:</strong> Browser type, operating system, IP address, and browsing behavior on our Site, collected through cookies and similar technologies.
              </li>
            </ul>
          </li>
          <li>
            <strong>How We Use Your Information</strong>
            <ul className="list-disc list-inside ml-4">
              <li>Respond to your inquiries and provide requested services.</li>
              <li>Improve our website&apos;s functionality and user experience.</li>
              <li>
                Send periodic emails regarding updates, services, or other information we believe may be of interest to you.
              </li>
            </ul>
          </li>
          <li>
            <strong>Information Sharing and Disclosure</strong>
            <p>
              We do not sell, trade, or rent your personal information to third parties. We may share information with trusted service providers who assist us in operating our website and conducting our business, provided they agree to keep this information confidential.
            </p>
          </li>
          <li>
            <strong>Data Security</strong>
            <p>
              We implement appropriate security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction.
            </p>
          </li>
          <li>
            <strong>Your Rights and Choices</strong>
            <ul className="list-disc list-inside ml-4">
              <li>Access, update, or delete your personal information.</li>
              <li>Opt-out of receiving marketing communications from us.</li>
            </ul>
            <p>
              To exercise these rights, please contact us at <span className="font-mono">[insert contact email]</span>.
            </p>
          </li>
          <li>
            <strong>Third-Party Links</strong>
            <p>
              Our Site may contain links to external websites. We are not responsible for the privacy practices of these sites and encourage you to review their privacy policies.
            </p>
          </li>
          <li>
            <strong>Children&apos;s Privacy</strong>
            <p>
              Our services are not directed to individuals under the age of 13. We do not knowingly collect personal information from children.
            </p>
          </li>
          <li>
            <strong>Changes to This Privacy Policy</strong>
            <p>
              We may update this Privacy Policy periodically. Any changes will be posted on this page with an updated effective date.
            </p>
          </li>
          <li>
            <strong>Contact Us</strong>
            <p>
              If you have any questions or concerns about this Privacy Policy, please contact us at:<br />
              MedElevate Solutions<br />
              Email: <a href="mailto:admin@medelevatesolutions.com" className="text-medelevate-primary underline">admin@medelevatesolutions.com</a><br />
              Phone: <a href="tel:+12394386667" className="text-medelevate-primary underline">239-438-6667</a>
            </p>
          </li>
        </ol>
      </div>
    </main>
    <Footer />
  </>
);

export default PrivacyPolicy;
