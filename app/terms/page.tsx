import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions | Starbucks Calorie Calculator",
  description: "Terms and Conditions for the Starbucks Calorie Calculator.",
};

export default function TermsPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-4 text-starbucks-green">
        Terms & Conditions
      </h1>
      <p className="text-center text-gray-600 mb-12">
        Last updated: {new Date().toLocaleDateString()}
      </p>

      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-8 space-y-8">
        <section>
          <h2 className="text-2xl font-bold mb-4 text-starbucks-green">
            Acceptance of Terms
          </h2>
          <p className="text-gray-700 leading-relaxed">
            By accessing and using the Starbucks Calorie Calculator website, you
            accept and agree to be bound by the terms and provision of this
            agreement.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-starbucks-green">
            Use License
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Permission is granted to temporarily use the Starbucks Calorie
            Calculator for personal, non-commercial transitory viewing only.
          </p>
          <p className="text-gray-700 leading-relaxed">
            This license does not include:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mt-2">
            <li>Modifying or copying the materials</li>
            <li>Using the materials for any commercial purpose</li>
            <li>Attempting to reverse engineer any software</li>
            <li>Removing any copyright or proprietary notations</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-starbucks-green">
            Disclaimer
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            The materials on the Starbucks Calorie Calculator website are
            provided on an &apos;as is&apos; basis. We make no warranties, expressed or
            implied, and hereby disclaim and negate all other warranties
            including, without limitation, implied warranties or conditions of
            merchantability, fitness for a particular purpose, or
            non-infringement of intellectual property or other violation of
            rights.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Nutrition information is provided for informational purposes only
            and may vary based on preparation methods, regional differences, and
            other factors. Always consult with a healthcare professional for
            dietary advice.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-starbucks-green">
            Limitations
          </h2>
          <p className="text-gray-700 leading-relaxed">
            In no event shall the Starbucks Calorie Calculator or its suppliers
            be liable for any damages (including, without limitation, damages for
            loss of data or profit, or due to business interruption) arising out
            of the use or inability to use the materials on this website.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-starbucks-green">
            Accuracy of Materials
          </h2>
          <p className="text-gray-700 leading-relaxed">
            The materials appearing on the Starbucks Calorie Calculator website
            could include technical, typographical, or photographic errors. We
            do not warrant that any of the materials on its website are
            accurate, complete, or current. We may make changes to the materials
            contained on its website at any time without notice.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-starbucks-green">
            Trademark Notice
          </h2>
          <p className="text-gray-700 leading-relaxed">
            This website is not affiliated with, endorsed by, or associated
            with Starbucks Corporation. All product names, trademarks, and
            registered trademarks are property of their respective owners.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-starbucks-green">
            Revisions
          </h2>
          <p className="text-gray-700 leading-relaxed">
            We may revise these terms of service at any time without notice. By
            using this website, you are agreeing to be bound by the then current
            version of these terms of service.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-starbucks-green">
            Contact Information
          </h2>
          <p className="text-gray-700 leading-relaxed">
            If you have any questions about these Terms & Conditions, please
            contact us through our contact page.
          </p>
        </section>
      </div>
    </div>
  );
}
