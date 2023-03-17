import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { BsArrowRight } from "react-icons/bs";

import "swiper/css";

import { locations } from "./../data/Locations";

const Destinations = () => {
  return (
    <section className="w-full pt-40 md:pt-28 pb-10 px-8" data-aos="fade-up">
      <div className="max-w-[1000px] mx-auto">
        <h1 className="text-lg md:text-2xl font-bold">Popular Destinations</h1>
        <p className="text-sm md:text-base text-gray-500 font-medium">
          From historical cities to natural specteculars, come see the best of
          the world!
        </p>
        <Swiper
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 30,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
          }}
          className="py-10 px-3 w-[70%] sm:w-full mx-auto"
        >
          {locations.map((item) => {
            return (
              <SwiperSlide
                key={item.id}
                className="w-full flex flex-col overflow-hidden rounded-xl shadow-shadowCard h-60 group"
              >
                <div className="h-[70%] overflow-hidden relative">
                  <img
                    src={item.image}
                    alt={item.country}
                    className="w-full h-full"
                  />
                  <div className="absolute top-[100%] left-0 w-full h-full bg-black/70 text-white capitalize flex items-start justify-center flex-col gap-1 pl-5 group-hover:top-0 duration-150">
                    <h1 className="text-xl md:text-2xl">{item.city}</h1>
                    <small className="text-xs md:text-sm text-gray-300">
                      {item.country}
                    </small>
                    <button className="absolute bottom-4 right-4 bg-orange-500 p-2 rounded-full hover:bg-orange-500/50 duration-150">
                      <BsArrowRight />
                    </button>
                  </div>
                </div>
                <div className="flex-1 flex flex-col justify-between h-full p-3">
                  <div>
                    <span className="relative text-lg md:text-xl font-bold after:content-[''] after:w-10 after:h-1 after:bg-orange-500 after:absolute after:ml-3 after:top-[50%] after:translate-y-[-50%] after:rounded-sm">
                      0{item.id + 1}
                    </span>
                  </div>
                  <div className="flex justify-between items-center capitalize text-sm text-gray-600">
                    <span>{item.country}</span>
                    <span>Dot</span>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default Destinations;
