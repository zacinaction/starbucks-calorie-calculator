import { Metadata } from "next";
import { Mail, MessageSquare, Send } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us | Starbucks Calorie Calculator",
  description:
    "Get in touch with us. We'd love to hear your feedback, questions, or suggestions.",
};

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-4 text-starbucks-green">
        Contact Us
      </h1>
      <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
        Have a question, suggestion, or found an error? We&apos;d love to hear from
        you!
      </p>

      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <form className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-starbucks-green"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-starbucks-green"
              />
            </div>

            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-starbucks-green"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-starbucks-green"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-starbucks-green text-white px-6 py-3 rounded-lg hover:bg-starbucks-green-light transition-colors font-semibold flex items-center justify-center gap-2"
            >
              <Send size={20} />
              Send Message
            </button>
          </form>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <Mail className="mx-auto mb-4 text-starbucks-green" size={32} />
            <h3 className="font-semibold text-lg mb-2">Email Us</h3>
            <p className="text-gray-600">contact@starbuckscalculator.com</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <MessageSquare
              className="mx-auto mb-4 text-starbucks-green"
              size={32}
            />
            <h3 className="font-semibold text-lg mb-2">Feedback</h3>
            <p className="text-gray-600">
              We appreciate your feedback and suggestions
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
