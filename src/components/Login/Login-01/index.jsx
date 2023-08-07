import React from "react";

const index = () => {
  const inputClass =
    "mt-[5px] mb-[8px] outline-none w-full border border-gray-400 rounded-md p-[8px] text-black !font-thin !font-mono focus:border-blue-600";
  return (
    <div className="flex flex-center max-h-screen overflow-hidden ">
      <div
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dGVhbSUyMHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60')",
        }}
        className="bg-no-repeat bg-cover w-[50vw] h-[100vh] relative hidden md:block"
      >
        <div className="bg-gradient-to-b from-[rgba(255,0,0,0)] to-[#000000]   w-[50vw] h-[100vh] "></div>
        <div className="absolute bottom-0 left-0 text-white w-[45vw] p-[30px] mb-[20px]">
          <h1 className="text-gray-300  text-[35px] mb-[30px]">
            <span className="text-blue-600 !w-[50vw] font-bold">
              PrimeKitUI
            </span>{" "}
            Build your app in seconds
          </h1>
          <p className="leading-relaxed">
            an open-source project that combines the power of React and the
            flexibility of Tailwind CSS to streamline your web development
            experience
          </p>
        </div>
      </div>
      <div className="font-arial flex justify-center items-center w-screen sm:w-[50vw] h-[100vh]">
        <div className="z-[100] w-[90vw] sm:w-[80%]  h-[350px] bg-white rounded-md flex flex-col justify-center items-start gap-[10px] px-[10px] sm:px-[40px] ">
          <div className="relative">
            <img
              src={
                "https://github-production-user-asset-6210df.s3.amazonaws.com/69359301/257009420-f7ead7fe-6c88-4613-b61c-d0aa0b83d8ae.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAIWNJYAX4CSVEH53A%2F20230729%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230729T202858Z&X-Amz-Expires=300&X-Amz-Signature=2094c8d01b698bcf23ef8c1371b18f2e00b748350026f1325157a591a31e53e2&X-Amz-SignedHeaders=host&actor_id=69359301&key_id=0&repo_id=608093399"
              }
              alt="logo "
              className="w-[8rem]"
            />
          </div>

          <h1 className="text-[25px] font-bold">Log In</h1>
          <form className="w-full">
            <div>
              <label>Email : </label>
              <br />

              <input
                type="text"
                className={inputClass}
                placeholder="email"
              ></input>
            </div>
            <div>
              <label>Password :</label>

              <input
                type="password"
                className={inputClass}
                placeholder="password"
              />
            </div>

            <button className="block text-center w-full sm:w-[150px] bg-blue-600 text-white my-[10px] rounded-md p-[7px] hover:bg-blue-800">
              <p>Login</p>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default index;
