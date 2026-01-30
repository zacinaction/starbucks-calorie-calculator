export type Size = "tall" | "grande" | "venti";

export interface BaseDrink {
  id: string;
  name: string;
  calories: Record<Size, number>;
  caffeine: Record<Size, number>;
  fat: Record<Size, number>;
  carbs: Record<Size, number>;
  protein: Record<Size, number>;
  defaultMilk: string;
}

export interface Milk {
  id: string;
  name: string;
  calories: Record<Size, number>;
  fat: Record<Size, number>;
  carbs: Record<Size, number>;
  protein: Record<Size, number>;
}

export interface Syrup {
  id: string;
  name: string;
  caloriesPerPump: number;
  defaultPumps: Record<Size, number>;
}

export interface Topping {
  id: string;
  name: string;
  calories: number;
  fat: number;
  carbs: number;
  protein: number;
}

export interface MenuData {
  baseDrinks: BaseDrink[];
  milks: Milk[];
  syrups: Syrup[];
  toppings: Topping[];
}

export interface SelectedOptions {
  baseDrink: BaseDrink | null;
  size: Size;
  milk: Milk | null;
  syrups: Array<{ syrup: Syrup; pumps: number }>;
  toppings: Topping[];
}

export interface NutritionInfo {
  calories: number;
  caffeine: number;
  fat: number;
  carbs: number;
  protein: number;
}
