import ScrollableTabs from "./ScrollableTabs";

const MonitoringYourBusiness = () => {
  return (
    <section className="bg-gradient-to-b from-[#3A59D1] via-[#7AC6D2] to-white py-16 px-6">
      <h2 className="text-3xl md:text-4xl font-extrabold text-white text-center mb-12 tracking-tight">
        For Monitoring or Your Business
      </h2>

      <ScrollableTabs>
        {[...Array(8)].map((_, index) => (
          <div
            key={index}
            className="min-w-[200px] max-w-[250px] h-[250px] bg-white rounded-none shadow-md p-6 flex flex-col justify-center items-center text-center transition-transform duration-300 hover:scale-105 hover:shadow-xl"
          >
            <div className="w-20 h-20 bg-blue-100 rounded-full mb-5 flex items-center justify-center">
              {/* Optional icon or image can be placed here */}
            </div>
            <span className="text-gray-800 font-semibold text-lg">
              Item {index + 1}
            </span>
            <p className="text-gray-500 text-sm mt-2 text-wrap">
              Explore features and tools tailored to Item {index + 1}.
            </p>
          </div>
        ))}
      </ScrollableTabs>
    </section>
  );
};

export default MonitoringYourBusiness;
