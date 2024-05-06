import React from "react";
import { useNavigate } from "react-router-dom";

const Sign = () => {

  const navigate=useNavigate()


const handleSignatureRequest = async () => {

  const tronLink = window.tronLink;




    if (window.tronLink.ready) {
      const tronweb = tronLink.tronWeb;
      try {
        const message = "0x52eb47c176c307a1de2bb8c21f08051df3f2859d781ad30eb517a5ff07df7a8d"; // any hex string
        const signedString = await tronweb.trx.sign(message);
      } catch (e) {}
    }

    navigate('/gardens')



};

  


  return (
    <div>
      <section className="pb-12 bg-gradient-to-b from-[#E8E3F5] via-[#EDEAFB] to-[#F7FAFC]">
        <div className="items-center pt-12 px-8 mx-auto max-w-7xl lg:px-16 md:px-12">
          <div className="justify-center w-full text-center lg:p-10 max-auto">
            <div className="justify-center w-full mx-auto">
              <div className="flex flex-col items-center justify-center max-w-xl gap-3 mx-auto lg:flex-row">
                <img
                  className="w-32 h-32 rounded-full border border-[#E8E3F4]"
                  src="https://i.pinimg.com/736x/97/f0/cb/97f0cb0bd91313be32a74ff14584d0f7.jpg"
                />
              </div>

              <p className="mt-4 sm:px-32 text-[#10172A] sm:text-xl text-sm font-semibold tracking-tighter">
                by @i'm VanillaBaby 🏝️
              </p>

              <p className="sm:mt-8 mt-3 sm:px-44 text-[#10172A] text-4xl sm:text-6xl font-semibold tracking-tighter">
                Onchain{" "}
                <span className="underline leading-8 underline-offset-8	decoration-8 decoration-[#8B5CF6]">
                  spaces
                </span>{" "}
                utilizing token gating method.
              </p>

              
              <p className="sm:mt-8 mt-2.5 text-[#10172A] sm:px-72  sm:leading-loose text-lg font-normal tracking-tighter">
              cuteGarden’s <span className="font-semibold">goal is to establish on-chain community rooms with a token-gated system {""}</span>
                 <span className="font-semibold">enabling token holders to curate exclusive spaces</span> ,
 
              </p>
            </div>
          </div>
        </div>

        <div className="text-center space-x-4 mt-6">
          <button onClick={handleSignatureRequest} className="bg-[#8B5CF6] translate-y-1 text-[#fff] sm:text-lg text-xs font-bold py-2.5 px-6  rounded-full inline-flex items-center">
           Sign With Tronlink
          </button>
        </div>
      </section>
    </div>
  );
};

export default Sign;
