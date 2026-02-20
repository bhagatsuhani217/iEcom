import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { CartContext } from "../Context/CartContext";

function Productdetails() {
  const [count, setCount] = useState(0);
  const { id } = useParams();
  const [data, setData] = useState(null);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/products")
      .then((response) => {
        const product = response.data.find(
          (item) => item.id === parseInt(id)
        );
        setData(product);
      })
      .catch((err) => console.log(err));
  }, [id]);

  if (!data)
    return (
      <div className="flex items-center justify-center min-h-screen text-white text-xl">
        Loading.....
      </div>
    );

  // ✅ FIXED FUNCTION (UI same)
  function handleAddToCart() {
    addToCart({ ...data, quantity: 1 });
  }

 return (
  <section className="relative min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 py-24 overflow-hidden">

    {/* 🔵 Hero Style Glow */}
    <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-cyan-500/20 blur-[160px]" />
    <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-blue-500/20 blur-[160px]" />

    <div className="relative z-10 max-w-7xl mx-auto px-6">

      <div className="grid lg:grid-cols-2 gap-16 items-center">

        {/* 🖼 Image */}
        <div className="group relative">
          <img
            src={data.image}
            alt={data.name}
            className="w-full h-[500px] object-cover rounded-3xl
                       shadow-2xl transition duration-700
                       group-hover:scale-105"
          />
        </div>

        {/* 📦 Details Card */}
        <div className="bg-slate-900/60 backdrop-blur-xl
                        border border-white/10
                        p-10 rounded-3xl shadow-xl text-white">

          <h1 className="text-4xl font-bold mb-4">
            {data.name}
          </h1>

          <p className="text-gray-400 mb-6">
            {data.description}
          </p>

          {/* ⭐ Rating */}
          <div className="flex items-center gap-2 mb-6">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="text-cyan-400 text-lg">★</span>
            ))}
            <span className="text-gray-400 text-sm">(120 Reviews)</span>
          </div>

          {/* 💰 Price */}
          <div className="text-3xl font-bold text-cyan-400 mb-8">
            ${data.price}
          </div>

          {/* 🎨 Options */}
          <div className="flex flex-wrap gap-6 mb-8">

            <div>
              <p className="mb-2 text-sm text-gray-400">Color</p>
              <div className="flex gap-3">
                <span className="w-6 h-6 rounded-full bg-gray-600 border border-white/20"></span>
                <span className="w-6 h-6 rounded-full bg-blue-500 border border-white/20"></span>
                <span className="w-6 h-6 rounded-full bg-cyan-400 border border-white/20"></span>
              </div>
            </div>

            <div>
              <p className="mb-2 text-sm text-gray-400">Size</p>
              <select className="bg-slate-900/60 border border-white/20 px-4 py-2 rounded-xl text-white">
                <option>SM</option>
                <option>M</option>
                <option>L</option>
                <option>XL</option>
              </select>
            </div>

          </div>

          {/* 🛒 Buttons */}
          <div className="flex gap-4">

            <button
              onClick={handleAddToCart}
              className="px-8 py-3 rounded-2xl font-semibold
                         bg-cyan-500 hover:bg-cyan-600
                         transition duration-300 shadow-lg"
            >
              Add To Cart
            </button>

            <button className="w-12 h-12 rounded-2xl
                               bg-white/10 backdrop-blur-md
                               border border-white/20
                               hover:bg-white/20 transition">
              ❤️
            </button>

          </div>

        </div>
      </div>
    </div>
  </section>
);


}

export default Productdetails;
