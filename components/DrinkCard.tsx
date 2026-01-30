"use client";

import { BaseDrink } from "@/types";
import { motion } from "framer-motion";

interface DrinkCardProps {
  drink: BaseDrink;
  isSelected: boolean;
  onClick: () => void;
}

export default function DrinkCard({
  drink,
  isSelected,
  onClick,
}: DrinkCardProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`p-4 rounded-lg border-2 transition-all text-left ${
        isSelected
          ? "border-starbucks-green bg-starbucks-green/10"
          : "border-gray-200 hover:border-starbucks-green/50 bg-white"
      }`}
    >
      <h3 className="font-semibold text-lg mb-1">{drink.name}</h3>
      <p className="text-sm text-gray-600">
        {drink.calories.grande} cal (Grande)
      </p>
    </motion.button>
  );
}
