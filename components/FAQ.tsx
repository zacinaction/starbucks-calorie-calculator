"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "How to use the Starbucks Calorie Calculator?",
    answer:
      "Simply select your base drink, choose your size (Tall, Grande, or Venti), pick your milk option, add any syrups with the desired number of pumps, and optionally add toppings. The nutrition panel will update in real-time to show you the total calories, caffeine, fat, carbs, and protein for your customized drink.",
  },
  {
    question: "Is this data accurate?",
    answer:
      "Our calculator uses nutrition data based on Starbucks' official nutritional information. However, actual values may vary slightly depending on preparation methods, specific store practices, and ingredient variations. This tool is meant to provide estimates to help you make informed choices.",
  },
  {
    question: "Does it include seasonal drinks?",
    answer:
      "Currently, our database focuses on year-round menu items. Seasonal and limited-time offerings may not be included. We regularly update our database, so check back or visit our changelog page to see recent additions.",
  },
  {
    question: "Can I calculate nutrition for multiple drinks?",
    answer:
      "At the moment, the calculator is designed for one drink at a time. You can use the 'Copy Order' feature to save your customized drink details and calculate multiple drinks separately.",
  },
  {
    question: "How are calories calculated when I change the milk?",
    answer:
      "The calculator automatically subtracts the calories from the default milk (if the drink comes with one) and adds the calories from your selected milk option. This ensures accurate calculations when you customize your milk choice.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center mb-8 text-starbucks-green">
        Frequently Asked Questions
      </h2>
      <div className="max-w-3xl mx-auto space-y-4">
        {faqData.map((faq, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
            >
              <span className="font-semibold text-lg pr-4">{faq.question}</span>
              {openIndex === index ? (
                <ChevronUp className="flex-shrink-0" size={20} />
              ) : (
                <ChevronDown className="flex-shrink-0" size={20} />
              )}
            </button>
            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-6 py-4 text-gray-700 border-t border-gray-200">
                    {faq.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
}
