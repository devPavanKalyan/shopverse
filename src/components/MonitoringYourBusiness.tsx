const MonitoringYourBusiness = () => {
  return (
    <section className="bg-gradient-to-b from-[#3A59D1] via-[#7AC6D2] to-white py-16 px-2 md:px-6">
      <h2 className="text-3xl md:text-4xl font-extrabold text-white text-center md:mb-12 tracking-tight">
        For Monitoring or Your Business
      </h2>

      <div className="flex items-center jusify-center overflow-x-auto gap-5 h-fit py-5 px-2 no-scrollbar">
        {[...Array(8)].map((_, index) => (
          <div
            key={index}
            className="min-w-[200px] max-w-[250px] h-[250px] bg-white rounded-none shadow-md p-6 flex flex-col justify-center items-center text-center shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 will-change-transform"
          >
            <div className="w-20 h-20 bg-blue-100 rounded-full mb-5 flex items-center justify-center"></div>
            <span className="text-gray-800 font-semibold text-lg">
              Item {index + 1}
            </span>
            <p className="text-gray-500 text-sm mt-2 text-wrap">
              Explore features and tools tailored to Item {index + 1}.
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MonitoringYourBusiness;
