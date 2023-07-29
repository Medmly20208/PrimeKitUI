import React from "react";

const PricingCard = ({ title }) => {
  return (
    <div className="w-[300px] shadow-md p-[2em] rounded-lg">
      <h1 className="text-2xl font-semibold ">{title}</h1>
      <p className="text-sm text-gray-600 font-medium mb-[20px]">
        Made from small business
      </p>
      <div className="my-[20px] w-full">
        <button className="w-full py-[0.4em] px-[0.8em] text-sm bg-blue-600 rounded-md text-white hover:bg-blue-900">
          Get Started
        </button>
      </div>

      <div>
        <p className="text-md text-gray-700 font-medium mt-[20px] mb-[10px]">
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
                  d="M16 2a14 14 0 1 0 14 14A14 14 0 0 0 16 2Zm-2 19.59l-5-5L10.59 15L14 18.41L21.41 11l1.596 1.586Z"
                />
                <path
                  fill="none"
                  d="m14 21.591l-5-5L10.591 15L14 18.409L21.41 11l1.595 1.585L14 21.591z"
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
                  d="M16 2a14 14 0 1 0 14 14A14 14 0 0 0 16 2Zm-2 19.59l-5-5L10.59 15L14 18.41L21.41 11l1.596 1.586Z"
                />
                <path
                  fill="none"
                  d="m14 21.591l-5-5L10.591 15L14 18.409L21.41 11l1.595 1.585L14 21.591z"
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
                  d="M16 2a14 14 0 1 0 14 14A14 14 0 0 0 16 2Zm-2 19.59l-5-5L10.59 15L14 18.41L21.41 11l1.596 1.586Z"
                />
                <path
                  fill="none"
                  d="m14 21.591l-5-5L10.591 15L14 18.409L21.41 11l1.595 1.585L14 21.591z"
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
                  d="M16 2a14 14 0 1 0 14 14A14 14 0 0 0 16 2Zm-2 19.59l-5-5L10.59 15L14 18.41L21.41 11l1.596 1.586Z"
                />
                <path
                  fill="none"
                  d="m14 21.591l-5-5L10.591 15L14 18.409L21.41 11l1.595 1.585L14 21.591z"
                />
              </svg>
              <p className="text-gray-600 text-sm">Feature four</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PricingCard;
