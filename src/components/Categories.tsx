import { useEffect, useState } from "react";

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

  return (
    <section className="bg-white px-6 py-16">
      <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-center text-gray-800 mb-12">
        Explore Our Smart Farming Categories
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {slices.map((title, index) => {
          // Define dynamic typography styles
          const titleTypography = ["text-xl font-bold tracking-tight"];

          const typographyClass =
            titleTypography[index % titleTypography.length];

          return (
            <div
              key={index}
              className={`bg-gray-800 text-white rounded-2xl shadow-lg p-6 flex flex-col justify-between transform transition-transform duration-300 hover:scale-105 hover:cursor-pointer`}
            >
              <div className="w-full h-32 bg-white/10 rounded-lg overflow-hidden mb-4">
                {/* <img
                  src="../assets/shop.jpg"
                  alt={title}
                  className="object-cover w-full h-full"
                /> */}
              </div>
              <h3 className={`${typographyClass} mb-2 leading-snug`}>
                {title}
              </h3>
              <p className="text-sm text-white/90 mb-4 leading-relaxed">
                Discover tools and solutions for {title.toLowerCase()}.
              </p>
              {/* <button className="self-start bg-white text-black text-sm font-medium px-5 py-2 rounded-full hover:bg-black hover:text-white transition-colors duration-200 hover:cursor-pointer">
                Browse
              </button> */}
            </div>
          );
        })}
      </div>

      <div className="flex justify-center mt-12">
        <button
          onClick={load}
          className="bg-black text-white text-sm sm:text-base font-medium px-6 py-3 rounded-full hover:bg-gray-800 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 hover:cursor-pointer"
        >
          Show {loadBtn.charAt(0).toUpperCase() + loadBtn.slice(1)}
        </button>
      </div>
    </section>
  );
};

export default Categories;
