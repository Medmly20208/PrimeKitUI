import React, { useState } from "react";

//components
import HeaderNav from "./HeaderNav";

const Header = () => {
  return (
    <header
      className={`flex justify-between items-center py-[10px] px-[30px] sm:px-[80px] fixed top-[0px] left-[0px] backdrop-blur-lg w-screen z-[1000]`}
    >
      <div>
        <p>Logo</p>
      </div>
      <div className="hidden sm:block">
        <nav>
          <ul className="flex gap-[20px]">
            <li className="hover:text-[#F23D5E] cursor-pointer ">
              <a href="#">Features</a>
            </li>
            <li className="hover:text-[#F23D5E] cursor-pointer">
              <a href="#">Testimonials</a>
            </li>
            <li className="hover:text-[#F23D5E] cursor-pointer ">
              <a href="#">How it works</a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="hidden gap-[10px] sm:flex">
        <a className="bg-white border cursor-pointer transition-all duration-100 text-[#F23D5E] border-[#F23D5E] rounded-md px-[15px] py-[8px] hover:text-white hover:bg-[#F23D5E]">
          Login
        </a>
        <a className="bg-[#F23D5E] border cursor-pointer transition-all duration-100 text-white border-[#F23D5E] rounded-md px-[15px] py-[8px] hover:text-[#F23D5E] hover:bg-white">
          Register
        </a>
      </div>
      <HeaderNav />
    </header>
  );
};

export default Header;
