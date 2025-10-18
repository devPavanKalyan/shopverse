import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";

const ScrollableCardWrapper = ({ children }: { children: React.ReactNode }) => {
  const originalSlides = React.Children.toArray(children);
  const totalSlides = originalSlides.length;
  const [currentIndex, setCurrentIndex] = useState(1);
  const [isAnimating, setIsAnimating] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);
  const [chevHidden, setChevHidden] = useState(true);

  // Clone last + first for seamless effect
  const slides = [
    originalSlides[totalSlides - 1], // Clone last
    ...originalSlides,
    originalSlides[0] // Clone first
  ];

  const goToSlide = (index: number) => {
    setIsAnimating(true);
    setCurrentIndex(index);
  };

  const nextSlide = () => goToSlide(currentIndex + 1);
  const prevSlide = () => goToSlide(currentIndex - 1);

  // Auto-scroll
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  // Handle loop reset when reaching clone slides
  useEffect(() => {
    if (currentIndex === totalSlides + 1) {
      // After transition to clone of first slide
      const timer = setTimeout(() => {
        setIsAnimating(false);
        setCurrentIndex(1); // Jump to real first
      }, 300);
      return () => clearTimeout(timer);
    }

    if (currentIndex === 0) {
      // After transition to clone of last slide
      const timer = setTimeout(() => {
        setIsAnimating(false);
        setCurrentIndex(totalSlides); // Jump to real last
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [currentIndex, totalSlides]);

  // Restore transition after the jump (so it's smooth again)
  useEffect(() => {
    if (!isAnimating) {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setIsAnimating(true);
        });
      });
    }
  }, [isAnimating]);

  return (
    <div
      className="relative w-[95vw] h-[400px] mx-auto overflow-hidden"
      onMouseEnter={() => {
        setChevHidden(true); // Show chevrons on hover
      }}
      onMouseLeave={() => {
        setChevHidden(false); // Hide chevrons when mouse leaves
      }}
    >
      {/* Navigation Buttons */}
      {chevHidden && (
        <div>
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-3 bg-white/60 hover:bg-white rounded-full shadow-lg hover:cursor-pointer transition-all ease-in-out"
          >
            <ChevronLeft size={40} className="text-primary" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-3 bg-white/60 hover:bg-white rounded-full shadow-lg hover:cursor-pointer transition-all ease-in-out"
          >
            <ChevronRight size={40} className="text-primary" />
          </button>
        </div>
      )}

      {/* Slides */}
      <div className="w-full h-full overflow-hidden">
        <div
          ref={containerRef}
          className="flex w-full h-full"
          style={{
            transform: `translateX(-${currentIndex * 95}vw)`,
            transition: isAnimating ? "transform 0.5s ease-in-out" : "none"
          }}
        >
          {slides.map((child, index) => (
            <div key={index} className="flex-shrink-0 w-[95vw] h-full px-2">
              {child}
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Dots */}
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
