import { useEffect, useState } from "react";
import axiosInstance from "../utils/axiosInstance";

const productsRaw = [
  { id: 1, name: "Product 1", description: "description", price: 1499 },
  { id: 2, name: "Product 2", description: "description", price: 1799 },
  { id: 3, name: "Product 3", description: "description", price: 2299 },
  { id: 4, name: "Product 4", description: "description", price: 3499 },
  { id: 5, name: "Product 5", description: "description", price: 2199 },
  { id: 6, name: "Product 6", description: "description", price: 1999 },
  { id: 7, name: "Product 7", description: "description", price: 4499 },
  { id: 8, name: "Product 8", description: "description", price: 3999 }
];

type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
};

const OurProducts = () => {
  const [products, setProducts] = useState<Product[]>(productsRaw);

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
      className="flex flex-col items-center justify-center bg-white font-sans"
      style={{ fontFamily: `'Poppins', sans-serif` }}
    >
      <div className="w-full px-4 md:p-8 bg-white">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 md:mb-8 leading-tight tracking-tight text-center md:text-left">
          Our Products
        </h2>

        <div className="flex overflow-x-auto space-x-6 pb-4 md:px-4 no-scrollbar scroll-smooth py-5">
          {products.slice(0, 8).map((product) => (
            <div
              key={product.id}
              className="min-w-[250px] max-w-[250px] h-auto bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 will-change-transform mr-5"
            >
              <div className="w-full h-40 bg-gray-100 hover:cursor-pointer"></div>

              <div className="p-4 flex flex-col justify-between h-fit">
                <div>
                  <h3 className="text-sm font-semibold text-gray-800 truncate">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 text-[12px] mt-2 line-clamp-3">
                    {product.description}
                  </p>
                </div>

                <div className="mt-5">
                  <span className="text-lg md:text-xl font-bold text-blue-600">
                    {product.price}
                  </span>
                  <button className="w-full mt-3 py-2.5 text-xs md:text-sm bg-orange-500 text-white font-semibold rounded-full transition-all duration-200 hover:bg-orange-600">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurProducts;
