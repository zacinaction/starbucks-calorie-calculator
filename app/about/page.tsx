import { Metadata } from "next";
import { Target, Users, Coffee } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | Starbucks Calorie Calculator",
  description:
    "Learn about the Starbucks Calorie Calculator and our mission to help you make informed nutrition choices.",
};

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-4 text-starbucks-green">
        About Us
      </h1>
      <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
        We&apos;re passionate about helping you make informed choices about your
        favorite Starbucks drinks.
      </p>

      <div className="max-w-4xl mx-auto space-y-12">
        {/* Mission Section */}
        <section className="bg-white rounded-lg shadow-md p-8">
          <div className="flex items-start gap-4">
            <Target className="text-starbucks-green flex-shrink-0" size={32} />
            <div>
              <h2 className="text-2xl font-bold mb-4 text-starbucks-green">
                Our Mission
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Our mission is to provide accurate, easy-to-use tools that help
                people make informed decisions about their nutrition. We believe
                that understanding what&apos;s in your food and drinks is the first
                step toward a healthier lifestyle. The Starbucks Calorie
                Calculator empowers you to customize your drinks while staying
                aware of their nutritional impact.
              </p>
            </div>
          </div>
        </section>

        {/* What We Do Section */}
        <section className="bg-white rounded-lg shadow-md p-8">
          <div className="flex items-start gap-4">
            <Coffee className="text-starbucks-green flex-shrink-0" size={32} />
            <div>
              <h2 className="text-2xl font-bold mb-4 text-starbucks-green">
                What We Do
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We&apos;ve created a comprehensive calculator that allows you to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Calculate calories for any customized Starbucks drink</li>
                <li>Track caffeine, fat, carbs, and protein content</li>
                <li>Compare different milk and syrup options</li>
                <li>Discover low-calorie alternatives to your favorites</li>
                <li>Make informed choices based on your dietary goals</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Our Values Section */}
        <section className="bg-white rounded-lg shadow-md p-8">
          <div className="flex items-start gap-4">
            <Users className="text-starbucks-green flex-shrink-0" size={32} />
            <div>
              <h2 className="text-2xl font-bold mb-4 text-starbucks-green">
                Our Values
              </h2>
              <div className="space-y-4 text-gray-700">
                <div>
                  <h3 className="font-semibold text-lg mb-2">Accuracy</h3>
                  <p>
                    We strive to provide the most accurate nutrition information
                    based on official Starbucks data and regularly update our
                    database.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Transparency</h3>
                  <p>
                    We&apos;re transparent about our data sources and calculation
                    methods. Check our changelog to see recent updates.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">User-Focused</h3>
                  <p>
                    Your experience matters. We continuously improve our tools
                    based on user feedback and suggestions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Disclaimer */}
        <section className="bg-gray-50 rounded-lg p-6 border border-gray-200">
          <h3 className="font-semibold text-lg mb-2 text-starbucks-green">
            Disclaimer
          </h3>
          <p className="text-sm text-gray-600">
            This website is not affiliated with, endorsed by, or associated with
            Starbucks Corporation. All product names, trademarks, and registered
            trademarks are property of their respective owners. Nutrition
            information is provided for informational purposes only and may vary
            based on preparation methods and regional differences.
          </p>
        </section>
      </div>
    </div>
  );
}
