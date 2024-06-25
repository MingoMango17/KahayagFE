import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="w-full">
      <div className="bg-yellowFooter py-3 flex justify-center items-center flex-col">
        <p className="text-xl font-bold text-center">
          Are you ready to order with the best deals?
        </p>
        <button className="py-1 text-white bg-orange-600 font-bold w-80 mt-2">
          PROCEED TO ORDER
        </button>
      </div>
      <div className="bg-black py-4 flex  flex-col">
        <div className="flex justify-center">
          <Image
            src="/kahayag2.svg"
            alt="App Logo Orange"
            width={150}
            height={36}
          />
        </div>
        <div className="company-section text-white justify-center px-20 py-3 flex flex-row mt-3">
          <div className="flex flex-1 flex-col">
            <h1 className="text-xl font-bold pb-2">Company</h1>
            <p className="text-gray-500 font-thin">About Us</p>
            <p className="text-gray-500 font-thin">Team</p>
            <p className="text-gray-500 font-thin">Careers</p>
            <p className="text-gray-500 font-thin">Blog</p>
          </div>
          <div className="flex flex-1 flex-col">
            <h1 className="text-xl font-bold pb-2">Contact</h1>
            <p className="text-gray-500 font-thin">Help & Support</p>
            <p className="text-gray-500 font-thin">Partner with us</p>
          </div>
          <div className="flex flex-1 flex-col">
            <h1 className="text-xl font-bold pb-2">Legal</h1>
            <p className="text-gray-500 font-thin">Terms & Conditions</p>
            <p className="text-gray-500 font-thin">Refund & Cancellation</p>
            <p className="text-gray-500 font-thin">Privacy Policy</p>
            <p className="text-gray-500 font-thin">Cookie Policy</p>
          </div>
          <div className="flex flex-1 flex-col">
            <h1 className="text-base font-bold pb-2 text-gray-700">
              FOLLOW US
            </h1>
            <div className="icons flex-row flex gap-5">
              <Image src="/insta.svg" alt="Insta Icon" width={21} height={21} />
              <Image src="/fb.svg" alt="Fb Icon" width={21} height={21} />
              <Image src="/twitter.svg" alt="X Icon" width={21} height={21} />
            </div>
          </div>
        </div>

        <p className="text-xs mt-5 text-grayText font-normal px-20">
          © 2024 Kahayag. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
