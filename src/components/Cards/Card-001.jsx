import React from "react";

const Card = () => {
  return (
    <div className="w-[300px] p-[10px] flex flex-col gap-6  justify-between ">
      <div>
        <img
          src={
            "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29kaW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
          }
          alt={"card"}
          className="max-h-[138px] !w-[300px]"
        />
        <div className="px-[10px] mt-[20px] text-center">
          <h3>Title</h3>
          <p className="text-gray-500">small desription of this card</p>
        </div>
      </div>

      <div className="px-[10px] flex justify-center items-center ">
        <a
          className="bg-blue-600 border text-sm cursor-pointer transition-all duration-100 text-white border-blue-600 rounded-md px-[0.6em] py-[0.2em] hover:text-blue-600 hover:bg-white"
          target="_blank"
        >
          see more details
        </a>
      </div>
    </div>
  );
};

export default Card;
