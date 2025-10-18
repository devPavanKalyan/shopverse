// const Product = () => {
//     const product = {
//       name: "Smart Aqua Sensor",
//       type: "IoT Water Quality Device",
//       price: "₹14,999",
//       status: "In Stock",
//       features: [
//         "Real-time DO, pH, and Temperature monitoring",
//         "Cloud connectivity with alert system",
//         "Water-quality prediction with AI",
//         "Durable & waterproof hardware"
//       ],
//       description:
//         "Smart Aqua Sensor is an IoT-enabled device tailored for fish farming, irrigation, and industrial water monitoring. It ensures safe aquatic environments and operational efficiency by providing real-time metrics and insights."
//     };

//     return (
//       <div className="max-w-6xl mx-auto px-4 py-8">
//         {/* Header Section */}
//         <div className="bg-gradient-to-br from-blue-600 via-sky-500 to-cyan-400 text-white rounded-xl p-6 mb-6 shadow">
//           <h1 className="text-3xl font-bold mb-1">{product.name}</h1>
//           <p className="text-sm font-medium opacity-90">{product.type}</p>
//         </div>

//         {/* Content Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
//           {/* Product Info */}
//           <div>
//             <h2 className="text-xl font-semibold mb-2">Product Description</h2>
//             <p className="text-gray-700 mb-4">{product.description}</p>

//             <div className="mb-6">
//               <span className="text-2xl font-bold text-blue-700">
//                 {product.price}
//               </span>
//               <span className="ml-3 text-sm text-green-600 font-medium">
//                 {product.status}
//               </span>
//             </div>

//             <button className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
//               Add to Cart
//             </button>
//           </div>

//           {/* Features List */}
//           <div>
//             <h2 className="text-xl font-semibold mb-4">Key Features</h2>
//             <ul className="list-disc pl-5 space-y-2 text-gray-700">
//               {product.features.map((f, i) => (
//                 <li key={i}>{f}</li>
//               ))}
//             </ul>
//           </div>
//         </div>

//         {/* Future: Related Products */}
//         {/* <section className="mt-12">
//             <h3 className="text-lg font-semibold mb-4">You might also like</h3>
//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
//               // Related product cards
//             </div>
//           </section> */}
//       </div>
//     );
//   };

//   export default Product;

//   import React from "react";

// interface ProductCardProps {
//   product: {
//     id: string;
//     productId: string;
//     name: string;
//     model: string;
//     brand: string;
//     description: string;
//     category: string;
//     imageUrl: string;
//     price: number;
//     warrantyPeriod: string;
//     returnPolicy: string;
//     shippingInfo: string;
//   };
//   details: any;
// }

// const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
//   return (
//     <div className="bg-white rounded-lg border border-gray-200 hover:shadow-md transition flex flex-col overflow-hidden group p-2 w-fit min-w-[140px] max-w-[200px] mx-auto">
//       {/* Image */}
//       <div className="w-full h-28 bg-gray-50 flex items-center justify-center overflow-hidden rounded-md">
//         <img
//           src={product.imageUrl}
//           alt={product.name}
//           className="object-contain h-full group-hover:scale-105 transition-transform"
//         />
//       </div>

//       {/* Content */}
//       <div className="flex flex-col items-center mt-2">
//         {/* Title */}
//         <h2 className="text-xs font-semibold text-gray-800 text-center line-clamp-2 leading-tight">
//           {product.name}
//         </h2>

//         {/* Price */}
//         <span className="text-sm font-bold text-blue-600 mt-1">
//           ₹ {product.price.toLocaleString()}
//         </span>

//         {/* Button */}
//         <div>
//           <button className="mt-2 px-3 py-1 bg-blue-600 hover:bg-blue-700 text-white text-[10px] rounded-full transition">
//             ❤️
//           </button>
//           <button className="mt-2 px-3 py-1 bg-blue-600 hover:bg-blue-700 text-white text-[10px] rounded-full transition">
//             Add to cart.
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductCard;
