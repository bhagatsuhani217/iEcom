import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const FeaturedProducts = () => {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/api/products")
      .then(res => setProducts(res.data.slice(0, 3)))
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="grid md:grid-cols-3 gap-12">

      {products.map(product => (
        <div
          key={product.id}
          className="bg-slate-900/80 backdrop-blur-md p-6 rounded-3xl
                     border border-white/10
                     shadow-xl hover:shadow-cyan-500/20
                     hover:scale-105 transition duration-500"
        >
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-60 object-cover rounded-2xl"
          />

          <h3 className="mt-6 text-xl font-semibold text-white">
            {product.name}
          </h3>

          <p className="text-cyan-400 font-bold text-lg mt-2">
            ${product.price}
          </p>

          <Link
            to={`/Product/${product.id}`}
            className="inline-block mt-6 px-8 py-3 rounded-full
                       bg-cyan-500 hover:bg-cyan-400
                       transition font-semibold
                       shadow-lg shadow-cyan-500/30"
          >
            View Details
          </Link>
        </div>
      ))}

    </div>
  );
};

export default FeaturedProducts;
