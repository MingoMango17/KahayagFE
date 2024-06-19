import React from "react";
import Image from "next/image";

interface Params {
  title: string;
  desc: string;
  imageUrl: string;
}

const LandingCard = ({ title, desc, imageUrl }: Params) => {
  return (
    <div className="flex flex-col text-center items-center w-2/5 p-10 mx-10">
      <Image src={imageUrl} alt="Landing Card" width={150} height={300} />
      <p className="font-bold">{title}</p>
      <p className="font-thin text-sm">{desc}</p>
    </div>
  );
};

export default LandingCard;
