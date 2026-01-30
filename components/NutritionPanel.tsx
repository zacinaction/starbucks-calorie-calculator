"use client";

import { motion } from "framer-motion";
import { NutritionInfo } from "@/types";
import { Copy, Check } from "lucide-react";
import { useState } from "react";

interface NutritionPanelProps {
  nutrition: NutritionInfo;
  selectedOptions: {
    baseDrink: { name: string } | null;
    size: string;
    milk: { name: string } | null;
    syrups: Array<{ syrup: { name: string }; pumps: number }>;
    toppings: Array<{ name: string }>;
  };
}

export default function NutritionPanel({
  nutrition,
  selectedOptions,
}: NutritionPanelProps) {
  const [copied, setCopied] = useState(false);

  const generateOrderText = () => {
    if (!selectedOptions.baseDrink) return "";

    const parts = [];
    parts.push(selectedOptions.size.charAt(0).toUpperCase() + selectedOptions.size.slice(1));
    parts.push(selectedOptions.baseDrink.name);

    if (selectedOptions.milk && selectedOptions.milk.name !== "No Milk") {
      parts.push(`with ${selectedOptions.milk.name}`);
    }

    if (selectedOptions.syrups.length > 0) {
      const syrupText = selectedOptions.syrups
        .map((s) => `${s.pumps} pump${s.pumps !== 1 ? "s" : ""} ${s.syrup.name}`)
        .join(", ");
      parts.push(`(${syrupText})`);
    }

    if (selectedOptions.toppings.length > 0) {
      const toppingText = selectedOptions.toppings.map((t) => t.name).join(", ");
      parts.push(`with ${toppingText}`);
    }

    return parts.join(" ");
  };

  const handleCopy = async () => {
    const orderText = generateOrderText();
    const nutritionText = `Calories: ${nutrition.calories}, Caffeine: ${nutrition.caffeine}mg, Fat: ${nutrition.fat}g, Carbs: ${nutrition.carbs}g, Protein: ${nutrition.protein}g`;
    const fullText = `${orderText}\n${nutritionText}`;

    try {
      await navigator.clipboard.writeText(fullText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  const nutritionItems = [
    { label: "Calories", value: nutrition.calories, unit: "kcal" },
    { label: "Caffeine", value: nutrition.caffeine, unit: "mg" },
    { label: "Fat", value: nutrition.fat, unit: "g" },
    { label: "Carbs", value: nutrition.carbs, unit: "g" },
    { label: "Protein", value: nutrition.protein, unit: "g" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-lg shadow-lg p-6 sticky top-24"
    >
      <h3 className="text-xl font-bold text-starbucks-green mb-4">
        Nutrition Info
      </h3>
      <div className="space-y-3">
        {nutritionItems.map((item) => (
          <motion.div
            key={item.label}
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.2 }}
            className="flex justify-between items-center py-2 border-b border-gray-200 last:border-0"
          >
            <span className="text-gray-600">{item.label}</span>
            <span className="font-semibold text-starbucks-green">
              {item.value.toFixed(item.label === "Caffeine" ? 0 : 1)}
              {item.unit}
            </span>
          </motion.div>
        ))}
      </div>
      {selectedOptions.baseDrink && (
        <button
          onClick={handleCopy}
          className="mt-4 w-full flex items-center justify-center gap-2 bg-starbucks-green text-white px-4 py-2 rounded-lg hover:bg-starbucks-green-light transition-colors"
        >
          {copied ? (
            <>
              <Check size={18} />
              Copied!
            </>
          ) : (
            <>
              <Copy size={18} />
              Copy Order
            </>
          )}
        </button>
      )}
    </motion.div>
  );
}
