import React, { useEffect, useState ,useMemo } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [address, setAddress] = useState("");
  const [isConnecting, setIsConnecting] = useState(false);

  const tronWeb=useMemo(() => {
    return window.tronWeb
  },[])

  const connectWallet = async () => {
    setIsConnecting(true);

    try {
      

      if (window.tron && window.tronWeb) {
        const currentAccount = await tronWeb.trx.getAccount();

        if (!currentAccount) {
          alert('Please connect TronLink and try again.');
          setIsConnecting(false);
          return;
        }

        const address = window.tronWeb.defaultAddress.base58;

        setAddress(currentAccount);
        sessionStorage.setItem("address", address );
      } else {
        alert('TronLink is not installed or not ready.');
      }
    } catch (error) {
      console.error('Error connecting wallet:', error);
      alert('Failed to connect wallet. Please try again.');
    }

    setIsConnecting(false);
  };



  useEffect(() => {
    const storedAddress = sessionStorage.getItem("address");
    if (storedAddress) {
      setAddress(storedAddress);
    }
  }, []);

  return (
    <div>
      <header className="sticky inset-0 z-50 font-body  bg-gradient-to-b from-[#E8E3F5] via-[#EDEAFB] to-[#F7FAFC] backdrop-blur-lg">
        <nav className="mx-auto flex max-w-6xl gap-8 px-6 transition-all duration-200 ease-in-out lg:px-12 py-4">
          <div className="relative flex items-center">
            {/* Logo or other content */}
          </div>
          <ul className="hidden items-center justify-center  gap-6 md:flex">
            <li className="pt-1.5 font-dm text-md font-medium text-[#10172A]">
              <Link to="/gardens">Explore Gardens</Link>
            </li>
            <li className="pt-1.5 font-dm text-md font-medium text-[#10172A]">
              <Link to="/create">Create Gardens</Link>
            </li>
          </ul>
          <div className="flex-grow"></div>
          <div className="hidden items-center justify-center gap-6 md:flex">
            {address ? (
              <a href="#" className="font-dm text-md font-medium text-[#10172A]">
                {sessionStorage.getItem("address").slice(0, 6) + "..." + sessionStorage.getItem("address").slice(-4)}
              </a>
            ) : null}
            <button
              onClick={connectWallet}
              disabled={isConnecting}
              className={`rounded-md font-heading px-3 py-1.5 p-6 font-dm text-md font-medium text-white shadow-md transition-transform duration-200 ease-in-out hover:scale-[1.03] ${
                address ? "bg-[#96a4ed]" : "bg-[#96a4ed]"
              }`}
            >
              {isConnecting ? "Connecting..." : sessionStorage.getItem("address") ? "Connected" : "Connect Wallet"}
            </button>
          </div>
          <div className="relative flex items-center justify-center md:hidden">
            <button type="button">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
                className="h-6 w-auto text-slate-900"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"></path>
              </svg>
            </button>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
