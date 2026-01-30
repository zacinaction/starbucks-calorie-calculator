"use client";

import { useState, useMemo } from "react";
import { MenuData, SelectedOptions, Size, NutritionInfo } from "@/types";
import DrinkCard from "./DrinkCard";
import NutritionPanel from "./NutritionPanel";
import { ChevronRight } from "lucide-react";

interface CalculatorProps {
  menuData: MenuData;
}

export default function Calculator({ menuData }: CalculatorProps) {
  const [selectedOptions, setSelectedOptions] = useState<SelectedOptions>({
    baseDrink: null,
    size: "grande",
    milk: null,
    syrups: [],
    toppings: [],
  });

  const [currentStep, setCurrentStep] = useState<
    "drink" | "size" | "milk" | "syrups" | "toppings"
  >("drink");

  const calculateNutrition = (): NutritionInfo => {
    if (!selectedOptions.baseDrink) {
      return { calories: 0, caffeine: 0, fat: 0, carbs: 0, protein: 0 };
    }

    const size = selectedOptions.size;
    const base = selectedOptions.baseDrink;

    // Start with base drink nutrition
    let calories = base.calories[size];
    let caffeine = base.caffeine[size];
    let fat = base.fat[size];
    let carbs = base.carbs[size];
    let protein = base.protein[size];

    // Subtract default milk if drink has one
    if (base.defaultMilk !== "none") {
      const defaultMilk = menuData.milks.find((m) => m.id === base.defaultMilk);
      if (defaultMilk) {
        calories -= defaultMilk.calories[size];
        fat -= defaultMilk.fat[size];
        carbs -= defaultMilk.carbs[size];
        protein -= defaultMilk.protein[size];
      }
    }

    // Add selected milk
    if (selectedOptions.milk) {
      calories += selectedOptions.milk.calories[size];
      fat += selectedOptions.milk.fat[size];
      carbs += selectedOptions.milk.carbs[size];
      protein += selectedOptions.milk.protein[size];
    }

    // Add syrups
    selectedOptions.syrups.forEach(({ syrup, pumps }) => {
      calories += syrup.caloriesPerPump * pumps;
    });

    // Add toppings
    selectedOptions.toppings.forEach((topping) => {
      calories += topping.calories;
      fat += topping.fat;
      carbs += topping.carbs;
      protein += topping.protein;
    });

    return {
      calories: Math.max(0, calories),
      caffeine: Math.max(0, caffeine),
      fat: Math.max(0, fat),
      carbs: Math.max(0, carbs),
      protein: Math.max(0, protein),
    };
  };

  const nutrition = useMemo(() => calculateNutrition(), [selectedOptions]);

  const handleDrinkSelect = (drink: typeof menuData.baseDrinks[0]) => {
    const defaultMilk =
      drink.defaultMilk !== "none"
        ? menuData.milks.find((m) => m.id === drink.defaultMilk) || null
        : null;

    setSelectedOptions({
      ...selectedOptions,
      baseDrink: drink,
      milk: defaultMilk,
    });
    setCurrentStep("size");
  };

  const handleSizeSelect = (size: Size) => {
    setSelectedOptions({ ...selectedOptions, size });
    setCurrentStep("milk");
  };

  const handleMilkSelect = (milk: typeof menuData.milks[0]) => {
    setSelectedOptions({ ...selectedOptions, milk });
    setCurrentStep("syrups");
  };

  const handleSyrupToggle = (syrup: typeof menuData.syrups[0]) => {
    const existingIndex = selectedOptions.syrups.findIndex(
      (s) => s.syrup.id === syrup.id
    );

    if (existingIndex >= 0) {
      setSelectedOptions({
        ...selectedOptions,
        syrups: selectedOptions.syrups.filter((s) => s.syrup.id !== syrup.id),
      });
    } else {
      const defaultPumps = syrup.defaultPumps[selectedOptions.size];
      setSelectedOptions({
        ...selectedOptions,
        syrups: [
          ...selectedOptions.syrups,
          { syrup, pumps: defaultPumps },
        ],
      });
    }
  };

  const handleSyrupPumpsChange = (
    syrupId: string,
    delta: number
  ) => {
    setSelectedOptions({
      ...selectedOptions,
      syrups: selectedOptions.syrups.map((s) =>
        s.syrup.id === syrupId
          ? { ...s, pumps: Math.max(0, s.pumps + delta) }
          : s
      ),
    });
  };

  const handleToppingToggle = (topping: typeof menuData.toppings[0]) => {
    const existingIndex = selectedOptions.toppings.findIndex(
      (t) => t.id === topping.id
    );

    if (existingIndex >= 0) {
      setSelectedOptions({
        ...selectedOptions,
        toppings: selectedOptions.toppings.filter(
          (t) => t.id !== topping.id
        ),
      });
    } else {
      setSelectedOptions({
        ...selectedOptions,
        toppings: [...selectedOptions.toppings, topping],
      });
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Calculator Section */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-lg p-6">
            {/* Step Indicator */}
            <div className="flex items-center justify-between mb-6 text-sm">
              {[
                { key: "drink", label: "Drink" },
                { key: "size", label: "Size" },
                { key: "milk", label: "Milk" },
                { key: "syrups", label: "Syrups" },
                { key: "toppings", label: "Toppings" },
              ].map((step, index) => (
                <div key={step.key} className="flex items-center">
                  <div
                    className={`px-3 py-1 rounded ${
                      currentStep === step.key ||
                      (selectedOptions.baseDrink && step.key === "size") ||
                      (selectedOptions.size && step.key === "milk") ||
                      (selectedOptions.milk && step.key === "syrups") ||
                      (selectedOptions.syrups.length > 0 && step.key === "toppings")
                        ? "bg-starbucks-green text-white"
                        : "bg-gray-200 text-gray-600"
                    }`}
                  >
                    {step.label}
                  </div>
                  {index < 4 && (
                    <ChevronRight className="mx-2 text-gray-400" size={16} />
                  )}
                </div>
              ))}
            </div>

            {/* Step 1: Select Drink */}
            {currentStep === "drink" && (
              <div>
                <h2 className="text-2xl font-bold mb-4 text-starbucks-green">
                  Choose Your Drink
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {menuData.baseDrinks.map((drink) => (
                    <DrinkCard
                      key={drink.id}
                      drink={drink}
                      isSelected={selectedOptions.baseDrink?.id === drink.id}
                      onClick={() => handleDrinkSelect(drink)}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Step 2: Select Size */}
            {currentStep === "size" && selectedOptions.baseDrink && (
              <div>
                <h2 className="text-2xl font-bold mb-4 text-starbucks-green">
                  Choose Size
                </h2>
                <div className="grid grid-cols-3 gap-4">
                  {(["tall", "grande", "venti"] as Size[]).map((size) => (
                    <button
                      key={size}
                      onClick={() => handleSizeSelect(size)}
                      className={`p-4 rounded-lg border-2 font-semibold capitalize transition-all ${
                        selectedOptions.size === size
                          ? "border-starbucks-green bg-starbucks-green text-white"
                          : "border-gray-200 hover:border-starbucks-green/50"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 3: Select Milk */}
            {currentStep === "milk" && selectedOptions.baseDrink && (
              <div>
                <h2 className="text-2xl font-bold mb-4 text-starbucks-green">
                  Choose Milk
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {menuData.milks.map((milk) => (
                    <button
                      key={milk.id}
                      onClick={() => handleMilkSelect(milk)}
                      className={`p-4 rounded-lg border-2 transition-all ${
                        selectedOptions.milk?.id === milk.id
                          ? "border-starbucks-green bg-starbucks-green/10"
                          : "border-gray-200 hover:border-starbucks-green/50"
                      }`}
                    >
                      {milk.name}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 4: Select Syrups */}
            {currentStep === "syrups" && selectedOptions.baseDrink && (
              <div>
                <h2 className="text-2xl font-bold mb-4 text-starbucks-green">
                  Add Syrups (Optional)
                </h2>
                <div className="space-y-4">
                  {menuData.syrups.map((syrup) => {
                    const selected = selectedOptions.syrups.find(
                      (s) => s.syrup.id === syrup.id
                    );
                    return (
                      <div
                        key={syrup.id}
                        className={`p-4 rounded-lg border-2 ${
                          selected
                            ? "border-starbucks-green bg-starbucks-green/10"
                            : "border-gray-200"
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <div>
                            <h3 className="font-semibold">{syrup.name}</h3>
                            <p className="text-sm text-gray-600">
                              {syrup.caloriesPerPump} cal per pump
                            </p>
                          </div>
                          <div className="flex items-center gap-3">
                            {selected ? (
                              <>
                                <button
                                  onClick={() =>
                                    handleSyrupPumpsChange(syrup.id, -1)
                                  }
                                  className="w-8 h-8 rounded-full bg-starbucks-green text-white flex items-center justify-center hover:bg-starbucks-green-light"
                                >
                                  -
                                </button>
                                <span className="font-semibold w-8 text-center">
                                  {selected.pumps}
                                </span>
                                <button
                                  onClick={() =>
                                    handleSyrupPumpsChange(syrup.id, 1)
                                  }
                                  className="w-8 h-8 rounded-full bg-starbucks-green text-white flex items-center justify-center hover:bg-starbucks-green-light"
                                >
                                  +
                                </button>
                                <button
                                  onClick={() => handleSyrupToggle(syrup)}
                                  className="ml-2 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                                >
                                  Remove
                                </button>
                              </>
                            ) : (
                              <button
                                onClick={() => handleSyrupToggle(syrup)}
                                className="px-4 py-2 bg-starbucks-green text-white rounded hover:bg-starbucks-green-light"
                              >
                                Add
                              </button>
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <button
                  onClick={() => setCurrentStep("toppings")}
                  className="mt-6 w-full bg-starbucks-green text-white px-6 py-3 rounded-lg hover:bg-starbucks-green-light transition-colors font-semibold"
                >
                  Continue to Toppings
                </button>
              </div>
            )}

            {/* Step 5: Select Toppings */}
            {currentStep === "toppings" && selectedOptions.baseDrink && (
              <div>
                <h2 className="text-2xl font-bold mb-4 text-starbucks-green">
                  Add Toppings (Optional)
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {menuData.toppings.map((topping) => {
                    const isSelected = selectedOptions.toppings.some(
                      (t) => t.id === topping.id
                    );
                    return (
                      <button
                        key={topping.id}
                        onClick={() => handleToppingToggle(topping)}
                        className={`p-4 rounded-lg border-2 transition-all ${
                          isSelected
                            ? "border-starbucks-green bg-starbucks-green/10"
                            : "border-gray-200 hover:border-starbucks-green/50"
                        }`}
                      >
                        <h3 className="font-semibold text-sm">{topping.name}</h3>
                        <p className="text-xs text-gray-600 mt-1">
                          {topping.calories} cal
                        </p>
                      </button>
                    );
                  })}
                </div>
                <button
                  onClick={() => setCurrentStep("drink")}
                  className="mt-6 w-full bg-gray-500 text-white px-6 py-3 rounded-lg hover:bg-gray-600 transition-colors font-semibold"
                >
                  Start Over
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Nutrition Panel */}
        <div className="lg:col-span-1">
          <NutritionPanel
            nutrition={nutrition}
            selectedOptions={selectedOptions}
          />
        </div>
      </div>
    </div>
  );
}
