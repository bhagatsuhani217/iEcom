import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Product() {
  const [product, setProduct] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/products")
      .then((response) => setProduct(response.data))
      .catch((err) => console.error(err));
  }, []);

  const filteredProducts = product.filter((item) => {
    const searchValue = search.toLowerCase();

    return (
      item.name.toLowerCase().includes(searchValue) ||
      item.price.toString().includes(searchValue) ||
      item.description?.toLowerCase().includes(searchValue)
    );
  });

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 py-24 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-cyan-500/15 blur-[160px]" />
      <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-blue-500/15 blur-[160px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-extrabold text-white mb-4">
            Our <span className="text-cyan-400">Products</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Discover carefully curated products designed to elevate your lifestyle.
          </p>
        </div>

        {/* Search */}
        <div className="flex justify-center mb-16">
          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full max-w-2xl px-6 py-4 rounded-full
                       bg-slate-900/60 backdrop-blur-md
                       border border-white/10
                       text-white placeholder-gray-400
                       focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/40
                       outline-none transition duration-300"
          />
        </div>

        {/* Grid */}
        <div className="grid gap-14 sm:grid-cols-2 lg:grid-cols-3">

          {filteredProducts.map((item) => (
            <Link key={item.id} to={`/Product/${item.id}`} className="group">

              <div className="bg-slate-900/60 backdrop-blur-lg
                              border border-white/10
                              rounded-3xl overflow-hidden
                              transition duration-500
                              hover:shadow-cyan-500/20
                              hover:-translate-y-2">

                {/* Image Section */}
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover
                               transition duration-700
                               group-hover:scale-110"
                  />

                  {/* Bottom Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                  {/* Price */}
                  <div className="absolute bottom-4 left-6 text-cyan-400 text-xl font-bold">
                    ${item.price}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-white text-lg font-semibold mb-4">
                    {item.name}
                  </h3>

                  <button
                    className="w-full py-3 rounded-full
                               bg-white/10 backdrop-blur-md
                               border border-white/20
                               hover:bg-cyan-500 hover:border-cyan-500
                               transition duration-300
                               font-semibold text-white"
                  >
                    View Details
                  </button>
                </div>

              </div>

            </Link>
          ))}

        </div>

        {/* No Results */}
        {filteredProducts.length === 0 && (
          <p className="text-center text-gray-400 mt-16 text-lg">
            No products found.
          </p>
        )}

      </div>
    </section>
  );
}

export default Product;
