import React from "react";

const PricingCard = ({ title }) => {
  return (
    <div className="w-[250px] shadow-md p-[2em] rounded-md">
      <h1 className="text-2xl font-semibold mb-[20px]">{title}</h1>
      <div>
        <ul className="flex gap-[0.2em] flex-col">
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
        </ul>
      </div>
      <div className="mt-[20px]">
        <button className="py-[0.3em] px-[0.5em] text-sm bg-blue-600 rounded-md text-white hover:bg-blue-900">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default PricingCard;
