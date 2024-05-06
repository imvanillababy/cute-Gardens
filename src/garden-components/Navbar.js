import React, { useEffect ,useState } from "react";
import { Link } from "react-router-dom";


const Navbar = () => {

  const [address, setAddress] = useState("");



  const connectWallet = async () => {
    const tronLink = window.tronLink;

    if (window.tronLink.ready) {
      try {
        const tronWeb = tronLink.tronWeb;
        const addr = await tronWeb.defaultAddress.base58;
        setAddress(addr);

        if (!addr) {
          alert('Please connect TronLink and try again.');
          return;
        }


      } catch (error) {
        console.error('Error signing message:', error);
      }
    } else {
      alert('TronLink is not installed or not ready.');
    }
  };

  useEffect(() => {
    connectWallet()
  },[])


  return (
    <div>
      <header className="sticky inset-0 z-50 border-b border-slate-100 bg-gradient-to-b from-[#E8E3F5] via-[#EDEAFB] to-[#F7FAFC] backdrop-blur-lg">
        <nav className="mx-auto flex max-w-6xl gap-8 px-6 transition-all duration-200 ease-in-out lg:px-12 py-4">
          <div className="relative flex items-center">
          </div>
          <ul className="hidden items-center justify-center tracking-tighter gap-6 md:flex">
            <li className="pt-1.5 font-dm text-sm font-medium text-[#10172A]">
            <Link to="/gardens"> Explore Gardens</Link>
            </li>
            <li className="pt-1.5 font-dm text-sm font-medium text-[#10172A]">
            <Link to="/create"> Create Gardens</Link>
            </li>
          </ul>
          <div className="flex-grow"></div>
          <div className="hidden items-center justify-center gap-6 md:flex">
            <a href="#" className="font-dm text-sm font-medium text-[#10172A]">
              {address.toString().slice(0,6) + "..." + address.toString().slice(-4)}
            </a>
            <button
              onClick={connectWallet}
              className="rounded-md bg-[#8B5CF6] px-3 py-1.5 font-dm text-sm font-medium text-white shadow-md  transition-transform duration-200 ease-in-out hover:scale-[1.03]"
            >
            {!address ? "Connect Wallet" : 'Connected'}
            </button>
          </div>
          <div className="relative flex items-center justify-center md:hidden">
            <button type="button">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
                className="h-6 w-auto text-slate-900"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                ></path>
              </svg>
            </button>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
