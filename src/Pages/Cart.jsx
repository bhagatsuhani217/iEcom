import React, { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, removeFromCart } = useContext(CartContext);

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 text-white py-16 px-6">

      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-extrabold mb-12">
          Your <span className="text-cyan-400">Shopping Cart</span>
        </h1>

        {cart.length === 0 ? (
          <div className="text-center mt-20">
            <p className="text-gray-400 text-lg">Your cart is empty.</p>
            <Link
              to="/Product"
              className="inline-block mt-6 px-8 py-3 rounded-full
                         bg-cyan-500 hover:bg-cyan-400 transition
                         font-semibold shadow-lg shadow-cyan-500/30"
            >
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div className="grid md:grid-cols-3 gap-10">

            {/* CART ITEMS */}
            <div className="md:col-span-2 space-y-8">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col md:flex-row items-center
                             bg-slate-900/80 backdrop-blur-md
                             border border-white/10
                             rounded-3xl p-6
                             shadow-xl hover:shadow-cyan-500/20
                             transition duration-300"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-40 h-40 object-cover rounded-2xl"
                  />

                  <div className="flex-1 md:ml-6 mt-6 md:mt-0">
                    <h2 className="text-xl font-semibold">{item.name}</h2>
                    <p className="text-cyan-400 font-bold mt-2">
                      ${item.price}
                    </p>
                    <p className="text-gray-400 mt-2">
                      Quantity: {item.quantity}
                    </p>

                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="mt-4 px-6 py-2 rounded-full
             bg-black/40 backdrop-blur-md
             border border-white/10
             hover:bg-black/60
             transition duration-300
             font-medium text-white"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* ORDER SUMMARY */}
            <div className="bg-slate-900/80 backdrop-blur-md
                            border border-white/10
                            rounded-3xl p-8 shadow-xl h-fit">
              <h2 className="text-2xl font-bold mb-6">
                Order <span className="text-cyan-400">Summary</span>
              </h2>

              <div className="flex justify-between text-gray-300 mb-4">
                <span>Subtotal</span>
                <span>${total.toFixed(2)}</span>
              </div>

              <div className="flex justify-between text-gray-300 mb-6">
                <span>Shipping</span>
                <span>Free</span>
              </div>

              <div className="border-t border-white/10 pt-4 flex justify-between text-lg font-bold">
                <span>Total</span>
                <span className="text-cyan-400">
                  ${total.toFixed(2)}
                </span>
              </div>

              <button
                className="w-full mt-8 py-3 rounded-full
                           bg-gradient-to-r from-cyan-500 to-blue-600
                           hover:from-cyan-400 hover:to-blue-500
                           transition duration-300
                           font-semibold shadow-lg shadow-cyan-500/30"
              >
                Proceed to Checkout
              </button>
            </div>

          </div>
        )}

      </div>
    </section>
  );
};

export default Cart;
