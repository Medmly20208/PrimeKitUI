import React from "react";

const index = () => {
  return (
    <div className="flex flex-wrap max-w-[1400px] m-auto flex-col lg:flex-row mt-[80px]">
      <div className="flex justify-center items-center w-full lg:w-[50%]">
        <div className="text-center flex justify-center items-center  flex-col mt-[40px] gap-[20px] p-[1em] lg:items-start lg:text-left">
          <div>
            <h1 className="text-3xl font-bold">
              <span className="text-blue-600">RTail sections,</span> Build your
              app in seconds
            </h1>

            <h1 className="text-3xl font-bold">
              The best and free open source for react+tailwindcss
            </h1>
          </div>

          <p className="text-gray-600 md:w-[600px] text-left ">
            an open-source project that combines the power of React and the
            flexibility of Tailwind CSS to streamline your web development
            experience
          </p>
          <div className="flex items-start justify-center w-full gap-[10px] lg:justify-start  ">
            <input
              type="text"
              placeholder="Enter your email here"
              className="w-[40%] py-[0.6em] px-[0.8em] border  rounded-md"
            ></input>
            <button className="py-[0.6em] px-[0.8em] bg-blue-600 rounded-md text-white hover:bg-blue-900">
              Get Started
            </button>
          </div>
          <div className="flex gap-[0px]">
            <div className="flex gap-0">
              <img
                className="w-[2.5em] h-[2.5em] rounded-full border-[2px] border-white"
                alt="person"
                src="https://img.freepik.com/free-photo/portrait-man-laughing_23-2148859448.jpg?w=740&t=st=1690583748~exp=1690584348~hmac=c53479e186a54ac039cc6ee2e16494589af6b010aea296623098d4bcf4195b23"
              />
              <img
                className="relative left-[-10px] w-[2.5em] h-[2.5em] rounded-full border-[2px] border-white"
                alt="person"
                src="https://img.freepik.com/free-photo/portrait-man-laughing_23-2148859448.jpg?w=740&t=st=1690583748~exp=1690584348~hmac=c53479e186a54ac039cc6ee2e16494589af6b010aea296623098d4bcf4195b23"
              />
              <img
                className="relative left-[-20px] w-[2.5em] h-[2.5em] rounded-full border-[2px] border-white"
                alt="person"
                src="https://img.freepik.com/free-photo/portrait-man-laughing_23-2148859448.jpg?w=740&t=st=1690583748~exp=1690584348~hmac=c53479e186a54ac039cc6ee2e16494589af6b010aea296623098d4bcf4195b23"
              />
              <img
                className="relative left-[-30px] w-[2.5em] h-[2.5em] rounded-full border-[2px] border-white"
                alt="person"
                src="https://img.freepik.com/free-photo/portrait-man-laughing_23-2148859448.jpg?w=740&t=st=1690583748~exp=1690584348~hmac=c53479e186a54ac039cc6ee2e16494589af6b010aea296623098d4bcf4195b23"
              />
            </div>
            <div className="relative left-[-20px]">
              <div className="flex gap-[2px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#FFD700"
                    d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2L9.19 8.63L2 9.24l5.46 4.73L5.82 21z"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#FFD700"
                    d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2L9.19 8.63L2 9.24l5.46 4.73L5.82 21z"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#FFD700"
                    d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2L9.19 8.63L2 9.24l5.46 4.73L5.82 21z"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#FFD700"
                    d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2L9.19 8.63L2 9.24l5.46 4.73L5.82 21z"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#FFD700"
                    d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2L9.19 8.63L2 9.24l5.46 4.73L5.82 21z"
                  />
                </svg>
              </div>
              <p className="text-gray-500 text-sm">From 1,300+reviews</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full lg:w-[50%] flex justify-center  items-center lg:justify-end">
        <img
          src="https://www.opendatasoft.com/wp-content/uploads/2023/03/Blog-thumbnail-1.png"
          alt="dashboard"
          className="w-[95%] md:w-[80%] mt-[20px]"
        />
      </div>
    </div>
  );
};

export default index;
