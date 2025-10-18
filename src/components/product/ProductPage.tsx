const ProductPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <div className="w-full h-16 bg-orange-500 flex items-center justify-center text-white font-bold text-xl">
        Product Page
      </div>

      <div className="flex flex-1 flex-col md:flex-row p-6 gap-6">
        <div className="flex-1 bg-white rounded shadow h-96 flex items-center justify-center">
          Product Image
        </div>

        <div className="flex-1 flex flex-col gap-4">
          <div className="bg-white rounded shadow p-4 h-32 flex items-center justify-center">
            Product Title
          </div>
          <div className="bg-white rounded shadow p-4 h-32 flex items-center justify-center">
            Product Description
          </div>
          <div className="bg-white rounded shadow p-4 h-32 flex items-center justify-center">
            Price / Buy Button
          </div>
        </div>

        <div className="w-64 bg-white rounded shadow p-4 flex flex-col gap-4">
          <div className="h-24 bg-gray-200 rounded flex items-center justify-center">
            Recommendation 1
          </div>
          <div className="h-24 bg-gray-200 rounded flex items-center justify-center">
            Recommendation 2
          </div>
          <div className="h-24 bg-gray-200 rounded flex items-center justify-center">
            Recommendation 3
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
