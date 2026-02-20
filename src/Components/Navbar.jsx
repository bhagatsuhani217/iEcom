import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { CartContext } from "../Context/CartContext";

function Navbar({ title }) {
  const { cart } = useContext(CartContext) || { cart: [] };
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Product", path: "/Product" },
    { name: "Content", path: "/Content" },
    { name: "Contact", path: "/Contact" },
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-slate-950/60 border-b border-white/10 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* LOGO */}
        <Link to="/" className="flex items-center space-x-3 group">
          <div className="w-10 h-10 flex items-center justify-center 
                          rounded-full bg-gradient-to-tr 
                          from-cyan-400 to-blue-600 
                          shadow-lg shadow-cyan-500/30 
                          group-hover:scale-110 transition duration-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="white"
              strokeWidth="2"
              viewBox="0 0 24 24"
              className="w-5 h-5"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
          </div>

          <span className="text-2xl font-extrabold bg-gradient-to-r 
                           from-cyan-400 to-blue-500 
                           bg-clip-text text-transparent">
            {title}
          </span>
        </Link>

        {/* NAV LINKS */}
        <nav className="hidden md:flex items-center space-x-8 text-white font-medium">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;

            return (
              <Link
                key={link.name}
                to={link.path}
                className={`relative group transition ${
                  isActive ? "text-cyan-400" : "hover:text-cyan-400"
                }`}
              >
                {link.name}

                {/* Animated underline */}
                <span
                  className={`absolute left-0 -bottom-1 h-[2px] 
                              bg-gradient-to-r from-cyan-400 to-blue-500
                              transition-all duration-300
                              ${isActive ? "w-full" : "w-0 group-hover:w-full"}`}
                ></span>
              </Link>
            );
          })}
        </nav>

        {/* CART BUTTON */}
        <Link
          to="/Cart"
          className="relative flex items-center space-x-2 
                     bg-gradient-to-r from-cyan-500 to-blue-600
                     hover:from-cyan-400 hover:to-blue-500
                     transition duration-300
                     px-5 py-2 rounded-full font-semibold
                     shadow-lg shadow-cyan-500/30"
        >
          <ShoppingCartIcon className="w-5 h-5 text-white" />
          <span className="text-white">Cart</span>

          {cart.length > 0 && (
            <span className="absolute -top-2 -right-2 
                             bg-white text-slate-900 
                             text-xs font-bold 
                             px-2 py-0.5 rounded-full">
              {cart.length}
            </span>
          )}
        </Link>

      </div>

      {/* Soft Glow Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 blur-3xl"></div>
    </header>
  );
}

export default Navbar;
