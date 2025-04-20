
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const CookiePolicy = () => (
  <>
    <Navbar />
    <main className="min-h-screen bg-white pt-24 pb-12 px-4">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">Cookie Policy</h1>
        <p className="mb-2 text-gray-600">Effective Date: April 20, 2025</p>
        <p className="mb-6 text-gray-700">
          This Cookie Policy explains how MedElevate Solutions ("we", "us", and "our") uses cookies and similar technologies when you visit our website at <a href="https://medelevatesolutions.com" className="text-medelevate-primary underline" target="_blank" rel="noopener noreferrer">https://medelevatesolutions.com</a> ("Site").<br />
          By continuing to browse or use our Site, you agree that we can store and access cookies and similar technologies as described in this policy.
        </p>
        <ol className="list-decimal list-inside space-y-4 text-gray-700">
          <li>
            <strong>What Are Cookies?</strong>
            <p>
              Cookies are small text files that are placed on your device (computer, tablet, smartphone) when you visit a website. They help us understand how visitors use our site and enable certain functionality.
            </p>
          </li>
          <li>
            <strong>Types of Cookies We Use</strong>
            <ul className="list-disc list-inside ml-4">
              <li>
                <strong>Essential Cookies:</strong> These cookies are necessary for the website to function properly. They enable core features such as page navigation and access to secure areas.
              </li>
              <li>
                <strong>Analytics Cookies:</strong> These cookies help us understand how visitors interact with our Site (e.g., page views, time spent on site). We use this information to improve our content and user experience. Example: Google Analytics.
              </li>
              <li>
                <strong>Functional Cookies:</strong> These cookies allow the website to remember choices you’ve made, such as form entries or preferences, to provide a more personalized experience.
              </li>
              <li>
                <strong>Third-Party Cookies:</strong> We may embed content from third parties (e.g., Google Maps, YouTube). These services may set their own cookies to track usage or enhance your experience.
              </li>
            </ul>
          </li>
          <li>
            <strong>Managing Cookies</strong>
            <p>
              You can control or disable cookies through your browser settings. Please note that disabling certain cookies may affect the functionality of the Site.
              <br />
              For more detailed information about managing cookies in your browser, visit:
            </p>
            <ul className="list-disc list-inside ml-4">
              <li>Google Chrome</li>
              <li>Mozilla Firefox</li>
              <li>Safari</li>
              <li>Microsoft Edge</li>
            </ul>
          </li>
          <li>
            <strong>Updates to This Cookie Policy</strong>
            <p>
              We may update this Cookie Policy from time to time. Any changes will be posted on this page with a revised effective date.
            </p>
          </li>
          <li>
            <strong>Contact Us</strong>
            <p>
              If you have any questions about our use of cookies, please contact us:<br />
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

export default CookiePolicy;

