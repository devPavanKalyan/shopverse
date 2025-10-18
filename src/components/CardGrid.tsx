import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import type { Product } from "../services/Product";

const CardGrid: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [err, setError] = useState<string>();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get<Product[]>(
          "http://localhost:9090/api/products"
        );
        if (result.status === 200) {
          setProducts(result.data);
          console.log(result.data);
        } else {
          throw new Error("Internal Server Error");
        }
      } catch (error: any) {
        setError(
          error.message || "Something went wrong! Please try again later."
        );
      }
    };

    fetchData();
  }, []);

  if (err) {
    return null;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
      {products.map((product) => (
        <div
          key={product.id}
          className="bg-white h-full p-2 m-2 rounded-md shadow-md hover:scale-105 flex flex-col justify-center items-center h-[400px]"
          role="button"
          onClick={() => {
            navigate(`/product/${product.slug}`);
          }}
        >
          <img
            src="../assets/shop.jpg"
            alt={product.name}
            className="mb-2 w-20 h-20"
          />
          <p className="font-semibold">{product.name}</p>
          <p>{product.category.join(", ")}</p>
          <p>₹{product.price}</p>
          <p>{product.description}</p>
        </div>
      ))}
    </div>
  );
};

export default CardGrid;
