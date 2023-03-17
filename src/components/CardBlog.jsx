import React from "react";
import { BsArrowRight } from "react-icons/bs";

const CardBlog = ({ data }) => {
  const { title, image } = data;

  return (
    <div className="h-52 md:h-52 lg:h-60 shadow-shadowCard p-5 rounded-xl flex gap-5">
      <img src={image} alt="" className="w-[50%] h-full rounded-xl flex-1" />
      <div className="flex flex-col justify-evenly flex-1">
        <strong className="text-sm sm:text-base text-gray-700">{title}</strong>
        <p className="text-[0.70rem] sm:text-xs text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas veniam
          laboriosam officia tenetur hic iusto.
        </p>
        <button className="flex items-center text-orange-500 text-xs sm:text-sm font-medium gap-2 group">
          Read More{" "}
          <BsArrowRight className="text-base sm:text-lg group-hover:translate-x-2 duration-150" />
        </button>
      </div>
    </div>
  );
};

export default CardBlog;
