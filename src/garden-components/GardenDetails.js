import React, { useEffect, useState } from 'react';
import Unauthorized from './Unauthorized';
import Join from './Join';
import { useParams } from 'react-router-dom';
import { FaShare } from 'react-icons/fa';

const GardenDetails = () => {
  const [canjoin, setCanjoin] = useState(false);
  const [address, setAddress] = useState('');
  const [listeners, setListeners] = useState('0');
  const [filteredGarden, setFilteredGarden] = useState([]);
  const { gardenName } = useParams();
  const [garden, setGarden] = useState([]);

  useEffect(() => {
    const storedData = sessionStorage.getItem('allGardens');
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      const filteredData = parsedData.filter((data) => data.name === gardenName);
      setFilteredGarden(filteredData);
      setGarden(filteredData); // Set the garden state after filtering
    }
  }, [gardenName]);

  const accountChecker = async () => {
    const tronWeb = window.tronWeb;
    if (tronWeb) {
      try {
        const currentAddress = tronWeb.defaultAddress.base58;
        setAddress(currentAddress);
      } catch (error) {
        console.error('Error retrieving Tron address:', error);
      }
    }
  };

  useEffect(() => {
    accountChecker();
  }, []);

  const JoinSpace = () => {

    if (filteredGarden[0].tokenType !== "open") {
      alert("Oops you are not eligible to join this space");
      return;
    }

    if (listeners === '0') {
      setListeners('1');
    } else {
      setListeners('0');
    }
    console.log('hi');
    accountChecker();
    setCanjoin(!canjoin);
  };

  return (
    <>
      <div className="flex justify-center ">
        <div className="container font-body mx-auto m-4 max-w-3xl w-full grid gap-4 grid-cols-1">

          <div className="sticky top-0 z-10 w-full bg-gradient-to-b from-[#E8E3F5] via-[#EDEAFB] to-[#F7FAFC] ">
            <div className=" rounded-2xl p-4 shadow-lg">
              {garden.map((mygarden, index) => (
                <div key={index} className="flex sm:flex-row items-center justify-between">
                  <div className="relative h-32 w-32 sm:mb-0 mb-3">
                    <img
                      src={mygarden.image}
                      alt=""
                      className="w-32 h-32 object-cover rounded-2xl"
                    />
                  </div>
                  <div className="flex-auto sm:ml-5 justify-evenly">
                    <div className="flex items-center justify-between sm:mt-2">
                      <div className="flex flex-col">
                        <div className="text-lg font-heading  text-[#151e37] font-bold leading-none">
                          {mygarden.name}
                        </div>
                        <div className="text-gray-500 my-1">
                          <span className="mr-3  text-gray-600">
                            {mygarden.restriction}
                          </span>
                          <span className="mr-3  border-r border-gray-600 max-h-0" />
                          <span className="">
                            {mygarden.description}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between text-sm text-gray-500 ">
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 mr-2"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          {/* SVG Path */}
                        </svg>
                        <p>{listeners} Listeners</p>
                      </div>
                      <div className="flex items-center"></div>
                      <button
                        onClick={JoinSpace}
                        className="flex-no-shrink   bg-[#96a4ed] px-5 ml-4 py-2 text-md p-6 shadow-sm hover:shadow-lg font-medium  text-white rounded-full transition ease-in duration-300"
                      >
                        {canjoin ? 'Leave' : 'Join'}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {filteredGarden.length > 0 && filteredGarden[0].tokenType !== 'open' && <Unauthorized />}
          <h1>{listeners} Listeners</h1>
          <div className="flex justify-start items-center">
            {canjoin===true && <Join address={address} />}
          </div>
        </div>
      </div>
    </>
  );
};

export default GardenDetails;
