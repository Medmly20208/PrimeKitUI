import React from "react";

const index = () => {
  return (
    <div className="w-[80vw] p-[1em] text-center md:w-[500px] bg-blue-600 text-white rounded-3xl flex flex-col justify-center items-center md:p-[2em] gap-2 ">
      <h1 className="text- md:text-2xl font-bold">Create your account Now</h1>
      <p className="text-sm md:text-md font-regular">
        Take your business to next level
      </p>
      <button className="bg-white  py-[0.2em] px-[0.6em] rounded-md text-blue-600 text-sm md:font-medium">
        Get Started
      </button>
    </div>
  );
};

export default index;
