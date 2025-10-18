import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const categories = [
  "Fish Farming",
  "Agriculture",
  "Hubs",
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
  "Edge Devices",
  "Sensors",
  "Actuators",
  "IoT Gateways / Hubs",
  "Communication Modules",
  "Power Solutions",
  "Data Loggers",
  "Environmental Monitors",
  "Edge AI Devices",
  "Smart Controllers",
  "Drones & Robotics",
  "Calibration Tools",
  "IoT Accessories",
  "Irrigation Systems",
  "Energy Management",
  "Farm Security",
  "Fleet Management",
  "Supply Chain Tracking",
  "Automation Controllers",
  "Wearable Devices for Workers",
  "AI & Machine Learning Tools"
];

const Categories = () => {
  const [slices, setSlices] = useState<string[]>(categories.slice(0, 8));
  const [loadBtn, setLoadBtn] = useState<string>("more");

  const load = () => {
    const currentSlices = slices.length;

    if (loadBtn === "more" && currentSlices >= categories.length) {
      return;
    }

    if (loadBtn === "more") {
      const nextSlices = categories.slice(0, currentSlices + 8);
      setSlices(nextSlices);
    } else if (loadBtn === "less") {
      setSlices(categories.slice(0, 8));
    }
  };

  useEffect(() => {
    // console.log(categories.length, slices.length);
    // console.log(loadBtn);
    if (categories.length === slices.length) {
      setLoadBtn("less");
    } else {
      setLoadBtn("more");
    }
  }, [slices]);

  const navigate = useNavigate();

  return (
    <section className="bg-white px-2 md:px-6 py-10 md:py-16">
      <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-center text-gray-800 mb-6 md:mb-12">
        Explore Our Smart Farming Categories
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1 md:gap-6 max-w-7xl mx-auto">
        {slices.map((title, index) => {
          const titleTypography = ["text-xl font-bold tracking-tight"];
          const typographyClass =
            titleTypography[index % titleTypography.length];

          return (
            <div
              key={index}
              className="bg-orange-200 text-black md:rounded-2xl md:shadow-lg p-2 md:p-6 flex flex-col items-start justify-between transform transition-transform duration-300 hover:scale-105 hover:cursor-pointer"
            >
              <h3
                className={`${typographyClass} mb-2 leading-snug`}
              >
                {title}
              </h3>

              <p className="text-sm text-black/90 mb-4 leading-relaxed">
                Discover tools and solutions for {title.toLowerCase()}.
              </p>

              <button className="self-start bg-orange-500 text-white text-sm font-medium px-5 py-2 rounded-full transition-colors duration-200 hover:cursor-pointer">
                Browse
              </button>
            </div>
          );
        })}
      </div>

      <div className="flex justify-center mt-12">
        <button
          onClick={() => {
            if (
              window.location.href ===
              "http://localhost:5100/farming_categories"
            ) {
              load();
            } else {
              navigate("/farming_categories");
            }
          }}
          className="bg-black text-white text-sm sm:text-base font-medium px-6 py-3 rounded-full hover:bg-gray-800 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 hover:cursor-pointer"
        >
          Show {loadBtn.charAt(0).toUpperCase() + loadBtn.slice(1)}
        </button>
      </div>
    </section>
  );
};

export default Categories;
