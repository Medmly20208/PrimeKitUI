import React, { useState } from "react";

//components
import HeaderNav from "./HeaderNav";
import Search from "./Search";

const Header = () => {
  return (
    <header
      className={`flex justify-between items-center py-[10px] px-[30px] md:px-[80px] fixed top-[0px] left-[0px]  w-screen z-[1000]`}
    >
      <div className="flex items-center gap-[30px]">
        <img
          src={
            "https://user-images.githubusercontent.com/69359301/256675911-c7508adc-0d04-47e7-8d1c-b3c98bcbfb27.png"
          }
          alt="logo "
          className="w-[6rem]"
        />
        <div className="hidden md:block">
          <nav>
            <ul className="flex gap-[20px]">
              <li className="hover:text-blue-600 cursor-pointer ">
                <a href="#">Features</a>
              </li>
              <li className="hover:text-blue-600 cursor-pointer">
                <a href="#">Testimonials</a>
              </li>
              <li className="hover:text-blue-600 cursor-pointer ">
                <a href="#">How it works</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <div className="flex gap-[20px]  items-center">
        <Search />
        <a className="hidden md:block bg-white border cursor-pointer transition-all duration-100 text-blue-600 border-blue-600 rounded-md px-[15px] py-[8px] hover:text-white hover:bg-blue-600">
          Login
        </a>
        <a className="hidden md:block bg-blue-600 border cursor-pointer transition-all duration-100 text-white border-blue-600 rounded-md px-[15px] py-[8px] hover:text-blue-600 hover:bg-white">
          Register
        </a>
        <HeaderNav />
      </div>
    </header>
  );
};

export default Header;
