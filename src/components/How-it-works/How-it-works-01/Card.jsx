import React from "react";

const Card = ({ title, description, icon, isPrimary }) => {
  return (
    <div
      className={`w-[350px] rounded-2xl p-[1em] ${
        isPrimary
          ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white"
          : "text-gray-600"
      }  `}
    >
      <div className={"flex items-center gap-[2px] mb-[10px]"}>
        {icon}
        <h1 className="font-semibold">{title}</h1>
      </div>
      <p>{description}</p>
    </div>
  );
};

export default Card;
