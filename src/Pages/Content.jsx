import React from "react";
import { Link } from "react-router-dom";

const Content = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 overflow-hidden py-28">

      {/* Glow Effects */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-cyan-500/20 blur-[160px]" />
      <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-blue-500/20 blur-[160px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">

        {/* ================= HERO STYLE CONTENT BLOCK ================= */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-32">

          {/* Left Big Text */}
          <div className="text-white">
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-8">
              Experience <span className="text-cyan-400">Next-Gen</span><br />
              Online Shopping
            </h1>

            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              We combine premium quality products with a seamless digital
              experience. Every click, every purchase — designed for comfort,
              speed and satisfaction.
            </p>

            <Link
              to="/Product"
              className="inline-block bg-gradient-to-r 
                         from-cyan-500 to-blue-600
                         hover:from-cyan-400 hover:to-blue-500
                         px-8 py-4 rounded-full
                         font-semibold shadow-lg shadow-cyan-500/30
                         transition duration-300"
            >
              Explore Collection
            </Link>
          </div>

          {/* Right Floating Card */}
          <div className="relative">
            <div className="bg-slate-900/70 backdrop-blur-xl 
                            border border-white/10
                            rounded-3xl p-12 shadow-2xl
                            hover:shadow-cyan-500/20
                            transition duration-500">

              <p className="text-6xl font-extrabold text-cyan-400">10K+</p>
              <p className="text-gray-300 mt-4 text-lg">
                Happy Customers Worldwide
              </p>

              <div className="mt-8 h-1 w-20 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"></div>
            </div>
          </div>

        </div>

        {/* ================= FEATURES – HORIZONTAL STYLE ================= */}
        <div className="space-y-10 mb-32">

          {[
            {
              title: "Fast & Reliable Delivery",
              desc: "Lightning fast shipping with real-time tracking updates.",
              emoji: "🚚",
            },
            {
              title: "Secure Payment System",
              desc: "Encrypted and safe checkout experience.",
              emoji: "💳",
            },
            {
              title: "Premium Quality Products",
              desc: "Every product is carefully curated and quality checked.",
              emoji: "⭐",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row items-center
                         bg-slate-900/70 backdrop-blur-md
                         border border-white/10
                         rounded-3xl p-8
                         hover:shadow-cyan-500/20
                         hover:-translate-y-2
                         transition duration-300"
            >
              <div className="text-5xl mr-8 mb-6 md:mb-0">
                {item.emoji}
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-400">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}

        </div>

        {/* ================= FINAL CTA ================= */}
        <div className="text-center bg-gradient-to-r 
                        from-cyan-500/10 to-blue-600/10
                        border border-white/10
                        backdrop-blur-xl
                        rounded-3xl p-16">

          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
            Your Style. Your Choice. <span className="text-cyan-400">Your Store.</span>
          </h2>

          <p className="text-gray-300 mb-8 text-lg">
            Upgrade your shopping experience today and discover premium
            collections crafted for modern lifestyles.
          </p>

          <Link
            to="/Product"
            className="inline-block bg-gradient-to-r 
                       from-cyan-500 to-blue-600
                       hover:from-cyan-400 hover:to-blue-500
                       px-10 py-4 rounded-full
                       font-semibold shadow-lg shadow-cyan-500/30
                       transition duration-300"
          >
            Start Shopping
          </Link>
        </div>

      </div>
    </section>
  );
};

export default Content;
