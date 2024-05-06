import React from "react";
import { IoMdSad } from "react-icons/io";

const Unauthorized = () => {
  return (
    <div>
      <div className="flex  items-center  justify-center  bg-gradient-to-b from-[#E8E3F5] via-[#EDEAFB] to-[#F7FAFC]">
        <div className="flex flex-col p-4 relative items-center justify-center bg-gradient-to-b from-[#E8E3F5] via-[#EDEAFB] to-[#F7FAFC] rounded-2xl">
          <div className="text-center p-5 flex-auto justify-center">
            <div className=" flex justify-center items-center">
              <IoMdSad className="text-[#8B5CF6] text-8xl text-center" />
            </div>

            <h2 className="text-4xl  text-[#10172A]   font-semibold tracking-tighter py-4 ">
              Oops ! User is Unauthorized
            </h2>
            <p className="text-lg text-[#44588e]   font-semibold tracking-tighter px-8">
              You dont meet the enough criteria to to join this garden
            </p>
          </div>
          <div className="p-3 mt-2 text-center space-x-4 md:space-x-0 md:block">
            <button className="mb-2 md:mb-0 bg-[#8B5CF6] px-5 py-2 text-sm shadow-sm font-medium tracking-wider border-2  hover:border-gray-700 text-white rounded-full hover:shadow-lg hover:bg-gray-800 transition ease-in duration-300">
              Go Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Unauthorized;
