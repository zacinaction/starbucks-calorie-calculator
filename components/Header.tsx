"use client";

import Link from "next/link";
import { useState } from "react";
import { Search, Menu, X } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <header className="sticky top-0 z-50 bg-starbucks-green shadow-md">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-white">
            Starbucks Calculator
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link
              href="/"
              className="text-white hover:text-starbucks-white transition-colors"
            >
              Home
            </Link>
            <Link
              href="/blog"
              className="text-white hover:text-starbucks-white transition-colors"
            >
              Blog
            </Link>
            <Link
              href="/changelog"
              className="text-white hover:text-starbucks-white transition-colors"
            >
              Changelog
            </Link>
            <Link
              href="/about"
              className="text-white hover:text-starbucks-white transition-colors"
            >
              About Us
            </Link>
            <Link
              href="/contact"
              className="text-white hover:text-starbucks-white transition-colors"
            >
              Contact
            </Link>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white w-4 h-4" />
              <input
                type="text"
                placeholder="Search Drinks..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-2 rounded-full bg-white/20 text-white placeholder-white/70 border border-white/30 focus:outline-none focus:bg-white/30 w-48"
              />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-3 pb-4">
            <Link
              href="/"
              className="block text-white hover:text-starbucks-white transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/blog"
              className="block text-white hover:text-starbucks-white transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </Link>
            <Link
              href="/changelog"
              className="block text-white hover:text-starbucks-white transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Changelog
            </Link>
            <Link
              href="/about"
              className="block text-white hover:text-starbucks-white transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
            <Link
              href="/contact"
              className="block text-white hover:text-starbucks-white transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <div className="relative pt-2">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white w-4 h-4" />
              <input
                type="text"
                placeholder="Search Drinks..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-full bg-white/20 text-white placeholder-white/70 border border-white/30 focus:outline-none focus:bg-white/30"
              />
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
