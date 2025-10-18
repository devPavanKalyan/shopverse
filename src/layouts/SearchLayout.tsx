import { useNavigate } from "react-router-dom";

const SearchLayout = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col min-h-screen">
      <div className="w-screen h-10 bg-blue-400 flex items-center justify-center">
        Top Bar
      </div>
      <div className="flex flex-1 flex-col md:flex-row">
        <div className="md:w-64 h-10 bg-white flex items-center justify-center">
          Filters
        </div>
        <div className="flex-1 bg-gray-900 text-white flex items-center justify-center">
          <div className="flex flex-col items-start w-full p-2 gap-2">
            {Array.from({ length: 10 }).map((_, index) => (
              <div
                key={index}
                onClick={() => {
                  const url = `/product-slug-${index + 1}`;
                  navigate(url);
                }}
                className="w-full bg-white text-black p-2 flex flex-col justify-center items-center h-[300px]"
                role="button"
              >
                {index + 1}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchLayout;
