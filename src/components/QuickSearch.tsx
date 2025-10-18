import { useState } from "react";

const QuickSearch = () => {
  const [filters, setFilters] = useState<string[]>([]);

  const categories = [
    "All",
    "Fish Farming",
    "Agriculture",
    "Irrigation",
    "Water Testing",
    "Smart Sensors",
    "Soil Monitoring",
    "Climate Control",
    "Crop Management",
    "Livestock Monitoring",
    "Pest Control",
    "Greenhouse Automation",
    "Drones & Imaging",
    "Weather Stations",
    "Nutrient Analysis",
    "Seedling Systems",
    "Aquaponics",
    "Hydroponics",
    "Water Quality",
    "Data Analytics",
    "Edge Devices"
  ];

  return (
    <div
      className="bg-white font-sans"
      style={{ fontFamily: `'Poppins', sans-serif` }}
    >
      <div className="flex gap-3 overflow-x-auto py-1 mt-2 px-10 scroll-smooth whitespace-nowrap [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
        {categories.map((cat) => {
          const isSelected =
            cat === "All" ? filters.length === 0 : filters.includes(cat);

          return (
            <button
              key={cat}
              onClick={() => setFilters(cat === "All" ? [] : [cat])}
              className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium border transition-all duration-200
              ${
                isSelected
                  ? "bg-[#210F37] text-white border-[#210F37]"
                  : "bg-white text-gray-800 border-gray-300 hover:bg-gray-200"
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default QuickSearch;
