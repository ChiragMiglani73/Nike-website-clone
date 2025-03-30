import React from "react";
import headerLogo from "../assets/images/header-logo.svg";
import hamburger from "../assets/icons/hamburger.svg";
import { navLinks } from "../constants";

const Nav = () => {
  return (
    <header className="absolute top-0 left-0 w-full px-12 py-4 z-50 bg-transparent">
      <nav className="flex items-center justify-between max-w-screen-xl mx-auto mt-6">
        {/* Logo */}
        <a href="/">
          <img src={headerLogo} alt="Logo" className="w-36" />
        </a>

        {/* Navigation Links - Centered & Styled */}
        <ul className="hidden lg:flex items-center gap-16 absolute left-1/2 transform -translate-x-1/2">
          {navLinks.map((item) => (
            <li key={item.label} className="relative">
              <a
                href={item.href}
                className="font-inter text-lg font-medium text-gray-500 hover:text-gray-800 transition-all duration-300 tracking-wide"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Icon */}
        <button className="lg:hidden">
          <img src={hamburger} alt="Menu" className="w-9 h-9" />
        </button>
      </nav>
    </header>
  );
};

export default Nav;
