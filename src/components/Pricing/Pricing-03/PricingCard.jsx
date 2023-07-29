import React from "react";

const PricingCard = ({ title }) => {
  return (
    <div className="w-[300px] shadow-md p-[2em] rounded-lg flex flex-col gap-[2em]">
      <div className="flex flex-col gap-[0.2em] border-b-2 pb-[1em]">
        <h1 className="text-2xl font-semibold text-center ">{title}</h1>
        <p className="text-center text-3xl font-extrabold">$50</p>
        <p className="text-sm text-gray-600 font-medium  text-center">
          Made from small business
        </p>
      </div>

      <div>
        <p className="text-md text-gray-700 font-medium mb-[0.4em]">
          What's included:
        </p>
        <ul className="flex gap-[0.4em] flex-col">
          <li>
            <div className="flex items-center gap-[0.4em]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 32 32"
              >
                <path
                  fill="#2563eb"
                  d="m13 24l-9-9l1.414-1.414L13 21.171L26.586 7.586L28 9L13 24z"
                />
              </svg>
              <p className="text-gray-600 text-sm">Feature one</p>
            </div>
          </li>
          <li>
            <div className="flex items-center gap-[0.4em]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 32 32"
              >
                <path
                  fill="#2563eb"
                  d="m13 24l-9-9l1.414-1.414L13 21.171L26.586 7.586L28 9L13 24z"
                />
              </svg>
              <p className="text-gray-600 text-sm">Feature two</p>
            </div>
          </li>
          <li>
            <div className="flex items-center gap-[0.4em]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 32 32"
              >
                <path
                  fill="#2563eb"
                  d="m13 24l-9-9l1.414-1.414L13 21.171L26.586 7.586L28 9L13 24z"
                />
              </svg>
              <p className="text-gray-600 text-sm">Feature three</p>
            </div>
          </li>
          <li>
            <div className="flex items-center gap-[0.4em]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 32 32"
              >
                <path
                  fill="#2563eb"
                  d="m13 24l-9-9l1.414-1.414L13 21.171L26.586 7.586L28 9L13 24z"
                />
              </svg>
              <p className="text-gray-600 text-sm">Feature four</p>
            </div>
          </li>
        </ul>
      </div>

      <div className=" w-full">
        <button className="w-full py-[0.4em] px-[0.8em] text-sm bg-blue-600 rounded-md text-white hover:bg-blue-900">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default PricingCard;
