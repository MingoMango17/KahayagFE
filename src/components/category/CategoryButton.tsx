import Image from "next/image";
import React from "react";

interface CategoryButtonProps {
  name: string;
  imgUrl: string;
  isSelected: boolean;
  onClick: (name: string) => void;
}

function CategoryButton({
  name,
  imgUrl,
  isSelected,
  onClick,
}: CategoryButtonProps) {
  return (
    <div
      className={`rounded-full ${
        isSelected ? "bg-maroon text-white" : "bg-grayButton text-gray-700"
      } w-[200px] h-[60px] flex items-center p-2 cursor-pointer hover:bg-maroon hover:text-white hover:drop-shadow-sm`}
      onClick={() => onClick(name)}
    >
      {imgUrl && (
        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
          <Image src={imgUrl} width={100} height={100} alt="category icon" />
        </div>
      )}

      <div className="flex-grow text-center font-bold">
        <p>{name}</p>
      </div>
    </div>
  );
}

export default CategoryButton;
