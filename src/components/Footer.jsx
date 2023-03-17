import React from "react";
import { SiYourtraveldottv } from "react-icons/si";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full px-8 py-10 bg-gray-200">
      <div className="max-w-[1000px] mx-auto">
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-0">
          <li className="flex flex-col">
            <a href="#" className="flex gap-1 text-lg font-bold md:text-xl">
              <SiYourtraveldottv className="text-xl md:text-2xl text-orange-500" />
              Dot
            </a>
            <div className="flex gap-5 mt-2">
              <FaFacebookF
                className="bg-orange-500 text-white rounded-full p-2 hover:bg-orange-500/70 duration-150 cursor-pointer"
                size={30}
              />
              <FaTwitter
                className="bg-orange-500 text-white rounded-full p-2 hover:bg-orange-500/70 duration-150 cursor-pointer"
                size={30}
              />
              <FaInstagram
                className="bg-orange-500 text-white rounded-full p-2 hover:bg-orange-500/70 duration-150 cursor-pointer"
                size={30}
              />
            </div>
          </li>
          <li className="flex flex-col">
            <strong className="text-sm md:text-base mb-1">Information</strong>
            <a
              href="#"
              className="text-xs md:text-sm font-medium text-gray-600 mb-1"
            >
              Home
            </a>
            <a
              href="#"
              className="text-xs md:text-sm font-medium text-gray-600 mb-1"
            >
              Explore
            </a>
            <a
              href="#"
              className="text-xs md:text-sm font-medium text-gray-600 mb-1"
            >
              Travel
            </a>
            <a
              href="#"
              className="text-xs md:text-sm font-medium text-gray-600 mb-1"
            >
              Blog
            </a>
          </li>
          <li className="flex flex-col">
            <strong className="text-sm md:text-base mb-1">Helpful Links</strong>
            <a
              href="#"
              className="text-xs md:text-sm font-medium text-gray-600 mb-1"
            >
              Destination
            </a>
            <a
              href="#"
              className="text-xs md:text-sm font-medium text-gray-600 mb-1"
            >
              Support
            </a>
            <a
              href="#"
              className="text-xs md:text-sm font-medium text-gray-600 mb-1"
            >
              Travel & Condition
            </a>
            <a
              href="#"
              className="text-xs md:text-sm font-medium text-gray-600 mb-1"
            >
              Privacy
            </a>
          </li>
          <li className="flex flex-col">
            <strong className="text-sm md:text-base mb-1">Contact</strong>
            <a
              href="#"
              className="text-xs md:text-sm font-medium text-gray-600 mb-1"
            >
              +551 698 698
            </a>
            <a
              href="#"
              className="text-xs md:text-sm font-medium text-gray-600 mb-1"
            >
              isratech8@gmail.com
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
