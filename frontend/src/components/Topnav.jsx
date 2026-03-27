import React from "react";
import { NavLink } from "react-router-dom";  // ← important: use NavLink instead of a
import Icon from "../assets/gem.png";

function Topnav() {
  return (
    <nav className="bg-slate-50 shadow-sm sticky top-0 z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <NavLink to="/" className="flex items-center gap-3">
            <img src={Icon} alt="GemAnalyzer" className="h-9 w-auto" />
            <span className="text-2xl font-bold text-blue-700 tracking-tight">
              GemAnalyzer
            </span>
          </NavLink>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-10">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-700 font-semibold border-b-2 border-blue-700 pb-1"
                  : "text-gray-700 hover:text-blue-600 transition-colors"
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/instructions"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-700 font-semibold border-b-2 border-blue-700 pb-1"
                  : "text-gray-700 hover:text-blue-600 transition-colors"
              }
            >
              Instructions
            </NavLink>

            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-700 font-semibold border-b-2 border-blue-700 pb-1"
                  : "text-gray-700 hover:text-blue-600 transition-colors"
              }
            >
              About
            </NavLink>

            <NavLink
              to="/imageuploader"
              className={({ isActive }) =>
                isActive
                  ? "bg-blue-600 text-white font-semibold px-6 py-2.5 rounded-full shadow-md"
                  : "bg-blue-600 text-white font-semibold px-6 py-2.5 rounded-full hover:bg-blue-700 transition shadow-md"
              }
            >
              Analyse
            </NavLink>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button className="text-blue-600 focus:outline-none">
              <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Topnav;