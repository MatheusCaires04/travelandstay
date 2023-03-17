import React from "react";

import mountain from "/assets/mountain.png";
import hikings from "/assets/hiking.png";
import customer from "/assets/customer-service.png";

const Hikings = () => {
  return (
    <div className="w-full py-5 px-8">
      <h1 className="text-lg md:text-2xl font-bold text-center">
        Why Hikings?
      </h1>
      <div className="max-w-[1000px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 mt-10">
        <div className="flex flex-col items-center text-center gap-2">
          <img
            src={mountain}
            alt=""
            className="w-16 h-16 bg-red-200 p-2 rounded-full"
          />
          <strong className="text-base text-black/90">100+ Mountains</strong>
          <p className="text-xs text-gray-500 w-[70%] md:w-full">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa fuga
            molestias minus officia id doloremque hic reprehenderit consequatur.
          </p>
        </div>
        <div className="flex flex-col items-center text-center gap-2">
          <img
            src={hikings}
            alt=""
            className="w-16 h-16 bg-red-200 p-2 rounded-full"
          />
          <strong className="text-base text-black/90">1000+ Hikings</strong>
          <p className="text-xs text-gray-500 w-[70%] md:w-full">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa fuga
            molestias minus officia id doloremque hic reprehenderit consequatur.
          </p>
        </div>
        <div className="flex flex-col items-center text-center gap-2">
          <img
            src={customer}
            alt=""
            className="w-16 h-16 bg-red-200 p-2 rounded-full"
          />
          <strong className="text-base text-black/90">2000+ Customer</strong>
          <p className="text-xs text-gray-500 w-[70%] md:w-full">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa fuga
            molestias minus officia id doloremque hic reprehenderit consequatur.
          </p>
        </div>
      </div>
      <div className="max-w-[1000px] mx-auto flex flex-col md:flex-row px-14 py-10 bg-bgHikings bg-cover bg-center relative mt-10">
        <div className="absolute top-0 left-0 w-full h-full bg-black/80 " />
        <div className="flex-1 flex flex-col justify-center z-10">
          <h1 className="text-xl md:text-2xl text-white font-bold w-[70%] mx-auto md:mx-0 text-center md:text-start">
            Wonderful House experience nin there!
          </h1>
          <p className="text-sm text-white/80 font-medium mt-3 text-center md:text-start">
            The Adventure subranking is based an an equally weighted average of
            scores from five country.
          </p>
        </div>
        <div className="flex-1 flex justify-center md:justify-end mt-5 md:mt-0 z-10">
          <video
            autoPlay
            loop
            muted
            className="border-2 border-white rounded-lg w-full sm:w-[80%]"
          >
            <source src="/assets/highway-87884.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  );
};

export default Hikings;
