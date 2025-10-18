import ScrollableCardWrapper from "./ScrollableCardHero";

const HeroBanner = () => {
  return (
    <div className="py-10">
      <ScrollableCardWrapper>
        {[
          "red",
          "orange",
          "yellow",
          "green",
          "blue",
          "purple",
          "pink",
          "indigo"
        ].map((color, index) => {
          const bgColorClass = {
            red: "bg-red-500", // Bright Red
            orange: "bg-orange-500", // Bright Orange
            yellow: "bg-yellow-500", // Bright Yellow
            green: "bg-green-500", // Bright Green
            blue: "bg-blue-500", // Bright Blue
            purple: "bg-purple-500", // Bright Purple
            pink: "bg-pink-500", // Bright Pink
            indigo: "bg-indigo-500" // Bright Indigo
          }[color];

          return (
            <div
              key={index}
              className={`flex-shrink-0 ${bgColorClass} rounded-2xl p-6 flex items-center justify-center text-white text-lg font-bold shadow-lg hover:scale-105 transition-all`}
              style={{
                width: "100%", // Full width of container
                height: "100%" // Full height of parent
              }}
            >
              Card {index + 1}
            </div>
          );
        })}
      </ScrollableCardWrapper>
    </div>
  );
};

export default HeroBanner;
