import React from "react";
import ScrollableCardWrapper from "./ScrollableCardHero";

const HeroBanner: React.FC = () => {
  return (
    <div className="flex flex-row items-center py-5">
      <ScrollableCardWrapper height={"100"}>
        {Array.from({ length: 10 }).map((_, index) => (
          <div
            key={index}
            className="w-full h-full border-2 border-orange-700 bg-orange-900 text-white text-7xl flex items-center justify-center"
          >
            Card {index + 1}
          </div>
        ))}
      </ScrollableCardWrapper>
    </div>
  );
};

export default HeroBanner;
