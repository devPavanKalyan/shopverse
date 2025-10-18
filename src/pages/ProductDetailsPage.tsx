import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import type { Product } from "../services/Product";

// type MediaItem = {
//   position: number;
//   url: string;
//   type: string;
//   format: string;
//   sizeInBytes: number;
//   title: string;
//   altText: string;
// };

// type AttributeGroup = {
//   title: string;
//   priority: number;
//   values: Record<string, string>;
// };

// type Information = {
//   title: string;
//   priority: number;
//   points: string[];
// };

// type Manufacturer = {
//   name: string;
//   address: string;
//   email: string;
//   phone: string;
//   website: string;
//   certifications: string[];
//   warrantyPeriod: string;
// };

// type Product = {
//   name: string;
//   slug: string;
//   description: string;
//   price: number;
//   quantity: number;
//   type: string;
//   infoSections: Information[];
//   attributes: AttributeGroup[];
// };

// type DeviceResponse = {
//   product: Product;
//   manufacturer: Manufacturer;
//   media: MediaItem[];
// };

const ProductDetailsPage = () => {
  const { slug } = useParams();
  const [product, setProduct] = useState<Product>();
  //   const [selectedMedia, setSelectedMedia] = useState<MediaItem | null>(null);

  useEffect(() => {
    fetch(`http://localhost:9090/api/products/slug/${slug}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        // setSelectedMedia(data.media[0]);
      })
      .catch((err) => console.error("Failed to load product", err));
  }, [slug]);

  if (!product)
    return (
      <div className="p-12 animate-pulse space-y-4 text-gray-400">
        <div className="h-6 w-1/3 bg-gray-200 rounded"></div>
        <div className="h-48 w-full bg-gray-200 rounded"></div>
      </div>
    );

  //   const { product, manufacturer, media } = device;

  return (
    <div className="mx-auto px-4 py-12 space-y-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Media Viewer 
        <div className="space-y-5">
          <div className="overflow-hidden bg-white border border-gray-200">
            {selectedMedia?.type === "image" ? (
              <img
                src={selectedMedia.url}
                alt={selectedMedia.altText}
                className="w-full object-contain h-96"
              />
            ) : (
              <video controls className="w-full h-96">
                <source
                  src={selectedMedia?.url}
                  type={`video/${selectedMedia?.format}`}
                />
              </video>
            )}
          </div>
          <div className="flex gap-3 overflow-x-auto scrollbar-hide">
            {media.map((item) => (
              <div
                key={item.position}
                className={`rounded-xl w-16 h-16 cursor-pointer overflow-hidden transition-transform duration-200 hover:scale-105 hover:ring-2 ${
                  item.url === selectedMedia?.url
                    ? "border-2 border-blue-500"
                    : "border border-gray-200"
                }`}
                onClick={() => setSelectedMedia(item)}
              >
                {item.type === "image" ? (
                  <img
                    src={item.url}
                    alt={item.altText}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <video className="w-full h-full object-cover" muted>
                    <source src={item.url} />
                  </video>
                )}
              </div>
            ))}
          </div>
        </div> */}

        {/* Product Info */}
        <div className="space-y-6 text-gray-800 col-span-1">
          <div>
            <h1 className="text-4xl font-bold tracking-tight">
              {product.name}
            </h1>
            <p className="text-lg text-gray-600 mt-2">{product.description}</p>
          </div>
          <div className="space-y-1">
            <p className="text-3xl font-bold text-green-600">
              ₹{product.price.toFixed(2)}
            </p>
            <p className="text-sm line-through text-gray-400">
              MRP: ₹{(product.price * 1.2).toFixed(0)}
            </p>
            <p className="text-sm text-green-700">Inclusive of all taxes</p>
          </div>

          {/* {product.information.find((i) =>
            i.title.toLowerCase().includes("feature")
          ) && (
            <div>
              <h3 className="text-xl font-semibold mb-2 border-b pb-1 text-slate-800">
                Key Features
              </h3>
              <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700">
                {product.information
                  .find((i) => i.title.toLowerCase().includes("feature"))
                  ?.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
              </ul>
            </div>
          )}

          {product.information.find((i) =>
            i.title.toLowerCase().includes("usage")
          ) && (
            <div>
              <h3 className="text-xl font-semibold mb-2 border-b pb-1 text-slate-800">
                Usage Instructions
              </h3>
              <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700">
                {product.information
                  .find((i) => i.title.toLowerCase().includes("usage"))
                  ?.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
              </ul>
            </div>
          )} */}
        </div>

        {/* Action Panel */}
        <div className="rounded-2xl p-6 space-y-5 border border-gray-200 h-fit">
          <div className="text-3xl font-bold text-green-600">
            ₹{product.price.toFixed(2)}
          </div>
          <p
            className={`text-sm font-semibold ${
              product.quantity > 0 ? "text-green-700" : "text-red-600"
            }`}
          >
            {product.quantity > 0 ? "In Stock" : "Out of Stock"}
          </p>
          <p className="text-sm text-gray-600 font-semibold">
            {/* Sold by: <strong>{manufacturer.name}</strong> */}
            Sold by: Blah
          </p>

          <div className="mt-2">
            <label htmlFor="quantity" className="text-sm font-semibold">
              Quantity:
            </label>
            <select
              id="quantity"
              className="mt-1 w-full border rounded-xl p-2 text-sm font-semibold"
            >
              {[...Array(10)].map((_, i) => (
                <option key={i}>{i + 1}</option>
              ))}
            </select>
          </div>

          <button className="w-full flex items-center justify-center gap-2 bg-black text-white font-medium py-3 rounded-xl hover:bg-gray-800 transition">
            Add to Cart
          </button>

          <button className="w-full flex items-center justify-center gap-2 bg-blue-600 text-white font-medium py-3 rounded-xl hover:bg-blue-700 transition">
            Buy Now
          </button>

          <button className="w-full flex items-center justify-center gap-2 border border-gray-300 text-gray-600 py-3 rounded-xl hover:bg-gray-50 transition">
            Add to Wishlist
          </button>

          <div className="text-xs text-gray-500 pt-4 border-t font-semibold">
            Delivered by Shopverse <br />
            Secure transaction
          </div>
        </div>
      </div>

      {/* Attributes 
      <ProductAttributes
        attributes={[
          ...product.attributes,
          {
            title: "Manufacturer Details",
            priority: 99,
            values: {
              Name: manufacturer.name,
              Address: manufacturer.address,
              Email: manufacturer.email,
              Phone: manufacturer.phone,
              Website: manufacturer.website,
              Certifications: manufacturer.certifications.join(", "),
              Warranty: manufacturer.warrantyPeriod
            }
          }
        ]}
      /> */}

      {/* Manufacturer Section 
      <div className="mt-16 border-t pt-8 space-y-8">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">
          From the Manufacturer
        </h2>
        <div className="grid gap-8 md:grid-cols-2">
          {media.map(
            (m, idx) =>
              m.type === "image" && (
                <img
                  key={`img-${idx}`}
                  src={m.url}
                  alt={`Manufacturer image ${idx + 1}`}
                  className="w-full h-auto rounded-xl shadow"
                />
              )
          )}
        </div> 

        {media.find((m) => m.type === "video") && (
          <div className="w-full">
            <h3 className="text-xl font-semibold mb-2 text-slate-800">
              Demo Video
            </h3>
            {media.map(
              (vid, idx) =>
                vid.type === "video" && (
                  <video
                    key={`vid-${idx}`}
                    src={vid.url}
                    controls
                    className="w-full rounded-xl shadow"
                  />
                )
            )}
          </div>
        )} 
      </div>  */}
    </div>
  );
};

export default ProductDetailsPage;
