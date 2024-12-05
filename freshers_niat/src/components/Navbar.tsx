import React from 'react';
import { Menu, X, PartyPopper } from 'lucide-react';
import { Link } from "react-router-dom";

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "#activities", label: "Schedule" },
    { href: "#highlights", label: "Highlights" },
    { href: "#gallery", label: "Gallery" },
    { href: "#faq", label: "FAQ" },
    { href: "#contact", label: "Contact" }
  ];

  return (
    <nav className="bg-purple-800 text-white fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <PartyPopper className="h-8 w-8 mr-2" />
            <span className="font-bold text-xl">Starlit 2024</span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6 ml-10">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className="hover:bg-purple-700 px-3 py-2 rounded-md transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>
          
          {/* Hamburger button for mobile view */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="p-2">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-purple-800">
          <div className="flex flex-col justify-center items-center px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block hover:bg-purple-700 px-3 py-2 rounded-md transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
