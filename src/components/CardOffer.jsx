import React from "react";

import { IoBedSharp, IoWifiSharp } from "react-icons/io5";
import { FaBath, FaShuttleVan } from "react-icons/fa";
import { BsArrowRight } from "react-icons/bs";

const CardOffer = ({ data }) => {
  const { image, price } = data;
  return (
    <div className="h-[22rem] rounded-xl overflow-hidden shadow-shadowCard">
      <div className="h-40">
        <img src={image} alt="/" className="w-full h-full" />
      </div>
      <div className="p-2">
        <div className="flex items-center justify-between">
          <span className="text-sm">${price}</span>
          <span className="text-xs text-orange-500 bg-gray-300 p-1 rounded-md">
            For Rent
          </span>
        </div>
        <div className="flex flex-wrap gap-2 mt-5 mb-2">
          <li className="bg-gray-100 p-1 flex items-center text-xs text-gray-400">
            <IoBedSharp className="text-sm mr-1" />2 Beds
          </li>
          <li className="bg-gray-100 p-1 flex items-center text-xs text-gray-400">
            <FaBath className="text-sm mr-1" />1 Bath
          </li>
          <li className="bg-gray-100 p-1 flex items-center text-xs text-gray-400">
            <IoWifiSharp className="text-sm mr-1" />
            Wi-Fi
          </li>
          <li className="bg-gray-100 p-1 flex items-center text-xs text-gray-400">
            <FaShuttleVan className="text-sm mr-1" />
            Shuttle
          </li>
        </div>
        <div>
          <span className="text-xs">rua tal bairro tal</span>
        </div>
        <button className="text-white text-xs border-2 border-orange-500 bg-orange-500 w-full rounded-xl flex items-center justify-center gap-2 py-1 mt-1 group">
          View Detail{" "}
          <BsArrowRight className="group-hover:translate-x-2 text-lg duration-150" />
        </button>
      </div>
    </div>
  );
};

export default CardOffer;
