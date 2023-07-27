import React, { useState } from "react";

const Search = () => {
  const [isModalDisplayed, setIsModalDisplayed] = useState(false);

  const showModal = () => setIsModalDisplayed(true);
  const hideModal = () => setIsModalDisplayed(false);

  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        className="cursor-pointer "
        onClick={showModal}
      >
        <path
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          d="m21 21l-4.343-4.343m0 0A8 8 0 1 0 5.343 5.343a8 8 0 0 0 11.314 11.314Z"
        />
      </svg>
      {isModalDisplayed && (
        <>
          <div
            onClick={hideModal}
            className="fixed top-[0px] left-[0px] w-screen h-screen bg-black opacity-25 cursor-pointer"
          ></div>

          <div className="fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-[10000] bg-white w-[90%] md:w-[700px] flex flex-col p-[1rem] rounded-2xl justify-between items-center h-fit">
            <h1 className="relative text-3xl pb-[5px] font-bold mb-[20px] before:content-[''] before:absolute before:bottom-0 before:left-[50%] before:h-[3px] before:w-[50px] before:bg-black before:translate-x-[-50%]">
              Search
            </h1>
            <div className="flex justify-between items-center border-[2px]  rounded-xl p-[0.5rem] w-full sm:w-[90%]">
              <input
                type="text"
                className="w-[90%] border-none outline-none p-[0.5rem]"
                placeholder="serach something"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                className="cursor-pointer"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m21 21l-4.343-4.343m0 0A8 8 0 1 0 5.343 5.343a8 8 0 0 0 11.314 11.314Z"
                />
              </svg>
            </div>

            <p className="text-left my-[10px] w-full sm:w-[90%]">
              <span className="font-semibold">Search :</span> Search for
              something in platform
            </p>
          </div>
        </>
      )}
    </>
  );
};

export default Search;
