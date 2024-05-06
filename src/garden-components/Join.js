import React, { useState } from "react";
import doodles from "../assets/doodles.png";

const Join = ({ address }) => {
  const [stream, setStream] = useState(null);

  const handleToggleMicrophone = async () => {
    try {
      const userMedia = await navigator.mediaDevices.getUserMedia({ audio: true });
      setStream(userMedia);
    } catch (error) {
      console.error("Error accessing microphone:", error);
    }
  };

  const isMicrophoneMuted = stream === null;

  return (
    <div className="rounded-xl overflow-hidden bg-white shadow-lg p-12 flex flex-col items-center">
      <div className="mb-4">
        <img
          className="w-24 h-24 rounded-full object-cover shadow-md hover:shadow-lg cursor-pointer transition transform hover:scale-105"
          src={doodles}
          alt="Profile"
        />
      </div>
      <div className="text-center">
        <p className="text-md text-gray-700 font-bold mb-2">{address.toString().slice(0, 4) + "..." + address.toString().slice(-4)}</p>
        <button
          disabled={!isMicrophoneMuted}
          onClick={handleToggleMicrophone}
          className={`flex items-center justify-center w-24 h-8 rounded-full ${
            isMicrophoneMuted ? "bg-gray-200 text-gray-700" : "bg-blue-500 text-white"
          } text-xs focus:outline-none`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 mr-1"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z"
              clipRule="evenodd"
            ></path>
          </svg>
          <span>{isMicrophoneMuted ? "Mute" : "Unmute"}</span>
        </button>
      </div>
    </div>
  );
};

export default Join;
