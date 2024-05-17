import React, { useState, useMemo, useEffect } from "react";


const CreateGarden = () => {
  // State variables to hold input values
  const [gardenName, setGardenName] = useState("");
  const [gardenDescription, setGardenDescription] = useState("");
  const [gardenRestriction, setGardenRestriction] = useState("");
  const [tokenType, setTokenType] = useState("trc20");
  const [tokenAddress, setTokenAddress] = useState("");
  const [link, setLink] = useState(null);

  const [selectedImage, setSelectedImage] = useState(null);


  const tronLink = useMemo(() => {
    return window.tronLink;
  }, []);


  const handleSignatureRequest = async () => {
    try {
      if (window.tronLink.ready) {
        const tronweb = tronLink.tronWeb;
        try {
          const message =
            "0x52eb47c176c307a1de2bb8c21f08051df3f2859d781ad30eb517a5ff07df7a8d"; // any hex string
          await tronweb.trx.sign(message);
        } catch (e) {}
      }
    } catch (e) {}
  };

  const updateSessionStorage = () => {

    const garden = {
        name: gardenName,
        description: gardenDescription,
        restriction: gardenRestriction,
        tokenType: tokenType,
        tokenAddress: tokenAddress,
        image: selectedImage,
      }
    

      const existingData = sessionStorage.getItem("allGardens");
      const existingArray = existingData ? JSON.parse(existingData) : [];
  
      // Append new transaction data to the existing array
      const updatedArray = [...existingArray, garden];
      console.log(updatedArray);
  
      // Store the updated array in sessionStorage
      sessionStorage.setItem("allGardens", JSON.stringify(updatedArray));

      setLink(
        "http://localhost:3000/gardename?=" + garden.name + "uid?=" + "vvuikd573"
      );

  };




  const handleGardenRegistration=()=>{
    updateSessionStorage()
    handleSignatureRequest()



  }




  const handleImageChange = (event) => {
    const file = event.target.files[0]; // Get the first file selected

    if (file) {
      // Create a FileReader object
      const reader = new FileReader();

      // Define a callback function to execute when reading is complete
      reader.onload = () => {
        const base64String = reader.result; // Get the base64 encoded string
        // Store the base64 string in sessionStorage
        setSelectedImage(base64String); // Update state with the base64 string
      };

      // Read the file as a data URL (base64 encoded string)
      reader.readAsDataURL(file);
    }
  };




  return (
    <div className="bg-gradient-to-b from-[#E8E3F5] via-[#EDEAFB] to-[#F7FAFC] font-body ">
      <div className="flex h-screen flex-col items-center justify-center">
        <div className="max-h-auto mx-auto max-w-3xl w-full">
          <div className="mb-8 space-y-3">
            <p className="text-4xl font-semibold font-heading  text-[#232e4d] ">
              Lets Create Your Garden
            </p>
            <p className="text-gray-500  ">
              Enter details to start your garden.
            </p>
          </div>
          <div className="w-full">
            <div className="mb-10 space-y-3">
              <div className="space-y-1">
                <label
                  className=" text-[#151e37] sm:text-lg text-sm font-semibold "
                  htmlFor="gardenName"
                >
                  Garden Name
                </label>
                <input
                  type="text"
                  className="border-input bg-background rounded-md border px-3 py-2 text-sm w-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300"
                  id="gardenName"
                  placeholder="Enter garden name"
                  value={gardenName}
                  onChange={(e) => setGardenName(e.target.value)}
                />
              </div>
              <div className="space-y-1">
                <label
                  className=" text-[#151e37] sm:text-lg text-sm font-semibold "
                  htmlFor="gardenDescription"
                >
                  Description
                </label>
                <textarea
                  className="border-input bg-background rounded-md border px-3 py-2 text-sm w-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300"
                  id="gardenDescription"
                  placeholder="Enter garden description"
                  value={gardenDescription}
                  onChange={(e) => setGardenDescription(e.target.value)}
                  rows="3"
                ></textarea>
              </div>
              <div className="space-y-1">
                <label
                  className=" text-[#151e37] sm:text-lg text-sm font-semibold "
                  htmlFor="gardenRestriction"
                >
                  Garden Restrictions
                </label>
                <input
                  type="text"
                  className="border-input bg-background rounded-md border px-3 py-2 text-sm w-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300"
                  id="gardenName"
                  placeholder="Who can join your garden? "
                  value={gardenRestriction}
                  onChange={(e) => setGardenRestriction(e.target.value)}
                />
              </div>
              <div className="space-y-1">
                <label
                  className=" text-[#151e37] sm:text-lg text-sm font-semibold "
                  htmlFor="tokenType"
                >
                  Gating
                </label>
                <select
                  className="border-input bg-background rounded-md border px-3 py-2 text-sm w-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300"
                  id="tokenType"
                  name="tokenType"
                  value={tokenType}
                  onChange={(e) => setTokenType(e.target.value)}
                >
                  <option value="trc20">TRC20 Token</option>
                  <option value="trc721">TRC721 Token</option>
                  <option value="poap">POAP</option>
                  <option value="daoMembers">TRON DAO Members Only</option>
                  <option value="open">Open for All</option>
                </select>
              </div>
              {tokenType !== "open" && (
                <div className="sace-y-1">
                  <label
                    className=" text-[#151e37] sm:text-lg text-sm font-semibold "
                    htmlFor="tokenAddress"
                  >
                    Token Address
                  </label>
                  <input
                    type="text"
                    className="border-input placeholder: bg-background rounded-md border px-3 py-2 text-sm w-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300"
                    id="tokenAddress"
                    placeholder="Enter token address"
                    value={tokenAddress}
                    onChange={(e) => setTokenAddress(e.target.value)}
                  />
                </div>
              )}
              <div className="space-y-1">
                <label
                  className=" text-[#151e37] sm:text-lg text-sm font-semibold "
                  htmlFor="gardenImage"
                >
                  Upload Garden Image
                </label>
                <input
                  type="file"
                  id="gardenImage"
                  name="gardenImage"
                  className="hidden"
                  onChange={handleImageChange}
                />
                <button
                  type="button"
                  onClick={() => document.getElementById("gardenImage").click()}
                  className="border-input bg-background rounded-md border px-3 py-2 text-sm w-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 hover:bg-gray-100"
                >
                  Choose File
                </button>
              </div>
              <button
                onClick={handleGardenRegistration}
                className="rounded-md bg-[#96a4ed] px-4 py-2  p-4 sm:text-lg text-sm font-semibold  text-white transition-colors  "
                type="submit"
              >
                Sign and Go live
              </button>
            </div>
          </div>
          <div className="text-center">
            <a className="text-blue-500" href="/signup">
              {link}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateGarden;
