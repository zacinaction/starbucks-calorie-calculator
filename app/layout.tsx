import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Starbucks Calorie Calculator | Calculate Your Drink Nutrition",
  description:
    "Calculate calories, caffeine, and nutrition for your customized Starbucks drink. Find the perfect low-calorie options and track your daily intake.",
  keywords:
    "starbucks calorie calculator, starbucks nutrition, starbucks calories, coffee calories, starbucks drink calculator",
  openGraph: {
    title: "Starbucks Calorie Calculator",
    description:
      "Calculate calories and nutrition for your customized Starbucks drink",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
