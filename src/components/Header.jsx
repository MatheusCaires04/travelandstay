import React, { useEffect, useState } from "react";
import { SiYourtraveldottv } from "react-icons/si";
import { BiMenuAltRight } from "react-icons/bi";

const Header = () => {
  const [menu, setMenu] = useState(false);
  const [onChageColor, setOnChangeColor] = useState(false);

  useEffect(() => {
    function colorHeader() {
      if (window.scrollY > 15) {
        setOnChangeColor(true);
      } else {
        setOnChangeColor(false);
      }
    }

    window.addEventListener("scroll", colorHeader);
  }, []);

  const openOrCloseMenu = () => {
    setMenu(!menu);
    setOnChangeColor(!onChageColor);
  };

  return (
    <header
      className={`${
        onChageColor ? "bg-slate-400" : "bg-transparent"
      } header fixed w-full h-20 px-8 duration-150 z-[9999]`}
    >
      <nav className="max-w-[1000px] mx-auto h-full flex items-center justify-between">
        <a
          href="#"
          className="flex items-center gap-1 text-xl text-white font-bold"
        >
          <SiYourtraveldottv className="text-2xl text-orange-500" /> Dot
        </a>
        <ul className="hidden lg:flex gap-4 items-center text-white">
          <a
            href="#"
            className="text-sm font-medium hover:text-orange-500 duration-150"
          >
            Home
          </a>
          <a
            href="#"
            className="text-sm font-medium hover:text-orange-500 duration-150"
          >
            Products
          </a>
          <a
            href="#"
            className="text-sm font-medium hover:text-orange-500 duration-150"
          >
            Resources
          </a>
          <a
            href="#"
            className="text-sm font-medium hover:text-orange-500 duration-150"
          >
            Contact
          </a>
          <a
            href="#"
            className="text-sm font-medium hover:text-orange-500 duration-150"
          >
            Blog
          </a>
          <button className="border-2 border-orange-500 text-sm font-medium px-3 py-1 rounded-xl hover:bg-orange-500/30 duration-150">
            Login
          </button>
          <button className="bg-orange-500 border-2 border-orange-500 text-sm font-medium px-3 py-1 rounded-xl hover:bg-orange-500/30 duration-150">
            Sign Up
          </button>
        </ul>
        <div
          onClick={openOrCloseMenu}
          className="flex lg:hidden text-3xl text-orange-500 cursor-pointer"
        >
          <BiMenuAltRight />
        </div>
        <ul
          className={`${
            menu ? "left-0" : "left-full"
          } fixed top-20 w-full bg-slate-400 flex lg:hidden flex-col py-6 gap-4 items-center text-lg font-medium text-white duration-150`}
        >
          <a
            href="#"
            className="border-2 border-l-8 border-orange-500 w-[90%] sm:w-[70%] text-center hover:text-orange-500 duration-150"
          >
            Home
          </a>
          <a
            href="#"
            className="border-2 border-l-8 border-orange-500 w-[90%] sm:w-[70%] text-center hover:text-orange-500 duration-150"
          >
            Products
          </a>
          <a
            href="#"
            className="border-2 border-l-8 border-orange-500 w-[90%] sm:w-[70%] text-center hover:text-orange-500 duration-150"
          >
            Resources
          </a>
          <a
            href="#"
            className="border-2 border-l-8 border-orange-500 w-[90%] sm:w-[70%] text-center hover:text-orange-500 duration-150"
          >
            Contact
          </a>
          <a
            href="#"
            className="border-2 border-l-8 border-orange-500 w-[90%] sm:w-[70%] text-center hover:text-orange-500 duration-150"
          >
            Blog
          </a>
          <div className="flex gap-4">
            <button className="border-2 border-orange-500 text-sm px-3 py-1 rounded-xl hover:bg-orange-500/30 duration-150">
              Login
            </button>
            <button className="bg-orange-500 text-sm border-2 border-orange-500 px-3 py-1 rounded-xl hover:bg-orange-500/30 duration-150">
              Sign Up
            </button>
          </div>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
