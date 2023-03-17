import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import CardOffer from "./CardOffer";
import { offers } from "./../data/Offers";

const Offers = () => {
  return (
    <div className="w-full px-8 py-10" data-aos="fade-up-right">
      <h1 className="text-lg md:text-2xl font-bold text-center">
        Special Offers
      </h1>
      <p className="text-sm md:text-base text-gray-500 font-medium text-center">
        From historical cities to natural specteculars, come see the best of the
        world!
      </p>
      <Swiper
        className="max-w-none w-[70%] md:w-full md:max-w-[1000px] mx-auto mt-5 py-5 px-3"
        spaceBetween={20}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
        }}
      >
        {offers.map((item) => {
          return (
            <SwiperSlide>
              <CardOffer data={item} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Offers;
