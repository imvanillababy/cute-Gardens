import React, { useEffect, useState } from "react";
import Garden from "./Garden";
import { Link } from "react-router-dom";

const LiveGardens = () => {
 
  const [gardenData, setGardenData] = useState([]);




  const handleGardenRegistration=()=>{
    const storedData = sessionStorage.getItem("allGardens");
    console.log(storedData);

    if (storedData) {
      // Parse the string back into a JavaScript array
      const parsedData = JSON.parse(storedData);

      // Set the retrieved garden data in the component state
      setGardenData(parsedData);
    }



  }

  useEffect(() => {
    // Retrieve the stringified array from sessionStorage
    handleGardenRegistration()
  }, []);

  // console.log(gardenData.name)

  return (
    <div className="container mx-auto py-8  mt-16 ">
      <h1 className="ssm:px-44 text-center text-[#10172A] text-4xl sm:text-6xl font-semibold tracking-tighter">Explore live spaces with cute
      <span className="underline leading-8 underline-offset-8	decoration-8 decoration-[#8B5CF6]">{" "}  Gardens</span></h1>

    <div className="flex flex-wrap justify-center py-8  mt-16">
      {gardenData.map((livegarden) => (
        <div className="bg-white shadow-md  rounded-3xl p-4">
        <div className="flex-none lg:flex">
          <div className=" h-full w-full lg:h-48 lg:w-48   lg:mb-0 mb-3">
            <img
              src={livegarden.image}
              alt="Just a flower"
              className=" w-full  object-scale-down lg:object-cover  lg:h-48 rounded-2xl"
            />
          </div>
          <div className="flex-auto ml-3 justify-evenly py-2">
            <div className="flex flex-wrap ">
              <div className="w-full flex-none text-sm text-green-400 tracking-tighter  font-medium ">
                live
              </div>
              <h2 className="flex-auto text-md font-medium tracking-tighter text-[#151e37]">
                {livegarden.name}
              </h2>
            </div>
            <p className="mt-3"></p>
            <div className="flex py-4  text-sm text-gray-500">
              <div className="flex-1 inline-flex items-center">
               
                <p className="tracking-tighter  font-semibold text-[#151e37]">
                  {livegarden.restriction}
                </p>
              </div>
              <div className="flex-1 inline-flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
                <p className="tracking-tighter text-[#151e37]">05-25-2021</p>
              </div>
            </div>
            <div className="flex p-4 pb-2 border-t border-gray-200 "></div>
            <div className="flex space-x-3 text-sm font-medium">
              <div className="flex-auto flex space-x-3">
                <button className=" tracking-tighter text-[#151e37]mb-2 md:mb-0 bg-white px-4 py-2 shadow-sm border  rounded-full hover:bg-gray-100 inline-flex items-center space-x-2 ">
                  <span>0 Listeners</span>
                </button>
              </div>
              {/* <button 
                      className="mb-2 md:mb-0 bg-[#8B5CF6] px-5 py-2 shadow-sm tracking-wider text-white rounded-full hover:bg-gray-800"
                      type="button" aria-label="like">Join</button> */}
  
              <Link
                className="mb-2 md:mb-0 bg-[#8B5CF6] px-5 py-2 shadow-sm tracking-wider text-white rounded-full hover:bg-gray-800"
                to={`/gardens/${livegarden.name}`}
              >
                Listen
              </Link>
            </div>
          </div>
        </div>
      </div>
      ))}
    </div>
  </div>


  );
};

export default LiveGardens;
