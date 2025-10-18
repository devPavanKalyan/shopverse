import React from "react";

const HowToIntegrate: React.FC = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
      <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 md:flex md:items-stretch">
        {/* Side Title */}
        <div className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white md:w-1/3 flex items-center justify-center p-6 sm:p-8">
          <h2 className="text-xl font-semibold tracking-wide text-center leading-snug">
            How to Integrate
          </h2>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 md:w-2/3 flex flex-col justify-between gap-4">
          <p className="text-gray-600 text-base leading-relaxed">
            Follow this quick guide to get started with the platform. The video
            below will walk you through the key features and steps for using the
            interface effectively.
          </p>

          {/* Video Container */}
          <div className="relative w-full pt-[56.25%] rounded-lg overflow-hidden shadow-sm border border-gray-300">
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="How to Use Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowToIntegrate;
