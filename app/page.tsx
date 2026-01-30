import Calculator from "@/components/Calculator";
import FAQ from "@/components/FAQ";
import menuData from "@/data/starbucks-menu.json";
import { MenuData } from "@/types";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-starbucks-green to-starbucks-green-light text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Starbucks Calorie Calculator
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto">
            Calculate calories, caffeine, and nutrition for your customized
            Starbucks drink. Make informed choices and find the perfect low-calorie
            options.
          </p>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-8 bg-starbucks-white">
        <Calculator menuData={menuData as MenuData} />
      </section>

      {/* FAQ Section */}
      <FAQ />
    </>
  );
}
