
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const TermsAndConditions = () => (
  <>
    <Navbar />
    <main className="min-h-screen bg-white pt-20 pb-12 px-4">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">Terms and Conditions</h1>
        <p className="mb-2 text-gray-600">Effective Date: April 20, 2025</p>
        <p className="mb-6 text-gray-700">
          Welcome to MedElevate Solutions (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;). Please read these Terms and Conditions (&quot;Terms&quot;) carefully before using our website at <a href="https://medelevatesolutions.com" className="text-medelevate-primary underline" target="_blank" rel="noopener noreferrer">https://medelevatesolutions.com</a> (&quot;Site&quot;). By accessing or using this Site, you agree to be bound by these Terms. If you do not agree, please do not use our Site.
        </p>
        <ol className="list-decimal list-inside space-y-4 text-gray-700">
          <li>
            <strong>Use of the Site</strong>
            <ul className="list-disc list-inside ml-4">
              <li>Violates any applicable local, state, national, or international law or regulation.</li>
              <li>Attempts to gain unauthorized access to any part of the Site, servers, or networks.</li>
              <li>Infringes on the rights of any third party, including intellectual property or privacy rights.</li>
            </ul>
          </li>
          <li>
            <strong>Intellectual Property</strong>
            <p>
              All content on this Site, including but not limited to text, images, graphics, logos, and downloadable materials, is the property of MedElevate Solutions and is protected by applicable copyright, trademark, and other intellectual property laws. You may not reproduce, distribute, modify, or create derivative works without prior written consent from us.
            </p>
          </li>
          <li>
            <strong>Disclaimer of Warranties</strong>
            <p>
              The content provided on this Site is for informational purposes only and does not constitute professional or legal advice. While we strive to ensure the accuracy and reliability of the information, we make no warranties or representations, express or implied, about the completeness, accuracy, or reliability of the content or the Site&apos;s availability.<br />
              Use of the Site is at your own risk.
            </p>
          </li>
          <li>
            <strong>Limitation of Liability</strong>
            <p>
              To the fullest extent permitted by law, MedElevate Solutions shall not be liable for any damages arising from your use or inability to use the Site, including but not limited to direct, indirect, incidental, or consequential damages, even if we have been advised of the possibility of such damages.
            </p>
          </li>
          <li>
            <strong>Third-Party Links</strong>
            <p>
              This Site may contain links to third-party websites. These links are provided for your convenience only. We do not control, endorse, or take responsibility for the content or privacy practices of any third-party sites.
            </p>
          </li>
          <li>
            <strong>User Submissions</strong>
            <p>
              If you submit any form, message, or feedback via this Site, you grant us the right to use, reproduce, modify, and distribute your submission as necessary to respond to your inquiry or improve our services. You agree not to submit any content that is unlawful, harmful, or infringing.
            </p>
          </li>
          <li>
            <strong>Termination</strong>
            <p>
              We reserve the right to terminate or suspend your access to the Site without notice if we believe you have violated these Terms or applicable law.
            </p>
          </li>
          <li>
            <strong>Changes to These Terms</strong>
            <p>
              We may update these Terms at any time. Any changes will be posted on this page, and your continued use of the Site after changes are made constitutes your acceptance of the new Terms.
            </p>
          </li>
          <li>
            <strong>Governing Law</strong>
            <p>
              These Terms are governed by and construed in accordance with the laws of the State of Georgia, without regard to its conflict of law principles.
            </p>
          </li>
          <li>
            <strong>Contact Us</strong>
            <p>
              If you have any questions about these Terms, please contact us:<br />
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

export default TermsAndConditions;
