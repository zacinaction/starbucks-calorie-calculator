import { Metadata } from "next";
import { Calendar } from "lucide-react";

export const metadata: Metadata = {
  title: "Changelog | Starbucks Calorie Calculator",
  description:
    "Recent updates and changes to the Starbucks Calorie Calculator database and features.",
};

interface ChangelogEntry {
  date: string;
  title: string;
  description: string;
  type: "added" | "updated" | "fixed";
}

const changelogEntries: ChangelogEntry[] = [
  {
    date: "2024-01-20",
    title: "Added New Seasonal Drinks",
    description:
      "Added winter seasonal drinks including Peppermint Mocha and Gingerbread Latte to the database.",
    type: "added",
  },
  {
    date: "2024-01-15",
    title: "Updated Nutrition Data",
    description:
      "Refreshed nutrition information for all base drinks based on latest Starbucks nutritional data.",
    type: "updated",
  },
  {
    date: "2024-01-10",
    title: "Added Oat Milk Option",
    description:
      "Added Oat Milk as a milk option with accurate calorie and nutrition information.",
    type: "added",
  },
  {
    date: "2024-01-05",
    title: "Fixed Calculation Bug",
    description:
      "Fixed an issue where milk calories were not being properly subtracted when changing milk types.",
    type: "fixed",
  },
  {
    date: "2024-01-01",
    title: "Initial Release",
    description:
      "Launched the Starbucks Calorie Calculator with 15 base drinks, 8 milk options, 10 syrups, and 8 toppings.",
    type: "added",
  },
];

export default function ChangelogPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-4 text-starbucks-green">
        Changelog
      </h1>
      <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
        Track recent updates, new features, and improvements to the Starbucks
        Calorie Calculator.
      </p>

      <div className="max-w-3xl mx-auto">
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-starbucks-green/30"></div>

          <div className="space-y-8">
            {changelogEntries.map((entry, index) => (
              <div key={index} className="relative flex gap-6">
                {/* Timeline dot */}
                <div className="flex-shrink-0">
                  <div
                    className={`w-16 h-16 rounded-full flex items-center justify-center ${
                      entry.type === "added"
                        ? "bg-green-500"
                        : entry.type === "updated"
                        ? "bg-blue-500"
                        : "bg-orange-500"
                    } text-white font-bold`}
                  >
                    {entry.type === "added"
                      ? "+"
                      : entry.type === "updated"
                      ? "↻"
                      : "✓"}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 bg-white rounded-lg shadow-md p-6">
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                    <Calendar size={16} />
                    <span>{new Date(entry.date).toLocaleDateString()}</span>
                    <span className="px-2 py-1 rounded text-xs font-semibold bg-gray-100">
                      {entry.type}
                    </span>
                  </div>
                  <h2 className="text-xl font-bold mb-2 text-starbucks-green">
                    {entry.title}
                  </h2>
                  <p className="text-gray-600">{entry.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
