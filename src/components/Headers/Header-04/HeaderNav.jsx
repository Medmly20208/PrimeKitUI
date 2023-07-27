import React, { useState } from "react";

const HeaderNav = () => {
  const [isNavShown, setIsNavShown] = useState(false);

  const showNav = () => {
    setIsNavShown(true);
  };
  const hideNav = () => {
    setIsNavShown(false);
  };

  return (
    <div className="md:hidden">
      <svg
        onClick={showNav}
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        viewBox="0 0 16 16"
        className="cursor-pointer"
      >
        <path
          fill="currentColor"
          fill-rule="evenodd"
          d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
        />
      </svg>

      <>
        <div
          onClick={hideNav}
          className={`${
            isNavShown ? "block" : "hidden"
          } fixed top-[0px] right-[0px] w-screen h-screen bg-black opacity-20 cursor-pointer `}
        ></div>
      </>

      <div
        className={` fixed transition-all duration-300 top-[0px] ${
          isNavShown ? "right-[0px]" : "right-[-70vw]"
        } w-[70vw] h-screen bg-white  flex flex-col justify-center items-center gap-[20px] `}
      >
        <nav className="w-[80%]">
          <ul className="flex gap-[20px] flex-col text-center justify-stretch">
            <li className="w-full">
              <div className="flex items-start w-full">
                <img
                  src={
                    "https://user-images.githubusercontent.com/69359301/256675911-c7508adc-0d04-47e7-8d1c-b3c98bcbfb27.png"
                  }
                  alt="logo"
                  className="w-[6rem]"
                />
              </div>{" "}
            </li>
            <li className="hover:text-blue-600 cursor-pointer  border px-[20px] py-[10px] border-black hover:border-blue-600 rounded-md">
              <a href="#">Features</a>{" "}
            </li>
            <li className="hover:text-blue-600 cursor-pointer  border px-[20px] py-[10px] border-black hover:border-blue-600 rounded-md">
              <a href="#">Testimonials</a>
            </li>
            <li className="hover:text-blue-600 cursor-pointer  border px-[20px] py-[10px] border-black hover:border-blue-600 rounded-md">
              <a href="#">How it works</a>
            </li>
            <li className="w-full">
              <a
                className="bg-white border cursor-pointer transition-all duration-100 text-blue-600 border-blue-600 rounded-md px-[15px] py-[8px] hover:text-white hover:bg-blue-600 w-full block"
                to="login"
              >
                Login
              </a>
            </li>
            <li className="w-full">
              <a
                className="bg-blue-600 border cursor-pointer transition-all duration-100 text-white border-blue-600 rounded-md px-[15px] py-[8px] hover:text-blue-600 hover:bg-white w-full block"
                to="register"
              >
                Register
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default HeaderNav;
