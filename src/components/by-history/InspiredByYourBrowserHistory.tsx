const InspiredByYourBrowserHistory = () => {
  return (
    <section
      className="p-8 bg-white mb-12 font-sans"
      style={{ fontFamily: `'Poppins', sans-serif` }}
    >
      <h2 className="text-2xl md:text-xl text-center font-extrabold text-gray-800 mb-6 tracking-tight">
        Inspired by Your Browsing History
      </h2>

      <div className="flex overflow-x-auto space-x-6 pb-4 md:px-4 no-scrollbar scroll-smooth py-5">
        {[...Array(8)].map((_, index) => (
          <div
            key={index}
            className="min-w-[220px] h-[300px] border border-gray-100 rounded-none p-5 shadow-sm hover:shadow-md transform hover:scale-105 transition-transform duration-300 will-change-transform flex flex-col justify-center"
          >
            {/* <div
              key={product.id}
              className="min-w-[250px] max-w-[250px] h-auto bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 will-change-transform mr-5"
            > */}
            <div className="space-y-3 text-center">
              <div className="w-20 h-20 mx-auto bg-gray-200 rounded-full mb-2" />
              <p className="text-lg font-semibold text-gray-900">
                Product {index + 1}
              </p>
              <p className="text-sm text-gray-600">
                Suggested for your interests
              </p>
              <button className="mt-4 px-4 py-2 bg-black text-white text-sm  rounded-full hover:bg-gray-800 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 hover:cursor-pointer">
                View Product
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default InspiredByYourBrowserHistory;

// import axios from "axios";
// import { useEffect, useState } from "react";
// import ScrollableTabs from "../ScrollableTabs";
// import ProductCard from "../product/ProductCard";

// interface ProductCardProps {
//   productId: string;
//   image: string;
//   title: string;
//   price: string;
//   description: string;
//   type: string; // Fix: previously 'category'
// }

// const InspiredByYourBrowserHistory = () => {
//   const [products, setProducts] = useState<ProductCardProps[]>([]);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const res = await axios.get("http://localhost:9090/api/products/cards");
//         setProducts(res.data);
//       } catch (err) {
//         console.error("Failed to fetch product cards", err);
//       }
//     };

//     fetchProducts();
//   }, []);

//   return (
//     <section className="p-8 bg-white mb-12 font-sans">
//       <h2 className="text-2xl md:text-xl font-extrabold text-gray-800 mb-6 tracking-tight">
//         Inspired by Your Browsing History
//       </h2>

//       <ScrollableTabs>
//         {products.map((product, index) => (
//           <div
//             key={index}
//             className="min-w-[220px] h-[300px] bg-gray-50 rounded-none p-5 shadow-sm hover:shadow-md transition-transform duration-300 hover:scale-[1.03] flex flex-col justify-center"
//           >
//             <div className="space-y-3 text-center">
//               <ProductCard prop={product} />
//             </div>
//           </div>
//         ))}
//       </ScrollableTabs>
//     </section>
//   );
// };

// export default InspiredByYourBrowserHistory;
