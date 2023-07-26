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
    <div className="sm:hidden">
      <p
        className="w-[30px] h-[30px] text-gray-700 cursor-pointer"
        onClick={showNav}
      >
        List
      </p>
      {isNavShown && (
        <>
          <div
            onClick={hideNav}
            className="fixed top-[0px] right-[0px] w-screen h-screen bg-black opacity-20 cursor-pointer "
          ></div>
          <div className="fixed top-[0px] right-[0px] w-[70vw] h-screen bg-white  flex flex-col justify-center items-center gap-[20px] ">
            <nav className="w-[80%]">
              <ul className="flex gap-[20px] flex-col text-center justify-stretch">
                <li className="w-full">
                  <div className="flex items-start w-full">
                    <p>Logo</p>
                  </div>{" "}
                </li>
                <li className="hover:text-[#F23D5E] cursor-pointer  border px-[20px] py-[10px] border-black hover:border-[#F23D5E] rounded-md">
                  <a href="#">Features</a>{" "}
                </li>
                <li className="hover:text-[#F23D5E] cursor-pointer  border px-[20px] py-[10px] border-black hover:border-[#F23D5E] rounded-md">
                  <a href="#">Testimonials</a>
                </li>
                <li className="hover:text-[#F23D5E] cursor-pointer  border px-[20px] py-[10px] border-black hover:border-[#F23D5E] rounded-md">
                  <a href="#">How it works</a>
                </li>
                <li className="w-full">
                  <a
                    className="bg-white border cursor-pointer transition-all duration-100 text-[#F23D5E] border-[#F23D5E] rounded-md px-[15px] py-[8px] hover:text-white hover:bg-[#F23D5E] w-full block"
                    to="login"
                  >
                    Login
                  </a>
                </li>
                <li className="w-full">
                  <a
                    className="bg-[#F23D5E] border cursor-pointer transition-all duration-100 text-white border-[#F23D5E] rounded-md px-[15px] py-[8px] hover:text-[#F23D5E] hover:bg-white w-full block"
                    to="register"
                  >
                    Register
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </>
      )}
    </div>
  );
};

export default HeaderNav;
