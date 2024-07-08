"use client"
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="w-full" >
      {/* Desktop Navbar */}
      <div className="px-15 py-3 ml bg-maroon text-white justify-between items-center w-full hidden md:flex">
        <Image
          src="/logo.svg"
          alt="App Logo"
          width={150}
          height={36}
          className="ml-10"
        />
        <div className="flex items-center justify-center font-bold">
          <Link href="/">
            <button className="mx-10 text-shadow-lg hover:text-[#FFAE00]">
              <span className="text-shadow-sm">Home</span>
            </button>
          </Link>
          <Link href="/menu">
            <button className="mx-10 hover:text-[#FFAE00]">Menu</button>
          </Link>
          <button className="mx-10 hover:text-[#FFAE00]">About Us</button>
          <button className="mx-10 mr-20 hover:text-[#FFAE00]">
            Contact
          </button>
        </div>
      </div>

      {/* Mobile Menu Toggle */}
      <div className="bg-maroon px-4 py-3 flex text-white justify-between items-center w-full md:hidden mr-10">
        <div>
          <Image
            src="/logo.svg"
            alt="App Logo"
            width={150}
            height={36}
            priority
          />
        </div>
        <div className="flex items-center">
          <button
            className="text-white hover:text-[#FFAE00]"
            onClick={toggleMenu}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {showMenu ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {showMenu && (
        <div className="top-full left-0 right-0 bg-maroon font-semibold border-b-1 mb-2 md:hidden">
          <div className="flex flex-col items-center">
            <Link href="/" className="w-full">
              <button
                className="block w-full text-white py-2  hover:bg-yellow-500 hover:text-black"
                onClick={toggleMenu}
              >
                Home
              </button>
            </Link>
            <Link href="/menu" className="w-full">
              <button
                className="block w-full text-white py-2  hover:bg-yellow-500 hover:text-black "
                onClick={toggleMenu}
              >
                Menu
              </button>
            </Link>
            <button
              className="block w-full text-white py-2 t hover:bg-yellow-500 hover:text-black"
              onClick={toggleMenu}
            >
              Special Offers
            </button>
            <button
              className="block w-full text-white py-2 hover:bg-yellow-500 hover:text-black"
              onClick={toggleMenu}
            >
              Contact Us
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
