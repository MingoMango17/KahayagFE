import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="w-full">
      <div className="bg-yellowFooter py-3 flex justify-center items-center flex-col">
        <p className="text-2xl font-bold text-center">
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

        <p className="text-xs mt-3 text-grayText font-normal">
          © 2024 Your Company. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
