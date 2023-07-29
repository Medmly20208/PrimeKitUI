import React from "react";

const index = () => {
  return (
    <div className="text-center flex justify-center items-center flex-col mt-[40px] gap-[20px] p-[1em] max-w-[1400px]">
      <div>
        <h1 className="text-3xl font-bold">
          <span className="text-blue-600">PrimeKitUI,</span> Build your app in
          seconds
        </h1>

        <h1 className="text-3xl font-bold">
          The best and free open source for react+tailwindcss
        </h1>
      </div>

      <p className="text-gray-600 md:w-[600px] text-center">
        an open-source project that combines the power of React and the
        flexibility of Tailwind CSS to streamline your web development
        experience
      </p>
      <div className="flex gap-3 ">
        <button className="py-[0.6em] px-[0.8em] border border-blue-600 bg-blue-600 rounded-md text-white hover:bg-white hover:text-blue-600">
          Get Started
        </button>
        <button className="flex gap-2 items-center py-[0.6em] px-[0.8em] border border-blue-600 rounded-md text-blue-600 hover:bg-blue-600 hover:text-white">
          <p>See more</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M11.273 3.687a1 1 0 1 1 1.454-1.374l8.5 9a1 1 0 0 1 0 1.374l-8.5 9.001a1 1 0 1 1-1.454-1.373L19.125 12l-7.852-8.313Z"
            />
          </svg>
        </button>
      </div>
      <img
        src="https://www.opendatasoft.com/wp-content/uploads/2023/03/Blog-thumbnail-1.png"
        alt="dashboard"
        className="w-[95%] md:w-[80%] mt-[20px]"
      />
    </div>
  );
};

export default index;
