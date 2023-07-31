import React from "react";

const index = () => {
  return (
    <div className="text-white bg-gradient-to-r from-blue-500 to-blue-800 w-screen flex justify-center items-center h-[300px]">
      <div className="flex flex-col justify-center items-center gap-4">
        <svg
          className="h-auto w-16 text-blue-50"
          width="91"
          height="42"
          viewBox="0 0 91 42"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M36.9778 34.3809L30.095 36.8474C32.533 36.4283 34.8231 35.5837 36.9778 34.3809ZM52.9494 33.1914C50.2156 33.8305 47.53 34.557 44.7585 34.8867C47.6629 35.1253 50.3374 34.2402 52.9494 33.1914ZM46.1689 24.7572C46.1834 23.6766 45.4859 23.812 44.8459 23.9044C42.6817 24.2154 41.5692 25.8834 40.5209 27.4885C39.7567 28.6582 39.1097 29.9703 39.0919 31.4478C39.0848 32.0111 39.2348 32.4589 39.9638 32.0567C41.954 30.9582 43.7433 29.6232 45.0344 27.7175C45.6495 26.8096 46.0765 25.8138 46.1689 24.7572ZM44.7697 33.6079C46.5301 33.6953 48.2192 33.2102 49.9054 32.7819C57.1912 30.9309 63.3284 27.0535 68.8912 22.1063C72.6069 18.8014 75.9711 15.1747 79.2139 11.422C79.51 11.0799 79.7958 10.722 80.2415 10.5654C80.7423 10.3898 81.096 10.43 80.8603 11.0973C80.8027 11.2617 80.5745 11.4154 80.8864 11.5111C81.9621 11.8416 81.6705 12.6253 81.4796 13.3381C81.1217 14.676 80.2262 15.7305 79.4599 16.8282C77.3135 19.9036 75.0487 22.9008 72.4102 25.5748C69.9606 28.0571 67.1788 30.1567 64.3399 32.1772C62.5327 33.4633 60.6767 34.7465 58.5494 35.3276C57.1361 35.7137 55.9946 36.5769 54.6157 36.9695C51.9723 37.7221 49.3313 38.4437 46.569 38.5969C44.2955 38.7228 42.1478 38.2722 40.17 37.141C39.5181 36.7678 38.9051 36.7417 38.2432 37.0142C36.4592 37.7482 34.6462 38.4271 32.8391 39.0761C29.8991 40.1328 26.805 40.718 23.7084 41.1803C18.7695 41.9176 13.8235 42.1499 8.88334 41.1703C5.97979 40.5946 3.15452 39.8383 0.974168 37.6372C0.400085 37.0577 -0.0257141 36.4182 0.00120895 35.5571C0.0123924 35.186 0.129611 34.9051 0.492866 34.7498C0.922392 34.5667 0.960085 34.8712 1.15807 35.1495C2.51541 37.059 4.67878 37.3092 6.73446 37.7325C12.3995 38.8993 18.0359 38.365 23.6587 37.3816C27.9614 36.629 32.1494 35.4639 36.1962 33.81C36.5176 33.6787 36.9608 33.6899 36.6932 33.0831C35.7609 30.969 35.9112 28.8073 36.67 26.7035C37.841 23.4562 39.7488 20.8235 43.2546 19.8179C45.1384 19.2773 46.3946 19.8895 47.4997 21.4945C50.3159 25.5831 48.7705 29.9857 45.5596 32.6212C45.2717 32.8569 44.9843 33.0926 44.6972 33.3279C44.7213 33.4215 44.7457 33.5147 44.7697 33.6079Z"
            fill="currentColor"
          ></path>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M81.0396 5.3953C83.2444 4.7011 85.3067 3.72565 87.1586 2.33808C85.1191 3.35701 83.0795 4.37636 81.0396 5.3953ZM85.5975 14.6597C85.6493 12.3187 86.0995 10.0273 86.4594 7.72435C86.5133 7.38015 86.7585 7.00488 86.3261 6.70417C85.9106 6.41547 85.59 6.71039 85.3088 6.89553C83.775 7.90329 82.0312 8.40447 80.3603 9.09618C79.3049 9.53358 78.3237 10.1739 77.2256 10.5902C75.5349 11.2306 73.8901 11.9985 72.2457 12.7548C71.4123 13.138 70.4356 13.1143 69.7108 13.8446C68.9996 14.5607 68.2288 14.3449 67.3536 13.1516C66.9066 12.5428 66.7236 11.7309 67.484 11.1531C68.1095 10.678 68.7826 10.2431 69.4875 9.89973C74.1535 7.62784 78.8377 5.39364 83.5062 3.12713C84.5541 2.61849 85.5689 2.03861 86.592 1.47944C88.4522 0.462575 89.2395 0.735533 90.2336 2.61849C91.0053 4.08021 91.067 5.52287 90.548 7.07985C89.5494 10.077 88.6361 13.1028 88.2177 16.2486C88.134 16.879 88.139 17.5206 88.0798 18.1552C88.0119 18.89 87.6672 19.0776 87.0364 18.6452C85.6377 17.6875 85.5196 17.3649 85.5975 14.6597Z"
            fill="currentColor"
          ></path>
        </svg>
        <div className="text-center">
          <h1 className="text-2xl font-semibold">Create your account Now</h1>
          <p className="text-sm md:text-md font-regular">
            Take your business to next level
          </p>
        </div>
        <button className="bg-white  py-[0.5em] px-[2em] rounded-lg text-blue-600 text-lg font-bold transition-all hover:bg-blue-500 hover:text-white">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default index;