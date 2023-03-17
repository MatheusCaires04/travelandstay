import React from "react";

const Hero = () => {
  return (
    <div className="bg-bgHero bg-cover bg-center w-full h-[27rem] relative px-8">
      <div className="absolute top-0 left-0 w-full h-full bg-black/60" />
      <div
        className="relative max-w-[1000px] mx-auto text-white text-center flex flex-col items-center justify-center h-full z-10"
        data-aos="fade-right"
      >
        <h1 className="text-3xl md:text-4xl font-bold w-[80%] md:w-[40%]">
          Plan You Trip With Travel Dot
        </h1>
        <p className="text-sm md:text-base mt-3 mb-6">
          Travel to your favourite city with respectful of the environment!
        </p>
        <button className="px-4 py-1 text-sm md:text-base bg-orange-500 border-2 border-orange-500 rounded-2xl hover:bg-orange-500/30 duration-150">
          Explore Now
        </button>
        <form className="absolute -bottom-32 md:-bottom-20 lg:-bottom-12 bg-white w-[80%] md:w-[90%] px-5 md:px-10 py-2 md:py-5 text-black grid grid-cols-1 lg:grid-cols-2 gap-4 rounded-2xl shadow-lg">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="w-full text-start">
              <label
                htmlFor=""
                className="text-xs sm:text-sm text-gray-500 font-medium"
              >
                Location
              </label>
              <input
                className="w-full px-2 py-1 border-2 border-gray-500 rounded-md focus:border-orange-500 duration-150 text-xs md:text-sm"
                type="text"
                name="city"
                id="city"
              />
            </div>
            <div className="w-full text-start">
              <label
                htmlFor=""
                className="text-xs sm:text-sm text-gray-500 font-medium"
              >
                Distance
              </label>
              <input
                className="w-full px-2 py-1 border-2 border-gray-500 rounded-md focus:border-orange-500 duration-150 text-xs md:text-sm"
                type="text"
                name="distance"
                id="distance"
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="w-full text-start">
              <label
                htmlFor=""
                className="text-xs sm:text-sm text-gray-500 font-medium"
              >
                Price Range
              </label>
              <input
                className="w-full px-2 py-1 border-2 border-gray-500 rounded-md focus:border-orange-500 duration-150 text-xs md:text-sm"
                type="text"
                name="price"
                id="price"
              />
            </div>
            <div className="w-full flex items-end">
              <input
                className="w-full bg-orange-500 border-2 border-orange-500 rounded-2xl text-xs md:text-sm text-white font-medium py-1 cursor-pointer hover:bg-orange-500/30 hover:text-orange-500 duration-150"
                type="submit"
                name="search"
                id="search"
                value="Search"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Hero;
