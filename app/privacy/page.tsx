import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Starbucks Calorie Calculator",
  description: "Privacy Policy for the Starbucks Calorie Calculator.",
};

export default function PrivacyPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-4 text-starbucks-green">
        Privacy Policy
      </h1>
      <p className="text-center text-gray-600 mb-12">
        Last updated: {new Date().toLocaleDateString()}
      </p>

      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-8 space-y-8">
        <section>
          <h2 className="text-2xl font-bold mb-4 text-starbucks-green">
            Introduction
          </h2>
          <p className="text-gray-700 leading-relaxed">
            This Privacy Policy describes how we collect, use, and protect your
            information when you use the Starbucks Calorie Calculator website.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-starbucks-green">
            Information We Collect
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            We currently do not collect personal information. The calculator
            operates entirely in your browser, and no data is sent to our
            servers.
          </p>
          <p className="text-gray-700 leading-relaxed">
            If you contact us through our contact form, we may collect:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mt-2">
            <li>Your name and email address</li>
            <li>Your message content</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-starbucks-green">
            How We Use Information
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Any information collected through our contact form is used solely to
            respond to your inquiries and improve our service. We do not sell,
            trade, or rent your personal information to third parties.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-starbucks-green">
            Cookies and Tracking
          </h2>
          <p className="text-gray-700 leading-relaxed">
            We may use cookies to enhance your experience. You can choose to
            disable cookies through your browser settings, though this may
            affect site functionality.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-starbucks-green">
            Third-Party Services
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Our website may use third-party services for analytics or hosting.
            These services may collect information according to their own privacy
            policies.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-starbucks-green">
            Changes to This Policy
          </h2>
          <p className="text-gray-700 leading-relaxed">
            We may update this Privacy Policy from time to time. We will notify
            you of any changes by posting the new Privacy Policy on this page
            and updating the &quot;Last updated&quot; date.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-starbucks-green">
            Contact Us
          </h2>
          <p className="text-gray-700 leading-relaxed">
            If you have any questions about this Privacy Policy, please contact
            us through our contact page.
          </p>
        </section>
      </div>
    </div>
  );
}
