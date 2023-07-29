import React, { useState } from "react";

//components
import HeaderNav from "./HeaderNav";
import Language from "./Language";

const Header = () => {
  return (
    <header
      className={`flex justify-between items-center py-[10px] px-[30px] md:px-[80px] fixed top-[0px] left-[0px]  w-screen z-[1000]`}
    >
      <div className="flex items-center gap-[30px]">
        <img
          src={
            "https://github-production-user-asset-6210df.s3.amazonaws.com/69359301/257009420-f7ead7fe-6c88-4613-b61c-d0aa0b83d8ae.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAIWNJYAX4CSVEH53A%2F20230729%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230729T202858Z&X-Amz-Expires=300&X-Amz-Signature=2094c8d01b698bcf23ef8c1371b18f2e00b748350026f1325157a591a31e53e2&X-Amz-SignedHeaders=host&actor_id=69359301&key_id=0&repo_id=608093399"
          }
          alt="logo "
          className="w-[8rem]"
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

      <div className="flex gap-[10px] items-center">
        <Language />
        <HeaderNav />

        <a className="hidden md:block bg-white border cursor-pointer transition-all duration-100 text-blue-600 border-blue-600 rounded-md px-[15px] py-[8px] hover:text-white hover:bg-blue-600">
          Login
        </a>
        <a className="hidden md:block bg-blue-600 border cursor-pointer transition-all duration-100 text-white border-blue-600 rounded-md px-[15px] py-[8px] hover:text-blue-600 hover:bg-white">
          Register
        </a>
      </div>
    </header>
  );
};

export default Header;
