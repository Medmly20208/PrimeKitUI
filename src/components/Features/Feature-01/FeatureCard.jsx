import React from "react";

const FeatureCard = (props) => {
  return (
    <div className="p-[20px] border rounded-lg w-[320px] shadow-md">
      <div className="border  w-fit p-[5px] rounded-md mb-[20px] bg-blue-600">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 1024 1024"
        >
          <path
            fill="#FFFFFF"
            d="M595.344 64.72h.176h-.176zm0 0l-72.207 379.377l261.584.88L428.657 959.28l72.208-417.376l-261.568-.912zm.049-63.999c-1.728 0-3.455.063-5.151.19c-11.296.913-18.785 4.689-27.664 10.657a64.304 64.304 0 0 0-13.392 11.936a56.688 56.688 0 0 0-3.297 4.288L187.281 502.4c-14.16 19.408-16.24 45.025-5.36 66.433c10.864 21.408 32.832 34.976 56.912 35.152l184.736 1.344l-58.08 342.192c-5.52 29.408 10.16 58.72 37.76 70.528a64.19 64.19 0 0 0 25.391 5.216c20.112 0 36.64-9.408 49.041-26.4L836.737 482.56c14.16-19.409 16.225-45.057 5.36-66.433c-10.864-21.408-32.832-34.977-56.912-35.152l-184.736-.32l57.456-300.88a62.46 62.46 0 0 0 1.825-15.056c0-34.624-27.569-62.848-62.065-63.968c-.767-.032-1.52-.032-2.271-.032z"
          />
        </svg>
      </div>
      <h2 className="text-xl font-semibold">{props.title}</h2>
      <p className="text-gray-700 font-regular">{props.description}</p>
    </div>
  );
};

export default FeatureCard;
