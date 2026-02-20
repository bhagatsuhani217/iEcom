import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 border-t border-white/10 overflow-hidden">

      {/* 🔵 Glow Background */}
      <div className="absolute -top-20 -left-20 w-[300px] h-[300px] bg-cyan-500/10 blur-[120px]" />
      <div className="absolute -bottom-20 -right-20 w-[300px] h-[300px] bg-blue-500/10 blur-[120px]" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-12">

        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">

          {/* Brand */}
          <div className="text-center md:text-left">
            <h2 className="text-xl font-bold text-white tracking-wide">
              NoirCart
            </h2>
            <p className="text-gray-400 text-sm mt-2 max-w-xs">
              Elevating your shopping experience with premium curated products.
            </p>
          </div>

          {/* Links */}
          <div className="flex gap-8 text-sm text-gray-400">
            <span className="hover:text-cyan-400 transition cursor-pointer">
              Privacy
            </span>
            <span className="hover:text-cyan-400 transition cursor-pointer">
              Terms
            </span>
            <span className="hover:text-cyan-400 transition cursor-pointer">
              Support
            </span>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-white/10 my-8"></div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 gap-4">

          <p>
            © {new Date().getFullYear()} NoirCart. All rights reserved.
          </p>

          <div className="flex gap-4">
            <span className="hover:text-cyan-400 cursor-pointer transition">
              Instagram
            </span>
            <span className="hover:text-cyan-400 cursor-pointer transition">
              Twitter
            </span>
            <span className="hover:text-cyan-400 cursor-pointer transition">
              LinkedIn
            </span>
          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;
