import React from "react";
import { FcRatings } from "react-icons/fc";

export default function Productpage() {
    const product = [  {

        name: "iPhone 15 Pro Max",
        image : "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
        badge : "old",
        rating: "175",
        newprice : 4000000,
        oldprice : 4500000,
        space : "64GB",
    },

    {
        name: "iPhone 13 Pro Max",
        image : "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRhh8KXU4scoop_NyJivNalnZUUwK74k1yUjyBLttXtCSSHRG5nMANI-b4gZq1wzL6jsKLqnffTYxNT_oSfusFaeJ7BauTgnWnC3VmP-5sqBVsaJTr2sFKlikFUsUZTJXz8PQ&usqp=CAc",
        badge : "old",
        rating: "175",
        newprice : 5000000,
        oldprice : 6700000,
        space : "128GB",
    },

    {
        name: "samsung s23 ultra",
        image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToIErmAzNqXZboy108dVZi6utux9zbZUQY8Q&s",
        rating :  "175",
        newprice : 700000,
        oldprice : 500000,
        space : "256GB",
    },
    ]





  return (
    <section className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      { product.map((p, index) => ( 
        <div  key={index}    className ="bg-white w-80 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 overflow-hidden">
        
        {/* Product Image */}
        <div className="relative">
          <img
            src={p.image}
            alt="Product"
            className="w-full h-56 object-cover"
          />

          {/* Badge */}
          <span className="absolute top-3 left-3 bg-black text-white text-xs px-3 py-1 rounded-full">
            New
          </span>
        </div>

        {/* Product Info */}
        <div className="p-5">
          <h2 className="text-lg font-semibold text-gray-800">
            {p.name}
          </h2>

          <p className="text-sm text-gray-500 mt-1">
          {p.space}
          </p>

          {/* Rating */}
          <div className="flex items-center mt-3 space-x-1">
            <span className="text-yellow-400">★★★★★</span>{p.rating}
            <span className="text-sm text-gray-500"></span>
          </div>

          {/* Price */}
          <div className="mt-4 flex items-center justify-between">
            <div>
              <p className="text-xl font-bold text-gray-900">{p.newprice}</p>
              <p className="text-sm text-gray-400 line-through">
                {p.oldprice}
              </p>
            </div>

            <button className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition">
              Add to Cart
            </button>
          </div>
        </div>
      </div> ))
        
      };
    </section>
  );
}

