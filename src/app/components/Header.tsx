"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import { ChevronDown, Menu, X } from "lucide-react";
import { PageType } from "./Router";

interface HeaderProps {
  currentPage: PageType;
  setCurrentPage: (page: PageType) => void;
}

export function Header({ currentPage, setCurrentPage }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const menuItems = [
    {
      title: "Albums",
      items: [
        { label: "Studio", page: "album-studio" as PageType },
        { label: "Outdoor", page: "album-outdoor" as PageType },
        { label: "Traditional", page: "album-traditional" as PageType },
      ]
    },
    {
      title: "Trang Phục",
      items: [
        { label: "Váy Cưới", page: "outfit-wedding-dress" as PageType },
        { label: "Váy Đuôi Cá", page: "outfit-mermaid-dress" as PageType },
        { label: "Vest Nam", page: "outfit-men-suit" as PageType },
        { label: "Phụ Kiện", page: "outfit-accessories" as PageType },
      ]
    },
    {
      title: "Trang Điểm",
      items: [
        { label: "Classic", page: "makeup-classic" as PageType },
        { label: "Modern", page: "makeup-modern" as PageType },
        { label: "Korean Style", page: "makeup-korean" as PageType },
      ]
    },
    {
      title: "Concept",
      items: [
        { label: "Vintage", page: "concept-vintage" as PageType },
        { label: "Minimalist", page: "concept-minimalist" as PageType },
        { label: "Garden", page: "concept-garden" as PageType },
        { label: "Beach", page: "concept-beach" as PageType },
      ]
    }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button
            onClick={() => setCurrentPage("home")}
            className="font-light text-xl tracking-wider hover:text-gray-600 transition-colors"
          >
            Wedding Studio
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {menuItems.map((menu, index) => (
              <div
                key={index}
                className="relative group"
                onMouseEnter={() => setActiveDropdown(menu.title)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="flex items-center space-x-1 hover:text-gray-600 transition-colors py-2">
                  <span>{menu.title}</span>
                  <ChevronDown className="w-4 h-4" />
                </button>

                {/* Dropdown */}
                {activeDropdown === menu.title && (
                  <div className="absolute top-full left-0 min-w-[200px] bg-white shadow-lg border border-gray-100 py-2 animate-in fade-in-0 zoom-in-95">
                    {menu.items.map((item, itemIndex) => (
                      <button
                        key={itemIndex}
                        onClick={() => {
                          setCurrentPage(item.page);
                          setActiveDropdown(null);
                        }}
                        className="block w-full text-left px-4 py-2 hover:bg-gray-50 transition-colors"
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <button
              onClick={() => setCurrentPage("contact")}
              className="hover:text-gray-600 transition-colors"
            >
              Contact
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-gray-100 py-4">
            <nav className="space-y-4">
              {menuItems.map((menu, index) => (
                <div key={index}>
                  <div className="font-medium mb-2">{menu.title}</div>
                  <div className="space-y-2 ml-4">
                    {menu.items.map((item, itemIndex) => (
                      <button
                        key={itemIndex}
                        onClick={() => {
                          setCurrentPage(item.page);
                          setIsMenuOpen(false);
                        }}
                        className="block text-gray-600 hover:text-black transition-colors"
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
              <button
                onClick={() => {
                  setCurrentPage("contact");
                  setIsMenuOpen(false);
                }}
                className="block text-gray-600 hover:text-black transition-colors"
              >
                Contact
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}