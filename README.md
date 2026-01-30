# Starbucks Calorie Calculator

A high-performance, SEO-optimized Starbucks Nutrition & Calorie Calculator built with Next.js 15, Tailwind CSS, and Lucide Icons.

## Features

- 🧮 **Interactive Calculator**: Multi-step interface to customize your Starbucks drink
- 📊 **Real-time Nutrition Panel**: Instant updates for calories, caffeine, fat, carbs, and protein
- 📱 **Mobile-First Design**: Fully responsive and optimized for all devices
- 🎨 **Starbucks-Inspired UI**: Beautiful design with Starbucks brand colors
- ✨ **Smooth Animations**: Framer Motion animations for a polished experience
- 🔍 **SEO Optimized**: Meta tags and semantic HTML for better search visibility
- 📝 **Copy Order Feature**: Generate and copy a text summary of your customized drink

## Tech Stack

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Lucide React** - Icon library

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd starbucks-calorie-calculator
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Home page
│   ├── blog/              # Blog page
│   ├── changelog/          # Changelog page
│   ├── contact/           # Contact page
│   ├── about/             # About page
│   ├── privacy/           # Privacy Policy
│   ├── terms/             # Terms & Conditions
│   ├── layout.tsx         # Root layout
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── Calculator.tsx     # Main calculator component
│   ├── NutritionPanel.tsx # Nutrition display panel
│   ├── DrinkCard.tsx      # Drink selection card
│   ├── Header.tsx         # Navigation header
│   ├── Footer.tsx         # Site footer
│   └── FAQ.tsx            # FAQ accordion
├── data/                  # Data files
│   └── starbucks-menu.json # Menu data
└── types/                 # TypeScript types
    └── index.ts           # Type definitions
```

## Features in Detail

### Calculator Logic

The calculator uses the following formula:
```
Total = (Base Drink Calories - Default Milk Calories) + Selected Milk + (Pumps × Syrup Calories) + Topping Calories
```

### Menu Data

The `data/starbucks-menu.json` file contains:
- 15+ base drinks (Cold Brew, Latte, Frappuccino, etc.)
- 8 milk options (2%, Whole, Nonfat, Almond, Oat, Soy, Coconut, None)
- 10+ syrups (Vanilla, Caramel, Mocha, etc.)
- 8+ toppings (Whipped Cream, Caramel Drizzle, etc.)

## Building for Production

```bash
npm run build
npm start
```

## License

This project is for educational purposes. This site is not affiliated with Starbucks Corporation.
