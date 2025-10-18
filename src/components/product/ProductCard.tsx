import React from "react";

interface ProductCardProps {
  productId: string;
  image: string;
  title: string;
  price: string;
  description: string;
  type: string;
}

interface Props {
  prop: ProductCardProps;
}

const ProductCard: React.FC<Props> = ({ prop }) => {
  return (
    <div className="w-full bg-white border rounded-2xl shadow-md hover:shadow-xl transition duration-200 overflow-hidden">
      <img
        src={prop.image}
        alt={prop.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <span className="text-sm text-gray-500 uppercase tracking-wide">
          {prop.type}
        </span>
        <h2 className="mt-1 text-xl font-bold text-gray-800">{prop.title}</h2>
        <p className="mt-2 text-gray-600 text-sm line-clamp-2">
          {prop.description}
        </p>
        <p className="mt-3 text-lg font-semibold text-green-700">
          {prop.price}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
