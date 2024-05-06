import React, { useState, useMemo, useEffect } from "react";

import { db } from "./Firebase";
import { collection, addDoc } from "firebase/firestore";

import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

import { storage } from "./Firebase";
import { v4 } from "uuid";

const CreateGarden = () => {
  // State variables to hold input values
  const [gardenName, setGardenName] = useState("");
  const [gardenDescription, setGardenDescription] = useState("");
  const [gardenRestriction, setGardenRestriction] = useState("");
  const [tokenType, setTokenType] = useState("trc20");
  const [tokenAddress, setTokenAddress] = useState("");
  const [imageFile, setImageFile] = useState("");
  const [link, setLink] = useState(null);

  const [selectedImage, setSelectedImage] = useState(null);

  const [gardenData, setGardenData] = useState(null);


  const handleGardenRegistration = async () => {
    try {
      handleSignatureRequest();
    } catch (e) {
      console.log(e.message);
    }

    await addDoc(usersCollectionRef, {
      gardenName,
      gardenDescription,
      gardenRestriction,
      tokenType,
      tokenAddress,
      imageFile,
    });

    // Reset div state after submission if needed

    setLink(
      "http://localhost:3000/gardename?=" + gardenName + "uid?=" + "vvuikd573"
    );

    setGardenName("");
    setGardenDescription("");
    setGardenRestriction("");
    setTokenType("trc20");
    setTokenAddress("");
    setGardenRestriction("");
    setImageFile("");
  };


  // useEffect hook to retrieve data from sessionStorage on component mount
  useEffect(() => {
    // Retrieve the stringified array from sessionStorage
    const storedData = sessionStorage.getItem("gardenData");
    console.log(storedData)

    if (storedData) {
      // Parse the string back into a JavaScript array
      const parsedData = JSON.parse(storedData);

      // Set the retrieved garden data in the component state
      setGardenData(parsedData);
    }
  }, [handleGardenRegistration]);

  const updateSessionStorage = () => {
    const gardenData = [
      gardenName,
      gardenDescription,
      gardenRestriction,
      tokenType,
      tokenAddress,
      selectedImage,
    ];
    sessionStorage.setItem("gardenData", JSON.stringify(gardenData));
  };

  // useEffect hook to watch for changes in state variables and update sessionStorage
  useEffect(() => {
    updateSessionStorage();
  }, [
    gardenName,
    gardenDescription,
    gardenRestriction,
    tokenType,
    tokenAddress,
    selectedImage,
  ]);

  // Function to handle file input change
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

  const usersCollectionRef = collection(db, "Gardens");

  
  const handleSubmit = (e) => {
    let image = e.target.files[0];
    const imageRef = ref(storage, `images`);
    console.log(image, imageRef);

    uploadBytes(imageRef, image)
      .then((snapshot) => {
        getDownloadURL(snapshot.ref).then((url) => {
          setImageFile((prev) => [...prev, url]);
          console.log(url);
        });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className="bg-gradient-to-b from-[#E8E3F5] via-[#EDEAFB] to-[#F7FAFC] tracking-tighter">
      <div className="flex h-screen flex-col items-center justify-center">
        <div className="max-h-auto mx-auto max-w-3xl w-full">
          <div>
            {sessionStorage.getItem("gardenData")&&gardenData.map((garden) => {
              <div>
                <h1>{garden.gardenName}</h1>
                <img
                  src={garden.selectedImage}
                  alt="Uploaded Image"
                  style={{
                    maxWidth: "300px",
                    maxHeight: "300px",
                    marginTop: "20px",
                  }}
                />
              </div>;
            })}
          </div>
          <div className="mb-8 space-y-3">
            <p className="text-4xl font-semibold tracking-tighter text-[#151e37] ">
              Create Your Garden
            </p>
            <p className="text-gray-500 tracking-tighter ">
              Enter details to start your garden.
            </p>
          </div>
          <div className="w-full">
            <div className="mb-10 space-y-3">
              <div className="space-y-1">
                <label
                  className=" text-[#151e37] sm:text-lg text-sm font-semibold tracking-tighter"
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
                  className=" text-[#151e37] sm:text-lg text-sm font-semibold tracking-tighter"
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
                  className=" text-[#151e37] sm:text-lg text-sm font-semibold tracking-tighter"
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
                  className=" text-[#151e37] sm:text-lg text-sm font-semibold tracking-tighter"
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
                    className=" text-[#151e37] sm:text-lg text-sm font-semibold tracking-tighter"
                    htmlFor="tokenAddress"
                  >
                    Token Address
                  </label>
                  <input
                    type="text"
                    className="border-input placeholder:tracking-tighter bg-background rounded-md border px-3 py-2 text-sm w-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300"
                    id="tokenAddress"
                    placeholder="Enter token address"
                    value={tokenAddress}
                    onChange={(e) => setTokenAddress(e.target.value)}
                  />
                </div>
              )}
              <div className="space-y-1">
                <label
                  className=" text-[#151e37] sm:text-lg text-sm font-semibold tracking-tighter"
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
                className="rounded-md bg-[#8B5CF6] px-4 py-2  sm:text-lg text-sm font-semibold tracking-tighter text-white transition-colors  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300"
                type="submit"
              >
                Go live
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
