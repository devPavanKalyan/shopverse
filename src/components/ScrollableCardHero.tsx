import clsx from "clsx";
import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";

const ScrollableCardWrapper = ({
  children,
  height
}: {
  children: React.ReactNode;
  height: any;
}) => {
  const originalSlides = React.Children.toArray(children);
  const totalSlides = originalSlides.length;
  const [currentIndex, setCurrentIndex] = useState(1);
  const [isAnimating, setIsAnimating] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);
  const [chevHidden, setChevHidden] = useState(true);

  const slides = [
    originalSlides[totalSlides - 1],
    ...originalSlides,
    originalSlides[0]
  ];

  const goToSlide = (index: number) => {
    setIsAnimating(true);
    setCurrentIndex(index);
  };

  const nextSlide = () => goToSlide(currentIndex + 1);
  const prevSlide = () => goToSlide(currentIndex - 1);

  useEffect(() => {
    const interval = setInterval(() => nextSlide(), 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  useEffect(() => {
    if (currentIndex === totalSlides + 1) {
      const timer = setTimeout(() => {
        setIsAnimating(false);
        setCurrentIndex(1);
      }, 300);
      return () => clearTimeout(timer);
    }

    if (currentIndex === 0) {
      const timer = setTimeout(() => {
        setIsAnimating(false);
        setCurrentIndex(totalSlides);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [currentIndex, totalSlides]);

  useEffect(() => {
    if (!isAnimating) {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => setIsAnimating(true));
      });
    }
  }, [isAnimating]);

  return (
    <div
      className="relative mx-auto overflow-hidden"
      onMouseEnter={() => setChevHidden(true)}
      onMouseLeave={() => setChevHidden(false)}
    >
      {chevHidden && (
        <div>
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-1 bg-white/60 hover:bg-white rounded-full shadow-lg hover:cursor-pointer transition-all ease-in-out"
          >
            <ChevronLeft size={30} className="text-primary" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-1 bg-white/60 hover:bg-white rounded-full shadow-lg hover:cursor-pointer transition-all ease-in-out"
          >
            <ChevronRight size={30} className="text-primary" />
          </button>
        </div>
      )}

      <div className={clsx("w-full overflow-hidden", height && `h-${height}`)}>
        <div
          ref={containerRef}
          className="flex w-full h-full"
          style={{
            transform: `translateX(-${currentIndex * 100}vw)`,
            transition: isAnimating ? "transform 0.5s ease-in-out" : "none"
          }}
        >
          {slides.map((child, index) => (
            <div key={index} className="flex-shrink-0 w-screen h-full px-0">
              {child}
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-3 z-10">
        {originalSlides.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === (currentIndex - 1 + totalSlides) % totalSlides
                ? "bg-black scale-150"
                : "bg-gray-300 hover:bg-gray-400 hover:scale-125"
            } shadow-lg cursor-pointer`}
          />
        ))}
      </div>
    </div>
  );
};

export default ScrollableCardWrapper;
