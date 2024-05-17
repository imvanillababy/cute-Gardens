import React from "react";
import { IoMdSad } from "react-icons/io";

const Unauthorized = () => {
  return (
    <div>
      <div className="flex  items-center  justify-center font-body  bg-gradient-to-b from-[#E8E3F5] via-[#EDEAFB] to-[#F7FAFC]">
        <div className="flex flex-col p-4 relative items-center justify-center bg-gradient-to-b from-[#E8E3F5] via-[#EDEAFB] to-[#F7FAFC] rounded-2xl">
          <div className="text-center p-5 flex-auto justify-center">
            <div className=" flex justify-center items-center">
              <IoMdSad className="text-[#c0c5eb] text-8xl text-center" />
            </div>

            <h2 className="text-4xl  text-[#10172A] font-heading   font-semibold  py-4 ">
              Oops ! User is unauthorized
            </h2>
            <p className="text-lg text-[#44588e]   font-semibold  px-8">
              You dont meet the enough criteria to to join this garden
            </p>
          </div>
          <div className="p-3 mt-2 text-center space-x-4 md:space-x-0 md:block">
            <button className="mb-2 md:mb-0 bg-[#ACBEFC] px-5 py-2 text-md shadow-sm font-medium  text-white rounded-full hover:shadow-lg hover:bg-gray-800 transition ease-in duration-300">
              Go Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Unauthorized;
