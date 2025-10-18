import { useEffect, useState } from "react";
import axiosInstance from "../utils/axiosInstance";
import ScrollableTabs from "./ScrollableTabs";

// const products = [
//   { id: 1, name: "Product 1", price: "₹ 1,499", color: "bg-red-500" },
//   { id: 2, name: "Product 2", price: "₹ 1,799", color: "bg-teal-500" },
//   { id: 3, name: "Product 3", price: "₹ 2,299", color: "bg-yellow-500" },
//   { id: 4, name: "Product 4", price: "₹ 3,499", color: "bg-blue-500" },
//   { id: 5, name: "Product 5", price: "₹ 2,199", color: "bg-purple-500" },
//   { id: 6, name: "Product 6", price: "₹ 1,999", color: "bg-pink-500" },
//   { id: 7, name: "Product 7", price: "₹ 4,499", color: "bg-orange-500" },
//   { id: 8, name: "Product 8", price: "₹ 3,999", color: "bg-indigo-500" }
// ];

type Product = {
  id: number;
  name: string;
  description: string;
  price: Float32Array;
};

const OurProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    let isMounted = true;

    axiosInstance
      .get("")
      .then((res) => {
        if (isMounted) {
          setProducts(res.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });

    return () => {
      isMounted = false; // cleanup to avoid memory leak or update on unmounted component
    };
  }, []);

  return (
    <div
      className=" flex flex-col items-center justify-center bg-white font-sans"
      style={{ fontFamily: `'Poppins', sans-serif` }}
    >
      <div className="bg-white w-full p-8 border border-gray-100">
        <h2 className="text-3xl font-extrabold text-gray-800 mb-6 leading-tight tracking-tight">
          Our Products
        </h2>

        <div className="flex overflow-x-auto space-x-6 pb-8 px-4">
          <ScrollableTabs>
            {products.slice(0, 8).map((product) => (
              <div
                key={product.id}
                className="min-w-[250px] max-w-[250px] h-auto bg-white rounded-none shadow-md overflow-hidden transform hover:scale-105 transition-transform duration-300 will-change-transform"
              >
                <div className={`w-full h-40 hover:cursor-pointer `}></div>
                <div className="p-6">
                  <h3 className="text-sm font-sm text-gray-800">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 text-xs mt-2 text-wrap">
                    {product.description}
                  </p>
                  <span className="text-xl font-semibold text-blue-600 mt-3 block">
                    {product.price}
                  </span>
                  <button className="w-1/2 mt-6 py-2.5 text-xs bg-[#210F37] text-white font-semibold rounded-full transition-all duration-200 hover:bg-[#3A1B60] hover:cursor-pointer">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </ScrollableTabs>
        </div>
      </div>
    </div>
  );
};

export default OurProducts;
