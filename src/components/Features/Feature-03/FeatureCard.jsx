import React from "react";

const FeatureCard = (props) => {
  return (
    <div className="w-[320px] border shadow-lg rounded-lg">
      <div>
        <img
          className="w-full"
          src="https://canvasapp.com/_next/image?url=%2Ftemporary%2Fillustrations%2Fdashboards.png&w=384&q=75"
          alt="dashboard"
        />
      </div>
      <div className="p-[2em] flex flex-col gap-[0.4em]">
        <p className="text-sm text-blue-600">Feature 1</p>
        <h1 className="text-md font-semibold">{props.title}</h1>
        <p className="text-sm text-gray-600">{props.description}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
