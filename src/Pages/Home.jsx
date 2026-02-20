import { Link } from "react-router-dom";
import FeaturedProducts from "./FeaturedProducts";

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 overflow-hidden">

      {/* Soft Glow Background Effects */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-cyan-500/20 blur-[160px]" />
      <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-indigo-500/20 blur-[160px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 min-h-screen flex flex-col md:flex-row items-center">

        {/* LEFT CONTENT */}
        <div className="flex-1 text-white">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Elevate Your <span className="text-cyan-400">Lifestyle</span><br />
            With Premium Picks
          </h1>

          <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-xl">
            Discover fashion, gadgets & essentials curated
            to match your vibe and personality.
          </p>

          <Link
            to="/product"
            className="inline-block mt-10 px-10 py-4 rounded-full
                       bg-gradient-to-r from-cyan-500 to-blue-600
                       hover:from-cyan-400 hover:to-blue-500
                       transition duration-300
                       font-semibold text-lg shadow-xl shadow-cyan-500/30"
          >
            Explore Now
          </Link>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex-1 mt-12 md:mt-0 flex justify-center relative">

          <div className="backdrop-blur-xl bg-white/5 p-4 rounded-3xl border border-white/10 shadow-2xl">
            <img
              src="https://plus.unsplash.com/premium_photo-1684785617081-2962277d3ac3?q=80&w=2070&auto=format&fit=crop"
              alt="ecommerce model"
              className="w-[280px] md:w-[420px] rounded-2xl
                         hover:scale-105 transition duration-500"
            />
          </div>

        </div>
      </div>

      {/* ================= FEATURED PRODUCTS ================= */}

      <div className="max-w-7xl mx-auto relative z-10 mt-24 px-6 md:px-12">

        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-20 text-white">
          Featured <span className="text-cyan-400">Products</span>
        </h2>

        <FeaturedProducts />
      </div>
    </section>
  );
};

export default Hero;
