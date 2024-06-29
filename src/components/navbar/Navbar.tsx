import React from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <div>
      <div className="px-10 py-3 ml bg-maroon flex text-white justify-between w-screen">
        <div>
          <Image
            src="/logo.svg"
            alt="App Logo"
            width={150}
            height={36}
            priority
          />
        </div>
        <div className="flex items-center justify-center font-bold">
          <button className="mx-10 text-shadow-lg hover:text-[#FFAE00]">
            <span className="text-shadow-sm">Home</span>
          </button>
          <Link href="/menu">
            <button className="mx-10 hover:text-[#FFAE00]">Menu</button>
          </Link>
          <button className="mx-10 hover:text-[#FFAE00]">Special Offers</button>
          <button className="mx-10 mr-20 hover:text-[#FFAE00]">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
