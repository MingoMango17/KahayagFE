"use client";
import { useState } from "react";
import Image from "next/image"; // Assuming you are using Next.js for the Image component

const SearchFood = ({
  title,
  imageUrl,
}: {
  title: string;
  imageUrl: string;
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`flex flex-col items-center p-5 rounded-lg cursor-pointer border-2 shadow-md ${
        isHovered
          ? " text-black transform hover:scale-105 transition-all duration-300 ease-in-out"
          : "bg-transparent text-black"
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Image
        src={imageUrl}
        width={200}
        height={200}
        className="object-contain rounded-full" 
        alt="search food"
      />
      <p className="font-bold mt-2 ">{title}</p>
    </div>
  );
};

export default SearchFood;
