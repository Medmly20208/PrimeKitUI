import React from "react";

//components
import PricingCard from "./PricingCard";

const index = () => {
  return (
    <div className="flex justify-center items-center mt-[5em]">
      <div>
        <div className="mb-[50px]">
          <h1 className="text-3xl font-bold text-center">Pricing </h1>
        </div>
        <div className="flex gap-[2em] justify-center items-center flex-wrap md:gap-[4em]">
          <PricingCard title="Free" />
          <PricingCard title="Pro" />
          <PricingCard title="Entreprise" />
        </div>
      </div>
    </div>
  );
};

export default index;
